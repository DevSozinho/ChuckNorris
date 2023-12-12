# JS:
```
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
```
# CSS:
```
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #555555;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: normal;
}
html,body{
    height: 100%;
    background-color: #0f0f11;
}
/**/
header{
    width: 100%;
    max-width: 980px;
    height: 20%;
    background-color: #141417;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
}
header div.img img{
    width: 20%;
}
div.categorias{
    width: 100%;
    max-width: 980px;
    background-color: #181818;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
}
.pp{
    background-color: #141417;
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
    cursor: pointer;
}
div.cat-fras{
    width: 100%;
    width: 980px;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
}
div.cat-fras h2{
    margin-bottom: 8px;
}
.opac {
    animation-name: fade;
    animation-duration: 50s;
    animation-iteration-count: infinite;
  }
  
  @keyframes fade {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  footer{
    width: 100%;
    max-width: 980px;
    height: 11%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #141417;
    position: fixed;
    bottom: 0;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-100%);
  }

  @media screen and (max-width:768px){
    div.cat-fras{
        width: 100%;
        flex-wrap: wrap;
        padding: 15px;
    }
    header div.img img{
        width: 50%;
    }
  }
```
# HTML:
```
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classes</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <header>
        <div class="img"><img src="img/chucknorris_logo_coloured_small@2x.png" alt=""></div>
    </header>
    <div class="categorias"></div><!--categorias-->
    <div class="cat-fras"></div><!--cat-fras-->
    <footer><p>By DevSozinho</p></footer>

</body>
</html>
<script src="js/script.js"></script>
```