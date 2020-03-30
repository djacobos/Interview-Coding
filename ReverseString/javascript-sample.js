// Create a function that takes a string: "Thomasville"
// reverse the string to output "ellivsamoht"
function reverseStringUsingBuiltInMethod(str){
    console.log("Original: " + str);
    //Split will create an array:
    var result = str.split("").reverse();
    console.log("End Result: " + result.join(""));
}

function reverseStringUsingLoop(str){
    console.log("Original Before Loop: " + str);
    var result = "";
    for(var x = str.length -1; x >= 0; x--){
        result += str[x];
    }
    console.log("End Result After Loop: " + result);
}

reverseStringUsingBuiltInMethod("Thomasville");
reverseStringUsingLoop("Thomasville");