// Here, we create our main function.
function fizzbuzz(upper, rule_arr) {

    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    var i
    for (i = 1; i <= upper; i++) {
        var array = [i.toString()]
        if (i % 15 === 0 && rule_arr.includes('3') && rule_arr.includes('5')) {
            array = ['Fizz', 'Buzz'];
        } else if (i % 3 === 0 && rule_arr.includes('3')) {
            array = ['Fizz']
        } else if (i % 5 === 0 && rule_arr.includes('5')) {
            array = ['Buzz']
        } else if (i % 11 === 0 && rule_arr.includes('11')) {
            array = ['Bong']
        }
        if (i % 7 === 0 && rule_arr.includes('7')) {
            if (array[0] === i.toString()) {
                array = ['Bang']
            } else {
                array.push('Bang')
            }
        }
        if (i % 13 === 0 && rule_arr.includes('13')) {
            if (array[0] === i.toString()) {
                array = ['Fezz']
            } else {
                let has_B = false
                for (let j = 0; j <= array.length; j++) {
                    if (array[j][0] === 'B') {
                        if (j === 0) {
                            j = 1
                        }
                        array.splice(j - 1, 0, 'Fezz')
                        has_B = true
                        break
                    }
                }
                if (has_B === false) {
                    array.push('Fezz')
                }
            }
        }
        if (i % 17 === 0 && rule_arr.includes('17')) {
            array = array.reverse()
        }



        console.log(array.join(''))

    }




}

function fizzbuzzfree(upper, rule_dict) {
    console.log('Welcome to FizzBuzz!');
    for (let i = 0; i <= upper; i++) {
        var array = [i.toString()]
        for (let j = 0; j < rule_dict.length; j++) {
            if (i % rule_dict[j].Number === 0) {
                if (rule_dict[j].Position != '') {
                    let has_key = false
                    for (let j = 0; j <= array.length; j++) {
                        if (array[j][0] === rule_dict[j].Position) {
                            if (j === 0) {
                                j = 1
                            }
                            array.splice(j - 1, 0, rule_dict[j].Word)
                            has_key = true
                            break
                        }
                    }
                    if (has_key === false) {
                        if (array[0] === i.toString()) {
                            array = [rule_dict[j].Word]
                        } else {
                            array.push(rule_dict[j].Word)
                        }

                    }
                } else {
                    if (array[0] === i.toString()) {
                        array = [rule_dict[j].Word]
                    } else {
                        array.push(rule_dict[j].Word)
                    }
                }
                if (rule_dict[j].Reverse === 'y') {
                    array = array.reverse()
                }

            }
        }
        console.log(array.join(''))
    }
}

// Now we run the main function...


let rlSync = require('readline-sync');
let upper = rlSync.question("What's the upper bound of FizzBuzz?\n")
let mode = rlSync.question("Do you want to introduce your own rules(y) or use given ones(n)?(y/n)\n")
if (mode === 'n') {
    let rule = rlSync.question("What are the rules?\n")
    rule_arr = rule.split(',')
    fizzbuzz(upper, rule_arr);
} else if (mode === 'y') {
    var rule_dict = []
    let finish = false
    while (finish === false) {
        console.log('Please enter your rules in the order you want to execute')
        let number = rlSync.question("What multiples do you want to introduce rules on?\n")
        let word = rlSync.question("What's the key word?(type nothing if you don't want a keyword)\n")
        let position = rlSync.question("Any specific letter you want to add the key word?(type nothing if you just want to add to the end)\n")
        let rev = rlSync.question("Reverse the order(y/n)?\n")
        let new_arr = {
            Number: number,
            Word: word,
            Position: position,
            Reverse: rev
        }
        rule_dict.push(new_arr)
        let want_to_finish = rlSync.question("Are you done?(y/n)\n")
        if (want_to_finish === 'y') {
            finish = true
        }
    }
    fizzbuzzfree(upper, rule_dict)
}