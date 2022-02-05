var textV = document.getElementById("textV")
var btnV = document.getElementById("btnV")
var ulList  = document.getElementById("ulList")
var deleteAll  = document.getElementById("deleteAll")

btnV.addEventListener('click',function(){
    ////////******Creation OF Li Tags with vlaue */
    var listTag  = document.createElement('li')
    var textNode = document.createTextNode(textV.value)
    listTag.appendChild(textNode);
    

    
    /////*******button With Events */
    var btnTag  = document.createElement('button')
    var textBtn = document.createTextNode("Delete")
    btnTag.appendChild(textBtn);
    btnTag.setAttribute('onclick','deleteitems(this)')



       /////*******button With Events */
       var editTag  = document.createElement('button')
       var editBtn = document.createTextNode("Edit")
       editTag.appendChild(editBtn);
       editTag.setAttribute('onclick','edititems(this)')
       




    listTag.appendChild(btnTag)
    listTag.appendChild(editTag)
    ulList.appendChild(listTag)
})

deleteAll.addEventListener('click',function(){
        ulList.innerHTML = ""

})


function deleteitems(e){
    e.parentNode.remove()
    console.log(e)

}


function edititems(e){
    e.parentNode.firstChild.nodeValue = prompt("Enter New Value")

}