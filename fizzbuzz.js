

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
        if (i%13==0) {
            if (string==i.toString()) {
                string='Fezz'
            }
            else {
                ind=string.indexOf('B')
                if (ind==-1) {
                    string+='Fezz'
                }
                else {
                    string=string.slice(0,ind)+"Fezz"+string.slice(ind)
                }
            }
        }
        

        console.log(string)

    }

    

    
}

// Now we run the main function...
fizzbuzz();
