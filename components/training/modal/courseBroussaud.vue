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
    { jour: "Mardi", matin: "8h-12h", apresMidi: "13h-16h" },
    { jour: "Mercredi", matin: "8h-12h", apresMidi: "13h-16h" },
    { jour: "Jeudi", matin: "8h-12h", apresMidi: "13h-16h" },
    { jour: "Vendredi", matin: "8h-12h", apresMidi: "13h-16h" },
  ],
};

const weekData = ref<Week[]>([
  {
    semaine: "Semaine 1",
    dates: "Du 27 mai au 31 mai",
    jours: [
      {
        jour: "Lundi",
        titre: "Découverte de l'entreprise",
        description:
          " • Découverte de l'entreprise et du système d'information",
      },
      {
        jour: "Mardi",
        titre: "Test des compétences",
        description:
          " • Mon maître de stage a voulu tester mes compétences. J'ai dû reproduire en PHP le jeu de la bataille. (code bientôt disponnible)",
      },
      {
        jour: "Mercredi",
        titre: "Découverte de Symfony et des API",
        description:
          " • J'ai découvert Symfony et le fonctionnement des API. J'ai travaillé avec des API publiques, telles que  <a href='https://api.chucknorris.io/' target='_blank'>l'API Chuck Norris</a>.",
      },
      {
        jour: "Jeudi",
        titre: "Exercice avec l'API Valorant",
        description:
          " • J'ai continué à me familiariser avec Symfony en m'exerçant avec <a href='https://valorant-api.com/v1/agents/' target='_blank'>l'API Valorant</a>.",
      },
      {
        jour: "Vendredi",
        titre: "Introduction à l'API Shopify",
        description:
          " • Nous entrons maintenant dans le vif du sujet. J'ai découvert <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a> dans le but précis de migrer l'API de REST à GraphQL. Nous avons commencé par la connexion à l'API.",
      },
    ],
  },
  {
    semaine: "Semaine 2",
    dates: "Du 3 juin au 7 juin",
    jours: [
      {
        jour: "Lundi",
        titre: "Problèmes de connexion",
        description:
          " • Nous avons rencontré certains problèmes avec la connexion à <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a>. Après une journée entière, nous n'y sommes pas parvenus.",
      },
      {
        jour: "Mardi",
        titre: "Connexion réussie",
        description:
          " • Après avoir résolu tous les problèmes (mauvaise version de PHP utilisée, mauvaise version de <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a>, etc.), nous avons réussi la connexion !",
      },
      {
        jour: "Mercredi",
        titre: "Récupération des données",
        description:
          " • Mon objectif principal est désormais de récupérer les informations stockées sur le Shopify de l'entreprise Broussaud et de me familiariser avec l'API.",
      },
      {
        jour: "Jeudi",
        titre: "Apprentissage continu",
        description:
          " • Toujours sur <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a>, j'apprends beaucoup.",
      },
      {
        jour: "Vendredi",
        titre: "Objectif atteint",
        description:
          " • Toujours sur <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a>, l’objectif est bientôt atteint.",
      },
    ],
  },
  {
    semaine: "Semaine 3",
    dates: "Du 10 juin au 14 juin",
    jours: [
      {
        jour: "Lundi",
        titre: "Finalisation avec Shopify",
        description:
          " • Aujourd’hui est la dernière journée de travail sur <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>l'API Shopify</a>. J’ai réussi à récupérer toutes les informations nécessaires : les commandes, les produits, les différentes variantes de produits, les informations de livraison, les informations sur le client, etc.",
      },
      {
        jour: "Mardi",
        titre: "Développement de l'OF",
        description:
          " • Je me suis détaché du back-end (ce qui me rend heureux) et j'ai ajouté une fonctionnalité d'OF (Ordre de Fabrication) et réalisé le CSS de cet OF sur le site interne de Broussaud.",
      },
      {
        jour: "Mercredi",
        titre: "Découverte de l'API Ankorstore",
        description:
          " • Je me suis penché sur une nouvelle API, <a href='https://ankorstore.github.io/api-docs/' target='_blank'>Ankorstore</a>. J'ai commencé par me connecter à l'API, ce qui a été beaucoup plus facile que celle de <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>Shopify</a>.",
      },
      {
        jour: "Jeudi",
        titre: "Récupération des données Ankorstore",
        description:
          " • Mon objectif est de récupérer les mêmes informations que pour <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>Shopify</a>.",
      },
      {
        jour: "Vendredi",
        titre: "Travail sur Ankorstore",
        description:
          " • Je continue à travailler sur <a href='https://ankorstore.github.io/api-docs/' target='_blank'>l'API Ankorstore</a>.",
      },
    ],
  },
  {
    semaine: "Semaine 4",
    dates: "Du 17 juin au 21 juin",
    jours: [
      {
        jour: "Lundi",
        titre: "Utilisation de Postman",
        description:
          " • Je découvre Postman avec les API <a href='https://shopify.dev/docs/api/admin-graphql' target='_blank'>Shopify</a> et <a href='https://ankorstore.github.io/api-docs/' target='_blank'>Ankorstore</a>.",
      },
      {
        jour: "Mardi",
        titre: "Récupération des informations Ankorstore",
        description:
          " • J'ai récupéré toutes les informations de <a href='https://ankorstore.github.io/api-docs/' target='_blank'>l'API Ankorstore</a> dont mon maître de stage avait besoin.",
      },
      {
        jour: "Mercredi",
        titre: "Optimisation du portfolio",
        description:
          " • Mon maître de stage m'a donné l'autorisation d'avancer sur mes projets personnels. J'ai donc décidé d'optimiser mon portfolio en le migrant d'un site PHP simple à l'utilisation du framework <a href='https://vuejs.org/guide/introduction.html'>Vue.js</a>. Je découvre <a href='https://vuejs.org/guide/introduction.html'>Vue.js</a> et me familiarise avec.",
      },
      {
        jour: "Jeudi",
        titre: "Améliorations CSS",
        description:
          " • Je continue d'optimiser mon portfolio avec les connaissances que j'ai acquises récemment en CSS. Mon portfolio n'avait pas été mis à jour depuis 4/5 mois, et j'ai appris de nouvelles techniques en CSS depuis, comme Grid et d'autres.",
      },
      {
        jour: "Vendredi",
        titre: "Découverte de l'API Faire",
        description:
          " • Je laisse le portfolio de côté pour me concentrer sur une nouvelle API, 'Faire'. Je me familiarise avec l'API et commence par la connexion à celle-ci.",
      },
    ],
  },
  {
    semaine: "Semaine 5",
    dates: "Du 24 juin au 27 juin",
    jours: [
      {
        jour: "Lundi",
        titre: "Problèmes de connexion à Faire",
        description: " • Je n'arrive pas à me connecter à l'API.",
      },
      {
        jour: "Mardi",
        titre: "Retour au portfolio",
        description:
          " • Mon maître de stage envisage que je retourne sur mon portfolio. J'en profite pour en apprendre davantage sur <a href='https://vuejs.org/guide/introduction.html'>Vue.js</a>.",
      },
      {
        jour: "Mercredi",
        titre: "Découverte de Nuxt.js",
        description:
          " • Je découvre <a href='https://nuxt.com/docs/getting-started/introduction'>Nuxt.js</a>. J'apprends que c'est comme <a href='https://vuejs.org/guide/introduction.html'>Vue.js</a> mais avec une partie serveur, ce qui permet de rendre les sites dynamiques plus facilement et en toute sécurité. Il faudra que je me penche là-dessus, car cela m'intéresse beaucoup.",
      },
      {
        jour: "Jeudi",
        titre: "Dernier jour",
        description:
          " • Aujourd'hui est mon dernier jour dans l'entreprise. Mon maître de stage m'a appris plein de choses. Je continue à travailler sur mon portfolio.",
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
        <h1>BROUSSAUD</h1>
        <h5>Depuis 1936</h5>
      </div>
      <div class="line"></div>
      <h6>Informations sur le stage :</h6>
      <p>
        J'ai effectué un stage chez BROUSSAUD Textiles, une entreprise située à
        Les Cars en Haute-Vienne. Cette entreprise est spécialisée dans la
        fabrication de chaussettes, ce qui pourrait sembler éloigné de
        l'informatique. Cependant, il est important de noter que la gestion des
        données (stock, commandes, données clients, etc.) joue un rôle crucial.
        De plus, la mise en place d'outils informatiques est essentielle pour
        aider les employés à travailler plus rapidement et efficacement. Mon
        maître de stage, M. Alexandre Cane, supervisait ces aspects.
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
      <a href="https://github.com/ADsglt77/broussaud" target="_blank">
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

.modal .content>a:first-of-type {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 0.3rem 0.6rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.modal .content>a:first-of-type:hover {
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
