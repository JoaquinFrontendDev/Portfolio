export const products = [
	{
		id: 1,
		title: 'Task Time App',
		description: `Todo-List made on React Js (first project with that tech), wanted to test my skills and know where I can upgrade my knowledge. It's styled with pure CSS, a CRUD that has no Back-End but allows you to temporarily save your tasks in Local Storage. Either way if you delete your task o tasks by mistake, the re-do button with do the trick. Of course has lots of weak points but it's a step up from "Meeting Point"`,
		img: [require('./assets/images/todolist.jpg')],
		link: 'https://tasktimeapp.netlify.app/',
		github: 'https://github.com/SintaxisDev/Todo-List-App',
	},
	{
		id: 2,
		title: 'Cooky App',
		description: `This SPA consumes EDAMAM API, most precisely the 'Recipe Search API', and renders a highly atomic part of each recipe (label, image, ingredients, calories). 
		Recipes also can be filtered by main ingredient and dish type. The API itself has some limitations regarding it's filters, and was a nice challenge for me to use it. 
		This APP is build with vanilla React Js and Styled Components, no frameworks.`,
		img: [require('./assets/images/cooky-app.jpg')],
		link: 'https://cookyapp.netlify.app/',
		github: 'https://github.com/SintaxisDev/Cooky-Recipe-App',
	},
	{
		id: 3,
		title: 'Weather App',
		description: `Pretty straight foward SPA, made in a day maybe two, super simple, it does what it needs to do. No challenges on this one, used OpenWeatherMap, easy to use, very handy API. This quick project was one of my 3/4 fundamentals to learn React, and wanted to make it before I start learning React Native. Maybe in the future some tweaks will be done, but the main idea wasn't anything fancy but pragmatic`,
		img: [require('./assets/images/weatherapp.jpg')],
		link: 'https://simpleweather-forecast.netlify.app/',
		github: 'https://github.com/SintaxisDev/WeatherApp',
	},
]
