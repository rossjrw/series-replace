<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label">Find</label>
        <div class="control is-expanded">
          <input class="input"
                 type="text"
                 placeholder="Regular expression"
                 v-model="find">
        </div>
      </div>
      <div class="field">
        <label class="label">Replace</label>
        <div class="control is-expanded">
          <input class="input"
                 type="text"
                 placeholder="Replacement text"
                 v-model="replace">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="ts">
export default {
  name: 'Rule',
  data() {
    return {
      find: "",
      replace: ""
    }
  }
}
</script>
