<script setup lang="ts">

const {activeCard, cardNumber} = defineProps({
  activeCard: Number,
  cardNumber: Number
});
</script>

<template>
  <div class="progress">
    <h5>01</h5>
    <div class="progress-container">
      <div class="progress-bar" id="progressBar" ref="progressBar"
           :style="{ width: ((activeCard || 0)*100/(cardNumber||1)) + '%' }">
      </div>
    </div>
    <h5>{{ (cardNumber||0).toString().padStart(2, '0') }}</h5>
  </div>
</template>

<style scoped>
.progress-container {
  width: 100%;
  background-color: #ddd;
  border-radius: 10px;
  height: 3px;
}

.progress-bar {
  height: 100%;
  background-color: #47d67e;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
}

.progress {
  width: 50%;
  display: flex;
  align-items: center;
}

.progress h5 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 10px;
}
</style>