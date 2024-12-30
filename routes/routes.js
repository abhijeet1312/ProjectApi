import { Router } from "express";
import {
    signup,
    signupUser,
    login,
    loginUser,
} from "../controllers/userController.js";
import jwt from "jsonwebtoken";

const router = Router();

// Home route: Redirect logged-in users to /projects or show index.ejs
router.get("/", (req, res) => {
    const token = req.cookies.authToken;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return res.redirect("/projects"); // Redirect to project dashboard if logged in
        } catch (error) {
            console.error("JWT verification failed:", error);
        }
    }
    res.render("index.ejs"); // Show home page with login/signup options
});

// Signup and login routes
router.get("/signup", signup); // Render signup form
router.post("/signup", signupUser); // Handle signup
router.get("/login", login); // Render login form
router.post("/login", loginUser); // Handle login
router.post('/logout', (req, res) => {
    res.clearCookie('authToken');
    res.redirect('/');
});


export default router;