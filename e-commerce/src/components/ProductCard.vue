<template>
  <div class="product_card">
    <router-link :to="{name: 'product'}">
        <img :src="image" :alt="title" class="w-full h-48 object-cover">
        <div class="px-4 py-2 h-48">
          <div class="font-bold text-lg mb-2">{{ title }}</div>
          <p class="text-gray-700 text-sm mb-4 truncate">{{ description }}</p>
          <p class="font-bold text-lg mb-2">{{ price }}</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>  
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>