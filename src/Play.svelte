<script>
  import {arr} from './questions.js';
  import { score, highScore } from './stores.js';

  import Swal from 'sweetalert2';

  let i = 0;
  let max = arr.length;
  let correct;

  if (localStorage.getItem("highScore")) highScore.set(localStorage.getItem("highScore"));

  let question, optionA, optionB, optionC, optionD;

    function nextQuestion() {
        score.set(i);
        let options = [arr[i]['options'][0], arr[i]['options'][1], arr[i]['options'][2], arr[i]['answer']];
        options = options.sort(() => Math.random() - 0.5);
        question = `Question ${i+1}: ${arr[i]['question']}`;
        optionA = options[0];
        optionB = options[1];
        optionC = options[2];
        optionD = options[3];
        correct = arr[i]['answer'];
    }

    nextQuestion();

    function setHighScore () {
        let hs = localStorage.getItem("highScore");
        if (hs) {
            if (i > hs) {
                localStorage.setItem("highScore", i);
            }
        } else {
            localStorage.setItem("highScore", i);
        }
        highScore.set(localStorage.getItem("highScore"));
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
                    title: 'You loose!',
                    icon: 'error',
                    confirmButtonText: 'Try again!'
                });
            }
        } else {
            setHighScore();
            i = 0;
            nextQuestion();
            Swal.fire({
                title: 'You solved every question!',
                icon: 'success',
                confirmButtonText: 'Go again!'
            });
        }
    }
</script>

<main>
	<div class="card p-4 shadow rounded-3">
        <h4>{question}</h4>
        <ul class="ps-0">
            <li class="btn btn-outline-primary d-flex my-2" on:click={() => clicked(optionA)}>{optionA}</li>
            <li class="btn btn-outline-primary d-flex my-2" on:click={() => clicked(optionB)}>{optionB}</li>
            <li class="btn btn-outline-primary d-flex my-2" on:click={() => clicked(optionC)}>{optionC}</li>
            <li class="btn btn-outline-primary d-flex my-2" on:click={() => clicked(optionD)}>{optionD}</li>
        </ul>
    </div>
</main>

<style>
</style>