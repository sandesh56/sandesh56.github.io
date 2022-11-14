(function () {
  window.onload = () => eventhandler();

  const eventhandler = () => {
    document.getElementById("form").onsubmit = VALIDATE.validateBoth;
  };

  var VALIDATE = (function () {
    function validateName() {
      console.log(document.getElementById("email").value);
      return document.getElementById("email").value !== "";
    }

    function validatePassword() {
      console.log(document.getElementById("password").value);
      return document.getElementById("password").value !== "";
    }

    function validateBoth() {
      return validateName() && validatePassword();
    }

    return {
      validateBoth: validateBoth,
    };
  })();
})();
