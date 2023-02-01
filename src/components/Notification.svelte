<script lang="ts">
  import CloseButton from "./CloseButton.svelte";
  import Loader from "./Loader.svelte";

  export let message: string;
  export let title: string;
  export let loading: boolean = false;
  export let variant: string = "default";
  export let close = null;
</script>

<div>
  <div
    class="dark:bg-gray-800 gap-8 shadow-md border dark:border-gray-700 dark:border-opacity-50 border-gray-200 bg-white max-w-[600px] relative flex items-center justify-between p-3 rounded-[4px]"
  >
    <div class="flex gap-3 self-stretch">
      {#if loading}
        <div class="flex items-center justify-center mr-2">
          <Loader />
        </div>
      {:else}
        <div>
          {#if variant === "default"}
            <div class="h-full bg-primary w-[6px] rounded-md" />
          {/if}
          {#if variant === "danger"}
            <div class="flex items-center justify-center mr-2">
              <div
                class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
          {/if}
          {#if variant === "success"}
            <div class="flex items-center justify-center mr-2">
              <div
                class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center"
              >
                <svg
                  class="icon icon-tabler icon-tabler-check"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/check
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          {/if}
        </div>
      {/if}

      <div class="flex flex-col items-start gap-3">
        <h4 class="dark:text-white text-gray-800 font-medium text-[15px]">
          {title}
        </h4>
        <p class="dark:text-gray-400 text-gray-500 font-medium text-[14px]">
          {message}
        </p>
      </div>
    </div>
    <CloseButton click={close} />
  </div>
</div>
