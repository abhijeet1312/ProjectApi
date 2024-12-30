//for authentication of user
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findByUsername } from "../models/userModel.js";

// rendering the signup form
export const signup = (req, res) => {
        res.render("signup.ejs");
    }
    // rendering the signup form
export const login = (req, res) => {
        res.render("login.ejs");
    }
    //signing up the user

export const signupUser = async(req, res) => {
    const { username, password } = req.body;
    // console.log(username   , password)

    //checking if the user already exists
    try {
        const user = await findByUsername(username);
        if (user) {
            return res.render("signup.ejs", { error: "User already exists" });
        }

        //hashing the password
        bcrypt.hash(password, 10, async(err, hash) => {
            if (err) {
                console.error("Error hashing password:", err);
            }
            //creating a new user
            const newUser = await createUser(username, hash);

            res.redirect("/login");
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

// logging in the user
export const loginUser = async(req, res) => {
    const { username, password } = req.body;
    // console.log(username, password)      
    try {
        //checking if the user exists
        const user = await findByUsername(username);
        if (!user) {
            return res.render("login.ejs", { error: "Invalid username or password" });
        }
        //comparing the password
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error("Error comparing password:", err);
            }
            if (result) {
                //creating a token
                console.log("inside result of bcrypt");
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: "1h",
                });
                //setting the token in the cookie
                res.cookie("authToken", token, { httpOnly: true });
                res.redirect("/projects");
                // res.redirect("/projects");
            } else {
                res.render("login.ejs", { error: "Invalid username or password" });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};