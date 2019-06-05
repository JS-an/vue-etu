<template>
  <div class="box" :style="`width: ${width}; height: ${height}`">
    <table class="table">
      <thead class="thead">
        <tr>
          <th v-for="item of headData" :key="item.key" :style="`width: ${cellWidth}; height: ${cellHeight}`">{{ item.name }}</th>
          <th :style="`width: ${cellWidth}; height: ${cellHeight}`">
            <slot name="head" :row="1"></slot>
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="(item, i) of bodyData" :key="i">
          <td v-for="(val, key, j) of item" :key="j" :style="`width: ${cellWidth}; height: ${cellHeight}`" @dblclick="setValue(i, j)">{{ val }}</td>
          <td :style="`width: ${cellWidth}; height: ${cellHeight}`">
            <slot name="body" :row="i"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'etuTable',
  props: {
    headData: {
      type: Array,
      default: () => []
    },
    bodyData: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    },
    cellWidth: {
      type: String,
      default: '200px'
    },
    cellHeight: {
      type: String,
      default: '50px'
    },
  },
  methods: {
    setValue (i, j) {
      console.log(i, j)
    },
    edit () {
      console.log('ok')
    },
  },
}
</script>

<style lang="scss" scoped>
$etu_table_border_color: #eee;
$etu_table_thead_bg_color: #d6d6d6;
$etu_table_tbody_bg_color: #fff;
$etu_table_tbody_tr_hover: #e6f7ff;

* {
  box-sizing: border-box;
  font-size: 14px;
}
.box {
  overflow: auto;
  .table {
    border-collapse: collapse;
    width: 100%;
    tr {
      border-bottom: 1px solid $etu_table_border_color;
    }
    th, td {
      background-color: #fff;
      padding: 0 10px;
      border-left: 1px solid $etu_table_border_color;
      &:last-child {
        border-right: 1px solid $etu_table_border_color;
      }
    }
    .thead {
      th {
        background-color: $etu_table_thead_bg_color;
        position: sticky;
        top: 0;
        z-index: 9;
        &:nth-child(1) {
          z-index: 10;
        }
        &:nth-child(2) {
          z-index: 10;
        }
      }
    }
    .tbody {
      tr {
        &:nth-child(odd) {
          td {
          background-color: #fff;
          }
        }
        &:nth-child(even) {
          td {
            background-color: #fbfbfb;
          }
        }
        &:hover {
          td {
            background-color: $etu_table_tbody_tr_hover;
          }
        }
      }
    }
  }
}
</style>
