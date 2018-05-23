<template>

	<div>
		<h3>{{ this.video.items[this.$route.params.id].snippet.title }}</h3>
		<br>

		<div class="flex_row" >
			<iframe id="player" type="text/html" width="640" height="360"
			:src="videoSrc" frameborder="0"></iframe>

			<div class="video__info">

				<p >Канал:</p>
				<br>
				<p class="chanel__name">{{ this.video.items[this.$route.params.id].snippet.channelTitle }}</p>
				<br>
				<p>Теги:</p>
				<br>
				<span class="tag"
				v-for="(tag, index) in this.video.items[this.$route.params.id].snippet.tags"
				:key="index">
				{{ tag }}
				<br>
			</span>

		</div>

	</div>

	<br><br>

	<app-rating></app-rating>

	<br><br>

	<nuxt-link to="/">&#8592; назад</nuxt-link>

	<br><br>

</div>

</template>

<script>

	import appRating from '~/components/AppRating.vue'

	export default {

		created() {
			this.video = this.$store.state.youTubeApiResponce
			this.videoSrc = 'http://www.youtube.com/embed/' + this.video.items[this.$route.params.id].id + '?enablejsapi=1&origin=http://example.com';

		},
		components: {
			'app-rating': appRating
		}

	}

</script>
