import { body } from "express-validator";

export const createSong = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string"),
  body("artist")
    .notEmpty()
    .withMessage("artist is required")
    .isString()
    .withMessage("artist must be a string"),
  body("album")
    .notEmpty()
    .withMessage("album is required")
    .isString()
    .withMessage("album must be a string"),
  body("genre").notEmpty().withMessage("genre is required"),
  body("lyrics").notEmpty().withMessage("lyrics is required"),
];

export const updateSong = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string"),
  body("artist")
    .notEmpty()
    .withMessage("artist is required")
    .isString()
    .withMessage("artist must be a string"),
  body("album")
    .notEmpty()
    .withMessage("album is required")
    .isString()
    .withMessage("album must be a string"),
  body("genre").notEmpty().withMessage("genre is required"),
  body("lyrics").notEmpty().withMessage("lyrics is required"),
];

export const editSong = [
  body("title").isString().withMessage("title must be a string"),
  body("artist").isString().withMessage("artist must be a string"),
  body("album").isString().withMessage("album must be a string"),
  body("genre"),
  body("lyrics"),
];
