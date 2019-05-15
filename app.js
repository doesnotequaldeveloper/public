function collatzfunc() {
    const htmlsection = document.getElementById('innerHTMLstartval'); 
    const htmlsection2 = document.getElementById('innerHTML2');
    const htmlarrlength = document.getElementById('arrlength');
    const startvalue = prompt("Enter starting value"); // run a prompt box to collect the user's name

    htmlsection.innerHTML = 'This is your start value: ' + startvalue; 
    
    const startingval = Math.floor(startvalue);
    const eachiteration = [startingval];

    for (let i = 0; eachiteration[i-1] !== 1 && eachiteration[i-2] !== 2 && eachiteration[i-3] !== 4; i++) {
        const iteration = eachiteration[i] % 2 === 0 ?
            eachiteration[i] / 2 :
            3 * eachiteration[i] + 1;

        eachiteration.push(iteration);
    }
         
    htmlsection2.innerHTML = 'Series: ' + eachiteration;		
    htmlarrlength.innerHTML = 'This evaluation converged in: ' + eachiteration.length + ' iterations.' ;	   		
}
