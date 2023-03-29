Vue.createApp({
    data() {
        return {
            x: 11,
            y: 10,
            result: 30
        }
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
    },
    template: `
    <section >
        <h1>덧셈 계산기</h1>
        <form action="">
            <fieldset>
                <legend>계산기 입력폼</legend>
                <div>
                    <label>x:</label>
                    <input v-on:input="changeHandler" dir="rtl" v-model="x">
                    <label>y:</label>
                    <input v-on:input="changeHandler" dir="rtl" v-model="y">
                    <span>=</span>
                    <span>{{result}}</span>
                </div>
                <hr>
                <div>
                    <input type="submit" v-on:click.prevent="resetHandler" value="초기화">
                    <input type="submit" v-on:click.prevent="submitHandler" value="계산하기">
                </div>
            </fieldset>
        </form>
    </section>
`
})
.mount("#calc-app");