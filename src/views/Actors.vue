<template>
    <section class="actorsList section">
        <h1 class="title">Наши актеры</h1>
        <cActor 
            v-for="(actor, i) in $store.getters.getActorsList"
            :name="actor.name"
            :description="actor.description"
            :actorIndex="i"
        />
    </section>
</template>

<script>
    import cActor from 'c@/cActor.vue'

    export default {
        name: 'Actors',
        components: {
            cActor
        }
    }
</script>

<style scoped>
    .actorsList .actor:nth-child(odd){
        flex-direction: row-reverse;
        padding-right: 60px;
    }
    .actorsList .actor:nth-child(odd) >>> .actor__right{
        text-align: right;
        margin-right: 20px;
    }
    .actorsList .actor:nth-child(odd) >>> .actor__left{
        margin-right: 50px;
    }


    @media(max-width: 950px){
        .actorsList .actor:nth-child(odd){
            -webkit-flex-direction: column;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -o-flex-direction: column;
            flex-direction: column;
            padding-right: 0;
        }
        .actorsList .actor:nth-child(odd) >>> .actor__right{
            text-align: left;
        }
    }
</style>