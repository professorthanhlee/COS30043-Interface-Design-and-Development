new Vue({
    el: '#app',
    data: { guess: 0, msg: '', secret: 0 },
    methods: {
        genRandomNum: function () { // generate random number from 1 to 100
            return Math.floor(Math.random() * 100) + 1;
        },

        checkGuess: function () {
            if (this.guess < this.secret){
                this.msg = "Guess higher ↑";
            }
            else if (this.guess > this.secret){
                this.msg = "Guess lower ↓";
            }
            else{ 
            this.msg ="You got it!";
        }
        },
        startOver: function () {
            this.msg = "Start guessing.";
            this.secret = this.genRandomNum();
        },
        giveUp: function () {
            this.msg = "The secret number is " + this.secret;
        }

    },
    created: function () {//Called after the instance is created
        this.msg = "Start guessing.";
        this.secret = this.genRandomNum();
    }
});

