function countdown() {
    const output = document.getElementById('output');
    output.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            output.innerHTML = i; 
        }, i * 1000); 
    }

    setTimeout(() => {
        output.innerHTML = 'Happy Birthday!'; 
    }, 11 * 1000); 
}

countdown();