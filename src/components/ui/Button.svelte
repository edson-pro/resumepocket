<script lang="ts">
  import Spinner from "./Spinner.svelte";

  export let href: string = "";
  export let disabled: boolean = false;
  export let loading: boolean = false;
  export let fullWidth: boolean = false;
  export let leftIcon: any = null;
  export let rightIcon: any = null;
  export let loaderPosition: string = "left";
  export let size: string = "md";
  export let rounded: string = "sm";
  export let color: string = "primary";
  export let variant: string = "filled";
  export let click;

  $: roundedClass = {
    sm: "rounded-[3px]",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  }[rounded];

  $: variantClass = {
    filled: "bg-opacity-95 hover:bg-opacity-100 text-white",
    light: "bg-opacity-20 hover:bg-opacity-25 text-white",
    outline: "bg-opacity-0 hover:bg-opacity-10 border",
    default: "bg-opacity-50 dark:border-gray-700 hover:bg-opacity-75 border",
    subtle: "bg-opacity-0 hover:bg-opacity-10",
    white: "bg-white",
  }[variant];

  $: sizeClass = {
    sm: "px-3 py-[9px]  leading-4 font-medium  text-[13px] ",
    md: "px-4 py-[7px] font-medium text-[15px]",
    lg: "px-5 py-3 font-medium text-base",
  }[size];

  const bgs = {
    primary: "bg-primary",
    danger: "bg-red-500",
    success: "bg-green-500",
  }[color];

  const texts = {
    primary: "text-primaryLight",
    danger: "text-red-500",
    success: "bg-green-500",
  }[color];

  const borders = {
    primary: "border-primary",
    danger: "border-red-500",
    success: "border-green-500",
  }[color];

  $: colorClass =
    variant === "white"
      ? "text-primary"
      : variant === "default"
      ? "text-gray-800 dark:text-gray-400 border-gray-300 bg-gray-800"
      : variant === "subtle" || variant === "light"
      ? `${texts} + ${bgs}`
      : bgs +
        " " +
        (variant === "" || variant === "outline" ? texts : " ") +
        " " +
        (variant === "outline" ? borders : " ");

  $: globalClass =
    "inline-flex outline-none items-center truncate justify-center relative my-1 cursor-pointer select-none active:translate-y-[1px]" +
    ` ${disabled || loading ? "pointer-events-none  opacity-70" : ""} ${
      fullWidth ? "w-full" : ""
    }`;
</script>

<a
  href={href || null}
  {...$$restProps}
  on:click={click}
  class="{globalClass} {variantClass} {sizeClass} {colorClass} {roundedClass}"
>
  {#if leftIcon && !loading}
    <svelte:component
      this={leftIcon}
      size={"16"}
      class={fullWidth ? "mr-4" : "mr-2"}
    />
  {/if}
  {#if loaderPosition === `left` && loading}
    <div class={fullWidth ? "mr-4" : "mr-2"}>
      <Spinner />
    </div>
  {/if}
  <slot>Click me</slot>
  {#if loaderPosition === `right` && loading}
    <div class="ml-2">
      <Spinner />
    </div>
  {/if}
  {#if rightIcon && !loading}
    <svelte:component this={rightIcon} size={"16"} class={"ml-2"} />
  {/if}
</a>
