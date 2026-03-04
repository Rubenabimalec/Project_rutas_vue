<script setup>
// Le decimos a Vue que este componente espera recibir algo llamado 'pokemon'
defineProps(['pokemon']);
</script>
<template>
  <ul class="space-y-2">
    <li v-for="ability in pokemon.abilities" :key="ability.ability.name" 
        class="p-2 bg-blue-50 text-blue-700 rounded-lg capitalize font-medium">
      {{ ability.ability.name }}
    </li>
  </ul>
</template>