import { beatsToSpawnTime, Song } from './song';

export const autumnDance: Song = beatsToSpawnTime({
  name: 'autumn-dance',
  source: 'music/autumn_dance.mp3',
  baseArrowSpeed: 1.6,
  bpm: 106 / 2,
  fadeOutStart: 140,
  fadeOutEnd: 144,
  end: 144,
  notes: [
    // Section 1: only bass and snare
    { time: 0, direction: 'left' },
    { time: 0, direction: 'up' },
    { time: 0.5, direction: 'right' },
    { time: 1, direction: 'down' },
    { time: 2, direction: 'left' },
    { time: 2, direction: 'up' },
    { time: 2.25, direction: 'down' },
    { time: 2.75, direction: 'right' },
    // Again
    { time: 4, direction: 'right' },
    { time: 4, direction: 'up' },
    { time: 4.5, direction: 'left' },
    { time: 5, direction: 'down' },
    { time: 6, direction: 'right' },
    { time: 6, direction: 'up' },
    { time: 6.25, direction: 'down' },
    { time: 6.75, direction: 'left' },
    // Again
    { time: 8, direction: 'left' },
    { time: 8, direction: 'up' },
    { time: 8.5, direction: 'right' },
    { time: 9, direction: 'down' },
    { time: 10, direction: 'left' },
    { time: 10, direction: 'up' },
    { time: 10.25, direction: 'down' },
    { time: 10.75, direction: 'right' },

    // Section 2: electronic sounds added
    { time: 12, direction: 'right' },
    { time: 12.5, direction: 'left' },
    { time: 13.25, direction: 'right' },
    { time: 14, direction: 'left' },
    { time: 14.75, direction: 'right' },
    { time: 15.25, direction: 'left' },
    { time: 15.75, direction: 'down' },
    // Again
    { time: 16, direction: 'right' },
    { time: 16.5, direction: 'left' },
    { time: 17.25, direction: 'right' },
    { time: 18, direction: 'left' },
    { time: 18.75, direction: 'right' },
    { time: 19.25, direction: 'left' },
    { time: 19.75, direction: 'down' },
    // Again
    { time: 20, direction: 'right' },
    { time: 20.5, direction: 'left' },
    { time: 21.25, direction: 'right' },
    { time: 22, direction: 'left' },
    { time: 22.75, direction: 'right' },
    { time: 23.25, direction: 'left' },
    { time: 23.75, direction: 'down' },
    // Again
    { time: 24, direction: 'right' },
    { time: 24.5, direction: 'left' },
    { time: 25.25, direction: 'right' },
    { time: 26, direction: 'left' },
    { time: 26.75, direction: 'right' },
    { time: 27.25, direction: 'left' },
    { time: 27.75, direction: 'down' },

    // Section 3: flute added
    { time: 28, direction: 'right' },
    { time: 28.75, direction: 'left' },
    { time: 29.5, direction: 'right' },
    { time: 29.75, direction: 'left' },
    { time: 30.125, direction: 'right' },
    { time: 31.5, direction: 'left' },
    { time: 32, direction: 'right' },
    { time: 32.75, direction: 'left' },
    // More hirtutim
    { time: 36, direction: 'right' },
    { time: 36.75, direction: 'left' },
    { time: 37.5, direction: 'right' },
    { time: 37.75, direction: 'left' },
    { time: 38.125, direction: 'right' },
    { time: 39.5, direction: 'left' },
    { time: 40, direction: 'right' },
    { time: 40.75, direction: 'left' },
    // more hirtutim
    { time: 44, direction: 'right' },
    { time: 44.75, direction: 'left' },
    { time: 45.5, direction: 'right' },
    { time: 45.75, direction: 'left' },
    { time: 46.125, direction: 'right' },
    { time: 47.5, direction: 'left' },
    { time: 48, direction: 'right' },
    { time: 48.75, direction: 'left' },
    // more hirtutim
    { time: 52, direction: 'right' },
    { time: 52.75, direction: 'left' },
    { time: 53.5, direction: 'right' },
    { time: 53.75, direction: 'left' },
    { time: 54.125, direction: 'right' },
    { time: 55.5, direction: 'left' },

    // Section 2 again
    { time: 56, direction: 'right' },
    { time: 56.5, direction: 'left' },
    { time: 57.25, direction: 'right' },
    { time: 58, direction: 'left' },
    { time: 58.75, direction: 'right' },
    { time: 59.25, direction: 'left' },
    { time: 59.75, direction: 'down' },
    // Again
    { time: 60, direction: 'right' },
    { time: 60.5, direction: 'left' },
    { time: 61.25, direction: 'right' },
    { time: 62, direction: 'left' },
    { time: 62.75, direction: 'right' },
    { time: 63.25, direction: 'left' },
    { time: 63.75, direction: 'down' },
    // Again
    { time: 64, direction: 'right' },
    { time: 64.5, direction: 'left' },
    { time: 65.25, direction: 'right' },
    { time: 66, direction: 'left' },
    { time: 66.75, direction: 'right' },
    { time: 67.25, direction: 'left' },
    { time: 67.75, direction: 'down' },
    // Again
    { time: 68, direction: 'right' },
    { time: 68.5, direction: 'left' },
    { time: 69.25, direction: 'right' },
    { time: 70, direction: 'left' },
    { time: 70.75, direction: 'right' },
    { time: 71.25, direction: 'left' },
    { time: 71.75, direction: 'down' },

    // Section 3 again
    { time: 72, direction: 'right' },
    { time: 72.75, direction: 'left' },
    { time: 73.5, direction: 'right' },
    { time: 73.75, direction: 'left' },
    { time: 74.125, direction: 'right' },
    { time: 75.5, direction: 'left' },
    { time: 76, direction: 'right' },
    { time: 76.75, direction: 'left' },
    // More hirtutim
    { time: 80, direction: 'right' },
    { time: 80.75, direction: 'left' },
    { time: 81.5, direction: 'right' },
    { time: 81.75, direction: 'left' },
    { time: 82.125, direction: 'right' },
    { time: 83.5, direction: 'left' },
    { time: 84, direction: 'right' },
    { time: 84.75, direction: 'left' },
    // more hirtutim
    { time: 88, direction: 'right' },
    { time: 88.75, direction: 'left' },
    { time: 89.5, direction: 'right' },
    { time: 89.75, direction: 'left' },
    { time: 90.125, direction: 'right' },
    { time: 91.5, direction: 'left' },
    { time: 92, direction: 'right' },
    { time: 92.75, direction: 'left' },
    // more hirtutim
    { time: 96, direction: 'right' },
    { time: 96.75, direction: 'left' },
    { time: 97.5, direction: 'right' },
    { time: 97.75, direction: 'left' },
    { time: 98.125, direction: 'right' },
    { time: 99.5, direction: 'left' },

    // Section 4
    { time: 100, direction: 'left' },
    { time: 100, direction: 'right' },
    { time: 100.5, direction: 'left' },
    { time: 100.5, direction: 'right' },
    { time: 101, direction: 'left' },
    { time: 101, direction: 'right' },
    // Again
    { time: 104, direction: 'up' },
    { time: 104, direction: 'down' },
    { time: 104.5, direction: 'up' },
    { time: 104.5, direction: 'down' },
    { time: 105, direction: 'up' },
    { time: 105, direction: 'down' },
    // Again
    { time: 108, direction: 'left' },
    { time: 108, direction: 'right' },
    { time: 108.5, direction: 'left' },
    { time: 108.5, direction: 'right' },
    { time: 109, direction: 'left' },
    { time: 109, direction: 'right' },
    // Again
    { time: 112, direction: 'up' },
    { time: 112, direction: 'down' },
    { time: 112.5, direction: 'up' },
    { time: 112.5, direction: 'down' },
    { time: 113, direction: 'up' },
    { time: 113, direction: 'down' },
    // Again
    { time: 116, direction: 'left' },
    { time: 116, direction: 'right' },
    { time: 116.5, direction: 'left' },
    { time: 116.5, direction: 'right' },
    { time: 117, direction: 'left' },
    { time: 117, direction: 'right' },

    // End: 2:24
  ],
});
