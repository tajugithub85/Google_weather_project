var button = document.querySelector( '.button')
var inputvalue = document.querySelector('.inputvalue')
//var ifo = document.querySelector('.ifo')
var ame = document.querySelector('.name')
var country = document.querySelector('.cotry')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var EmptyArray = []
button.addEventListener('click', function (e) {
	e.preventDefault;
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=fcfd1ec4483a7d2c8cf3a425cf0a0070')
		.then(response => response.json())
		.then(data => {
			var name = data['name']
			var cotryvalue = data['sys']['country'];
			var tempValue = data['main']['temp'];
			var descValue = data['weather'][0]['description'];
			 //ame.innerHTML = `City: ${name}`;
			 //country.innerHTML = `country: ${cotryvalue}`;
			 //temp.innerHTML = `temp: ${tempValue}°C<span></span>`;
			 //desc.innerHTML = `desc: ${descValue}`
			var ifo = document.querySelector('.ifo');
			const parag = document.createElement('p')
			parag.innerHTML = ` 
		     <div> 
		     <p> City: ${name}</p>
		     <p> Country: ${cotryvalue}</p>
		     <p>temp:${tempValue}</p>
			<p> Desc:${descValue}</p>
			</div>
		  `;
			ifo.appendChild(parag);
			inputvalue.value = ""
			 EmptyArray.push(data);
			console.log(EmptyArray)
			
	

		})
	    
		.catch(err => alert('Information Not fund'))
	     setTimeout(function () {
		localStorage.setItem('weather info', JSON.stringify(EmptyArray));
		 
	}, 3000);
		
})
	          

//ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
	console.log('CLIENT: service worker registration in progress.');
	navigator.serviceWorker.register('sw.js').then(function() {
	  console.log('CLIENT: service worker registration complete.');
	}, function() {
	  console.log('CLIENT: service worker registration failure.');
	});
   } else {
	console.log('CLIENT: service worker is not supported.');
   }
 
 


