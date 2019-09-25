new Vue({
  el: "#root",
  data: {
    vstupAscii: "",
    vstupCis: ""
  },
  methods: {
    prevednaAscii() {
      console.log(this.vstupAscii);

      if (this.vstupAscii.length > 0) {
        console.log(this.vstupCis);
        this.vstupCis = this.vstupAscii.charCodeAt(0);
      } else {
        this.vstupCis = "";
      }
    },
    prevednaCis() {
      console.log(this.vstupCis);
      this.vstupAscii = String.fromCharCode(this.vstupCis);
    }
  }
});
