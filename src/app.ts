import { Application } from 'pixi.js';
import { Assets } from '@pixi/assets';
import { MainScene } from './scenes/main';
import { APP_HEIGHT, APP_MARGIN } from './consts';
import { autumnDance } from './songs/autumnDance';
import { funkyLove } from './songs/funkyLove';
import { SelectSongScene } from './scenes/selectSong';
import { Song } from './songs/song';
import { PauseScene } from './scenes/pause';
import { keyboard } from './utils/keyboard';
import { OptionsScene } from './scenes/options';
import { AppOptions } from './options';
import { EndingScene } from './scenes/ending';
import { Statistics } from './utils/statistics';

const app = new Application({
  width: Math.min(window.innerWidth - 2 * APP_MARGIN, 1280),
  height: APP_HEIGHT,
  autoStart: false,
});
Assets.load([
  'images/arrow.png',
  'images/arrow_hit.png',
  'images/pause.png',
  'images/play.png',
  'images/resume1.png',
  'images/resume2.png',
  'images/resume3.png',
  'images/options.png',
  'images/stick-miss.png',
  'images/stick-left.png',
  'images/stick-down.png',
  'images/stick-up.png',
  'images/stick-right.png',
  'images/checkbox-off.png',
  'images/checkbox-on.png',
]).then(loadFirstScreen);

const songs: Song[] = [autumnDance, funkyLove];

const options: AppOptions = { volume: 0.08, touchPadEnabled: false, trollModeEnabled: false };

let selectSongScene: SelectSongScene;
let optionsScene: OptionsScene;
let mainScene: MainScene;
let pauseScene: PauseScene;
let endingScene: EndingScene;
let mainSceneStarted = false;

function loadFirstScreen() {
  selectSongScene = new SelectSongScene(app.view.width, app.view.height, songs, enterOptions, onSongSelect);
  optionsScene = new OptionsScene(app.view.width, app.view.height, options, exitOptions);
  app.stage.addChild(selectSongScene.container);
  app.start();
}

function onSongSelect(song: Song) {
  app.stop();
  app.stage.removeChild(selectSongScene.container);
  if (options.trollModeEnabled) { 
    app.view.style.position = 'absolute';
    app.view.style.left = '50%';
    app.view.style.top = '50%';
    app.view.style.transform = 'translate(-50%, -50%)';
  }
  pauseScene = new PauseScene(app.view.width, app.view.height, onResume, () => {
    app.stop();
    app.stage.removeChild(pauseScene.container);
    app.stage.removeChild(mainScene.container);
    loadFirstScreen();
  });
  mainScene = new MainScene(app.view.width, app.view.height, song, options, onPause, onEnd);
  mainSceneStarted = false;
  app.stage.addChild(mainScene.container);

  keyboard(' ').press = () => {
    if (pauseScene.isPaused()) {
      pauseScene.resume();
    } else {
      mainScene.pause();
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (mainScene !== undefined && document.hidden) {
      mainScene.pause();
    }
  });

  app.start();
}

function onPause() {
  app.stage.addChild(pauseScene.container);
  pauseScene.pause();
}

function onResume() {
  app.stage.removeChild(pauseScene.container);
  mainScene.resume();
}

function enterOptions() {
  app.stage.addChild(optionsScene.container);
  app.stage.removeChild(selectSongScene.container);
}

function exitOptions() {
  app.stage.addChild(selectSongScene.container);
  app.stage.removeChild(optionsScene.container);
}

function onEnd(songName: string, statistics: Statistics) {
  mainScene.pause();
  app.stage.removeChild(mainScene.container);
  app.stage.removeChild(pauseScene.container);
  mainScene = undefined;

  endingScene = new EndingScene(app.view.width, app.view.height,
    songName, statistics, () => {
      app.stop();
      app.stage.removeChild(endingScene.container);
      loadFirstScreen();
  });
  app.stage.addChild(endingScene.container);
}

app.ticker.add((delta: number) => {
  if (mainScene !== undefined) {
    if (!mainSceneStarted) {
      mainSceneStarted = true;
      mainScene.start();
    }
    mainScene.update(delta);
  }
});

export default app;
