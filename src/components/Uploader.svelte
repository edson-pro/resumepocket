<script lang="ts">
  import LoadingOverlay from "./LoadingOverlay.svelte";

  export let loading: boolean = false;
  export let drop: any;
  let dropZoneRef;
  let inputZoneRef;
  let isOverDropZone;

  function onDrop(files: File[] | null) {
    drop(files);
  }

  $: dropClass =
    `flex relative cursor-pointer relative overflow-hidden m-3 transition-all  select-none  flex-col justify-center items-center border-2 p-6 rounded-md border-dashed  max-w-2xl` +
    ` ${
      isOverDropZone
        ? "dark:bg-primary dark:bg-opacity-30 bg-primary bg-opacity-20 border-primary border-opacity-70 dark:border-primary"
        : "dark:bg-gray-800 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 border-gray-300 dark:border-gray-700"
    } ${loading ? "pointer-events-none" : ""} `;

  $: subtitleClass = isOverDropZone
    ? "text-primary dark:text-primaryLight"
    : "text-gray-500 dark:text-gray-400";

  const openFileDialog = () => {
    inputZoneRef.click();
  };

  const handleChange = (event: any) =>
    onDrop([...event.target.files].map((file) => file));

  const onDragEvent = (action, e) => {
    e.preventDefault();
    e.stopPropagation();
    switch (action) {
      case "drop":
        isOverDropZone = false;
        break;
      case "enter":
        isOverDropZone = true;
        break;
      case "leave":
        isOverDropZone = false;
        break;
      case "over":
        isOverDropZone = true;
        break;
      default:
        isOverDropZone = false;
        break;
    }
  };
</script>

<a
  href={null}
  on:click={openFileDialog}
  bind:this={dropZoneRef}
  class={dropClass}
  on:dragenter={(e) => onDragEvent("enter", e)}
  on:dragover={(e) => onDragEvent("over", e)}
  on:dragleave={(e) => onDragEvent("leave", e)}
  on:drop={(e) => onDragEvent("drop", e)}
>
  {#if loading}
    <LoadingOverlay />
  {/if}
  <input hidden bind:this={inputZoneRef} type="file" on:change={handleChange} />
  <img class="h-16 w-16 my-3" src="/images/image_icon.png" alt="upload file" />
  <h4 class="font-semibold text-base text-gray-800 dark:text-gray-200 my-2">
    Drag and drop you files here, or Browse
  </h4>
  <p class="{subtitleClass} font-medium text-sm my-2">
    supports JPG,PNG,WEBP,MP4 and max 10Mb
  </p>
</a>
