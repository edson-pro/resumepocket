<script>
  import { ArrowUpIcon } from "svelte-feather-icons";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let y = 0;
  $: arrivedTop = y > 10;
</script>

<svelte:window bind:scrollY={y} />

{#if arrivedTop}
  <a
    href={null}
    on:click={() => {
      y = 0;
    }}
    transition:fly={{
      delay: 250,
      duration: 500,
      x: 0,
      y: 500,
      opacity: 0.5,
      easing: quintOut,
    }}
    class="bg-primary z-50 cursor-pointer inline-flex px-3 py-2 gap-2 fixed bottom-5 right-5 rounded-[3px] text-sm font-medium items-center text-white capitalize"
  >
    <ArrowUpIcon class="h-4 text-white stroke-current w-4 stroke-3" />
    <span>Scroll To Top</span>
  </a>
{/if}
