import { body, validationResult } from "express-validator";
import initMiddleware from "../../patterns/middlewares/init-middleware";
import validateMiddleware from "../../patterns/middlewares/validate";
import { adminApiAccessVerify } from "../../patterns/middlewares/security/admin.acess";

export const articleUpdateValidate = initMiddleware(
  validateMiddleware(
    [
      body("_id")
        .isString()
        .withMessage("Obrigatório fornecer _id."),
      body("title").isString().withMessage("Titulo do artigo é obrigatório."),
      body("resume")
        .isString()
        .withMessage("Descrição do artigo é obrigatório."),
      body("content")
        .isString()
        .withMessage("Conteudo do artigo é obrigatório."),
      adminApiAccessVerify(),
    ],
    validationResult
  )
);