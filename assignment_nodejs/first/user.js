const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("what id your name?", (name) => {
  console.log(`Welcome ${name}`);
  readline.question("What is your age?", (age) => {
    if (age >= 16)
      console.log("You’re allowed to get a drivers license in Iowa");
    else console.log("Your're not allowed to drive in Iowa");
    readline.close();
  });
});
