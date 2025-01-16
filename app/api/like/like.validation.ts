
import { body } from 'express-validator';

export const createLike = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
];

export const updateLike = [
    body('userId').notEmpty().withMessage('userId is required').isString().withMessage('userId must be a string'),
    body('postId').notEmpty().withMessage('postId is required').isString().withMessage('postId must be a string'),
];

export const editLike = [
    body('userId').isString().withMessage('userId must be a string'),
    body('postId').isString().withMessage('postId must be a string'),
];
