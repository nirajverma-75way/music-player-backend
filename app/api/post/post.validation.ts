
import { body } from 'express-validator';

export const createPost = [
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('mediaUrl').optional().isString().withMessage('mediaUrl must be a string'),
];

export const updatePost = [
    body('content').notEmpty().withMessage('content is required').isString().withMessage('content must be a string'),
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('mediaUrl').optional().isString().withMessage('mediaUrl must be a string'),
];

export const editPost = [
    body('content').isString().withMessage('content must be a string'),
    body('userId').isString().withMessage('userId must be a string'),
    body('mediaUrl').isString().withMessage('mediaUrl must be a string'),
];
