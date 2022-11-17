const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
let getNumber = () => {
  readline.question("Enter the number", (ans) => {
    if (ans === "stop") {
      console.log("sum is " + sum);
      return readline.close();
    } else {
      sum += parseInt(ans);
      getNumber();
    }
  });
};

getNumber();
