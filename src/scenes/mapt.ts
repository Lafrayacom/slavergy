import { LAYERS, SIZES, SPRITES, TILES } from '../utils/constans.ts';
import { Player } from '../entities/players/player.ts';
import { Client } from "colyseus.js";

export class Mapt extends Phaser.Scene {
    private player: Player;
    private client: Client;

    constructor() {
        super('MaptScene');
    }

    async connect (){
        this.client = new Client("ws://loacalhost:2567");
    }

    async room_client() {
        const client = new Client("ws://26.11.228.89:2567");
        const room = await client.joinOrCreate("game_room", {name: "asd", class: 1, color: 1});
        room.send('client:test', 'checking');
    }

    preload() {
        this.load.image("background", '/src/assets/background/backG1.jpg')
        this.load.spritesheet(SPRITES.PLAYER, '/src/assets/characters/Player.png', {
            frameWidth: 512,
            frameHeight: 440
        });
    }

    create() {
        //this.cursor = this.input.keyboard.createCursorKeys();

        for (let x = 0; x<25; x++){
            for (let y = 0; y<25; y++){
                this.add.image(x*1024,y*1024, "background");
            }
        }

        
        this.player = new Player(this, 300, 300, SPRITES.PLAYER);
        
    }

    update(time: number, delta: number) {
        this.player.update(time, delta);
    }
}
