<script>
  import { db, app } from "./firebase.js";
  import { getAnalytics } from "firebase/analytics";

  import { collection, doc, addDoc, updateDoc } from "firebase/firestore";

  import { arr } from "./questions.js";
  import { score, highScore } from "./stores.js";

  import Swal from "sweetalert2";

  const analytics = getAnalytics(app);

  let i = 0;
  let max = arr.length;
  let correct;

  if (localStorage.getItem("highScore"))
    highScore.set(localStorage.getItem("highScore"));

  if (!localStorage.getItem("user")) {
    Swal.fire({
      title: "Enter your name",
      input: "text",
      confirmButtonText: "Lets Play!",
      allowOutsideClick: false,
    }).then(async (result) => {
      const docRef = await addDoc(collection(db, "Leaderboard"), {
        name: result.value,
        score: 0,
      });
      localStorage.setItem("user", docRef.id);
      localStorage.setItem("name", result.value);
    });
  }

  let question, optionA, optionB, optionC, optionD;

  function nextQuestion() {
    score.set(i);
    let options = [
      arr[i]["options"][0],
      arr[i]["options"][1],
      arr[i]["options"][2],
      arr[i]["answer"],
    ];
    options = options.sort(() => Math.random() - 0.5);
    question = `Question ${i + 1}: ${arr[i]["question"]}`;
    optionA = options[0];
    optionB = options[1];
    optionC = options[2];
    optionD = options[3];
    correct = arr[i]["answer"];
  }

  nextQuestion();

  async function setHighScore() {
    let hs = localStorage.getItem("highScore");
    if (hs) {
      if (i > hs) {
        localStorage.setItem("highScore", i);
      }
    } else {
      localStorage.setItem("highScore", i);
    }
    highScore.set(localStorage.getItem("highScore"));
    await updateDoc(doc(db, "Leaderboard", localStorage.getItem("user")), {
      score: parseInt(localStorage.getItem("highScore")),
    });
  }

  function clicked(clicked) {
    if (i < max - 1) {
      if (clicked == correct) {
        i = i + 1;
        nextQuestion();
      } else {
        setHighScore();
        i = 0;
        nextQuestion();
        Swal.fire({
          title: "You loose!",
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    } else {
      setHighScore();
      i = 0;
      nextQuestion();
      Swal.fire({
        title: "You solved every question!",
        icon: "success",
        confirmButtonText: "Go again!",
      });
    }
  }
</script>

<main>
  <div class="card p-4 shadow rounded-3">
    <h4>{question}</h4>
    <ul class="ps-0">
      <li
        class="btn btn-outline-primary d-flex my-2"
        on:click={() => clicked(optionA)}
      >
        {optionA}
      </li>
      <li
        class="btn btn-outline-primary d-flex my-2"
        on:click={() => clicked(optionB)}
      >
        {optionB}
      </li>
      <li
        class="btn btn-outline-primary d-flex my-2"
        on:click={() => clicked(optionC)}
      >
        {optionC}
      </li>
      <li
        class="btn btn-outline-primary d-flex my-2"
        on:click={() => clicked(optionD)}
      >
        {optionD}
      </li>
    </ul>
  </div>
</main>

<style>
</style>
