import express from "express";
import EditoraController from "../controller/editoraController.js";

const router = express.Router();

router
    .get("/editoras", EditoraController.listarEditoras)
    .get("/editoras/:id", EditoraController.listarEditoraPorId)
    .post('/editoras', EditoraController.cadastrarEditora)
    .put("/editoras/:id", EditoraController.atualizarEditora)
    .delete("/editoras/:id", EditoraController.excluirEditora)

export default router;