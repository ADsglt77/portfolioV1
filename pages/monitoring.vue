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
      "Sur Twitter, je suis des développeurs influents, des comptes officiels de frameworks et les hashtags tech pour capter les tendances émergentes et les nouvelles fonctionnalités en temps réel.",
    title: "TWITTER",
    icon: IconComputer,
  },
  {
    description:
      "Via Instagram, je suis des comptes spécialisés en design d'interface et UX/UI pour m'inspirer des dernières tendances visuelles et améliorer l'expérience utilisateur de mes projets.",
    title: "INSTAGRAM",
    icon: IconComputer,
  },
  {
    description:
      "Sur YouTube, je m'abonne à des chaînes éducatives tech qui présentent des tutoriels, des analyses de code et des conférences. Cette approche visuelle complète ma formation continue.",
    title: "YOUTUBE",
    icon: IconComputer,
  },
  {
    description:
      "Grâce aux notifications du Monde sur mon iPhone, je reste informé des actualités tech, des évolutions réglementaires et des innovations qui impactent directement mon secteur.",
    title: "LE MONDE",
    icon: IconGoogle,
  },
  {
    description:
      "Sur LinkedIn, je suis des experts et des entreprises du secteur technologique pour suivre les discussions et les tendances. Cela m'aide à m'impliquer dans la communauté et à développer mon réseau professionnel.",
    title: "LINKEDIN",
    icon: IconLinkedin,
  },
  {
    description:
      "Je participe activement à des forums et des communautés spécialisées comme Stack Overflow et GitHub où je peux suivre les problématiques actuelles et contribuer à l'écosystème open source.",
    title: "COMMUNAUTÉS",
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

@media (max-width: 1400px) {
  .carousel {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

  }
  .nav {
    display: none;
  }
}
</style>
