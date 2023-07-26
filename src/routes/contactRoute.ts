import express from "express";
import { handleContacts } from "../controllers/contactControl";

const router = express.Router();

router.post("/", handleContacts);

module.exports = router;