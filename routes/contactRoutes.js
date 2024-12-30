import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { renderContactForm, handleContactFormSubmission } from "../controllers/contactController.js";
const router = Router();

router.get("/contact", verifyToken, renderContactForm);

router.post("/contact", verifyToken, handleContactFormSubmission);

export default router;