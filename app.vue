<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html,
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.title {
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
}

.str_box p {
  padding-top: 10px;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar,
section::-webkit-scrollbar,
.div::-webkit-scrollbar {
  display: none !important; /* Chrome Safari */
}

.arco-layout-sider-children::-webkit-scrollbar {
  display: none !important;
}

html,
body,
.div {
  scrollbar-width: none !important; /* firefox */
  -ms-overflow-style: none !important; /* IE 10+ */
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
</style>
