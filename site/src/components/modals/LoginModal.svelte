<script lang="ts">
  import AppForm from "../forms/AppForm.svelte";
  import AppFormField from "../forms/AppFormField.svelte";
  import SubmitButton from "../forms/SubmitButton.svelte";
  import Button from "../ui/Button.svelte";
  import Checkbox from "../ui/Checkbox.svelte";
  import Modal from "../ui/Modal.svelte";
  import Google from "../vectors/Google.svelte";
  import { modal } from "../../stores/auth-modals";

  export let open: boolean = false;
  export let close: any = null;
</script>

<Modal {close} size="md" {open}>
  <div slot="body" class="px-1">
    <div class="mt-5 mb-4 flex flex-col justify-center items-center">
      <h4 class="text-[20px] text-white title mb-1 font-semibold">
        Welcome Back
      </h4>
      <p class="sub-title leading-7 max-w-md font-medium text-[16px]">
        Enter your creditials to login your account.
      </p>
    </div>
    <Button fullWidth leftIcon={Google} variant="default" click={() => {}}>
      <span class="py-1 ml-3">Continue with Google</span></Button
    >
    <div class="flex justify-center or items-center text-gray-500 my-3">
      <span class="text-sm mx-2 font-semibold">OR</span>
    </div>
    <div>
      <AppForm>
        <div>
          <AppFormField name="email" label="Email" placeholder="Enter email" />
        </div>
        <div class="mt-3">
          <AppFormField
            name="password"
            label="Password"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <div class="my-2 flex items-center justify-between">
          <Checkbox label="Remember me" />
          <a
            href={null}
            on:click={() => {
              $modal.open = true;
              $modal.show = "forgot-password";
            }}
            ><span class="text-sm cursor-pointer text-primary font-medium"
              >Forgot your password?</span
            ></a
          >
        </div>
        <SubmitButton fullWidth>Login your account</SubmitButton>
      </AppForm>
      <div
        class="mt-3 flex items-center text-sm justify-center text-gray-400 font-medium gap-2"
      >
        <span>Don't have an account?</span>
        <a
          class="cursor-pointer"
          href={null}
          on:click={() => {
            $modal.open = true;
            $modal.show = "register";
          }}><span class="text-primaryLight">Sign Up.</span></a
        >
      </div>
    </div>
  </div>
  <div slot="footer" />
</Modal>
