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

Vue.component('tags-menu', {
	props: ['tags'],
	data() {
		return {};
	},
	methods: {
		activate() {},
	},
	template: `
	<div class="tags__item">{{tags.name}}</div>
   `,
});

Vue.component('blog', {
	props: ['short'],
	template: `
	<li class="short__blog">{{short.header}}</li>
	`,
});

const app4 = new Vue({
	el: '#maintags',
	data: {
		tagsArray: [
			{ id: 1, name: 'Kitchen', activated: '' },
			{ id: 2, name: 'Bedroom', activated: 'tags__item_active' },
			{ id: 3, name: 'Building', activated: '' },
			{ id: 4, name: 'Architecture', activated: '' },
			{ id: 5, name: 'Kitchen Planning', activated: '' },
		],
	},
	methods: {},
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
					'Blog #5. Skilled Existing Company Modification Commercial Kitchen Planning And Designing, Pan India',
				image:
					'https://www.grundig.com/ktchnmag/wp-content/uploads/2017/03/GRUNDIG-KTCHN-MAG_What-Is-Kitchen-Design-1_Unsplash.jpg',
				alt: 'Kitchen Planning Image',
				date: '25 October,2023',
				text1:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt et? Assumenda adipisci iure, veniam beatae vero rem unde quod ex sed natus sapiente. Iure, et ad voluptatem nihil sequi itaque. Magni debitis suscipit placeat aut? Ipsa maxime tempora expedita ea optio nostrum sequi.',
				text2:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatibus, eaque qui deleniti tempora rem veritatis mollitia.',
				tag: 'Building',
			},
		],
	},
});
