
class Controller{
    constructor(modle){
        this.modle=modle;
    }
    handleClick(e){
       const logEvnObject= {};
        for(let i=0;i<this.modle.eventNames;i++){
            logEvnObject[this.modle.eventNames[i]]=e.target[this.modle.eventNames[i]];
        }
        this.modle.addEvent(logEvnObject);
    }
}


export default Controller;