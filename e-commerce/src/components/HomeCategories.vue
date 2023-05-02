<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="categories bg-slate-200">
        <div class="section_info">
            <img class="w-16" src="../assets/images/category-icon.png" alt="">
            <h2 class="text-black text-3xl">Categories</h2>
        </div>
        <div class="category_cards row">
            <HomeCategoryCard v-for="category in categories" :key="category._id" :id="category._id" :name="category.name"
                :image="category.image" />
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
            categories: [],
        }
    },
    created() {
  (async () => {
    try {
      const response = await this.axios.get('http://localhost:3000/api/v1/categories')
      this.categories = response.data.data
      console.log(response.data.data)
    } catch (error) {
      console.error(error)
    }
  })
  ()
}
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

.section_info {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.category_cards {
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>
