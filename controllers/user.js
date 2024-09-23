import { db } from "../db.js"; // Importa a instância do banco de dados

// GET todos os usuários
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios"; // Consulta SQL para selecionar todos os usuários
  
  db.query(q, (err, data) => { // Executa a consulta
    if (err) return res.status(500).json(err); // Retorna erro 500 se a consulta falhar
    return res.status(200).json(data); // Retorna os dados com status 200 (sucesso)
  });
};

// GET usuário específico
export const getUserById = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE id = ?"; // Consulta SQL para selecionar um usuário pelo ID
  const userId = req.params.id; // Obtém o ID do usuário dos parâmetros da requisição
 
  db.query(q, [userId], (err, data) => { // Executa a consulta
    if (err) return res.status(500).json(err); // Retorna erro 500 se a consulta falhar
    if (data.length === 0) return res.status(404).json({ message: "Usuário não encontrado" }); // Retorna erro 404 se não encontrar o usuário
    return res.status(200).json(data[0]); // Retorna os dados do usuário com status 200
  });
};

// POST para adicionar um novo usuário
export const createUser = (req, res) => {
  const { nome, email, fone, data_nascimento } = req.body; // Obtém os dados do novo usuário do corpo da requisição
  const q = "INSERT INTO usuarios (`nome`, `fone`, `data_nascimento`, `email`) VALUES (?, ?, ?, ?)"; // Consulta SQL para inserir um novo usuário
  
  db.query(q, [nome, fone, data_nascimento, email], (err, data) => { // Executa a consulta com os dados do novo usuário
    if (err) return res.status(500).json(err); // Retorna erro 500 se a consulta falhar
    return res.status(201).json({ message: "Usuário criado com sucesso!" }); // Retorna sucesso 201 se o usuário for criado
  });
};

// PUT para atualizar um usuário
export const updateUser = (req, res) => {
  const { nome, email, fone, data_nascimento } = req.body; // Obtém os dados atualizados do usuário do corpo da requisição
  const userId = req.params.id; // Obtém o ID do usuário dos parâmetros da requisição
  const q = "UPDATE usuarios SET `nome` = ?, `fone` = ?, `data_nascimento` = ?, `email` = ? WHERE `id` = ?"; // Consulta SQL para atualizar um usuário

  db.query(q, [nome, fone, data_nascimento, email, userId], (err, data) => { // Executa a consulta
    if (err) return res.status(500).json(err); // Retorna erro 500 se a consulta falhar
    return res.status(200).json({ message: "Usuário atualizado com sucesso!" }); // Retorna sucesso 200 se o usuário for atualizado
  });
};

// DELETE para remover um usuário
export const deleteUser = (req, res) => {
  const userId = req.params.id; // Obtém o ID do usuário dos parâmetros da requisição
  const q = "DELETE FROM usuarios WHERE `id` = ?"; // Consulta SQL para remover um usuário

  db.query(q, [userId], (err, data) => { // Executa a consulta
    if (err) return res.status(500).json(err); // Retorna erro 500 se a consulta falhar
    return res.status(200).json({ message: "Usuário deletado com sucesso!" }); // Retorna sucesso 200 se o usuário for deletado
  });
};
