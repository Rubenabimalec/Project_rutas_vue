<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'; // Importamos ref y onMounted
import { useRoute,useRouter } from 'vue-router';
const route= useRoute()
const router = useRouter()
const pokemon = ref(null); // Guardaremos aqui los datos del Pokemon
const back = ()=> {
    router.push('/pokemon')

}
const getData=async()=>{
    try{
        const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        pokemon.value = data; // Guardamos la info en nuestra referencia
        console.log(data)
    }catch(error){
        console.log("error catch")
    }
}
onMounted(() => {
    getData();
});
</script>

<template>
        <button @click="back" class="flex items-center text-slate-400 hover:text-emerald-500 mb-4 transition">
            <span>← Volver al listado</span>
        </button>

    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 text-center">

        <div v-if="pokemon">
            <div class="bg-slate-100 rounded-2xl p-4 mb-4">
                <img :src="pokemon.sprites.front_default" 
                     :alt="pokemon.name" 
                     class="w-48 h-48 mx-auto drop-shadow-lg" />
            </div>
            
            <h1 class="text-3xl font-black capitalize text-slate-800">{{ pokemon.name }}</h1>
            
            <div class="flex justify-center gap-2 mt-4">
                <span v-for="tipo in pokemon.types" :key="tipo.type.name"
                      class="px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase">
                    {{ tipo.type.name }}
                </span>
            </div>
            
            <div class="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div class="p-3 bg-slate-50 rounded-lg">
                    <p class="text-slate-400">Peso</p>
                    <p class="font-bold text-slate-700">{{ pokemon.weight / 10 }} kg</p>
                </div>
                <div class="p-3 bg-slate-50 rounded-lg">
                    <p class="text-slate-400">Altura</p>
                    <p class="font-bold text-slate-700">{{ pokemon.height / 10 }} m</p>
                </div>
            </div>
        </div>
        <div v-else class="animate-pulse">
            <div class="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <div class="h-8 bg-slate-200 w-3/4 mx-auto rounded"></div>
        </div>
    </div>



    <div v-if="pokemon" class="max-w-md mx-auto mt-10 p-6 bg-white rounded-3xl shadow-xl">
    <div class="flex border-b border-slate-100 mt-6">
      <RouterLink 
        :to="`/pokemon/${pokemon.name}/stats`" 
        class="flex-1 py-2 text-sm font-bold text-slate-400"
        active-class="text-emerald-500 border-b-2 border-emerald-500"
      >
        Estadísticas
      </RouterLink>
      <RouterLink 
        :to="`/pokemon/${pokemon.name}/abilities`" 
        class="flex-1 py-2 text-sm font-bold text-slate-400"
        active-class="text-emerald-500 border-b-2 border-emerald-500"
      >
        Habilidades
      </RouterLink>
    </div>

    <div class="py-4">
      <RouterView :pokemon="pokemon" />
    </div>
  </div>
</template> 