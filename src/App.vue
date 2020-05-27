<template>
  <div id="app">
    <Corner></Corner>
    <Header></Header>
    <section class="section">
      <div class="container">
        <form>
          <InputOutput></InputOutput>
          <hr>
          <Ruleset></Ruleset>
        </form>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Corner from './components/Corner.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import InputOutput from './components/IO.vue'
import Ruleset from './components/Ruleset.vue'

export default {
  name: "App",
  components: {
    Corner: Corner,
    Footer: Footer,
    Header: Header,
    InputOutput: InputOutput,
    Ruleset: Ruleset,
  },
}
</script>
