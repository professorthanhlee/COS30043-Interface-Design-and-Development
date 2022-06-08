Vue.component('app-mypost', // indicating the component tag 
 {
    data:function(){
        return{
            statPosts:[],
            strStatus:''
        }
    },
    template:`
    <div class="container shadow p-5">
    <div class="row">
        <div class="input-group mb-5 ">
            <label for="inputStatus" class="input-group-text">Status:</label>
            <input type="text" class="form-control form-control-sm " id="inputStatus" v-model="strStatus">
            <button class="btn btn-success " type="button" @click="add(strStatus)">Post</button>
        </div>
    </div>
    <div class="row">    
        <table class="table table-hover text-center">
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Message</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        <tr  v-for="(statPost,index) in statPosts">
            <td>{{index+1}}</td>
            <td>{{statPost}}</td>
            <td class="text-center">
                <button class="btn btn-danger" @click="remove(index)">Delete</button>
            </td>
        </tr>
        </tbody>
            </table>
        </div>
    </div>`,
    methods:{
        add:function(status){
            if (status != ''){
                this.statPosts.push(status)   
            }
        },
        remove:function(index){
            this.statPosts.splice(index,1)
        }
    }
 });
 
new Vue({ el:"#app" }); 