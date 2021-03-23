<template>
  <div class="ruleset">
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
                :replace="rule.replace"
                :enabled="rule.enabled"
                :ruleId="rule.id"
                @update-rule="updateRule"
                @remove-rule="removeRule">
          </Rule>
        </div>
      </transition-group>
    </Draggable>
    <div id="addButtonContainer"
         class="field">
      <div class="control has-text-centered">
        <div class="button"
             @click="addRule">
          <span class="icon">
            <font-awesome-icon icon="plus-circle"/>
          </span>
          <span>Add</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Draggable from "vuedraggable"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
 
library.add(faPlusCircle)

import Rule from '@/components/Rule.vue'

export default {
  name: "Ruleset",
  components: {
    Rule, Draggable
  },
  data(): Record<string,unknown> {
    return {
      drag: false
    }
  },
  computed: {
    ruleList: {
      get(): Rule[] {
        return this.$store.state.rules
      },
      set(newRules: Rule[]): void {
        this.$store.dispatch("updateAllRules", newRules)
      }
    },
    dragOptions(): Record<string,unknown> {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  },
  methods: {
    updateRule(rule: Rule): void {
      this.$store.dispatch("updateRule", rule)
    },
    addRule(): void {
      this.$store.dispatch("addRule", {})
    },
    removeRule(ruleId: number): void {
      this.$store.dispatch("removeRule", ruleId)
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
#addButtonContainer {
  margin-top: 0.75rem;
}
</style>
