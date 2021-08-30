
const root = new Vue ({
    el: "#root",
    
    data: {
        newText: "",
        currentContact: 0,
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                {
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent',
                },
                {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received',
                },
                {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [
                {
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received',
                },
                {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent',
                },
                {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received',
                },
              ],
            },
          ],
    },
    methods: {
        setCurrentContact(index){
           this.currentContact = index;
        },
        sendText(){
            if(!this.newText) return; // validation //
        
            this.addText(this.newText, "sent");  //for sent text //
            this.newText = ""; //reset after enter //
        
        //timing function for automatic response//    
        setTimeout(() => {
            this.addText("ok", "received"); //for received text //
            
        }, 1000);
        
        },    
        
        //obj for sent and received text //
        addText(text, status) {
            const newText = {
                status,
                message: text,
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
            };
        this.contacts[this.currentContact].messages.push(newText);
        },
    }, 
});    