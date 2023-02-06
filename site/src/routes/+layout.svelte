<script>
  import Footer from "../components/sections/Footer.svelte";
  import Navbar from "../components/sections/Navbar.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Navbar />
  <div class="pt-20 pb-8">
    <slot />
  </div>
  <Footer />
</div>

<style>
</style>
