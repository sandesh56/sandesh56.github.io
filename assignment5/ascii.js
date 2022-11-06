window.onload = eventhandler;

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

/**
 * constant for animation timing.
 */

var animationSpeed = 25;
console.log(animationSpeed);
var eventhandler = () => {
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");

  start.addEventListener("click", listenStartButton);
  var textArea = document.getElementById("text-area");
  var animation = document.getElementById("animation");
  var fontSize = document.getElementById("fontsize");
  var turbo = document.getElementById("turbo");

  /**
   *
   * @param {e}  event of the select.
   */
  animation.onclick = (e) => {
    textArea.innerHTML = ANIMATIONS[e.target.value];
  };

  /**
   *
   * @param {*} e e event of the select.
   */
  fontSize.onclick = (e) => {
    textArea.style.fontSize = sizeObject[e.target.value];
  };

  /**
   * Changes the speed of the animation.
   */

  turbo.onclick = (e) => {
    animationSpeed = e.target.checked ? 50 : 25;
  };

  start.addEventListener("click", listenStartButton);
  stop.addEventListener("click", listenStopButton);
};

var listenStartButton = () => {
  alert("triggered");
};
var listenStopButton = () => {
  alert("stop clicked");
};

eventhandler();
