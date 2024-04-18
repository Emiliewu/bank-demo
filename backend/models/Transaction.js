export class Transaction {
  static transaction = [];
  constructor(transaction) {
    this.id = Transaction.transaction.length + 1;
    this.categoryId = transaction.categoryId;
    this.amount = transaction.amount;
    this.accountId = transaction.accountId;
    this.accountIdFrom = transaction.accountIdFrom;
    this.accountIdTo = transaction.accountIdTo;
    this.type = transaction.type;
    Transaction.transaction.push(this);
  }

  static getTransactions() {
    return Transaction.transaction;
  }
}
