<script lang="ts" setup>

</script>

<template>
  <nav>
    <h1>AD</h1>
    <ul>
      <li><router-link to="/" exact-active-class="active">Accueil</router-link></li>
      <li><router-link to="/about" exact-active-class="active">Profil</router-link></li>
      <li><router-link to="/training" exact-active-class="active">Formation</router-link></li>
      <li><router-link to="/projects" exact-active-class="active">Projets</router-link></li>
      <li><router-link to="/monitoring" exact-active-class="active">Veille</router-link></li>
      <li><router-link to="/contact" exact-active-class="active">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 50%;
  height: 10vh;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  font-size: var(--txt-3xl);
}

nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li {
  padding: 0 10px;
}

nav ul li a {
  text-transform: uppercase;
}
</style>