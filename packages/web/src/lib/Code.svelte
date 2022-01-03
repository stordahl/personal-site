<script>
  export let portableText

  $: block = portableText.block
</script>

<pre class="language-{block.language}" data-language={block.language}>
  <code 
    class="language-{block.language}"
  >{block.code}</code>
</pre>

<style>
  pre {
    display: block;
  }
</style>
