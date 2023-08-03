<template>
    <div class="Pagination_strip mt-16">
        <nav class="flex justify-center">
    <ul class="flex">
      <li v-if="current_page > 1">
        <a class="block hover:bg-gray-200 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-l-md">
          Previous
        </a>
      </li>
      <li v-for="page in pages" :key="page">
        <!-- :class="{'bg-gray-200 text-gray-700': pageNumber === currentPage, 'hover:bg-gray-200': pageNumber !== currentPage}" -->
        <a @click="get_selected_page(page)" class="block hover:bg-gray-200 text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2">
          {{ page }}
        </a>
      </li>
      <li>
        <a class="block hover:bg-gray-200 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-r-md">
          Next
        </a>
      </li>
    </ul>
  </nav>
    </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    current_page: {
      type: Number,
      required: true
    }
  },
methods:{
  get_selected_page(page){
    this.$emit('page-selected', page)
  }
}
}
</script>