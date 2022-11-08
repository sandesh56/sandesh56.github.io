describe("sum", function () {
    it("adds the element of array", function () {
        assert.equal(sum([4, 5, 6]), 15);
    })
});

describe("multiply", () => {
    it("multiplies the elements of the array", () => {
        assert.equal(multiply([5, 10, 4]), 200);
    })
});

describe("reverse", () => {
    it("reverse the given string", () => {
        assert.equal(reverse("sandesh"), "hsednas");
    })
});

describe("findLongestWord", () => {
    it("returns the length of the longest word", () => {
        assert.equal(findLongestWord(["sandesh", "book", "mild"]), 7);
    });
})