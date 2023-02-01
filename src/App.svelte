<script lang="ts">
  import Button from "./components/Button.svelte";
  import { DatabaseIcon } from "svelte-feather-icons";
  import Switch from "./components/Switch.svelte";
  import Checkbox from "./components/Checkbox.svelte";
  import Radio from "./components/Radio.svelte";
  import Progress from "./components/Progress.svelte";
  import Loader from "./components/Loader.svelte";
  import Avatar from "./components/Avatar.svelte";
  import Alert from "./components/Alert.svelte";
  import Notification from "./components/Notification.svelte";
  import Skeleton from "./components/Skeleton.svelte";
  import Input from "./components/Input.svelte";
  import TextArea from "./components/TextArea.svelte";
  import Uploader from "./components/Uploader.svelte";
  import Pagination from "./components/Pagination.svelte";
  import ScrollToTop from "./components/ScrollToTop.svelte";
  import Modal from "./components/Modal.svelte";

  let checked: boolean = true;

  let gender = "male";

  let inputValue = "";

  let currentPage = 1;

  let showModal = false;
</script>

<main class="m-8">
  <Button
    click={() => {
      showModal = true;
    }}
    size="md">Launch Modal</Button
  >
  <Modal
    open={showModal}
    close={() => {
      showModal = false;
    }}
    title="Create a new resume"
  >
    <div slot="body">
      <div
        class="h-[100px] w-full flex text-base capitalize font-medium text-gray-400 justify-center items-center"
      >
        <h4>Resume details</h4>
      </div>
    </div>
    <div slot="footer" class="flex items-center gap-3 justify-end w-full">
      <Button click={() => {}} size="sm" variant="default">Cancel</Button>
      <Button click={() => {}} size="sm">Create resume</Button>
    </div>
  </Modal>
  <ScrollToTop />
  <div class="m-3">
    <Button
      rightIcon={DatabaseIcon}
      click={() => {
        console.log("hellp");
      }}
      variant="white"
      size="md">Create Resume</Button
    >
  </div>
  <div class="m-3">
    <Switch
      bind:checked
      subTitle="This allow us to provide notifications"
      title="Enable notifications"
    />
    {checked}
  </div>
  <div class="m-3">
    <Checkbox bind:checked label="accept terms and conditions" />
  </div>
  <div class="mx-3 my-5">
    <Radio bind:group={gender} value="male" label="male" />
    <Radio bind:group={gender} value="female" label="female" />
    <Radio bind:group={gender} value="other" label="other" />
    <p class="mt-3">Gender is <b>{gender}</b></p>
  </div>
  <div class="m-3 max-w-lg">
    <Progress progress={"30%"} />
  </div>
  <div class="m-3">
    <Loader />
  </div>
  <div class="m-3 flex items-center gap-2">
    <Avatar variant="light" name="Ntwali Edson" />
    <Avatar name="Eloi shumbusho" />
    <Avatar name="Ishimwe Keza" />
  </div>

  <div class="mx-3 my-6 max-w-md">
    <Alert
      closeButton
      variant="light"
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      title="Task created Succesfully"
    />
  </div>
  <div class="m-4 max-w-md">
    <Notification
      message=" sunt in culpa qui officia deserunt"
      title="Excepteur sint occaecat cupidatat "
    />
  </div>

  <div class="max-w-md gap-4 flex items-center m-5">
    <div>
      <Skeleton circle={true} width={"50px"} height={"50px"} />
    </div>
    <div class="flex w-full flex-col gap-4">
      <Skeleton width={"100%"} height={"13px"} />
      <Skeleton width={"70%"} height={"10px"} />
    </div>
  </div>
  <div class="m-5 max-w-md">
    <Input
      bind:value={inputValue}
      label="Name"
      placeholder="Enter your name"
      type="text"
    />
  </div>
  <div class="m-5 max-w-md">
    <Input
      type="password"
      bind:value={inputValue}
      label="Passowrd"
      placeholder="Your password"
    />
  </div>
  <div class="m-5 max-w-md">
    <TextArea
      bind:value={inputValue}
      label="Message"
      placeholder="Your Message"
    />
  </div>
  <div class="m-3">
    <Uploader
      loading={true}
      drop={(e) => {
        console.log(e);
      }}
    />
  </div>
  <div class="m-6">
    <Pagination
      change={(page) => (currentPage = page)}
      size={15}
      total={200}
      page={currentPage}
    />
  </div>
</main>
