<template>
    <nav class="bg-black">
      <div class="container mx-auto flex items-center justify-between h-16">
        <router-link class="text-gray-50" to="/">
          <strong class="text-gray-50">e-commerce</strong>
        </router-link>
        <div class="hidden md:flex">
          <div class="flex items-center">
            <router-link class="text-gray-50 px-4 hover:bg-gray-800" to="/">Home</router-link>
            <router-link class="text-gray-50 px-4 hover:bg-gray-800" to="/about">About Us</router-link>
          </div>
          <div class="flex items-center">
            <router-link class="btn btn-light" to="/login">login</router-link>
            <router-link class="btn btn-success ml-4" to="/cart">
              <span class="icon">
                <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
              </span>
              <span>Cart</span>
            </router-link>
          </div>
        </div>
        <div class="flex md:hidden">
          <button class="hamburger bg-light p-2 rounded w-12 mr-2 text-center" @click="menu_open = !menu_open">
            <i class="fa-sharp fa-solid fa-bars" style="color: #94a3b8"></i>
          </button>
        </div>
      </div>
      <div class="md:hidden" :class="{ 'block': menu_open, 'hidden': !menu_open }">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link class="text-gray-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800" to="/demo">
            demo
          </router-link>
          <router-link class="text-gray-50 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800" to="/summer">
            summer
          </router-link>
          <router-link class="btn btn-light block w-full text-left" to="/login">login</router-link>
          <router-link class="btn btn-success block w-full text-left" to="/cart">
            <span class="icon">
              <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
            </span>
            <span>Cart</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu_open: false,
      };
    }
  };
  </script>
