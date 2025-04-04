<script lang="ts" setup>
const id = useRoute().params.name as string;
import p from "@/assets/projects.json"
const projects = p as Array<Project>

const projectData = projects.find((project) => project.id === id);
const router = useRouter()
if (!projectData) router.push("/projects")
</script>

<template>
	<div class="modal">
		<div class="content">
			<RouterLink to="/projects" class="back">
				<IconsArrowBack />
			</RouterLink>
			<div class="title">
				<h3>{{ projectData?.title }}</h3>
				<h5>{{ projectData?.techno }}</h5>
			</div>
			<div class="line"></div>
			<div class="description">
				<aside>
					<h6>Important :</h6>
					<div>
						<a v-for="imp of projectData?.imp" :href="imp.link" target="_blank">
							<img :src="`/img/icons/${imp.icon}.svg`" alt="" />
						</a>
						<a v-if="projectData?.doc ?? true" target="_blank" download :href="`/pdf/projects/${projectData?.id}.pdf`">
							<img src="/img/icons/pdf.svg" alt="" />
						</a>
					</div>
					<h6>Technologies :</h6>
					<div>
						<img v-for="tech of projectData?.techI" :src="`/img/techs/${tech}.svg`" alt="" />
					</div>
				</aside>
				<div>
					<h5>{{ projectData?.title }}</h5>
					<p v-html="projectData?.description.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href=\'$2\' target=\'_blank\'>$1</a>').replace(/\\n/g, '<br>')"></p>
					<h5>Le Projet :</h5>
					<video v-if="projectData?.video" :src="projectData.video"></video>
				</div>
			</div>
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
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    grid-column: 1 / -1;
    margin: 20px 0;
}

.modal .content {
    width: 70%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.modal .title h3,
.modal .title h5 {
    text-align: center;
}

.modal h5 {
    font-weight: 300;
    color: #47d67e;
}

.modal .description {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
}

.modal .description aside h6 {
    margin: 15px 0;
}

.modal .description aside div {
    max-width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
</style>
