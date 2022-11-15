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

/**
 * Test case for saving account
 */

describe("SavingsAccount", () => {
  let savings = new SavingsAccount(30, 10);

  it("while adding interest, it throws error if balance is less than zero", () => {
    assert.throws(() => savings.addInterest());
  });

  it("adds the interest int the balance", () => {
    savings.deposit(5000);
    savings.addInterest();
    assert.equal(savings.getBalance(), 5500);
  });
});

/**
 * Test case for Checking account
 */

describe("Checking account test", () => {
  let checking = new CheckingAccount(10, 4000);

  checking.deposit(10000);

  it("throws an error if the withdraw amount exceeds the overdraft limit", () => {
    assert.throws(() => checking.withdraw(5000));
  });

  it("should withdraw a amount lower than the available balance and overdraft limit", () => {
    checking.withdraw(3000);
    assert.equal(checking.getBalance(), 7000);
  });
});
