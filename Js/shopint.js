console.log('hi')

                      // ******case  part******


 // ase + button 
document.getElementById('button-case-plus').addEventListener('click',function(){


    // case input fild 

    const caseInput = document.getElementById('case-input-fild')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput+1);
    const FinalConvartValueOfCaseInput = convartValueOfCaseInput+1
    caseInput.value = convartValueOfCaseInput+1;

     // Case Doler $ fild
     const caseDolar = document.getElementById('cas-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = 59 * FinalConvartValueOfCaseInput;
     caseDolar.innerText = FinalConvartValueCaseDolar;



    //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  + 59;
     subtotal.innerText = finalConvartValueSubtotal;

    
    // tax itme 

     const Tax = document.getElementById('Tax-total')
     const valueTax = Tax.innerText;
     const valueTaxParcentage = 59 * 0.03 ;
     console.log(valueTaxParcentage)
     const convartValueTax = parseFloat(valueTax)
     const finalConvartValueTax =  convartValueTax + valueTaxParcentage;
     const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
    Tax.innerText = tofixedFinalConvartValueTax;
    


    // total dolar

    const total =document.getElementById('total-dolar') ;
    const valueTotal = total.innerText;
    const convartValueTotal = parseFloat(valueTotal);
    const s = parseFloat(finalConvartValueSubtotal)
    const d = parseFloat(tofixedFinalConvartValueTax)
    const finalConvartValueTotal =s  +d  ;
    total.innerText = finalConvartValueTotal;


})


// case - minus button 

document.getElementById('case-minus-button').addEventListener('click',function(){
    console.log('hi')

    // case input fild 

    const caseInput = document.getElementById('case-input-fild')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput-1);
    const FinalConvartValueOfCaseInput = convartValueOfCaseInput-1
    if(FinalConvartValueOfCaseInput<0)
    {
        return ;
    }
    caseInput.value = convartValueOfCaseInput-1;



     // Case Doler $ fild

     const caseDolar = document.getElementById('cas-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = convartValueCaseDolar - 59;
     caseDolar.innerText = FinalConvartValueCaseDolar;



    //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  - 59;
     subtotal.innerText = finalConvartValueSubtotal;


        // tax itme 
    
        const Tax = document.getElementById('Tax-total')
        const valueTax = Tax.innerText;
        const valueTaxParcentage = 59 * 0.03 ;
        console.log(valueTaxParcentage)
        const convartValueTax = parseFloat(valueTax)
        const finalConvartValueTax =  convartValueTax - valueTaxParcentage;
        const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
        if(finalConvartValueTax < 0)
        {
            return;
        }
       Tax.innerText = tofixedFinalConvartValueTax;




    // total dolar

    const total =document.getElementById('total-dolar') ;
    const valueTotal = total.innerText;
    const convartValueTotal = parseFloat(valueTotal);
    const s = parseFloat(finalConvartValueSubtotal)
    const d = parseFloat(tofixedFinalConvartValueTax)
    const finalConvartValueTotal =s  - d  ;
    total.innerText = finalConvartValueTotal;
})


// corrous-button
document.getElementById('crrous-button').addEventListener('click',function(){
    console.log('hi')


    // case input fild 

    const caseInput = document.getElementById('case-input-fild')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput);
    caseInput.value = convartValueOfCaseInput*0;



     // Case Doler $ fild

     const caseDolar = document.getElementById('cas-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = convartValueCaseDolar * 0;
     caseDolar.innerText = FinalConvartValueCaseDolar;



       //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  - convartValueOfCaseInput*59;
     subtotal.innerText = finalConvartValueSubtotal;
    


      // tax itme 

      const Tax = document.getElementById('Tax-total')
      const valueTax = Tax.innerText;
      const valueTaxParcentage = 59 * 0.03 ;
      const convartValueTax = parseFloat(valueTax)
      const finalConvartValueTax =  convartValueTax -( valueTaxParcentage* convartValueOfCaseInput);
      const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
      if(tofixedFinalConvartValueTax < 0)
      {

       Tax.innerText = 0.0000;
         
      }
      else{
     Tax.innerText = tofixedFinalConvartValueTax;

      }

})



                    //   **** Iphone 11 part ***


// plus + button 

 document.getElementById('phone-plus-button').addEventListener('click',function(){

    console.log('hi')

    // // case input fild 

    const caseInput = document.getElementById('number-of-phone-input')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput+1);
    const FinalConvartValueOfCaseInput = convartValueOfCaseInput+1
    caseInput.value = convartValueOfCaseInput+1;

     // Case Doler $ fild
     const caseDolar = document.getElementById('phone-value-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = 1219 * FinalConvartValueOfCaseInput;
     caseDolar.innerText = FinalConvartValueCaseDolar;



    //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  + 1219;
     subtotal.innerText = finalConvartValueSubtotal;


         // tax itme 

         const Tax = document.getElementById('Tax-total')
         const valueTax = Tax.innerText;
         const valueTaxParcentage = 1219 * 0.03 ;
         console.log(valueTaxParcentage)
         const convartValueTax = parseFloat(valueTax)
         const finalConvartValueTax =  convartValueTax + valueTaxParcentage;
         const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
        Tax.innerText = tofixedFinalConvartValueTax;



    // total dolar

    const total =document.getElementById('total-dolar') ;
    const valueTotal = total.innerText;
    const convartValueTotal = parseFloat(valueTotal);
    const s = parseFloat(finalConvartValueSubtotal)
    const d = parseFloat(tofixedFinalConvartValueTax)
    const finalConvartValueTotal =s  +d  ;
    total.innerText = finalConvartValueTotal;      
    
})


// case - minus button 

document.getElementById('phone-minus-button').addEventListener('click',function(){
    console.log('hi')

    // case input fild 

    const caseInput = document.getElementById('number-of-phone-input')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput-1);
    const FinalConvartValueOfCaseInput = convartValueOfCaseInput-1
    if(FinalConvartValueOfCaseInput<0)
    {
        return ;
    }
    caseInput.value = convartValueOfCaseInput-1;



     // Case Doler $ fild

     const caseDolar = document.getElementById('phone-value-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = convartValueCaseDolar - 1219 ;
     caseDolar.innerText = FinalConvartValueCaseDolar;


    //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  - 1219;
     subtotal.innerText = finalConvartValueSubtotal;



             // tax itme 

             const Tax = document.getElementById('Tax-total')
             const valueTax = Tax.innerText;
             const valueTaxParcentage = 1219 * 0.03 ;
             console.log(valueTaxParcentage)
             const convartValueTax = parseFloat(valueTax)
             const finalConvartValueTax =  convartValueTax - valueTaxParcentage;
             const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
             if(finalConvartValueTax < 0)
               {
                  return;
                 }
            Tax.innerText = tofixedFinalConvartValueTax; 
    



    // total dolar

    const total =document.getElementById('total-dolar') ;
    const valueTotal = total.innerText;
    const convartValueTotal = parseFloat(valueTotal);
    const s = parseFloat(finalConvartValueSubtotal)
    const d = parseFloat(tofixedFinalConvartValueTax)
    const finalConvartValueTotal =s  - d  ;
    total.innerText = finalConvartValueTotal;          

})


// corrous-button
document.getElementById('crrous-button-for-phone').addEventListener('click',function(){
    console.log('hi')


    // case input fild 

    const caseInput = document.getElementById('number-of-phone-input')
    const valueOfCaseInput = caseInput.value;
    const convartValueOfCaseInput = parseInt(valueOfCaseInput);
    console.log(convartValueOfCaseInput);
    caseInput.value = convartValueOfCaseInput*0;



     // Case Doler $ fild

     const caseDolar = document.getElementById('phone-value-dolar')
     const valueCaseDolar = caseDolar.innerText;
     console.log(valueCaseDolar);
     const convartValueCaseDolar = parseFloat(valueCaseDolar);
     const FinalConvartValueCaseDolar = convartValueCaseDolar * 0;
     caseDolar.innerText = FinalConvartValueCaseDolar;



            //  subtotal itme 

    const subtotal= document.getElementById('Subtotal-option')
    const valueSubtotal = subtotal.innerText;
    const textValueSubtotal = parseFloat(valueSubtotal)
    const finalConvartValueSubtotal = textValueSubtotal  - convartValueOfCaseInput*1219;
     subtotal.innerText = finalConvartValueSubtotal;

    
     
     
         // tax itme 

         const Tax = document.getElementById('Tax-total')
         const valueTax = Tax.innerText;
         const valueTaxParcentage = 1219 * 0.03 ;
         const convartValueTax = parseFloat(valueTax)
         const finalConvartValueTax =  convartValueTax -( valueTaxParcentage* convartValueOfCaseInput);
         const tofixedFinalConvartValueTax = finalConvartValueTax.toFixed(4)
         if(tofixedFinalConvartValueTax < 0)
         {
   
          Tax.innerText = 0.0000;
            
         }
         else{
        Tax.innerText = tofixedFinalConvartValueTax;
   
         }
})


document.getElementById('check-out').addEventListener('click',function(){
    alert('YOU ARE SUCCESSFUL TO BUYING IPHONE-11!!');
})