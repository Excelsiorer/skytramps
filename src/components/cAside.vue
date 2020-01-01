<template>
    <div class="burger" v-if="getIsMobile && !isShowMobileMenu" @click="toggleMenu(true)"></div>
    <nav class="aside" v-else-if="!getIsMobile || isShowMobileMenu">
        <div class="burger__close" v-if="getIsMobile && isShowMobileMenu" @click="toggleMenu(false)"></div>
        
        <router-link class="aside__link" exact to="/">
            <img src="~img@/icoIndex.svg" class="aside__linkIco" alt="Главная">
            <p class="aside__linkTitle">Главная</p>
        </router-link>

        <router-link class="aside__link" to="/performances">
            <img src="~img@/icoPerformance.svg" class="aside__linkIco" alt="Спектакли">
            <p class="aside__linkTitle">Спектакли</p>
        </router-link>
        
        <router-link class="aside__link" to="/actors">
            <img src="~img@/icoActors.svg" class="aside__linkIco" alt="Актеры">
            <p class="aside__linkTitle">Актеры</p>
        </router-link>
        
        <router-link class="aside__link" to="/events">
            <img src="~img@/icoCalendar.svg" class="aside__linkIco" alt="События">
            <p class="aside__linkTitle">События</p>
        </router-link>
        
        <router-link class="aside__link" to="/contacts">
            <img src="~img@/icoContacts.svg" class="aside__linkIco" alt="Контакты">
            <p class="aside__linkTitle">Контакты</p>
        </router-link>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'cAside',
        data: function(){
            return {
                hoverMenu: -1,
                isShowMobileMenu: false
            }
        },
        mounted: function() {
            this.$store.dispatch('checkIsMobile');
            window.addEventListener('resize', this.$store.dispatch('checkIsMobile'));
        },
        computed: {
            ...mapGetters([
                'getIsMobile'
            ]),
        },
        methods: {
            // setActiveMenu: function(newActiveMenu){
            //     if ( this. !== newActiveMenu ){
            //         this.$parent.$emit( 'openMenu', newActiveMenu );
            //         this.$store.commit( 'setActiveMenu', newActiveMenu );

            //         if ( this.isShowMobileMenu ){
            //             this.isShowMobileMenu = false;
            //             this.$store.commit('setBodyScroll', this.isShowMobileMenu);
            //         }
            //     }
            // },
            // isClickClass: function(activeMenu){
            //     return this. == activeMenu ? 'router-link-active' : ''
            // },
            toggleMenu: function(isShowMobileMenu){
                this.isShowMobileMenu = isShowMobileMenu;
                this.$store.commit('setBodyScroll', isShowMobileMenu);
            }
        }
    }
</script>

<style scoped>
    .aside{
        width: 100px;
        background-color: #eee;
        -webkit-box-shadow: 25px 0px 118px 0 rgba(54,53,54,0.9);
        -moz-box-shadow: 25px 0px 118px 0 rgba(54,53,54,0.9);
        box-shadow: 25px 0px 118px 0 rgba(54,53,54,0.9);
        position: fixed;
        z-index: 998;
        height: 100%;
        padding: 20px;
        opacity: .7;
    }

    .aside__link{
        transition: .6s;
        display: inline-block;
        box-sizing: border-box;
        background-color: rgba(180, 200, 242, 0);
        text-decoration: none;
        color: #000;
        cursor: pointer;
    }

    .aside__link:hover, .router-link-active{
        border-radius: 100%;
        padding-left: 20px;
    }

    .aside__link:hover .aside__linkTitle, .router-link-active .aside__linkTitle{
        border-radius: 10px;
        background-color: #ccd3ff;
    }

    .aside__linkIco{
        width: 50px;
        height: 50px;
        margin: 0 20px;
        box-sizing: border-box;
    }

    .aside__linkTitle{
        transition: .4s;
        text-align: center;
        border: 2px solid black;
        background-color: #eee;
        margin: 0 0 15px 0;
    }

    .burger{
        background-image: url('~img@/burger.svg');
        background-position: center;
        background-size: contain;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: #9696da59;
        border-radius: 50%;
    }

    .burger__close{

        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
        background-image: url('~img@/close.svg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    @media(max-width: 950px){
        .aside{
            width: 100%;
            opacity: 1;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

</style>