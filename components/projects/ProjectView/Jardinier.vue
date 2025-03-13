<script lang="ts" setup>
import ProjetJardinier from "/projects/pdf/ProjetJardinier.pdf";
const emit = defineEmits(["close"]);

</script>

<template>
  <div class="modal">
    <div class="content">
      <IconsArrowBack @click="emit('close')" />
      <div class="title">
        <h1>PROJET JARDINIER</h1>
        <h5>Dart + Android Studio</h5>
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
        <h1>Projet Bibliotheque</h1>
        <p>
          Ce projet consiste à créer une application mobile pour une
          bibliothèque pouvant gérer des livres, des auteurs et des utilisateurs
          et les lier. Il a été développé en utilisant Android Studio avec
          Flutter et Dart pour répondre à la demande de la bibliothèque.
        </p>
        <h2>Ma mission :</h2>
        <ul>
          <li>
            • <strong>CRUD :</strong>Création/Modification/Suppression Livre, Auteur et Utilisateur
          </li>
          <li>
            • <strong>Accès Utilisateur :</strong>Avoir un accès restraint pour les utilisateurs et un accès plein pour les admins
          </li>
          <li>
            • <strong>Gérer les images :</strong>Mettre une jacket sur un livre
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
