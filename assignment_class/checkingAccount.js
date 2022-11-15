class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  get overdraft() {
    return this._overdraft;
  }

  set overdraft(value) {
    this._overdraft = value;
  }

  withdraw(amount) {
    if (amount > this.overdraft) {
      throw new RangeError("Amount exceeds the overdraft limit");
    }
    super.withdraw(amount);
  }

  toString() {
    return `Account No: ${this.number}  balance: ${this.balance} overdraft amount: ${this._overdraft}`;
  }

  endOfMonth() {
    if (this.getBalance() < 0) {
      throw new RangeError(
        `warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${
          this.overdraft
        }`
      );
    }
    return `CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${
      this.overdraft
    }`;
  }
}
