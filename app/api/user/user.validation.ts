
import { body } from 'express-validator';

export const createUser = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('username').notEmpty().withMessage('username is required').isString().withMessage('username must be a string'),
    body('email').notEmpty().withMessage('email is required').isString().withMessage('email must be a string'),
    body('bio').isString().withMessage('bio must be a string'),
    body('password').notEmpty().withMessage('password is required').isString().withMessage('password must be a string'),
];

export const loginUser = [
    body('email').notEmpty().withMessage('email is required').isString().withMessage('email must be a string'),
    body('password').notEmpty().withMessage('password is required').isString().withMessage('password must be a string'),
];

export const updateUser = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('username').notEmpty().withMessage('username is required').isString().withMessage('username must be a string'),
    body('email').notEmpty().withMessage('email is required').isString().withMessage('email must be a string'),
    body('bio').isString().withMessage('bio must be a string'),
    body('password').notEmpty().withMessage('password is required').isString().withMessage('password must be a string'),
];

export const editUser = [
    body('name').isString().withMessage('name must be a string'),
    body('username').isString().withMessage('username must be a string'),
    body('email').isString().withMessage('email must be a string'),
    body('bio').isBoolean().withMessage('bio must be a boolean'),
    body('password').isString().withMessage('password must be a string'),
];
