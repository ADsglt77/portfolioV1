<script lang="ts" setup>
import ProjetJardinier from "/projects/pdf/ProjetJardinier.pdf";
import ProjetResto from "/projects/pdf/ProjetResto.pdf";

import ImageCondat from "/projects/img/Condat.png";
import ImageResto from "/projects/img/Resto.png";
import ImageCongres from "/projects/img/Congres.png";
import ImageJardinier from "/projects/img/Jardinier.png";
import ImageSeminaire from "/projects/img/Seminaire.png";
import ImageBibliotheque from "/projects/img/Bibliotheque.png";
import { ProjectsProjectViewBibliotheque } from "#components";

const projects = [
{
    image: ImageCondat,
    title: "Projet BASKET",
    description: "NuxtJs + TypeScript + Prisma",
    documentation: ProjetJardinier,
    modalType: "ProjetCondat",
  },
  {
    image: ImageBibliotheque,
    title: "Projet FLUTTER",
    description: "Dart + Android Studio",
    documentation: ProjetJardinier,
    modalType: "ProjetBibliotheque",
  },
  {
    image: ImageJardinier,
    title: "Projet JARDINIER",
    description: "PHP / SYMFONY + Framework",
    documentation: ProjetJardinier,
    modalType: "ProjetJardinier",
  },
  {
    image: ImageResto,
    title: "Projet R3st0",
    description: "PHP / MySQL + archi MVC",
    documentation: ProjetResto,
    modalType: "ProjetResto",
  },
  {
    image: ImageCongres,
    title: "Projet CONGRES ANALIM",
    description: "PHP-OBJET / MySQL + archi MVC",
    documentation: ProjetJardinier,
    modalType: "ProjetCongres",
  },
  {
    image: ImageSeminaire,
    title: "Projet SEMINAIRE",
    description: "PHP / API REST + archi MVC",
    documentation: ProjetJardinier,
    modalType: "ProjetSeminaire",
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

const modalCondatVisible = ref<boolean>(false);
const modalJardinierVisible = ref<boolean>(false);
const modalRestoVisible = ref<boolean>(false);
const modalBibliothequeVisible = ref<boolean>(false);
const modalCongresVisible = ref<boolean>(false);
const modalSeminaireVisible = ref<boolean>(false);

function showModal(
  modalType:
    | "ProjetCondat"
    | "ProjetJardinier"
    | "ProjetResto"
    | "ProjetBibliotheque"
    | "ProjetCongres"
    | "ProjetSeminaire"
): void {
  if (modalType === "ProjetCondat") {
    modalCondatVisible.value = true;
  } else if (modalType === "ProjetJardinier") {
    modalJardinierVisible.value = true;
  } else if (modalType === "ProjetResto") {
    modalRestoVisible.value = true;
  } else if (modalType === "ProjetBibliotheque") {
    modalBibliothequeVisible.value = true;
  } else if (modalType === "ProjetCongres") {
    modalCongresVisible.value = true;
  } else if (modalType === "ProjetSeminaire") {
    modalSeminaireVisible.value = true;
  }
}

function hideModals(): void {
  modalCondatVisible.value = false;
  modalJardinierVisible.value = false;
  modalRestoVisible.value = false;
  modalBibliothequeVisible.value = false;
  modalCongresVisible.value = false;
  modalSeminaireVisible.value = false;
}
</script>

<template>
  <div class="projects"
    v-if="!modalCondatVisible && !modalJardinierVisible && !modalRestoVisible && !modalBibliothequeVisible && !modalCongresVisible && !modalSeminaireVisible">
    <h3>Mes <span>Projets</span></h3>
    <div class="line"></div>

    <div class="carousel" ref="carouselRef">
      <ProjectsCard v-for="(project, index) in projects" :key="index" :image="project.image" :title="project.title"
        :description="project.description" :documentation="project.documentation"
        @click="showModal(project.modalType as 'ProjetCondat' | 'ProjetJardinier' | 'ProjetResto' | 'ProjetBibliotheque' | 'ProjetCongres' | 'ProjetSeminaire')"
        class="carousel-item" />
    </div>

    <div class="nav">
      <ProgressBarLeft @click="prevCard" />
      <ProgressBar :activeCard="activeCardIndex + 1" :cardNumber="projects.length - 2" />
      <ProgressBarRight @click="nextCard" />
    </div>
  </div>

  <ProjectsProjectViewCondat v-if="modalCondatVisible" @close="hideModals" />
  <ProjectsProjectViewJardinier v-if="modalJardinierVisible" @close="hideModals" />
  <ProjectsProjectViewResto v-if="modalRestoVisible" @close="hideModals" />
  <ProjectsProjectViewBibliotheque v-if="modalBibliothequeVisible" @close="hideModals" />
  <ProjectsProjectViewCongres v-if="modalCongresVisible" @close="hideModals" />
  <ProjectsProjectViewSeminaire v-if="modalSeminaireVisible" @close="hideModals" />
</template>

<style scoped>
.projects {
  width: 100%;
  max-width: 1200px;
  max-height: 75vh;
}

.projects h3 span {
  color: #47d67e;
}

.projects .line {
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
  .projects {
    width: 80%;
  }

  .carousel {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

  }

  .nav {
    display: none;
  }
}
</style>
