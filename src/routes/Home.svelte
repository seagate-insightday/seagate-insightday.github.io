<script lang="ts">
	import '../app.css';
    import heroImg from "../assets/Innovation_8.jpg?enhanced";
</script>

<main class="grow w-full hero-grid">
    <section class="flex flex-col items-center justify-center p-6 md:p-10 gap-10 max-w-2xl mx-auto">
        <h1 class="text-3xl">DoE Interactive Task</h1>
        <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <ul class="flex flex-col gap-2 challenges-list">
            <li>
                <span>Challenge 1</span><a href="#/challenge-1"><button>Go</button></a>
            </li>
            <li>
                <span>Challenge 2</span><a href="#/challenge-2"><button>Go</button></a>
            </li>
            <li>
                <span>Challenge 3</span><a href="#/challenge-3"><button>Go</button></a>
            </li>
            <li>
                <span>Challenge 4</span><a href="#/challenge-4"><button>Go</button></a>
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

    .challenges-list button {
        height: 2.5rem;
        width: 5rem;
        background: var(--color-seagate);
        border-radius: 0.5rem;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
    }

    .challenges-list button:hover,
    .challenges-list button:active {
        background-color: var(--color-seagate-select);
    }
</style>