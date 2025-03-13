<script lang="ts" setup>
import IconChatGPT from "~/components/monitoring/icons/chatGPT.vue";
import IconGoogle from "~/components/monitoring/icons/google.vue";
import IconLinkedin from "~/components/monitoring/icons/linkdin.vue";
import IconComputer from "~/components/monitoring/icons/computer.vue";
import { ref } from "vue";

// Liste des projets
const projects = [
  {
    description:
      "Je suis abonné aux mises à jour d’OpenAI pour suivre l’évolution des modèles IA et les nouvelles API. Cela me permet de rester à jour sur les dernières innovations en IA.",
    title: "OPEN AI",
    icon: IconChatGPT,
  },
  {
    description:
      "J’utilise Google Alerts pour suivre les sujets spécifiques comme les frameworks et les tendances du développement. Cela m’informe instantanément sur les nouvelles pertinentes.",
    title: "GOOGLE ALERTS",
    icon: IconGoogle,
  },
  {
    description:
      "Sur LinkedIn, je suis des experts et des entreprises du secteur technologique pour suivre les discussions et les tendances. Cela m’aide à m’impliquer dans la communauté.",
    title: "LINKEDIN",
    icon: IconLinkedin,
  },
  {
    description:
      "Je consulte les publications de l’ANSSI pour suivre les bonnes pratiques de cybersécurité et les alertes sur les vulnérabilités. Cela me permet de garantir la sécurité de mes projets.",
    title: "ANSSI",
    icon: IconComputer,
  },
  {
    description:
      "Je suis les actualités de la CNIL pour assurer la conformité avec le RGPD et respecter la protection des données. Cela m’aide à développer des applications respectueuses de la vie privée.",
    title: "CNIL",
    icon: IconComputer,
  },
  {
    description:
      "J’utilise des flux RSS pour centraliser les informations des blogs et sites technologiques. Cela me permet de suivre efficacement l’actualité sans perdre de temps.",
    title: "FLUX RSS",
    icon: IconComputer,
  },
];

const carouselRef = ref<HTMLElement | null>(null);
const activeCardIndex = ref(0);

function nextCard() {
  if (!carouselRef.value) return;
  const container = carouselRef.value;
  if (activeCardIndex.value >= projects.length - 3) {
    container.scrollTo({ left: 0, behavior: "smooth" });
    return (activeCardIndex.value = 0);
  }
  container.scrollBy({ left: container.offsetWidth / 3, behavior: "smooth" });
  activeCardIndex.value++;
}

function prevCard() {
  if (!carouselRef.value) return;
  const container = carouselRef.value;
  if (activeCardIndex.value <= 0) {
    container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    return (activeCardIndex.value = projects.length - 3);
  }
  container.scrollBy({ left: -container.offsetWidth / 3, behavior: "smooth" });
  activeCardIndex.value--;
}
</script>

<template>
  <div class="monitoring">
    <h3>Ma Veille <span>Techonologique</span></h3>
    <div class="line"></div>

    <div class="carousel" ref="carouselRef">
      <MonitoringCard
        v-for="(project, index) in projects"
        :key="index"
        :description="project.description"
        :title="project.title"
        :icon="project.icon"
        class="carousel-item"
      />
    </div>

    <div class="nav">
      <ProgressBarLeft @click="prevCard" />
      <ProgressBar
        :activeCard="activeCardIndex + 1"
        :cardNumber="projects.length - 2"
      />
      <ProgressBarRight @click="nextCard" />
    </div>
  </div>
</template>

<style scoped>
.monitoring {
  width: 80%;
  max-width: 1200px;
  max-height: 75vh;
}

.monitoring h3 span {
  color: #47d67e;
}

.monitoring .line {
  width: 100%;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  grid-column: 1 / -1;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 20px;
  padding: 20px 0;
  margin: 0 auto;
}

.carousel-item {
  flex: 0 0 calc(100% / 3 - 20px);
}

.nav {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.arrow svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 1200px) {
  .carousel-item {
    flex: 0 0 calc(100% / 2 - 20px);
  }
}
</style>
