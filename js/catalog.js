function openBilingPage (Str){
    var value = Str;
    
    var arr = value.split("-");
    
    if(arr[1] == "indiv"){
        window.location.href="views/billingPage.html?product="+arr[0];
    }else if(arr[1] == "b2b"){
        window.location.href="views/b2bbillingPage.html?product="+arr[0];
     
    }
 
              
    
   
}