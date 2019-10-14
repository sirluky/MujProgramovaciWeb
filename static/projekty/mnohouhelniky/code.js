new Vue({
    el: "#root",
    data: {
        n: 0,
        uhel: 0
    },
    methods: {
        prevedNaN() {
            this.n = Math.floor(360 / (180 - this.uhel) * 1000) / 1000;


        },
        prevedNaUhel() {
            this.uhel = 180 - (360 / this.n)
        }
    }
});