import connectDB from "../config/database.js";

//find a user by username
export const findByUsername = async(username) => {
    try {
        const result = await connectDB.query("select * from users where username=$1", [username]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};
// create a  new user
export const createUser = async(username, password) => {
    try {
        const result = await connectDB.query("insert into users(username,password) values($1,$2) returning *", [username, password]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
};