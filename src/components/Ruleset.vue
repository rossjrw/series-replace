<template>
  <div>
    <Draggable v-model="ruleList"
               v-bind="dragOptions"
               @start="drag = true"
               @end="drag = false"
               handle=".handle">
      <transition-group type="transition"
                        :name="!drag ? 'flip-list' : null">
        <div v-for="rule in ruleList"
             :key="rule.id"
             class="field is-horizontal">
          <Rule :find="rule.find"
                :replacement="rule.replacement">
          </Rule>
        </div>
      </transition-group>
    </Draggable>
    <div></div><!-- what was this for? -->
  </div>
</template>

<script type="ts">
import Draggable from "vuedraggable"

import Rule from '@/components/Rule.vue'

export default {
  name: "Ruleset",
  components: {
    Rule, Draggable
  },
  data() {
    return {
      drag: false
    }
  },
  computed: {
    ruleList: {
      get() {
        return this.$store.state.rules
      },
      set(value) {
        this.$store.commit("updateList", value)
      }
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
