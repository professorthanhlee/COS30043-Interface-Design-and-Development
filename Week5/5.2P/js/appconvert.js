Vue.component('app-convert', // indicating the component tag 
  { 
    // define the template for the component  
    template: `
    <div class="container w-25 text-center" style="min-width: 576px;">
      <div class="row mb-3">
          <label for="userInput" class="form-label p-3 fs-4">Enter number from 1 to 99</label>
      </div>
      <div class="row mb-3">
          <input type="number" class="form-control border border-warning" name="input" id="userInput" v-model="numVar">
      </div>
      <div class="row mb-3">
          <p>is</p>
          <p class="fs-4">{{Number(numVar) | num2roman}}</p>
      </div>
    </div>
    `, 
    // defining data to be used in the component 
    data: function() { 
      return { 
        numVar: '' 
      } 
    }, 
    //adding filter functions 
    filters: { 
      num2roman:function(mynum) {
        var ROMAN_NUMERALS ={C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
        var ans = " ";
        if (Number.isInteger(mynum) && mynum > 0 && mynum < 100){
        for(var key in ROMAN_NUMERALS){
          // console.log(ROMAN_NUMERALS[key],key)
          while(mynum >= ROMAN_NUMERALS[key]){
            ans += key;
            mynum -= ROMAN_NUMERALS[key];
          };
        };
          return ans;
        }
        else{
          return ans = "Invalid number input";
        }
      }},
  }); 
 
// create new vue instance and indicate the id for vue app 
new Vue({ el: '#app'}); 