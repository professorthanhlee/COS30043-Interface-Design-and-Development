//Defining the list of units in an array
var units = [
    { code: 'ICT10001', desc: 'Problem Solving with ICT', cp: 12.5, type: 'Core' },
    { code: 'COS10005', desc: 'Web Development', cp: 12.5, type: 'Core' },
    { code: 'INF10003', desc: 'Introduction to Business Information Systems', cp: 12.5, type: 'Core' },
    { code: 'INF10002', desc: 'Database Analysis and Design', cp: 12.5, type: 'Core' },
    { code: 'COS10009', desc: 'Introduction to Programming', cp: 12.5, type: 'Core' },
    { code: 'INF30029', desc: 'Information Technology Project Management', cp: 12.5, type: 'Core' },
    { code: 'ICT30005', desc: 'Professional Issues in Information Technology', cp: 12.5, type: 'Core' },
    { code: 'ICT30001', desc: 'Information Technology Project', cp: 12.5, type: 'Core' },
    { code: 'COS20001', desc: 'User-Centred Design', cp: 12.5, type: 'Software Development' },
    { code: 'TNE10005', desc: 'Network Administration', cp: 12.5, type: 'Software Development' },
    { code: 'COS20016', desc: 'Operating System Configuration', cp: 12.5, type: 'Software Development' },
    { code: 'SWE20001', desc: 'Development Project 1 - Tools and Practices', cp: 12.5, type: 'Software Development' },
    { code: 'COS20007', desc: 'Object Oriented Programming', cp: 12.5, type: 'Software Development' },
    { code: 'COS30015', desc: 'IT Security', cp: 12.5, type: 'Software Development' },
    { code: 'COS30043', desc: 'Interface Design and Development', cp: 12.5, type: 'Software Development' },
    { code: 'COS30017', desc: 'Software Development for Mobile Devices', cp: 12.5, type: 'Software Development' },
    { code: 'INF20012', desc: 'Enterprise Systems', cp: 12.5, type: 'Systems Analysis' },
    { code: 'ACC10007', desc: 'Financial Information for Decision Making', cp: 12.5, type: 'Systems Analysis' },
    { code: 'INF20003', desc: 'Requirements Analysis and Modelling', cp: 12.5, type: 'Systems Analysis' },
    { code: 'ACC20014', desc: 'Management Decision Making', cp: 12.5, type: 'Systems Analysis' },
    { code: 'INF30005', desc: 'Business Process Management', cp: 12.5, type: 'Systems Analysis' },
    { code: 'INF30003', desc: 'Business Information Systems Analysis', cp: 12.5, type: 'Systems Analysis' },
    { code: 'INF30020', desc: 'Information Systems Risk and Security', cp: 12.5, type: 'Systems Analysis' },
    { code: 'INF30001', desc: 'Systems Acquisition & Implementation Management', cp: 12.5, type: 'Systems Analysis' }
];
// creating a component for the units to pass in the router
const Unit = {
    data() { return { units } },
    //define the template for the route results
    template: `
    <div>
	<hr>
		 <h2 class="">Details of {{ $route.params.id }}</h2>
		 <ul v-for="unit in filteredUnits" class="list-group list-group-flush mb-3">
			 <li class="list-group-item"><strong>Code: </strong>{{unit.code}}</li>
			 <li class="list-group-item"><strong>Description: </strong>{{unit.desc}}</li>
			 <li class="list-group-item"><strong>Credit Points: </strong>{{unit.cp}}</li>
             <li class="list-group-item"><strong>Type: </strong>{{unit.type}}</li>
		 </ul>

	 </div>
    ` ,
    computed: {
        //filter function (returns the selected unit object )
        filteredUnits: function () {
            return this.units.filter(unit => unit.code.toLowerCase().match((this.$route.params.id.toLowerCase())));
        }
    }
}
// Creating the VueRouter
const router = new VueRouter({
    routes: [{
        path: '/unit/:id',
        component: Unit
    } //defining path and the component
    ]
})

// creating component for the lookup table
Vue.component('app-lookup2', {
    data: function () {
        return {
            units
        }
    },
    //defining template for the app
    template: `
    <div  class="container" style="min-width: 576px;"> 
        <div class="table-responsive">
            <h1 class="mb-5">Unit Information System</h1>
            <div style="max-height:600px; overflow:auto;">
                <table class="table table-striped table-hover border mb-3">
                    <thead>
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Description</th>
                            <th scope="col">More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="unit in units">
                            <td>{{ unit.code }}</td>
                            <td>{{ unit.desc }}</td>
                            <td><router-link :to="{ path:'/unit/'+unit.code }"">Show Detail</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <router-view ></router-view>
        </div>
    </div>
    `
})
//Creating new Vue instance
new Vue({
    router, //passing router instance
    el: "#app", //specifying the app
    //passing the data to be used in the app
    data: {
        id: '',
        units,
    }
});
