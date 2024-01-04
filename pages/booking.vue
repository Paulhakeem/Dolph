<template>
    <div class="bg-[url('../assets/images/home.jpg')] bg-cover bg-no-repeat bg-center h-screen">
    Welcome to our Bookings
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