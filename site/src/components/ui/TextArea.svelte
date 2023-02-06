<script lang="ts">
  export let placeholder: string;
  export let value: string;
  export let label: string = "";
  export let leftIcon: any = null;
  export let loading: boolean = false;
  export let error: string = "";
  export let disabled: boolean = false;
  export let size: string = "md";
  export let rows: number = 3;
  export let rounded: string = "sm";
  export let variant: string = "default";

  $: variantClass = {
    default:
      " block w-full sm:text-sm border dark:bg-gray-800 dark:bg-opacity-80 bg-transparent " +
      (error
        ? " border-red-500"
        : "dark:border-gray-700 dark:border-opacity-70 border-gray-300"),
    filled:
      " block w-full sm:text-sm bg-opacity-50 dark:bg-opacity-75 border-opacity-50  border dark:bg-gray-800 dark:bg-gray-800 dark:border-gray-800 bg-gray-200  border-gray-200 ",
    unstyled: " block w-full sm:text-sm  bg-transparent border-transparent ",
  }[variant];

  $: roundedClass = {
    sm: "rounded-[3px]",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[rounded];

  $: sizeClass = {
    sm: "px-2 py-3  leading-4 font-medium  text-[13px] ",
    md: "px-4 py-[14px] font-medium text-sm",
    lg: "px-5 py-4 font-medium text-sm",
  }[size];

  $: globalClass =
    "outline-none mt-2 mb-[2px] max-w-4xl" +
    ` ${disabled ? "pointer-events-none opacity-70" : ""} ` +
    (error
      ? " placeholder-red-500 text-red-500"
      : "dark:text-gray-300 text-gray-500");

  $: globalLabelClass =
    "block mb-0  dark:text-gray-200 text-[14px] font-medium dark:text-gray-300 text-gray-700" +
    ` ${disabled ? "pointer-events-none opacity-70" : ""}`;
</script>

<div class="flex flex-col">
  {#if label}
    <label for="input" class={globalLabelClass}>{label}</label>
  {/if}
  <textarea
    style:resize="vertical"
    {...$$props}
    {rows}
    {placeholder}
    class="{variantClass} {roundedClass} {sizeClass} {globalClass}"
  />
</div>
{#if error}
  <span class="text-[13px] font-medium text-red-500">{error}</span>
{/if}
