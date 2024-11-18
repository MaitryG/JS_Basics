//Mapping
const input = [1,2,3,4,5];
let newArray = []

function transform(i){
    return i*2;
}
newArray = input.map(transform);
console.log(newArray);


//Filtering
function filterTransform(n){
    if (n % 2 == 0){
        return true;
    }else{
        return false;
    }
}


const a = input.filter(filterTransform);
console.log(a);