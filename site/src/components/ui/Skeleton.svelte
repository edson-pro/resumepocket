<script lang="ts">
  export let height: string;
  export let width: string;
  export let rounded: string = "sm";
  export let circle: boolean = false;
  export let margin: string = "";
  export let animate: boolean = true;

  const getRounded = () => {
    return circle
      ? "rounded-full"
      : {
          xs: "rounded-[2px]",
          sm: "rounded-[4px]",
          md: "rounded-[8px]",
          lg: "rounded-[16px]",
          xl: "rounded-[32px]",
          "2xl": "rounded-[64px]",
          "3xl": "rounded-[128px]",
        }[rounded];
  };
  $: roundedClass = getRounded();

  $: animateClass = animate ? " animate-pulse" : "";
</script>

<div
  style:width
  style:height
  class="
    dark:bg-gray-800 bg-opacity-50 bg-gray-300 animate-pulse 
      {roundedClass} 
      {animateClass} 
      {margin} 
    "
/>
