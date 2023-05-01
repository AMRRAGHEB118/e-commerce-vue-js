<!-- eslint-disable vue/multi-word-component-names -->
<script>
import HomeHero from '../components/HomeHero.vue';
import HomeCategories from '../components/HomeCategories.vue';
export default {
    name: 'Home',
    components: {
    HomeHero,
    HomeCategories
}
}
</script>

<template>
<HomeHero />
<HomeCategories />
</template>

<style scoped>
</style>