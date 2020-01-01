	<?php

	/*
		Template Name: Отдельный спектакль
	*/

	get_header();
	?>

<body class="main-block">
	<section class="menu-block">
		<div class="burger-menu"></div>
		<?php get_sidebar(); ?>
	</section>

	<section class="content">
		<div class="content__show-title">
			<div class="show-title__header">
				<?php 
					if (!empty(the_field('шапка'))){
				?>
				<img src="<?php the_field('шапка'); ?>" class="show-title-img">
				<?
					}
				?>
				<div class="show-title__title"><?php the_title(); ?></div>
				<div class="show-title__logo"></div>
			</div>
		</div>

		<div class="content__show-info">
			<div class="show-info">
				<div class="show-info__show-description">
					<p class="show-description__title"><?php the_title(); ?></p>
					<p class="show-description__view-text"><?php the_field('описание'); ?></p>

				</div>

			</div>			

			<div class="show-photo">
				<img src="<?php the_field('афиша_спектакля'); ?>" alt="">
			</div>

			<div class="show-galery">
				<?php 
				$page_id = get_the_ID(); //ID нынешней страницы

					if (!empty(get_post_meta($page_id, 'actor_list'))){
				?>
				<div class="act-block">
					<p class="show-description__actors">Действующие лица</p>
					<div class="show-info__actors">


						<?php 
							$page_id = get_the_ID(); //ID нынешней страницы
							$page_images = array(); //Сюда будем записывать информацию о картинках
							 //ID нынешней страницы

							//Получаем информацию из созданного нами поля "page_gallery_images":
							$page_images = get_post_meta($page_id, 'actor_list');
							//Выводим картинки:
							foreach ( $page_images as $image ){
								   		echo '<div class="visible-actor"><p class="actors__role">Лицо</p><div class="actors__face"><img src="' . $image['guid'] . '" class="visible-actor-photo"></div><p class="actors__role">один</p></div>';
									}
						?>				
					</div>
				</div>
				<?
					}
				?>

				<div class="show-galery-block">

					<?php 

						$page_images = array(); //Сюда будем записывать информацию о картинках
						$page_id = get_the_ID(); //ID нынешней страницы

						//Получаем информацию из созданного нами поля "page_gallery_images":
						$page_images = get_post_meta($page_id, 'galery_spec');
						//Выводим картинки:
						foreach ( $page_images as $image ){
								echo '<a href="' . $image['guid'] . '" class="swipebox link-to-galery" title=""><div class="show-galery-item"><img src="' . $image['guid'] . '" class="galery-spec-photo"></div></a>';
								}
					?>
				</div>	
			</div>
		</div>
	</section>

	

	<?php get_footer(); ?>


</body>
</html>