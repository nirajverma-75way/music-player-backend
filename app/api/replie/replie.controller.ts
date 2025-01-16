import * as ReplieService from "./replie.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';

/**
 * Creates a new replie.
 * @param {Request} req - The request object containing the replie data.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the created replie object.
 */
export const createReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.createReplie(req.body);
    res.send(createResponse(result, "Replie created successfully"));
});

/**
 * Updates an existing replie by its ID.
 * @param {Request} req - The request object containing the replie data and the ID in the URL params.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the updated replie object.
 */
export const updateReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.updateReplie(req.params.id, req.body);
    res.send(createResponse(result, "Replie updated successfully"));
});

/**
 * Partially updates an existing replie by its ID.
 * @param {Request} req - The request object containing the replie data and the ID in the URL params.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the updated replie object.
 */
export const editReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.editReplie(req.params.id, req.body);
    res.send(createResponse(result, "Replie updated successfully"));
});

/**
 * Deletes a replie by its ID.
 * @param {Request} req - The request object containing the replie ID in the URL params.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the result of the delete operation.
 */
export const deleteReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.deleteReplie(req.params.id);
    res.send(createResponse(result, "Replie deleted successfully"));
});

/**
 * Retrieves a replie by its ID.
 * @param {Request} req - The request object containing the replie ID in the URL params.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the retrieved replie object.
 */
export const getReplieById = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.getReplieById(req.params.id);
    res.send(createResponse(result));
});

/**
 * Retrieves all replie objects based on the provided query filter.
 * @param {Request} req - The request object containing the query parameters.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} Sends a response with the list of all matching replie objects.
 */
export const getAllReplie = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query;
    const queryObject: Record<string, any> = {};
    if (query?.userId) {
        queryObject.userId = query.userId;
    }
    if (query?.postId) {
        queryObject.postId = query.postId;
    }
    if (query?.parentId) {
        queryObject.parentId = query.parentId;
    }
    const result = await ReplieService.getAllReplie(queryObject);
    res.send(createResponse(result));
});
