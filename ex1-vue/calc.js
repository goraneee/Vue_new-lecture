new Vue({
    el: "#calc-app",
    data: {
        x: 11,
        y: 10,
        result: 30
    },

    methods: {
        resetHandler: function () {
            this.x = 0;
            this.y = 0;
            this.result = 0;
        },

        submitHandler() {
            this.result = parseInt(this.x) + parseInt(this.y);
        },

        changeHandler() {
            this.result = parseInt(this.x) + parseInt(this.y);
        }

    }

});