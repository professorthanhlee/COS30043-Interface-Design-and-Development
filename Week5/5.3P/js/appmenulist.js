//populate menu with a variable 
Vue.component('mymenu', 
{ 
    props: ['menu'], //defining the props 

    //defining template for the menu list 
    template:`
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item" v-for="elem in menu">{{elem}}</li>
        </ul>    
    </div>
    `,   
}
);
   
  // create new vue instance and indicate the id for vue app 
new Vue({ 
    el: '#app', 
  }) 