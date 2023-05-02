<template>
  <router-link :to="{ name: 'products', params: { id: id } }" class="category_card col-3">
    <img :src="image" alt="Category Image">
    <div class="category_title">{{ name }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>
.category_card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 20px;
  cursor: pointer;
  padding: 0%;
}

.category_card:hover .category_title {
  background-color: #555;
}

.category_card img {
  display: block;
  height: 200px;
  object-fit: cover;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
}

.category_title {
  background-color: #333;
  width: 100%;
  color: #fff;
  font-size: 24px;
  padding: 10px;
  text-align: center;
  transition: background-color 0.2s ease-in-out;
}
@media(max-width: 768px){
  .category_card{
    width: 60%;
  }
}
</style>