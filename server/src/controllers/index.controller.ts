import { Request, Response } from "express";
import { connect } from "../database";


export function indexWelcome (req: Request, res: Response): Response {
    return res.json('Welcome to my API hola ohla')
};