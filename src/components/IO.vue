<template>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label">Input</label>
        <div class="control is-expanded">
          <textarea class="textarea"
                    placeholder="Input text"></textarea>
        </div>
        <p>Paste the text you want replaced here.</p>
      </div>
      <div class="field">
        <label class="label">Output</label>
        <div class="control is-expanded">
          <textarea readonly
                    class="textarea"
                    placeholder="Output text"></textarea>
        </div>
        <p>The replaced text will appear here.</p>
      </div>
    </div>
  </div>
</template>
