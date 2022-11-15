class Bank {
  constructor() {
    this._accounts = [];
  }

  static nexNumber = 0;

  get accounts() {
    return this._accounts;
  }

  addAccount() {
    this._accounts.push(new Account(++Bank.nexNumber));
    return Bank.nexNumber;
  }

  addSavingsAccount(interest) {
    this._accounts.push(new SavingsAccount(++Bank.nexNumber, interest));
    return Bank.nexNumber;
  }

  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(++Bank.nexNumber, overdraft));
    return Bank.nexNumber;
  }

  closeAccount(number) {
    this._accounts = this._accounts.filter(
      (account) => account.getNumber() !== number
    );
  }

  accountReport() {
    return this._accounts
      .map((item) => item.toString())
      .reduce((acc, item) => acc + "\n" + item, "");
  }

  endOfMonth() {
    return this._accounts
      .map((item) => item.endOfMonth())
      .reduce((acc, item) => acc + "\n" + item, "");
  }
}
