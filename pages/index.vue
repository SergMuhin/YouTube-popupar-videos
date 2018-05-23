<template>

	<div>

		<div class="video" v-for="(item, index) in this.$store.getters.youTubeApiResponce.items" :key="index">

			<nuxt-link class="video__link" :to="'/' + index" >
				<h1>{{ item.snippet.title }}</h1>
				<br>
				<img :src="item.snippet.thumbnails.default.url" alt="">
				<br><br>


				<div v-if="item.rating">
					Оценка: {{ item.rating }}
				</div>

				<br><br>

			</nuxt-link >

		</div>

	</div>

</template>
