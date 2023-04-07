import { Request, Response } from "express";
import { connect } from "../database";

export async function getUsers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const users = await conn.query('SELECT * from users');
    return res.json(users[0]);
}