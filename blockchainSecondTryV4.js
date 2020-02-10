console.log("Charle I like your shorts")
let medicalExpanded = false;
let perscriptionsExpanded = false;
let vaccinationsExpanded = false;

let financialExpanded = false;
let statementsExpanded = false;
let accountExpanded = false;

let educationalExpanded = false;
let reportsExpanded = false;
let essaysExpanded = false;

function medicalExpand(){
let elements = document.getElementsByClassName("medicalSub"); 
   if(medicalExpanded == false){
        medicalExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       medicalExpanded = false;
       perscriptionsExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}

function financialExpand(){
let elements = document.getElementsByClassName("financialSub"); 
   if(financialExpanded == false){
        financialExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       financialExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function educationalExpand(){
let elements = document.getElementsByClassName("educationalSub"); 
   if(educationalExpanded == false){
        educationalExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       educationalExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function perscriptionsExpand(){
let elements = document.getElementsByClassName("perscriptionsSub"); 
   if(perscriptionsExpanded == false){
        perscriptionsExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       perscriptionsExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}

function vaccinationsExpand(){
let elements = document.getElementsByClassName("vaccinationsSub"); 
   if(vaccinationsExpanded == false){
        vaccinationsExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       vaccinationsExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function statementsExpand(){
let elements = document.getElementsByClassName("statementsSub"); 
   if(statementsExpanded == false){
        statementsExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       statementsExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function accountExpand(){
let elements = document.getElementsByClassName("accountSub"); 
   if(accountExpanded == false){
        accountExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       accountExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function reportsExpand(){
let elements = document.getElementsByClassName("reportsSub"); 
   if(reportsExpanded == false){
        reportsExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       reportsExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}


function essaysExpand(){
let elements = document.getElementsByClassName("essaysSub"); 
   if(essaysExpanded == false){
        essaysExpanded = true;
    for(let i in elements){
        elements[i].style.display = "block";
    }
   }else{
       essaysExpanded = false;
       for(let i in elements){
           elements[i].style.display = "none";
       }

   }
}