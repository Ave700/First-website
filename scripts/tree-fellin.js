let stockpile = 0;
let treebank = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


class Tree {
    constructor(id,age) {
        this.id = id;
        this.age = age;
        this.cssClass = "hold";
        
    }

    cut() {
        document.getElementById(this.id).classList.remove(this.cssClass);
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).classList.add('fertile');
        stockpile = stockpile + this.wood;
        document.getElementById("stock").innerHTML = stockpile;
        treebank[(this.id)-1] = 0;
        console.log(stockpile);
    };
    
    grow() {
        console.log(this.id);
        treebank[this.id] = 1;
        document.getElementById(this.id).classList.remove('fertile');
        document.getElementById(this.id).classList.add(this.cssClass);
        document.getElementById(this.id).innerHTML = "<button onclick=\"tree"+this.id+".cut()\">Harvest</button>";
    };
    
}


class Dougless extends Tree{
    constructor(id,age){
        super(id, age);
        //added
        this.wood = (age*20);
        this.cssClass = 'dougless';
    }
}
class Apple extends Tree{
    constructor(id,age){
        super(id, age);
        this.cssClass = 'apple';
        this.wood = (age*10);
    }
}
class Oak extends Tree{
    constructor(id,age){
        super(id, age);
        this.cssClass = 'oak';
        this.wood = (age*50);
     }
}

//I had dreams of random/dynamic processes. Time stopped my and its all hard coded.
let tree1 = new Oak(1,10);
let tree2 = new Dougless(2,3);
let tree3 = new Apple(3,12);
let tree4 = new Apple(4,5);
let tree5 = new Dougless(5,14);
let tree6 = new Oak(6,5);
let tree7 = new Oak(7,11);
let tree8 = new Apple(8,50);
let tree9 = new Dougless(9,10);
let tree10 = new Dougless(10, 8);
let tree11 = new Oak(11,10);
let tree12 = new Oak(12,4);
let tree13 = new Apple(13,11);
let tree14 = new Oak(14,10);
let tree15 = new Dougless(15,37);
let tree16 = new Oak(16,20);

var trees = [tree1,tree2,tree3,tree4,tree5,tree6,tree7,tree8, tree9, tree10, tree11, tree12, tree13, tree14, tree15, tree16];



function robustGrowth(jumpman){
    
    if (treebank[jumpman] == 0) {
        trees[jumpman].grow();
        treebank[jumpman]=1;
        // jumpman = ((Math.floor(Math.random()*16)));
        // robustGrowth(jumpman);
    }
    
    
};

window.onload = function(){
    
    
        
        setInterval(function(){
            robustGrowth(((Math.floor(Math.random()*16))))
        },1000);
        
    
    
        

    
}

// document.getElementsByClassName("occupied").onclick = cut(this.id);

