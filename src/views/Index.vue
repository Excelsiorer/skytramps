<template>
    <div>
        <Performances/>
        <Actors/>
        <Events/>
        <Contacts/>
    </div>
</template>

<script>
    import Performances from './Performances.vue';
    import Actors from './Actors.vue';
    import Events from './Events.vue';
    import Contacts from './Contacts.vue';
    import {mapGetters} from 'vuex';

    export default {
        name: 'index',
        components: {
            Performances,
            Actors,
            Events,
            Contacts,
        },
    }
</script>