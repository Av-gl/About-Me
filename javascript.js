document.addEventListener('DOMContentLoaded',function(){
    let val1=false;
    let val2=false;
    let val3=false;
    let val4=false;
    document.querySelector("#submit").addEventListener("click",function () {
        let response1 = document.querySelector('#fname');
        if (response1.value.length >= 1){
            response1.style.backgroundColor = "green";
            val1=true;
        }
        else{
            response1.style.backgroundColor = "red";
            val1=false;
        }

        let response2 = document.querySelector('#lname');
        if (response2.value != ""){
            response2.style.backgroundColor = "green";
            val2=true;
        }
        else{
            response2.style.backgroundColor = "red";
            val1=false;
        }

        let response3 = document.querySelector('#email');
        if (response3.value != ""){
            response3.style.backgroundColor = "green";
            val3=true;
        }
        else{
            response3.style.backgroundColor = "red";
            val1=false;
        }

        let response4 = document.querySelector('#message');
        if (response4.value != ""){
            response4.style.backgroundColor = "green";
            val4=true;
        }
        else{
            response4.style.backgroundColor = "red";
            val1=false;
        }

        if (val1==true && val2==true && val3==true && val4==true){
           document.querySelector('#feedback1').innerHTML="Thank you for submitting!";
           document.querySelector('#feedback1').style.color = "green";
        }
        else{
            document.querySelector('#feedback1').innerHTML="Please fill in the contents!";
            document.querySelector('#feedback1').style.color = "red";
        }
    });
});