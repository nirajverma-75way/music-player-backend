
import * as ReplieService from "./replie.service";
import { createResponse } from "../../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const createReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.createReplie(req.body);
    res.send(createResponse(result, "Replie created sucssefully"))
});

export const updateReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.updateReplie(req.params.id, req.body);
    res.send(createResponse(result, "Replie updated sucssefully"))
});

export const editReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.editReplie(req.params.id, req.body);
    res.send(createResponse(result, "Replie updated sucssefully"))
});

export const deleteReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.deleteReplie(req.params.id);
    res.send(createResponse(result, "Replie deleted sucssefully"))
});


export const getReplieById = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.getReplieById(req.params.id);
    res.send(createResponse(result))
});


export const getAllReplie = asyncHandler(async (req: Request, res: Response) => {
    const result = await ReplieService.getAllReplie();
    res.send(createResponse(result))
});
