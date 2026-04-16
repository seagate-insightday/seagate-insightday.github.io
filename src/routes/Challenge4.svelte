<script lang="ts">
	import '../app.css';
    import discImage from '../assets/disc.png?enhanced';
	let width_value = $state(5);
	let length_value = $state(30);
    const width_min = 5;
    const width_max = 25;
    const length_min = 30;
    const length_max = 120;

    const maxAttempts = 10;
    let outputs: Array<Array<string>> = $state([]);

	function doSomeMaths() {
        let [w, L] = [width_value, length_value];
        if (w < width_min || w > width_max) return; // parameter out of range
        if (L < length_min || L > length_max) return;
        const K = 1;
        const wc = 10;
        const Lc = 60;

        let result = K * ((w * L) / (((1 + w/wc)**2) * ((1 + L/Lc)**2)));
        if (outputs.length >= maxAttempts) return;

		outputs.push(
            [w.toFixed(2), L.toFixed(2), result.toFixed(2)]
        );
	}
</script>

<main class="grow p-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6">
    <h1 class="text-3xl mb-6 mt-4">Challenge – Plasmonic Disc</h1>

    <article class="space-y-8 text-center">
        <enhanced:img src={discImage} alt="On the left is a 2D heatmap of the plasmonic disc. Large bands of yellow emanate from the blue plasmonic disc. On the right is a schematic of the mode converter - an ellipse with arrows marking its length and width." width="400" height="152" class="bg-surface-overlay mx-auto"/>
        <p>Confines the light to subwavelength dimensions.</p>
    </article>

    <section class="bg-surface-overlay p-6 rounded-xl shadow-md w-md max-w-full">
        <p class="text-center pb-6" role="status">Measurements remaining: <span class="text-seagate">{maxAttempts - outputs.length}</span></p>
        <form class="flex flex-col mb-6" onsubmit={e => {
            e.preventDefault();
            doSomeMaths();
        }}>
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
                    <div class="input-range text-sm flex flex-row justify-around px-4 text-secondary mt-1" aria-hidden="true">
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

                <span class="sr-only">Results are stored in a table below.</span>
                <input type="submit" hidden />
            </div>
            <button type="submit" class="text-xl font-bold bg-seagate p-4 rounded-lg text-center">Measure</button>
        </form>

    </section>
    <table class="output-table text-center" aria-label="Measurement results">
        <thead>
            <tr class="border-y-2 border-surface-overlay">
                <td>Width</td>
                <td>Length</td>
                <td>Normalised P<sub>disc</sub></td>
            </tr>
        </thead>
        <tbody role="log" aria-live="assertive">
            {#each outputs as output}
                <tr>
                    <td><span class="sr-only">Width:</span>{output[0]}</td>
                    <td><span class="sr-only">Length:</span>{output[1]}</td>
                    <td><span class="sr-only">Normalised P<sub>disc</sub>:</span>{output[2]}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>