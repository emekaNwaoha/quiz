window.addEventListener("load", function () {
    let form = document.getElementById("form1")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        let checked = document.querySelector('input[name="question1"]:checked').value;
        var integer = parseInt(checked)
        let checked2 = document.querySelector('input[name="question2"]:checked').value;
        var integer2 = parseInt(checked2)
        let checked3 = document.querySelector('input[name="question3"]:checked').value;
        var integer3 = parseInt(checked3)
        let checked4 = document.querySelector('input[name="question4"]:checked').value;
        var integer4 = parseInt(checked4)
        let totalScore = integer + integer2 + integer3 + integer4
        let grade = document.getElementById("grade")
      grade.innerHTML=totalScore
      localStorage.setItem("total", totalScore)
      window.location.href="Quizy2.html"
    });
});