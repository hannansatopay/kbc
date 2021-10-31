<script>
    import {link} from 'svelte-spa-router';
    import { score, highScore } from './stores.js';

    export let headerScore;
    export let headerHighScore;

    const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://developer.mozilla.org'
    }

    async function share() {
        await navigator.share(shareData);
    }

    score.subscribe(value => {
		headerScore = value;
	});

    highScore.subscribe(value => {
		headerHighScore = value;
	});

    var requestOptions = { method: 'GET', redirect: 'follow' };

    let temperature = 0;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cbf40c31dc6e53a5b63069b956572b3a", requestOptions)
    .then(response => response.json())
    .then(result => temperature = parseInt(result.main.temp - 273.15))
    .catch(error => console.log('error', error));
</script>

<header class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>

        <span class="ms-auto me-0 mx-2 fw-bold"><i class="bi bi-brightness-alt-high-fill"></i> Temperature: {temperature}</span>
        <a class="btn btn-primary me-0 mx-2 fw-bold text-white text-decoration-none" href="/leaderboard" use:link><i class="bi bi-check2-all"></i> Leaderboard</a>
        <span class="me-0 mx-2 fw-bold" on:click={share}>{headerHighScore}</span>
        <span class="me-0 mx-2 text-success fw-bold">{headerScore}</span>
    </div>
</header>

<style>
</style>

