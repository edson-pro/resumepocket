<script lang="ts">
  export let size: string = "xs";
  export let color: string = "primary";

  $: sizeClass = {
    xs: "w-[18px] h-[18px]",
    sm: "w-[22px] h-[22px]",
    md: "w-[36px] h-[36px]",
    lg: "w-[44px] h-[44px]",
    xl: "w-[58px] h-[58px]",
  }[size];

  $: colorClass = {
    primary: "text-primary stroke-current",
    danger: "text-red-500 stroke-current",
    success: "text-green-500 stroke-current",
    white: "text-white stroke-current",
    dark: "text-gray-700 stroke-current",
    default: "dark:text-gray-400 text-gray-600  stroke-current",
  }[color];
</script>

<svg
  viewBox="0 0 38 38"
  xmlns="http://www.w3.org/2000/svg"
  class="{sizeClass} {colorClass}"
  role="presentation"
>
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(2.5 2.5)" stroke-width="5">
      <circle stroke-opacity=".5" cx="16" cy="16" r="16" />
      <path d="M32 16c0-9.94-8.06-16-16-16">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="0.7s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </g>
</svg>
