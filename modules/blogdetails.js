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

Vue.component('blog-details', {
	props: ['ample'],
	template: `
	<article class="blogs__ample">
	<h2 class="blogs__title">{{ample[0].header}}</h2>
	<div class="blogs__image">
		<img :src=ample[0].image :alt=ample[0].alt>
	</div>
	<div class="blogs-date-crumbles">
	<span class="blogs__date">{{ample[0].date}}</span>
	<span class="blogs__crumbles">Interior / Home / Decore</span>
</div>
<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
	popular
	belief.There are
	many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
	some form, by
	injecthumour, or randomised words which don't look even slightly believable.</p>
	<p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
	repeat predefined
	chunks as necessary.</p>
	</article>
   `,
});

Vue.component('blog', {
	props: ['short'],
	template: `
	<li class="short__blog"><a href="#">{{short.header}}</a></li>
	`,
});

Vue.component('blogs-list', {});

Vue.component('tags-menu', {
	props: ['tags'],
	methods: {
		activate() {
			this.$emit('activate-it', this.tags.id);
		},
	},
	template: `
	<div class="tags__item" @click="activate">{{tags.name}}</div>
   `,
});

const app1 = new Vue({
	el: '#ample',
	data: {
		blogs: [
			{
				id: '001',
				header:
					'Blog #1. Best Kitchen Design Ideas with Beautiful Photo Gallery',
				image: './img/blog-details/blogs-ample1.png',
				alt: 'Kitchen Image',
				date: '26 December,2022',
				text1:
					"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to opular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
				text2:
					'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
				tag: 'Kitchen',
			},
			{
				id: '002',
				header:
					'Blog #2. Beautiful Bedroom Ideas from the Worlds Top Designers',
				image:
					'https://www.thespruce.com/thmb/vf_MEDifLRzzmQNjMyUDR1FGA14=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/tips-for-decorating-a-beautiful-bedroom-1976169-hero-e960fbb8311c4b9b875a1813962d34eb.jpg',
				alt: 'Bedroom Image',
				date: '12 April,2023',
				text1:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque enim, labore sint eius distinctio quibusdam magni, laborum libero asperiores in. Recusandae vero eius et rem accusamus tempora dolor eos? Nisi fuga architecto, tempora porro laudantium corporis omnis harum odit!',
				text2:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo impedit molestiae aut? Aliquam, excepturi fugiat reprehenderit ea iure ipsam nulla earum quasi quo labore.',
				tag: 'Bedroom',
			},
			{
				id: '003',
				header:
					'Blog #3. New downtown Toronto building razes the roof to add new floors',
				image:
					'https://dreamcivil.com/wp-content/uploads/2022/07/appartment.webp',
				alt: 'Architecture Image',
				date: '25 June,2023',
				text1:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, inventore eos. Ipsam ducimus id maxime qui enim dolorem rem numquam nesciunt. Necessitatibus debitis amet molestiae nemo doloremque animi repellendus quisquam, voluptatem, cupiditate delectus impedit autem?',
				text2:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam et eos repellendus voluptatem distinctio impedit.',
				tag: 'Architecture',
			},
			{
				id: '004',
				header:
					'Blog #4. An architect asked AI to design skyscrapers of the future. This is what it proposed',
				image:
					'https://img.buildings.com/files/base/ebm/buildings/image/2023/07/179_Lincoln_1_Exterior.64b03dedb967f.png?auto=format,compress&fit=fill&fill-color=white&h=278&w=500&q=45',
				alt: 'Building Image',
				date: '25 June,2023',
				text1:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci molestiae quia corrupti cumque soluta temporibus dolorem consequuntur incidunt vel ea officia sint nemo enim nostrum, et voluptas architecto blanditiis? Molestiae illo pariatur sapiente delectus suscipit sed nulla corporis alias culpa!',
				text2:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi obcaecati mollitia libero ullam quasi sit hic dicta, aperiam delectus illum sunt!',
				tag: 'Building',
			},
			{
				id: '005',
				header:
					'Blog #5. Remarkable Buildings That Use Trees as a Design Element',
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architecturaldigest.com%2Fstory%2F5-remarkable-buildings-that-use-trees-as-design-element&psig=AOvVaw0iF7Fz00U7G6iREAiCWVxg&ust=1694455652120000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjNrJCr0aCBAxXDGhAIHVA3CwkQjRx6BAgAEAw',
				alt: 'Building Image',
				date: '25 October,2023',
				text1:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt et? Assumenda adipisci iure, veniam beatae vero rem unde quod ex sed natus sapiente. Iure, et ad voluptatem nihil sequi itaque. Magni debitis suscipit placeat aut? Ipsa maxime tempora expedita ea optio nostrum sequi.',
				text2:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatibus, eaque qui deleniti tempora rem veritatis mollitia.',
				tag: 'Building',
			},
			{
				id: '006',
				header:
					'Blog #6. Skilled Existing Company Modification Commercial Kitchen Planning And Designing, Pan India',
				image:
					'https://www.grundig.com/ktchnmag/wp-content/uploads/2017/03/GRUNDIG-KTCHN-MAG_What-Is-Kitchen-Design-1_Unsplash.jpg',
				alt: 'Kitchen Planning Image',
				date: '25 October,2023',
				text1:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt et? Assumenda adipisci iure, veniam beatae vero rem unde quod ex sed natus sapiente. Iure, et ad voluptatem nihil sequi itaque. Magni debitis suscipit placeat aut? Ipsa maxime tempora expedita ea optio nostrum sequi.',
				text2:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatibus, eaque qui deleniti tempora rem veritatis mollitia.',
				tag: 'Kitchen Planning',
			},
		],
		tagsArray: [
			{ id: 1, name: 'Kitchen', activated: '' },
			{ id: 2, name: 'Bedroom', activated: '' },
			{ id: 3, name: 'Building', activated: '' },
			{ id: 4, name: 'Architecture', activated: '' },
			{ id: 5, name: 'Kitchen Planning', activated: '' },
		],
		tagsIndex: 0,
	},
	computed: {
		filteredBlogs() {
			let arr = [];
			if (!this.tagsIndex) {
				arr = this.blogs.filter((blog) => true);
			} else {
				arr = this.blogs.filter(
					(blog) => blog.tag == this.tagsArray[this.tagsIndex - 1].name
				);
			}
			return arr;
		},
		cloneTagsArray() {
			const arr = Object.assign([], this.tagsArray);
			return arr;
		},
	},
	methods: {
		chooseTag(id) {
			// Обнуляем активность кнопок выбора тегов
			this.tagsArray.forEach((element) => {
				element.activated = '';
			});
			// Если нажали на уже выбранный тег
			if (this.tagsIndex == id) {
				this.tagsIndex = 0;
				// Если нажали на невыбранный тег
			} else {
				this.tagsIndex = id;
				this.tagsArray[id - 1].activated = 'tags__item_active';
			}
		},
	},
});

const header = new Vue({
	el: '#header',
	data: {
		navData: [
			{ navHref: './index.html', navValue: 'Home' },
			{ navHref: './project.html', navValue: 'Project' },
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
					{ navHref: './project.html', navValue: 'Project' },
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
