<template>
    <div class="page_container flex flex-col flex-wrap justify-center items-center my-10">
        <div v-if="products.length > 0" class="list_of_products flex flex-row flex-wrap justify-center items-center gap-3">
            <ProductCard v-for="product in products" :key="product.id" :title="product.title" :image="product.cover_image"
                :price="product.price.toString()" :description="product.description"
                class="w-64 h-96 rounded overflow-hidden shadow-lg mx-2 my-2" />
        </div>
        <div v-else class="text-center w-4/5">
            <h1 class="sorry_message text-5xl">Sorry, there are currently no products available in this category, we are
                working on having it available soon</h1>
        </div>
    </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
    name: 'ProductsList',
    components: {
        ProductCard,
    },
    props: ['id'],
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        (async () => {
            try {
                const response = await this.$http.get(`/categories/${this.id}/products`)
                this.products = response.data.data
            } catch (error) {
                console.error(error)
            }
        })
            ()
    },
}

</script>
<style scoped>
.page_container {
    min-height: 70vh;
}

@media(max-width: 1024px) {
    .sorry_message {
        font-size: larger;
    }
}

@media(max-width: 768px) {
    .sorry_message {
        font-size: large;
    }
}

@media(max-width: 426px) {
    .sorry_message {
        font-size: medium;
    }
}
</style>