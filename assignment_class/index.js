<!DOCTYPE html>
<html>

<head>
    <title>Bank Accounts</title>
    <meta charset="utf-8">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
        // initialize mocha
        mocha.setup('bdd');
        // chai has a lot of stuff, let's make assert global
        let assert = chai.assert;
    </script>

    <script src="account.js"></script>
    <script src="savingsaccount.js"></script>
    <script src="checkingaccount.js"></script>
    <script src="bank.js"></script>
    <script src="test.js"></script>
</head>

<body>
    <div id="mocha"></div>
    <script>
        mocha.run();
    </script>
</body>

</html>
