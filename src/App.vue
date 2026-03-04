<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

<div class="min-h-screen bg-slate-50">
    <nav class="bg-white shadow-md p-4 flex justify-center gap-6 border-b border-slate-200">
      <RouterLink 
        to="/" 
        class="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
        active-class="text-emerald-600 border-b-2 border-emerald-600"
      >
        Home
      </RouterLink>

      <RouterLink 
        to="/about" 
        class="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
        active-class="text-emerald-600 border-b-2 border-emerald-600"
      >
        About
      </RouterLink>

      <RouterLink 
        to="/Pokemon" 
        class="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
        active-class="text-emerald-600 border-b-2 border-emerald-600"
      >
        Pokemones
      </RouterLink>
    </nav>

    <main class="container mx-auto p-6">
      <RouterView />
    </main>
  </div>
</template>

