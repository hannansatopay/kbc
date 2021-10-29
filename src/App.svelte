<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</svelte:head>

<script>
  import Router from 'svelte-spa-router';

  //  Routes
  import Play from './Play.svelte';
  import Leaderboard from './Leaderboard.svelte';

  // Common Components
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  const routes = {
    '/': Play,
    '/leaderboard': Leaderboard,
  }
</script>

<Header />
<Router {routes} />
<Footer />