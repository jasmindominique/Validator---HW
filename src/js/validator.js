//Class notes from Chelsea  + Current HW
console.log("hello")
class validator{
        //when creating a class there is no classwide variable. 
        //class-wide variables are created by assigning it to *this* (i.e this.$form)
        //this is the first function called wen the the class is instantiated (created) in main.js
    constructor(formSelector, inputSelector, userCode){
        //confirms the selector that this validator is using for output
        console.log('validator has been constructed! for:', formSelector, inputSelector, userCode);

        // store a refrence to our DOM element as this.$form
        //this.$form becomes a classwide variable when attached to *this*
        //so we can use it elsewhere inside THIS class (class validator) / instance 
        
       this.$form = document.querySelector(formSelector);
       this.$input = document.querySelector(inputSelector);
       this.userCode = 'puppies';
       this.setupListeners();

       if (userCode !=undefined){
            this.userCode = userCode.secretCode;
       }        
    }

    // this is the first method called in the construcor
    //so this is our next line for our logic flow
    setupListeners = () => {
        console.log('setupListeners', this.$input);
        this.$form.addEventListener('submit', this.formSubmitListener);
        this.$input.addEventListener('keyup', this.easterEggListener);
                                    //when keyup happens, call this function
    }


    formSubmitListener = (aDomEvent) => {
        console.log('formSubmitListener', aDomEvent);
        aDomEvent.preventDefault();
    }


    easterEggListener= (anotherDomEvent) =>{
        const secretCode= 'puppies';
        let secretBox= document.querySelector('.secretbox');
        let secret= document.querySelector('.secret');


        console.log('where is my secret message');
        console.log('easterEggListener is present:', anotherDomEvent, this.userCode);
       
        if (this.$input.value === this.userCode){

            secret.style.visibility = 'visible';
            secret.innerHTML = this.userCode;
            secret.style.position = 'absolute';
            
            console.log('the world is quiet here');
        }
            setTimeout(function(){
            secret.style.visibility = 'hidden';
            }, 3000);

        }    
    }



// else if (this.$input.value === userCode){

//             secret.style.visibility = 'visible';
//             secret.innerHTML = userCode;
//             secret.style.position = 'absolute';
//             secret.style.background-color = 'blue';
//             secret.style.color = 'white';

//             console.log('the world is quiet here');
//         }

        // const defaultOptions={
        //         secret.style.visibility = 'visible',
        //         secret.innerHTML = secretCode,
        //         secret.style.position = 'absolute',
        //     } 




