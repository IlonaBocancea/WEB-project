new Vue({
	el: "#app",
	data: {

		x: 0, 
		y: 0,
		sum: 0,
	},
	methods:{
		sumXY(){
			this.sum = Number(this.x) + Number(this.y);
		}
	}
});

new Vue({
	el: "#app2",
});

var myElement = document.getElementById("intro");
document.getElementById("container").innerHTML = "verde" + "background-color";