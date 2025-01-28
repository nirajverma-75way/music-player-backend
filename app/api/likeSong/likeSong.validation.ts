import { body } from "express-validator";

export const createLikeSong = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isString()
    .withMessage("userId must be a string"),
  body("songId")
    .notEmpty()
    .withMessage("songId is required")
    .isString()
    .withMessage("songId must be a string"),
];

export const updateLikeSong = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isString()
    .withMessage("userId must be a string"),
  body("songId")
    .notEmpty()
    .withMessage("songId is required")
    .isString()
    .withMessage("songId must be a string"),
];

export const editLikeSong = [
  body("userId").isString().withMessage("userId must be a string"),
  body("songId").isString().withMessage("songId must be a string"),
];
