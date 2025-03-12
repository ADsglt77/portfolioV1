<script lang="ts" setup></script>

<template>
  <div class="contact">
    <h3>Me <span>Contacter</span></h3>
    <div class="line"></div>
    <div class="form">
      <div class="social">
        <ContactIconsMap />
        <p>Verneuil-Sur-Vienne</p>
        <ContactIconsMail />
        <p>adrien.segalat@gmail.com</p>
        <ContactIconsPhone />
        <p>06 33 61 58 46</p>
        <ContactIconsLinkedin />
        <p>@adsglt</p>
      </div>
      <form>
        <div>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button>ENVOYER</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact {
  width: 50%;
  max-width: 1200px;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact h3 span {
  color: #47d67e;
}

.contact .line {
  width: 100%;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  grid-column: 1 / -1;
}

.contact .form {
  display: flex;
  grid-column: 1 / -1;
  gap: 50px;
}

.contact .form .social {
  height: min-content;
  align-items: center;
  margin-top: 100px;
  display: grid;
  grid-template-columns: min-content auto;
  gap: 10px;
}

.contact .form .social p {
  font-weight: 200;
}

.contact .form form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact .form form div {
  display: flex;
  gap: 20px;
}

.contact .form form input,
.contact .form form textarea {
  width: 100%;
  height: 100%;
  padding: 0.4rem 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  resize: none;
  border-radius: 0.5rem;
  transition: 0.3s;
}

.contact .form form input:focus,
.contact .form form textarea:focus {
  background-color: rgba(32, 70, 11, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.contact .form form textarea {
  height: 25vh;
}

.contact .form form button {
  width: fit-content;
  padding: 0.5rem 1rem;
  background: #47d67e;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.contact .form form button:hover {
  background: #27ac5a;
}

@media (max-width: 1500px) {
  .contact {
    width: 70%;
  }
}

@media (max-width: 1300px) {
  .contact {
    width: 80%;
  }
}

@media (max-width: 1100px) {
  .contact {
    width: 90%;
  }
}

@media (max-width: 900px) {
  .contact .form {
    flex-direction: column;
  }
  .contact .form .social {
    margin-top: 10px;
  }
}

@media (max-width: 500px) {
  .contact .form form div {
    flex-direction: column;
  }
}
</style>
