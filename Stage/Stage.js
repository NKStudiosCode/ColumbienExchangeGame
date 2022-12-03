/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download", "./Stage/costumes/download.png", { x: 0, y: 0 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 411.31445320607,
        y: 267.9969969969969
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
  }
}
