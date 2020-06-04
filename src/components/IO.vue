<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label">Input</label>
        <div class="control is-expanded">
          <textarea class="textarea"
                    placeholder="Paste the text you want replaced here."
                    v-model="inputText">
          </textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Output</label>
        <div class="control is-expanded">
          <textarea readonly
                    class="textarea"
                    placeholder="The replaced text will appear here."
                    v-model="outputText">
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ^.(.)[a-z]*\s.(he)\s(\w*).*?([er]{2}(.)[a-z]+d) -->
<!-- T$2 $4 $3 will $1p$5e$1rf -->

<script lang="ts">
export default {
  name: "InputOutput",
  computed: {
    inputText: {
      get(): string {
        return this.$store.state.inputText
      },
      set(inputText: string): void {
        this.$store.dispatch("updateInputText", inputText)
      }
    },
    outputText: {
      get(): string {
        return this.$store.state.outputText
      }
    }
  }
}
</script>
