import {
    getProjectByProjectId,
    getProjectByUserId,
    createProject,
    deleteProject,
} from "../models/projectModel.js";

//render the project list getProjectById
export const renderProjects = async(req, res) => {
    try {
        const user_id = req.userId; // Get user ID from middleware
        if (!user_id) {
            console.error("User ID missing in renderProjects.");
            return res.status(401).send("Unauthorized: User ID is required.");
        }

        const projects = await getProjectByUserId(user_id); // Fetch projects for this user
        console.log("Projects for user:", user_id, projects); // Debug log
        res.render("projects", { projects }); // Pass projects to EJS
    } catch (error) {
        console.error("Error rendering projects:", error);
        res.status(500).send("Internal server error");
    }
};
// render a specific project's details
export const renderProjectDetails = async(req, res) => {
    try {
        console.log(req.params.id + "idssssssssssss");
        const project = await getProjectByProjectId(req.params.id);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        res.render("projectDetails.ejs", { project: project });
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
};
//render the add project form
export const renderAddProjectForm = (req, res) => {

    res.render("addProject.ejs");
};

// add a new project
export const handleAddProject = async(req, res) => {
    const { title, description, start_date, end_date } = req.body;
    try {
        const user_id = req.userId;
        if (!user_id) {
            return res.status(401).send("Unauthorized: User ID is missing.");
        }
        console.log("User ID in handleAddProject:", user_id);

        await createProject(title, description, start_date, end_date, user_id);
        res.redirect("/projects");
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
};

// handle project deletion  
export const handleDeleteProject = async(req, res) => {
    try {
        await deleteProject(req.params.id);
        res.redirect("/projects");
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
};