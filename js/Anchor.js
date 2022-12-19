class Anchor{
    constructor(imgWidth){
        this.archor = new Image();
        this.archor.src = "img/bleach-triangle-svgrepo-com.svg";
        this.imgWidth = imgWidth;
        this.x = 0;
        this.y = 0;
    };
    update(x, y){
        this.x = x;
        this.y = y;
    };
    drawing(ctx, scaleX, scaleY, marginX, marginY){
        ctx.drawImage(this.archor, marginX + scaleX*(this.x)-this.imgWidth/2, marginY + scaleY*(this.y) - this.imgWidth/2, this.imgWidth, this.imgWidth);
        ctx.stroke();
        ctx.save();
    };
};
export default Anchor