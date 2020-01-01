<template>
    <div class="modal">
        <div class="modal__body">
            <div class="modal__close" @click="closeModal"></div>
            <div class="openPerformance">
                <div class="openPerformance__informationLeft">
                    <div class="openPerformance__information">
                        <div class="openPerformance__title">{{getPerformance.title}}</div>
                        <div class="openPerformance__description" v-html="getPerformance.description"></div>
                    </div>
                    <div class="openPerformance__photos">
                        <VueGallery :images="getImages" :index="galleryIndex" @close="galleryIndex = null"></VueGallery>
                        <slider 
                            animation="fade"
                            :autoplay="false"
                            height="400px"
                        >
                          <slider-item
                            v-for="(image, imageIndex) in getImages"
                            :key="imageIndex"
                            :style="{backgroundImage: 'url(' + image + ')'}"
                            @click="galleryIndex = imageIndex"
                          >
                          </slider-item>
                        </slider>
                    </div>
                </div>
                <div class="openPerformance__informationRight">
                    <div 
                        class="openPerformance__poster"
                        :style="{backgroundImage: 'url('+ require('./../assets/img/performances/' + getPerformance.performance + '/poster' + getPosterExt) +')'}"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import { Slider, SliderItem } from 'vue-easy-slider';
    import VueGallery from 'vue-gallery';

    export default{
        name: 'cPerformance',
        components: {
            Slider,
            SliderItem,
            VueGallery,
        },
        data: function(){
            return {
                galleryIndex: null,
                index: null,
            }
        },
        computed: {
            ...mapGetters([
                'getPerformanceList',
                'getActivePerformance',
                'getPosterExt',
            ]),
            getPerformance(){
                return this.getPerformanceList[this.$route.params.name];
            },
            getImages: function(){
                return this.getPerformance.gallery.map(image => {
                    return require('./../assets/img/performances/' + this.getPerformance.performance + '/gallary/' + image)
                })
            }
        },
        methods:{
            closeModal: function(){
                this.$router.go(-1);
                // this.$store.commit('setActivePerformance', -1);
            }
        }
    }
</script>

<style scoped>

    .blueimp-gallery {
        margin-left: auto;
        max-width: calc(100vw - 140px);
    }
    
    @media(max-width: 950px){
        .blueimp-gallery{
            max-width: 100%;
        }
    }
</style>

<style>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
        width: 100px;
        height: 50px;
    }
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding-top: 50px;
        padding-left: 200px;
        width: calc(100% - 200px);
    }

    .modal__body{
        height: 100%;
        max-height: 100%;
        overflow: auto;
        position: relative;
    }

    .modal__close{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        right: 30px;
        cursor: pointer;
        background-image: url('~img@/close.svg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    .openPerformance{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        flex-wrap: wrap;
        height: 80%;
        overflow-x: auto;
    }

    .openPerformance__informationLeft{
        flex-basis: 50%;
    }
    .openPerformance__informationRight{
        flex-basis: 50%;
    }

    .openPerformance__poster{
        width: 100%;
        height: 100%;
        max-height: 80vh;
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .openPerformance__title{
        font-size: 48px;
        text-align: center;
    }

    .openPerformance__description{
        font-size: 20px;
        text-align: center;
        letter-spacing: 2px;
        line-height: 25px;
        word-spacing: 5px;
        margin: 30px auto;
    }

    .slider-item{
        background-size: cover;
    }

    @media(max-width: 950px){
        .modal{
            padding: 10px 0 0 0;
            width: 100%;
        }
        .blueimp-gallery{
            max-width: 100%;
        }

        .openPerformance__informationRight{
            display: none;
        }
        .openPerformance__informationLeft{
            flex-basis: 95%;
        }
    }
</style>