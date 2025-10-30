import Phaser from "phaser";
import '/public/style.css'
import { scenes } from './scenes';

new Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  title: 'Slavergy',
  scene: scenes,
  url: import.meta.env.URL || '',
  version: import.meta.env.VERSION || '0.0.1',
  backgroundColor: '#000',
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  pixelArt: true,
});