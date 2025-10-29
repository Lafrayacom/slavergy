import durotarJSON from 'C:/Users/Слава/slavergy1/src/assets/durotar.json';
import { LAYERS, SIZES, SPRITES, TILES } from '../utils/constans';
import { Player } from 'C:/Users/Слава/slavergy1/src/entities/player.ts';
import { Client } from "colyseus.js";

export class Durotar extends Phaser.Scene {
    private player?: Player;
    constructor() {
        super('DurotarScene');
    }
    async anus() {
        const client = new Client("ws://26.11.228.89:2567");
        const room = await client.joinOrCreate("game_room", {name: "asd", class: 1, color: 1});
        room.send('client:test', 'HOT_ASS');
    }

    preload() {
        this.load.image(TILES.DUROTAR, '/src/assets/durotar.png');
        this.load.tilemapTiledJSON('map', '/src/assets/durotar.json');
        this.load.spritesheet(SPRITES.PLAYER, '/src/assets/characters/Player.png', {
            frameWidth: 512,
            frameHeight: 440
        });
    }

    create() {
        
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage(durotarJSON.tilesets[0].name, TILES.DUROTAR, SIZES.TILE, SIZES.TILE);
        //this.anus();
        const groundLayer = map.createLayer(LAYERS.GROUND, tileset, 0, 0);
        const wallsLayer = map.createLayer(LAYERS.WALLS, tileset, 0, 0);

        this.player = new Player(this, 300, 300, SPRITES.PLAYER);
        this.player.setScale(0.1);
    }

    update(time: number, delta: number): void {
        // Обновление сцены
    }
}
