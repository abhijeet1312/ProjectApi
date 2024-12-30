import { saveContact } from "../models/contactModel.js";


// rendering the contact form
export const renderContactForm = (req, res) => {
    res.render("contact.ejs", { success: null, error: null });
};
// handle fomr sbmission
export const handleContactFormSubmission = async(req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = await saveContact(name, email, message);
        res.render("contact.ejs", { success: "Message sent successfully", error: null });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.render("contact", { success: null, error: "An error occurred while submitting your message. Please try again." });
        res.status(500).send("Internal Server Error");
    }
};