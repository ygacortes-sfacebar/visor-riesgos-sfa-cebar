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

 Asistencia técnica avanzada en extensiones interactivas,
 sincronización event-driven de mapas (moveend),
 gestión del geocodificador Photon, popups automáticos y overlay:
 Gemini (Google)

 Nota:
 Las decisiones funcionales, implementación final,
 validación y mantenimiento del código corresponden al
 equipo responsable del proyecto.
=========================================================*/

/*=========================================================
 Configuración global del visor
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
      INICIALIZACIÓN
    =====================================================*/
    iniciar(){
        this.crearLogo();
        this.crearToolbar();
        this.configurarBuscadorPhoton();

        const listaBienvenida = [
            {
                icono: "fas fa-check-square",
                titulo: "Capas",
                descripcion: "Active o desactive las capas de interés."
            },
            {
                icono: "fas fa-dot-circle",
                titulo: "Mapa base",
                descripcion: "Cambie el mapa base si necesita mayor detalle."
            },
            {
                claseIcono: "agroclima-icono-mapa",
                icono:"fas fa-hand-pointer",
                titulo: "Información de una ubicación",
                descripcion: "Click/Pulse sobre una ubicación de interés para consultar datos de las capas activas."
            },
            {
                icono: "fa fa-search",
                titulo: "Buscar",
                descripcion: "Utilice el buscador para localizar municipios, coordenadas o lugares."
            },
            {
                icono: "fas fa-toolbox",
                titulo: "Ayuda y herramientas",
                descripcion: "Consulte la ayuda integrada cuando necesite orientación sobre las herramientas disponibles."
            },
            {
                icono: "fas fa-sign-in-alt",
                titulo: "Entrar al visor",
                descripcion: 'Pulse abajo <strong>Entrar al visor</strong> para comenzar la consulta.'
            }
        ];

        const pantallaCarga = document.getElementById("pantalla-carga");

        if(pantallaCarga){
            pantallaCarga.classList.add("agroclima-carga-desaparece");
            setTimeout(()=>{
                pantallaCarga.remove();
                this.mostrarPanel(
                    "Agroclima Cebar",
                    "Visor de Riesgo Agroclimático",
                    "Bienvenido al visor interactivo de consulta de información agroclimática.",
                    listaBienvenida,
                    '<i class="fas fa-sign-in-alt"></i> 🗺 Entrar al visor 🧭'
                );
            }, 500);
        } else {
            this.mostrarPanel(
                "Agroclima Cebar",
                "Visor de Riesgo Agroclimático",
                "Bienvenido al visor interactivo de consulta de información agroclimática.",
                listaBienvenida,
                '<i class="fas fa-sign-in-alt"></i> 🗺 Entrar al visor 🧭'
            );
        }
    },

    /*=====================================================
      COMPONENTES PERMANENTES
    =====================================================*/
    crearLogo(){
        const contenedorMapa = document.getElementById("map");
        if(!contenedorMapa) return;

        const imagenLogo = document.createElement("img");
        imagenLogo.id = "logo-flotante";
        imagenLogo.src = CONFIG.logo;
        imagenLogo.alt = "Logo SFA Cebar";

        contenedorMapa.appendChild(imagenLogo);
    },

    crearToolbar(){
        const contenedorOpenLayersTopLeft = document.getElementById("top-left-container");
        if(!contenedorOpenLayersTopLeft) return;

        const barraHerramientas = document.createElement("div");
        const contenedorHerramientas = document.createElement("div");
        const contenedorToolbox = document.createElement("div");
        const botonToolbox = document.createElement("button");
        const panelToolbox = document.createElement("div");

        barraHerramientas.id = "agroclima-toolbar";
        barraHerramientas.className = "agroclima-toolbar";
        contenedorHerramientas.id = "agroclima-tools";
        contenedorToolbox.className = "agroclima-tool";
        botonToolbox.id = "boton-toolbar";
        botonToolbox.className = "agroclima-button fas fa-toolbox";
        panelToolbox.className = "agroclima-toolbar-panel";

        botonToolbox.title = "Herramientas Agroclima";
        panelToolbox.style.display = "none";

        this.crearContenidoToolbar(panelToolbox);

        botonToolbox.addEventListener("click", () => {
            panelToolbox.style.display = panelToolbox.style.display === "none" ? "flex" : "none";
        });

        contenedorToolbox.appendChild(botonToolbox);
        contenedorToolbox.appendChild(panelToolbox);
        contenedorHerramientas.appendChild(contenedorToolbox);
        barraHerramientas.appendChild(contenedorHerramientas);

        contenedorOpenLayersTopLeft.appendChild(barraHerramientas);
    },    

    /*=====================================================
      COMPONENTES REUTILIZABLES DE INTERFAZ
    =====================================================*/
    crearContenidoToolbar(panelToolbox){
        const tituloToolbox = document.createElement("h3");
        const separadorToolbox = document.createElement("hr");
        const botonAyuda = document.createElement("button");
        const botonAcerca = document.createElement("button");
        const botonCreditos = document.createElement("button");

        tituloToolbox.id = "titulo-toolbox";
        tituloToolbox.className = "agroclima-toolbox-titulo";
        botonAyuda.id = "boton-ayuda";
        botonAyuda.className = "agroclima-toolbox-boton";
        botonAcerca.id = "boton-acerca";
        botonAcerca.className = "agroclima-toolbox-boton";
        botonCreditos.id = "boton-creditos";
        botonCreditos.className = "agroclima-toolbox-boton";

        tituloToolbox.textContent = "Herramientas Agroclima";
        botonAyuda.innerHTML = '<i class="fas fa-question-circle"></i> Ayuda';
        botonAcerca.innerHTML = '<i class="fas fa-info-circle"></i> Acerca del visor';
        botonCreditos.innerHTML = '<i class="fas fa-file-alt"></i> Créditos';

        botonAyuda.addEventListener("click", () => {
            panelToolbox.style.display = "none";
            this.mostrarAyuda();
        });

        panelToolbox.appendChild(tituloToolbox);
        panelToolbox.appendChild(separadorToolbox);
        panelToolbox.appendChild(botonAyuda);

        // Descomentar para volver a dejar visibles, sólo se ocultan para publicar sin partes incompletas
        // panelToolbox.appendChild(botonAcerca);
        // panelToolbox.appendChild(botonCreditos);
    },

    /*=====================================================
      UTILIDADES
    =====================================================*/
    crearListaHTML(elementosLista){
        return `
            <ul class="agroclima-lista">
                ${
                    elementosLista.map(item => {
                        if(typeof item === "string"){
                            return `<li>${item}</li>`;
                        }
                        const claseIcono = item.claseIcono || "agroclima-icono-ayuda";
                        const icono = item.icono ? `<i class="${item.icono} ${claseIcono}"></i>` : "";
                        const titulo = item.titulo ? `<strong>${icono} ${item.titulo}</strong>` : icono;
                        const descripcion = item.descripcion ? `<br>${item.descripcion}` : "";

                        return `<li>${titulo}${descripcion}</li>`;
                    }).join("")
                }
            </ul>
        `;
    },

    mostrarPanel(titulo, subtitulo, textoDescripcion, elementosLista, textoBotonAccion="Cerrar"){
        const panelModal = document.createElement("div");
        panelModal.id = "panel-agroclima";

        panelModal.innerHTML = `
        <div class="agroclima-modal">
            <header class="agroclima-modal-header">
                <img src="${CONFIG.logo}" class="agroclima-logo" alt="Logo SFA Cebar">
                <h1 class="agroclima-titulo">${titulo}</h1>
                <h2 class="agroclima-subtitulo">${subtitulo}</h2>
            </header>
            <section class="agroclima-modal-body">
                <p class="agroclima-descripcion">${textoDescripcion}</p>
                ${this.crearListaHTML(elementosLista)}
            </section>
            <footer class="agroclima-modal-footer">
                <button id="cerrar-panel-agroclima" class="agroclima-boton">${textoBotonAccion}</button>
            </footer>
        </div>
        `;

        document.body.appendChild(panelModal);

        const botonCerrarModal = document.getElementById("cerrar-panel-agroclima");
        botonCerrarModal.addEventListener("click", function(){
            panelModal.querySelector(".agroclima-modal").classList.add("agroclima-desaparece");
            setTimeout(function(){
                panelModal.remove();
            }, 1000);
        });
    },


    /*=====================================================
      SISTEMA DE NOTIFICACIONES
    =====================================================*/
    mostrarNotificacion(mensaje, tipo = "info", duracion = 4000){

        const tiposValidos = [
            "info",
            "exito",
            "advertencia",
            "error"
        ];

        if(!tiposValidos.includes(tipo)){
            tipo = "info";
        }

        // Eliminar una notificación anterior
        const anterior = document.getElementById("agroclima-notificacion");

        if(anterior){
            anterior.remove();
        }

        const notificacion = document.createElement("div");

        notificacion.id = "agroclima-notificacion";
        notificacion.className = `agroclima-notificacion agroclima-notificacion-${tipo}`;

        notificacion.innerHTML = `
            <span class="agroclima-notificacion-mensaje">
                ${mensaje}
            </span>

            <button
                type="button"
                class="agroclima-notificacion-cerrar"
                title="Cerrar notificación"
                aria-label="Cerrar notificación">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notificacion);

        const botonCerrar = notificacion.querySelector(
            ".agroclima-notificacion-cerrar"
        );

        botonCerrar.addEventListener("click", () => {
            this.ocultarNotificacion(notificacion);
        });

        // Activar animación de entrada
        requestAnimationFrame(() => {
            notificacion.classList.add("activo");
        });

        // Cierre automático
        if(duracion > 0){

            setTimeout(() => {

                if(document.body.contains(notificacion)){
                    this.ocultarNotificacion(notificacion);
                }

            }, duracion);

        }

        return notificacion;
    },


    ocultarNotificacion(notificacion){

        if(!notificacion) return;

        notificacion.classList.remove("activo");
        notificacion.classList.add("ocultando");

        setTimeout(() => {

            if(document.body.contains(notificacion)){
                notificacion.remove();
            }

        }, 250);
    },

    /*=====================================================
      AYUDA DEL VISOR
    =====================================================*/
    mostrarAyuda(){
        const listaAyuda = [
            {
                titulo: '<i class="fas agroclima-icono-ayuda">&#xf0ae;</i><span class="agroclima-separador-iconos">/</span><span class="agroclima-icono-capas-cerrar">»</span> Lista de capas',
                descripcion: 'Pulse el botón <strong>Lista de capas</strong> para acceder al listado de capas disponibles:<br><strong>Capas contraídas:</strong> pulse el botón <strong><i class="fas agroclima-icono-ayuda">&#xf0ae;</i></strong> para desplegar el listado.<br><strong>Capas desplegadas:</strong> pulse el botón <span class="agroclima-icono-capas-cerrar">»</span> para volver a contraer el listado.<br><br>'
            },
            {
                titulo: '<i class="fas fa-check-square agroclima-icono-ayuda"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-square agroclima-icono-mapa"></i> Capas individuales',
                descripcion: "Active o desactive una capa individual mediante la casilla de selección."
            },
            {
                titulo: '<i class="fas fa-minus-square agroclima-icono-ayuda"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-square agroclima-icono-mapa"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-check-square agroclima-icono-ayuda"></i> Grupos de capas',
                descripcion: "Desactive o active un grupo completo de capas mediante el selector del grupo."
            },
            {
                titulo: '<i class="fas fa-chevron-right agroclima-icono-ayuda"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-chevron-down agroclima-icono-ayuda"></i> Leyendas',
                descripcion: 'Expanda o contraiga la leyenda de una capa o grupo de capas mediante la pequeña flecha situada junto a ella(s).'
            },
            {
                titulo: '<i class="fas fa-dot-circle agroclima-icono-ayuda"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-circle agroclima-icono-mapa"></i> Mapas base',
                descripcion: 'Seleccione el mapa de fondo que prefiera mediante los botones circulares disponibles en el listado de capas.<br><br>'
            },
            {
                titulo: 'Información de una ubicación',
                descripcion: 'Consulte la información asociada a las capas temáticas activas:<br><strong>PC</strong><br><i class="fas fa-mouse-pointer agroclima-icono-mapa"></i> Coloque el cursor sobre una zona del mapa con información disponible.<br><i class="fas fa-hand-pointer agroclima-icono-mapa"></i> Cuando el cursor cambie a una mano apuntadora, haga clic sobre la zona para consultar la información.<br><strong>Móvil</strong><br><i class="fas fa-mobile-alt agroclima-icono-ayuda"></i> Pulse directamente sobre la zona del mapa que desea consultar.<br><br><i class="fas fa-comment-alt agroclima-icono-mapa"></i> Un mensaje emergente aparecerá con los datos relacionados a la ubicación.<br><br>'
            },
            {
                titulo: '<i class="fas fa-plus agroclima-icono-ayuda"></i><span class="agroclima-separador-iconos">/</span><i class="fas fa-minus agroclima-icono-ayuda"></i> Herramientas de Zoom',
                descripcion: 'Pulse para acercar (<i class="fas fa-plus agroclima-icono-ayuda"></i>) o alejar (<i class="fas fa-minus agroclima-icono-ayuda"></i>) la vista del mapa.<br>Alternativamente scroll (<strong>PC</strong>) o gesto de pellizco (<strong>Móvil</strong>).'
            },
            {
                icono: "fas fa-map-marker",
                titulo: "Mi ubicación",
                descripcion: "Utilice esta herramienta para consultar su ubicación actual en el mapa (requiere habilitar permisos al navegador)."
            },
            {
                icono: "fas fa-ruler",
                titulo: "Medición",
                descripcion: "Utilice esta herramienta para medir longitudes o áreas directamente sobre el mapa."
            },
            {
                icono: "fa fa-search",
                titulo: "Buscar",
                descripcion: 'Utilice el buscador para localizar municipios, coordenadas o lugares de interés en el mapa.<br>'+
                'Una vez se encuentre la ubicación deseada, se desplegará un mensaje <i class="fas fa-comment-alt agroclima-icono-mapa"></i> con los datos de las capas activas para dicha ubicación.'
            },
            {
                icono: "fas fa-toolbox",
                titulo: "Herramientas Agroclima",
                descripcion: "Abra este menú para acceder a esta ayuda en cualquier momento y a las demás funciones disponibles del visor."
            }
        ];

        this.mostrarPanel(
            "Agroclima Cebar",
            "Ayuda del visor",
            "Consulte las siguientes indicaciones para conocer las principales herramientas y formas de interacción con el visor.",
            listaAyuda,
            "↩ Regresar al visor"
        );
    },



    /*=====================================================
      INTERPRETADOR MULTI-FORMATO Y PLANAS (Gemini)
    =====================================================*/
    interpretarCoordenadas(textoInput) {
        if (!textoInput || typeof textoInput !== 'string') return { esValido: false };

        let textoLimpio = textoInput.trim();
        const limites = this.obtenerExtentCapas();

        // Rangos geográficos nacionales estrictos para Colombia
        const RANGO_LAT_COLOMBIA = [-5.0, 15.0];
        const RANGO_LON_COLOMBIA = [-85.0, -65.0];

        // 1. Separación inteligente de comas y decimales
        if (/[-+]?\d+\.\d+\s*,\s*[-+]?\d+\.\d+/.test(textoLimpio)) {
            textoLimpio = textoLimpio.replace(/,/g, ' ');
        } else if (/\d{1,3}\.\d{3},\d+/.test(textoLimpio)) {
            textoLimpio = textoLimpio.replace(/\./g, '').replace(/,/g, '.');
        } else if (!textoLimpio.includes('.')) {
            textoLimpio = textoLimpio.replace(/,/g, '.');
        }

        const numeros = textoLimpio.match(/[-+]?[0-9]*\.?[0-9]+/g);
        if (!numeros || numeros.length < 2) return { esValido: false };

        let val1 = parseFloat(numeros[0]);
        let val2 = parseFloat(numeros[1]);

        // Guardar las cadenas de texto originales de los números extraídos
        let tok1 = numeros[0];
        let tok2 = numeros[1];

        if (isNaN(val1) || isNaN(val2)) return { esValido: false };

        const proyeccionVistaActual = map.getView().getProjection();

        // 2. Detección de Coordenadas Planas / Metradas (Valores > 1000)
        if (Math.abs(val1) > 1000 || Math.abs(val2) > 1000) {
            let este = val1;
            let norte = val2;
            let esteTok = tok1;
            let norteTok = tok2;

            if (val1 > val2 && val1 > 1000000 && val2 < 1000000) {
                este = val2;
                norte = val1;
                esteTok = tok2;
                norteTok = tok1;
            }

            let coordGeografica = null;
            try {
                if (proyeccionVistaActual.getCode() === 'EPSG:3857') {
                    if (Math.abs(este) > 1000000 && Math.abs(este) < 10000000 && Math.abs(norte) < 2000000) {
                        coordGeografica = ol.proj.transform([este, norte], 'EPSG:3857', 'EPSG:4326');
                    } else if (window.proj4 && ol.proj.proj4) {
                        coordGeografica = ol.proj.transform([este, norte], 'EPSG:9377', 'EPSG:4326');
                    } else {
                        coordGeografica = ol.proj.transform([este, norte], proyeccionVistaActual, 'EPSG:4326');
                    }
                } else {
                    coordGeografica = ol.proj.transform([este, norte], proyeccionVistaActual, 'EPSG:4326');
                }
            } catch (e) {
                coordGeografica = ol.proj.transform([este, norte], proyeccionVistaActual, 'EPSG:4326');
            }

            if (coordGeografica && 
                coordGeografica[1] >= RANGO_LAT_COLOMBIA[0] && coordGeografica[1] <= RANGO_LAT_COLOMBIA[1] &&
                coordGeografica[0] >= RANGO_LON_COLOMBIA[0] && coordGeografica[0] <= RANGO_LON_COLOMBIA[1]) {
                return {
                    esValido: true,
                    latitud: coordGeografica[1],
                    longitud: coordGeografica[0],
                    latTextoOriginal: `N: ${norteTok} m`,
                    lonTextoOriginal: `E: ${esteTok} m`,
                    textoOriginal: textoInput.trim()
                };
            }
        }

        // 3. Detección de GMS / DM (Grados Minutos Segundos / Decimales)
        // Incluye soporte para °, º, d, comillas simples/dobles normales y tipográficas (’,”,″)
        const regexAngular = /([0-9]{1,3})[\s°ºdD]+([0-9]{1,2}(?:\.[0-9]+)?)[\s'′’]*(?:([0-9]{1,2}(?:\.[0-9]+)?)[\s"″”]*\s*)?([NSEWnsew])/g;
        const coincidenciasAngulares = [...textoLimpio.matchAll(regexAngular)];

        let latitud = null;
        let longitud = null;
        let latTextoOriginal = null;
        let lonTextoOriginal = null;

        if (coincidenciasAngulares.length === 2) {
            const convertirAngularADecimal = (grados, minutos, segundos, orientacion) => {
                const g = parseFloat(grados) || 0;
                const m = parseFloat(minutos) || 0;
                const s = parseFloat(segundos) || 0;
                let decimal = g + (m / 60) + (s / 3600);
                const dir = orientacion.toUpperCase();
                if (dir === 'S' || dir === 'W') decimal = -decimal;
                return decimal;
            };

            const a1 = convertirAngularADecimal(coincidenciasAngulares[0][1], coincidenciasAngulares[0][2], coincidenciasAngulares[0][3], coincidenciasAngulares[0][4]);
            const a2 = convertirAngularADecimal(coincidenciasAngulares[1][1], coincidenciasAngulares[1][2], coincidenciasAngulares[1][3], coincidenciasAngulares[1][4]);

            const frag1 = coincidenciasAngulares[0][0].trim();
            const frag2 = coincidenciasAngulares[1][0].trim();

            if (a1 >= RANGO_LAT_COLOMBIA[0] && a1 <= RANGO_LAT_COLOMBIA[1] && a2 >= RANGO_LON_COLOMBIA[0] && a2 <= RANGO_LON_COLOMBIA[1]) {
                latitud = a1; longitud = a2;
                latTextoOriginal = frag1; lonTextoOriginal = frag2;
            } else if (a1 >= RANGO_LON_COLOMBIA[0] && a1 <= RANGO_LON_COLOMBIA[1] && a2 >= RANGO_LAT_COLOMBIA[0] && a2 <= RANGO_LAT_COLOMBIA[1]) {
                longitud = a1; latitud = a2;
                lonTextoOriginal = frag1; latTextoOriginal = frag2;
            }
        } else {
            // 4. Grados Decimales (DD) con Inversión e Inferencia Inteligente
            if (val1 > 60 && val1 < 85) val1 = -val1;
            if (val2 > 60 && val2 < 85) val2 = -val2;

            const val1EsLon = (val1 >= RANGO_LON_COLOMBIA[0] && val1 <= RANGO_LON_COLOMBIA[1]);
            const val2EsLat = (val2 >= RANGO_LAT_COLOMBIA[0] && val2 <= RANGO_LAT_COLOMBIA[1]);

            const val1EsLat = (val1 >= RANGO_LAT_COLOMBIA[0] && val1 <= RANGO_LAT_COLOMBIA[1]);
            const val2EsLon = (val2 >= RANGO_LON_COLOMBIA[0] && val2 <= RANGO_LON_COLOMBIA[1]);

            if (val1EsLon && val2EsLat) {
                // Ejemplo: -76.258 5.2685 -> Longitud original: -76.258, Latitud original: 5.2685
                longitud = val1; latitud = val2;
                lonTextoOriginal = tok1; latTextoOriginal = tok2;
            } else if (val1EsLat && val2EsLon) {
                // Ejemplo: 5.2685 -76.258 -> Latitud original: 5.2685, Longitud original: -76.258
                latitud = val1; longitud = val2;
                latTextoOriginal = tok1; lonTextoOriginal = tok2;
            } else {
                if (val1 >= limites.lat[0] && val1 <= limites.lat[1] && val2 >= limites.lon[0] && val2 <= limites.lon[1]) {
                    latitud = val1; longitud = val2;
                    latTextoOriginal = tok1; lonTextoOriginal = tok2;
                } else if (val1 >= limites.lon[0] && val1 <= limites.lon[1] && val2 >= limites.lat[0] && val2 <= limites.lat[1]) {
                    longitud = val1; latitud = val2;
                    lonTextoOriginal = tok1; latTextoOriginal = tok2;
                }
            }
        }

        if (latitud === null || longitud === null) {
            return { esValido: false, fueraDeRango: true };
        }

        return {
            esValido: true,
            latitud: latitud,
            longitud: longitud,
            latTextoOriginal: latTextoOriginal || latitud.toString(),
            lonTextoOriginal: lonTextoOriginal || longitud.toString(),
            textoOriginal: textoInput.trim()
        };
    },

    /*=====================================================
      FORMATO DE COORDENADAS PARA PRESENTACIÓN (Gemini)
    =====================================================*/
    formatearCoordenadas(latTexto, lonTexto) {
        return `📍 Lat: ${latTexto} | Lon: ${lonTexto}`;
    },

    /*=====================================================
      CÁLCULO DINÁMICO DEL MARCO GEOGRÁFICO HÍBRIDO (Gemini)
    =====================================================*/
    obtenerExtentCapas() {
        if (typeof map === 'undefined') {
            return { lon: [-85.0, -65.0], lat: [-5.0, 15.0], viewboxStr: "-85.0,15.0,-65.0,-5.0" };
        }

        const extentCombinado = ol.extent.createEmpty();
        const proyeccionVistaActual = map.getView().getProjection();

        map.getLayers().forEach(capa => {
            if (capa && capa.get('title') && typeof capa.getSource === 'function') {
                const fuente = capa.getSource();
                if (fuente) {
                    let extentCapa = null;

                    if (typeof capa.getExtent === 'function' && capa.getExtent()) {
                        extentCapa = capa.getExtent();
                    } else if (typeof fuente.getExtent === 'function') {
                        extentCapa = fuente.getExtent();
                    } else if (typeof fuente.getTileGrid === 'function' && fuente.getTileGrid()) {
                        extentCapa = fuente.getTileGrid().getExtent();
                    }

                    if (extentCapa && !ol.extent.isEmpty(extentCapa) && isFinite(extentCapa[0]) && Math.abs(extentCapa[0]) !== Infinity) {
                        // Descartar capas con extent global mundial de Web Mercator (>15,000,000 m)
                        if (Math.abs(extentCapa[0]) < 15000000 && Math.abs(extentCapa[2]) < 15000000) {
                            ol.extent.extend(extentCombinado, extentCapa);
                        }
                    }
                }
            }
        });

        if (!ol.extent.isEmpty(extentCombinado) && isFinite(extentCombinado[0])) {
            const extentWGS84 = ol.proj.transformExtent(extentCombinado, proyeccionVistaActual, 'EPSG:4326');
            
            // Restringir el marco espacial a la cobertura de Colombia
            const minLon = Math.max(extentWGS84[0], -85.0);
            const minLat = Math.max(extentWGS84[1], -5.0);
            const maxLon = Math.min(extentWGS84[2], -65.0);
            const maxLat = Math.min(extentWGS84[3], 15.0);

            if (minLon < maxLon && minLat < maxLat) {
                return {
                    lon: [minLon, maxLon],
                    lat: [minLat, maxLat],
                    viewboxStr: `${minLon},${maxLat},${maxLon},${minLat}`
                };
            }
        }

        return {
            lon: [-85.0, -65.0],
            lat: [-5.0, 15.0],
            viewboxStr: "-85.0,15.0,-65.0,-5.0"
        };
    },

    /*=====================================================
      EXTENSIÓN PARA EL BUSCADOR Y COORDENADAS (Gemini)
    =====================================================*/
    configurarBuscadorPhoton() {
        setTimeout(() => {
            if (typeof map === 'undefined') return;

            const contextoAgroclima = this;

        // Función interceptora para Nominatim (viewbox + bounded=1 + countrycodes=co)
            const inyectarFiltroNominatim = (url) => {
                if (typeof url === 'string' && (url.includes('nominatim') || url.includes('search?'))) {
                    const limites = contextoAgroclima.obtenerExtentCapas();
                    const conector = url.includes('?') ? '&' : '?';
                    // Inyecta extensión espacial (viewbox), límite estricto (bounded=1) y código de país (countrycodes=co)
                    return url + `${conector}viewbox=${limites.viewboxStr}&bounded=1&countrycodes=co`;
                }
                return url;
            };


            // Intercepción de peticiones HTTP Fetch y XHR
            if (window.fetch) {
                const fetchOriginal = window.fetch;
                window.fetch = function(recurso, opciones) {
                    if (typeof recurso === 'string') {
                        recurso = inyectarFiltroNominatim(recurso);
                    }
                    return fetchOriginal.apply(this, arguments);
                };
            }

            const abrirXhrOriginal = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(metodo, url) {
                url = inyectarFiltroNominatim(url);
                return abrirXhrOriginal.apply(this, arguments);
            };

            // 1. Crear contenedor DOM del botón de cierre flotante
            const contenedorBotonMarcador = document.createElement('div');
            contenedorBotonMarcador.id = 'contenedor-cerrar-marcador';
            contenedorBotonMarcador.innerHTML = `
                <button id="boton-cerrar-marcador" type="button" title="Quitar marcador de búsqueda">
                    <i class="fas fa-times"></i>
                </button>
            `;
            document.body.appendChild(contenedorBotonMarcador);

            const overlayCierreMarcador = new ol.Overlay({
                element: contenedorBotonMarcador,
                positioning: 'bottom-center',
                offset: [16, -42],
                stopEvent: true
            });
            map.addOverlay(overlayCierreMarcador);

            const ocultarBotonMarcador = () => {
                overlayCierreMarcador.setPosition(undefined);
                contenedorBotonMarcador.classList.remove("activo");
            };

            const limpiarMarcadorBusqueda = () => {
                ocultarBotonMarcador();

                map.getLayers().forEach(capa => {
                    if (capa && typeof capa.getSource === 'function') {
                        const fuenteVectorial = capa.getSource();
                        if (fuenteVectorial && typeof fuenteVectorial.clear === 'function' && !capa.get('title')) {
                            fuenteVectorial.clear();
                        }
                    }
                });

                const campoInputBusqueda = document.querySelector('.photon-input');
                if (campoInputBusqueda) {
                    campoInputBusqueda.value = '';
                }
            };

            // 2. Eventos de cierre unificado
            contenedorBotonMarcador.addEventListener('click', (evento) => {
                evento.stopPropagation();
                evento.preventDefault();
                limpiarMarcadorBusqueda();

                const botonCerrarPopup = document.getElementById('popup-closer');
                if (botonCerrarPopup) botonCerrarPopup.click();
            });

            const botonCerrarPopupNativo = document.getElementById('popup-closer');
            if (botonCerrarPopupNativo && !botonCerrarPopupNativo.dataset.listenerLimpieza) {
                botonCerrarPopupNativo.dataset.listenerLimpieza = "true";
                botonCerrarPopupNativo.addEventListener('click', () => {
                    limpiarMarcadorBusqueda();
                });
            }

            // 3. Intercepción de Búsqueda por Coordenadas Directas
            const campoInputBusqueda = document.querySelector('.photon-input');

            if (campoInputBusqueda) {
                const procesarBusquedaDirecta = (evento) => {
                    if (evento.type === 'keydown' && evento.key !== 'Enter') return;

                    const resultadoEvaluacion = this.interpretarCoordenadas(campoInputBusqueda.value);

                    if (resultadoEvaluacion.esValido) {
                        evento.preventDefault();
                        evento.stopPropagation();
                        if (typeof evento.stopImmediatePropagation === 'function') {
                            evento.stopImmediatePropagation();
                        }

                        const listaAutocomplete = document.querySelector('.photon-autocomplete');
                        if (listaAutocomplete) listaAutocomplete.style.display = 'none';

                        const proyeccionVistaActual = map.getView().getProjection();
                        const coordenadaProyectada = ol.proj.transform(
                            [resultadoEvaluacion.longitud, resultadoEvaluacion.latitud],
                            'EPSG:4326',
                            proyeccionVistaActual
                        );

                        map.getLayers().forEach(capa => {
                            if (capa && typeof capa.getSource === 'function') {
                                const fuenteVectorial = capa.getSource();
                                if (fuenteVectorial && !capa.get('title') && typeof fuenteVectorial.clear === 'function') {
                                    fuenteVectorial.clear();

                                    // 1. Crear la geometría de punto en la proyección activa
                                    const puntoGeometria = new ol.geom.Point(coordenadaProyectada);
                                    const entidadMarcador = new ol.Feature(puntoGeometria);

                                    // Lectura dinámica del sistema de colores en custom.css (:root)
                                    const estiloRoot = getComputedStyle(document.documentElement);
                                    const colorTextoEtiqueta = estiloRoot.getPropertyValue('--etiqueta-coordenada-texto').trim() || '#064d6b';
                                    const colorBordeEtiqueta = estiloRoot.getPropertyValue('--etiqueta-coordenada-borde').trim() || '#ec4529';
                                    const colorFondoEtiqueta = estiloRoot.getPropertyValue('--etiqueta-coordenada-bg').trim() || 'rgba(255, 255, 255, 0.95)';

                                    // 2. Definir el estilo de icono reutilizando la imagen nativa de Qgis2web
                                    const estiloMarcadorNativo = new ol.style.Style({
                                        image: new ol.style.Icon({
                                            anchor: [0.5, 1],
                                            src: 'resources/marker.png'
                                        }),
                                        // Crear texto flotante bajo el marcador con las expresiones originales ordenadas
                                        text: new ol.style.Text({
                                            text: contextoAgroclima.formatearCoordenadas(
                                                resultadoEvaluacion.latTextoOriginal,
                                                resultadoEvaluacion.lonTextoOriginal
                                            ),
                                            font: 'bold 11px Arial, sans-serif',
                                            fill: new ol.style.Fill({ color: colorTextoEtiqueta }),
                                            stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
                                            offsetY: 14,
                                            backgroundFill: new ol.style.Fill({ color: colorFondoEtiqueta }),
                                            backgroundStroke: new ol.style.Stroke({ color: colorBordeEtiqueta, width: 1 }),
                                            padding: [3, 6, 3, 6]
                                        })
                                    });

                                    entidadMarcador.setStyle(estiloMarcadorNativo);

                                    // 3. Asignar el estilo exclusivamente a esta entidad e insertarla en el mapa
                                    entidadMarcador.setStyle(estiloMarcadorNativo);
                                    fuenteVectorial.addFeature(entidadMarcador);

                                }
                            }
                        });

                        map.getView().animate({
                            center: coordenadaProyectada,
                            zoom: 14,
                            duration: 600
                        });

                        // Notificación coordenadas éxito
                        contextoAgroclima.mostrarNotificacion(
                            "Ubicación encontrada correctamente.",
                            "exito",
                            3000
                        );

                        setTimeout(() => {
                            campoInputBusqueda.value = resultadoEvaluacion.textoOriginal;
                        }, 120);
                    }
                };

                campoInputBusqueda.addEventListener('keydown', procesarBusquedaDirecta, true);
            }

            // 4. Actualizador de posición del marcador en el mapa
            const actualizarPosicionMarcador = () => {
                let coordenadaResultado = null;

                map.getLayers().forEach(capa => {
                    if (capa && typeof capa.getSource === 'function') {
                        const fuenteVectorial = capa.getSource();
                        if (fuenteVectorial && typeof fuenteVectorial.getFeatures === 'function' && !capa.get('title')) {
                            const entidades = fuenteVectorial.getFeatures();
                            if (entidades.length > 0) {
                                const geometria = entidades[entidades.length - 1].getGeometry();
                                if (geometria && typeof geometria.getCoordinates === 'function') {
                                    coordenadaResultado = geometria.getCoordinates();
                                }
                            }
                        }
                    }
                });

                if (coordenadaResultado) {
                    const proyeccionVistaActual = map.getView().getProjection();
                    const coordWGS84 = ol.proj.transform(coordenadaResultado, proyeccionVistaActual, 'EPSG:4326');
                    const limites = contextoAgroclima.obtenerExtentCapas();

                    if (coordWGS84[1] < limites.lat[0] || coordWGS84[1] > limites.lat[1] ||
                        coordWGS84[0] < limites.lon[0] || coordWGS84[0] > limites.lon[1]) {
                        limpiarMarcadorBusqueda();
                        return null;
                    }

                    overlayCierreMarcador.setPosition(coordenadaResultado);
                    contenedorBotonMarcador.classList.add("activo");
                    return coordenadaResultado;
                } else {
                    ocultarBotonMarcador();
                    return null;
                }
            };

            // 5. Escuchador de eventos híbrido (Compatible con PBF y Vectorial Tradicional)
            map.getLayers().forEach(capa => {
                if (capa && typeof capa.getSource === 'function') {
                    const fuenteVectorial = capa.getSource();
                    if (fuenteVectorial && !capa.get('title') && typeof fuenteVectorial.on === 'function') {
                        fuenteVectorial.on('addfeature', () => {
                            ocultarBotonMarcador();

                            map.once('moveend', () => {
                                const coordenada = actualizarPosicionMarcador();

                                if (coordenada) {
                                    let popupEjecutado = false;

                                    const ejecutarConsultaPixel = () => {
                                        if (popupEjecutado) return;
                                        popupEjecutado = true;

                                        const pixelCalculado = map.getPixelFromCoordinate(coordenada);
                                        const eventoMouseSimulado = new MouseEvent('click', {
                                            bubbles: true,
                                            cancelable: true,
                                            clientX: pixelCalculado ? pixelCalculado[0] : 0,
                                            clientY: pixelCalculado ? pixelCalculado[1] : 0
                                        });

                                        map.dispatchEvent({
                                            type: 'singleclick',
                                            coordinate: coordenada,
                                            pixel: pixelCalculado || [0, 0],
                                            originalEvent: eventoMouseSimulado
                                        });
                                    };

                                    // Detección automática de capas PBF / VectorTile en el mapa
                                    const tieneTeselasPbf = map.getLayers().getArray().some(c => {
                                        const src = (c && typeof c.getSource === 'function') ? c.getSource() : null;
                                        return src && (
                                            (window.ol && ol.source && ol.source.VectorTile && src instanceof ol.source.VectorTile) ||
                                            (typeof src.getTileGrid === 'function' && src.getTileGrid() && typeof src.getExtent !== 'function')
                                        );
                                    });

                                    if (tieneTeselasPbf) {
                                        // Ruta PBF: Sincronización con descarga e hilos de renderizado
                                        map.once('rendercomplete', () => setTimeout(ejecutarConsultaPixel, 80));
                                        setTimeout(ejecutarConsultaPixel, 500);
                                    } else {
                                        // Ruta GeoJSON/Tradicional: Respuesta inmediata en memoria
                                        setTimeout(ejecutarConsultaPixel, 50);
                                    }
                                }
                            });
                        });
                    }
                }
            });

        }, 1000);
    }


};

/*=========================================================
Inicialización general del visor
=========================================================*/
window.addEventListener("load", () => {
    Agroclima.iniciar();
});