// outing.routes.js

import express from "express";
import { applyForOuting, getOutingStatus, getAllOutings,scanOutingApplication } from "../controller/outing.controller.js";

const router = express.Router();

// Route to apply for an outing
router.post("/outapply", applyForOuting);

// Route to get the status of outing applications for a specific user
router.post('/status', getOutingStatus);

// Route to get all outing applications
router.get('/all', getAllOutings); // New route for getting all outings
router.patch('/scan/:applicationId', scanOutingApplication);

export default router;