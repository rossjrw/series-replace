<template>
  <div>
    <div v-for="(rule, index) in rules"
         :key="index">
      <Rule :find="rule.find"
            :replacement="rule.replacement"
            @update:find="update_find(rule.find, index)"
            @update:replacement="update_replacement(rule.replacement, index)">
      </Rule>
    </div>
    <div></div>
  </div>
</template>

<script type="ts">
import Rule from '@/components/Rule.vue'
import { mapState } from "vuex"

export default {
  name: "Ruleset",
  components: {
    Rule
  },
  computed: {
    ...mapState({
      rules: state => state.rules
    })
  },
}
</script>
