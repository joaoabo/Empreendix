import { RequestHandler } from "express";


export const home: RequestHandler = async (req, res) => {
    res.json({ message: 'Area Restrita!' });
    return;
}