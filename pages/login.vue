<script lang="ts" setup>
import { useUserStore } from "~/store/user";

definePageMeta({
  title: "登录",
  layout: "login",
});

const userStore = useUserStore();
const form = reactive({
  username: "",
  password: "",
});

async function onSubmit({ values, errors }: any) {
  if (errors) return;
  userStore.login(values);
}
</script>

<template>
  <a-form :model="form" layout="vertical" size="large" @submit="onSubmit">
    <a-form-item
      field="username"
      label="用户名"
      :rules="[{ required: true, message: '用户名必须填写！' }]"
      :validate-trigger="['input']"
    >
      <a-input v-model="form.username" placeholder="请输入用户名" allow-clear />
    </a-form-item>
    <a-form-item
      field="password"
      label="密码"
      :rules="[{ required: true, message: '密码必须填写！' }]"
      :validate-trigger="['input']"
    >
      <a-input-password
        placeholder="请输入密码"
        allow-clear
        v-model="form.password"
      />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary"> 登录 </a-button>
    </a-form-item>
  </a-form>
</template>
