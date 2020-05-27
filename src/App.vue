<template>
  <div id="app">
    <Corner></Corner>
    <section class="section">
      <div class="container">
        <form>
          <p>hello!</p>
          <hr>

        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Corner from './components/Corner.vue'

export default {
  name: "App",
  components: {
    Corner: Corner,
  },
}
</script>
