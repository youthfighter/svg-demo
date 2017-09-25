//class Svg
function Svg(){
    this.svg = this._initSvg();
    this.svgShape = [];
    this.selectedShape;
}
Svg.prototype.SVG_NS = "http://www.w3.org/2000/svg";
Svg.prototype._initSvg = function(){
    var svg = document.createElementNS(this.SVG_NS,"svg");
    svg.setAttribute("width","100%");
    svg.setAttribute("height","100%");
    return svg;
};
Svg.prototype.addSvgShape = function(svgShape){
    this.svg.appendChild(svgShape.getShapeDom());
    this.svgShape.push(svgShape);
    this.selectedShape = svgShape;
};
Svg.prototype.getSelectedShape = function(){
    return this.selectedShape;
};
Svg.prototype.setSelectedShapeByNode = function(ele){
    var self = this;
    var allShapeNodes = this.svg.childNodes;
    for(var i=0;i<allShapeNodes.length;i++){
        if(allShapeNodes[i] === ele){
            self.selectedShape = this.svgShape[i];
        }
    }
};
Svg.prototype.getAllShape = function(){
    return this.svgShape;
};
Svg.prototype.getSvg = function(ele){
    return this.svg;
};