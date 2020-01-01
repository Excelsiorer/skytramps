<template>
    <section class="performanceList section">
        <h1 class="title">Наши спектакли</h1>
        <div class="performanceLine">
            <cSinglePerformance 
                v-for="(performance, performanceKey) in getPerformanceList"
                :performance=performance
                :key="performanceKey"
            />
        </div>
    </section>
</template>

<script>
    import cSinglePerformance from 'c@/cSinglePerformance.vue'

    export default{
        name: 'Performances',
        components: {
            cSinglePerformance
        },
        computed: {
            getPerformanceList: function(){
                return this.$store.getters.getPerformanceList;
            }
        }
    }
</script>

<style scoped>
    .performanceList{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .performanceLine{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .performanceLine--center{
        margin-top: -60px;
        margin-bottom: -60px;
    }
</style>