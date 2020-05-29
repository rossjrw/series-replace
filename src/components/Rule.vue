<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label">Find</label>
        <div class="control is-expanded">
          <input class="input"
                 type="text"
                 placeholder="Regular expression"
                 :value="find"
                 @input="update_find">
        </div>
      </div>
      <div class="field">
        <label class="label">Replace</label>
        <div class="control is-expanded">
          <input class="input"
                 type="text"
                 placeholder="Replacement text"
                 :value="replacement"
                 @input="update_replacement">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="ts">
import { mapState } from "vuex"

export default {
  name: 'Rule',
  computed: {
    ...mapState({
      find: state => state.rules[0].find,
      replacement: state => state.rules[0].replacement,
    })
  },
  methods: {
    update_find(e) {
      this.$store.commit('update_find', e.target.value)
    },
    update_replacement(e) {
      this.$store.commit('update_replacement', e.target.value)
    },
  }
}
</script>
