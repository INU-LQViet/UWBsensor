export default class Ulitizes {
    constructor(){
        this.name = 'Usefull tools for drawing'
    };
    
    drawline(ctx, x_s, y_s, x_f, y_f){
        ctx.beginPath();
        ctx.moveTo(x_s, y_s);
        ctx.lineTo(x_f, y_f);
        ctx.stroke();
    };

    addtext(ctx, text, x_s, y_s){
        ctx.fillText(text, x_s, y_s);
        ctx.stroke();
    };
    
    grip(canvas, ctx, marginX, marginY, numX, numY){
        let maxX = canvas.width;
        let maxY = canvas.height;
        const minX = (canvas.width-2*marginX)/numX ;
        const minY = (canvas.height-2*marginY)/numY;
        for(let i=0; i<=numY; i++){
            this.drawline(ctx, marginX , marginY+minY*i, maxX-marginX, marginY+minY*i);
        };
        for(let i=0; i<=numX+1; i++){
            this.drawline(ctx, marginX+minX*i , marginY , marginX+minX*i, maxY-marginY);
        };
    }
}
