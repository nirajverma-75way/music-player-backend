
import { body } from 'express-validator';

export const createFollow = [
    body('followerId').notEmpty().withMessage('followerId is required').isString().withMessage('followerId must be a string'),
    body('followingId').notEmpty().withMessage('followingId is required').isString().withMessage('followingId must be a string'),
];

export const updateFollow = [
    body('followerId').notEmpty().withMessage('followerId is required').isString().withMessage('followerId must be a string'),
    body('followingId').notEmpty().withMessage('followingId is required').isString().withMessage('followingId must be a string'),
];

export const editFollow = [
    body('followerId').isString().withMessage('followerId must be a string'),
    body('followingId').isString().withMessage('followingId must be a string'),
];
