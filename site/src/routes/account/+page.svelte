<script lang="ts">
  import AppFormField from "../../components/forms/AppFormField.svelte";
  import Button from "../../components/ui/Button.svelte";
  import Switch from "../../components/ui/Switch.svelte";
  import Facebook from "../../components/vectors/Facebook.svelte";
  import Google from "../../components/vectors/Google.svelte";
  import Linkedin from "../../components/vectors/Linkedin.svelte";
  import Upgrade from "../../components/vectors/Upgrade.svelte";

  const socials = [
    {
      name: "facebook",
      logo: Facebook,
      connected: false,
    },
    {
      name: "linkedin",
      logo: Linkedin,
      connected: false,
    },
    {
      name: "google",
      logo: Google,
      connected: true,
      identifier: "ntwaliedson9@gmail.com",
    },
  ];

  const notificationSettings = [
    {
      title: "Updates and Offers",
      desc: "Discounts, special offers, new features and more",
    },
    {
      title: "Resume Analytics",
      desc: "Views, downloads and monthly statistics for each resume",
    },
    {
      title: "Resume and Job Tips Newsletter",
      desc: "Useful resume and job tips! Straight to your inbox every 2 weeks",
    },
  ];
</script>

<svelte:head>
  <title>Account</title>
  <meta
    name="description"
    content="Start writing your success story with a standout resume."
  />
</svelte:head>

<div class="max-w-4xl mx-auto px-3">
  <div>
    <h4 class="text-xl font-medium text-white">Account Settings</h4>
    <p class="text-gray-400 mt-2 text-base">
      Manage and upgrade your account settings
    </p>
  </div>
  <div
    class="flex mt-5 items-center justify-between bg-opacity-75 bg-gray-800 py-4 px-6 rounded-md"
  >
    <div class="flex gap-6 items-center ">
      <div class="flex">
        <div
          class="w-12 h-12 bg-opacity-25 flex items-center justify-center rounded-full border border-orange-500 bg-orange-500"
        >
          <Upgrade height={30} width={30} fill="orange" />
        </div>
      </div>
      <div class="gap-2 flex flex-col max-w-lg">
        <h4 class="font-semibold text-white text-lg">Free Account</h4>
        <p class="leading-7">
          You are on the free plan. You can save your data and search for jobs.
          Upgrade for PDF downloads & premium features.
        </p>
      </div>
    </div>
    <div>
      <Button click={() => {}} variant="outline">Upgrade</Button>
    </div>
  </div>
  <div />
  <div class="mt-6">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">General information</h4>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-2 gap-4">
          <AppFormField
            placeholder="First name"
            name="first_name"
            label="First name"
          />
          <AppFormField
            placeholder="Last name"
            name="last_name"
            label="last name"
          />
        </div>
        <div class="grid mt-3 grid-cols-1 gap-4">
          <AppFormField
            placeholder="Your email"
            name="email"
            disabled
            label="Email"
          />
        </div>
      </div>
      <div class="card-footer">
        <div class="flex items-center gap-4 justify-end">
          <Button click={() => {}} variant="default">Clear</Button>
          <Button click={() => {}}>Update profile</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Social Profile</h4>
      </div>
      <div class="card-body">
        {#each socials as social}
          <div
            class="flex first-of-type:mt-0  mt-4 items-center justify-between"
          >
            <div class="flex items-center gap-5">
              <div
                class="h-12 w-12 bg-gray-700 bg-opacity-50 border border-gray-700 rounded-full flex items-center justify-center"
              >
                <svelte:component this={social.logo} />
              </div>
              <div>
                <h4 class="text-white capitalize">{social.name}</h4>
                {#if !social.connected}
                  <p class="mt-2">Connect your account with {social.name}</p>
                {:else}
                  <p class="mt-2">{social.identifier}</p>
                {/if}
              </div>
            </div>
            <div>
              {#if !social.connected}
                <Button click={() => {}} variant="light">Connect</Button>
              {:else}
                <Button click={() => {}} variant="default">Disconnect</Button>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-6">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Notifications</h4>
      </div>
      <div class="card-body">
        {#each notificationSettings as settings}
          <div class="w-full mt-6 first-of-type:mt-0">
            <Switch title={settings.title} subTitle={settings.desc} />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-6">
    <div class="card">
      <div class="card-body">
        <div class="flex py-3 px-1 items-center justify-between ">
          <div>
            <h4 class="text-base font-medium text-white">Danger Zone</h4>
            <p class="text-gray-400 mt-3 text-base">
              Once you delete your account, it cannot be undone. This is
              permanent.
            </p>
          </div>
          <div>
            <Button color="danger" click={() => {}} variant="outline"
              >Delete account</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <p class="leading-8">
      Need help? Have questions or feedback? Our team would <br /> love to hear
      from you —<a class="text-primary" href="/help">contact our support</a>
    </p>
  </div>
</div>
