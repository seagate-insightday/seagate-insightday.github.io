<script lang="ts">
	import '../app.css';
    import heroImg from "../assets/Innovation_8.jpg?enhanced";
</script>

<main class="grow w-full hero-grid">
    <section class="flex flex-col items-center justify-center p-6 md:p-10 gap-10 max-w-2xl mx-auto">
        <h1 class="text-3xl">DoE Interactive Task</h1>
        <p class="text-center">
            Challenge: Optimise each of the photonic components to get the maximum output.
        </p>
        <ul class="flex flex-col gap-2 challenges-list">
            <li>
                <a href="#/challenge-1"><span>Coupler Width</span><div class="go-button" aria-hidden="true">Go</div></a>
            </li>
            <li>
                <a href="#/challenge-2"><span>Coupler Thickness</span><div class="go-button" aria-hidden="true">Go</div></a>
            </li>
            <li>
                <a href="#/challenge-3"><span>Mode Converter</span><div class="go-button" aria-hidden="true">Go</div></a>
            </li>
            <li>
                <a href="#/challenge-4"><span>Challenge – Plasmonic Disc</span><div class="go-button" aria-hidden="true">Go</div></a>
            </li>
        </ul>

    </section>
    <section class="">
        <enhanced:img src={heroImg} alt="An engineer uses a magnifying lens to inspect machinery." class="h-full w-full object-cover hero-image bg-surface-overlay" fetchpriority="high" />
    </section>
</main>

<style>
    .hero-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(350px, 100vw), 1fr));
    }

    .hero-image {
        filter: var(--hero-image-filter);
        transition: filter 0.3s ease-in-out;
    }

    .challenges-list li {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .challenges-list span {
        margin-right: 3rem;
    }

    .challenges-list a {
        display: contents;
    }

    .challenges-list .go-button {
        display: inline-block;
        padding: 0.5rem 1.75rem;
        background: var(--color-seagate);
        border-radius: 0.5rem;
        transition: background-color 0.2s ease-in-out;
    }

    .challenges-list .go-button:hover,
    .challenges-list .go-button:active {
        background-color: var(--color-seagate-select);
    }
</style>