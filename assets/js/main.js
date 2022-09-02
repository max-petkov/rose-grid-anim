function roseGrid(prop) {
  const grid = document.querySelector(".rose-grid");
  const randomPosition = !prop.randomPosition ? false : true;
  const durationPosition = !prop.durationPosition ? 2000 : prop.durationPosition;

  generateRoses();
  animate();

  function generateRoses() {
    for (let i = 0; i < 16; i++) {
      grid.insertAdjacentHTML(
        "beforeend",
        `<svg class="rose" width="128" style="transform: rotate(calc(90deg * ${renderGridVariant({ chooseVariant: 1, position: i + 1 })})); transform-origin: center; transition: transform ${prop.animation.duration}s ${prop.animation.ease}" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M128 128C128 111.191 124.689 94.5462 118.257 79.0165C111.824 63.4868 102.396 49.3762 90.5097 37.4903C78.6238 25.6044 64.5132 16.176 48.9835 9.74342C33.4538 3.31082 16.8092 -7.34753e-07 0 0L5.59506e-06 128H128Z" fill="var(--color-rose)"/>
        </svg>`
      );
    }
  }

  function animate() {
    if (randomPosition) {
      const roses = document.querySelectorAll(".rose");
      setInterval(function () {
        roses.forEach((rose) => {
          const rotatePosition = 90 * Math.ceil(Math.random() * 4);
          rose.style.transform = `rotate(${rotatePosition}deg)`;
        });
      }, durationPosition);
    }

    if (!randomPosition) {
      let variantNumber = 0;
      const roses = document.querySelectorAll(".rose");

      setInterval(function () {
        if (variantNumber >= 12) variantNumber = 0;
        variantNumber += 1;

        roses.forEach((rose, i) => {
          rose.style.transform = `rotate(calc(90deg * ${renderGridVariant({chooseVariant: variantNumber,position: i + 1})}))`;
        });
      }, durationPosition);
    }
  }
}

roseGrid({
  durationPosition: 2000,
  randomPosition: false,
  animation: {
    ease: "ease-in",
    duration: 0.4,
  },
});
