

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    var i
    for (i=1;i<=100;i++){
        var string=i.toString()
        if (i%15==0) {
            string='FizzBuzz'
        }
        else if (i%3==0) {
            string='Fizz'
        }
        else if (i%5==0) {
            string='Buzz'
        }
        else if (i%11==0) {
            string='Bong'
        }
        if (i%7==0) {
            if (string==i.toString()) {
                string='Bang'
            }
            else string+='Bang'
        }
        

        console.log(string)

    }

    

    
}

// Now we run the main function...
fizzbuzz();
