function fun(a){
    document.getElementById('display').value+=a;
}
function clear(){
    document.getElementById('display').value='';
}
function result(){
    var a = document.getElementById('display').value;
    var b = eval(a);
    document.getElementById('display').value=b;
}