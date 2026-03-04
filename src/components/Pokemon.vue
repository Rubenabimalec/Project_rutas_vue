<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const pokemons = ref([]);
const offset = ref(0); // El punto de inicio (Pokémon #0)
const limit = 20;      // Cuántos traer por cada "página"

const getData = async () => {
    try {
        // 1. Usamos Template Strings (``) para inyectar las variables en la URL
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit}`);
        pokemons.value = data.results;
    } catch (error) {
        console.error("Error al obtener pokemones:", error);
    }
}

// 2. Funciones para navegar
const next = () => {
    offset.value += limit; // Saltamos a los siguientes 20
    getData();
}

const prev = () => {
    if (offset.value > 0) {
        offset.value -= limit; // Volvemos 20 atrás
        getData();
    }
}

// Ejecutamos la carga inicial
onMounted(getData);
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto">
        <h1 class="text-4xl font-black text-slate-800 mb-8 border-b-4 border-green-400 inline-block uppercase">
            Pokemones
        </h1>

        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <li v-for="pokemon in pokemons" :key="pokemon.name"
                class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden">
                <RouterLink 
                    :to="`/pokemon/${pokemon.name}`"
                    class="block p-4 text-center capitalize font-semibold text-slate-700 hover:bg-green-400 hover:text-white transition-colors"
                >
                    {{ pokemon.name }}
                </RouterLink>
            </li>
        </ul>

        <div class="mt-10 flex justify-center items-center gap-4">
            <button 
                @click="prev" 
                :disabled="offset === 0"
                class="px-5 py-2 bg-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                Anterior
            </button>

            <span class="text-slate-500 font-mono text-sm">
                Registro: {{ offset }} - {{ offset + limit }}
            </span>

            <button 
                @click="next" 
                class="px-5 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 shadow-lg shadow-green-200 transition-all"
            >
                Siguiente
            </button>
        </div>
    </div>
</template>