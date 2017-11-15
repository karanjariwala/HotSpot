class Controller{
    constructor(modle){
        this.modle=modle;
    }
    handleClick(e){
        Object.assign({},{
            baseURI:e.target.baseURI,
            tagName:e.target.tagName,
            className:e.target.className,
            id:e.target.id,
            
        })
    }
}