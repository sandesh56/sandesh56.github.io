let acc = new Account(25);
describe("deposit", function () {
  it("throws exception when amount is negative", function () {
    assert.throws(() => acc.deposit(-5));
  });
});

// describe("deposit", function () {
//   it("deposits if amount is greater than 0", function () {
//     assert.
//   });
// });

describe("withdraws money", () => {
  it("withdraws money if amount is smaller than saving amount", () => {
    assert.throws(() => acc.withdraw(20));
  });
  it("throws error if amount is negative", () => {
    assert.throws(() => acc.withdraw(-10));
  });
});
