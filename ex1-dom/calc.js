window.addEventListener("load", function(){
    const inputs = this.document.querySelectorAll("form input");
    
    const xInput = inputs[0];
    const yInput = inputs[1];
    const resetButton = inputs[2];
    const submitButton = inputs[3];
    const resultSpan = this.document.querySelector("form span : last-child");

    for(let i = 0; i < inputs; ++i){
        console.log(inputs[i]);
    }

    console.log(resultSpan);

    resetButton.onClick = (e) => {
        xInput = 0;
        yInput = 0;
        resultSpan.innerText = 0;
        
    }; 


    submitButton.onClick = (e) => {


    };

});