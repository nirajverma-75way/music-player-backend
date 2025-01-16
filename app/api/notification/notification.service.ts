import { type INotification } from "./notification.dto";
import NotificationSchema from "./notification.schema";

/**
 * Creates a new notification record in the database.
 * @param {INotification} data - The data for the notification to be created.
 * @returns {Promise<INotification>} The created notification document.
 */
export const createNotification = async (data: INotification) => {
    const result = await NotificationSchema.create({ ...data, active: true });
    return result;
};

/**
 * Updates an existing notification record in the database by its ID.
 * @param {string} id - The ID of the notification to update.
 * @param {INotification} data - The updated data for the notification.
 * @returns {Promise<INotification | null>} The updated notification document, or null if not found.
 */
export const updateNotification = async (id: string, data: INotification) => {
    const result = await NotificationSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially updates an existing notification record in the database by its ID.
 * @param {string} id - The ID of the notification to update.
 * @param {Partial<INotification>} data - The partial data to update the notification with.
 * @returns {Promise<INotification | null>} The updated notification document, or null if not found.
 */
export const editNotification = async (id: string, data: Partial<INotification>) => {
    const result = await NotificationSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a notification record from the database by its ID.
 * @param {string} id - The ID of the notification to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the deletion operation.
 */
export const deleteNotification = async (id: string) => {
    const result = await NotificationSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a notification record from the database by its ID.
 * @param {string} id - The ID of the notification to retrieve.
 * @returns {Promise<INotification | null>} The notification document, or null if not found.
 */
export const getNotificationById = async (id: string) => {
    const result = await NotificationSchema.findById(id).lean();
    return result;
};

/**
 * Retrieves all notification records from the database based on the provided filter.
 * @param {object} filter - The filter criteria for fetching notification records.
 * @returns {Promise<INotification[]>} The list of notification records matching the filter.
 */
export const getAllNotification = async (filter: {}) => {
    const result = await NotificationSchema.find(filter).lean();
    return result;
};

/**
 * Retrieves a notification record by its associated email address.
 * @param {string} email - The email address associated with the notification.
 * @returns {Promise<INotification | null>} The notification document, or null if not found.
 */
export const getNotificationByEmail = async (email: string) => {
    const result = await NotificationSchema.findOne({ email }).lean();
    return result;
};
