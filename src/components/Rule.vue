<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label">Find</label>
        <div class="control is-expanded">
          <input class="input"
                 type="text"
                 placeholder="Regular expression"
                 :value="find">
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
