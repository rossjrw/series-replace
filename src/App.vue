<template>
  <div id="app">
    <GithubCorner></GithubCorner>
    <Header></Header>
    <section class="section">
      <div class="container">
        <form class="control">
          <InputOutput></InputOutput>
          <hr>
          <Ruleset></Ruleset>
        </form>
      </div>
    </section>
    <SaveRules></SaveRules>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import GithubCorner from '@/components/GithubCorner.vue'
import Header from '@/components/Header.vue'
import InputOutput from '@/components/IO.vue'
import Ruleset from '@/components/Ruleset.vue'
import SaveRules from '@/components/SaveRules.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    GithubCorner, Footer, Header, InputOutput, Ruleset, SaveRules
  },
}
</script>
