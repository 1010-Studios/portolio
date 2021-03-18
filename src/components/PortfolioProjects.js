import photoSite from '../res/port-photo.png';
import todoSite from '../res/port-todo.png';
import yahtzoo from '../res/port-yahtzoo.png';
import calculator from '../res/port-calc.png';
import drive from '../res/port-drive.png';

export default [
	{
		title: 'Drive Clone',
		url: 'https://drive-clone.netlify.app',
		git: 'https://github.com/1010-Studios/drive-clone.git',
		createDate: 'March 16, 2021',
		picture: drive,
		alt: 'Screenshot of Drive clone',
		tags: ['react', 'bootstrap', 'firebase', 'html', 'css', 'js'],
		desc:
			'A clone of Google Drive.\n\n Testing Credentials: \nUser: Test3@test.ca\nPass: test12',
	},
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
		title: 'JS Calculator',
		url: 'https://ty-odinproject-calculator.netlify.app/',
		git: 'https://github.com/1010-Studios/Odin-Project----Calculator.git',
		createDate: 'December 31, 2020',
		picture: calculator,
		alt: 'Screenshot of Odin Project - Calculator',
		tags: ['html', 'css', 'js'],
		desc:
			'A calculator app with keyboard functionality. \n\n Created based on specs from The Odin Project',
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
