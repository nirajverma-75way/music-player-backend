
import { body } from 'express-validator';

export const createComment = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
];

export const updateComment = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
];

export const editComment = [
    body('userId').isString().withMessage('userId must be a string'),
    body('postId').isString().withMessage('postId must be a string'),
    body('content').isString().withMessage('content must be a string'),
];
