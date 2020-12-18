import { Flower } from '../models/flower';

export class FlowerService{
    flowers:Flower[];
    cart:Flower[];
    total: number=0;
    constructor()
    {
        this.flowers=[
            new Flower(1,"rose",12,1,"assets/flower.jpg"),
            new Flower(2,"lili",12,3,"assets/mile.jpg"),
            new Flower(3,"lotus",12,4,"assets/flower.jpg")

        ]
        this.cart=[];
    }
    getFlowers():Flower[]{
        return this.flowers;
    }
    getCart():Flower[]{
        return this.cart;
    }
    buyFlower(flower:Flower){
        this.cart.push(flower);
    }
    getFlower(id:number):any{
        for(let index=0;index<this.flowers.length;index++){
            if(this.flowers[index].id==id){
                return this.flowers[index];
            }
        }
        return null;
    }
}