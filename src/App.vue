<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";

/***
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInt = () => {
  console.log("hello 欢迎来到我的项目");
};

onMounted(() => {
  doInt();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  // 仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
