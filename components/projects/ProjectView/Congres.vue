<script lang="ts" setup>
import ProjeBibliotheque from "/projects/pdf/ProjetBibliotheque.pdf";
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
      <div class="line"></div>
      <div class="description">
        <aside>
          <h6>Repositorie :</h6>
          <a href="https://github.com/ADsglt77/bibliotheque" target="_blank">
            <IconsGithub />
          </a>
          <h6>Documentation :</h6>
          <a href="" :download="ProjeBibliotheque">
            <IconsPdf />
          </a>
          <h6>Technologies :</h6>
          <div class="techno">
            <ProjectsIconsIconPhp />
            <ProjectsIconsIconMySql />
            <ProjectsIconsIconCss />
          </div>
        </aside>
        <div>
          <h5>Projet Congres</h5>
          <p>
            description
          </p>
          <h5>Ma mission :</h5>
          <ul>
            <li>
              • <strong>Liste</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellendus
              eligendi tenetur facilis iste numquam facere reiciendis, blanditiis consequuntur accusantium, velit fuga
              suscipit doloribus amet debitis? Maxime velit tempore at!
            </li>
          </ul>
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

.modal .description .techno {
  max-width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
