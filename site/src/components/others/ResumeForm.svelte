<script>
  import AppForm from "../forms/AppForm.svelte";
  import AppFormField from "../forms/AppFormField.svelte";
  import Progress from "../ui/Progress.svelte";
  import Question from "../vectors/Question.svelte";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    GridIcon,
    MoreHorizontalIcon,
    PlusIcon,
    XIcon,
  } from "svelte-feather-icons";
  import AppFormTextarea from "../forms/AppFormTextarea.svelte";
  import Internerships from "../vectors/Internerships.svelte";
  import Language from "../vectors/Language.svelte";
  import Reference from "../vectors/Reference.svelte";
  import Course from "../vectors/Course.svelte";
  import ResumeExperience from "./ResumeExperience.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  import Skill from "./Skill.svelte";
  import LanguageSection from "./LanguageSection.svelte";
  import ReferenceSection from "./ReferenceSection.svelte";
  import Saved from "../vectors/Saved.svelte";
  import Button from "../ui/Button.svelte";
  import { each } from "svelte/internal";

  let showAdditional = false;
  let showCourses = false;
  let showInternships = false;
  let showLanguages = false;
  let showReference = false;
  let showMoreTemplates = false;

  $: others = [
    {
      name: "internships",
      icon: Internerships,
      disabled: showInternships === true,
    },
    { name: "languages", icon: Language, disabled: showLanguages === true },
    { name: "reference", icon: Reference, disabled: showReference === true },
    { name: "courses", icon: Course, disabled: showCourses === true },
  ];

  const templates = [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11, 12];
</script>

<div>
  <div class="bg-gray-900 h-full flex w-1/2 max-w-[960px] min-h-screen">
    <div class="w-full h-full flex-1">
      <div class="px-8 sticky">
        <div class="flex py-4 items-center justify-between">
          <div>
            <span class="text-red-500">14%</span>
            <span class="text-sm">Profile completness</span>
          </div>
          <div class="flex gap-3 items-center">
            <span class="text-green-500">10+</span>
            <span class="text-sm">App profile summary</span>
            <Question />
          </div>
        </div>
        <div>
          <Progress rounded={"none"} size="sm" progress={"30%"} />
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">Personal details</h4>
        </div>
        <div class="mt-5">
          <div>
            <AppFormField
              variant="filled"
              label="Wanted Job Title"
              placeholder="e.g. Teacher"
            />
          </div>
          <div class="grid mt-5 grid-cols-2 gap-5">
            <AppFormField
              variant="filled"
              label="First name"
              placeholder="First name"
            />
            <AppFormField
              variant="filled"
              label="Last name"
              placeholder="Last name"
            />
          </div>
          <div class="grid mt-5 grid-cols-2 gap-5">
            <AppFormField
              variant="filled"
              label="Email"
              placeholder="Your email"
            />
            <AppFormField
              variant="filled"
              label="Phone"
              placeholder="Your phone"
            />
          </div>
          <div class="grid mt-5 grid-cols-2 gap-5">
            <AppFormField
              variant="filled"
              label="Country"
              placeholder="Your Country"
            />
            <AppFormField
              variant="filled"
              label="City"
              placeholder="Your city"
            />
          </div>
        </div>
        <div>
          {#if showAdditional}
            <div class="mt-5">
              <div class="grid mt-5 grid-cols-2 gap-5">
                <AppFormField
                  variant="filled"
                  label="Address"
                  placeholder="Address"
                />
                <AppFormField
                  variant="filled"
                  label="Postal code"
                  placeholder="Postal code"
                />
              </div>
              <div class="grid mt-5 grid-cols-2 gap-5">
                <AppFormField
                  variant="filled"
                  label="Driving licence"
                  placeholder="Driving licence"
                />
                <AppFormField
                  variant="filled"
                  label="Nationality"
                  placeholder="Nationality"
                />
              </div>
              <div class="grid mt-5 grid-cols-2 gap-5">
                <AppFormField
                  variant="filled"
                  label="Place of birth"
                  placeholder="Place of birth"
                />
                <AppFormField
                  variant="filled"
                  label="Date of birth"
                  placeholder="Date of birth"
                />
              </div>
            </div>
          {/if}
          <div>
            <a
              on:click={() => {
                showAdditional = !showAdditional;
              }}
              class="flex py-4 items-center gap-3 cursor-pointer text-primary font-semibold"
              href={null}
              ><span> Edit additional details</span>
              {#if showAdditional}
                <ChevronRightIcon size="16" strokeWidth={3} />
              {:else}
                <ChevronUpIcon size="16" strokeWidth={3} />
              {/if}
            </a>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">Professional Summary</h4>
          <p class="text-sm leading-8 mt-2">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </p>
        </div>
        <div class="w-full h-[200px] bg-gray-800 bg-opacity-75 rounded-[3px]" />
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">Employment History</h4>
          <p class="text-sm leading-8 mt-2">
            Show your relevant experience (last 10 years). Use bullet points to
            note your achievements, if possible - use numbers/facts (Achieved X,
            measured by Y, by doing Z).
          </p>
        </div>
        <div class="mb-5">
          {#each [1] as exp}
            <ResumeExperience />
          {/each}
        </div>
        <div>
          <a
            href={null}
            class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
          >
            <PlusIcon strokeWidth={3} size={"16"} />
            <span>Add Employment</span>
          </a>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">Education</h4>
          <p class="text-sm leading-8 mt-2">
            A varied education on your resume sums up the value that your
            learnings and background will bring to job.
          </p>
        </div>
        <div class="mb-5">
          {#each [1] as exp}
            <ResumeExperience type="education" />
          {/each}
        </div>
        <div>
          <a
            href={null}
            class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
          >
            <PlusIcon strokeWidth={3} size={"16"} />
            <span>Add Education</span>
          </a>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">
            Websites & Social Links
          </h4>
          <p class="text-sm leading-8 mt-2">
            You can add links to websites you want hiring managers to see!
            Perhaps It will be a link to your portfolio, LinkedIn profile, or
            personal website
          </p>
        </div>
        <SocialLinks />
        <div class="mt-4">
          <a
            href={null}
            class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
          >
            <PlusIcon strokeWidth={3} size={"16"} />
            <span>Add Link</span>
          </a>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="my-3">
          <h4 class="text-white font-semibold text-lg">Skills</h4>
          <p class="text-sm leading-8 mt-2">
            Choose 5 of the most important skills to show your talents! Make
            sure they match the keywords of the job listing if applying via an
            online system.
          </p>
        </div>
        <div class="mb-8 flex items-center flex-wrap gap-4">
          {#each ["Analytical Skills", "Analytical Thinking", "Problem Solving Skills", "Critical Thinking", "Collaboration & Teamwork", "Analytical Thinking Skills", "Creative Thinking", "Complex Problem Solving", "Active Listening", "Highly responsible and reliable"] as skill}
            <a
              href={null}
              class="cursor-pointer bg-opacity-70 hover:bg-primary hover:bg-opacity-10 hover:text-primary flex items-center text-[14.5px] gap-3 font-semibold bg-gray-800 px-3 py-[7px] rounded-[3px]"
            >
              <span> {skill}</span>
              <PlusIcon strokeWidth={3} size={"16"} />
            </a>
          {/each}
        </div>
        <Skill />
        <div class="mt-4">
          <a
            href={null}
            class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
          >
            <PlusIcon strokeWidth={3} size={"16"} />
            <span>Add Skill</span>
          </a>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="mt-3">
          <h4 class="text-white font-semibold text-lg">Hobbies</h4>
          <p class="text-sm leading-8 mt-2">What do you like?</p>
        </div>
        <div class="mb-0">
          <AppFormTextarea
            placeholder="Eg diving, Skydving,swimming"
            variant="filled"
            rows={4}
          />
        </div>
      </div>
      {#if showCourses}
        <div class="px-8 py-4">
          <div class="my-3">
            <h4 class="text-white font-semibold text-lg">Courses</h4>
            <p class="text-sm leading-8 mt-2">
              Enter below some of the courses that you may have taken in the
              past or what you are currentry taking.
            </p>
          </div>

          <ResumeExperience type="course" />
          <div class="mt-4">
            <a
              href={null}
              class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
            >
              <PlusIcon strokeWidth={3} size={"16"} />
              <span>Add Course</span>
            </a>
          </div>
        </div>
      {/if}
      {#if showInternships}
        <div class="px-8 py-4">
          <div class="my-3">
            <h4 class="text-white font-semibold text-lg">Internships</h4>
            <p class="text-sm leading-8 mt-2">
              Enter below some of the internaships that you may have taken in
              the past or what you are currentry taking.
            </p>
          </div>

          <ResumeExperience />
          <div class="mt-4">
            <a
              href={null}
              class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
            >
              <PlusIcon strokeWidth={3} size={"16"} />
              <span>Add Internship</span>
            </a>
          </div>
        </div>
      {/if}
      {#if showLanguages}
        <div class="px-8 py-4">
          <div class="my-3">
            <h4 class="text-white font-semibold text-lg">Languages</h4>
            <p class="text-sm leading-8 mt-2">
              Enter below some of the languages that you speek currentry.
            </p>
          </div>

          <LanguageSection />
          <div class="mt-4">
            <a
              href={null}
              class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
            >
              <PlusIcon strokeWidth={3} size={"16"} />
              <span>Add Language</span>
            </a>
          </div>
        </div>
      {/if}
      {#if showReference}
        <div class="px-8 py-4">
          <div class="my-3">
            <h4 class="text-white font-semibold text-lg">References</h4>
            <p class="text-sm leading-8 mt-2">
              Enter below some of the references that you need to share.
            </p>
          </div>

          <ReferenceSection />
          <div class="mt-4">
            <a
              href={null}
              class="px-4 rounded-[3px] py-2 cursor-pointer bg-primary text-primary bg-opacity-5 hover:bg-opacity-10 w-full flex items-center gap-2"
            >
              <PlusIcon strokeWidth={3} size={"16"} />
              <span>Add Language</span>
            </a>
          </div>
        </div>
      {/if}
      <div class="px-8 py-4">
        <div class="mb-4">
          <h4 class="text-white font-semibold text-lg">Add Section</h4>
        </div>
        <div class="my-8 grid grid-cols-2 gap-5">
          {#each others as section}
            <a
              on:click={() => {
                if (section.name === "courses") {
                  showCourses = true;
                } else if (section.name === "internships") {
                  showInternships = true;
                } else if (section.name === "languages") {
                  showLanguages = true;
                } else if (section.name === "reference") {
                  showReference = true;
                }
              }}
              href={null}
              class="flex cursor-pointer items-center gap-4 {section.disabled
                ? 'pointer-events-none opacity-30'
                : ''}"
            >
              <svelte:component this={section.icon} />
              <span class="capitalize hover:text-primaryLight">
                {section.name}</span
              >
            </a>
          {/each}
        </div>
      </div>
    </div>

    <div
      class="fixed  select-none z-[3] top-0 bottom-0 right-0 w-1/2 flex-1 flex-nowrap bg-[#656e83]"
    >
      <div class="h-full w-full relative">
        <a
          href={null}
          class="h-10 w-10 cursor-pointer absolute right-4 top-4 bg-white shadow-md rounded-full flex items-center justify-center"
        >
          <XIcon strokeWidth={3} size={"16"} />
        </a>
        <div
          class="flex max-w-xl mx-auto h-full w-full justify-between flex-col"
        >
          <div class="flex py-4 items-center justify-between">
            <div class="flex text-gray-200 items-center text-[14px] gap-2">
              <Saved />
              <span>Saved</span>
            </div>
            <div class="flex text-white tracking-wider items-center gap-2">
              <ChevronLeftIcon size={"16"} strokeWidth={3} />
              <span>1/1</span>
              <ChevronRightIcon size={"16"} strokeWidth={3} />
            </div>
            <div>
              <a
                href={null}
                class="bg-primary cursor-pointer text-white flex items-center justify-center h-8 w-8 rounded-full"
              >
                <MoreHorizontalIcon size="18" />
              </a>
            </div>
          </div>
          <div
            class="h-full w-full {showMoreTemplates
              ? 'grid grid-cols-4 gap-3'
              : ''}"
          >
            {#each templates.slice(0, !showMoreTemplates ? 1 : templates.length) as template}
              <div
                on:click={() => {
                  showMoreTemplates = false;
                }}
                on:keydown={() => {}}
                class="h-full {showMoreTemplates &&
                  'hover:border-primary transition-all border-[3px] border-transparent'} cursor-pointer bg-white rounded-[4px] w-full"
              />
            {/each}
          </div>
          <div class="flex items-center justify-between my-4">
            <a
              on:click={() => {
                showMoreTemplates = !showMoreTemplates;
              }}
              class="text-white cursor-pointer flex items-center gap-2 "
              href={null}
            >
              <GridIcon size={"18"} />
              <span>Select Template</span>
            </a>
            <Button>Download PDF</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
