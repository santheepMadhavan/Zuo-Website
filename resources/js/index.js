import "../css/index.scss";

const load = () => {
  const rightButton = document.getElementById("right");
  const leftButton = document.getElementById("left");
  const stepper = document.getElementById("stepper");

  const cardContainer = document.getElementsByClassName(
    "carousal-card-container"
  )[0];

  rightButton.addEventListener("click", (e) => {
    cardContainer.scrollTo({
      top: 0,
      left: cardContainer.scrollLeft + 300,
      behavior: "smooth",
    });
  });

  leftButton.addEventListener("click", (e) => {
    cardContainer.scrollTo({
      top: 0,
      left: cardContainer.scrollLeft - 300,
      behavior: "smooth",
    });
  });

  stepper.addEventListener("click", (e) => {
    const targetElement = e.target;
    console.log(targetElement.classList);
    if (
      targetElement.classList[0] == "stepper__step" &&
      targetElement.classList.length == 1
    ) {
      const allSteps = document.querySelectorAll(".stepper__step");
      allSteps.forEach((step) => step.classList.remove("active"));
      targetElement.classList.add("active");
    }
  });

  rightButton.click();
};

window.onload = load;
