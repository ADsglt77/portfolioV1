<script lang="ts" setup>
import cvFile from "/CV.pdf";
</script>

<template>
    <div class="about">
        <img src="/profil.jpeg" alt="">
        <div>
            <h3>SEGALAT <span>ADRIEN</span></h3>
            <div class="line"></div>
            <p>
                Je suis étudiant en BTS SIO (SLAM), passionné par le développement web,
                le design, et grand amateur de basket-ball. Créatif et curieux, j’aime
                allier technique et esthétique dans mes projets.
            </p>
            <div>
                <router-link to="/contact" class="router-link">
                    <p>Prendre Contact</p>
                </router-link>
                <a :href="cvFile" download>
                    <p>Télécharger le CV</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.about img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

.about div {
    flex: 1;
}

.about div h3 span {
    color: #47d67e;
}

.about div .line {
    width: 100%;
    border-top: 1px dashed rgba(255, 255, 255, 0.3);
    margin: 20px 0;
}

.about div p {
    margin-bottom: 2rem;
}

.about div div {
    display: flex;
    gap: 20px;
}

.about div div a {
    padding: 0.5rem 1rem;
    background: #47d67e;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 0.8rem;
}

.about div div a:hover {
    background: #27ac5a;
}

.about div div a p {
    margin: 0;
}

@media (max-width: 900px) {
    .about {
        flex-direction: column;
        text-align: center;
    }

    .about div div a {
        
        margin: 0 auto;
    }
}
</style>