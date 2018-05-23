module.exports = {
/*
** Headers of the page
*/
head: {
	title: 'test',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	],
	script: [
		{src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"},
		{src: "https://apis.google.com/js/api.js"}
	]
},
css: ['~/assets/css/styles.css'],
/*
** Customize the progress bar color
*/
loading: { color: '#3B8070' },
loadingIndecator: {
	name: 'circle',
	color: '#673ab7',
},
transition: 'page',
/*
** Build configuration
*/
build: {
/*
** Run ESLint on save
*/
extend (config, { isDev, isClient }) {
	if (isDev && isClient) {
		config.module.rules.push({
			enforce: 'pre',
			test: /\.(js|vue)$/,
			loader: 'eslint-loader',
			exclude: /(node_modules)/
		})
	}
}
}
}
