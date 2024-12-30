import connectDB from "../config/database.js   ";
export const saveContact = async(name, email, message) => {
    try {
        const result = await connectDB.query('INSERT INTO contacts (name,email,message) VALUES ($1,$2,$3) returning *', [name, email, message]);
        return result.rows[0];
    } catch (error) {
        console.error("Error saving contact:", error);
        throw error;
    }
};