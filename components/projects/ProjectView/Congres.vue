<script lang="ts" setup>
import ProjetJardinier from "/projects/pdf/ProjetJardinier.pdf";
const emit = defineEmits(["close"]);

</script>

<template>
  <div class="modal">
    <div class="content">
      <IconsArrowBack @click="emit('close')" />
      <div class="title">
        <h3>PROJET CONGRES</h3>
        <h5>PHP-OBJET / MySQL + MVC</h5>
      </div>
      <div></div>
    </div>
    <hr />
    <div class="description">
      <div class="info">
        <h2>Repositorie :</h2>
        <a href="https://github.com/ADsglt77/bibliotheque" target="_blank">
          <IconsGithub />
        </a>
        <h2>Documentation :</h2>
        <a :href="ProjetJardinier" download>
          <ProjectsIconsPdf />
        </a>
      </div>
      <div class="texte">
        <h5>Projet Congres</h5>
        <p>
          description
        </p>
        <h2>Ma mission :</h2>
        <ul>
          <li>
            • <strong>Liste</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellendus eligendi
            tenetur facilis iste numquam facere reiciendis, blanditiis consequuntur accusantium, velit fuga suscipit
            doloribus amet debitis? Maxime velit tempore at!
          </li>
        </ul>
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
  width: 95%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  grid-column: 1 / -1;
  margin: 20px 0;
}

.modal .content {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
