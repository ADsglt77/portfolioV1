<script lang="ts" setup>

const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const token = ref<string>('')

function send() {
  if (!name.value || !email.value || !message.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  $fetch('/api/contact', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
      message: message.value,
      token: token.value,
    },
  })
    .then(() => {
      alert('Votre message a été envoyé avec succès.')
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((error) => {
      console.error(error)
      alert('Une erreur est survenue lors de l\'envoi du message.')
    })
    .finally(() => {
      name.value = ''
      email.value = ''
      message.value = ''
    })
}
</script>

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
			<form @submit.prevent="send">
				<div>
					<input type="text" placeholder="Nom" v-model="name" />
					<input type="email" placeholder="Email" v-model="email" />
				</div>
				<textarea placeholder="Message" v-model="message"></textarea>
        <NuxtTurnstile v-model="token" />
				<button type="submit">ENVOYER</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.contact {
  width: 40%;
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
  gap: 10px;
}

.contact .form form div {
  display: flex;
  gap: 10px;
}

.contact .form form input,
.contact .form form textarea {
  width: 100%;
  min-height: 40px;
  padding: 0.4rem 0.8rem;
  background: #2c2f33da;
  border-radius: 0.5rem;
  border: none;
  resize: none;
  transition: 0.3s;
}

.contact .form form textarea {
  height: 20vh;
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
