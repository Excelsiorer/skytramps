<template>
    <div>
        <section class="contacts section">
            <h1 class="title">Социальные сети</h1>
            <div class="contacts__links">
                <a 
                    v-for="( link, key) in getContactLinks"
                    :href="link.link" 
                    :key="key"
                    target="_blank" 
                    class="contacts__link" 
                >
                    <span class="contacts__linksTitle">{{link.name}}</span>
                    <span class="contacts__linkLogo" :class="'contacts__linkLogo--' + key"></span>
                </a>
            </div>
            <div class="social-cell_line"></div>
        </section>
        <!--<section class="feedback section">
            <div class="form">
                <h4 class="title">Напишите нам!</h4>
                <form action="post.php" method="POST">
                    <div class="form__fields">
                        <div class="form__field">
                            <input type="text" name="name" id="name" placeholder="Имя" class="form__input">
                        </div>

                        <div class="form__field">
                            <input type="email" name="email" id="email" placeholder="E-mail" class="form__input">
                        </div>
                    </div>

                    <div class="form__field form__field--textarea">
                        <textarea name="_Comm" id="comment" cols="30" rows="10" placeholder="Ваше сообщение" class="form__input"></textarea>
                    </div>
                    <input type="submit" value="Отправить" @click.prevent="sendMail" class="form__submit">
                </form>
            </div>
        </section>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Contacts',
        data: function(){
            return {
            }
        },
        computed: {
            ...mapGetters([
                'getContactLinks',
            ]),
        },
        methods: {
            sendMail() {
                this.$store.dispatch('sendMail', {
                    message: 'mmm'
                })
            }
        }
    }
</script>

<style scoped>
    .contacts__links{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #000;
    }

    .contacts__link{
        width: 200px;
        height: 200px;
        color: #000;
        letter-spacing: 2px;
        text-align: center;
        margin: 50px;
        position: relative;
    }

    .contacts__linkLogo{
        transition: .4s;
        width: 70%;
        height: 70%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        display: block;
        margin: 10px auto;
    }

    .contacts__linkLogo:hover {
        width: 80%;
        height: 80%;
    }

    .contacts__linkLogo--vk{
        background-image: url('~img@/logoVk.svg');
    }

    .contacts__linkLogo--instagramm{
        background-image: url('~img@/logoInstagramm.svg');
    }

    .contacts__linksTitle{
        text-transform: uppercase;
    }


    @media(max-width: 950px){
        .contacts__links{
            flex-direction: column;
        }
        .contacts__link{
            margin: 0 auto;
        }
    }

    .form{
        width: 50%;
        margin: 0 auto;
    }
    .form__fields{
        display: flex;
        justify-content: space-between;
    }

    .form__field{
        text-align: center;
        font-size: 25px;
        width: 45%;
    }

    .form__input{
        width: 100%;
        margin: 10px 0;
        border: 1px solid #000;
        border-radius: 7px;
        padding: 15px 5px;
        font-size: 15px;
        font-family: 'Poiret One', cursive;
        font-weight: bold;
    }

    .form__field--textarea{
        width: 100%;
    }

    .form__field--textarea textarea{
        resize: vertical;
        min-height: 100px;
    }

    .form__submit{
        margin: 30px 0 0 0;
        letter-spacing: 1px;
        border: 1px solid #000;
        padding: 20px 30px;
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: 'Poiret One', cursive;
        cursor: pointer;
    }


    @media(max-width: 950px){
        .form{
            width: 90%;
        }
        .form__fields{
            flex-direction: column;
        }
        .form__field{
            width: 100%;
        }
    }

</style>