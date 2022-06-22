var alphaExp = /[a-z]/i;
var app = new Vue({
    el: "#app", //specifying the app
    //passing the data to be used in the app
    data: {
        input: {
            fname: '',
            lname: '',
            username: '',
            password: '',
            repassword: '',
            gmail: '',
            street: '',
            suburb: '',
            postcode: '',
            phone: ''
        },
        blured: {
            fname: false,
            lname: false,
            username: false,
            password: false,
            repassword: false,
            gmail: false,
            street: false,
            suburb: false,
            postcode: false,
            phone: false
        },
        validated: false,
    },
    methods: {
        validate: function () {
            this.blured = {
                fname: true,
                lname: true,
                username: false,
                password: false,
                repassword: false,
                gmail: false,
                street: false,
                suburb: false,
                postcode: false,
                phone: false
            }
            console.log(this.validFName(this.input.fname))
            if (this.validFName(this.input.fname)) {
                this.validated = true;
            }

        },
        validFName: function (fname) {
            if (fname.match(alphaExp)) {
                return true;
            }
        },
        submit: function (e) {
            this.validate();
            e.preventDefault();

        }
    }
});
