<template>
    <section class="section">
        <h1 class="title">Где мы были и будем?</h1>
        <timeline v-for="(month, monthKey) in getEventsList">
            <timeline-title bg-color="#69b58c">{{month.month + ' ' + month.year}}</timeline-title>
            <timeline-item v-for="(event, eventKey) in month.events">
                <div slot="others" class="timeline__ico" :class="'timeline__ico--' + event.date">
                </div>
                <span class="timeline__event">{{event.title}}</span>
            </timeline-item>
        </timeline>
    </section>
</template>

<script>
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Events',
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        data: function() {
            return {
                monthList: {
                    'Январь': 1,
                    'Февраль': 2,
                    'Март': 3,
                    'Апрель': 4,
                    'Май': 5,
                    'Июнь': 6,
                    'Июль': 7,
                    'Август': 8,
                    'Сентябрь': 9,
                    'Октябрь': 10,
                    'Ноябрь': 11,
                    'Декабрь': 12,
                }
            }
        },
        computed: {
            ...mapGetters([
                'getEventsList'
            ]),
        }
    }
</script>

<style>
    .timeline{
        width: calc(100% / 4);
        margin: 0 auto;
    }
    .timeline__ico{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        background-position: 0, 14px;
        width: 34px;
        height: 20px;
        margin: 0 auto;
        background-size: contain, contain;
        background-repeat: no-repeat, no-repeat;
    }
    .timeline__img{
        width: 20px;
        margin: 0 -4px;
    }
    .timeline__event{
        padding-top: 6px;
        font-weight: normal;
        display: inline-block;
        font-weight: normal;
    }
    .timeline__ico--1{
        background-image: url('~img@/one.svg');
    }
    .timeline__ico--2{
        background-image: url('~img@/two.svg');
    }
    .timeline__ico--3{
        background-image: url('~img@/three.svg');
    }
    .timeline__ico--4{
        background-image: url('~img@/four.svg');
    }
    .timeline__ico--5{
        background-image: url('~img@/five.svg');
    }
    .timeline__ico--6{
        background-image: url('~img@/six.svg');
    }
    .timeline__ico--7{
        background-image: url('~img@/seven.svg');
    }
    .timeline__ico--8{
        background-image: url('~img@/eight.svg');
    }
    .timeline__ico--9{
        background-image: url('~img@/nine.svg');
    }
    .timeline__ico--10{
        background-image: url('~img@/one.svg'), url('~img@/zero.svg');
    }
    .timeline__ico--11{
        background-image: url('~img@/one.svg'), url('~img@/one.svg');
    }
    .timeline__ico--12{
        background-image: url('~img@/one.svg'), url('~img@/two.svg');
    }
    .timeline__ico--13{
        background-image: url('~img@/one.svg'), url('~img@/three.svg');
    }
    .timeline__ico--14{
        background-image: url('~img@/one.svg'), url('~img@/four.svg');
    }
    .timeline__ico--15{
        background-image: url('~img@/one.svg'), url('~img@/five.svg');
    }
    .timeline__ico--16{
        background-image: url('~img@/one.svg'), url('~img@/six.svg');
    }
    .timeline__ico--17{
        background-image: url('~img@/one.svg'), url('~img@/seven.svg');
    }
    .timeline__ico--18{
        background-image: url('~img@/one.svg'), url('~img@/eight.svg');
    }
    .timeline__ico--19{
        background-image: url('~img@/one.svg'), url('~img@/nine.svg');
    }
    .timeline__ico--20{
        background-image: url('~img@/two.svg'), url('~img@/zero.svg');
    }
    .timeline__ico--21{
        background-image: url('~img@/two.svg'), url('~img@/one.svg');
    }
    .timeline__ico--22{
        background-image: url('~img@/two.svg'), url('~img@/two.svg');
    }
    .timeline__ico--23{
        background-image: url('~img@/two.svg'), url('~img@/three.svg');
    }
    .timeline__ico--24{
        background-image: url('~img@/two.svg'), url('~img@/four.svg');
    }
    .timeline__ico--25{
        background-image: url('~img@/two.svg'), url('~img@/five.svg');
    }
    .timeline__ico--26{
        background-image: url('~img@/two.svg'), url('~img@/six.svg');
    }
    .timeline__ico--27{
        background-image: url('~img@/two.svg'), url('~img@/seven.svg');
    }
    .timeline__ico--28{
        background-image: url('~img@/two.svg'), url('~img@/eight.svg');
    }
    .timeline__ico--29{
        background-image: url('~img@/two.svg'), url('~img@/nine.svg');
    }
    .timeline__ico--30{
        background-image: url('~img@/three.svg'), url('~img@/zero.svg');
    }
    .timeline__ico--31{
        background-image: url('~img@/three.svg'), url('~img@/one.svg');
    }

    @media(max-width: 950px){
        .timeline{
            width: 70%;
        }
    }
</style>