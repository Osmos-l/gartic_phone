export class Canvas {
    xNew: number;
    yNew: number;

    xOld: number;
    yOld: number;

    isDrawing: boolean;

    colorStyle: string;

    length: number;

    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.length = 0;
        this.newTaille();
        this.setColor('#000000');
        this.isDrawing = true; // pour tester
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

    newTaille(): void {
        this.length = (this.length + 7) % 20;
    }

    orderly(xNew: number, yNew: number, xOld: number, yOld: number): void {
        if (xNew > xOld) {
            this.lineDraw(xOld, yOld, xNew, yNew);
        } else {
            this.lineDraw(xNew, yNew, xOld, yOld);
        }

    }

    lineDraw(xStart: number, yStart: number, xEnd: number, yEnd: number): void {
        const ray = this.length; 
        const lengthLine = this.lineLength(xStart, yStart, xEnd, yEnd);

        const ajoutX = (xEnd - xStart) / lengthLine;
        const ajoutY = (yEnd - yStart) / lengthLine;

        const canvas2dContext = this.canvas.getContext('2d');

        canvas2dContext.fillStyle = this.colorStyle;
        canvas2dContext.beginPath();
        for (let i = 0; i < length; i++) { 
            canvas2dContext.arc(xStart + i * ajoutX, yStart + i * ajoutY, ray, 0, 
                                Math.PI * 2, false);
        }

        canvas2dContext.fill();
    }

    lineLength(xStart: number, yStart: number, xEnd: number, yEnd: number): number {
        return Math.sqrt(
                          (yEnd - yStart) * (yEnd - yStart) 
                        + (xEnd - xStart) * (xEnd - xStart));
    }

    listeningPointerMove(e: any): void {
        this.xOld = this.xNew;
        this.yOld = this.yNew;
        const rect = this.canvas.getBoundingClientRect();

        this.xNew = e.clientX - rect.left
        this.yNew = e.clientY - rect.top
        
        if (this.isDrawing) {
            this.orderly(this.xNew, this.yNew, this.xOld, this.yOld);
        }
        
    }

    clickOn(): void {
        this.isDrawing = true;
    }

    clickOff(): void {
        this.isDrawing = false;
    }
}
