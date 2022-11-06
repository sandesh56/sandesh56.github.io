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

  /**
   *
   * handles the turbo checkbox.
   */
  var animationSpeed = 250;
  var turboHandler = () => {
    animationSpeed = document.getElementById("turbo").checked ? 50 : 250;
  };

  var position = 0;
  var timer = null;

  var startButtonHandler = () => {
    /**
     *
     * Disables and enables following buttons.
     */
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;

    /**
     * Generates the array of frames from text area value
     */
    var frameArray = document
      .getElementById("text-area")
      .innerHTML.split("=====");

    /**
     *
     * calls @frameSelector every animationSpedd interval.
     */
    timer = setInterval(frameSelector, animationSpeed);

    /**
     * here in every call, interval is cleared and then then again set. This just for setting new interval with new time.
     *
     */
    function frameSelector() {
      clearInterval(timer);
      position++;
      if (position >= frameArray.length) position = 0;
      document.getElementById("text-area").innerHTML = frameArray[position];
      turboHandler();
      timer = setInterval(frameSelector, animationSpeed);
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
