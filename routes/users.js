import express from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

// Rota para obter todos os usuários
router.get("/", getUsers);

// Rota para obter um usuário específico
router.get("/:id", getUserById);

// Rota para criar um novo usuário
router.post("/", createUser);

// Rota para atualizar um usuário existente
router.put("/:id", updateUser);

// Rota para deletar um usuário
router.delete("/:id", deleteUser);

export default router;
