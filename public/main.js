if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('sw.js')
			.then(reg => console.log(reg))
			// Registration was successfu
			.catch(err => console.log('service error', err))
			
	
	
 
	})
}
		


