const sameJob = () => {
const buttonsDiv = document.getElementById('buttons')
const initForm = document.getElementById('initialDiv')

buttonsDiv.style.display = 'none'
initForm.style.display = 'block'
}


const onload = () => {
const forms = {
    init: document.getElementById('initialDiv'),
    actualWork: document.getElementById('formulary')
}    

Object.values(forms).map(values => {
    values.style.display = 'none'
})
}



const createDivQuestionary = () => {

}


const laboralChange = () => {
}

const initForm = () => {
    const initForm = document.getElementById('initialDiv')
    const questionsForm = document.getElementById('formulary') 
    initForm.style.display = 'none'
    questionsForm.style.display = 'block'
}



