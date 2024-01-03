<template>
    <div>
    Welcome to our Bookings
    </div>
</template>

<script setup>
const {user} = useFirebaseAuth()

definePageMeta({
  middleware: ["auth"],
});
useHead({
  titleTemplate: "%s - booking",
});
</script>

<style lang="scss" scoped>

</style>