<script lang="ts" setup>
import ProjeBibliotheque from "/projects/pdf/ProjetBibliotheque.pdf";
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="modal">
    <div class="content">
      <IconsArrowBack @click="emit('close')" />
      <div class="title">
        <h3>PROJET RESTO</h3>
        <h5>PHP / MySQL + MVC</h5>
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
          <h5>Projet R3st0</h5>
          <p>
            Ce projet consiste à créer un site web pour un restaurant où l'on peut
            se connecter, liker des restaurants, mettre des commentaires et
            rechercher les restaurants selon certains critères.
          </p>
          <h2>Ma mission :</h2>
          <ul>
            <li>
              • <strong>Connexion/Inscription :</strong>
              Fonction pour s'inscrire et se connecter
            </li>

            <li>
              • <strong>Like/Commentaire :</strong>
              Fonction pour liker et commenter un restaurant
            </li>

            <li>
              • <strong>Rechercher :</strong>
              Fonction pour rechercher un restaurant selon certains critères
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
