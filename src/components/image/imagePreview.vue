<template>
  <div>
    <Row class="image-wrapper">
      <Col span="14">
        <div class="cropper">
          <img v-preview="cropperObject"  :src="imgSrc" alt="">
        </div>
      </Col>
    </Row>
    <br>
    <Row class="image-wrapper">
      <Col span="14">
        <div style="text-align: center;">
          <ButtonGroup>
            <Button @click="cropperObject.cropper.rotate(-90)" type="primary"><Icon :size="14" type="arrow-return-left"></Icon></Button>
            <Button @click="cropperObject.cropper.rotate(90)" type="primary"><Icon :size="14" type="arrow-return-right"></Icon></Button>
            <Button @click="cropperObject.cropper.zoom(0.1)" type="primary"><Icon :size="14" type="plus-round"></Icon></Button>
            <Button @click="cropperObject.cropper.zoom(-0.1)" type="primary"><Icon :size="14" type="minus-round"></Icon></Button>
            <Button @click="cropperObject.cropper.scaleX(-cropperObject.cropper.getData().scaleX)" type="primary"><Icon :size="14" type="android-more-horizontal"></Icon></Button>
            <Button @click="cropperObject.cropper.scaleY(-cropperObject.cropper.getData().scaleY)" type="primary"><Icon :size="14" type="android-more-vertical"></Icon></Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import './cropper.min.css'
export default {
  name: 'imagePreview',
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      cropperObject: {

      }
    }
  },
  directives: {
    preview: {
      inserted: function (el, binding) {
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
