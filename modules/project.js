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
