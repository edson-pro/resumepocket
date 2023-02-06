<script lang="ts">
  import { ChevronDownIcon, ChevronUpIcon } from "svelte-feather-icons";
  import AppFormField from "../forms/AppFormField.svelte";
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
          label="Referent's Full Name"
          placeholder="Name"
        />

        <AppFormField variant="filled" label="Company" placeholder="Company" />
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <AppFormField variant="filled" label="Phone" placeholder="Phone" />

        <AppFormField variant="filled" label="Email" placeholder="Email" />
      </div>
    </div>
  {/if}
</div>
