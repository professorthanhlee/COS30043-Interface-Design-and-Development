Vue.component('paginate', VuejsPaginate) // creating new VueJSPaginate component
Vue.component('app-readjson', {
    data: function () {
        return { units: [], currentPage: 1, }
    },
    template: `
    <div class="container">
        <caption class="display-5 mt-3">Units</caption>
        <div id="example" class="table-responsive">
            <table class="datatable table table-striped table-bordered">
                <thead>
                    <tr>
                        <th id="code" scope="col">Code</th>
                        <th id="desc" scope="col">Description</th>
                        <th id="cp" scope="col">Credit Points</th>
                        <th id="type" scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="unit in getItems">
                        <td headers="code"> {{unit.code}}</td>
                        <td headers="desc"> {{unit.desc}}</td>
                        <td headers="cp"> {{unit.cp}}</td>
                        <td headers="type"> {{unit.type}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <paginate 
            :page-count="5"    
            :margin-pages="1"
            :click-handler="clickCallback" 
            :prev-text=" 'Prev Page' " 		
            :next-text="'Next Page'" 
            :container-class="'pagination'" 
            :active-class="'currentPage'"
            >
        </paginate>


    </div>`,

    mounted() { //Called after the instance has been mounted
        var self = this;
        var url = 'data/units-1.json';

        fetch(url)
            .then(response => {
                //turning the response into the usable data
                return response.json();
            })
            .then(data => {
                //This is the data you wanted to get from url
                self.units = data;
            })
            ;

    },
    computed: {
        getItems: function () {
            let current = this.currentPage * 5;  // total 24 units, suppose 5 per page, 5 pages
            let start = current - 5;
            return this.units.slice(start, current);
        }
    },
    methods: {
        //sets the clicked page
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);
        }
    }
})
new Vue({ el: '#app' })	