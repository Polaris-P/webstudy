<template>
  <div class="editorContainer" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  props: {
    value:{
      type: String
    }
  },
  methods: {
    initEditor(){
      const editor = new E(this.$refs.editor)
      // editor.create()
      // editor.txt.html(this.value)
      // this.$watch('value', () => {
      //   editor.txt.html(this.value)
      // })
      editor.config.onchange = (newHtml) => {
        console.log(this.value)
        this.$emit('input',newHtml)
      }
      editor.create()
      editor.txt.html(this.value)

      this.$watch('value', () => {
        editor.txt.html(this.value)
      })
    }
  },
  mounted () {
    this.initEditor()
  }
}
</script>

<style>

</style>