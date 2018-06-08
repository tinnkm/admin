<template>
  <div class="card-wrapper">
    <Card>
      <div slot="title">
        <span class="title">title</span>
        <Icon type="grid" class="right-icon" size="20" @click="changeView"></Icon>
      </div>
      <transition name="fade" mode="in-out">
        <div class="card-content" v-if="show" key="table">
          <table-page :columns="columns" :data="datas" highlightRow></table-page>
        </div>
        <div v-else class="card-content" key="img">
          <Carousel
            dots="none"
            arrow="always"
            @on-change="carouselChange">
            <CarouselItem v-for="item in datas" :key="item.bizId">
              <div class="item-carousel">
                <Card>
                  <h1>{{ item.name }}</h1>
                  <template v-for="(k,v) in item.datas">
                    <h3>{{ key }}</h3>
                    <image-preview v-for="url in v" :imgSrc="url"></image-preview>
                  </template>
                </Card>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </transition>
    </Card>
  </div>
</template>
<script>
import './school.less'
import tablePage from '@/components/table/tablePage'
import imagePreview from '@/components/image/imagePreview'
import { getApprove } from '@/api/approve'
export default {
  data () {
    return {
      show: true,
      cropper: {},
      columns: [
        {
          title: '业务id',
          key: 'bizId'
        },
        {
          title: '图形数据',
          children: [
            {
              title: '入学申请',
              key: 'school'
            },
            {
              title: '户口本',
              key: 'hukou'
            },
            {
              title: '身份证',
              key: 'idCard'
            },
            {
              title: '疫苗证',
              key: 'yimiao'
            },
            {
              title: '劳动证明',
              key: 'laodong'
            }
          ]
        }
      ],
      datas: []
    }
  },
  components: {
    tablePage,
    imagePreview
  },
  methods: {
    changeView () {
      this.show = !this.show
    },
    carouselChange (value) {
      if (value === this.datas.length - 1) {
        // 如果滚动到最后一个则加载新数据
        // this.datas = [{
        //   name: 'tinnkm',
        //   age: 30,
        //   address: 'Sydney No. 1 Lake Park',
        //   date: '2016-10-02'
        // },
        //   {
        //     name: 'asss',
        //     age: 26,
        //     address: 'Ottawa No. 2 Lake Park',
        //     date: '2016-10-04'
        //   }]
      }
    }
  },
  created () {
    getApprove(1).then(res => {
      this.datas = res.data
    })
  }
}
</script>
