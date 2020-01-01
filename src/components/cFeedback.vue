<template>
    <section class="feedback section">
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
                <input type="submit" value="Отправить" class="form__submit">
            </form>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'cFeedback',
        data: function(){
            return {
                hoverMenu: -1
            }
        },
        computed: {
            getActiveMenu: function(){
                return this.$store.getters.getActiveMenu;
            }   
        },
        methods: {
            setActiveMenu: function(newActiveMenu){
                if ( this.getActiveMenu !== newActiveMenu ){
                    this.$parent.$emit( 'openMenu', newActiveMenu );
                    this.$store.commit( 'setActiveMenu', newActiveMenu );
                }
            },
            isClickClass: function(activeMenu){
                return this.getActiveMenu == activeMenu ? 'aside__link--active' : ''
            }
        }
    }
</script>

<style>
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