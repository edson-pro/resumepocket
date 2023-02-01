<script lang="ts">
  export let src = "";
  export let name = "";
  export let size = "md";
  export let variant = "filled";
  export let rounded = "sm";

  const color_with_letters = [
    { color: "#F44336", letters: ["a", "b"] },
    { color: "#E91E63", letters: ["c", "d"] },
    { color: "#9C27B0", letters: ["e", "f"] },
    { color: "#673AB7", letters: ["g", "h"] },
    { color: "#3F51B5", letters: ["i", "j"] },
    { color: "#2196F3", letters: ["k", "l"] },
    { color: "#03A9F4", letters: ["m", "n"] },
    { color: "#00BCD4", letters: ["o", "p"] },
    { color: "#009688", letters: ["q", "r"] },
    { color: "#4CAF50", letters: ["s", "t"] },
    { color: "#8BC34A", letters: ["u", "v", "z"] },
    { color: "#FF9800", letters: ["w", "x", "y"] },
  ];
  $: variantClass = {
    filled: `bg-opacity-100`,
    light: "bg-opacity-30",
    outline: "border",
  }[variant];

  $: sizeClass = {
    xs: "h-4 w-4",
    sm: "h-[26px] w-[26px]",
    md: "h-[38px] w-[38px]",
    lg: "h-[56px] w-[56px]",
    xl: "h-[84px] w-[84px]",
  }[size];

  $: roundedClass = {
    xs: "rounded-[2px]",
    sm: "rounded-[4px]",
    md: "rounded-[8px]",
    lg: "rounded-[16px]",
    xl: "rounded-[32px]",
    full: "rounded-full",
  }[rounded];

  const getColor = () => {
    const color = color_with_letters.find((i) =>
      i.letters.includes(name.toLowerCase().trim()[0] || "g")
    )?.color;
    return variant === "light" ? color + "40" : color;
  };

  $: color = getColor();

  const avatarClass =
    "flex items-center justify-center overflow-hidden capitalize";
</script>

<div class="{avatarClass} {roundedClass} {sizeClass}">
  {#if src}
    <img {src} class="h-full object-cover w-full" />
  {/if}
  {#if !src && name}
    <div
      style:background={color}
      style:color={variant === "light" ? color.slice(0, 7) : "white"}
      class="
        h-full  w-full uppercase flex font-medium tracking-[1px] items-center justify-center
        {variantClass}
      "
    >
      <span
        >{name.split(" ")[0][0] +
          (name?.split(" ")[1] ? name?.split(" ")[1][0] : "")}</span
      >
    </div>
  {/if}
</div>
