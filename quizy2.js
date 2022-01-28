window.addEventListener("load", function () {
  let form = document.getElementById("form1")
  form.addEventListener("submit", function (e) {
    e.preventDefault()
    let checked5 = document.querySelector('input[name="question5"]:checked').value;
    var integer5 = parseInt(checked5)
    let checked6 = document.querySelector('input[name="question6"]:checked').value;
    var integer6 = parseInt(checked6)
    let checked7 = document.querySelector('input[name="question7"]:checked').value;
    var integer7 = parseInt(checked7)
    let checked8 = document.querySelector('input[name="question8"]:checked').value;
    var integer8 = parseInt(checked8)
    let totalScore = integer5 + integer6 + integer7 + integer8
    var integer9 = parseInt(totalScore)
    let prevScore = localStorage.getItem("total")
    var integer10 = parseInt(prevScore)
    var allScores = integer10 + integer9

    let grade = document.getElementById("grade")
    grade.innerHTML = allScores
    if (allScores < 50) {
      let failed = document.getElementById("congrats");
      failed.innerHTML = "Oops! You failed!";
    }
    else if (allScores > 75) {
      let passed = document.getElementById("congrats");
      passed.innerHTML = "You passed!";
    }
    if (allScores < 100) {
      let almost = document.getElementById("congrats");
      almost.innerHTML = "Wow! Almost there!";
    }
    else if (allScores > 125) {
      let congrats = document.getElementById("congrats");
      congrats.innerHTML = "Congratulations!";
    }

    let modal = document.getElementById("modal")
    modal.classList.toggle("hide")




    let close = document.getElementById("close")
    close.addEventListener("click", function () {
      close.classList.toggle("hide")

    })
  })
});
