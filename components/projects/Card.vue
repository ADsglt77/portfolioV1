<script lang="ts" setup>
defineProps({
  image: String,
  title: String,
  description: String,
  documentation: String,
  modalType: String,
});
</script>

<template>
  <div class="card">
      <img :src="image" :alt="title" class="card-image" />
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="doc">
        <a :href="documentation" download>
          < />
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
  text-align: left;
}

.content h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #47d67e;
}

.content p {
  margin: 5px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.doc a {
  display: none;
  /*display: flex;*/
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
</style>
