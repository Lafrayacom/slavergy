import { PARAMETRS, SPRITES } from "../../utils/constans";
import { Entity } from "../entity";

export class Player extends Entity {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string){
        super(scene,x,y,texture, SPRITES.PLAYER)
        this.setScale(0.15);
    }
    
    control(){
        const keys = this.scene.input.keyboard.createCursorKeys();
        if (keys.up.isDown){
            this.setPosition(this.x, this.y - PARAMETRS.WARRIOR)
        } 
        if (keys.down.isDown){
            this.setPosition(this.x, this.y + PARAMETRS.WARRIOR)
        }
        if (keys.left.isDown){
            this.setPosition(this.x - PARAMETRS.WARRIOR, this.y)
        }
        if (keys.right.isDown){
            this.setPosition(this.x + PARAMETRS.WARRIOR, this.y)
        }
    }
    
    update(time: number, delta: number) {
        this.control();
    }
}