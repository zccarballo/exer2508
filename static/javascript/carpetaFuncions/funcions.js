const insertarDatos = (formulario) => {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("formulario");
    let datosFormulario = new FormData(formulario);
    let refEtiquetaCaixa = document.querySelector(".caixa");
    console.log(
      "datosFormulario ",
      datosFormulario.entries(),
      Object.fromEntries(datosFormulario.entries())
    );
    console.log(
      "datosFormulario ",
      datosFormulario.entries(),
      Object.fromEntries(datosFormulario.entries())
    );
    for (let [name, value] of datosFormulario) {
      console.log(`${name} ${value}`);
      if (name === "Avatar") {
        let archivo = datosFormulario.get("Avatar");
        let img = document.createElement("img");
        img.src = URL.createObjectURL(archivo);
        let refDiv = document.querySelector(".img");
        refDiv.append(img);
      } else {
        let etiquetaP = document.createElement("p");
        etiquetaP.innerHTML = `<strong>${name}</strong> ${value}`;
        refEtiquetaCaixa.append(etiquetaP);

        // etiquetaP.innerHTML = value;
        // refEtiquetaCaixa.append(etiquetaP);
      }
    }
  });
};

export const peticionPaxinaApp = async () => {

  let token = localStorage.getItem("token");

  console.log("peticionPaxinaApp token", token);
if (!token) {
    location.replace("/");
    return;
  }
   let resposta = await fetch("http://localhost:3000/app", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //"Authorization": token, 
      "Authorization": `Bearer ${token}`,
    },
  });

  return resposta;
}

export const isPaxina = async (resposta) =>{


  // if (resposta.status === 200 && resposta.resposta === "acceso autorizado") {
  //   let datos = await resposta.text();
  //   console.log("datos ", datos);
  //   document.body.innerHTML = datos;

  //   sair.addEventListener("click",()=>{
  //       console.log("sair")
  //       localStorage.removeItem("usuario");
  //       location.replace("/");
  //   })
    
  //   const formulario = document.querySelector("form");
  //   insertarDatos(formulario);

  // } else if (resposta.status === 200 && resposta.resposta === "acceso autorizado a tarefas") {
  //   location.replace("/tarefas");

  // } else {
  //   location.replace("/");
  // }
  // }

  if (resposta.status === 200) {
    let datos = await resposta.text();
    document.body.innerHTML = datos;

    const sair = document.getElementById("sair");
    if (sair) {
      sair.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        location.replace("/");
      });
    }

    const formulario = document.querySelector("form");
    if (formulario) {
      insertarDatos(formulario);
    }
  } else {
    location.replace("/");
  }
}
