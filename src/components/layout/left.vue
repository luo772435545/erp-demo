<template>
  <Menu>
    <Submenu />

    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />
        内容管理
      </template>
      <MenuItem name="1-1">文章管理</MenuItem>
      <MenuItem name="1-2">评论管理</MenuItem>
      <MenuItem name="1-3">举报管理</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-people" />
        用户管理
      </template>
      <MenuItem name="2-1">新增用户</MenuItem>
      <MenuItem name="2-2">活跃用户</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-stats" />
        统计分析
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script >
import menuData from '@/api/menu'
import commonMixin from '@/mixin/commonMixin'

export default {
  name: 'Left',
  mixins: [commonMixin],
  props: {},
  data() {
    return {
      menuData: []
    }
  },
  watch: {},
  created() {
    this.recursionMenu()
  },
  methods: {
    recursionMenu() {
      /**
             * 递归菜单数据
             * */
      const menuData = Array.from({ length: 15 }, (x, y) => {
        return {
          mainTitle: '菜单' + y,
          id: y + 1,
          pid: 0 + parseInt(Math.random() * y)
        }
      })
      console.log(menuData)
      // 01 方式每个元素遍历全部元素找到子元素  0.203125ms
      /* console.time();
             let menu = this.JSONCopy(menuData)
             let obj = {};
             const PID = 0; // 初始ID
             a(menu,0,menu.filter(i=> i.pid === PID));
             function a (data,pid,arr) {
             data.forEach(i=>{
             arr.forEach(j=>{
             if (i.pid === j.id) {
             j.children ? j.children.push(i) : j.children = [i];
             // 每个元素只全局遍历一遍
             if (!obj[i.id]) {
             obj[j.id] = true;
             a(data,i.id,j.children)
             }
             }
             })
             })
             }
             console.timeEnd(); */
      // 02 先进行分组 然后归类 0.090087890625ms
      const menu = this.JSONCopy(menuData)
      const obj = {}
      const PID = 0
      menu.forEach(i => {
        !obj[i.pid] ? obj[i.pid] = [i] : obj[i.pid].push(i)
      })
      for (const key in obj) {
        obj[key].forEach(i => {
          i.children = obj[i.id] || []
        })
      }
      console.log(obj[PID])
    }

  }
}

</script >

<style scoped >

</style >
