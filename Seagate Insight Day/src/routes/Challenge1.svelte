<script lang="ts">
	import '../app.css';
 
	let value = $state(5);
    const value_min = 0.5;
    const value_max = 10;

    const maxOutputs = 5;
    let outputs: Array<Array<string>> = $state([]);

	function doSomeMaths() {
        let x = value;
        if (x < value_min || x > value_max) return; // parameter out of range

        let result = 0.95 * Math.exp(-(((x - 4.15) ** 2) / (2 * (1.7201 ** 2))));
        if (value > 4.15) {
            result = 0.95 * Math.exp(-(((x - 4.15) ** 2) / (2 * (3.8529 ** 2))));
        }

        if (outputs.length >= maxOutputs) return;

		outputs.push(
            [x.toFixed(2), result.toFixed(3)],
        );
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge 1</h1>

    <article class="space-y-8 text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima odit explicabo. Cum, sint voluptates. Quos voluptatem explicabo enim, nobis dolores libero culpa aspernatur saepe dicta in inventore! Enim ipsam unde odit praesentium dignissimos, quis optio culpa tempora asperiores. Neque dignissimos vitae incidunt pariatur et repellat accusamus sequi voluptatem ipsa?</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md w-md max-w-full">
        <p class="text-center pb-6">Measurements remaining: <span class="text-seagate">{maxOutputs - outputs.length}</span></p>
        <form class="flex flex-col mb-6" onsubmit={e => {
            e.preventDefault();
            doSomeMaths();
        }}>
            <div class="flex flex-col sm:flex-row gap-6 mb-6">
                <div class="flex-1">
                    <label for="input1" class="block font-medium mb-2 text-primary">Coupler Width</label>
                    <input
                    type="number"
                    id="input1"
                    min={value_min}
                    max={value_max}
                    step={0.01}
                    bind:value={value}
                    class="w-full rounded-lg bg-surface border-2 border-transparent text-primary p-3 focus:border-seagate invalid:border-red-900! outline-none transition-colors"
                    />
                    <div class="input-range text-sm flex flex-row justify-around px-4 text-secondary mt-1">
                        <span>{value_min}</span>
                        <span>-</span>
                        <span>{value_max}</span>
                    </div>
                </div>
    
                <input type="submit" hidden />
            </div>
            <button type="submit" class="text-xl font-bold bg-seagate p-4 rounded-lg text-center">Measure</button>
        </form>
    </section>
    <table class="output-table text-center">
        <thead>
            <tr class="border-y-2 border-surface-overlay">
                <td>Width</td>
                <td>Output</td>
            </tr>
        </thead>
        <tbody>
            {#each outputs as output}
                <tr>
                    <td>{output[0]}</td>
                    <td>{output[1]}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>