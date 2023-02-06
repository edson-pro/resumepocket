<script lang="ts">
  export let label;
  export let value;
  export let group;
</script>

<div class="flex my-2 items-center">
  <input
    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-800 dark:checked:bg-primary dark:checked:border-primary checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    type="radio"
    bind:group
    {value}
    id={label}
  />

  {#if label}
    <label
      for={label}
      class="text-sm cursor-pointer font-medium dark:text-gray-300 text-gray-700 flex ml-2"
    >
      {label}
    </label>
  {/if}
</div>

<style scoped>
  .form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E");
  }
</style>
