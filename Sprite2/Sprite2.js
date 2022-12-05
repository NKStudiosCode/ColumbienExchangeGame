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
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 357.45644729201854,
        y: 261.3603511959225
      }),
      new Costume("costume3", "./Sprite2/costumes/costume3.svg", {
        x: 358.95794879352,
        y: 261.3603511959225
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.moveAhead();
    this.costume = "costume1";
    yield* this.askAndWait(
      "Use arrow keys to move the purple figure to the reagon were tobacco originated. Then Press space. Press Enter to continue"
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
        yield* this.askAndWait(
          "Tobacco began being used in in North and South America for mainly religious purposes! OK to continue"
        );
        yield* this.askAndWait(
          "How many years ago approximately was tobacco discovered "
        );
        if (this.answer == 8000) {
          yield* this.sayAndWait("Correct!", 2);
          yield* this.askAndWait(
            "Tobacco was found about 8000 years ago. Enter to continue"
          );
          yield* this.askAndWait(
            "TRUE or FALSE: Tobacco costs the world about trillions each year in health bills? t=true f=false "
          );
          if (this.answer == "t") {
            yield* this.sayAndWait("Correct", 2);
            yield* this.askAndWait(
              "TRUE or FALSE: Tobacco was NOT considered medicine in the 18th century? t=true f=false"
            );
            if (this.answer == "f") {
              this.say("ONE LAST QUESTION! ALMOST DONE");
              yield* this.askAndWait(
                "True or False: Tobacco was a huge part of the economy? It got traded to Europe and Africa? "
              );
              if (this.answer == "t") {
                this.size = 0;
                this.say("YOU WIN");
              } else {
                this.size = 0;
                this.say("YOU LOOSE");
              }
            } else {
              this.costume = "costume2";
              this.goto(-84, 25);
              this.costume = "costume2";
              /* TODO: Implement stop all */ null;
            }
          }
          if (!(this.answer == "t")) {
            this.costume = "costume2";
            this.goto(-84, 25);
            this.costume = "costume2";
            /* TODO: Implement stop all */ null;
          }
        }
        if (!(this.answer == 8000)) {
          this.costume = "costume2";
          this.goto(-84, 25);
          this.costume = "costume2";
          /* TODO: Implement stop all */ null;
        }
      }
      if (this.keyPressed("space")) {
        this.costume = "costume2";
        this.goto(-84, 25);
        this.costume = "costume2";
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
