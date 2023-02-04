<script lang="ts">
  export let label: string = "";
  export let title: string = "";
  export let subTitle: string = "";
  export let checked: boolean = false;
</script>

<label
  for={"label || title"}
  class="flex cursor-pointer justify-between w-full my-0 select-none items-center"
>
  {#if (title || subTitle) && !label}
    <div class="flex flex-col mr-10">
      {#if title}
        <span
          class="text-[15px] capitalize mb-3 text-gray-700 dark:text-gray-200 font-semibold"
        >
          {title}
        </span>
      {/if}

      {#if subTitle}
        <span class="text-sm text-gray-500 font-normal dark:text-gray-400"
          >{subTitle}</span
        >
      {/if}
    </div>
  {/if}

  <div class="relative">
    <input
      {...$$props}
      bind:checked
      type="checkbox"
      id={"label || title"}
      class="sr-only peer"
    />
    <div
      class="box peer-checked:bg-primary bg-gray-300 dark:bg-gray-700 block h-7 w-12 rounded-full"
    />
    <div
      class="dot peer-checked:translate-x-5 absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition"
    />
  </div>

  {#if label}
    <label
      for={"label || title"}
      class="text-sm cursor-pointer text-gray-700 dark:text-gray-300 flex ml-3"
    >
      {label}
    </label>
  {/if}
</label>
