<script lang="ts">
	import '../app.css';
 
	let width_value = $state(5);
	let length_value = $state(30);
    const width_min = 5;
    const width_max = 25;
    const length_min = 30;
    const length_max = 120;

	function doSomeMaths(w: number, L: number): string {
        if (w < width_min || w > width_max) return "Parameter out of range";
        if (L < length_min || L > length_max) return "Parameter out of range";
        const K = 1;
        const wc = 10;
        const Lc = 60;

        let result = K * ((w * L) / (((1 + w/wc)**2) * ((1 + L/Lc)**2)))
		return result.toString();
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge 2</h1>

    <article class="space-y-8 text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima odit explicabo. Cum, sint voluptates. Quos voluptatem explicabo enim, nobis dolores libero culpa aspernatur saepe dicta in inventore! Enim ipsam unde odit praesentium dignissimos, quis optio culpa tempora asperiores. Neque dignissimos vitae incidunt pariatur et repellat accusamus sequi voluptatem ipsa?</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md w-md max-w-full">
        <div class="flex flex-col sm:flex-row gap-6 mb-6">
        <div class="flex-1">
            <label for="input1" class="block font-medium mb-2 text-primary">Width (nm)</label>
            <input
            type="number"
            id="input1"
            min={width_min}
            max={width_max}
            bind:value={width_value}
            class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate invalid:border-red-900! outline-none transition-colors"
            />
            <div class="input-range text-sm flex flex-row justify-around px-4 text-secondary mt-1">
                <span>{width_min}</span>
                <span>-</span>
                <span>{width_max}</span>
            </div>
        </div>

        <div class="flex-1">
            <label for="input2" class="block font-medium mb-2 text-primary">Length (nm)</label>
            <input
            type="number"
            id="input2"
            min={length_min}
            max={length_max}
            bind:value={length_value}
            class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate invalid:border-red-900! outline-none transition-colors"
            />
            <div class="input-range text-sm flex flex-row justify-around px-4 text-secondary mt-1">
                <span>{length_min}</span>
                <span>-</span>
                <span>{length_max}</span>
            </div>
        </div>
        </div>

        <span class="block font-medium text-primary">Normalised P<sub>SDSC</sub></span> 
        <div class="output-box text-xl font-bold bg-seagate p-4 rounded-lg text-center">
            <span class="text-white ml-1">{doSomeMaths(width_value, length_value)}</span>
        </div>
    </section>
</main>