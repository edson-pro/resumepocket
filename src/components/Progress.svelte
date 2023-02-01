<script lang="ts">
  export let progress: string;
  export let label: string = "";
  export let color: string = "primary";
  export let rounded: string = "md";
  export let size: string = "md";

  $: roundedClass = {
    xs: "rounded-[2px]",
    sm: "rounded-[4px]",
    md: "rounded-[8px]",
    lg: "rounded-[16px]",
    xl: "rounded-[32px]",
  }[rounded];

  $: sizeClass = {
    xs: "h-[3px]",
    sm: "h-[5px]",
    md: "h-[8px]",
    lg: "h-[12px]",
    xl: "h-[16px]",
  }[size];

  $: colorClass = {
    primary: "bg-primary",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  }[color];
</script>

<div
  class="
      w-full bg-gray-200 dark:bg-gray-700 overflow-hidden',
      {roundedClass}
      {sizeClass}
    "
>
  <div
    style:width={progress}
    class="h-full flex items-center justify-center transition-all
        {roundedClass} 
        {colorClass} 
      "
  >
    {#if label}
      <span>{label}</span>
    {/if}
  </div>
</div>
