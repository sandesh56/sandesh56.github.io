class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  set interest(interest) {
    this._interest = interest;
  }

  get interest() {
    return this._interest;
  }

  addInterest() {
    if (this.getBalance() <= 0) {
      throw new RangeError("you have zero balanace");
    }
    let newAmount = (this.getBalance() * this._interest) / 100;
    this.deposit(newAmount);
  }

  toString() {
    return `Account No: ${this.number}  balance: ${this.balance}`;
  }

  endOfMonth() {
    return `Interest added SavingsAccount ${this.getNumber()}: balance: ${
      this.balance
    } interest: ${this.interest}`;
  }
}
