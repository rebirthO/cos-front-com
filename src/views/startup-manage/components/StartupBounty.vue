<!-- bounty -->
<template>
  <div class="startup-bounty">
    <!-- new bounty -->
    <a-row type="flex" justify="end">
      <a-col :span="5">
        <a-button type="primary" block @click="newBounty">+ New Bounty</a-button>
      </a-col>
    </a-row>
    <section class="bounty-list">
      <bounty-list :startupId="startupId"></bounty-list>
    </section>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import BountyList from '@/components/bounty-list/BountyList';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    BountyList
  },
  props: {
    startupId: {
      type: String,
      required: true
    }
  },
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    newBounty() {
      this.$router.push({ name: 'newBounty' });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.startup-bounty {
  .bounty-list {
    margin-top: 20px;
    min-height: 500px;
  }
}
</style>