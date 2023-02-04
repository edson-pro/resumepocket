<script lang="ts">
  import Demo from "@/views/Demo.svelte";
  import Footer from "./components/sections/Footer.svelte";
  import Navbar from "./components/sections/Navbar.svelte";
  import Dashboard from "./pages/dashboard.svelte";
</script>

<Navbar />

<div class="py-20">
  <Dashboard />
  <!-- <Demo /> -->
</div>

<Footer />
