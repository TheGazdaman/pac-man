class Pacman{
    constructor(stage){
        this.mouth = 'open';
        this.facing = 'right';
        this.tilePositionX = 0;
        this.tilePositionY = 0;
        this.stage = stage;
    }


    render (){
        this.pacboy = document.createElement('div');
        this.pacboy.className = "entity entity--pac pacboy-active-light";
    }

    mount(parent){
        this.render();
        parent.appendChild(this.pacboy);
        this.move();
    }


    alternateMouth(){
       
        if (this.mouth === "open"){
            this.pacboy.style.backgroundPositionX = '100%';
            this.mouth = "closed"
          } else {
            this.pacboy.style.backgroundPositionX = '0%';
            this.mouth = "open";
          }
    } 

    move(){

        document.addEventListener('keydown', (event) =>{

            if(event.key === 'ArrowRight'){
                this.facing = "right";
                this.update();
            }
            
            if(event.key === 'ArrowLeft'){
                this.facing = "left";
                this.update();
            }

            if(event.key === 'ArrowUp'){
                this.facing = "up";
                this.update();
            }

            if(event.key === 'ArrowDown'){
                this.facing = "down";
                this.update();
            }

            
        });
    }

    changeFace() {
        switch(this.facing) {
            case "right":
                this.pacboy.style.backgroundPositionY = '0%';
                break;
            case "left":
                this.pacboy.style.backgroundPositionY = '33.333%';
                break;
            case "up":
                this.pacboy.style.backgroundPositionY = '100%';
                break;
            case "down":
                this.pacboy.style.backgroundPositionY = '66.6666%';
                break;
            default:
                console.log("error");
        }
    }

    changePosition() {
        this.pacboy.style.left = `${this.tilePositionX * 85}px`;
        this.pacboy.style.top = `${this.tilePositionY * 85}px`;
    }

    update() {
        this.changeFace();
        this.alternateMouth();
        this.checkBorder();
    }

    checkBorder() {
        switch(this.facing) {
            case "right":
                this.newPositionX = this.tilePositionX + 1;
                if (this.stage.withinBorders(this.newPositionX, this.tilePositionY) && this.stage.colisionDetection(this.newPositionX, this.tilePositionY) !== "wall") {
                    this.tilePositionX += 1
                    this.changePosition();
                }
                break;
            case "left":
                this.newPositionX = this.tilePositionX - 1;
                if (this.stage.withinBorders(this.newPositionX, this.tilePositionY) && this.stage.colisionDetection(this.newPositionX, this.tilePositionY) !== "wall") {
                    this.tilePositionX -= 1
                    this.changePosition();
                }
                break;
            case "up":
                this.newPositionY = this.tilePositionY - 1;
                if (this.stage.withinBorders(this.tilePositionX, this.newPositionY) && this.stage.colisionDetection(this.tilePositionX, this.newPositionY) !== "wall") {
                    this.tilePositionY -= 1
                    this.changePosition();
                }
                break;
            case "down":
                this.newPositionY = this.tilePositionY + 1;
                if (this.stage.withinBorders(this.tilePositionX, this.newPositionY) && this.stage.colisionDetection(this.tilePositionX, this.newPositionY) !== "wall") {
                    this.tilePositionY += 1
                    this.changePosition();
                }
                break;
            default:
                console.log("error");
        }
    }

}