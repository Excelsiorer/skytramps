<template>
    <router-link 
        class="performance"
        :class="'performance--' + performance.performance"
        @click="setActivePerformance"
        :to="`/performances/${performance.performance}`"
        :style="{backgroundImage: 'url('+ require('./../assets/img/performances/'+ performance.performance + '/poster' + getPosterExt) +')'}"
    >
        <div class="performance__inner">
            <div class="performance__info">
                <div class="performance__infoInner">
                    <h4 class="performance__title">{{performance.title}}</h4>
                    <div class="performance__underline"></div>
                    <img src="~img@/eye.svg" class="performance__watch">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'cSinglePerformance',
        props: {
            performance: {
                type: Object,
                default: ()=>{}
            }
        },
        computed: {
            ...mapGetters([
                'getPosterExt'
            ])
        },
        methods: {
            setActivePerformance: function(){
                this.$store.commit('setActivePerformance', this.performance);
            }
        },
    }
</script>

<style scoped>
    .performance{
        width: 200px;
        height: 200px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        border: 1px solid #000;
        margin: 10px;
        /*clip-path: polygon(50% 5%, 97% 25%, 97% 75%, 50% 95%, 3% 75%, 3% 25%);*/
        position: relative;
        cursor: pointer;
    }

    .performance:hover .performance__info{
        opacity: 1;
    }

    .performance:hover .performance__underline{
        width: 50%;
    }

    .performance__inner{
        width: 100%;
        height: 100%;
    }

    .performance__info{
        transition: .4s;
        width: 100%;
        height: 100%;
        background-color: rgba(40,75,126,.8);
        opacity: 0;
        border-radius: 50%;
        /*clip-path: polygon(50% 5%, 97% 25%, 97% 75%, 50% 95%, 3% 75%, 3% 25%);*/
    }

    .performance__infoInner{
        width: 100%; 
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 0 0 0;
        color: #fff;
    }

    .performance__title{
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 200;
        text-align: center;
    }

    .performance__underline{
        transition: .4s;
        transition-delay: 0.1s;
        width: 1%;
        height: 1px;
        background-color: #fff;
        margin: 0 0 10px 0;
    }

    .performance__watch{
        background-color: rgba(0,0,0,.4);
        padding: 7px;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        transition: .4s;
    }

    .performance__watch:hover{
        background-color: rgba(255,255,255,.3);
    }

</style>