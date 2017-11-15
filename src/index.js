import Modle from './Modle/Modle';
import Controller from './Controller/Controller';
class HotSwap{
    constructor(cb,eventNames, numOfClicks ){
        this.modle= new Modle(cb,eventNames, numOfClicks);
        this.controller= new Controller(this.modle);
    }
 
}
const app = (cb,eventNames, numOfClicks )=>{
    let hotSwapIns= new HotSwap(cb,eventNames, numOfClicks );
    window.addEventListener("click",(e)=>{hotSwapIns.controller.handleClick(e)})}


app((data)=>console.log(data),['className', 'id','innerHTML'],3);



export default app;
