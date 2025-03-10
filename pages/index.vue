<script lang="ts" setup>
let msg = ref("");
let blink = ref(true);
const words = ["Developer", "Designer", "Freelancer"];
let i = 0;

const textTyping = () => {
    let word = words[i];
    let letter = 0;
    blink.value = true;
    let typing = setInterval(() => {
        if (letter < word.length) {
            msg.value += word.charAt(letter);
            return letter++;
        }
        blink.value = false;
        clearInterval(typing);
        setTimeout(() => {
            textErasing();
        }, 1200);
    }, 100);
};

const textErasing = () => {
    let word = words[i];
    let letter = word.length;
    let erasing = setInterval(() => {
        if (letter >= 0) {
            msg.value = word.substring(0, letter);
            letter--;
        } else {
            clearInterval(erasing);
            i++;
            if (i >= words.length) {
                i = 0;
            }
            setTimeout(() => {
                textTyping();
            }, 500);
        }
    }, 50);
};

textTyping();
</script>

<template>
    <h3>SEGALAT ADRIEN</h3>
    <h5>Creative <span>{{ msg }}</span></h5>
    <router-link to="/contact" exact-active-class="active">Prendre Contact</router-link>
</template>

<style scoped>
h5 span {
    color: #47d67e;
    position: relative;
}

h5 span::before {
    content: "";
    height: 1.5rem;
    width: 0.20rem;
    position: absolute;
    top: 50%;
    right: -8px;
    background: #47d67e;
    box-shadow: 0 0 10px #c9c9c9;
    transform: translateY(-45%);
    animation: blink 0.7s infinite;
}

h5 span.stop-blinking::before {
    animation: none;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

a {
    padding: 0.5rem 1rem;
    background: #47d67e;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 0.8rem;
}

a:hover {
    background: #27ac5a;
}
</style>