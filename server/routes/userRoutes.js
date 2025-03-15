import express from "express";
import {registerUser,loginUser, userCredits, payment, verifyPay} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/credits", userAuth, userCredits);
router.post("/pay", userAuth, payment);
router.post("/verify", userAuth, verifyPay);

export default router;