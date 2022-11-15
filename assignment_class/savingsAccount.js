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
    if (this.balance < 0) {
      throw new RangeError("you have zero balanace");
    }
    this.balance += (this.balance * this.interest) / 100;
  }

  toString() {
    return `Account No: ${this.number}  balance: ${this.balance}`;
  }
}
