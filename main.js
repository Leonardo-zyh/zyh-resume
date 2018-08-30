window.jQuery = function(nodeOrSelector){
    let nodes={}
        nodes = document.querySelectorAll(nodeOrSelector)
        nodes.addClass = function(classes){
            classes.forEach((value) => {
                for(let i=0;i<nodes.lenght;i++){
                    nodes[i].classList.add(value)
                }
            })
            
        }
        nodes.text = function(text){
            if(text===undefined){
                var texts=[]
                for(let i=0;i<nodes.lenght;i++){
                    texts.push(nodes[i].textContent)
                }
                return texts
            }else{
                for(let i=0;i<nodes.lenght;i++){
                    nodes.textContent = text
                }
                
            }
        }
        return nodes

}
window.$ = jQuery