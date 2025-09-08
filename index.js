 //  heart count
    let loveCount = 0;
    const loveDisplay = document.getElementById("love-count");
    const hearts = document.querySelectorAll(".fa-heart");

    hearts.forEach(heart => {
      heart.addEventListener("click", () => {
        heart.classList.toggle("fa-solid");
        heart.classList.toggle("text-red-500");

        loveCount += heart.classList.contains("fa-solid") ? 1 : -1;
        loveDisplay.textContent = loveCount;
      });
    });
