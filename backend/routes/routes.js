import express from "express";
import { getAccounts, getAccount, addAccount } from "../modules/modules.js";

const api = express.Router();

api.get("/accounts", getAccounts);
api.get("/accounts/:id", getAccount);
api.post("/accounts", addAccount);

export default api;
