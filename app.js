function collatzfunc() {
    
    var startvalue = prompt("Enter starting value");		// run a prompt box to collect the user's name
    var htmlsection = document.getElementById('innerHTMLstartval'); 
    htmlsection.innerHTML = 'This is your start value: ' + startvalue; 
    
    let startingval = Math.floor(startvalue);
    let eachiteration =[0];
    eachiteration[0]=startingval

    let i = 0;
    do {
        if(eachiteration[i]%2===0){
            eachiteration.push(eachiteration[i]/2);
    }  
    else{
        eachiteration.push(3*eachiteration[i]+1);
    }
        i++;
    } while (eachiteration[i-1]!==1&&eachiteration[i-2]!==2&&eachiteration[i-3]!==4);

    var htmlsection2 = document.getElementById('innerHTML2');          
    htmlsection2.innerHTML = 'Series: ' +eachiteration;		

    var htmlarrlength = document.getElementById('arrlength');          
    htmlarrlength.innerHTML = 'This evaluation converged in: '+ eachiteration.length +' iterations.' ;	   		
}