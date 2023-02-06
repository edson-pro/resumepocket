<script>
  import Button from "../components/ui/Button.svelte";
</script>

<div class="min-h-[77vh] rounded-3xl pt-20 pb-24 flex flex-col bg-gray-900">
  <main
    class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="flex-shrink-0 flex justify-center">
      <a href="/" class="inline-flex">
        <span class="sr-only">Workflow</span>
        <img class="h-24 w-auto" src="/images/404-error.png" alt="" />
      </a>
    </div>
    <div class="py-8">
      <div class="text-center flex flex-col items-center justify-center">
        <div>
          <p
            class="rounded w-fit bg-primaryLight bg-opacity-25 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            404 error
          </p>
        </div>
        <h1
          class="mb-3 mt-5 font-semibold text-gray-200 tracking-tight text-lg"
        >
          Page not found.
        </h1>
        <p class="mt-2 text-sm font-medium text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-6">
          <Button click={() => {}}>Take me back home</Button>
        </div>
      </div>
    </div>
  </main>
</div>
