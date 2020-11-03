import { SyncHook } from "tapable";

class Car {
  constructor() {
    this.hooks = {
      carStarted: new SyncHook(),
      radioChanged: new SyncHook(["radioStation"]),
    };
  }

  turnOn() {
    this.hooks.carStarted.call();
  }

  setRadioStation(radioStation) {
    this.hooks.radioChanged.call(radioStation);
  }
}

const myCar = new Car();

myCar.hooks.carStarted.tap("EngineLamppppp", (a) => {
  debugger;
  console.log("car started!");
});

myCar.turnOn();

myCar.setRadioStation("200.10");
