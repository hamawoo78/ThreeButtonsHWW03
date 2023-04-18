let origArray = [2,3,4]

function square() {
    let x = origArray.map(mySquare);
    print(x);
};

document.addEventListener("DOMContentLoaded", function (event) {
 
    let cubeFunction = function(){
        let x = origArray.map(myCube);
        print(x);
    };
    document.getElementById("cube").addEventListener("click", cubeFunction);


    
    function toTheFouth(){
        let x = origArray.map(myToTheFouth);
        print(x);
    }
    document.getElementById("toTheFouth").addEventListener("click", toTheFouth);
});

function mySquare(oneItem) {
    return oneItem ** 2;
}

function myCube(oneItem) {
    return Math.pow(oneItem, 3);
}

function myToTheFouth(oneItem) {
    return Math.pow(oneItem, 4);
}

function print(x){
    for (let i = 0; i < x.length; i++) {
        document.getElementById("output"+i).value = x[i];
      }
}
