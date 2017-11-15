import Modle from './Modle/Modle';
import Controller from './Controller/Controller';
class HotSwap{
    constructor(cb,eventNames, numOfClicks ){
        this.modle= new Modle(cb,eventNames, numberOfClicks, );
        this.controller= new Controller(this.modle);
    }
 
}
const app = (api,numberOfClicks)=>{
    let hotSwapIns= new HotSwap(api,numberOfClicks);
    hotSwapIns.modle.init();
    Window.addeventListner('click',(e)=>{hotSwapIns.controller.handleClick(e)})

}


export default app;
