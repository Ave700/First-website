class Tree {
    constructor(type, age, location) {
        this.type = type;
        this.age = age;
        this.location = location;
        var chopped = 0;
    }

    cut() {
        this.chopped = 1;
    }
}

var treeTypes = ['Dougless', 'Apple', 'Cherry'];
var treeAges = [1,2,3];
var treeLocations = [[1,1],[1,2],[1,3],[1,4],
                    [2,1],[2,2],[2,3],[2,4],
                    [3,1],[3,2],[3,3],[3,4],
                    [4,1],[4,2],[4,3],[4,4]]

function grow() {
    let tree = new Tree();
    tree.type = treeTypes[0];
    tree.age = treeAges[0];
    tree.location = [0];
    
}