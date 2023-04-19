import { Request, Response } from "express";
import { connect } from "../database";
import { IUser } from "../interface/user.interface";

export async function getUsers(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const users = await conn.query('SELECT * from users');
    return res.json(users[0]);
};

export async function createUser(req: Request, res: Response) {
    const newUser: IUser = req.body;
    const conn = await connect();
    const query = `INSERT INTO users SET nameUser='${newUser.nameUser}', apPaterno='${newUser.apPaterno}', apMaterno='${newUser.apMaterno}', userDescription='${newUser.userDescription}', contrasena='${newUser.contrasena}', salt='${newUser.salt}', email='${newUser.email}'`;
    conn.query(query);
    return res.json({
        message: 'Post Created'
    });
}

export async function getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const user = await conn.query(`SELECT * FROM users WHERE id = ${id}`);
    return res.json(user[0]);
}

export async function deleteUser(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    const user = await conn.query(`DELETE FROM users WHERE id = ${id}`);
    return res.json({
        message: 'Post deleted'
    });
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: IUser = req.body;
    const conn = await connect();
    const user = await conn.query(`UPDATE users SET nameUser='${updatePost.nameUser}', apPaterno='${updatePost.apPaterno}', apMaterno='${updatePost.apMaterno}', userDescription='${updatePost.userDescription}', contrasena='${updatePost.contrasena}' WHERE id = ${id}`);
    return res.json({
        message: 'Post updated'
    });
};