import SvelteApp from "./SvelteApp.svelte";

const svelteApp = new SvelteApp({
  target: document.body,
  props: {
    name: "world",
  },
});

export default svelteApp;
