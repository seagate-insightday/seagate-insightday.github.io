<script lang="ts">
	import '../app.css';
 
	let value1 = $state(0);
	let value2 = $state(0);

	function doSomeMaths(x: number, y: number) {
		return x ** 2 + y;
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge 1</h1>

    <article class="space-y-8 text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima odit explicabo. Cum, sint voluptates. Quos voluptatem explicabo enim, nobis dolores libero culpa aspernatur saepe dicta in inventore! Enim ipsam unde odit praesentium dignissimos, quis optio culpa tempora asperiores. Neque dignissimos vitae incidunt pariatur et repellat accusamus sequi voluptatem ipsa?</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md">
        <div class="flex flex-col sm:flex-row gap-6 mb-6">
        <div class="flex-1">
            <label for="input1" class="block font-medium mb-2 text-primary">Input 1</label>
            <input
            type="number"
            id="input1"
            bind:value={value1}
            class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate outline-none transition-colors"
            />
        </div>

        <div class="flex-1">
            <label for="input2" class="block font-medium mb-2 text-primary">Input 2</label>
            <input
            type="number"
            id="input2"
            bind:value={value2}
            class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate outline-none transition-colors"
            />
        </div>
        </div>

        <span class="block font-medium text-primary">Output</span> 
        <div class="output-box text-xl font-bold bg-seagate p-4 rounded-lg text-center">
            <span class="text-white ml-1">{doSomeMaths(value1, value2)}</span>
        </div>
    </section>
</main>