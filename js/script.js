// Proseguendo l'esercitazione (snackone) in classe, creare una todolist dove l'utente potrà:
// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente

var app = new Vue({
  el: '#container',
  data:{

    appList:[],

    userInput:''

  },

  methods:{

    //NELLA MIA LISTA INSERISCO I DATI RICEVUTI DALL'INPUT
    pushInputInList:function(){

      let pushing = this.appList.push(this.userInput)
      this.userInput='';
      return pushing;

    },

    //RIMUOVO SOLAMENTE I DATI DELLA LISTA 'CLICCATI' DALL'UTENTE
    removeFromIputList:function(idx){
      let removing = this.appList.splice(idx)
      return removing;
    },
  }
});
Vue.config.devtools = true;
