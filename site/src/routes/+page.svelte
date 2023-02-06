<script>
  import Button from "../components/ui/Button.svelte";
  import Input from "../components/ui/Input.svelte";
  import { StarIcon } from "svelte-feather-icons";

  const companies = [
    {
      name: "tuple",
      logo: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
    },
    {
      name: "mirage",
      logo: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    },
    {
      name: "statickit",
      logo: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
    },
    {
      name: "transistor",
      logo: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    },
    {
      name: "workcation",
      logo: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
    },
  ];
</script>

<svelte:head>
  <title>ResumePocket</title>
  <meta
    name="description"
    content="Start writing your success story with a standout resume."
  />
</svelte:head>

<div class=" max-w-6xl px-3 mx-auto">
  <div class="py-12 grid grid-cols-2 gap-4">
    <div class="">
      <span class="text-primary capitalize my-3 block">AI Resume Builder.</span>
      <h4 class="font-semibold text-3xl my-4 leading-10 text-white">
        Start writing your success story with a standout resume.
      </h4>
      <p class="leading-8 text-[16px]">
        Create a beautiful resume quickly with the help of artificial
        intelligence and our customizable templates. Impress your future
        employer with a perfect resume created in minutes.
      </p>
      <div class="flex my-4 items-center gap-3">
        <Button>Create My resume</Button>
        <Button variant="outline">View templates</Button>
      </div>
      <p class="text-[15px]">Globally Trusted by Over 2 Million Job Seekers</p>
      <div class="mt-6">
        <div class="inline-flex items-center divide-x divide-gray-700">
          <div class="flex-shrink-0 gap-1 flex pr-5">
            {#each [1, 2, 3, 4, 5] as star}
              <StarIcon
                size={"18"}
                class="text-yellow-400 {star > 3 ? '' : 'fill-current'} "
              />
            {/each}
          </div>
          <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
            <span class="font-medium text-gray-200">Rated 5 stars</span>
            by over
            <span class="font-medium text-primaryLight">500 beta users</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img
        src="https://www.resumerabbit.com/dist/images/rabbit-site/footer-cta-582a180dd0.svg"
        alt=""
      />
    </div>
  </div>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2
      class="text-center text-gray-400 text-[14px] font-semibold uppercase tracking-wide"
    >
      Trusted by over 26,000 forward-thinking companies
    </h2>
    <div class="mt-8 grid sm:grid-cols-2 gap-8 md:grid-cols-6 grid-cols-5">
      {#each companies as company}
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src={company.logo} alt={company.name} />
        </div>
      {/each}
    </div>
  </div>
  <div class="bg-gray-800 rounded-md bg-opacity-30 my-20">
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            AI Resume Builder
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Have AI compose your resume for you.
          </h4>
          <p class="text-sm font-medium text-gray-400 leading-7">
            Get help with your resume from AI. OpenAI's GPT-3 creates text like
            a human writer. Quickly generate a draft. Say goodbye to writer's
            block.
          </p>
          <Button href="https://chat.openai.com/" variant="outline"
            >Learn More</Button
          >
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-w-sm rounded-md mx-auto"
            src="https://d1civoyjepycei.cloudfront.net/static/img/landing_features/ai_writer.961de01a0456.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="flex items-center justify-center">
          <img
            class="max-w-md mx-auto"
            src="https://enhancv.com/static/72b8926bde7ba27c488e369a217b32b6/3225f/enhancv-resume-builder%402x.png"
            alt=""
          />
        </div>
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            Resume Templates
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Select a resume format and personalize it to reflect your unique
            qualities.
          </h4>
          <div class="flex flex-col gap-4">
            {#each ["Free basic template", "Gets you compliments", "Designed by typographers"] as item}
              <div class="flex items-start gap-4">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-primaryLight h-6 w-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g id="SVGRepo_iconCarrier">
                    <title>check-circle-solid</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <path
                          d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM35.4,18.4l-14,14a1.9,1.9,0,0,1-2.8,0l-5.9-5.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L20,28.2,32.6,15.6a2,2,0,0,1,2.8,2.8Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="text-sm leading-7 font-medium text-gray-400"
                  >{item}</span
                >
              </div>
            {/each}
          </div>
          <Button variant="outline">View templates</Button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-3 py-20">
      <div class="grid grid-cols-2 gap-12">
        <div class="max-w-sm flex flex-col items-start gap-5">
          <span
            class="rounded bg-primaryLight bg-opacity-10 px-2.5 py-1 text-xs font-semibold text-primaryLight tracking-wide uppercase"
          >
            Resume Examples
          </span>
          <h4 class="text-2xl font-semibold text-white leading-10">
            Gain inspiration from actual resume samples.
          </h4>
          <p class="text-sm font-medium text-gray-400 leading-7">
            Explore successful resume examples from our customers who landed
            jobs at top companies. Use our profession-specific guides for a
            standout resume and cover letter
          </p>
          <Button variant="outline">Learn More</Button>
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-w-sm rounded-md mx-auto"
            src="https://d1civoyjepycei.cloudfront.net/static/img/landing_features/resume_examples.311fb3be03f3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <section class="bg-gray-900 py-6">
    <div class="mx-auto px-8 max-w-7xl">
      <div
        class="max-w-2xl flex items-center justify-center flex-col mx-auto text-center"
      >
        <div class="mb-5">
          <div
            class="h-14 w-14 text-white bg-primary rounded-full flex items-center justify-center"
          >
            <svg
              width="25px"
              height="25px"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33333 4C3.49238 4 2 5.53502 2 7.42857V16.5714C2 18.465 3.49238 20 5.33333 20H18.6667C20.5076 20 22 18.465 22 16.5714V7.42857C22 5.53502 20.5076 4 18.6667 4H5.33333ZM7.62469 8.21913C7.19343 7.87412 6.56414 7.94404 6.21913 8.37531C5.87412 8.80657 5.94404 9.43586 6.37531 9.78087L11.3753 13.7809L12 14.2806L12.6247 13.7809L17.6247 9.78087C18.056 9.43586 18.1259 8.80657 17.7809 8.37531C17.4359 7.94404 16.8066 7.87412 16.3753 8.21913L12 11.7194L7.62469 8.21913Z"
              />
            </svg>
          </div>
        </div>
        <h2
          class="text-xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Subscribe To our Newslater
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 font-medium text-sm leading-relaxed text-gray-400"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>

      <form action="#" method="POST" class="max-w-md mx-auto mt-8">
        <div class="flex items-center">
          <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
            <Input name="email" placeholder="Enter email to get started" />
          </div>

          <Button>Subscribe</Button>
        </div>
      </form>

      <div
        class="flex items-center font-medium text-gray-400 justify-center px-8 mt-8 sm:px-0"
      >
        <svg
          class="flex-shrink-0 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span class="ml-2 text-sm">
          Your email is complely secured with us. We don’t share with anyone.
        </span>
      </div>
    </div>
  </section>
</div>
