<script lang="ts" setup>
const ProjetJardinier = "/projects/pdf/ProjetJardinier.pdf";
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="modal">
    <div class="content">
      <IconsArrowBack @click="emit('close')" />
      <div class="title">
        <h3>PROJET JARDINIER</h3>
        <h5>PHP + Symfony</h5>
      </div>
      <div class="line"></div>
      <div class="description">
        <aside>
          <h6>Important :</h6>
          <div>
            <a href="https://github.com/ADsglt77/jardinier" target="_blank">
              <IconsGithub />
            </a>
            <a :href="ProjetJardinier" :download="ProjetJardinier">
              <IconsPdf />
            </a>
          </div>
          <h6>Technologies :</h6>
          <div class="techno">
            <ProjectsIconsIconSymfony />
            <ProjectsIconsIconPhp />
            <ProjectsIconsIconCss />
          </div>
        </aside>
        <div>
          <h5>Présentation du Projet :</h5>
          <p>
            Cet atelier professionnel a pour but de réaliser une application
            web, à l’aide du Framework PHP Symfony. Cette application reprend le
            contexte d’un site de jardinerie, qui doit permettre de pourvoir
            créer des devis avec un ou plusieurs taillages de haies dans le même
            devis.
          </p>
          <h5>Le Projet :</h5>
          <video src=""></video>
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
