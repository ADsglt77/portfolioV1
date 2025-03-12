<script lang="ts" setup>
import { ref } from "vue";
import TrainingCourse from "~/components/training/icons/course.vue";
import TrainingSchool from "~/components/training/icons/school.vue";
import TrainingModalCourseCondat from "~/components/training/modal/courseCondat.vue";
import TrainingModalCourseBroussaud from "~/components/training/modal/courseBroussaud.vue";

interface BoxData {
  icon: typeof TrainingSchool | typeof TrainingCourse;
  title: string;
  descriptions: string[];
  hasModal?: boolean;
  modalType?: "condat" | "broussaud";
}

const modalCondatVisible = ref<boolean>(false);
const modalBroussaudVisible = ref<boolean>(false);

function showModal(modalType: "condat" | "broussaud"): void {
  if (modalType === "condat") {
    modalCondatVisible.value = true;
  } else if (modalType === "broussaud") {
    modalBroussaudVisible.value = true;
  }
}

function hideModals(): void {
  modalCondatVisible.value = false;
  modalBroussaudVisible.value = false;
}

const boxData = ref<BoxData[]>([
  {
    icon: TrainingCourse,
    title: "Stage (13 Janvier au 28 Février 2025)",
    descriptions: [
      "Entreprise : <a href='https://condatbasketclub.com/' target='_blank' style='color: #47d67e;'>Condat Basket Club</a><br>",
    ],
    hasModal: true,
    modalType: "condat",
  },
  {
    icon: TrainingSchool,
    title: "Lycée Suzanne Valadon (2024 - 2025)",
    descriptions: ["BTS SIO 2ème année • Option : SLAM"],
  },
  {
    icon: TrainingCourse,
    title: "Stage (27 Mai au 27 Juin 2024)",
    descriptions: [
      "Entreprise : <a href='https://www.broussaud.com/' target='_blank' style='color: #47d67e;'>Broussaud textiles</a><br>",
    ],
    hasModal: true,
    modalType: "broussaud",
  },
  {
    icon: TrainingSchool,
    title: "Lycée Suzanne Valadon (2023 - 2024)",
    descriptions: ["BTS SIO 1ère année • Option : SLAM"],
  },
  {
    icon: TrainingSchool,
    title: "Lycée Turgot (2022 - 2023)",
    descriptions: ["Terminale • Spécialités : NSI, Mathématiques"],
  },
  {
    icon: TrainingCourse,
    title: "Stage (1 au 7 Juin 2021)",
    descriptions: [
      "Entreprise : <a href='https://www.flexocolor-fr.com/' target='_blank' style='color: #47d67e;'>Flexocolor</a>",
    ],
  },
  {
    icon: TrainingSchool,
    title: "Lycée Turgot (2021 - 2022)",
    descriptions: [
      "Première • Spécialités : NSI, Mathématiques, Physique-Chimie",
    ],
  },
  {
    icon: TrainingSchool,
    title: "Lycée Turgot (2020 - 2021)",
    descriptions: ["Seconde • Option : SI-CIT"],
  },
]);
</script>

<template>
  <div class="training" v-if="!modalCondatVisible && !modalBroussaudVisible">
    <h3>Mon <span>Parcours</span></h3>
    <div class="line"></div>
    <div v-for="(box, index) in boxData" :key="index" class="items">
      <component :is="box.icon" class="icon" />
      <h6>{{ box.title }}</h6>
      <p
        v-for="(description, dIndex) in box.descriptions"
        :key="dIndex"
        v-html="description"
      ></p>
      <button
        v-if="box.hasModal && box.modalType"
        @click="showModal(box.modalType)"
      >
        <p>Voir les détails</p>
      </button>
    </div>
  </div>
  <TrainingModalCourseCondat v-if="modalCondatVisible" @close="hideModals" />
  <TrainingModalCourseBroussaud
    v-if="modalBroussaudVisible"
    @close="hideModals"
  />
</template>

<style scoped>
.training {
  width: 80%;
  max-height: fit-content;
  max-width: 1200px;
  max-height: 75vh;
  overflow: hidden auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.training h3 span {
  color: #47d67e;
}

.training .line {
  width: 95%;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  grid-column: 1 / -1;
}

.training .items button {
  padding: 0.4rem 0.8rem;
  background: #47d67e;
  border: none;
  border-radius: 0.5rem;
  margin-top: 0.4rem;
  cursor: pointer;
  transition: 0.3s;
}

.training .items button:hover {
  background: #27ac5a;
}

@media (max-width: 1000px) {
  .training {
    grid-template-columns: 1fr;
  }
}
</style>
