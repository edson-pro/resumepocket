<script lang="ts">
  import { ChevronDownIcon, ChevronUpIcon } from "svelte-feather-icons";
  import AppFormField from "../forms/AppFormField.svelte";
  import AppFormTextarea from "../forms/AppFormTextarea.svelte";
  export let type: string = "employment";
  let expanded = false;
</script>

<div class="border border-gray-800 rounded-[3px] p-3">
  <div>
    <div
      on:click={() => (expanded = !expanded)}
      on:keydown={() => {}}
      class="flex items-center cursor-pointer px-3 py-2 justify-between"
    >
      <h4 class="font-semibold text-primaryLight">(Not specified)</h4>
      <div>
        <a class="cursor-pointer" href={null}>
          {#if !expanded}
            <ChevronDownIcon size="16" strokeWidth={3} />
          {:else}
            <ChevronUpIcon size="16" strokeWidth={3} />
          {/if}
        </a>
      </div>
    </div>
  </div>
  {#if expanded}
    <div class="px-3 pb-2 pt-4">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <AppFormField
          variant="filled"
          label="Job title"
          placeholder="Tob title"
        />
        {#if type === "employment"}
          <AppFormField
            variant="filled"
            label="Employer"
            placeholder="Employer"
          />
        {:else if type === "education"}
          <AppFormField variant="filled" label="Degree" placeholder="Degree" />
        {:else if type === "course"}
          <AppFormField
            variant="filled"
            label="Insititution"
            placeholder="Insititution"
          />
        {/if}
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <AppFormField
          variant="filled"
          label="Start & end date"
          placeholder="Start & end"
        />
        {#if type !== "course"}
          <AppFormField variant="filled" label="City" placeholder="City" />
        {/if}
      </div>
      {#if type !== "course"}
        <div>
          <AppFormTextarea
            variant="filled"
            rows={6}
            placeholder="E.g Created and implemented lesson plan based on the child-led intersts and curiosities"
            label="Description"
          />
        </div>
      {/if}
    </div>
  {/if}
</div>
