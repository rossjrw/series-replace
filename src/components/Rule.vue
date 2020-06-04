<template>
  <div class="field-body">
    <div class="field has-addons">
      <p class="control">
      <a class="button is-static">
        Find
      </a>
      </p>
      <p class="control is-expanded">
      <input class="input"
             type="text"
             placeholder="Regular expression"
             :value="find"
             @input="updateFind">
      </p>
    </div>
    <div class="field has-addons">
      <p class="control">
      <a class="button is-static">
        Replace
      </a>
      </p>
      <p class="control is-expanded">
      <input class="input"
             type="text"
             placeholder="Replacement text"
             :value="replace"
             @input="updateReplace">
      </p>
    </div>
    <div class="field is-narrow">
      <a class="button is-static handle">
        <span class="icon">
          <font-awesome-icon icon="grip-lines"/>
        </span>
      </a>
    </div>
    <div class="field is-narrow">
      <a class="button is-danger is-outlined">
        <span class="icon">
          <font-awesome-icon icon="times"/>
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons'
 
library.add(faGripLines, faTimes)

export default {
  name: "Rule",
  props: ['find', 'replace', 'ruleId'],
  methods: {
    updateFind(e: InputEvent): void {
      this.$emit('update-rule',
        { find: e.target.value, replace: this.replace, id: this.ruleId }
      )
    },
    updateReplace(e: InputEvent): void {
      this.$emit('update-rule',
        { find: this.find, replace: e.target.value, id: this.ruleId }
      )
    },
  }
}
</script>

<style>
.button.handle {
  pointer-events: auto;
  cursor: grab;
}
[draggable=true].button.handle {
  cursor: grabbing !important;
}
</style>
