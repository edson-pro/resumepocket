<script lang="ts">
  import Datepicker from "../ui/Datepicker.svelte";
  import Input from "../ui/Input.svelte";
  import TextArea from "../ui/TextArea.svelte";

  export let placeholder = "";
  export let label = "";
  export let name = "";
  let value = "";
</script>

<div>
  <Datepicker {...{ placeholder, label }} bind:value {...$$restProps} />
</div>
