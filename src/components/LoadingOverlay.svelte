<script>
  import Loader from "./Loader.svelte";
  import Overlay from "./Overlay.svelte";
</script>

<div class="h-full w-full absolute top-0">
  <div class="h-full flex items-center justify-center relative w-full">
    <div class="w-full h-full absolute">
      <Overlay blur />
    </div>
    <div class="relative z-30">
      <Loader />
    </div>
  </div>
</div>
