import impCards from '../json/project_card.json' assert { type: 'json' };

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

Vue.component('project-face-content', {
	props: ['projfacetab'],
	data() {
		return {};
	},
	template: `
	<div class="project-face__content">
		<div class="project-face__tab">
			<h2 class="project-face__title">{{projfacetab[0].title}}</h2>
			<p class="project-face__anchor"><a :href="projfacetab[1][0].href">{{projfacetab[1][0].name}}</a> / <a :href="projfacetab[1][1].href">{{projfacetab[1][1].name}}</a></p>
		</div>
	</div>
	`,
});

Vue.component('cards-module-card', {
	props: ['cards'],
	data() {
		return {};
	},
	template: `
		<div class="cards-module__cards">
			<div v-for="(card, index) in cards" :key="index" class="cards-module__card">
				<img :src="card.cardImagePath" alt="cardImageAlt" class="cards-module__image cards-module__image1">
				<div class="cards-module__info">

					<div class="cards-module__text">
						<div class="cards-module__header" v-html="card.cardHeader">
						</div>
						
						<div class="cards-module__subtext">	{{card.cardSubtext}}
						</div>
					</div>

					<div class="cards-module__arrow">
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
	`,
});

Vue.component('categories-module', {
	props: ['categories'],
	data() {
		return {
			index: 0,
		};
	},
	computed: {},
	methods: {},
	template: `
	<div class="categories">
		<div v-for="category in categories" :key="category.id" class="categories__item"  @click="$emit('activate-it', category.id)" :class="category.activated">{{category.name}}</div>
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
				<img :src="footerlogo[1].logoSrc" alt="Logo-icon" class="header__logo_img">
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

const projectFace = new Vue({
	el: '#project-face',
	data: {
		projFaceTab: [
			{ title: 'Our Project' },
			[
				{ name: 'Home', href: './index.html' },
				{ name: 'Project', href: './project.html' },
			],
		],
	},
});

const projectNews = new Vue({
	el: '#cards-module__content',
	data: {
		cards: [],
		tagsArray: [
			{ id: 1, name: 'Bathroom', activated: '' },
			{ id: 2, name: 'Bed Room', activated: '' },
			{ id: 3, name: 'Kitchen', activated: '' },
			{ id: 4, name: 'Living Area', activated: '' },
		],
		tagsIndex: 0,
	},
	computed: {
		// Фильтруем карточки согласно выбранному табу
		filteredCards() {
			let arr = [];
			if (!this.tagsIndex) {
				arr = this.cards.filter((card) => true);
			} else {
				arr = this.cards.filter(
					(card) => card.category == this.tagsArray[this.tagsIndex - 1].name
				);
			}
			return arr;
		},
		// Клонируем массив табов для того, чтобы не менять исходный массив при присвоении свойства =active=
		cloneTagsArray() {
			const arr = Object.assign([], this.tagsArray);
			return arr;
		},
	},
	methods: {
		// 1. Выделяем цветом нажатый таб. 2. Меняем переменную индекса таба соответственно нажатию. 3. Изменяем у выбранного таба в массиве (не в клоне!) табов свойство =activated=
		chooseTag(id) {
			console.log('id: ', id);

			// Обнуляем активность кнопок выбора табов
			this.tagsArray.forEach((element) => {
				console.log(element.activated, this.tagsIndex);
				element.activated = '';
			});
			// Если нажали на уже выбранный таб
			if (this.tagsIndex == id) {
				this.tagsIndex = 0;
				// Если нажали на невыбранный таб
			} else {
				this.tagsIndex = id;
				this.tagsArray[id - 1].activated = 'categories__item_active';
			}
		},
	},
	beforeMount() {
		this.cards = impCards.cards;
	},
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
