<template>
    <div class="home">
        <div class="hero bg-slate-400 sm:h-screen flex items-center justify-center px-4">
        <form class="flex items-center md:items-stretch">
          <input class="search_input p-2 rounded-l md:rounded-l-none md:rounded-r w-full md:w-96 h-10 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent"
            type="text" placeholder="Search Product">
          <button class="search_button bg-sky-800 text-white px-4 rounded-r h-10 hover:bg-sky-700 focus:outline-none">
            Search
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
    .hero {
      background-image: url('../assets/images/dimapolie180400232.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
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
  
    @media (min-width: 768px) {
      .hero {
        height: 400px;
      }
  
      .search_input {
        margin-right: -5px;
      }
  
      .search_button {
        margin-left: -5px;
      }
    }
  </style>