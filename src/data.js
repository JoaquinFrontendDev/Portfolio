export const products = [
	{
		id: 1,
		title: 'Meeting Point',
		description: `Boiler plate website made for my father, he has a camping and needed a page. Funny thing, it was my first ever deployed code, did it when I hade just 1 month studying, knew some HTML, CSS a couple of JavaScript code lines. Watching it now, I definitely improved my desings; either way it will always be my first "Hello World" and that's why it's in my portfolio`,
		img: [require('./assets/images/meeting-point.jpg')],
		link: 'https://meeting-point.netlify.app',
		github: 'https://github.com/SintaxisDev/Meeting-Point',
	},
	{
		id: 2,
		title: 'Task Time App',
		description: `Todo-List made on React Js (first project with that tech), wanted to test my skills and know where I can upgrade my knowledge. It's styled with pure CSS, a CRUD that has no Back-End but allows you to temporarily save your tasks in Local Storage. Either way if you delete your task o tasks by mistake, the re-do button with do the trick. Of course has lots of weak points but it's a step up from "Meeting Point"`,
		img: [require('./assets/images/todolist.jpg')],
		link: 'https://tasktimeapp.netlify.app/',
		github: 'https://github.com/SintaxisDev/Todo-List-App',
	},
	{
		id: 3,
		title: 'Cooky App',
		description: `This SPA consumes EDAMAM API, most precisely the 'Recipe Search API', and renders a highly atomic part of each recipe (label, image, ingredients, calories). 
		Recipes also can be filtered by main ingredient and dish type. The API itself has some limitations regarding it's filters, and was a nice challenge for me to use it. 
		This APP is build with vanilla React Js and Styled Components, no frameworks.`,
		img: [require('./assets/images/cooky-app.jpg')],
		link: 'https://cookyapp.netlify.app/',
		github: 'https://github.com/SintaxisDev/Cooky-Recipe-App',
	},
]
