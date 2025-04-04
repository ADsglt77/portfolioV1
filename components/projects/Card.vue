<script lang="ts" setup>
import { defineProps } from 'vue';

const { project } = defineProps<{ project: Project }>()
const router = useRouter()
</script>

<template>
	<div class="card" @click="() => router.push(`/projects/${project.id}`)">
		<img :src="`/img/projects/${project.id}.png`" :alt="project.title" class="card-image" />
		<div class="content">
			<h6>{{ project.title }}</h6>
			<p>{{ project.techno }}</p>
		</div>
		<div class="doc" v-if="project.doc ?? true">
			<a :href="`/pdf/projects/${project.id}.pdf`" download>
				<ProjectsIconsDowload />
			</a>
		</div>
	</div>
</template>

<style scoped>
.card {
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
}

.card img {
  filter: brightness(0.8);
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
}

.content {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: #2c2f33;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content h6 {
  color: #47d67e;
}

.content p {
  color: rgba(255, 255, 255, 0.8);
}

.doc a {
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #2c2f33;
  padding: 6px 6px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.doc a:hover {
  transform: scale(1.15);
}

@media (max-width: 1400px) {
  .card {
    width: 100%;
    height: auto;
  }
}
</style>
