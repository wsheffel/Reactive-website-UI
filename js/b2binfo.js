function changeImage() { 
    var url = window.location.href;
         var args = url.split('&').pop().split('=').pop();
             var newsrc = "../img/"+args+".jpg";

                document.getElementById("productimg").src = newsrc; 
                document.getElementById("packagedetatils").innerHTML = "Your Selection is:   1 " + args + " Subscription ";
                
            }



$(document).ready(function() {  
     console.log('inside ready');
         
             
     $("#fname").focusout(function() {  
                if($(this).val()=='') {  
                    $(this).css('border', 'solid 2px red');  
                    $("#fname").parent().after("<div id='validationfname' class='validation' style='color:red;margin-bottom: 20px;'>Please enter First Name</div>");

                } 
                else { 
                      
                    // If it is not blank. 
                    $(this).css('border', 'solid 2px green');
                    $("#validationfname").html('');
                    $("#validationfname").removeClass("validation");
                }     
             
     
        })
     $("#fname").click(function() {  
                $("#validationfname").html('');
                $("#validationfname").removeClass("validation");    
      })
     $("#fname").focusin(function() {  
                $("#validationfname").html('');
                $("#validationfname").removeClass("validation");    
      })
     
            $("#lname").focusout(function() {  
                if($(this).val()=='') {  
                    $(this).css('border', 'solid 2px red');
                    $("#lname").parent().after("<div id='validationlname' class='validation' style='color:red;margin-bottom: 20px;'>Please enter Last Name</div>");

                } 
                else { 
                      
                    // If it is not blank. 
                    $(this).css('border', 'solid 2px green');
                    $("#validationlname").html('');
                    $("#validationlname").removeClass("validation");
                }     
             
     
        })
     $("#lname").click(function() {  
                $("#validationlname").html('');
                $("#validationlname").removeClass("validation");    
      })
     $("#lname").focusin(function() {  
                $("#validationlname").html('');
                $("#validationlname").removeClass("validation");    
      })
     
     $("#add1").focusout(function() {  
                if($(this).val()=='') {  
                    $(this).css('border', 'solid 2px red');
                    $("#add1").parent().after("<div id='validationadd1' class='validation' style='color:red;margin-bottom: 20px;'>Please enter atleast 1 line of address</div>");

                } 
                else { 
                      
                    // If it is not blank. 
                    $(this).css('border', 'solid 2px green'); 
                    $("#validationadd1").html('');
                    $("#validationadd1").removeClass("validation");
                }     
             
     
        })
     $("#add1").click(function() {  
                $("#validationadd1").html('');
                $("#validationadd1").removeClass("validation");    
      })
     $("#add1").focusin(function() {  
                $("#validationadd1").html('');
                $("#validationadd1").removeClass("validation");    
      })
     
     $("#phonenumber").focusout(function() {  
          var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

                if(!$(this).val().match(phoneno)) {  
                    $(this).css('border', 'solid 2px red');
                    $("#phonenumber").parent().after("<div id='validationphn' class='validation' style='color:red;margin-bottom: 20px;'>Please enter a valid phone number</div>");

                } 
                else { 
                      
                    // If it is not blank. 
                    $(this).css('border', 'solid 2px green'); 
                    $("#validationphn").html('');
                    $("#validationphn").removeClass("validation");
                }     
             
     
        })
     $("#phonenumber").click(function() {  
                $("#validationphn").html('');
                $("#validationphn").removeClass("validation");    
      })
     $("#phonenumber").focusin(function() {  
                $("#validationphn").html('');
                $("#validationphn").removeClass("validation");    
      })
                                 
    
     $("#zipcode").focusout(function() {  
          var zipRegex = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;

                if(!$(this).val().match(zipRegex)) {  
                    $(this).css('border', 'solid 2px red');
                    $("#zipcode").parent().after("<div id='validationzip' class='validation' style='color:red;margin-bottom: 20px;'>Please enter a valid Zip Code</div>");

                } 
                else { 
                      
                    // If it is not blank. 
                    $(this).css('border', 'solid 2px green'); 
                    $("#validationzip").html('');
                    $("#validationzip").removeClass("validation");
                }     
             
     
        })
     $("#zipcode").focusin(function() {  
                $("#validationzip").html('');
                $("#validationzip").removeClass("validation");    
      })
     $("#zipcode").click(function() {  
                $("#validationzip").html('');
                $("#validationzip").removeClass("validation");    
      })
     
     
    
     
    $("#billingButton").click(function() {  
      
                var fnameval = $('input[type="text"]#fname ').val();
                var lnameval = $('input[type="text"]#lname ').val();
                var add1val = $('input[type="text"]#add1 ').val();
                var add2val = $('input[type="text"]#add2 ').val();
                var add3val = $('input[type="text"]#add3 ').val();
                var zipcodeval = $('input[type="text"]#zipcode ').val();
                var phnval = $('input[type="tel"]#phonenumber ').val();
                var fullnameval = $('input[type="text"]#fullname ').val();
        
        
         if(fnameval == ''){
                $("#fname").css('border', 'solid 2px red');  
                $("#fname").parent().after("<div id='validationfname' class='validation' style='color:red;margin-bottom: 20px;'>Please enter First Name</div>");
            }
            
        if(lnameval == ''){
                $("#lname").css('border', 'solid 2px red');  
                $("#lname").parent().after("<div id='validationlname' class='validation' style='color:red;margin-bottom: 20px;'>Please enter Last Name</div>");
            }
        
        if(add1val == ''){
                $("#add1").css('border', 'solid 2px red');  
                $("#add1").parent().after("<div id='validationadd1' class='validation' style='color:red;margin-bottom: 20px;'>Please enter atleast 1 line of address</div>");
            }
        
        if(zipcodeval == ''){
                $("#zipcode").css('border', 'solid 2px red');  
                $("#zipcode").parent().after("<div id='validationzip' class='validation' style='color:red;margin-bottom: 20px;'>Please enter Zip Code</div>");
            }
        console.log(phnval);
        if(phnval == ''){
                $("#phonenumber").css('border', 'solid 2px red');  
                $("#phonenumber").parent().after("<div id='validationphn' class='validation' style='color:red;margin-bottom: 20px;'>Please enter Phone Number</div>");
            }
        
        if(fullnameval == ''){
                $("#fullname").css('border', 'solid 2px red');  
                $("#fullname").parent().after("<div id='validationfunme' class='validation' style='color:red;margin-bottom: 20px;'>Please enter Credit Card Number</div>");
            }
        
            if($(".validation").length != 0){
                alert("Please correct the errors and click the button again!");
            }else{
        

                
        
        
                $("#billingHeader").hide();
                $("#billingDiv").hide();
                $("#billingButton").hide();
        
                $("#billingveriy").show();
                $("#billingverifyDiv").show();
                $("#billingVerifyButton").show();
                
                $("#fnamevfy").text(fnameval);
                $("#lnamevfy").text(lnameval);
                $("#add1vfy").text(add1val);
                $("#add2vfy").text(add2val);
                $("#add3vfy").text(add3val);
                $("#zipcodevfy").text(zipcodeval);
                $("#phonenumbevfyr").text(phnval);

            }
        
                 
      }) 
     
    $("#billingVerifyButton").click(function() {  
        
            window.location ="../views/b2borderconfirmation.html";
        
                 
      })
        });