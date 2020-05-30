<template>
  <div>
    <div v-for="rule in rules">
      <Rule :find.sync="rule.find"
            :replacement.sync="rule.replacement">
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
