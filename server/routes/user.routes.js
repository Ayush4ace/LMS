import express from "express";
import { login, registration } from "../controller/user.controller.js";

const router = express.Router();

router.route('/register').post(registration);
router.route("/login").post(login);


export default router;