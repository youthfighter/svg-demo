//class SvgShape
function SvgShape(shape,attrs){
    this.shapeName = shape;
    this.attrs = this._initAttrs(shape,attrs);
    this.shapeDom = this._initShape(shape);
    this.hasShapeType = function(shapeName){
        return this.DEFAULT_SHAPE_INFO[shapeName]?true:false;
    }
}
SvgShape.prototype.getShapeName = function(){
    return this.name;
};
SvgShape.prototype.getShapeAttrs = function(){
    return this.attrs;
};
SvgShape.prototype.getAttr = function(attr){
    return this.attrs[attr];
};
SvgShape.prototype.setAttr = function(attr,value){
    this.shapeDom.setAttribute(attr,value);
    this.attrs[attr] = value;
};
SvgShape.prototype.getShapeDom = function(){
    return this.shapeDom;
};
SvgShape.prototype._initShape = function(){
    var ele = document.createElementNS(this.SVG_NS,this.shapeName);
    for(var key in this.attrs){
        ele.setAttribute(key,this.attrs[key]);
    }
    return ele;
};
SvgShape.prototype._initAttrs = function(shape,attrs){
    attrs?attrs:{};
    var defaultAttrsStr = this.DEFAULT_SHAPE_INFO[shape];
    var defaultAttrs = defaultAttrsStr.split(",");
    var attrs = {};
    for(var i=0;i<defaultAttrs.length;i++){
        var kv = defaultAttrs[i].split(":")
        var attrName = kv[0];
        var attrValue = attrs[attrName]?attrs[attrName]:kv[1];
        attrs[attrName] = attrValue;
    }
    return attrs;
}
SvgShape.prototype.DEFAULT_SHAPE_INFO = {
    "rect" : "x:100,y:100,width:100,height:100,rx:0,ry:0",
    "circle" : "cx:200,cy:200,r:50",
    "ellipse" : "cx:200,cy:200,rx:80,ry:30",
    "line" : "x1:100,y1:100,x2:200,y2:200"
}
SvgShape.prototype.SVG_NS = "http://www.w3.org/2000/svg";