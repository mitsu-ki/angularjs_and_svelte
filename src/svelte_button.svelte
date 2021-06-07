<script>
  export let buttonLabel = "click";
  export let clickFn = null;
</script>

<button type="button" class="svelteButton" on:click={clickFn}>
  {buttonLabel}
</button>

<style>
  .svelteButton {
    margin: 0;
    appearance: none;
    box-shadow: none;
    outline: none;
    border-radius: 4px;
    border: none;
    background: #eaa21a;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 1.4285714285714286;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    width: auto;
    max-width: 100%;
    min-width: 160px;
    box-sizing: border-box;
    align-items: center;
    align-content: center;
    justify-content: space-around;
  }
</style>
