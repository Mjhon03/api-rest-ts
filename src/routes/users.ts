import { Router, Request, Response } from "express";
import { getUser } from "../controller/users";

const router = Router();

router.get("/", getUser);

export { router };