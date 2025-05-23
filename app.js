//TDEE = BMR x Activity Factor

//Basic Metabolic Rate
//Men
let bmrWomen;
let bmrMen;
function calcFinal(){
    let weight = document.getElementById('weight').value;
    let weightInKg = Number(weight) * 0.453592

    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let feetToInches = feet * 12;
    let heightInInches = Number(inches) + Number(feetToInches);
    let heightInCm = Number(heightInInches) * 2.54;
    let age = document.getElementById('age').value;

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let expenditure = document.getElementById('myDropdown').value;
    console.log(expenditure);

    bmrMen = ((88.362) + (13.396 * weightInKg) + (4.799 * heightInCm) - (5.677 * age));
    bmrWomen = ((447.593) + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age));

    if(gender=='genderM' && expenditure=='option1'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrMen.toFixed() + " calories a day";

        let sedentary = Number(bmrMen) * 1.2;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a sedentary lifestyle: '
        document.getElementById('tdee-output1').innerHTML= sedentary.toFixed()+ " calories a day";

        let loss = sedentary * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = sedentary * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = sedentary * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = sedentary * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderM' && expenditure=='option2'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrMen.toFixed() + " calories a day";

        let lightlyActive = bmrMen * 1.375;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a lightly active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= lightlyActive.toFixed()+ " calories a day";

        let loss = lightlyActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 =  lightlyActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain =  lightlyActive* 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 =  lightlyActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderM' && expenditure=='option3'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrMen.toFixed() + " calories a day";

        let moderatlyActive = bmrMen * 1.55;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a lightly active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= moderatlyActive.toFixed()+ " calories a day";

        let loss = moderatlyActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = moderatlyActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = moderatlyActive * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = moderatlyActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderM' && expenditure=='option4'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrMen.toFixed() + " calories a day";

        let veryActive = bmrMen *  1.725;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a lightly active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= veryActive.toFixed()+ " calories a day";

        let loss = veryActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = veryActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = veryActive * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = veryActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderW' && expenditure=='option1'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrWomen.toFixed() + " calories a day";

        let sedentary = bmrWomen *  1.2;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a sedentary lifestyle: '
        document.getElementById('tdee-output1').innerHTML= sedentary.toFixed()+ " calories a day";

        let loss = sedentary * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = sedentary * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = sedentary * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = sedentary * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderW' && expenditure=='option2'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrWomen.toFixed() + " calories a day";

        let lightlyActive = bmrWomen * 1.375;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a lightly active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= lightlyActive.toFixed()+ " calories a day";

        let loss = lightlyActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 =  lightlyActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain =  lightlyActive* 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 =  lightlyActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderW' && expenditure=='option3'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrWomen.toFixed() + " calories a day";

        let moderatlyActive = bmrWomen * 1.55;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a moderately active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= moderatlyActive.toFixed()+ " calories a day";

        let loss = moderatlyActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = moderatlyActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = moderatlyActive * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = moderatlyActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
    else if(gender=='genderW' && expenditure=='option4'){
        document.getElementById('heading').innerHTML='Your BMR is:  '
        document.getElementById('bmr-output').innerHTML= bmrWomen.toFixed() + " calories a day";

        let veryActive = bmrWomen *  1.725;
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a very active lifestyle: '
        document.getElementById('tdee-output1').innerHTML= veryActive.toFixed()+ " calories a day";

        let loss = veryActive * 0.89;
        document.getElementById('headingL').innerHTML="To lose 0.5 lbs per week:"
        document.getElementById('loss-output1').innerHTML = loss.toFixed()+ " calories a day";

        let loss1 = veryActive * 0.78;
        document.getElementById('headingL2').innerHTML="To lose 1 lb per week:"
        document.getElementById('loss-output2').innerHTML = loss1.toFixed()+ " calories a day";

        let gain = veryActive * 1.11;
        document.getElementById('headingG').innerHTML="To gain 0.5 lbs per week:";
        document.getElementById('gain-output1').innerHTML=gain.toFixed()+" calories a day";

        let gain2 = veryActive * 1.22;
        document.getElementById('headingG2').innerHTML="To gain 1 lb per week:";
        document.getElementById('gain-output2').innerHTML=gain2.toFixed()+" calories a day";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function reload() {
    window.location.reload()
}

function weightLossGain(){
    let mild = 0;
}
/*
function calculateBmrMen(){
    let weight = document.getElementById('weight').value;
    let weightInKg = Number(weight) * 0.453592

    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let feetToInches = feet * 12;
    let heightInInches = Number(inches) + Number(feetToInches);
    let heightInCm = Number(heightInInches) * 2.54;

    let age = document.getElementById('age').value;

    bmrMen = ((88.362) + (13.396 * weightInKg) + (4.799 * heightInCm) - (5.677 * age));

    document.getElementById('heading').innerHTML='Your BMR is:  '
    document.getElementById('bmr-output').innerHTML= bmrMen.toFixed() + " calories a day";
}
    */

/*
function calculateBmrWomen(){
    let weight = document.getElementById('weight').value;
    let weightInKg = Number(weight) * 0.453592

    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let feetToInches = feet * 12;
    let heightInInches = Number(inches) + Number(feetToInches);
    let heightInCm = Number(heightInInches) * 2.54;

    let age = document.getElementById('age').value;

    bmrWomen = ((447.593) + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age));
    

    document.getElementById('heading').innerHTML='Your BMR is:  '
    document.getElementById('bmr-output').innerHTML= bmrWomen.toFixed()+ " calories a day";
}
*/

/*
function calculateTdeeM() {
   
    let sedentary = Number(bmrMen) * 1.2;
    let lightlyActive = bmrMen * 1.375;
    let moderatlyActive= bmrMen * 1.55;
    let veryActive =bmrMen * 1.725;

     document.getElementById('heading2').innerHTML='Your TDEE  '
     document.getElementById('headingS').innerHTML='For a sedentary lifestyle: '
     document.getElementById('headingL').innerHTML='For a lightly active lifestyle: '
     document.getElementById('headingM').innerHTML='For a moderatly active lifestyle: '
     document.getElementById('headingA').innerHTML='For a very active lifestyle: '

     document.getElementById('tdee-output1').innerHTML= sedentary.toFixed()+ " calories a day";
     document.getElementById('tdee-output2').innerHTML= lightlyActive.toFixed()+ " calories a day";
     document.getElementById('tdee-output3').innerHTML= moderatlyActive.toFixed()+ " calories a day";
     document.getElementById('tdee-output4').innerHTML= veryActive.toFixed()+ " calories a day";
    }

    */
/*function calculateTdeeW() {
   
    let sedentary = bmrWomen * 1.2;
    let lightlyActive = bmrWomen * 1.375;
    let moderatlyActive= bmrWomen * 1.55;
    let veryActive =bmrWomen * 1.725;
    
    
        document.getElementById('heading2').innerHTML='Your TDEE  '
        document.getElementById('headingS').innerHTML='For a sedentary lifestyle: '
        document.getElementById('headingL').innerHTML='For a lightly active lifestyle: '
        document.getElementById('headingM').innerHTML='For a moderatly active lifestyle: '
        document.getElementById('headingA').innerHTML='For a very active lifestyle: '

        document.getElementById('tdee-output1').innerHTML= sedentary.toFixed() + " calories a day";

        document.getElementById('tdee-output2').innerHTML= lightlyActive.toFixed()+ " calories a day";
        document.getElementById('tdee-output3').innerHTML= moderatlyActive.toFixed()+ " calories a day";
        document.getElementById('tdee-output4').innerHTML= veryActive.toFixed()+ " calories a day";
    }
*/


/*
let button1 = document.getElementById('genderM');
let button2 = document.getElementById('genderW');
if(button1.checked == true){
    myButton = button1.value;
}else {
    myButton = button2.value;
}
*/
/*const radioM = document.getElementById("genderM");
radioM.addEventListener('change', function(){
    if(this.checked){
        calculateBmrMen();
        calculateTdeeM();
    }
})
*/
/*
const radioW = document.getElementById("genderW");
radioW.addEventListener('change', function(){
    if(this.checked){
        calculateBmrWomen();
        calculateTdeeW();
    }
})
*/



  

    

/*  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

*/


//add calories for weight gain/loss