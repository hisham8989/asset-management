import express from "express";
import { validate } from "express-validation";
import { login } from "../../controllers/authController.js";
import { validLogin } from "../../validations/auth.validation.js";
const router = express.Router();

router.post("/login", validate(validLogin, {}, {}), login);

export default router;
