<script lang="ts">
  import Button from "./Button.svelte";

  export let title: string = "";
  export let desc: string = "";
  export let action: any;
  export let image: string = "";
  export let click = null;
</script>

<div class="min-h-full pt-20 pb-10 flex flex-col bg-gray-900">
  <main
    class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
  >
    {#if image}
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">empty</span>
          <img class="h-20 w-auto" src={image} alt="" />
        </a>
      </div>
    {/if}
    <div class="py-4">
      <div
        class="text-center max-w-md mx-auto flex flex-col items-center justify-center"
      >
        <h1 class="my-3 font-medium text-gray-200 tracking-tight text-lg">
          {title}
        </h1>
        <p class="mt-2 text-sm leading-7 font-medium text-gray-400">
          {desc}
        </p>
        {#if action}
          <div class="mt-6">
            <Button click={() => action.click()}>{action.title}</Button>
          </div>
        {/if}
      </div>
    </div>
  </main>
</div>
