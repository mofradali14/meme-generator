// https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80



// const sourceInput = document.querySelector('#source')
const form = document.querySelector('form')
const ul = document.querySelector('ul')

// sourceInput.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(e.target)
// })

form.addEventListener('submit', function(e){
    e.preventDefault()
    const sourceInput = document.querySelector('#source')
    console.log(sourceInput.value)


    const div = document.createElement('div')
    div.style.position = 'relative'


    const topText = document.querySelector('#toptext')
    const topCaption = topText.value;
    const bottomText = document.querySelector('#bottomtext')
    const bottomCaption = bottomText.value;
    console.log(topCaption, bottomCaption)

    const h3 = document.createElement('h3')
    h3.innerText = topCaption;

    const p = document.createElement('p')
    p.innerText = bottomCaption;



    const img = document.createElement('img')
    img.setAttribute('src', sourceInput.value)
    const li = document.createElement('li')

    const remove = document.createElement('button')
    remove.className = 'remove'
    remove.innerText = 'Delete'
    div.append(remove)
    

    li.append(img)
    div.append(li)
    div.append(h3)
    div.append(p)
    ul.append(div)
    console.log(div)

    sourceInput.value = ''
    topText.value = ''
    bottomText.value = ''
})


ul.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
    }
})