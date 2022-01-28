class Game{
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = null
    }

    start(){
       this.init()
       this.play()
    }

   init(){ //we can initialize/reinitialize the initial page
       this.frameNumber = 0 //this will store the frame number
       //this.sound.stop() etc...
       //background.init()
   }


   play(){
       this.frameNumber += 1; //to advance to the next frame
    this.move();
    this.checkCollision();
    this.ctx.clearRect(0,0, ctx.width, ctx.height);
    this.draw();
    requestAnimationFrame(this.play.bind(this)) //bind (this) means that this function will only run in this object and not in the global one
   }

   move(){
     this.background.move(this.frameNumber)
     this.obstacles.move(this.frameNumber)
     this.player.move(this.frameNumber)
   }
    
   draw(){
     this.background.draw(this.frameNumber)
     this.obstacles.draw(this.frameNumber)
     this.player.draw(this.frameNumber) 
   }

   checkCollision(){
       let collisions = false;

       if(this.obstacles.objects.some( obstacle => this.player.collidesWith(obstacle))) collisions=true; //this checks if the player collides with some of the obstacles

       if(this.player.exitsCanvas()) collisions = true;

       return collisions
   }
}