<script >

export default {
    name: 'AppLoadingScreen',
    data() {
        return {
            loadingText: 'Caricamento in corso...',
            loadingProgress: 0,
            monsters: [
                { id: 1, name: 'Monster1' },
                { id: 2, name: 'Monster2' },
                { id: 3, name: 'Monster3' },
                // Aggiungi altri mostri se necessario
            ],
        };
    },
    created() {
    this.startLoadingTextAnimation();
    this.startLoadingBarAnimation();
  },
    methods: {
        startLoadingTextAnimation() {
            const alternateTexts = ['Attendere...', 'Caricato!!...']; 

            let index = 0;

            const animateText = () => {
                this.loadingText = alternateTexts[index];
                index = (index + 1) % alternateTexts.length;

                setTimeout(animateText, 2000); // Cambia il testo ogni 2 secondi
            };

            animateText();
        },
        startLoadingBarAnimation() {
      // Simuliamo il caricamento incrementando progressivamente
      let progress = 0;

      const animateBar = () => {
        if (progress < 100) {
          progress += 1;
          this.loadingProgress = progress;

          setTimeout(animateBar, 20); // Riduci il timeout per una barra di caricamento più veloce
        }
      };

      animateBar();
    },
  }
};



</script>

<template>
    <div class="loading-screen">
    <transition name="fade" mode="out-in">
      <div :key="loadingText" class="loading-text">{{ loadingText }}</div>
    </transition>
    <div class="logo"> <!-- Aggiungi qui l'elemento per il logo Yu-Gi-Oh! --></div>
    <div class="loading-bar">
      <div class="bar-progress" :style="{ width: loadingProgress + '%' }"></div>
    </div>
    <div class="epic-text">Preparati a duellare!</div>
    
  </div>
</template>

<style  scoped lang="scss">
@import '../styles/general.scss';
@import '../styles/partials/_variables';

body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #222;
    /* Colore di sfondo scuro */
    color: #fff;
    /* Colore del testo bianco */
}

/* Stile per la schermata di caricamento */
.loading-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Stile per il logo Yu-Gi-Oh! */
.logo {
    margin-bottom: 20px;
    /* Aggiungi stili per il logo Yu-Gi-Oh!, ad esempio larghezza, altezza, effetti luminosi, ecc. */
}

/* Stile per la barra di caricamento */
.loading-bar {
    width: 70%;
    height: 20px;
    background-color: #444;
    /* Colore di sfondo della barra */
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
}

.bar-progress {
  height: 100%;
  background-color: #00ff00; /* Colore della barra di caricamento */
}




/* Stile per la frase epica */
.epic-text {
    font-size: 24px;
    margin-bottom: 30px;
    /* Aggiungi stili per il testo epico, ad esempio colore, ombra, ecc. */
}



/* Stile per il testo informativo di caricamento */
.loading-text {
    font-size: 16px;
    /* Aggiungi stili per il testo di caricamento, ad esempio colore, ombra, ecc. */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
