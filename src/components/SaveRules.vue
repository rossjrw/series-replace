<template>
  <div class="section">
    <div class="container">
      <input class="input"
             type="text"
             :value="renderedUrl">
    </div>
  </div>
</template>

<script lang="ts">
import { saveDataToUrl } from '@/query-url'

export default {
  name: "SaveRules",
  computed: {
    renderedUrl: {
      get(): string {
        return saveDataToUrl(
          this.$store.state.rules, this.$store.state.inputText
        )
      }
    }
  }
}
</script>
