import express from "express";
import { getUsers } from '../controllers/user.js';

const router = express.Router();

router.get("/", getUsers);
//rota / e função getUsers chamamos no controller

export default router;
