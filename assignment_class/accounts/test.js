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

/**
 * Test case for Bank
 */
describe("Test case for Bank", () => {
  let bank = new Bank();

  it("should add three bank", () => {
    bank.addAccount();
    bank.addAccount();
    assert.equal(bank.accounts.length, 2);
  });

  it("should add a new saving account", () => {
    bank.addSavingsAccount(9);
    assert.equal(bank.accounts.length, 3);
  });

  it("should add a new checking account", () => {
    bank.addCheckingAccount(5000);
    assert.equal(bank.accounts.length, 4);
  });

  it("should remove a account with given number", () => {
    bank.closeAccount(1);
    assert.equal(bank.accounts.length, 3);
  });
});

/**
 * Test case for Bank's endOfMonth method
 */
describe("End of Month", () => {
  it("prints detail summay of each account", () => {
    bank = new Bank();
    bank.addAccount();
    bank.accounts[0].deposit(1000);
    bank.addSavingsAccount(10);
    bank.accounts[1].deposit(1000);
    bank.addCheckingAccount(100);
    bank.accounts[2].deposit(1000);
    console.log(bank.endOfMonth());
  });
});
