import photoSite from '../res/port-photo.png';
import todoSite from '../res/port-todo.png';
import yahtzoo from '../res/port-yahtzoo.png';

export default [
	{
		title: 'Yahtzoo! (A Yahtzee clone)',
		url: 'https://ty-react-yahtzee.netlify.app',
		git: 'https://github.com/1010-Studios/React-Yahtzoo.git',
		createDate: 'March 2, 2021',
		picture: yahtzoo,
		alt: 'Screenshot of Yahtzoo App',
		tags: ['react', 'html', 'css', 'js'],
		desc:
			'A 2-player hotseat clone of Yahtzee. \n\n Currently there are unlimited re-rolls for ease of testing.',
	},
	{
		title: 'Photo Portfolio Template',
		url: 'https://ty-portfolio-photosite.netlify.app/#',
		git: 'https://github.com/1010-Studios/portfolio-photoSite.git',
		createDate: 'February 24, 2021',
		picture: photoSite,
		alt: 'Screenshot of Photography Template Site',
		tags: ['html', 'css', 'js', 'shapedivider.app'],
		desc:
			'A simple Photography portfolio template. \n\nI really tried to focused moreso on the design rather than the content.',
	},
	{
		title: 'Todo App',
		url: 'https://ty-odin-todo.netlify.app/',
		git: 'https://github.com/1010-Studios/DevEd-TODO.git',
		createDate: 'February 05, 2021',
		picture: todoSite,
		alt: 'Screenshot of Todo Site',
		tags: ['html', 'css', 'js', 'webpack'],
		desc:
			"A VERY simple todo app to practice functional programming & webpack format. \n\nBased on a tutorial from Dev Ed, I added extra parameters and sorting capabilities, as well as a 'Demo Mode'",
	},
];
