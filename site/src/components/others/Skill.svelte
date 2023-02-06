<script lang="ts">
  import { ChevronDownIcon, ChevronUpIcon } from "svelte-feather-icons";
  import AppFormField from "../forms/AppFormField.svelte";

  let expanded = false;
</script>

<div class="border border-gray-800 rounded-[3px] px-3 py-2">
  <div>
    <div
      on:click={() => (expanded = !expanded)}
      on:keydown={() => {}}
      class="flex items-center cursor-pointer px-3 py-2 justify-between"
    >
      <div>
        <h4 class="font-semibold text-primaryLight">(Not specified)</h4>
        <span class="text-[14px] mt-1 block">Expert</span>
      </div>
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
          label="Skill"
          placeholder="Enter a skill"
        />

        <AppFormField variant="filled" label="Link" placeholder="Link" />
      </div>
    </div>
  {/if}
</div>
