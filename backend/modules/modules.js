import { Account } from "../models/Account.js";
import { Category } from "../models/Category.js";
import { Transaction } from "../models/Transaction.js";

// validation
const validateAccount = (username) => {
  return Account.getAccounts().some((account) => account.username === username);
};

// Account

export const getAccounts = (req, res) => {
  const result = Account.getAccounts();
  if (result) {
    res.status(200).json(Account.getAccounts());
  } else {
    res.status(400).json({ message: "Error getting accounts" });
  }
};

export const getAccount = (req, res) => {
  const account = Accounts.getAccount().find(
    (account) => account.id === Number(req.params.id)
  );

  if (account) {
    res.status(200).json(account);
  } else {
    res.status(400).json({ message: "Error getting account" });
  }
};

export const addAccount = (req, res) => {
  const { username } = req.body;
  console.log(username);
  if (validateAccount(username)) {
    return res.status(400).json({ message: "Account already exists" });
  }
  if (username) {
    const account = new Account(username);
    res.status(201).json(account);
  } else {
    res.status(400).json({ message: "Error creating account" });
  }
};
