<template>
  <div>
    <Table border
           :columns="columns"
           :data="data"
           :highlightRow="highlightRow"
           :loading="loading"
           @on-current-change="onCurrentChange"
           @on-select="onSelect"
           @on-select-cancel="onSelectCancel"
           @on-select-all="onSelectAll">
           @on-selection-change="onSelectionChange">
           @on-sort-change="onSortChange">
           @on-filter-change="onFilterChange">
           @on-row-click="onRowClick">
           @on-row-dblclick="onRowDblclick">
           @on-expand="onExpand">
       <Page class="footer-page" :total="total" :current="current" @on-change="changePage" size="small" slot="footer"></Page>
    </Table>
  </div>
</template>
<script>
import './tablePage.less'
export default {
  name: 'tablePage',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 100
    },
    current: {
      type: Number,
      default: 1
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hasSelection: false
    }
  },
  methods: {
    changePage () {
      this.$emit('pageChange')
    },
    onCurrentChange (newData, oldData) {
      this.$emit('on-current-change', newData, oldData)
    },
    onSelect (selection, row) {
      this.$emit('on-select', selection, row)
    },
    onSelectCancel (selection, row) {
      this.$emit('on-select-cancel', selection, row)
    },
    onSelectAll (selection) {
      this.$emit('on-select-all', selection)
    },
    onSelectionChange (selection) {
      this.$emit('on-selection-change', selection)
    },
    onSortChange (column, key, order) {
      this.$emit('on-sort-change', column, key, order)
    },
    onFilterChange (currentData) {
      this.$emit('on-filter-change', currentData)
    },
    onRowClick (rowData, index) {
      this.$emit('on-row-click', rowData, index)
    },
    onRowDblclick (rowData, index) {
      this.$emit('on-row-dblclick', rowData, index)
    },
    onExpand (rowData, status) {
      this.$emit('on-expand', rowData, status)
    }
  },
  created () {
    if (this.checkbox && this.columns) {
      // 防止重复添加
      if (this.columns.some(column => {
        return column.type === 'selection'
      })) {
        return
      }
      this.columns.unshift({
        type: 'selection',
        width: 60,
        align: 'center'
      })
      this.hasSelection = true
    }
  }
}
</script>
