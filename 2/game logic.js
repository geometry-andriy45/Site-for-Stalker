document.addEventListener("DOMContentLoaded", () => {
  // Ліхтарик - стежить за мишкою
  document.body.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
  });

  // Звук кнопки
  const buttons = document.querySelectorAll(".sound");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const clickSound = new Audio("pda.mp3");
      clickSound.play();
    });
  });

  // Прості квестові вибори
  const questButton = document.getElementById("start-quest");
  if (questButton) {
    questButton.addEventListener("click", () => {
      const result = confirm("Ти бачиш тінь у тумані. Підійти ближче?");
      if (result) {
        alert("Це був Снорк! Ти ледве встиг втекти!");
      } else {
        alert("Ти залишився в безпеці, але втратив шанс знайти артефакт.");
      }
    });
  }
});
