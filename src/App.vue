<template>
    <div id="app">
        <transition name="slide-left">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
html {
    font-size: 62.5%; /*10 ÷ 16 × 100% = 62.5%*/
}
body {
    font-size: 1.4rem; /*1.4 × 10px = 14px */
}
h1 { 
    font-size: 2.4rem; /*2.4 × 10px = 24px*/
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .slide-left-enter-active {
        animation: slideLeft .3s;
    }
    @keyframes slideLeft {
        from {
            transform: translate3d(100%, 0, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>
