
/**
 * 实例
 * @param {*} options 
 */
var Application = function(options){
    if (!options.element) {
        return;
    }
    this.canvas = options.element;
    console.log(this.canvas)
    options.width ?  this.canvas.width = options.width : this.canvas.width = 300;
    options.height ?  this.canvas.height = options.height : this.canvas.height = 200;
    this.ctx = this.canvas.getContext('2d');
    this.stage = new stageClass(this.canvas,this.ctx);
    this.animate();
}
var PAUSE_TIMEOUT = Math.round(1000/60);
/**
 * 使用命令模式，封装的所有canvas函数和属性
 */
var Command = (function(){  
    var Action = {
        fillRect:(x,y,width,height)=>{
            WHOSGengine.ctx.fillRect(x,y,width,height);
        },
        fillStyle:function(color){
            WHOSGengine.ctx.fillStyle = color;
        },
        clearRect:function(x,y,width,height){
            WHOSGengine.ctx.clearRect(x,y,width,height);
        },
        strokeRect:function(x,y,width,height){
            WHOSGengine.ctx.strokeRect(x,y,width,height);
        },
        fillText:function(text,x,y){
            WHOSGengine.ctx.fillText(text,x,y);
        },
        strokeText:function(text,x,y){
            WHOSGengine.ctx.strokeText(text,x,y);
        },
        measureText:function(text){
            return WHOSGengine.ctx.measureText(text);
        },
        lineWidth:function(lineWidth){
            WHOSGengine.ctx.lineWidth = lineWidth;
        },
        strokeStyle:function(color){
            WHOSGengine.ctx.strokeStyle = color;
        },
        stroke:function(){
            WHOSGengine.ctx.stroke();
        },
        beginPath:function(){
            WHOSGengine.ctx.beginPath();
        },
        moveTo:function(x,y){
            WHOSGengine.ctx.moveTo(x,y);
        },
        lineTo:function(x,y){
            WHOSGengine.ctx.lineTo(x,y)
        },
        closePath:function(){
            WHOSGengine.ctx.closePath();
        },
        lineCap:function(lineCap){
            WHOSGengine.ctx.lineCap = lineCap
        },
        lineJoin:function(lineJoin){
            WHOSGengine.ctx.lineJoin = lineJoin;
        },
        miterLimit:function(miterLimit){
            WHOSGengine.ctx.miterLimit = miterLimit;
        },
        font:function(value){
            WHOSGengine.ctx.font = value;
        },
        textAlign:function(align){
            WHOSGengine.ctx.textAlign = align;
        },
        textBaseline:function(textBaseline){
            WHOSGengine.ctx.textBaseline = textBaseline;
        },
        createLinearGradient:function(x0,y0,x1,y1){
            return WHOSGengine.ctx.createLinearGradient(x0,y0,x1,y1);
        },
        createPattern:function(image,repetition){
            return WHOSGengine.ctx.createPattern(image,repetition)
        },
        bezierCurveTo:function(cp1x,cp1y,cp2x,cp2y,x,y){
            WHOSGengine.ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
        },
        quadraticCurveTo:function(cpx,cpy,x,y){
            WHOSGengine.ctx.quadraticCurveTo(cpx,cpy,x,y);
        },
        arc:function(x,y,radius,startAngle,endAngle,anticlockwise){
            WHOSGengine.ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);
        },
        arcTo:function(x1,y1,x2,y2,radius){
            WHOSGengine.ctx.arcTo(x1,y1,x2,y2,radius);
        },
        rect:function(x,y,width,height){
            WHOSGengine.ctx.rect(x,y,width,height);
        },
        fill:function(){
            WHOSGengine.ctx.fill();
        },
        clip:function(){
            WHOSGengine.ctx.clip();
        },
        rotate:function(rotate){
            WHOSGengine.ctx.rotate(rotate);
        },
        scale:function(x,y){
            WHOSGengine.ctx.scale(x,y);
        },
        transform:function(scaleX,skewX,skewY,scaleY,translateX,translateY){
            WHOSGengine.ctx.transform(scaleX,skewX,skewY,scaleY,translateX,translateY);
        },
        setTransform:function(scaleX,skewX,skewY,scaleY,translateX,translateY){
            WHOSGengine.ctx.setTransform(scaleX,skewX,skewY,scaleY,translateX,translateY);
        },
        translate:function(x,y){
            WHOSGengine.ctx.translate(x,y);
        },
        globalAlpha:function(value){
            WHOSGengine.ctx.globalAlpha(value);
        },
        drawImage:function(image,dx,dy,dWidth,dHeight,sx,sy,sWidth,sHeight){
            WHOSGengine.ctx.drawImage(image,dx,dy,dWidth,dHeight,sx,sy,sWidth,sHeight);
        },
        restore:function(){
            WHOSGengine.ctx.restore();
        },
        save:function(){
            WHOSGengine.ctx.save();
        },
        createImageData:function(width,height,imagedata){
            return WHOSGengine.ctx.createImageData(width,height,imagedata);
        },
        getImageData:function(sx,sy,sw,sh){
            return WHOSGengine.ctx.getImageData(sx,sy,sw,sh);
        },
        putImageData:function(imagedata,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight){
            WHOSGengine.ctx.putImageData(imagedata,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
        },
        setLineDash:function(segments){
            WHOSGengine.ctx.setLineDash(segments);
        },
        getLineDash:function(){
            return WHOSGengine.ctx.getLineDash();
        },
        lineDashOffset:function(value){
            WHOSGengine.ctx.lineDashOffset = value;
        },
        globalCompositeOperation:function(type){
            WHOSGengine.ctx.globalCompositeOperation = type;
        },
        shadowBlur:function(blur){
            WHOSGengine.ctx.shadowBlur = blur;
        },
        shadowColor:function(color){
            WHOSGengine.ctx.shadowBlur = color;
        },
        shadowOffsetX:function(offsetX){
            WHOSGengine.ctx.shadowOffsetX = offsetX;
        },
        shadowOffsetY:function(offsetY){
            WHOSGengine.ctx.shadowOffsetY = offsetY;
        },

    };

    return {
        excute : (function f(msg) {
            if (!msg) {
                return;
            }
            if (msg.length){
                for (var i = 0,len = msg.length;i<len;i++)
                    f(msg[i])
            } else {
                msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
                Action[msg.command].apply(Action,msg.param);
            }
        })
    }
})();
/**
 * 舞台
 * @param {*} canvas 
 * @param {*} ctx 
 */
var stageClass = function(canvas,ctx){
    this.height;
    this.width;
    var canvas_ = canvas;
    var ctx_ = ctx;
    canvas_;
    ctx_;
    this.elements = [];
    this.excuteActions = [];
};
/**
 * 添加元素
 */
stageClass.prototype.addChild = function(element){
    this.elements.push(element);
};
/**
 * 移除元素
 */
stageClass.prototype.removeChild = function(){

};

var Graphics = function(){
    this.x;
    this.y;
    this.commandArr = [];

};

Graphics.prototype.setAttr = function(command){
    this.commandArr.push(command);
    switch(command.command){
        case "fillRect":
            this.x = command.param[0];
            this.y = command.param[1];
            break;
        default:
            break;
    }
}
Graphics.prototype.getAttr = function(){
    this.commandArr.forEach((command,index) => {
        switch(command.command){
            case "fillRect":
                this.commandArr[index].param[0] = this.x;
                this.commandArr[index].param[1] = this.y;
                break;
            default:
                break;
        }
    });
    return this.commandArr;
};

var animate = function(){
    setInterval(()=>{
        this.Command.excute([{command:"clearRect",param:[0,0,this.canvas.width,this.canvas.height]}]);
        this.stage.elements.forEach(element => {
            element.getAttr().forEach(el => {
                this.Command.excute(el);
            });
        });
    },PAUSE_TIMEOUT);
};

var WHOSGengine = {
    canvas:{},
    ctx:{},
    Application:Application,
    Command:Command,
    stage:{},
    Graphics:Graphics,
    animate:animate
};
export {WHOSGengine}