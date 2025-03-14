<script lang="ts" setup>
import { ref } from "vue";

let isEnable = ref(false);
let menuCheckbox = ref<HTMLInputElement | null>(null);

function clickMenu() {
  isEnable.value = !isEnable.value;
}

function closeMenu() {
  isEnable.value = false;
  if (menuCheckbox.value) {
    menuCheckbox.value.checked = false;
  }
}
</script>

<template>
  <nav>
    <h4>ADRIEN</h4>
    <div class="links" :class="{ 'mobile-menu': isEnable }">
      <ul>
        <li><router-link to="/" exact-active-class="active" @click="closeMenu">Accueil</router-link></li>
        <li><router-link to="/about" exact-active-class="active" @click="closeMenu">Profil</router-link></li>
        <li><router-link to="/training" exact-active-class="active" @click="closeMenu">Formation</router-link></li>
        <li><router-link to="/projects" exact-active-class="active" @click="closeMenu">Projets</router-link></li>
        <li><router-link to="/monitoring" exact-active-class="active" @click="closeMenu">Veille</router-link></li>
        <li><router-link to="/contact" exact-active-class="active" @click="closeMenu">Contact</router-link></li>
      </ul>
    </div>
    <div class="menu-hamburger">
      <label class="hamburger">
        <input type="checkbox" ref="menuCheckbox" @click="clickMenu">
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
          </path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>

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

nav ul li a.active {
  color: #47d67e;
}

nav ul li a {
  position: relative;
}

nav ul li a::after {
  content: '';
  width: 0;
  height: 2px;
  background: #47d67e;
  position: absolute;
  left: 0;
  bottom: -2px;
  transition: 0.5s;
}

nav ul li a:hover::after {
  width: 100%;
}

@media screen and (max-width: 1450px) {
  nav {
    width: 60%;
  }
}

@media screen and (max-width: 1250px) {
  nav {
    width: 70%;
  }
}

@media screen and (max-width: 1000px) {
  nav {
    width: 80%;
  }
}

nav .menu-hamburger {
  top: 50px;
  right: 50px;
  display: none;
}

nav .menu-hamburger .hamburger input {
  display: none;
}

nav .menu-hamburger .hamburger svg {
  height: 2.5em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

nav .menu-hamburger .line {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

nav .menu-hamburger .line-top-bottom {
  stroke-dasharray: 12 63;
}

nav .menu-hamburger .hamburger input:checked+svg {
  transform: rotate(-45deg);
}

nav .menu-hamburger .hamburger input:checked+svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}

@media screen and (max-width: 850px) {
  nav .menu-hamburger {
    display: flex;
    z-index: 20;
  }

  .links {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(7px);
    margin-left: -100%;
    z-index: 10;
    transition: all 0.5s ease;
  }

  .links.mobile-menu {
    margin-left: 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>