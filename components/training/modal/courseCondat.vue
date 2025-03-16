<script lang="ts" setup>
const emit = defineEmits(["close"]);

interface Horaire {
  headers: string[];
  rows: {
    jour: string;
    matin: string;
    apresMidi: string;
  }[];
}

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

const horaires: Horaire = {
  headers: ["Jour", "Matin", "Après-midi"],
  rows: [
    { jour: "Lundi", matin: "9h-12h", apresMidi: "13h-17h" },
    { jour: "Mardi", matin: "9h-12h", apresMidi: "13h-17h" },
    { jour: "Mercredi", matin: "9h-12h", apresMidi: "13h-17h" },
    { jour: "Jeudi", matin: "9h-12h", apresMidi: "13h-17h" },
    { jour: "Vendredi", matin: "9h-12h", apresMidi: "13h-17h" },
  ],
};

const weekData = ref<Week[]>([
  {
    semaine: "Semaine 1",
    dates: "Du 13 Janvier au 17 Janvier",
    jours: [
      {
        jour: "Lundi",
        titre: "",
        description: " • ",
      },
      {
        jour: "Mardi",
        titre: "",
        description: " • ",
      },
      {
        jour: "Mercredi",
        titre: "",
        description: " • ",
      },
      {
        jour: "Jeudi",
        titre: "",
        description: " • ",
      },
      {
        jour: "Vendredi",
        titre: "",
        description: " • ",
      },
    ],
  },
]);

const selectedWeek = ref<Week | null>(null);
const content = ref<HTMLElement | null>(null);

function selectWeek(week: Week) {
  selectedWeek.value = week;
  setTimeout(() => {
    if (content.value)
      content.value.scrollTo({
        top: content.value.scrollHeight,
        behavior: "smooth",
      });
  }, 0);
}
</script>

<template>
  <div class="modal">
    <div class="content">
      <IconsArrowBack @click="emit('close')" />
      <div>
        <h1>CONDAT</h1>
        <a href="https://condatbasketclub.com" target="_blank"
          ><h5>CondatBasketClub.com</h5></a
        >
      </div>
      <div class="line"></div>
      <h6>Informations sur le stage :</h6>
      <p>
        Ce projet consiste à créer un site vitrine pour le Club de Basket de
        Condat. Il mettra en avant les valeurs du club, ses licenciés et ses
        produits. Avec ce site vitrine un Dashboard sera développé pour les
        gérants du club, il permettra la mise à jour du site facilement et
        rapidement. Pour cela j’utiliserai le Framework <a href="https://nuxt.com" target="_blank">NuxtJS</a>
      </p>
      <table>
        <thead>
          <tr>
            <th v-for="header in horaires.headers" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in horaires.rows" :key="index">
            <td>{{ row.jour }}</td>
            <td>{{ row.matin }}</td>
            <td>{{ row.apresMidi }}</td>
          </tr>
        </tbody>
      </table>
      <h6>Tout les projets sont disponibles ici :</h6>
      <a href="https://github.com/Condat-Basket-Club" target="_blank">
        <IconsGithub />
        <p>VOIR LE REPO GITHUB</p>
      </a>
      <h6>Semaines de stage :</h6>
      <ul>
        <li v-for="(week, index) in weekData" :key="index">
          <a href="#" @click.prevent="selectWeek(week)" :id="week.semaine">{{
            week.semaine
          }}</a>
          : {{ week.dates }}
        </li>
      </ul>
      <TrainingModalSemaines :week="selectedWeek" v-if="selectedWeek" />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  left: 0;
  top: 10vh;
  width: 100vw;
  height: 90vh;
  overflow: hidden auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

.modal .line {
  width: 95%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  grid-column: 1 / -1;
  margin: 20px 0;
}

.modal .content {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal .content > a:first-of-type {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.modal .content > a:first-of-type:hover {
  background-color: rgba(32, 70, 11, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.modal .content a {
  color: #47d67e;
}

.modal div div h1,
.modal div div h5 {
  text-align: center;
}

.modal div div a:hover {
  text-decoration: solid underline #ff7979 1px;
  text-underline-offset: 5px;
}

.modal h5 {
  font-weight: 300;
  color: #ff7979;
}

.modal table {
  width: 50%;
  table-layout: fixed;
  border-collapse: collapse;
}

.modal table th,
.modal table td {
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  text-align: left;
}

.modal table th {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1200px) {
  .modal .content {
    width: 90%;
  }
}

@media (max-width: 1000px) {
  .modal table {
    width: 80%;
  }
}

@media (max-width: 600px) {
  .modal table {
    width: 100%;
  }
}
</style>
