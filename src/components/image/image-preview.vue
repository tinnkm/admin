<template>
  <div>
    <ul v-preview="viewer" >
      <li v-for="(imgSrc, index) in imgSrcs"  :key = "index">
        <img width="50%" v-lazy="imgSrc" alt="" >
      </li>
    </ul>

  </div>
</template>

<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
export default {
  name: 'image-perview',
  props: {
    imgSrcs: {
      type: Array,
      default: () => []
    },
    viewer: {
      type: Object,
      default: () => {}
    }
  },
  methods: {

  },
  directives: {
    preview: {
      bind: function (el, binding) {
        let _options = {
          inline: false,
          button: true,
          fullscreen: true
        }
        let options = Object.assign(binding.value.options || {}, _options)
        binding.value.viewer = new Viewer(el, options)
      }
    }
  }
}
</script>

<style scoped>
ul {
  display: block;
  overflow: hidden;
  white-space:nowrap;
}
  li {
    display: inline;
    overflow: hidden;
    white-space:nowrap;
    margin: 5px;
  }
</style>
