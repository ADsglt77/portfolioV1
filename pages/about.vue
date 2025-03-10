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
    padding: 2rem 1rem;
}

.about img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.about img:hover {
    transform: scale(1.02);
}

.about div {
    flex: 1;
}

.about div h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.about div h3 span {
    color: #47d67e;
    position: relative;
}

.about div .line {
    width: 100%;
    border-top: 1px dashed rgba(255, 255, 255, 0.3);
    margin: 20px 0;
}

.about div p {
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.about div div {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.about div div a, 
.about div div .router-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #47d67e;
    border-radius: 0.5rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    box-shadow: 0 4px 8px rgba(71, 214, 126, 0.3);
}

.about div div a:hover, 
.about div div .router-link:hover {
    background: #27ac5a;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(71, 214, 126, 0.4);
}

.about div div a:active, 
.about div div .router-link:active {
    transform: translateY(0);
}

.about div div a p, 
.about div div .router-link p {
    margin: 0;
}

/* Media queries pour la responsivité */
@media (max-width: 992px) {
    .about {
        width: 90%;
    }
}

@media (max-width: 768px) {
    .about {
        flex-direction: column;
        text-align: center;
    }
    
    .about img {
        width: 300px;
        height: 300px;
    }
    
    .about div div {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .about img {
        width: 250px;
        height: 250px;
    }
    
    .about div h3 {
        font-size: 1.5rem;
    }
    
    .about div div {
        flex-direction: column;
        align-items: center;
    }
    
    .about div div a, 
    .about div div .router-link {
        width: 100%;
        text-align: center;
    }
}
</style>