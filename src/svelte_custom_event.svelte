<script>
  let clickFn = function () {
    var event = new CustomEvent("svelte:showComment", {
      detail: {
        text: "svelte element text",
        key: "value",
      },
    });
    document.dispatchEvent(event);
  };
</script>

<button type="button" on:click={clickFn}> check custom event</button>
