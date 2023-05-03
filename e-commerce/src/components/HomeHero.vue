<template>
    <div class="home">
        <div class="hero bg-slate-400 sm:h-96 flex items-center justify-center px-4 text-center">
          <h1 class="text-6xl">Welcome Dear Customer</h1>
        <!-- <form class="flex items-center md:items-stretch">
          <input class="search_input p-2 rounded-l md:rounded-l-none md:rounded-r w-full md:w-96 h-10 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent"
            type="text" placeholder="Search Product">
          <button class="search_button bg-sky-800 text-white px-4 rounded-r h-10 hover:bg-sky-700 focus:outline-none">
            Search
          </button>
        </form> -->
      </div>
    </div>
  </template>
  
  <style scoped>
    .hero {
      padding: 2rem;
    }
  
    .search_input {
      border: 5px double #64748b;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      font-size: 1.2rem;
      color: #333;
    }
  
    .search_button {
      font-size: 1.2rem;
    }
  
    @media (max-width: 768px) {
      .hero {
        height: 300px;
      }
  h1{
    font-size: 30px;
  }
      /* .search_input {
        margin-right: -5px;
      }
  
      .search_button {
        margin-left: -5px;
      } */
    }
  </style>