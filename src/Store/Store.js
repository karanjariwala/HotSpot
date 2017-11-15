class Store{  
    constructor(){
        localStorage.setItem('hotSpot','[]');
    }
    get(){
        return JSON.parse(localStorage.getItem('hotSpot'));
    }
    add(data){
        const newData= [...this.get(),data];
        localStorage.setItem('hotSpot',JSON.stringify(newData));
    }
    reset(){
        localStorage.setItem('hotSpot','[]');
    }

}

export default Store;