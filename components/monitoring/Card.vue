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
  icon: Object, // Ajout de la prop pour l'icône
});
</script>

<style scoped>
.card {
  position: relative;
  width: 200px;
  height: 180px;
  border-radius: 15px;
  overflow: hidden;
}

.card-title {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: #2c2f33;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.card-title h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #47d67e;
}

.icon-title {
  display: flex;
  align-items: center;
}

.icon-title .icon {
  font-size: 1.5rem;
  margin-right: 10px;
  color: #47d67e;
}

.card h4 {
  font-weight: 300;
}
</style>
