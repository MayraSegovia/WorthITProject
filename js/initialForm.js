

document.onload = firstFunction()


function firstFunction (){
    console.log('cargo')
}




function documentItem (id) {
    const item = document.getElementById(id);
    return item??'No element'
}

