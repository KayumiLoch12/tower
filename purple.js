class purple  extends Red_block{
    constructor(x, y){
      super(x,y,20,40);
      this.visibility = 255;
    }
    display(){
      console.log(this.visibility);
      if(this.body.speed < 3){
      super.display();
      }
      else{
       this.visibility = this.visibility - 5
        World.remove(world,this.body);
        push()
        tint(255,this.visibility);
        //rect(this.body.position.x,this.body.position.y,50,50);
        pop()
      }
      
    }

    score(){
      if (this.visibility < 0 && this.visibility > -105){
        score = score + 1;
      
      }
    }
  };