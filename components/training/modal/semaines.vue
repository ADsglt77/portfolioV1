<script lang="ts" setup>
interface Jour {
  jour: string;
  titre: string;
  description: string;
}

interface Week {
  semaine: string;
  dates: string;
  jours: Jour[];
}

// Définir les props avec le type Week
const props = defineProps<{
  week: Week;
}>();
</script>

<template>
  <div class="semaine">
    <h4>{{ week.semaine }}</h4>
    <h5>{{ week.dates }}</h5>
    <ul>
      <li v-for="(jour, index) in week.jours" :key="index">
        <h6>{{ jour.jour }} - <span>{{ jour.titre }}</span> :</h6>
        <p v-html="jour.description"></p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h5 {
  color: #47d67e;
}

h4, h5 {
  text-align: center;
}

h6 {
  color: #47d67e;
}
</style>