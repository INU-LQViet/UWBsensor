import Anchor from './Anchor.js';
import Target from './Target.js';
import Utilizes from './Utilizes.js';
var preData = [{"name":"Example01","type":"REC","time":"Wed Dec 07 2022","a":1,"b":1,"target":{"x":[0.58,0.48],"y":[0.45,0.67]}},{"type":"REC","time":"Wed Dec 07 2022","name":"Example02","a":20,"b":20,"target":{"x":[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,20,13,14,14,15,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],"y":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,8,5,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},{"type":"REC","time":"Wed Dec 07 2022","name":"Test1231","a":20,"b":20,"target":{"x":[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],"y":[1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1]}},{"type":"REC","time":"Thu Dec 08 2022","name":"Test1231","a":20,"b":20,"target":{"x":[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],"y":[2,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,1,2,2,1,1,1,1,2,2,2,1,1,1,2,2,1,2,1,1,2,1,1,1,2,2,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,2,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,1,2,1,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,2,1,1,1,2,1,1,2,1,2,2,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,2,1,2,2,2,1,1,1,2,1,2,1,1,1,2,1,2,2,1,2,1,1,2,1,2,1,2,2,2,2,1,1,1,2,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2]}}];

// declare
var tools = new Utilizes;

var newgrippop = document.getElementById('newGripForm-container');

var newformbtn = document.getElementById('new-btn');

var closeformbtn = document.getElementById('closeGrip-btn');

var selectBTNdata = document.getElementById('select-btn');
var selectdata = document.getElementById('previousEXP');

var startCanvasBTN = document.getElementById('start-canvas-btn');
var closeCanvasBTN = document.getElementById('close-canvas-btn');
var saveCanvasBTN = document.getElementById('save-canvas-btn');
var xspan = document.getElementById("X-span");
var yspan = document.getElementById("Y-span");

var canvasContainer = document.getElementById('canvas-container');

var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext("2d");

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

// canvas.width =(width>=height)? 0.8*width - 20 : 0.8*height - 20;
// canvas.height = (width>=height)? 0.8*height - 20 : 0.8*width - 20;
canvas.width = 0.8*width;
canvas.height = 0.8*height;

// var imgWidth = (width>=height)? canvas.width/10:canvas.height/10;
var imgWidth = canvas.width/10;

// canvas side

const marginX = 50;
const marginY = 50;


var selectedData = []; // chosen data

function loadData(){
    // load data to select option
    for (let i =0; i < preData.length; i++){
        let opt = document.createElement('option');
        opt.value = preData[i].name;
        opt.innerHTML = preData[i].name;
        selectdata.appendChild(opt);
    };
};

function dataSelect(select){
    let choosen = [];
    for (let i =0; i < preData.length; i++){
        if(preData[i].name == select){
            choosen.push(preData[i]);
        };
    };
    return choosen
};

window.onload = function(){
    loadData();
    // create option
    var settimer;
    console.log(document.cookie)

    //open new grip form popup
    newformbtn.addEventListener('click',()=>{
        newgrippop.style.display = 'block';
    });

    // Close new grip form popup

    closeformbtn.addEventListener('click', ()=>{
        newgrippop.style.display = 'none';
    });

    // click select data
    
    selectBTNdata.addEventListener('click',()=>{
        if(selectdata.value == ""){
            alert("Please select a previous data!");
        }else{
            canvasContainer.style.display = 'block';
            selectedData = dataSelect(selectdata.value);
        }
    });
    
    // close canvas
    closeCanvasBTN.addEventListener('click',()=>{
        clearInterval(settimer);
        settimer = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasContainer.style.display = 'none';
    });

    // canvas start
    startCanvasBTN.addEventListener('click',()=>{
        let k = 0;
        // oneframe(k);
        clearInterval(settimer);
        settimer = null;
        settimer = setInterval(()=>{
            rectangleFrame(k);
            if(k < selectedData[0].target.x.length-1){
                k++;
            }else{
                k=0;
            };
        }, 200);
    });

    saveCanvasBTN.onclick =()=>{
        let content = "data:text/csv;charset=utf-8,";
        content += "Name: " + selectedData[0].name + "\n";
        content += "Date experiments: " + selectedData[0].time + "\n";
        content += "Position of the target : " + "\n";
        content += "x,y" + "\n";
        for(let i =0; i < selectedData[0].target.x.length; i++){
            content += selectedData[0].target.x[i] + "," + selectedData[0].target.y[i] + "\n";
        };
        let downloadlink = document.createElement('a');
        downloadlink.setAttribute('href', encodeURI(content))
        downloadlink.click()
    };

    // drawing function

        
    function rectangleFrame(k){
        xspan.innerHTML = "";
        yspan.innerHTML = "";
        let posAnchorX = [0, selectedData[0].a];
        let posAnchorY = [0, selectedData[0].b];
        var anchors = [];
        var scaleX = (canvas.width-2*marginX)/(selectedData[0].a) ; // pixel
        var scaleY = (canvas.height-2*marginY)/(selectedData[0].b) ;

        for(let i=0; i < posAnchorX.length; i++){
            for(let j=0; j < posAnchorY.length;j++){
                let temp1 = new Anchor(imgWidth);
                temp1.update(posAnchorX[i], posAnchorY[j]);
                anchors.push(temp1);
                temp1 = {};
            }
        };
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tools.grip(canvas, ctx, marginX, marginY, 10, 10);
        anchors.forEach((anchor)=>{
            anchor.drawing(ctx, scaleX, scaleY, marginX, marginY)
        });
        let target = new Target(imgWidth);
        target.update(selectedData[0].target.x[k],selectedData[0].target.y[k]);
        target.drawing(ctx, scaleX, scaleY, marginX, marginY);
        // console.log(anchors)
        xspan.innerHTML = selectedData[0].target.x[k];
        yspan.innerHTML = selectedData[0].target.y[k];
    }
};

