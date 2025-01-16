
import { body } from 'express-validator';

export const createReplie = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
    body('parentId').notEmpty().withMessage('parentId is required').isString().withMessage('parentId must be a string'),
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
];

export const updateReplie = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
    body('parentId').notEmpty().withMessage('parentId is required').isString().withMessage('parentId must be a string'),
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
];

export const editReplie = [
    body('userId').isString().withMessage('userId must be a string'),
    body('postId').isString().withMessage('postId must be a string'),
    body('parentId').isString().withMessage('parentId must be a string'),
    body('content').isString().withMessage('content must be a string'),
];
