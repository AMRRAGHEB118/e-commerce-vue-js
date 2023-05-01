<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="categories bg-slate-600">
        <div class="section_info">
            <img class="w-16" src="../assets/images/category-icon.png" alt="">
            <h2 class="text-light text-3xl">Categories</h2>
        </div>
        <div class="category_cards row">
            <HomeCategoryCard
            class="category_card col-3"
            v-for="category in categories"
            :key="category.id"
            :name="category.name"
            :image="category.image"
        />
        </div>
    </div>
</template>

<script>
import HomeCategoryCard from '../components/HomeCategoryCard.vue'
export default {
    components: {
        HomeCategoryCard,
    },
    data() {
        return {
            categories: [
            {
                name:"sport",
                image: 'src/assets/images/sports-and-outdoors-flat-orange-design-long-shadow-glyph-icon-hobbies-games-and-sport-e-commerce-department-online-shopping-categories-active-leisure-concept-silhouette-illustration-vector.jpg',
            },
            {
                name:"clothes",
                image: 'src/assets/images/clothing-category-1.png',
            },
            {
                name:"booking",
                image: 'src/assets/images/1487274.png',
            },
        ],
        }
    },
}
</script>

<style scoped>
.categories {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
.section_info{
margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.category_cards{
margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>
