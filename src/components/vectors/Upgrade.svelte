<script lang="ts">
  export let height = 0;
  export let width = 0;
  export let fill = "";
</script>

<svg
  width={width || 20}
  height={height || 20}
  viewBox="0 0 20 20"
  version="1.1"
  fill={fill || "white"}
  {...$$restProps}
  xmlns="http://www.w3.org/2000/svg"
  ><path d="M5 12.5H15V14H5V12.5Z M5 11L4 7L8 8L10 4L12 8L16 7L15 11H5Z" /></svg
>
