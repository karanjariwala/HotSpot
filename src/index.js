import Modle from './Modle/Modle.js';
import Controller from './Controller/Controller.js';
class HotSwap{
    constructor(api, numOfClicks ){
        this.modle= new Modle(api, numberOfClicks);
        this.controller= new Controller(this.modle);
    }
 
}
const app = (api,numberOfClicks)=>{
    let hotSwapIns= new HotSwap(api,numberOfClicks);
    hotSwapIns.modle.init();
    Window.addeventListner('click',(e)=>{hotSwapIns.controller.handleClick(e)})

}


export default app;
