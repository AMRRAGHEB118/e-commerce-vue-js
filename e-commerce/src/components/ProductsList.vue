<template>
    <div class="page_container">
        <div v-show="!no_product" class="list_of_products flex flex-row flex-wrap items-center gap-3">
            <ProductCard v-for="product in products" :key="product.id" :title="product.title" :image="product.cover_image"
                :price="product.price.toString()" :description="product.description"
                class="w-64 h-96 rounded overflow-hidden shadow-lg mx-2 my-2" />
        </div>
        <div v-show="no_product" class="text-center w-3/5 my-52 mx-auto">
            <h1 class="sorry_message text-5xl">
                Sorry, there are currently no products available in this category, we are working on
                having it available soon
            </h1>
        </div>
        <div v-show="offline" class="text-center w-3/5 my-52 mx-auto">
            <h1 class="sorry_message text-5xl">
                Sorry, there are problem with server, we going to work on it 
            </h1>
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
            no_product: false,
            offline: false,
        }
    },
    beforeMount() {
        (async () => {
            try {
                const response = await this.$http.get(`/categories/${this.id}/products`)
                this.products = await response.data.data
                if (this.products.length < 1) {
                    this.no_product = true
                }
            } catch (err) {
                this.offline = true
            }
        })()
    },
}
</script>
<style scoped>
.page_container {
    min-height: 70vh;
}

@media (max-width: 1024px) {
    .sorry_message {
        font-size: larger;
    }
}

@media (max-width: 768px) {
    .sorry_message {
        font-size: large;
    }
}

@media (max-width: 426px) {
    .sorry_message {
        font-size: medium;
    }
}
</style>
