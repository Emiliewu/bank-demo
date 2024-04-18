export class Account {
  static accounts = [];
  constructor(username) {
    this.id = Account.accounts.length + 1;
    this.username = username;
    this.balance = 0;
    Account.accounts.push(this);
    this.transactions = [];
  }

  getUsername() {
    return this.username;
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }

  static getAccounts() {
    return Account.accounts;
  }

  deposit(transaction) {
    if (transaction.amount > 0) {
      this.balance += transaction.amount;
      this.transactions.push(transaction);
    } else {
      throw new Error("Amount must be greater than 0");
    }
  }

  withdraw(transaction) {
    if (transaction.amount > 0 || transaction.amount <= this.balance) {
      this.balance -= transaction.amount;
      this.transactions.push(transaction);
    } else {
      throw new Error("Amount must be greater than 0");
    }
  }
}
