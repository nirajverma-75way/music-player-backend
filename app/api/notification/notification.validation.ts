
import { body } from 'express-validator';

export const createNotification = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('refId').notEmpty().withMessage('refId is required').isString().withMessage('refId must be a string'),
    body('isRead').isBoolean().withMessage('isRead must be a boolean'),
    body('message').notEmpty().withMessage('message is required').isString().withMessage('message must be a string'),
    body('type').notEmpty().withMessage('type is required').isString().withMessage('type must be a string'),
];

export const updateNotification = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('refId').notEmpty().withMessage('refId is required').isString().withMessage('refId must be a string'),
    body('isRead').isBoolean().withMessage('isRead must be a boolean'),
    body('message').notEmpty().withMessage('message is required').isString().withMessage('message must be a string'),
    body('type').notEmpty().withMessage('type is required').isString().withMessage('type must be a string'),
];

export const editNotification = [
    body('userId').isString().withMessage('userId must be a string'),
    body('refId').isString().withMessage('refId must be a string'),
    body('isRead').isBoolean().withMessage('isRead must be a boolean'),
    body('message').isString().withMessage('message must be a string'),
    body('type').isString().withMessage('type must be a string'),
];
