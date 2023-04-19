import { Request, Response } from "express";
import { ILogin } from "../interface/login.interface";
import { connect } from "../database";

export async function authentication(req: Request, res: Response) {
  const jwt = require("jsonwebtoken");
  const newLogin: ILogin = req.body;
  const conn = await connect();
  const query = `SELECT id FROM users WHERE '${newLogin.email}' = email AND '${newLogin.contrasena}' = contrasena`;
  const user: any = await conn.query(query);
  if (user[0].length === 1) {
    jwt.sign({ user }, "secretkey", (err: any, token: any) => {
      res.json({
        token,
      });
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
}
