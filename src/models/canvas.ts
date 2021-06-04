export const CanvasLineThickness = {
    SMALL: 4,
    MEDIUM: 7,
    BIG: 14
}

export class Canvas {
    xNew: number;
    yNew: number;

    xOld: number;
    yOld: number;

    isDrawing: boolean;
    onFill: boolean;

    colorStyle: string;

    lineThickness: number;

    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.lineThickness = CanvasLineThickness.SMALL;
        this.setColor('#000000');
        this.isDrawing = false;
        this.onFill = false;
        this.xNew = 0;
        this.yNew = 0;
        this.xOld = 0;
        this.yOld = 0;
    }

    setColor(newColor: string): void {
        this.colorStyle = newColor;
    }

    clearContent(): void {
        this.canvas.getContext('2d')
                    .clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateLineThickness(thickness: number): void {
        this.lineThickness = thickness;
    }

    orderly(xNew: number, yNew: number, xOld: number, yOld: number): void {
        if (xNew > xOld) {
            this.lineDraw(xOld, yOld, xNew, yNew);
        } else {
            this.lineDraw(xNew, yNew, xOld, yOld);
        }

    }

    lineDraw(xStart: number, yStart: number, xEnd: number, yEnd: number): void {
        const ray = this.lineThickness; 
        const lengthLine = this.lineLength(xStart, yStart, xEnd, yEnd);

        const ajoutX = (xEnd - xStart) / lengthLine;
        const ajoutY = (yEnd - yStart) / lengthLine;

        const canvas2dContext = this.canvas.getContext('2d');

        canvas2dContext.fillStyle = this.colorStyle;
        canvas2dContext.beginPath();

        for (let i = 1; i < lengthLine; i++) { 
            canvas2dContext.arc(xStart + i * ajoutX, yStart + i * ajoutY, ray, 0, 
                                Math.PI * 2, false);
        }

        canvas2dContext.fill();
    }

    lineLength(xStart: number, yStart: number, xEnd: number, yEnd: number): number {
        return Math.sqrt( (yEnd - yStart) * (yEnd - yStart) 
                        + (xEnd - xStart) * (xEnd - xStart));
    }

    listeningPointerMove(e: any): void {
        this.xOld = this.xNew;
        this.yOld = this.yNew;
        
        const rect = this.canvas.getBoundingClientRect();

        this.xNew = e.clientX - rect.left
        this.yNew = e.clientY - rect.top
        
        if (this.isDrawing && !this.onFill) {
            this.orderly(this.xNew, this.yNew, this.xOld, this.yOld);
        }      
    }

    clickOn(e: any): void {
        this.isDrawing = true;
        const canvas2dContext = this.canvas.getContext('2d');
        const rect = this.canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        if (this.onFill){
            this.fill(parseInt(x.toString()),parseInt(y.toString()));
        }else{
            canvas2dContext.fillStyle = this.colorStyle;
            canvas2dContext.beginPath();
            canvas2dContext.arc(x, y, this.lineThickness, 0, 
                                    Math.PI * 2, false);
            canvas2dContext.fill();
        }
    }

    clickOff(): void {
        this.isDrawing = false;
    }

    setOnFill(fill : boolean): void {
        this.onFill = fill;
    }

    fill( x: number, y:number ){
        let imageData = this.canvas.getContext("2d").getImageData(0,0,this.canvas.width,this.canvas.height);
        let r = 0, g = 0, b = 0, a = 255;
        let h = this.colorStyle;

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);

        r = result ? parseInt(result[1], 16) : 0;
        g = result ? parseInt(result[2], 16) : 0;
        b = result ? parseInt(result[3], 16) : 0;
        

        this.algofill(imageData.data,x,y,r,g,b,a);
        this.canvas.getContext("2d").putImageData(imageData,0,0);
    }

    algofill(mapPixel : Uint8ClampedArray ,x : number, y : number ,r : number,g : number ,b : number,a : number){
        let canvasWidth = this.canvas.width;
        let xRange = 4; 
        let yRange = canvasWidth * 4;
        let position = canvasWidth * y *4 + x * 4;
        let stack = new Array();

        let rToReplace = mapPixel[position];
        let gToReplace = mapPixel[position + 1];
        let bToReplace = mapPixel[position + 2];
        let aToReplace = mapPixel[position + 3];

        if ( !this.compareColorOnPixel(mapPixel,position + xRange,r,g,b,a)) {
            stack.push(position);
        }

        while (stack.length > 0) {
            position = stack.pop();
            this.newColorOnPixel(mapPixel,position,r,g,b,a);

            if (this.compareColorOnPixel(mapPixel,position + xRange,rToReplace,gToReplace,bToReplace,aToReplace)
                && position >= 0
                && parseInt((position/ (canvasWidth * 4)).toString()) == parseInt(((position + xRange)/ (canvasWidth * 4)).toString())) {
     
                stack.push(position + xRange); 
            } else {
                this.newColorOnPixel(mapPixel,position + xRange,r,g,b,a);
            }

            if (this.compareColorOnPixel(mapPixel,position + yRange,rToReplace,gToReplace,bToReplace,aToReplace)
                && position <= mapPixel.length) {
                    
                   stack.push(position + yRange);
            } else {
                this.newColorOnPixel(mapPixel,position + yRange ,r,g,b,a);
            }

            if (this.compareColorOnPixel(mapPixel,position - xRange,rToReplace,gToReplace,bToReplace,aToReplace)
                && position >= 0
                && parseInt((position/ (canvasWidth * 4)).toString()) == parseInt(((position + xRange)/ (canvasWidth * 4)).toString())) {
                    stack.push(position - xRange);
                
            } else {
                this.newColorOnPixel(mapPixel,position - xRange,r,g,b,a);
            }

            if (this.compareColorOnPixel(mapPixel,position - yRange,rToReplace,gToReplace,bToReplace,aToReplace)
                && position >= 0 ) {
                    stack.push(position - yRange);
                                
            } else {
                this.newColorOnPixel(mapPixel,position - yRange,r,g,b,a);
            }

        }
        

    }

    compareColorOnPixel(mapPixel : Uint8ClampedArray ,position : number, r : number, g : number, b : number, a : number) : boolean {
        return ((mapPixel[position] == r && mapPixel[position + 1] == g && mapPixel[position + 2] == b && mapPixel[position + 3] == a) ? true : false);
    }

    newColorOnPixel(mapPixel : Uint8ClampedArray ,position : number, r : number, g : number, b : number, a : number) : void {
        mapPixel[position] = r;
        mapPixel[position + 1] = g;
        mapPixel[position + 2] = b;
        mapPixel[position + 3] = a;
    }


}
