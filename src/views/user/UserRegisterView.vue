<template>
  <div id="userLoginView">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userName" tooltip="请输入用户名" label="用户名">
        <a-input v-model="form.userName" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item field="userAccount" tooltip="请输入用户名" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item field="checkPassword" label="确认密码">
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/***
 * 表单信息
 */
const form = reactive({
  userName: "",
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

/***
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegister(form);
  if (res.code === 0) {
    alert("注册成功 " + JSON.stringify(res.data));
    await store.dispatch("user/register");
    // 登录成功跳转到主页
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("注册失败" + res.message);
  }
  alert(JSON.stringify(form));
};
</script>
