import { body } from "express-validator";

export const createPlaylistSong = [
  body("playListId")
    .notEmpty()
    .withMessage("playListId is required")
    .isString()
    .withMessage("playListId must be a string"),
  body("songId")
    .notEmpty()
    .withMessage("songId is required")
    .isString()
    .withMessage("songId must be a string"),
];

export const updatePlaylistSong = [
  body("playListId")
    .notEmpty()
    .withMessage("playListId is required")
    .isString()
    .withMessage("playListId must be a string"),
  body("songId")
    .notEmpty()
    .withMessage("songId is required")
    .isString()
    .withMessage("songId must be a string"),
];

export const editPlaylistSong = [
  body("playListId").isString().withMessage("playListId must be a string"),
  body("songId").isString().withMessage("songId must be a string"),
];
