<script lang="ts">
	import '../app.css';
 
	let value = $state(1);
    const value_min = 0.1;
    const value_max = 1.6;

    const maxAttempts = 10;
    let outputs: Array<Array<string>> = $state([]);

	function doSomeMaths() {
        let x = value;
        if (x < value_min || x > value_max) return; // parameter out of range

        let result = 0.97642 * Math.exp(-((x - 1.2)**2) / (2 * (0.463)**2));

        if (outputs.length >= maxAttempts) return;

		outputs.push(
            [x.toFixed(2), result.toFixed(3)],
        );
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge – Coupler Thickness</h1>

    <article class="space-y-8 text-center">
        <img src="" alt="" width="400" height="300" class="bg-surface-overlay mx-auto">
        <p>Gathers light from the laser.</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md w-md max-w-full">
        <p class="text-center pb-6">Measurements remaining: <span class="text-seagate">{maxAttempts - outputs.length}</span></p>
        <form class="flex flex-col mb-6" onsubmit={e => {
            e.preventDefault();
            doSomeMaths();
        }}>
            <div class="flex flex-col sm:flex-row gap-6 mb-6">
                <div class="flex-1">
                    <label for="input1" class="block font-medium mb-2 text-primary">Coupler Thickness</label>
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
                <td>Thickness</td>
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