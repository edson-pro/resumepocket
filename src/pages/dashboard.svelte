<script>
  import Button from "@/components/ui/Button.svelte";
  import Empty from "@/components/ui/Empty.svelte";
  import { PlusSquareIcon } from "svelte-feather-icons";

  let active = "all";
</script>

<div class="max-w-6xl px-3 mx-auto">
  <div>
    <div>
      <h4 class="text-xl font-medium text-white">Welcome back, Ntwali.</h4>
      <p class="text-gray-400 mt-3 text-base">
        Keep track of your progress and receive useful tips on how to improve
        it.
      </p>
    </div>
    <div class="my-5">
      <div class="p-6 rounded-md bg-gray-800 bg-opacity-75 py-4">
        <div class="flex items-center justify-between">
          <div class="flex max-w-2xl  justify-start flex-col gap-4">
            <h4 class="font-medium text-white text-lg">
              Ai resume & cover letter.
            </h4>
            <p class="leading-8">
              Let the world's most powerful artificial intelligence write your
              resume and cover letter for you. It only takes a second to
              generate your first draft.
            </p>
            <div class="flex items-center gap-3">
              <Button variant="outline" click={() => {}}>Ai Resume</Button>
              <Button variant="outline" click={() => {}}>Ai Cover letter</Button
              >
            </div>
          </div>
          <div>
            <img class="w-36" src="/vectors/resume.svg" alt="resume" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="border border-gray-800 rounded-md">
        <div
          class="flex px-3 items-center border-b border-gray-800 justify-between py-2"
        >
          <h4 class="font-medium text-white text-base">Your Documents</h4>
          <Button click={() => {}} rightIcon={PlusSquareIcon}>
            Create new
          </Button>
        </div>
        <div class="border-b border-gray-800">
          <ul
            class="flex items-center max-w-md gap-2 mx-4 justify-around capitalize"
          >
            {#each [{ title: "all documents", name: "all" }, { title: "Resumes", name: "resumes" }, { title: "cover letters", name: "letters" }] as item}
              <li class="w-full ">
                <a
                  on:click={() => {
                    active = item.name;
                  }}
                  class="py-4 text-center cursor-pointer w-full block relative {active ===
                  item.name
                    ? 'text-primary font-semibold'
                    : ''}"
                  href={null}
                >
                  {item.title}
                  {#if active === item.name}
                    <div
                      class="w-full h-[3px] rounded-t-md bg-primary absolute bottom-0"
                    />
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        <div class="p-4">
          <Empty
            action={{
              title: "create new resume",
              click: () => {},
            }}
            image="/vectors/resume_2.svg"
            title="Craft your future with a well-written resume"
            desc=" Make it shine and let it speak volumes about your achievements, skills and aspirations."
          />
        </div>
      </div>
    </div>
  </div>
</div>
