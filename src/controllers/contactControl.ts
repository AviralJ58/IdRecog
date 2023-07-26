import { Request, Response } from "express";
import { Contact, ContactType } from "../entities/contactModel";

export const handleContacts = async (req: Request, res: Response) => {
    const { phoneNumber, email } = req.body;
    // operations
}
