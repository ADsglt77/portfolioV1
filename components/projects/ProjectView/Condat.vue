<script lang="ts" setup>
import ProjeBibliotheque from "/projects/pdf/ProjetBibliotheque.pdf";
const emit = defineEmits(["close"]);
</script>

<template>
    <div class="modal">
        <div class="content">
            <IconsArrowBack @click="emit('close')" />
            <div class="title">
                <h3>PROJET CONDAT BASKET CLUB</h3>
                <h5>NuxtJs + TypeScript + Prisma</h5>
            </div>
            <div class="line"></div>
            <div class="description">
                <aside>
                    <h6>Repositorie :</h6>
                    <a href="https://github.com/Condat-Basket-Club" target="_blank">
                        <IconsGithub />
                    </a>
                    <h6>Documentation :</h6>
                    <a href="" :download="ProjeBibliotheque">
                        <IconsPdf />
                    </a>
                    <h6>Technologies :</h6>
                    <div class="techno">
                        <ProjectsIconsIconNuxtJs />
                        <ProjectsIconsIconPrisma />
                        <ProjectsIconsIconTypeScript />
                        <ProjectsIconsIconDocker />
                        <ProjectsIconsIconCloudFlare />
                        <ProjectsIconsIconCss />
                    </div>
                </aside>
                <div>
                    <h5>Projet Condat Basket Club :</h5>
                    <p>
                        Ce projet consiste à créer un site vitrine pour le Club de Basket de
                        Condat. Il mettra en avant les valeurs du club, ses licenciés et ses
                        produits. Avec ce site vitrine un Dashboard sera développé pour les
                        gérants du club, il permettra la mise à jour du site facilement et
                        rapidement. Pour cela j’utiliserai le Framework <a href="https://nuxt.com"
                            target="_blank">NuxtJS</a>
                    </p>
                    <h5>Ma mission :</h5>
                    <h6>Conception du site Vitrine :</h6>
                    <ul>
                        <li> • <strong>Page accueil : </strong>Présente le club</li>
                        <li> • <strong>Page club : </strong>Permet de s'informer sur les entrainements et d'informer sa
                            présence à un entrainement ou non, connaître les membres du bureau, les licences et les
                            photos du club</li>
                        <li> • <strong>Page match : </strong>Permet de suivre le championat et d'informer sa présence à
                            un match</li>
                        <li> • <strong>Page boutique : </strong>Présente les articles disponible à la vente</li>
                        <li> • <strong>Page partenaires : </strong>Présente les différents partenaires</li>
                        <li> • <strong>Page contact : </strong>Présente d'envoyer un message au club et de connaitre la
                            localisation du gymnase de Condat Sur Vienne</li>
                    </ul>
                    <h6>Conception du Panel :</h6>
                    <ul>
                        <li> • <strong>Page accueil : </strong>Présente le panel</li>
                        <li> • <strong>Page partenaires : </strong>Permet de modifier/supprimer/ajouter un partenaire
                        </li>
                        <li> • <strong>Page club : </strong>Permet de supprimer/ajouter les photos du club,
                            modifier/supprimer/ajouter un entrainement, modifier/supprimer/ajouter une personne du
                            bureau, supprimer/ajouter un document</li>
                        <li> • <strong>Page shop : </strong>Permet de modifier/supprimer/ajouter un article</li>
                        <li> • <strong>Page contact : </strong>Permet de modifier l'email recevant les mails du
                            formulaire de contact et de modifier l'emplacement du siège sociale</li>
                        <li> • <strong>Page compte : </strong>Permet de gérer les utilisateurs du site</li>
                        <li> • <strong>Page deconnexion : </strong>Permet de se deconnecter mais aussi de changer son
                            nom/prenom/mot de passe</li>
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
