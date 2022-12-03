/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 102.39999389648438,
        y: 86.39999389648438
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    yield* this.sayAndWait(
      "Use arrow keys to move me to the reagon were tobacco originated. Then Press space",
      2
    );
    /* TODO: Implement sensing_setdragmode */ null;
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 10;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -10;
      }
      if (
        this.touching(this.sprites["Sprite3"].andClones()) &&
        this.keyPressed("space")
      ) {
        yield* this.sayAndWait("Correct", 2);
        yield* this.sayAndWait(
          "Tobacco began being used in in North and South America for mainly religious purposes! ",
          2
        );
        yield* this.askAndWait(
          "How many years approximately was tobacco invented "
        );
        if (this.answer == 8000) {
          yield* this.sayAndWait("Correct!", 2);
        }
        if (!(this.answer == 8000)) {
          yield* this.sayAndWait("Try again", 2);
        }
      }
      if (this.keyPressed("space")) {
        yield* this.sayAndWait("Try Again!", 2);
      }
      yield;
    }
  }
}
