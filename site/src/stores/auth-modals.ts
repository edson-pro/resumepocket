import { writable } from "svelte/store";
export const modal = writable({
  open: false,
  show: "",
});
