<script lang="ts">
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MoreHorizontalIcon,
  } from "svelte-feather-icons";
  import { onMount } from "svelte";
  import handlePaginationSlice from "../utils/handlePaginationSlice";

  export let page: number = 1;
  export let total: number = 50;
  export let size: number = 10;
  export let change: any = null;

  $: currentPageSize = size;

  let currentPage = page;
  $: pageCount = Math.max(1, Math.ceil(total / currentPageSize));
  $: isFirstPage = currentPage === 1;
  $: isLastPage = currentPage === pageCount;
  const next = () => {
    currentPage++;
  };
  const prev = () => {
    currentPage--;
  };

  const handleChange = (page) => {
    change(page);
  };

  $: formated = handlePaginationSlice({ currentPage, pageCount });

  const handleCurrent = (item) => {
    if (typeof item === "number") {
      currentPage = item;
    }
  };
</script>

<nav class="flex items-center gap-4">
  <a
    href={null}
    on:click={prev}
    class="
       {isFirstPage ? 'pointer-events-none opacity-70' : ''} 
        h-8 hover:bg-gray-200 dark:hover:bg-gray-700 hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-white text-sm 
      "
  >
    <ChevronLeftIcon size={"16"} class="text-gray-700 dark:text-gray-300" />
  </a>
  <div class="flex items-center gap-3">
    {#each formated as item}
      <a
        href={null}
        on:click={() => handleCurrent(item)}
        class="
            {item === currentPage
          ? 'bg-primary  bg-opacity-75 text-white'
          : 'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700'} 
            {item === 'dot' ? 'pointer-events-none' : ''}
            h-8 dark:text-white  hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-gray-700 font-medium  text-sm"
      >
        {#if item === "dot"}
          <div>
            <MoreHorizontalIcon class="w-5 h-5" />
          </div>
        {:else}
          <div>
            {item}
          </div>
        {/if}
      </a>
    {/each}
  </div>

  <a
    href={null}
    on:click={next}
    class="
        {isLastPage ? 'pointer-events-none opacity-75' : ''} 
        ' h-8 hover:bg-gray-200 dark:hover:bg-gray-700 hover:bg-opacity-75 cursor-pointer transition-all w-8 flex items-center rounded-[3px] justify-center text-white text-sm
      "
  >
    <ChevronRightIcon class="h-4 w-4 text-gray-700 dark:text-gray-300" />
  </a>
</nav>
