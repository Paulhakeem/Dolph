<template>
    <div class="bg-[url('../assets/images/ferarri.jpg')] bg-cover bg-no-repeat bg-center h-screen">
    <div class="px-6 bg-light opacity-50 h-96 justify-center">
     
    </div>
    </div>
</template>

<script setup>
const {user} = useFirebaseAuth()

definePageMeta({
  middleware: ["auth"]
})
useHead({
  titleTemplate: "%s - booking",
});
</script>

<style lang="scss" scoped>

</style>