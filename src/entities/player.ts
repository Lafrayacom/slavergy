import { SPRITES } from "../utils/constans";
import { Entity } from "./entity";

export class Player extends Entity {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string){
        super(scene,x,y,texture, SPRITES.PLAYER)
    }
}