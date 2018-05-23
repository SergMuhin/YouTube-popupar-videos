<template>

	<div v-if="!showRating">

		<p>
			1 <input v-model="rating" type="radio" name="rating" value="1">
			2 <input v-model="rating" type="radio" name="rating" value="2">
			3 <input v-model="rating" type="radio" name="rating" value="3">
			4 <input v-model="rating" type="radio" name="rating" value="4">
			5 <input v-model="rating" type="radio" name="rating" value="5">
		</p>

		<br>

		<div class="button" @click.prevent="rateVideo">Оценить</div>

	</div>

	<div v-else>
		<p>Ваша оценка: <b>{{ videos[videoId].rating }}</b></p>
		<br>
		<div class="button" @click.prevent="clearRate">Поменять</div>
	</div>

</template>

<script>

	export default {

		created() {
			if(this.$store.getters.youTubeApiResponce.items[this.$route.params.id].rating) {
				this.showRating = true
			}
		},
		data() {
			return {
				rating: 5,
				videoId: this.$route.params.id,
				videos: this.$store.getters.youTubeApiResponce.items,
				showRating: false
			}
		},
		methods: {
			rateVideo(context) {
				let payload = {
					videoId: this.videoId,
					rating: +this.rating
				}
				this.$store.dispatch('rateVideo', payload)
				this.showRating = true;
			},
			clearRate() {
				this.showRating = false;
				this.$store.dispatch('clearRate', this.videoId)
			}
		}
	}

</script>