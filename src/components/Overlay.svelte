<script lang="ts">
  import { fade as fadeT } from "svelte/transition";
  export let blur = false;
  export let dark = false;
  export let fade = false;
  export let zIndex = 100;
  export let click = null;
</script>

<div
  transition:fadeT={fade ? { delay: 0, duration: 200 } : null}
  style:zIndex
  on:keydown
  on:click={click}
  class="
      absolute select-none h-full w-full flex justify-center items-center bg-gray-700 {dark
    ? 'dark:bg-black dark:bg-opacity-50'
    : 'dark:bg-gray-900 dark:bg-opacity-75'}  bg-opacity-75 inset-0 transition-opacity 
      {blur ? `backdrop-blur-sm ` : ''}
    "
/>
