<script lang="ts">
    import Router from 'svelte-spa-router'
    import Nav from './lib/Nav.svelte';

    import Home from './routes/Home.svelte'
    import Challenge1 from './routes/Challenge1.svelte';
    import Challenge2 from './routes/Challenge2.svelte';
    import NotFound from './routes/404.svelte'

    const routes = {
        // Exact path
        '/': Home,
        '/challenge-1': Challenge1,
        '/challenge-2': Challenge2,
        '*': NotFound,
    }
</script>

<div class="min-h-screen flex flex-col w-full">
    <Nav></Nav>
    <Router {routes}/>
</div>