(() => {
  window.onload = () => eventhandler();

  ("use strict");
  /**
   * This are the values selected by the font size slector.
   */
  var sizeObject = {
    Tiny: "7pt",
    Small: "10pt",
    Medium: "12pt",
    Large: "16pt",
    ExtraLarge: "24pt",
    XXL: "32pt",
  };

  var eventhandler = () => {
    document.getElementById("start").onclick = startButtonHandler;
    document.getElementById("stop").onclick = stopButtonHandler;
    document.getElementById("text-area").onchange = stopButtonHandler;
    document.getElementById("animation").onchange = animationChangeHandler;
    document.getElementById("fontsize").onchange = fontSizeSelectHnadler;
  };

  /**
   *
   * handles the change event of the animation selector.
   */

  var animationChangeHandler = () => {
    let targetElement = document.getElementById("text-area");
    let e = document.getElementById("animation");
    targetElement.innerHTML = ANIMATIONS[e.value];
  };

  /**
   *
   * handles the change event of the font size selector.
   */
  var fontSizeSelectHnadler = () => {
    let e = document.getElementById("fontsize");
    document.getElementById("text-area").style.fontSize = sizeObject[e.value];
  };

  var position = 0;
  var timer = null;

  var startButtonHandler = () => {
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    let animationSpeed = document.getElementById("turbo").checked ? 50 : 250;
    var frameArray = document
      .getElementById("text-area")
      .innerHTML.split("=====");
    timer = setInterval(frameSelector, animationSpeed);
    function frameSelector() {
      position++;
      if (position >= frameArray.length) position = 0;
      document.getElementById("text-area").innerHTML = frameArray[position];
    }
  };

  var stopButtonHandler = () => {
    clearInterval(timer);
    animationChangeHandler();
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
  };
})();
