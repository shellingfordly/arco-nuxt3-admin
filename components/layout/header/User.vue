<script lang="ts" setup>
import { Modal } from "@arco-design/web-vue";
import { UserInfo } from "~/types";
import { USER_INFO } from "~~/constants";
import { useUserStore } from "~~/store/user";

const userStore = useUserStore();
const userInfo = ref<UserInfo>({} as any);
const username = computed(() => userInfo.value?.username?.slice(0, 3));
const isAdmin = computed(() => userInfo.value?.auth?.includes("admin"));
const modifyPwdShow = ref(false);
const createUserShow = ref(false);

const createUserColumns = [
  {
    field: "username",
    label: "用户名",
    rules: [{ required: true, message: `用户名必须填写！` }],
  },
  {
    field: "password",
    label: "密码",
    rules: [{ required: true, message: `密码必须填写！` }],
  },
  {
    field: "auth",
    label: "权限",
  },
];

const columns = [
  {
    field: "password",
    label: "旧密码",
    rules: [{ required: true, message: `旧密码必须填写！` }],
  },
  {
    field: "newPassword",
    label: "新密码",
    rules: [{ required: true, message: `新密码必须填写！` }],
  },
];

onMounted(async () => {
  const cache = await useCache();
  userInfo.value = (await cache.getItem(USER_INFO)) as any;
});

function onLogout() {
  Modal.warning({
    title: "温馨提示",
    content: "是否退出本系统？",
    onOk: userStore.logout,
    okButtonProps: { type: "primary" },
  });
}
</script>

<template>
  <a-dropdown>
    <a-avatar class="avatar">{{ username }}</a-avatar>
    <template #content>
      <a-doption v-if="isAdmin" @click="createUserShow = true">
        创建用户
      </a-doption>
      <a-doption @click="modifyPwdShow = true">修改密码</a-doption>
      <a-doption @click="onLogout">退出登录</a-doption>
    </template>
  </a-dropdown>

  <a-modal title="修改密码" v-model:visible="modifyPwdShow" :footer="false">
    <ApiForm
      :default-form="userInfo"
      :columns="columns"
      api-name="ModifyPassword"
      btn-text="确定"
      @success="modifyPwdShow = false"
    />
  </a-modal>

  <a-modal title="创建用户" v-model:visible="createUserShow" :footer="false">
    <ApiForm
      :columns="createUserColumns"
      api-name="Logon"
      btn-text="确定"
      @success="createUserShow = false"
    />
  </a-modal>
</template>

<style scoped>
.right_header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 14px 20px;
}

.avatar {
  background-color: rgb(var(--primary-6));
  cursor: pointer;
}
</style>
