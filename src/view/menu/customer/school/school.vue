<template>
  <div class="card-wrapper">
    <Card>
      <div slot="title">
        <span class="title">title</span>
        <Icon type="grid" class="right-icon" size="20" @click="changeView"></Icon>
      </div>
      <transition name="fade" mode="out-in" >
        <div class="card-content" v-if="show" key="table">
           <table-page :columns="columns" :data="datas"  highlightRow></table-page >
        </div>
        <div v-else class="card-content" key="img">
          <Carousel
            dots="none"
            arrow="always"
            @on-change="carouselChange">
            <CarouselItem>
              <div class="item-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">4</div>
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
export default {
  data () {
    return {
      show: true,
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      datas: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      value2: 0
    }
  },
  components: {
    tablePage
  },
  methods: {
    changeView () {
      this.show = !this.show
    },
    carouselChange (value) {
     alert(this.value2)
    }
  }
}
</script>
