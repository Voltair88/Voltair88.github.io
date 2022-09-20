function Answers() {
  const total = 3;
  let correct = 0;
  const q1 = document.forms["quiz"]["q1"].value;
  const q2 = document.forms["quiz"]["q2"].value;
  const q3 = document.forms["quiz"]["q3"].value;
  const results = document.getElementById("results");
  const reset = document.forms["quiz"]["reset"];

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === "") {
      results.innerHTML = `You missed question ${i}`;
      document.getElementById("q" + i).style.backgroundColor = "yellow";
      return false;
    } else {
      document.getElementById("q" + i).style.backgroundColor = "transparent";
    }
  }

  const answers = ["b", "a", "c"];

  for (let i = 1; i <= answers.length; i++) {
    if (eval("q" + i) === answers[i - 1]) {
      correct++;
      document.getElementById("q" + i).style.backgroundColor = "green";
    } else {
      document.getElementById("q" + i).style.backgroundColor = "red";
    }
  }

  reset.onclick = () => {
    for (let i = 1; i <= answers.length; i++) {
      document.getElementById("q" + i).style.backgroundColor = "transparent";
      results.innerHTML = `&nbsp`;
    }
  };

  results.innerHTML = `You scored ${correct} out of ${answers.length}`;
  return false;
}
