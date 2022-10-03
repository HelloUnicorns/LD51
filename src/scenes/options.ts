import { Graphics, Sprite, Text } from 'pixi.js';
import app from '../app';
import { MAX_VOLUME } from '../consts';
import { AppOptions } from '../options';
import { createSlider } from '../sprites/slider';
import { Scene } from './scene';

export class OptionsScene extends Scene {
  constructor(width: number, height: number, appOptions: AppOptions, exitOptionsCallback: () => void) {
    super(width, height);

    const graphics = new Graphics();
    graphics.name = 'mask';
    graphics.beginFill(0xffffff);
    graphics.drawRect(0, 0, width, height);
    graphics.tint = 0x000000;
    this.container.addChild(graphics);

    const options = Sprite.from('images/options.png');
    options.scale.set(0.25);
    options.anchor.set(1, 1);
    options.position.set(this.width, this.height);
    options.on('pointerdown', exitOptionsCallback);
    options.interactive = true;
    options.buttonMode = true;
    this.container.addChild(options);

    const header = new Text('Options:', {
      fontFamily: 'Arial',
      fontSize: this.height / 12,
      fill: 0xffffff,
      align: 'center',
    });
    header.anchor.set(0.5, 0);
    header.position.set(width / 2, height / 6);
    this.container.addChild(header);

    const volumeSlider = createSlider(width, height, appOptions.volume / MAX_VOLUME, (volume: number) => {
      appOptions.volume = volume * MAX_VOLUME;
    });
    volumeSlider.position.set(width / 2, height / 2);
    this.container.addChild(volumeSlider);
    const volumeLabel = new Text('Volume:', {
      fontFamily: 'Arial',
      fontSize: this.height / 15,
      fill: 0xffffff,
      align: 'center',
    });
    volumeLabel.anchor.set(0.5);
    volumeLabel.position.set(width / 2, height / 2 - volumeSlider.height);
    this.container.addChild(volumeLabel);
  }
}
