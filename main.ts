
class Point {
    x: number
    y: number

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    equals(point: Point): boolean {
        return point.x === this.x && point.y === this.y;
    }
}

class Snake{
    center :Point
    queue1: Point
    queue2: Point
    oldQueue: Point
    orientation: string

    constructor(){
        this.orientation = 'E'
        this.center = new Point(2, 2);
        this.queue1 = new Point(2, 2);
        this.queue2 = new Point(2, 2);
    }

    changeOrientation(isLeft: boolean){
        switch (this.orientation) {
            case 'N':
                this.orientation = !isLeft ? 'O':'E';
                break;
            case 'E':
                this.orientation = !isLeft ? 'N' : 'S';
                break;
            case 'S':
                this.orientation = !isLeft ? 'E' : 'O';
                break;
            case 'O':
                this.orientation = !isLeft ? 'S' : 'N';
                break;
        }
    }

    move(){
        this.moveTail();
        this.moveHead();
    }
    
    moveHead(){
        switch(this.orientation){
            case 'N': 
                this.center = new Point((this.center.x + 4) % 5, this.center.y);
                break;
            case 'E': 
                this.center = new Point(this.center.x, (this.center.y + 1) % 5);
                break;
            case 'S': 
                this.center = new Point((this.center.x + 1) % 5, this.center.y);
                break;
            case 'O': 
                this.center = new Point(this.center.x, (this.center.y + 4) % 5);
                break;
        }
    }

    moveTail() {
        this.oldQueue = new Point(this.queue2.x, this.queue2.y)
        this.queue2 = this.queue1;
        this.queue1 = this.center;
    }

    display(){
        if(this.oldQueue != null){
            led.unplot(this.oldQueue.x, this.oldQueue.y)
        }
        led.plot(this.center.x, this.center.y)
        led.plot(this.queue1.x, this.queue1.y)
        led.plot(this.queue2.x, this.queue2.y)
    }
    checkEmptyPlace(point: Point):boolean{
        return !this.center.equals(point) &&
            !this.queue1.equals(point) && 
            !this.queue2.equals(point);
    }
}

class Score{
    counter :number
    pointToWin: Point
    constructor(){
        this.counter = 0;
        this.pointToWin = this.findEmptyPlace();
    }
    show(){
        basic.showNumber(this.counter);
    }
    hide(){
        basic.showString("")
    }
    findEmptyPlace(): Point{
        const p = new Point(randint(0, 4), randint(0, 4));
        if(snake.checkEmptyPlace(p)){
            return p;
        }
        return this.findEmptyPlace();
    }
    showPoint(){
        if(this.pointToWin != null){
            led.plot(this.pointToWin.x, this.pointToWin.y)
        }
    }
    checkWin(snake :Snake){
        if(snake.center.equals(this.pointToWin)){
            this.counter++;
            this.pointToWin = this.findEmptyPlace();
        }
    }
}

function togglePause(){
    localPause = !localPause
    if (localPause) {
        score.show();
    } else {
        score.hide();
    }
}

const snake = new Snake();
const score = new Score();
let localPause = false;

input.onButtonPressed(Button.A, ()=>snake.changeOrientation(true))
input.onButtonPressed(Button.B, () => snake.changeOrientation(false))
input.onLogoEvent(TouchButtonEvent.Released, togglePause)

forever(()=>{
    if (!localPause){
        snake.move();
        score.checkWin(snake);
        snake.display();
        score.showPoint();
        basic.pause(300);
    }
})