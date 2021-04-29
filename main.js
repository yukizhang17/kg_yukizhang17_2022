/* 
This is a program that convert an array of integers into an array 
of strings representing the phonetic equivalent of the integer.
*/

/* Give a global var which will do the conversion */
var num_to_str = {"0":"Zero", "1":"One", "2":"Two", "3":"Three", "4":"Four", "5":"Five", 
                  "6":"Six", "7":"Seven", "8":"Eight", "9":"Nine"}

/* Get the input array from argv and extract them out */
var argv = process.argv;
var input = argv.slice(2);
console.log(input);

/* Loop through each input */
for (var i = 0; i < input.length; i++) {
    var num = input[i];
    /* Create a variable val hold the conversion for each input value */
    var val = "";
    /* Loop through each number in the input and do the conversion respectively */
    for (var j = 0; j < num.length; j++) {
        val = val + num_to_str[num[j]]
    };
    console.log(val)

};