

class Worker {
	constructor(name, surname, hourRate, hours) {
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
		var hours = 176;
        var hourRate = 10;
}

	}
	
	

let worker = new Worker('Ion', 'Creanga', 10, 176);  
console.log(worker.name); 
console.log(worker.surname);  
console.log(worker.hourRate);  
console.log(worker.hours);  
console.log(worker.getSalary('hours'+'hourRate')); 

