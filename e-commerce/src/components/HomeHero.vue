<script>
export default {
}
</script>

<template>
    <div class="home">
        <div class="hero bg-slate-400">
            <form action="">
                <input class="search_input p-2 rounded w-96 h-10 focus:outline-double focus:ring focus:border-sky-800-500/90" type="text"
                    placeholder="Search Product">
            </form>
        </div>
    </div>
</template>

<style scoped>
.hero {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/dimapolie180400232.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.search_input{
    border: 5px double lightblue;
}
</style>