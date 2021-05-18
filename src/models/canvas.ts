export class Canvas {
    xNew : number;
    yNew : number;

    xOld : number;
    yOld : number;

    isDrowing : boolean;

    colorStyle : string;

    length: number;

    canvas: HTMLCanvasElement;

    constructor( canvas: HTMLCanvasElement){
        this.canvas = canvas
        this.length = 0;
        this.newTaille();
        this.setColor('#000000'),
        this.isDrowing = true; // pour tester
        this.xNew = 0;
        this.yNew = 0;
        this.xOld = 0;
        this.yOld = 0;

    }


    setColor(newColor : string): void{
        this.colorStyle = newColor;
    }



    clearContent(): void{
        this.canvas.getContext('2d').clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    newTaille(): void{
        this.length = (this.length + 7) % 20;
    }

    orderly(xNew : number, yNew : number, xOld : number, yOld : number): void{
        if (xNew > xOld) {
            this.lineDraw(xOld, yOld, xNew, yNew);
        } else {
            this.lineDraw(xNew, yNew, xOld, yOld);
        }

    }

    lineDraw(xStart : number, yStart : number, xEnd : number, yEnd : number): void{
        let ray  = this.length; 
        const lengthLine = this.lineLength(xStart,yStart,xEnd,yEnd);

        let ajoutX = (xEnd - xStart)/lengthLine;
        let ajoutY = (yEnd - yStart)/lengthLine;

        this.canvas.getContext('2d').fillStyle = this.colorStyle;
        this.canvas.getContext('2d').beginPath();
        for (let i =0; i < length ; i++){ 
            this.canvas.getContext('2d').arc(xStart + i * ajoutX, yStart + i * ajoutY, ray, 0, Math.PI*2, false);
        }
        this.canvas.getContext('2d').fill();

    }

    lineLength(xStart,yStart,xEnd,yEnd){
        return Math.sqrt((yEnd-yStart)*(yEnd-yStart) + 
                        (xEnd-xStart)*(xEnd-xStart));
    }


    listeningPointerMove(e){
        this.xOld = this.xNew;
        this.yOld = this.yNew;
        const rect = this.canvas.getBoundingClientRect();
        this.xNew = e.clientX - rect.left
        this.yNew = e.clientY - rect.top
        
        if (this.isDrowing ){
            this.orderly(this.xNew, this.yNew, this.xOld, this.yOld);

        }
        
    }

    clickOn(): void{
        this.isDrowing = true;
    }

    clickOff(): void{
        this.isDrowing = false;
    }
}
