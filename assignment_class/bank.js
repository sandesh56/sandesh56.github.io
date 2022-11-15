class Bank {
  constructor() {
    this._accounts = [];
  }
  static nexNumber = 0;
  addAccount() {
    this._accounts.push(new Account(++Bank.nexNumber));
    return Bank.nexNumber;
  }

  addSavingsAccount(interest) {
    this._accounts.push(new savingAccounts(++Bank.nexNumber, interest));
    return Bank.nexNumber;
  }

  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(++Bank.nexNumber, overdraft));
    return Bank.nexNumber;
  }

  closeAccount(number) {
    this._accounts = this._accounts.filter(
      (account) => account.getNumber() === number
    );
  }

  accountReport() {
    return this._accounts
      .map(
        (account) =>
          `Account number: ${account.getNumber()} balance: ${account.getBalance()}`
      )
      .joint("\n");
  }
}
