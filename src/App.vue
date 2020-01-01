<template>
    <div id="app">
        <cAside />
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import cAside from 'c@/cAside.vue';
    import {mapGetters} from 'vuex';

    export default {
        name: 'app',
        components: {
            cAside,
        },
        methods: {
            consoleLog: function(n) {
                console.log(n);
            }
        },
        computed: {
            ...mapGetters([
                'getActiveMenu',
                'getActivePerformance'
            ]),
            isOpenPerformance: function(){
                return this.getActivePerformance !== -1; 
            }
        },
        watch: {
            getActiveMenu: function (newValue, oldValue) {
                window.scroll(0,0);
            },

            isOpenPerformance: function (newValue, oldValue) {
                this.$store.commit('setBodyScroll', newValue);
            },
        },
    }
</script>

<style scoped>
    >>> main{
        padding-left: 200px;
        /*padding-top: 50px;*/
    }
</style>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poiret One', cursive;
        font-weight: bold;
        color: #2e2e30;
        background-color: #eee;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    .section{
        padding: 40px 0;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        flex-direction: column;
    }
    .title{
        font-size: 50px;
        text-align: center;
        margin: 0 0 40px 0;
    }
    .header{
        background-image: url(~img@/header.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 30vh;
    }
    .isOpenModal{
        overflow: hidden;
    }

    @media(max-width: 950px){
        main{
            padding: 0;
        }   
    }

</style>
