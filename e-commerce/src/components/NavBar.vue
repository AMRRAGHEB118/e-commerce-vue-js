<script>
export default {
    data() {
        return {
            menu_open: false
        }
    },
    methods: {
        change_menu_status(){
let navbar_menu = document.getElementById('navbar_menu')
    this.menu_open = !this.menu_open
  
  if (this.menu_open) {
    navbar_menu.classList.add('show')
  } else {
    navbar_menu.classList.remove('show')
  }
        }
    }
}

</script>
<template>
    <div class="navbar bg-black">
        <div class="navbar_brand">
            <router-link to="/" class="navbar_item"
                ><strong class="text-gray-50">e-commerce</strong></router-link
            >
        </div>
        <div id="navbar_menu" class="navbar_menu">
            <div class="navbar_end">
                <router-link to="/demo" class="navbar_item text-gray-50">demo</router-link>
                <router-link to="/summer" class="navbar_item text-gray-50">summer</router-link>
            </div>
            <div class="navbar_items">
                <router-link to="/login" class="btn btn-light">login</router-link>
                <router-link to="/cart" class="btn btn-success"
                    ><span class="icon"
                        ><i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i
                    ></span>
                    <span> Cart</span></router-link
                >
            </div>
        </div>
        <div @click="change_menu_status" class="hamburger bg-light p-2 rounded w-12 mr-2 text-center">
            <i class="fa-sharp fa-solid fa-bars" style="color: #94a3b8"></i>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
}
.navbar_brand {
    margin-left: 10px;
}
.navbar_menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
}
.navbar_end {
    display: flex;
    gap: 10px;
    margin-right: 10px;
}
.navbar_items {
    display: flex;
    gap: 10px;
}
.hamburger {
    display: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }
    .navbar_menu {
        display: none;
        position: absolute;
        top: 50px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: black;
        width: 100%;
        margin-right: 0;
        padding: 10px;
    }
    .navbar_end {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .navbar_items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .show{
        display: flex;
    }
}
</style>
