<template>
  <div class="card">
    <p>{{ description }}</p>
    <div class="card-title">
      <div class="icon-title">
        <component :is="icon" class="icon" />
        <h6>{{ title }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
  icon: Object,
});
</script>

<style scoped>
.card {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.card-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 0.4rem 0.8rem;
  background: #2c2f33da;
  border-radius: 0.5rem;
  transition: 0.3s;
}

.icon-title {
  display: flex;
  gap: 10px;
  align-items: center;
}

.icon-title .icon {
  font-size: 1.5rem;
  color: #47d67e;
}

.card p {
  font-weight: 300;
}

.card h6 {
  font-weight: 200;
}
</style>
