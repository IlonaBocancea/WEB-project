class Worker {
	constructor(name, surname, hourRate, hours) {
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
}
let worker = new Worker(Ion, 'Creangă', 10, 176); 
console.log(worker.name); 
console.log(worker.surname);  
console.log(worker.hourRate);  
console.log(worker.hours);  
console.log(worker.getSalary()); 
