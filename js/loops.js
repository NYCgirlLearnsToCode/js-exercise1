var cities = ['New York', 'Los Angeles', 'Boston', 'Seattle', 'Texas'];
var ul = document.createElement('ul');
for (var i=0; i < cities.length; i++ ){
		var li = document.createElement('li');
		li.innerHTML = cities[i];
		ul.appendChild(li);
		
}
document.body.appendChild(ul);