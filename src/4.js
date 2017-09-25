/**
 * Created by Administrator on 2017/9/25 0025.
 */
function Config(id){
    this.configPanel = document.getElementById(id);
    this.svgShape;
    this.bindInputEvent();
}
Config.prototype.refreshConfigPanel = function(svgShape){
    if(this.svgShape === svgShape) return;
    this.svgShape = svgShape;
    this.configPanel.innerHTML = "";
    var config = svgShape.getShapeAttrs();
    for(var attrName in config){
        var attrValue = config[attrName];
        this.configPanel.appendChild(this.createHandle(attrName,attrValue));

    }
};

Config.prototype.createHandle = function(attrName,attrValue){
    var div = document.createElement("div");
    div.setAttribute("class","input-item");
    var label = document.createElement("label");
    label.setAttribute("for",attrName);
    label.textContent = attrName;
    var input = document.createElement("input");
    input.setAttribute("id",attrName);
    input.setAttribute("type","range");
    input.setAttribute("max",1000);
    input.setAttribute("min",0);
    input.value = attrValue;
    div.appendChild(label);
    div.appendChild(input);
    return div;
};
Config.prototype.bindInputEvent = function(){
    var self = this;
    this.configPanel.addEventListener("input",function(event){
        var handle = event.target;
        if(handle.tagName.toLowerCase() === "input"){
            var attrName = handle.getAttribute("id");
            var attrValue = handle.value;
            self.svgShape.setAttr(attrName,attrValue);
            console.log(attrName,attrValue);
        }

    });
};