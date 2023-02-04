<script lang="ts">
  import Select from "svelte-select";
  export let label;
  export let disabled = false;
  export let placeholder = "";
  export let value = null;

  let items = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];

  $: globalLabelClass =
    "block mb-2  dark:text-gray-200 text-[14px] font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled ? "pointer-events-none opacity-70" : ""}`;
</script>

<div class="flex items-start w-full flex-col">
  {#if label}
    <label for="input" class={globalLabelClass}>{label}</label>
  {/if}
  <Select
    {value}
    on:change={(e) => {
      value = e.detail;
    }}
    {placeholder}
    {items}
    class="foo bar"
  />
</div>
