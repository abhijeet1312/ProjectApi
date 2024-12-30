import connectDB from "../config/database.js";
//fetch all projects
export const getProjectByProjectId = async(id) => {
    const result = await connectDB.query("SELECT * FROM projects WHERE  id = $1 order by start_date desc", [id]);

    return result.rows[0];
};

export const getProjectByUserId = async(user_id) => {
    try {
        const result = await connectDB.query(
            "SELECT * FROM projects WHERE user_id = $1 ORDER BY start_date", [user_id]
        );

        return result.rows;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};


//create a new project

export const createProject = async(title, description, start_date, end_date, user_id) => {
    const result = await connectDB.query("INSERT INTO projects (title,description,start_date,end_date,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *", [title, description, start_date, end_date, user_id]);
    return result.rows[0];
};

//delete a project
export const deleteProject = async(id) => {
    const result = await connectDB.query("DELETE FROM projects WHERE id = $1", [id]);
    return result.rows[0];
};