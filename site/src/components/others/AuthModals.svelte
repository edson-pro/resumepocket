<script lang="ts">
  import { modal } from "../../stores/auth-modals";
  import ForgotPasswordModal from "../modals/ForgotPasswordModal.svelte";
  import LoginModal from "../modals/LoginModal.svelte";
  import RegisterModal from "../modals/RegisterModal.svelte";
  const close = () => {
    $modal.open = false;
    $modal.show = "";
  };

  const handle_keydown = (e: any) => {
    if (e.key === "Escape") return close();
  };
</script>

<svelte:window on:keydown|once={handle_keydown} />

<LoginModal {close} open={$modal.open && $modal.show === "login"} />
<RegisterModal {close} open={$modal.open && $modal.show === "register"} />
<ForgotPasswordModal
  {close}
  open={$modal.open && $modal.show === "forgot-password"}
/>
