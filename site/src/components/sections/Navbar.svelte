<script>
  import Avatar from "../ui/Avatar.svelte";
  import Button from "../ui/Button.svelte";
  import Logo from "../vectors/logo.svelte";
  import Upgrade from "../vectors/Upgrade.svelte";

  const links = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Templates", path: "#" },
    { title: "Find Jobs", path: "#" },
    { title: "Help", path: "#" },
  ];

  const user = null;
</script>

<nav
  class="fixed w-full bg-gray-900 border-b border-gray-800 backdrop-blur-md bg-opacity-50 z-50"
>
  <div class="flex mx-auto items-center justify-between max-w-6xl px-3 py-2">
    <div class="flex items-center gap-12">
      <a href="/">
        <Logo />
      </a>
      <ul class="flex items-center gap-6">
        {#each links as link}
          <li>
            <a
              class="text-gray-300 text-[15px] hover:text-primary transition-all"
              href={link.path}
            >
              {link.title}</a
            >
          </li>
        {/each}
      </ul>
    </div>
    {#if !user}
      <div class="flex items-center gap-4">
        <Button variant="subtle" click={() => {}}>Sign in</Button>
        <Button click={() => {}}>Start for free</Button>
      </div>
    {:else}
      <div class="flex items-center gap-6">
        <Button leftIcon={Upgrade} click={() => {}}>Upgrade</Button>
        <a href={null} class="cursor-pointer">
          <Avatar variant="light" rounded="full" name={user.name} />
        </a>
      </div>
    {/if}
  </div>
</nav>
