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
             :value="find">
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
             :value="replacement"
             @input="update_replacement">
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

<script type="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons'
 
library.add(faGripLines, faTimes)

export default {
  name: "Rule",
  props: ['find', 'replacement'],
  methods: {
    update_find(new_find) {
      this.$emit('update:find', new_find)
    },
    update_replacement(new_replacement) {
      this.$emit('update:replacement', new_replacement)
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
