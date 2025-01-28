import * as userService from "./user.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";
import passport from "passport";
import {
  createUserTokens,
  decodeToken,
} from "../../common/services/passport-jwt.service";
import { IUser } from "./user.dto";
import { sendEmail } from "../../common/services/email.service";
import bcrypt from "bcrypt";

/**
 * Creates a new user.
 * @param {Request} req - The request object containing the user data.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the created user object.
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  res.send(createResponse(result, "User created successfully"));
});

/**
 * Logs in an existing user and generates JWT tokens.
 * @param {Request} req - The request object containing login credentials.
 * @param {Response} res - The response object to send the JWT tokens and user details.
 * @returns {Promise<void>} The response will contain access and refresh tokens, and user details.
 */
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  passport.authenticate(
    "login",
    async (err: Error | null, user: any | undefined, info: any) => {
      if (err || !user) {
        return res.status(401).json({
          message: info?.message || "Authentication failed",
        });
      }

      const { accessToken, refreshToken } = createUserTokens(user);
      await userService.editUser(user._id, { accessToken, refreshToken });
      delete user.accessToken;
      delete user.refreshToken;
      res.send(
        createResponse({ accessToken, refreshToken, user }, "Login successful"),
      );
    },
  )(req, res);
});

/**
 * Updates a user accessToken.
 * @param {Request} req - The request object containing user data to accessToken.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the updated user token.
 */
export const genRefToken = asyncHandler(async (req: Request, res: Response) => {
  const refToken = req.headers.authorization?.replace("Bearer ", "");
  if (refToken) {
    const user = await userService.getUserByEmail(req?.user?.email || "");
    if (refToken === user?.refreshToken) {
      const { accessToken, refreshToken } = createUserTokens(user);
      await userService.editUser(user._id, { accessToken, refreshToken });
      delete user.accessToken;
      delete user.refreshToken;
      res.send(
        createResponse(
          { accessToken, refreshToken, user },
          "Token Refresh successful",
        ),
      );
    } else {
      res.send(createResponse("Wrong Token"));
    }
  } else {
    res.send(createResponse("Token Not Found"));
  }
});

/**
 * Sends a link to the user to update the password.
 * @param {Request} req - The request object containing user data to update.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the status of the email sending process.
 */
export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const user = (await userService.getUserByEmail(
      req?.body?.email || "",
    )) as IUser & { code: string };
    const code = Math.floor(100000 + Math.random() * 900000);
    if (user?.email === req?.body.email) {
      user.code = code.toString();
      const { accessToken, refreshToken } = createUserTokens(
        user as Omit<IUser, "password">,
      );
      console.log({ user, code });
      const sendMail = await sendEmail({
        from: process.env.MAIL_EMAIL,
        to: user?.email,
        subject: `Forgot Password | Social-Media`,
        text: req.body.message,
        html: `<h2>Hi ${user?.name},</h2><h3>Forgot Password</h3><br/><p>Link: Token(${accessToken}) </p><br/><p>code: ${code}</p>`,
      });
      if (sendMail) res.send(createResponse(sendEmail, "Check Your Mail"));
      else res.send(createResponse(null, "Something went wrong"));
    } else res.send(createResponse(null, "EMail Not found"));
  },
);

/**
 * Resets the user's password using the token and code.
 * @param {Request} req - The request object containing user data to update.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will confirm the password reset.
 */
export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    console.log(token);
    if (token) {
      const user = decodeToken(token) as IUser & { code: string };
      console.log({ body: req?.body?.code?.toString(), user: user });
      if (req?.body?.code?.toString() === user?.code?.toString()) {
        delete req.body.code;
        req.body.password = await bcrypt.hash(req.body.password, 12);
        const result = await userService.editUser(user._id, req.body);
        res.send(createResponse(result, "Password Saved"));
      } else {
        res.send(createResponse(null, "Incorrect Code"));
      }
    } else res.send(createResponse(null, "No Token Found"));
  },
);

/**
 * Updates a user by its ID.
 * @param {Request} req - The request object containing user data to update.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the updated user object.
 */
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req?.user?._id || "";
  if (id === req.params.id) {
    if (req.body.password)
      req.body.password = await bcrypt.hash(req.body.password, 12);
    const result = await userService.updateUser(req.params.id, req.body);
    res.send(createResponse(result, "User updated successfully"));
  } else {
    res.send(createResponse(null, "User trying to update other's data"));
  }
});

/**
 * Partially updates a user by its ID.
 * @param {Request} req - The request object containing user data to update.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the updated user object.
 */
export const editUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req?.user?._id || "";
  if (id === req.params.id) {
    if (req.body.password)
      req.body.password = await bcrypt.hash(req.body.password, 12);
    const result = await userService.editUser(req.params.id, req.body);
    res.send(createResponse(result, "User updated successfully"));
  } else {
    res.send(createResponse(null, "User trying to update other's data"));
  }
});

/**
 * Deletes a user by its ID.
 * @param {Request} req - The request object containing user ID to delete.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will confirm the deletion of the user.
 */
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req?.user?._id || "";
  if (id === req.params.id) {
    const result = await userService.deleteUser(req.params.id);
    res.send(createResponse(result, "User deleted successfully"));
  } else {
    res.send(createResponse(null, "User trying to delete other's data"));
  }
});

/**
 * Retrieves a user by its ID.
 * @param {Request} req - The request object containing the user ID.
 * @param {Response} res - The response object to send the user details.
 * @returns {Promise<void>} The response will contain the user object or an error message.
 */
export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserById(req.params.id);
  res.send(createResponse(result));
});

/**
 * Retrieves all users.
 * @param {Request} req - The request object to fetch users.
 * @param {Response} res - The response object to send the list of users.
 * @returns {Promise<void>} The response will contain a list of all users.
 */
export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getAllUser();
  res.send(createResponse(result));
});
