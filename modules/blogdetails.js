Vue.component('blog-details', {
	props: ['ample'],
	template: `
   `,
});

new Vue({
	el: '#ample',
	data: {
		blogs: [
			{
				id: '001',
				header: 'Blog #1. Let’s Get Solution for Building Construction Work',
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
				header: 'Blog #2. Let’s Get Solution for Building Construction Work',
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
				header: 'Blog #3. Let’s Get Solution for Building Construction Work',
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
				header: 'Blog #4. Let’s Get Solution for Building Construction Work',
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
				header: 'Blog #5. Let’s Get Solution for Building Construction Work',
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
