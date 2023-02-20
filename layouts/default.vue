<script lang="ts" setup>
const collapsed = useState(() => false);
const onCollapse = (val: any) => (collapsed.value = val);
</script>

<template>
  <a-layout class="layout-demo">
    <a-layout-sider
      theme="dark"
      breakpoint="lg"
      :width="220"
      collapsible
      :collapsed="collapsed"
      @collapse="onCollapse"
    >
      <div class="logo">
        <span v-if="collapsed">AN</span>
        <span v-else>Arco Nuxt Admin</span>
      </div>
      <LayoutLeftMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-row>
          <a-col :span="18">
            <LayoutTopMenu />
          </a-col>
          <a-col :span="6">
            <LayoutHeader />
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout class="layout_content">
        <LayoutBreadcrumb />
        <a-layout-content><slot /></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout-demo {
  height: 100%;
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: var(--color-white);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
  color: var(--color-text-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  color: var(--color-text-2);
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout_content {
  padding: 0 24px 24px;
}

body[arco-theme="dark"] .layout_content {
  background-color: var(--color-bg-5);
}
</style>
