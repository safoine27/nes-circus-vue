var vm = new Vue({
    el : '#app',
    data() {
        return {
            score:0,
            distance:100,
            highscore:0,
        }
    },
    methods: {

    },
    mounted(){
        if (localStorage.getItem('highscore')) {
            this.highscore = localStorage.getItem('highscore');      
        }
    },
  })