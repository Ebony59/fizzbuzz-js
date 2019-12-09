

// Here, we create our main function.
function fizzbuzz(upper,rule_arr) {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    var i
    for (i=1;i<=upper;i++){
        var array=[i.toString()]
        if (i%15==0 & rule_arr.includes('3') & rule_arr.includes('5')) {
            array=['Fizz','Buzz']
        }
        else if (i%3==0 & rule_arr.includes('3')) {
            array=['Fizz']
        }
        else if (i%5==0 & rule_arr.includes('5')) {
            array=['Buzz']
        }
<<<<<<< 144193172af2a27e09e3379e6afce992fc41d523
        else if (i%11==0) {
=======
        if (i%11==0 & rule_arr.includes('11')) {
>>>>>>> free rules from list
           array=['Bong']
        }
        if (i%7==0 & rule_arr.includes('7')) {
            if (array[0]==i.toString()) {
                array=['Bang']
            }
            else array.push('Bang')
        }
        if (i%13==0 & rule_arr.includes('13')) {
            if (array[0]==i.toString()) {
               array=['Fezz']
            }
            else {
                let has_B=false
                for (let j=0;j<=array.length;j++) {
                    if (array[j][0]='B') {
                        if (j==0) {j=1}
                        array.splice(j-1,0,'Fezz')
                        has_B=true
                        break
                    }
                }
                if (has_B==false) {
                    array.push('Fezz')
                }
            }
        }
        if (i%17==0 & rule_arr.includes('17')) {
            array=array.reverse()
        }
        
        
   
        console.log(array.join(''))

    }

    

    
}

// Now we run the main function...


let rlSync = require('readline-sync');
let upper = rlSync.question("What's the upper bound of FizzBuzz?\n");
let rule=rlSync.question("What are the rules?\n")
rule_arr=rule.split(',')
fizzbuzz(upper,rule_arr);
