/*=========================================================
 Plataforma de Riesgos SFA Cebar
 Archivo : custom.js

 Personalizaciones del visor generado mediante Qgis2web.

 Este archivo contiene funcionalidades propias del proyecto
 Agroclima Cebar implementadas sobre la aplicación web
 generada mediante Qgis2web.

 Autor del desarrollo:
 Y. Cortés - SFA Cebar

 Asistencia técnica en diseño de arquitectura,
 organización del código y desarrollo:
 ChatGPT (OpenAI)

 Nota:
 Las decisiones funcionales, implementación final,
 validación y mantenimiento del código corresponden al
 equipo responsable del proyecto.

=========================================================*/

/*=========================================================
 Configuración
=========================================================*/

const CONFIG = {

    logo: "images/cebar_logo.png",

    nombreProyecto: "Agroclima Cebar"

};


/*=========================================================
 Objeto principal
=========================================================*/

const Agroclima = {

    /*=====================================================
      Inicialización
    =====================================================*/

    iniciar(){

        this.crearLogo();

        const pantalla=document.getElementById("pantalla-carga");

        if(pantalla){

            pantalla.classList.add("agroclima-carga-desaparece");

            setTimeout(()=>{

                pantalla.remove();

                this.mostrarPanel(
                    "Bienvenido",
                    "Consulte información de riesgo agroclimático mediante las capas disponibles.",
                    "Ingresar"
                );

            },500);

        }
        else{

            this.mostrarPanel(
                "Bienvenido",
                "Consulte información de riesgo agroclimático mediante las capas disponibles.",
                "Ingresar"
            );

        }

    },


    /*=====================================================
      Logo institucional
    =====================================================*/

    crearLogo(){

        const mapa=document.getElementById("map");

        if(!mapa) return;

        const logo=document.createElement("img");

        logo.id="logo-flotante";

        logo.src=CONFIG.logo;

        logo.alt="Logo SFA Cebar";

        mapa.appendChild(logo);

    },

    /*=====================================================
      Paneles reutilizables
    =====================================================*/

    mostrarPanel(
        titulo,
        mensaje,
        textoBoton="Cerrar"
    ){

        const panel=document.createElement("div");

        panel.id="panel-agroclima";

        panel.innerHTML = `

        <div class="agroclima-modal">

            <img
                src="${CONFIG.logo}"
                class="agroclima-logo"
                alt="Logo SFA Cebar">

            <h1 class="agroclima-titulo">Agroclima Cebar</h1>

            <h2 class="agroclima-subtitulo">Visor de Riesgo Agroclimático</h2>

            <p class="agroclima-descripcion">

                Bienvenido al visor interactivo de consulta de
                información agroclimática.

            </p>

            <ul class="agroclima-lista">

                <li>Active las capas de interés.</li>

                <li>Utilice el buscador para localizar municipios o lugares.</li>

                <li>Cambie el mapa base si necesita mayor detalle.</li>

                <li>Pulse sobre una ubicación de interés para consultar datos de las capas activas.</li>

                <li>Pulse abajo \"Entrar al visor\" para comenzar la consulta.</li>

            </ul>

            <button
                id="cerrar-panel-agroclima"
                class="agroclima-boton">

                🗺  Entrar al visor 🧭

            </button>

        </div>

        `;


        document.body.appendChild(panel);


        document
        .getElementById("cerrar-panel-agroclima")
        .addEventListener("click",function(){

            panel.querySelector(".agroclima-modal")
            .classList.add("agroclima-desaparece");


            setTimeout(function(){

                panel.remove();

            },1000);

        });

    },



/*=========================================================
 Ventana de bienvenida
=========================================================*/


};



/*=========================================================
Inicialización general del visor
=========================================================*/

window.addEventListener("load", () => {

    Agroclima.iniciar();

});






