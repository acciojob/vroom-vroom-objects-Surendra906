// Complete the js code
function Car(make, model) {
	this._make=make;
	this._model=model

	getMakeModel(){
		return `$this._make+" "+$this._model`;
	}
	
}

function SportsCar(make, model, topSpeed) {
	constructor(make,model){
		super(make,model){
			this._topSpeed=topSpeed;
		}
	}
	getTopSpeed(){
		return this_topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
