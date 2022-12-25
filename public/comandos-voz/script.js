
const element = document.getElementById("btn");
element.addEventListener("click", function() {
    if (!annyang) {
        return alert("Lo siento, tu navegador no soporta el reconocimiento de voz :(");
    }
    const $comandosReconocidos = document.querySelector("#comandosReconocidos"),
        $vozDetectada = document.querySelector("#vozDetectada");

    const loguearComandoReconocido = contenido => {
        $comandosReconocidos.innerHTML = contenido + "<br>";
    };

    const loguearVozDetectada = contenido => {
        $vozDetectada.innerHTML = contenido ;
    };

   
const element = document.getElementById("myBtn");

    annyang.setLanguage("es-MX");
    let comandos = {
        "hola": () => {
            loguearComandoReconocido(`Hola mundo! por tu seguridad y la mia, tu voz esta siendo grabada`);

        },
        "Conforme": () => {
            loguearComandoReconocido(`Entonces bienvenido a la experiencia AQUA BBVA!`);

        },
        "No es conforme": () => {
            loguearComandoReconocido(`Lamento escuchar eso :( no podremos seguir con el tramite`);

        },
        "No estoy de acuerdo": () => {
            loguearComandoReconocido(`Lamento escuchar eso :( no podremos seguir con el tramite`);

        },
        "mi direccion es *direccion": () => {
            loguearComandoReconocido(`la direccion donde sera enviada la tarjeta sera ${direccion},
            lo puedes corregir en la misma area de texto. <br>
            <img class="" src="imagenes/casoKarina.png" alt="ejemplo Karina">  `);

        },
        "mi teléfono es *telefono": () => {
            loguearComandoReconocido(`el telefono es ${telefono},
            lo puedes corregir en la misma area de texto. <br>
            <img class="" src="imagenes/casoKarina.png" alt="ejemplo Karina">  `);

        },      
        "reporte de ventas de *mes": mes => {
            if ("enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(",").indexOf(mes.toLowerCase()) === -1) {
                return;
            }
            loguearComandoReconocido(`Ok te muestro el reporte de ventas de ${mes}`);
        },
        "enviar correo a *usuario": usuario => {
            let usuarioCorregido = usuario.replace(/\ /g, "").replace(/arroba/g, "@").toLowerCase();
            loguearComandoReconocido(`Originalmente es ${usuario} pero creo que el correcto es ${usuarioCorregido}`);
        },
        "mi nombre es *nombre y tengo *anios años": (nombre, anios) => {
            loguearComandoReconocido(`Hola ${nombre} es genial que tu edad sea ${anios} :)`);
        },
        "Hola mi nombre es *nombre y este es un mensaje de prueba": (nombre, anios) => {
            loguearComandoReconocido(`Hola ${nombre}, muy bien hecho, dale en el boton continuar para iniciar el proceso de contratacion :) .
            Si tu nombre no es ${nombre}, lo puedes corregir en la misma area de texto. <br>
            <img class="" src="imagenes/casoKarina.png" alt="ejemplo Karina">
            `);
        }
    };

    annyang.addCommands(comandos);

    annyang.addCallback("result", frases => {
        console.log(frases);
        loguearVozDetectada(`${frases[0]}`);
    });

    annyang.start();
});