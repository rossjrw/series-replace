<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-fifths-desktop">
          <div class="panel">
            <p class="panel-heading">Save settings</p>
            <div class="panel-block">
              <div class="content">
                <p>The URL below will be automatically updated. Copy and share
                it at any time to save your find-and-replace rules.</p>
              </div>
            </div>
            <div class="panel-block">
              <form class="control">
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field has-addons">
                      <p class="control is-expanded">
                        <input class="input"
                               type="text"
                               readonly
                               :value="renderedUrl">
                      </p>
                      <p class="control">
                        <div class="button is-info"
                                @click="copyUrl">
                          <span class="icon">
                            <font-awesome-icon icon="copy"/>
                          </span>
                          <span>Copy</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <div class="control is-expanded">
                        <label class="checkbox">
                          <input type="checkbox"
                                 v-model="includeInput">
                          Include input text
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import copy from "copy-to-clipboard"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
 
library.add(faCopy)

import { saveDataToUrl } from '@/query-url'

export default {
  name: "SaveRules",
  data(): Record<string,unknown> {
    return {
      includeInput: false
    }
  },
  computed: {
    renderedUrl: {
      get(): string {
        const query: string = saveDataToUrl(
          this.$store.state.rules,
          this.includeInput ? this.$store.state.inputText : undefined
        )
        const href: string = window.location.href.split("?")[0]
        return `${href}?${query}`
      }
    }
  },
  methods: {
    copyUrl(): void {
      copy(this.renderedUrl) // TODO confirmation if this returns true
    }
  }
}
</script>
