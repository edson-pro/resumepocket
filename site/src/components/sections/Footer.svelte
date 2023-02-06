<script>
  const links = [
    { title: "Templates", path: "#" },
    { title: "Upgrade", path: "#" },
    { title: "Terms", path: "#" },
    { title: "Privacy", path: "#" },
    { title: "About", path: "#" },
    { title: "Blog", path: "#" },
  ];
</script>

<footer class="border-t border-gray-800 ">
  <div
    class="flex justify-between items-center py-6 mx-auto max-w-6xl px-3 sm:flex-col sm:gap-8"
  >
    <div>
      <p>&copy; 2023 Enhancv. All Rights Reserved.</p>
    </div>
    <ul class="flex items-center gap-4 sm:flex-wrap sm:justify-center">
      {#each links as link, i}
        <li class="flex items-center gap-4">
          {#if i !== 0}
            <div class="h-1 w-1 bg-gray-700 rounded-full" />
          {/if}
          <a href={link.path} class="text-[15px] hover:text-gray-300">
            {link.title}
          </a>
        </li>
      {/each}
    </ul>
    <div>
      <p>Built with love & passion</p>
    </div>
  </div>
</footer>
