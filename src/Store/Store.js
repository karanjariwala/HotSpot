Class Store{  
    get(){
        return JSON.parse(localStorage.getItem('hotSpot'))
    }
    add(data){
        const dataStr= JSON.stringify(this.get().push(data));
        localStorage.removeItem('hotSpot');
        localStorage.setItem('hotSpot',dataStr);
    }
    reset(){
        localStorage.removeItem('hotSpot');
    }

}

export default Store;