import { body } from "express-validator";

export const createPlaylist = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be a string"),
];

export const updatePlaylist = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be a string"),
];

export const editPlaylist = [
  body("name").isString().withMessage("name must be a string"),
  body("description").isString().withMessage("description must be a string"),
];
