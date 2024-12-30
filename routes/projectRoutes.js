import { Router } from "express";
import {
    renderProjects,
    renderProjectDetails,
    renderAddProjectForm,
    handleAddProject,
    handleDeleteProject,
} from "../controllers/projectController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = Router();


// project routes
router.get("/projects", verifyToken, renderProjects); //list all projects
router.get("/projects/:id", verifyToken, renderProjectDetails, );
//get a specific project  
router.get("/add-project", verifyToken, renderAddProjectForm); //render add project form 
router.post("/add-project", verifyToken, handleAddProject); //add a new project
router.post("/projects/:id/delete", verifyToken, handleDeleteProject); //delete a project    


export default router;