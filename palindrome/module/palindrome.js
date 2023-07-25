
exports.checker = (str) =>{
    var arr = [];

    var rev =[];
    arr = Array.from(str);
    
    
    
    for(var i = arr.length -1; i >= 0; i--){
        rev.push(arr[i]);

    }
    
    

    for(var j = 0; j < rev.length; j++){
        if(arr[j] != rev[j]){
            return "Not a Palindrome"
        }
        
    }
    return "It is a Palindrome"

    

}