<script setup>
defineProps(['pokemon']);
</script>

<template>
  <div class="space-y-3">
    <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="text-left">
      <div class="flex justify-between text-xs uppercase font-bold text-slate-500">
        <span>{{ stat.stat.name }}</span>
        <span>{{ stat.base_stat }}</span>
      </div>
      <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div class="bg-emerald-400 h-full transition-all duration-500" 
             :style="{ width: stat.base_stat + '%' }"></div>
      </div>
    </div>
  </div>
</template>