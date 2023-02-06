<script>
  import AuthModals from "../components/others/AuthModals.svelte";
  import Footer from "../components/sections/Footer.svelte";
  import Navbar from "../components/sections/Navbar.svelte";
  import "./styles.css";
  import { page } from "$app/stores";

  const stables = ["/dashboard/resumes/[id]/edit"];
</script>

{#if !stables.includes($page.route.id?.toString() || "")}
  <div class="app">
    <Navbar />
    <div class="pt-20 pb-8">
      <slot />
    </div>
    <Footer />
  </div>
{:else}
  <slot />
{/if}

<AuthModals />

<style>
</style>
