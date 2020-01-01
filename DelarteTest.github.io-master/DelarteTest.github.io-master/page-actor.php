<?php

/*
	Template Name: Страница Актеров
*/

get_header();
?>
<body class="main-block">
	<section class="menu-block">
		<div class="burger-menu"></div>
		<?php get_sidebar(); ?>
	</section>

	<div class="actor-list">
		<div class="all-actor">

						       
				<?php
					$spec_count = 1;
					$show_line = 1;
					$id_spec = 0;
					$args = array(
					    'post_type' => 'actor', 
					    'posts_per_page' => 50, 
					);

					$p = get_posts( $args );

					foreach( $p as $post ){
						setup_postdata($post);
				?>
					<div class="select-actor">
						<div class="close-text">
							<div class="actor-info">					
								<p class="actor-name"><?php the_title(); ?></p>	
								<p class="actor-pos"><?php the_field('должность_актера'); ?></p>
								<p class="actor-mini-text"><?php the_field('краткое_описание_актера'); ?></p>
							</div>

							<div class="open-actor-info">
								<p class="actor-name"><?php the_title(); ?></p>	
								<p class="actor-pos"><?php the_field('должность_актера'); ?></p>
								<p class="actor-mini-text"><?php the_field('описание_актера'); ?></p>
							</div>
						</div>
						<div class="actor-border">				
							<div class="avatar"><img src="<?php the_field('фото_актера'); ?>" class="actor-border-photo"></div>
						</div>
					</div>			
				<?php
					}/*закрываем foreach*/

					wp_reset_postdata();
				?>	
			<!--<div class="select-actor">
				<div class="close-text">
					<div class="actor-info">					
						<p class="actor-name">Александрина Кириченко</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Артистка, музыкальный композитор.</p>
					</div>

					<div class="open-actor-info">
						<p class="actor-name">Александрина Кириченко</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Закончила АлтГАКИ в 2013 году по специальности "актриса драматического театра и кино" , курс народного артиста РСФСР В.С. Золотухина. Так же имеет второе высшее образование "режиссер театра". В 2004 году закончила ДМШ по классу фортепьяно.</p>

					</div>
				</div>
				<div class="actor-border">				
					<div class="avatar avatar-2"></div>
				</div>
			</div>		

			<div class="select-actor">
				<div class="close-text">
					<div class="actor-info">
						<p class="actor-name">Виктория Панкратова</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Артистка. Студентка СБГиК</p>
					</div>

					<div class="open-actor-info">
						<p class="actor-name">Виктория Панкратова</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Артистка. Студентка СБГиК по специальностям "Режиссер массовых праздников и представлений" и "актриса театра и кино".</p>
					</div>
				</div>
				<div class="actor-border">				
					<div class="avatar avatar-3"></div>						
				</div>
			</div>

			<div class="select-actor">
				<div class="close-text">
					<div class="actor-info">
						<p class="actor-name">Катерина Новик</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Выпускница студии творческого развития К.Ю.Хабенского</p>
					</div>

					<div class="open-actor-info">
						<p class="actor-name">Катерина Новик</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">18 лет. Город Санкт- Петербург. Выпускница студии творческого развития К.Ю.Хабенского, студентка МТЦ "Лёгкие Люди". Участвовала в благотворительных проектах ,один из которых- мюзикл "Поколение Маугли". Принимала участие во всероссийских фестивалях ("Оперение") и фестивалях г. Санкт-Петербург ("Точка Доступа"). На данный момент артистка театра "Del ARTE".</p>
					</div>
				</div>
				<div class="actor-border">				
					<div class="avatar avatar-6">
						
					</div>
				</div>
			</div>				

			<div class="select-actor">
				<div class="close-text">
					<div class="actor-info">
						<p class="actor-name">Мария Филимонова</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Выпускница театральной студии "Эхо" под рук. Н. В. Дурейко</p>
					</div>

					<div class="open-actor-info">
						<p class="actor-name">Мария Филимонова</p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">25 лет. Выпускница театральной студии "Эхо" под рук. Н. В. Дурейко (г. Могилев, Республика Беларусь). В составе студии неоднократные призеры и обладатели Гран-При международных театральных фестивалей в Беларуси и Украине. Опыт съёмок в эпизодах в художественных фильмах и сериалах. Полуфиналистка шоу "Comedy Баттл. Последний сезон" на ТНТ. На данный момент являюсь артисткой театра "Del Arte".</p>
					</div>
				</div>
				<div class="actor-border">				
					<div class="avatar avatar-8"></div>
				</div>
			</div>				

			<div class="select-actor">
				<div class="close-text">
					<div class="actor-info">
						<p class="actor-name">Коноверова Алиса </p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">Ученица 8 класса СПГАХЛ им. Б.В. Иогансона</p>
					</div>

					<div class="open-actor-info">
						<p class="actor-name">Коноверова Алиса </p>	
						<p class="actor-pos">Артист</p>
						<p class="actor-mini-text">14 лет. Ученица 8 класса СПГАХЛ им. Б.В. Иогансона. Многократно участвовала в фестивалях, выставках и школьных конкурсах. Артист благотворительного проекта "Упсала цирк", а также актриса Рок-оперы "Волкодав". Эпизодическая роль в короткометражном студенческом фильме "Улыбка" по Рею Бредбери. В настоящее время являюсь художником реквизита и артистом театра "Del ARTE"</p>
					</div>
				</div>
				<div class="actor-border">				
					<div class="avatar avatar-9"></div>
				</div>
			</div>-->											
		</div>
	</div>

	<?php get_footer(); ?>

</body>
</html>