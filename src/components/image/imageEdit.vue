
<template>
  <div>

    <Row class="image-wrapper">
      <Col span="14">
        <div class="cropper">
          <img  v-edit="cropperObject" data-cropper=true ref="cropper" src="../../assets/images/logo.jpg" alt="">.
        </div>
      </Col>
    </Row>
    <br>
    <Row class="image-wrapper">
      <Col span="14">
        <div style="text-align: center;">
          <ButtonGroup>
            <Button @click="cropperObject.cropper.rotate(-90)" type="primary">
              <Icon :size="14" type="arrow-return-left"></Icon>
            </Button>
            <Button @click="cropperObject.cropper.rotate(90)" type="primary">
              <Icon :size="14" type="arrow-return-right"></Icon>
            </Button>
            <Button @click="cropperObject.cropper.zoom(0.1)" type="primary">
              <Icon :size="14" type="plus-round"></Icon>
            </Button>
            <Button @click="cropperObject.cropper.zoom(-0.1)" type="primary">
              <Icon :size="14" type="minus-round"></Icon>
            </Button>
            <Button @click="cropperObject.cropper.scaleX(-cropperObject.cropper.getData().scaleX)" type="primary">
              <Icon :size="14" type="android-more-horizontal"></Icon>
            </Button>
            <Button @click="cropperObject.cropper.scaleY(-cropperObject.cropper.getData().scaleY)" type="primary">
              <Icon :size="14" type="android-more-vertical"></Icon>
            </Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>

  </div>
</template>

<script>
/**
 * 注意此组建只适用于本地文件加载,如需使用线上图片则需要考虑图片加载时的性能问题
 * 以及用户体验，以及cropper的初始化顺序
 */
import Cropper from 'cropperjs'
import './cropper.min.css'

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
export default {
  name: 'imageEdit',
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  watch: {
    imgSrc () {

    }
  },
  data () {
    return {
      cropperObject: {}
    }
  },
  methods: {

  }
  ,
  destroyed () {
    this.cropperObject.cropper.destroy()
  }
  ,
  directives: {
    edit: {
      inserted: function (el, binding) {
        console.log('done')
        let _options = {
          dragMode: 'move',
          restore: false,
          center: false,
          highlight: false,
          cropBoxMovable: false,
          toggleDragModeOnDblclick: false,
          background: false,
          minContainerWidth: 300,
          minContainerHeight: 400,
          modal: false,
          autoCrop: false
        }
        let options = Object.assign(binding.value.options || {}, _options)
        binding.value.cropper = new Cropper(el, options)
      }
    }
  }
}
</script>

<style scoped>

</style>
