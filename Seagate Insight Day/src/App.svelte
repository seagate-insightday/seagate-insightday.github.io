<script lang="ts">

let value1=$state(0);
let value2=$state(0);


</script>

<main>
<nav>
<img src="" alt="Seagate Logo">
  <h1>
    DoE Interactive Task - Challenge 1 
  </h1>
<ul>
  <li>Home</li>
  <li>Challenge 1</li>
  <li>Challenge 2</li>
  <li>Challenge 3</li>
</ul>
</nav>
<article>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima odit explicabo. Cum, sint voluptates. Quos voluptatem explicabo enim, nobis dolores libero culpa aspernatur saepe dicta in inventore! Enim ipsam unde odit praesentium dignissimos, quis optio culpa tempora asperiores. Neque dignissimos vitae incidunt pariatur et repellat accusamus sequi voluptatem ipsa?</p>
  <section>
    <div class="input-container">
      <div><input type="number" name="Input 1" id="input1" bind:value={value1}></div>
      <div><input type="number" name="Input 2" id="input2" bind:value={value2}></div>
    </div>
    <div class="outputs-container">
      <span> Output: {value1+value2}</span>
    </div>
  </section>
</article>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
