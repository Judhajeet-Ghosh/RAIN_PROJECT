class Drops{
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.body = Bodies.circle(x,y,5,options)
        World.add(world, this.body)

    }
display()

}