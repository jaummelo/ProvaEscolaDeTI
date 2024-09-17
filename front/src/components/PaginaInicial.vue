<template>
<h3>CURSOS</h3>

<div>
<label>Nome</label>
  <input
    :value="curso.nome"
    @input="event => nome = event.target.value">

<input
    :value="curso.cargaHoraria"
    @input="event => nome = event.target.value" type="number">

  <label>Tempo de preparo</label>
  <input
    :value="curso.dataInicio"
    @input="event => nome = event.target.value" type="date">
    
  <label>Custo aproximado</label>
  <input
    :value="curso.disciplina"
    @input="event => nome = event.target.value" type="string">

    <button @click="enviar()" class="mt-3" type="button">Salvar</button>
</div> 

<div>
  <span class="mt-3" v-for="item in cursos">
    {{item}}
    <button @click="remover(item.id)" class="mt-3" type="button">Remover</button>
    <button @click="editar(item)" class="mt-3" type="button">Editar</button>
  </span>
</div> 
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import axios from "axios"

const curso = ref({})
const cursos = ref([]);
onMounted(async () => {
  await init()
});

async function init() {
  const {data} = await axios.get("http://localhost:5173/cursos")
  console.log(data)

  cursos.value = data
}

const enviar = async function() {
  await axios.post("http://localhost:5173/cursos", {
    nome: curso.nome,
    tempo_preparo: curso.tempo_preparo,
    custo_aproximado: curso.custo_aproximado
  })

  await init();
}

const remover = async function(id) {
  await axios.delete("http://localhost:5173/cursos/" + id)

  await init();
}

function editar(item) {
  curso.value = item
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div {
  margin: 0 15rem 0 15rem;
  display: flex;
  flex-direction: column
}

.mt-3 {
  margin-top: 1.5rem
}
</style>
