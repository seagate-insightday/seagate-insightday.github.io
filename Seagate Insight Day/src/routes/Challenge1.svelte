<script lang="ts">
	import '../app.css';
 
	let value = $state(5);
    const valueMin = 0.5;
    const valueMax = 10;


	function doSomeMaths(x: number): string {
        if (x < valueMin || x > valueMax) return "Parameter out of range";

        let result = 0.95 * Math.exp(-(((x - 4.15) ** 2) / (2 * (1.7201 ** 2))));
        if (value > 4.15) {
            result = 0.95 * Math.exp(-(((x - 4.15) ** 2) / (2 * (3.8529 ** 2))));
        }
		return result.toString();
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge 1</h1>

    <article class="space-y-8 text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima odit explicabo. Cum, sint voluptates. Quos voluptatem explicabo enim, nobis dolores libero culpa aspernatur saepe dicta in inventore! Enim ipsam unde odit praesentium dignissimos, quis optio culpa tempora asperiores. Neque dignissimos vitae incidunt pariatur et repellat accusamus sequi voluptatem ipsa?</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md w-md max-w-full">
        <div class="flex flex-col sm:flex-row gap-6 mb-6">
            <div class="flex-1">
                <label for="input1" class="block font-medium mb-2 text-primary">Coupler Width</label>
                <input
                type="number"
                id="input1"
                min={valueMin}
                max={valueMax}
                step={0.01}
                bind:value={value}
                class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate invalid:border-red-900! outline-none transition-colors"
                />
                <div class="input-range text-sm flex flex-row justify-around px-4 text-secondary mt-1">
                    <span>{valueMin}</span>
                    <span>-</span>
                    <span>{valueMax}</span>
                </div>
            </div>
        </div>

        <span class="block font-medium text-primary">Output</span> 
        <div class="output-box text-xl font-bold bg-seagate p-4 rounded-lg text-center">
            <span class="text-white ml-1">{doSomeMaths(value)}</span>
        </div>
    </section>
</main>