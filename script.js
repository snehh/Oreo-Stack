var currentStack = [];

clicked = (item) => {
    if(item !== 'Back' && item!== 'Clear'){
        if(currentStack.length === 0){
            document.getElementById('current').innerHTML = ''
        }
        currentStack.push(item)

        var span = document.createElement('span')
        span.innerHTML = `${item} `
        document.getElementById('current').append(span)

        document.getElementById('generate').removeAttribute('disabled')
    }
    if(item === 'Back'){
        currentStack.pop(item)

        document.getElementById('current').removeChild(document.getElementById('current').lastChild)

        if(currentStack.length === 0){
            document.getElementById('generate').setAttribute('disabled', true)
            document.getElementById('current').innerHTML = '<span id="ph">Your stack will appear here</span>'
        }
    }
    if(item === 'Clear'){
        currentStack = []

        document.getElementById('current').innerHTML = ''

        document.getElementById('generate').setAttribute('disabled', true)
        document.getElementById('current').innerHTML = '<span id="ph">Your stack will appear here</span>'
    }
}

generate = () => {
    document.getElementById('displayspace').innerHTML = ''
    if(currentStack.length !== 0){

        var div = document.createElement('div');
        div.classList.add('stackdiv')
        div.id='stackdiv'
        var attarr = `height: ${(currentStack.length + 1)*30}px; grid-template-rows: 1fr`;
        for(var i=0; i< currentStack.length; i++){
            var img = document.createElement('img')
            if(currentStack[i] === 'o')
                img.setAttribute('src', 'o.gif')
            else if(currentStack[i] === 're')
                img.setAttribute('src', 're.gif')
            img.setAttribute('style', `grid-row-start: ${i+1}; grid-row-end: ${i+3}; grid-column-start: 1; z-index: ${currentStack.length-i};`)
            attarr = attarr + ' 1fr'
            div.append(img)
        }
        div.setAttribute('style', `${attarr};`)
        document.getElementById('displayspace').append(div)
        
    }
    
}