<template>
  <div id="app">
    <etu-table :headData='headData' :bodyData='bodyData'>
      <template v-slot:head="socpe">
        <button @click="edit(socpe.row)">编辑</button>
      </template>
      <template v-slot:body="socpe">
        <button @click="edit(socpe.row)">编辑</button>
      </template>
    </etu-table>
    <button @click="popup">popup</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headData: [
        {
          key: 1,
          name: '序号',
        },
        {
          key: 2,
          name: '名字',
        },
        {
          key: 3,
          name: '电话',
        },
        {
          key: 4,
          name: '电话',
        },
        {
          key: 5,
          name: '电话',
        },
      ],
      bodyData: [
        {
          key: 1,
          name: 'aaa',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 2,
          name: 'bbb',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 3,
          name: 'ccc',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 4,
          name: 'ddd',
          phone: 'aa22000000000000121a',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'a21212aa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aa2121a',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aa212a',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },
        {
          key: 5,
          name: 'eee',
          phone: 'aaa',
          ccc: 'aaa',
          vvv: 'aaa',
        },

      ],
    }
  },
  methods: {
    popup () {
      this.$etuPopup()
    },
    edit (row) {
      console.log(row)
    },
  },
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
