// export async function createUser(req: Request, res: Response) {
//     const newUser: IUser = req.body;
//     const conn = await connect();
//     const query = `INSERT INTO users SET nameUser='${newUser.nameUser}', apPaterno='${newUser.apPaterno}', apMaterno='${newUser.apMaterno}', userDescription='${newUser.userDescription}', contrasena='${newUser.contrasena}', salt='${newUser.salt}', email='${newUser.email}'`;
//     conn.query(query);
//     return res.json({
//         message: 'Post Created'
//     });
// }

// export async function getUsers(req: Request, res: Response): Promise<Response> {
//     const conn = await connect();
//     const users = await conn.query('SELECT * from users');
//     return res.json(users[0]);
// };

import { Request, Response } from "express";
import { ILogin } from "../interface/login.interface";
import { connect } from "../database";

export async function authentication(req: Request, res: Response) {
    const jwt = require('jsonwebtoken');
    const newLogin: ILogin = req.body;
    const conn = await connect();
    const query = `SELECT id FROM users WHERE '${newLogin.email}' = email AND '${newLogin.contrasena}' = contrasena`;
    const user = await conn.query(query);
    if (user.length > 0) {
        jwt.sign({user}, 'secretkey', (err: any, token: any) =>{
            res.json({
                token
            });
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

