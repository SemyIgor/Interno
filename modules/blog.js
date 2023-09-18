import impCards from '../card.json' assert { type: 'json' };

Vue.component('blog-news-card', {
	props: ['cards'],
	data() {
		return {};
	},
	template: `
		<div class="blog-news__cards">
			<div v-for="(card, index) in cards" :key="index" class="blog-news__card">
				<img :src="card.cardImagePath" alt="cardImageAlt" class="news__image news__image1">
				<div class="news__info">
					<div class="news__text">
						<div class="news__header" v-html="card.cardHeader"></div>
					</div>
					<div class="news__data-arrow">
						<div class="news__data">{{card.cardData}}</div>
						<div class="news__arrow">
							<a href="./blog-details.html">
								<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
									<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
});

Vue.component('header-content', {
	props: ['navdata'],
	data() {
		return {};
	},
	computed: {},
	template: `
	<div class="header__content center">
		<div class="header__logo">
			<a href="./index.html">
				<img src="./img/home/logo.svg" alt="Logo-icon" class="header__logo_img">
			</a>
		</div>
		<nav class="header__nav">
			<a v-for="(item, index) in navdata" :key="index" :href="item.navHref" class="nav__item">{{item.navValue}}</a>
		</nav>

	</div>
	`,
});

Vue.component('footer-content', {
	props: ['navdata', 'footercontact', 'footerlogo'],
	data() {
		return {
			// footerSubheader: 'Pages',
		};
	},
	computed: {},
	template: `
	<div class="footer__content">
		<div class="footer__logo">
			<a :href="footerlogo[0].logoHref">
				<img :src="footerlogo[1].logoSrc" :alt="Logo-icon" class="header__logo_img">
			</a>
			<p>{{footerlogo[2].logoText}}</p>
			<div class="footer__socials">

				<img class="footer__icon" :src="footerlogo[3][0].footerSocialsSrc" :alt="footerlogo[3][0].footerSocialsAlt">
				<img class="footer__icon" :src="footerlogo[3][1].footerSocialsSrc" :alt="footerlogo[3][1].footerSocialsAlt">
			</div>
		</div>
		<nav class="footer__nav">
			<h3 class="footer__subheader">{{navdata[0].subheader}}</h3>
			<a v-for="(item, index) in navdata[1]" :key="index" :href="item.navHref" class="nav__item">{{item.navValue}}</a>
		</nav>
		<div class="footer__contact">
			<h3 class="footer__subheader contact">{{footercontact.subheader}}</h3>
			<p class="address">{{footercontact.address}}</p>
			<p class="email">{{footercontact.email}}</p>
			<p class="phone">{{footercontact.phone}}</p>
		</div>
	</div>
	`,
});

const blogNews = new Vue({
	el: '#blog-news__content',
	data: {
		cards: [],
	},
	methods: {},
	beforeMount() {
		this.cards = impCards.cards;
		console.log('this.cards: ', this.cards);
	},
});

const header = new Vue({
	el: '#header',
	data: {
		navData: [
			{ navHref: './index.html', navValue: 'Home' },
			{ navHref: '#', navValue: 'Project' },
			{ navHref: './blog.html', navValue: 'Blog' },
		],
	},
	methods: {},
});

const footer = new Vue({
	el: '#footer',
	data() {
		return {
			navData: [
				{ subheader: 'Pages' },
				[
					{ navHref: './index.html', navValue: 'Home' },
					{ navHref: '#', navValue: 'Project' },
					{ navHref: './blog.html', navValue: 'Blog' },
				],
			],
			footerContact: {
				subheader: 'Contact',
				address: '55 East Birchwood Ave. Brooklyn, New York 11201',
				email: 'contact@interno.com',
				phone: '(123) 456 - 7890',
			},
			footerLogo: [
				{ logoHref: './index.html' },
				{ logoSrc: './img/home/logo.svg' },
				{
					logoText:
						'It is a long established fact that a reader will be distracted lookings.',
				},
				[
					{
						footerSocialsSrc: './img/home/twitter .svg',
						footerSocialsAlt: 'Twitter Icon',
					},
					{
						footerSocialsSrc: './img/home/linkedin.svg',
						footerSocialsAlt: 'Linked In Icon',
					},
				],
			],
		};
	},
});
