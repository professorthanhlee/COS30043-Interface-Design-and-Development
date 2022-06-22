var vm = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    methods: {
        validate() {
            this.$refs.myForm.validate() // validate all inputs  
        }
    },
    data: () => ({
        valid: true, btnTerm: false,
        firstName: '', lastName: '', userName: '', password: '', re_password: '',
        email: '', address: '', suburb: '', postCode: '', phoneNum: '',


        nameRules: [
            v => !!v || 'Name is required',
            v => /^[a-zA-Z]+$/.test(v) || 'Name must contain letters only',
        ],
        usernameRules: [
            v => !!v || 'Username is required',
            v => (v.length >= 3) || 'Username must be at least 3 characters'
        ],
        pwdRules: [
            v => !!v || 'Password is required',
            v => /(?=.*[$%^&*])[\w$%^&*]{8,}$/.test(v) || 'Password must contain at least 1 special character, minimum 8 characters'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
        ],
        streetRules: [
            v => (v.length <= 40) || 'Address must be less than 40 characters'
        ],
        suburbRules: [
            v => (v.length <= 30) || 'Suburb must be less than 40 characters'
        ],
        postCodeRules: [
            v => !!v || 'Postcode is required',
            v => /^[0-9]{4}$/.test(v) || 'Must exactly 4 digits'
        ],
        phoneNumRules: [
            v => /^04\d{8}/.test(v) || 'Number must start with 04 and exactly 10 digits'
        ]
    }),

})
