import impCards from '../card.json' assert { type: 'json' };
// Vue.component()

new Vue({
	el: '#cards',
	data: {
		cards: [],
	},
	methods: {},
	mounted() {
		this.cards = impCards.cards;
		console.log('this.cards: ', this.cards);
	},
});
