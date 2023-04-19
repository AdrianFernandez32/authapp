import { Router } from "express";
import verfiyToken from "../middleware/auth.middleware"

const router = Router();
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.controller";

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:postId')
    .get(verfiyToken, getUser)
    .delete(deleteUser)
    .put(verfiyToken, updateUser)
export default router;