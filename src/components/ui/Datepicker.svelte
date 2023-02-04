<script lang="ts">
  import { DateInput } from "date-picker-svelte";
  export let value;
  export let label = "";
  export let disabled = false;
  export let placeholder = "";

  $: globalLabelClass =
    "block mb-2  dark:text-gray-200 text-[14px] font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled ? "pointer-events-none opacity-70" : ""}`;
</script>

<div class="flex items-start w-full flex-col">
  {#if label}
    <label for="input" class={globalLabelClass}>{label}</label>
  {/if}
  <DateInput {placeholder} bind:value />
</div>

<style scoped>
</style>
