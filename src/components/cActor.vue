<template>
    <div class="actor">
        <div class="actor__left">
            <div class="actor__photo" :class="'actor__photo--actor' + actorIndex">
            </div>
        </div>
        <div class="actor__right">
            <div class="actor__name">{{name}}</div>
            <div class="actor__description">{{description}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cActor',
        props: {
            name: String,
            description: String,
            actorIndex: Number
        },
    }
</script>

<style scoped>
    .actor{
        width: 100%;
        min-height: 200px;
        margin: 30px 0 100px 0;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
    }

    .actor__left{
        width: 300px;
        margin-right: 20px;
    }

    .actor__right{
        width: 50%;
    }

    .actor__name{
        font-size: 40px;
        padding-bottom: 10px;
    }

    .actor__description{
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 1px;
    }
    
    .actor__photo{
        width: 100%;
        height: 100%;

        background-position: top;
        background-size: cover;
    }

    .actor__photo--actor0{
        background-image: url('~img@/actor_0.webp')
    }

    .actor__photo--actor1{
        background-image: url('~img@/actor_1.webp')
    }

    @media(max-width: 950px){
        .actor{
            -webkit-flex-direction: column;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -o-flex-direction: column;
            flex-direction: column;
        }
        .actor__left{
            height: 50vh;
            width: 100%;
        }
        .actor__right{
            width: calc(100% - 10px);
            padding-left: 10px;
        }
    }
</style>