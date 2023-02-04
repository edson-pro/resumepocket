<script lang="ts">
  import AppForm from "../forms/AppForm.svelte";
  import AppFormField from "../forms/AppFormField.svelte";
  import SubmitButton from "../forms/SubmitButton.svelte";
  import Modal from "../ui/Modal.svelte";
  export let open: boolean = false;
  export let close: any = null;
</script>

<Modal size="md" {open}>
  <div slot="body" class="px-1">
    <div class="mt-5 mb-4 flex flex-col justify-center items-center">
      <h4 class="text-[20px] text-white title mb-1 font-semibold">
        Forgot your password
      </h4>
      <p class="sub-title leading-7 max-w-md font-medium text-[16px]">
        Enter the email address associated with your account. We will send a
        reset link to your email.
      </p>
    </div>

    <div>
      <AppForm>
        <div>
          <AppFormField name="email" label="Email" placeholder="Enter email" />
        </div>
        <div class="mt-5">
          <SubmitButton fullWidth>Send reset link</SubmitButton>
        </div>
      </AppForm>
      <div
        class="mt-3 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
      >
        <span>Don't have an account?</span>
        <a class="" href="/"><span class="text-primaryLight">Sign Up.</span></a>
      </div>
    </div>
  </div>
  <div slot="footer" />
</Modal>
