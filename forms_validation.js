
function isEmpty(){
    let Fname= document.querySelector( '#inputFirstname').value;
    let Lname= document.querySelector( '#inputLastname').value;
    let Address= document.querySelector( '#Address').value;
    let Email= document.querySelector( '#inputEmail').value;
    let password= document.querySelector( '#inputPassword').value;
    let comment= document.querySelector( '#exampleFormControlTextarea1').value;
    let re = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let re1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    let re12=/^(?=.{8,})/;
    
    
    

    if( (Fname =='') ||(Lname=='') || (Address=='') || (password=='')||(Email==''))
   return swal({
       
        type: 'error',
        title: 'ERROR',
        text:'One of the inputs is empty'});
    else if(  re12.test(String(password))== false)
    return swal({
        
        type: 'error',
        title: 'ERROR',
        text: 'The password has less than 8 characters'});
    else if (re.test(String(Email)) == false)
    return swal({
        type: 'error',
        title: 'ERROR',
        text: 'Doesn\'t have a valid e-mail adress'});
    else if(re1.test(String(password))== false)
    return swal('The password must be a combination of charatacters , numbers and at least a capital letter')
    
}

    

