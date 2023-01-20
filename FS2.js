    //const number = parseInt(prompt('Enter the number of terms:'));
    // parseInt helps extract an element from the string


    var a=0;
    var b=1;
    var nextTerm
    
    var number = prompt('Enter a number:')
    document.write('Fibonacci Sequence: ');
    document.write(a, b);
    nextTerm = a+b;


    //for(var i=1; i<=number; i++) {document.write(a); nextTerm= a+b; a=b; b=nextTerm;}

   
    while(nextTerm <= number) {
        document.write(nextTerm);
        a=b;
        b=nextTerm
        nextTerm=a+b
    }
