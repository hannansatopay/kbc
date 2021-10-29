<script>
    import {link} from 'svelte-spa-router';
    import { score, highScore } from './stores.js';

    export let headerScore;
    export let headerHighScore;

    score.subscribe(value => {
		headerScore = value;
	});

    highScore.subscribe(value => {
		headerHighScore = value;
	});
</script>

<header class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>

        <a class="btn btn-primary me-0 ms-auto mx-2 fw-bold text-white text-decoration-none" href="/leaderboard" use:link>Leaderboard</a>
        <span class="me-0 mx-2 fw-bold">{headerHighScore}</span>
        <span class="me-0 mx-2 text-success fw-bold">{headerScore}</span>
    </div>
</header>

<style>
</style>

