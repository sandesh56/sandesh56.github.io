let savings = new SavingsAccount(30, 10);
describe("deposit", function () {
  let acc = new Account(25);
  it("throws exception when amount is negative", function () {
    assert.throws(() => acc.deposit(-5));
  });
  acc.deposit(5000);
  it("deposits if amount is greater than 0", function () {
    assert.equal(acc.getBalance(), 5000);
  });
});

describe("withdraws money", () => {
  let acc = new Account(25);
  acc.deposit(5000);
  it("throws error if amount is negative", () => {
    assert.throws(() => acc.withdraw(-10));
  });
  acc.withdraw(1000);
  it("withdraws a money if amount is valid", () => {
    assert.equal(acc.getBalance(), 4000);
  });
});
