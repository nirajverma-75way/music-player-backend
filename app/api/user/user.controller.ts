import * as userService from "./user.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import passport from "passport";
import { createUserTokens } from "../../common/services/passport-jwt.service";

/**
 * Creates a new user.
 * @param {Request} req - The request object containing the user data.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the created user object.
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.createUser(req.body);
    res.send(createResponse(result, "User created successfully"))
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
    
          res.send(
            createResponse({ accessToken, refreshToken, user }, "Login successful")
          );
        }
      )(req, res);
});

/**
 * Updates a user by its ID.
 * @param {Request} req - The request object containing user data to update.
 * @param {Response} res - The response object to send the result.
 * @returns {Promise<void>} The response will contain the updated user object.
 */
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const id = req?.user?._id || "";
    if(id === req.params.id){
      const result = await userService.updateUser(req.params.id, req.body);
      res.send(createResponse(result, "User updated successfully"))
    }
    else{
      res.send(createResponse(null, "User trying to update other's data"))
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
    if(id === req.params.id){
      const result = await userService.editUser(req.params.id, req.body);
      res.send(createResponse(result, "User updated successfully"))
    }
    else{
      res.send(createResponse(null, "User trying to update other's data"))
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
    if(id === req.params.id){
      const result = await userService.deleteUser(req.params.id);
      res.send(createResponse(result, "User deleted successfully"))
    }
    else{
      res.send(createResponse(null, "User trying to delete other's data"))
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
    res.send(createResponse(result))
});

/**
 * Retrieves all users.
 * @param {Request} req - The request object to fetch users.
 * @param {Response} res - The response object to send the list of users.
 * @returns {Promise<void>} The response will contain a list of all users.
 */
export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.getAllUser();
    res.send(createResponse(result))
});
