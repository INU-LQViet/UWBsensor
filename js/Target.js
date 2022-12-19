class Target{
    constructor(imgWidth){
        this.target = new Image();
        this.target.src = "img/target-svgrepo-com.svg";
        this.x = [];
        this.y = [];
        this.imgWidth = imgWidth;
    };
    update(x, y){
        this.x.push(x);
        this.y.push(y);
    };
    drawing(ctx, scaleX, scaleY, marginX, marginY){
        ctx.drawImage(this.target, marginX+scaleX*(this.x[this.x.length-1])-this.imgWidth/2, marginY+scaleY*(this.y[this.y.length-1])-this.imgWidth/2, this.imgWidth, this.imgWidth);
        ctx.stroke();
        ctx.save();
    }
    clear(){
        this.x = [];
        this.y = [];
    }
};

export default Target