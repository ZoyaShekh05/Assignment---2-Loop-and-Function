//                              <---------------18. Multiplication Table Function -------------->

// Create a function printTable(num) that prints the multiplication table of the given number. 



function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

table(5);