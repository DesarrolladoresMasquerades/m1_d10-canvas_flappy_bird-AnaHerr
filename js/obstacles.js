class Obstacles {
    constructor(ctx){
        this.ctx = ctx
        this.objects = []
    }

    move(frameNumber){
        console.log("Obstacles move to frame number", frameNumber)
    }

    draw(frameNumber){
        console.log("Obstacles draw to frame number", frameNumber)
    }
}
