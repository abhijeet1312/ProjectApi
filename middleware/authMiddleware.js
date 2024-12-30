import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.authToken; // Extract token from cookies

    if (!token) {

        console.error("No token found in cookies.");
        return res.redirect("/login"); // Redirect if no token is provided
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

        req.userId = decoded.id;;
        // Attach the user ID to the request object
        next(); // Pass control to the next middleware or route handler
    } catch (error) {
        console.error("JWT verification failed:", error);
        return res.redirect("/login"); // Redirect if the token is invalid
    }
};