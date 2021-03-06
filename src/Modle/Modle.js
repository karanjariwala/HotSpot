import Store from '../Store/Store';


class Modle{
    constructor(deffered,eventNames, numOfClicks){
        this.deffered=deffered;
        this.numOfClicks=numOfClicks;
        this.eventNames=eventNames;
        this.store= new Store();
        this.currentClick=this.store.get().length||0;
    }

    addEvent(eObj){
        if(this.currentClick>=this.numOfClicks){
            this.deffered(this.store.get());
            this.currentClick=0;
            this.store.reset(); 
        }
        this.store.add(eObj);
        this.currentClick++;
    }
}

export default Modle;