<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <div class="menu-demo">
        <a-menu
          mode="horizontal"
          theme="dark"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/admin.jpg" />
              <div class="text">Vig Oj</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
      <a-col class="title-user" flex="100px">
        <div>
          {{ store.state.user?.loginUser?.userName ?? "未登录" }}
        </div>
      </a-col>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();

// 路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "vighzhen",
//     role:"admin"
//   });
// }, 3000);

// 默认主页
const selectedKeys = ref(["/"]);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

const store = useStore();
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title-user {
  font-size: 18px;
  color: white;
  position: absolute;
  top: 35px;
  right: 15px;
}

.text {
  color: white;
  margin-left: 25px;
}

.logo {
  padding-top: 10px;
  width: 48px;
}
</style>
