<script setup>
import axios from 'axios';
import { ref } from 'vue';

const pokemons= ref([])
const getData= async()=>{
    try{
        const data =await axios.get( 'https://pokeapi.co/api/v2/pokemon/')
        console.log(data.data.results)
        pokemons.value=data.data.results
        }catch(error){
        }
    }

    getData()

</script>
<template>
    <h1 class="text-4xl font-black text-slate-800 mb-8 border-b-4 border-green-400 inline-block">
      POKEMONES
    </h1>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li v-for="pokemon in pokemons"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
            <RouterLink 
            :to="`/pokemon/${pokemon.name}`"
            class="block p-4 text-center capitalize font-semibold text-slate-700 hover:bg-green-400 hover:text-white transition-colors"
            >{{ pokemon.name }}
            </RouterLink>
        </li>
    </ul>
</template>