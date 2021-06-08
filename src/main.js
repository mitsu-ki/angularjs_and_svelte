import svelteGreeting from "./svelte_greeting.svelte";
import svelteButton from "./svelte_button.svelte";
import svelteCustomEvent from "./svelte_custom_event.svelte";

// 各 svelte コンポーネントを登録しておく
window.svelteGreeting = svelteGreeting;
window.svelteButton = svelteButton;
window.svelteCustomEvent = svelteCustomEvent;
