<script setup>
const router = useRouter();

const routes = router.getRoutes();

console.log("routes: ", routes);
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
