function Car(make, model, year, startStatus){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
    if(startStatus === 'yes'){
        this.isRunning = true;
    }else{
        this.isRunning = false;
    };

    this.startStop = function(){
        if(this.isRunning === true){
            this.isRunning = false;
            alert("Engine Stopped!");
            return;
        }else{
            this.isRunning = true;
            alert("Engine Started!");
        }
    }
}

let civicStartStatus = prompt("Is your Civic on or off?");
let teslaStartStatus = prompt("Is your Tesla on or off?");

let myTesla = new Car("Tesla", "Model 3", 2023, civicStartStatus);
let myCivic = new Car("Toyota", "Corolla", 2021, teslaStartStatus);
console.log(myCivic);
console.log(myTesla);
myTesla.startStop();
myCivic.startStop();