'use strict';

(function (){
    
    var cpsElements = document.querySelectorAll("[cml] *");
    var cpsSize = cpsElements.length;
    
    adjustClmns();
    adjustYPositioning();
    
    function adjustClmns(){
        var cols = document.querySelectorAll("[cml] .clmn");
        var colsSize = cols.length;
        //TODO need to map columns to parent elements
        var colsParents = [];
    
        for(var k = 0; k < colsSize; k++){
            if(colsParents.length == 0){
                colsParents.splice(-1,0,cols[k].parentElement);
            }
            if(!inlist(cols[k].parentElement)){
                colsParents.splice(-1,0, cols[k].parentElement);
            }
        }
        for(var j = 0; j < colsParents.length; j++){
            var clms = colsParents[j].children;
            var colSize = clms.length;
            for(var m = 0; m < colSize; m++){
                if(clms[m].classList.contains("clmn")){
                    var mwidth = Math.floor(100/colSize) + "%"
                    clms[m].style.maxWidth = mwidth.toString();        
                }
            }
        }

        function inlist(parent){
            for(var l = 0; l < colsParents.length; l++){
                if(colsParents[l] === parent){
                    return true;
                }
            }
            return false;
        }//end of inlist()
    }//end of adjustClmns()

    function adjustYPositioning(){
        for(var i = 0; i < cpsSize; i++){
            var ele = cpsElements[i].classList;
            
            if(ele.contains("x-right") && ele.contains("y-center")){
                ele.add("y-center-x-right");
                ele.remove("y-bottom");
                ele.remove("x-right");
            }
            if(ele.contains("x-right") && ele.contains("y-bottom")){
                ele.add("y-bottom-x-right");
                ele.remove("y-bottom");
                ele.remove("x-right");   
            }
            if(ele.contains("x-left") && ele.contains("y-center")) {
                ele.add("y-center-x-left");
                ele.remove("y-center");
                ele.remove("x-left");
            }
            if(ele.contains("x-left") && ele.contains("y-bottom")) {
                ele.add("y-bottom-x-left");
                ele.remove("y-bottom");
                ele.remove("x-left");
            }
        }
    }//end of adjustYRPositioning()

})();