<script lang="ts" setup>
import p from "@/assets/projects.json"
const projects = p as Array<Project>

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
	<div class="projects">
		<h3>Mes <span>Projets</span></h3>
		<div class="line"></div>

		<div class="carousel" ref="carouselRef">
			<ProjectsCard v-for="project in projects" :project="project" class="carousel-item" />
		</div>

		<div class="nav">
			<ProgressBarLeft @click="prevCard" />
			<ProgressBar :activeCard="activeCardIndex + 1" :cardNumber="projects.length - 2" />
			<ProgressBarRight @click="nextCard" />
		</div>
	</div>
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
