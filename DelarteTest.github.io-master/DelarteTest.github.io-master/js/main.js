 $(document).ready(function(){
  if ( $(window).width() > 800 ) {
 	   var _curIndex = 1000;
    $(".select-actor").click(function(){
	
    	var _actor = $(this).find(".open-actor-info");
    	var _close = $(this).find(".close-text");
	var _arr = $(".open-actor-info");

	_actor.slideToggle();
	       $(this).find(".actor-border").css("z-index",_curIndex);
	       _actor.css("z-index", _curIndex - 50);
		_close.css("z-index", _curIndex - 50);
	       _curIndex += 100;
    });
  }
});

$(document).ready(function(){
	$('.show-info__actors').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  draggable: false
  
});
	});

 $(document).ready(function(){
    $(".event-alarm").hover(function(){
       $(".monitor-title").text($(this).find(".monitor-title-event").text());
       $(".monitor-description").text($(this).find(".monitor-description-event").text());
       $(".monitor-date").text($(this).find(".monitor-date-event").text());   
    	$(".event-monitor").css("opacity","1");
    	    });
});

$(document).ready(function(){


  if ( $(window).width() > 800 ) {


       var cor = $(".full-news-text").height()+100;
       $(".height-corrector").height(cor);
      $(".full-news-text").css("display","flex");

    $(".one-news").click(function(){
       $(".cur-news-title").text($(this).find(".title-news-mini").text());
       $(".cur-news-description").text($(this).find(".full-text-description").text());
       $(".full-text-title").text($(this).find(".full-text-title-mini").text());
       $(".full-text-text").text($(this).find(".full-text-text-mini").html());
       $(".full-news-text").css("display","flex");
       $(".one-news").removeClass("active-news");
       $(this).addClass("active-news");

       $(this).find(".full-text-bg").attr("src"); 

       var cor = $(".full-news-text").height()+100;
       $(".height-corrector").height(cor);
           
    	});
  }
  else{
    $(".one-news").removeClass("active-news");
  }
});



$(document).ready(function(){

$(".more-btn").click(function(){

	var cor = $(".full-news-text").height()+100;
      	$(".height-corrector").height(cor);
    	$(".full-news-text").slideDown(300, function(){


});


      


	});
});

$(document).ready(function(){
       var cor = $(".full-news-text").height()+100;
    $(".more-btn").click(function(){
    	$(".full-news-text").slideDown();
      

       $(".height-corrector").height(cor);
    	    });
});

$(document).ready(function(){
    $(".close-full-text").click(function(){


    	$(".full-news-text").slideUp(300, function(){
$(".height-corrector").height(0);});

      
    	    });
});

$(document).ready(function(){
    $(".burger-menu").click(function(){
      $(".burger-menu").css("display","none");
      $("body").css("overflow","hidden");
      $(".hidden-menu").addClass("mobil");
      $(".mobil").css("display","flex");


          });
});


$(document).ready(function(){
    $(".close-menu").click(function(){
      $(".mobil").css("display","none");
      $("body").css("overflow","auto");
      $(".burger-menu").css("display","block");
          
          });
});

$(document).ready(function(){
   if ( $(window).width() > 800 ) {
	$(".event-alarm").hover(function(){
		var EventArr = $(".event-alarm");
		for (var i = 0; i < EventArr.length; i++){
			$(EventArr[i]).removeClass("active-event");
		}
		$(this).addClass("active-event"); 
	});
   }

});


$(document).ready(function () {
    $('#calendar').eCalendar({

 weekDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        textArrows: {previous: '', next: ''},
        eventTitle: 'Мероприятия',
        url: '',
        events: [
        	{title: 'TEST', description: 'Это баг, первый ивент не отображается, но он нужен, что бы второй отображался корректно', datetime: new Date(2017, 11, 1, 16)},
		{title: 'Лесной Фестиваль "Сильмия"', description: 'Это фестиваль лесных эльфов и нимф, который по праву может превратиться в уникальный, ежегодный проект. Организаторы фестиваля, вдохновленные поэмой «Имение Монрепо в Финляндии. 1804» Людвига Генриха Николаи и его рассказом о нимфе Сильмии, Короле Эрихе XIV дают повод задуматься о параллельной реальности открывающейся для простого человека именно в скально-пейзажном парке Монрепо, где все пропитано романтикой и мистическими загадками. Здесь каждый гость сможет стать участником Эльфийского карнавала.', datetime: new Date(2017, 9, 7, 10)},
		{title: 'Фестиваль ВсюдуЧудо', description: ' Ждём Вас у нас в гостях в семейном парке активного отдыха "Hlop Top" в ТЦ "Капитолий" состоится театральный фестиваль #ВсюдуЧудо<br> Наш фестиваль это целый парад спектаклей и сказочных постановок. С 14:00 до 19:00 участники фестиваля будут показывать удивительные представления, а Вам предоставится возможность принять участие в спектаклях.<br>Приходите, участвуйте, помогайте героям интерактивных спектаклей и не жалейте своих ладошек.<br>Театральный фестиваль #ВсюдуЧудо - чудо повсюду.<br> В программе: <br> 1. <a href="https://vk.com/teatr_antigravitator" target="_blank">Театр Летающих Вещей</a> интерактивный спектакль "Супер Ы"<br>2. <a href="https://vk.com/inter_spektakli" target="_blank">Театр "НАСТЮЛЯ"</a> интерактивный спектакль "Теремок"<br>3. <a href="https://vk.com/teatr_ridicule" target="_blank">Театр "Ридикюль"</a> спектакль "По щучьему велению"<br>4. <a href="https://vk.com/teatr_delarte" target="_blank">Театр Del ARTE</a> интерактивный спектакль "Гусёнок Дорофей"<br>5. <a href="https://vk.com/teatr_delarte" target="_blank">Театр Del ARTE</a> интерактивный спектакль "Нибелунги" <br>', datetime: new Date(2017, 10, 5, 14)},
		{title: 'Спектакль "Гусёнок"', description: 'Мы все с огромной радостью ждём каждого маленького помощника для Алёнки от очередной хитрости лисы! <br>Будем смеяться вместе, топать и громко кричать уже завтра.<br>Поверьте, куклы зачастую гораздо талантливее самих артистов<br>Приходите и проверьте!<br>Где: Морская набережная 35 развлекательный центр "Джоки Джоя".<br>Во сколько: в 18:00.<br>Что нужно взять: отличное настроение.', datetime: new Date(2017, 10, 17, 17)},
		{title: 'Спектакль "Нибелунги', description: 'Спектакль "Нибелунги" в ТЦ Парнас.<br> Вход свободный, поэтому видите цель, не видите препятствий! <br>Немного волшебства в эту холодную зимнюю пору точно согреет и подарит улыбку.', datetime: new Date(2017, 11, 9, 17)}
        ]});
});

