import { type IUser } from "./user.dto";
import UserSchema from "./user.schema";

/**
 * Creates a new user.
 * @param {IUser} data - The user data to create a new user.
 * @returns {Promise<IUser>} The created user object.
 */
export const createUser = async (data: IUser) => {
    const result = await UserSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing user by its ID.
 * @param {string} id - The ID of the user to update.
 * @param {IUser} data - The data to update the user with.
 * @returns {Promise<IUser>} The updated user object.
 */
export const updateUser = async (id: string, data: IUser) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing user by its ID.
 * @param {string} id - The ID of the user to update.
 * @param {Partial<IUser>} data - The data to partially update the user with.
 * @returns {Promise<IUser>} The updated user object.
 */
export const editUser = async (id: string, data: Partial<IUser>) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a user by its ID.
 * @param {string} id - The ID of the user to delete.
 * @returns {Promise<any>} The result of the delete operation.
 */
export const deleteUser = async (id: string) => {
    const result = await UserSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a user by its ID.
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<IUser | null>} The user object or null if not found.
 */
export const getUserById = async (id: string) => {
    const result = await UserSchema.findById(id).lean();
    return result;
};

/**
 * Retrieves all users.
 * @returns {Promise<IUser[]>} A list of all user objects.
 */
export const getAllUser = async () => {
    const result = await UserSchema.find({}).lean();
    return result;
};

/**
 * Retrieves a user by their email address.
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Promise<IUser | null>} The user object or null if not found.
 */
export const getUserByEmail = async (email: string) => {
    const result = await UserSchema.findOne({ email }).lean();
    return result;
};
