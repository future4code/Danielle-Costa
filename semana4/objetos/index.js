console.log("Palvan")


    let titulosPostados= document.getElementById("titulo-post") //guarda os dados do titulo
    let autoresPostados= document.getElementById("autor-post")
    let postsPostados= document.getElementById("conteudo-post")

const postInteiro = []

const guardapost = () =>{ //função
    let publicado = document.getElementById("container-de-posts")
    postContem = {
        titulo: titulosPostados.value,
        autor: autoresPostados.value,
        post: postsPostados.value,
    }
    if (postContem.titulo !=="" && postContem.autor !==""  && postContem.post !==""){
        postInteiro.push(postContem)
        publicado.innerHTML = `<div> <h1> ${postContem.titulo} </h1> <p>${postContem.autor}</p> <p>${postContem.post}</p> `
        
    }else{alert("preencha")
    }
}




