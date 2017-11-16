/**
 * @file index file
 * @author Karan Jariwala <karanjariwala@gmail.com>
 * @version 0.1
 */


import Modle from './Modle/Modle';
import Controller from './Controller/Controller';

class HotSpot{
/**
   * The HotSpot definition.
   *
   * @param {function} cb - Callback function
   * @param {array} eventNames - Array of keys of javascript event object you want to log.
   * @param {Number} numOfClicks - Number of clicks after which callback should get executed.
   */
    constructor(cb,eventNames, numOfClicks ){
        this.modle= new Modle(cb,eventNames, numOfClicks);
        this.controller= new Controller(this.modle);
    }
}
const app = (cb,eventNames, numOfClicks )=>{
    let hotSwapIns= new HotSpot(cb,eventNames, numOfClicks);
    window.addEventListener("click",(e)=>{hotSwapIns.controller.handleClick(e)})}


//app((data)=>console.log(data),['className', 'id','innerHTML'],3);



export default app;
