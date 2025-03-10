<script lang="ts" setup>

</script>

<template>
  <video src="/background.mp4" id="background" muted loop playsinline></video>
  <NavBar />
  <section>
    <NuxtPage />
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  user-select: none;
  scroll-behavior: smooth;
  outline: none;
  font-family: 'Poppins', sans-serif;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(var(--background));
  color: rgba(var(--white));
}

#background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: brightness(0.5);
  z-index: -10;
}

section {
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

:root {
  --background: 11, 9, 10;
  --black: 11, 9, 10;
  --lightBlack: 22, 26, 29;
  --deepGray: 212, 212, 212;
  --lightGray: 235, 235, 235;
  --deepWhite: 245, 243, 244;
  --white: 255, 255, 255;
  --success: 0, 128, 0;
  --warning: 255, 165, 0;
  --error: 255, 0, 0;
  --txt-xs: 0.75rem;
  --txt-sm: 0.875rem;
  --txt-base: 1rem;
  --txt-lg: 1.2rem;
  --txt-xl: 1.325rem;
  --txt-2xl: 1.875rem;
  --txt-3xl: 2.5rem;
  --txt-4xl: 3rem;
  --txt-5xl: 4rem;
  --txt-6xl: 5rem;
}

h1 {
  font-size: var(--txt-6xl);
}

h2 {
  font-size: var(--txt-5xl);
}

h3 {
  font-size: var(--txt-4xl);
}

h4 {
  font-size: var(--txt-3xl);
}

h5 {
  font-size: var(--txt-2xl);
}

h6 {
  font-size: var(--txt-xl);
}

p {
  font-size: var(--txt-base);
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--background);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 3px solid var(--background);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

@media screen and (max-width: 1200px) {
  :root {
    --txt-sm: 0.75rem;
    --txt-base: 0.875rem;
    --txt-lg: 1rem;
    --txt-xl: 1.2rem;
    --txt-2xl: 1.325rem;
    --txt-3xl: 1.875rem;
    --txt-4xl: 2.5rem;
    --txt-5xl: 3rem;
    --txt-6xl: 4rem;
  }
}

@media screen and (max-width: 800px) {
  :root {
    --txt-base: 0.75rem;
    --txt-lg: 0.875rem;
    --txt-xl: 1rem;
    --txt-2xl: 1.2rem;
    --txt-3xl: 1.325rem;
    --txt-4xl: 1.875rem;
    --txt-5xl: 2.5rem;
    --txt-6xl: 3rem;
  }
}

@media screen and (max-width: 750px) {
  :root {
    --txt-lg: 0.75rem;
    --txt-xl: 0.875rem;
    --txt-2xl: 1rem;
    --txt-3xl: 1.2rem;
    --txt-4xl: 1.325rem;
    --txt-5xl: 1.875rem;
    --txt-6xl: 2.5rem;
  }
}
</style>