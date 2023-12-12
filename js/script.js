let url = 'https://api.chucknorris.io/jokes/categories'
    fetch(url).then(res => res.json()).then(obj => {//
        //console.log(obj)
        let doc = document.querySelector('div.categorias')
        for(var i = 0;i < obj.length;i++){
            //console.log(obj[i])
            doc.innerHTML += `
                <p class="pp">${obj[i]}</p>
            `
        }
        
        document.querySelector('div.categorias').addEventListener('click',(event)=>{/**/
            let click = event.target.textContent
            let url1 = `https://api.chucknorris.io/jokes/random?category=${click}`
            fetch(url1).then(res2 => res2.json()).then(obj2 => {
                //console.log(obj2)
                let objeto = document.querySelector('div.cat-fras')
                objeto.innerHTML = `
                <h2 class="opac"><span>${obj2.categories}</span></h2>
                <p class="opac"><q>${obj2.value}</q></p>
                `
            })
        })/**/
    })//