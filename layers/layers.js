var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

var lyr_OpenFreeMapwithTrickQgis2Web_2 = new ol.layer.Group({
    title: 'OpenFreeMap with Trick Qgis2Web',
    type: 'base',
    combine: true,
});
olms.apply(lyr_OpenFreeMapwithTrickQgis2Web_2, 'https://tiles.openfreemap.org/styles/liberty');


        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

var vectorTileUrl_PrediccinLluviaIDEAMNoviembre2026_5 = 'layers/PrediccinLluviaIDEAMNoviembre2026_5-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_PrediccinLluviaIDEAMNoviembre2026_5 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 5,
    url: vectorTileUrl_PrediccinLluviaIDEAMNoviembre2026_5,
    attributions: ' '
});
var lyr_PrediccinLluviaIDEAMNoviembre2026_5 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_PrediccinLluviaIDEAMNoviembre2026_5,
    sourceType: 'pbf',
    popuplayertitle: 'Predicción Lluvia IDEAM Noviembre 2026',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_PrediccinLluviaIDEAMNoviembre2026_5,
    title: 'Predicción Lluvia IDEAM Noviembre 2026<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_0.png" /> <-100%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_1.png" /> -100% - -80%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_2.png" /> -80% - -60%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_3.png" /> -60% - -50%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_4.png" /> -50% - -40%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_5.png" /> -40% - -30%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_6.png" /> -30% - -20%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_7.png" /> -20% - -10%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_8.png" /> -10% - 10%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_9.png" /> 10% - 20%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_10.png" /> 20% - 30%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_11.png" /> 30% - 40%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_12.png" /> 40% - 50%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_13.png" /> 50% - 60%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_14.png" /> 60% - 80%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_15.png" /> 80% - 100%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMNoviembre2026_5_16.png" /> >100%<br />' });


var vectorTileUrl_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6 = 'layers/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 5,
    url: vectorTileUrl_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6,
    attributions: ' '
});
var lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo humedad suelo Noviembre2026 (visual) V09Oct2026',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6,
    title: 'Riesgo humedad suelo Noviembre2026 (visual) V09Oct2026<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_0.png" /> Riesgo severo. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_1.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_2.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_3.png" /> Riesto tolerable. Adecuada humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_4.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_5.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloNoviembre2026visualV09Oct2026_6_6.png" /> Riesgo severo. Reducción de humedad del suelo.<br />' });


var vectorTileUrl_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7 = 'layers/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 5,
    url: vectorTileUrl_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7,
    attributions: ' '
});
var lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo Cultivos Transitorios Periodo Oct2026 a Feb2027',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7,
    title: 'Riesgo Cultivos Transitorios Periodo Oct2026 a Feb2027<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });


var vectorTileUrl_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8 = 'layers/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 5,
    url: vectorTileUrl_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8,
    attributions: ' '
});
var lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo Cultivos Permanentes Periodo Jun2026 a Abr2027',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8,
    title: 'Riesgo Cultivos Permanentes Periodo Jun2026 a Abr2027<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });


var vectorTileUrl_Municipio_9 = 'layers/Municipio_9-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Municipio_9 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 5,
    maxZoom: 7,
    url: vectorTileUrl_Municipio_9,
    attributions: ' '
});
var lyr_Municipio_9 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Municipio_9,
    sourceType: 'pbf',
    popuplayertitle: 'Municipio',
    extent: ol.proj.transformExtent([-9098767.65487092, -470844.22966344346, -7442474.904534864, 1504862.8783052857], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Municipio_9,
    title: '<img src="styles/legend/Municipio_9.png" /> Municipio'
});


var vectorTileUrl_Departamento_10 = 'layers/Departamento_10-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Departamento_10 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 6,
    maxZoom: 8,
    url: vectorTileUrl_Departamento_10,
    attributions: ' '
});
var lyr_Departamento_10 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Departamento_10,
    sourceType: 'pbf',
    popuplayertitle: 'Departamento',
    extent: ol.proj.transformExtent([-9098767.65487092, -470844.22966344346, -7442474.904534864, 1504862.8783052857], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_Departamento_10,
    title: '<img src="styles/legend/Departamento_10.png" /> Departamento'
});

var group_RiesgoCultivos = new ol.layer.Group({
                                layers: [lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7,lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8,],
                                fold: 'close',
                                title: 'Riesgo Cultivos'});
var group_Riesgohumedadsuelo = new ol.layer.Group({
                                layers: [lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6,],
                                fold: 'close',
                                title: 'Riesgo humedad suelo'});
var group_PrediccinIDEAM = new ol.layer.Group({
                                layers: [lyr_PrediccinLluviaIDEAMNoviembre2026_5,],
                                fold: 'close',
                                title: 'Predicción IDEAM'});

lyr_OpenTopoMap_0.setVisible(false);lyr_GoogleRoad_1.setVisible(false);lyr_OpenFreeMapwithTrickQgis2Web_2.setVisible(false);lyr_GoogleHybrid_3.setVisible(false);lyr_OpenStreetMap_4.setVisible(true);lyr_PrediccinLluviaIDEAMNoviembre2026_5.setVisible(false);lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6.setVisible(false);lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7.setVisible(false);lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8.setVisible(true);lyr_Municipio_9.setVisible(true);lyr_Departamento_10.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleRoad_1,lyr_OpenFreeMapwithTrickQgis2Web_2,lyr_GoogleHybrid_3,lyr_OpenStreetMap_4,group_PrediccinIDEAM,group_Riesgohumedadsuelo,group_RiesgoCultivos,lyr_Municipio_9,lyr_Departamento_10];
lyr_PrediccinLluviaIDEAMNoviembre2026_5.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Prediccion': 'Lluvia esperada (mm)', 'Climatolog': 'Climatolog', 'Anomalia(m': 'Anomalia(m', 'Cambio(%)': '% de anomalía respecto a histórico', 'Prob_val_d': 'Probabilidad de ocurrencia (%)', 'Por debajo': 'Por debajo', 'Normal(%)': 'Normal(%)', 'Por encima': 'Por encima', 'Cond_mas_p': 'Cond_mas_p', 'Prob_extre': 'Prob_extre', });
lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'R.Pred_Oct': 'R.Pred_Oct', 'R.Pred_Nov': 'R.Pred_Nov', 'R.Pred_Dic': 'R.Pred_Dic', 'R.Pred_Ene': 'R.Pred_Ene', 'R.Pred_Feb': 'R.Pred_Feb', 'R.Pred_Mar': 'R.Pred_Mar', 'R.Pred_Abr': 'R.Pred_Abr', 'R-A.Pred_O': 'Riesgo humedad Octubre 2026', 'R-A.Pred_N': 'Riesgo humedad Noviembre 2026  (visual)', 'R-A.Pred_D': 'Riesgo humedad Diciembre 2026', 'R-A.Pred_E': 'Riesgo humedad Enero 2027', 'R-A.Pred_F': 'Riesgo humedad Febrero 2027', 'R-A.Pred_M': 'Riesgo humedad Marzo 2027', 'R-A.Pred_A': 'Riesgo humedad Abril 2027', });
lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'clip_chirp': 'clip_chirp', 'clip_chi_1': 'clip_chi_1', 'clip_chi_2': 'clip_chi_2', 'Prelim_cli': 'Prelim_cli', 'Pred_Oct20': 'Pred_Oct20', 'Pred_Nov20': 'Pred_Nov20', 'Pred_Dic20': 'Pred_Dic20', 'Pred_Ene20': 'Pred_Ene20', 'Pred_Feb20': 'Pred_Feb20', 'Pred_Mar20': 'Pred_Mar20', 'Pred_Abr20': 'Pred_Abr20', 'clip_chi_3': 'clip_chi_3', 'clip_chi_4': 'clip_chi_4', 'clip_chi_5': 'clip_chi_5', 'Prelim_c_1': 'Prelim_c_1', 'Pred_Oct_1': 'Pred_Oct_1', 'Pred_Nov_1': 'Pred_Nov_1', 'Pred_Dic_1': 'Pred_Dic_1', 'Pred_Ene_1': 'Pred_Ene_1', 'Pred_Feb_1': 'Pred_Feb_1', 'Pred_Mar_1': 'Pred_Mar_1', 'Pred_Abr_1': 'Pred_Abr_1', 'Valor ries': 'Valor ries', 'Valor ri_1': 'Valor ri_1', 'Valor ri_2': 'Valor ri_2', 'Valor ri_3': 'Valor ri_3', 'Valor ri_4': 'Valor ri_4', 'Valor ri_5': 'Valor ri_5', 'Valor ri_6': 'Valor ri_6', 'Valor ri_7': 'Valor ri_7', 'Valor ri_8': 'Valor ri_8', 'Valor ri_9': 'Valor ri_9', 'Valor ri10': 'Valor ri10', 'Cat riesgo': 'Cat riesgo', 'Cat ries_1': 'Cat ries_1', 'Cat ries_2': 'Cat ries_2', 'Cat ries_3': 'Cat ries_3', 'Cat ries_4': 'Cat ries_4', 'Cat ries_5': 'Cat ries_5', 'Cat ries_6': 'Cat ries_6', 'Cat ries_7': 'Cat ries_7', 'Cat ries_8': 'Cat ries_8', 'Cat ries_9': 'Cat ries_9', 'Cat ries10': 'Cat ries10', 'Severidad': 'Severidad', 'Severida_1': 'Severida_1', 'Severida_2': 'Severida_2', 'Severida_3': 'Severida_3', 'Severida_4': 'Severida_4', 'Severida_5': 'Severida_5', 'Severida_6': 'Severida_6', 'Severida_7': 'Severida_7', 'Severida_8': 'Severida_8', 'Severida_9': 'Severida_9', 'Severida10': 'Severida10', 'Severida11': 'Severida11', 'Severida12': 'Severida12', 'Condición': 'Condición', 'Riesgo Tra': 'Scoring de Riesgo Transitorios', 'Reinterpre': 'Reinterpre', 'Riesgo-Ame': 'Riesgo-Amenaza Cultivos Transitorios', 'Severida13': 'Severida13', 'Severida14': 'Severida14', 'Condici�_1': 'Condici�_1', 'Riesgo Per': 'Scoring de Riesgo Permanentes', 'Reinterp_1': 'Reinterp_1', 'Riesgo-A_1': 'Riesgo-Amenaza Cultivos Permanentes', 'Area Pixel': 'Area Pixel', 'Ponderador': 'Ponderador', 'Sum valida': 'Sum valida', 'ClavePixMu': 'ClavePixMu', });
lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'clip_chirp': 'clip_chirp', 'clip_chi_1': 'clip_chi_1', 'clip_chi_2': 'clip_chi_2', 'Prelim_cli': 'Prelim_cli', 'Pred_Oct20': 'Pred_Oct20', 'Pred_Nov20': 'Pred_Nov20', 'Pred_Dic20': 'Pred_Dic20', 'Pred_Ene20': 'Pred_Ene20', 'Pred_Feb20': 'Pred_Feb20', 'Pred_Mar20': 'Pred_Mar20', 'Pred_Abr20': 'Pred_Abr20', 'clip_chi_3': 'clip_chi_3', 'clip_chi_4': 'clip_chi_4', 'clip_chi_5': 'clip_chi_5', 'Prelim_c_1': 'Prelim_c_1', 'Pred_Oct_1': 'Pred_Oct_1', 'Pred_Nov_1': 'Pred_Nov_1', 'Pred_Dic_1': 'Pred_Dic_1', 'Pred_Ene_1': 'Pred_Ene_1', 'Pred_Feb_1': 'Pred_Feb_1', 'Pred_Mar_1': 'Pred_Mar_1', 'Pred_Abr_1': 'Pred_Abr_1', 'Valor ries': 'Valor ries', 'Valor ri_1': 'Valor ri_1', 'Valor ri_2': 'Valor ri_2', 'Valor ri_3': 'Valor ri_3', 'Valor ri_4': 'Valor ri_4', 'Valor ri_5': 'Valor ri_5', 'Valor ri_6': 'Valor ri_6', 'Valor ri_7': 'Valor ri_7', 'Valor ri_8': 'Valor ri_8', 'Valor ri_9': 'Valor ri_9', 'Valor ri10': 'Valor ri10', 'Cat riesgo': 'Cat riesgo', 'Cat ries_1': 'Cat ries_1', 'Cat ries_2': 'Cat ries_2', 'Cat ries_3': 'Cat ries_3', 'Cat ries_4': 'Cat ries_4', 'Cat ries_5': 'Cat ries_5', 'Cat ries_6': 'Cat ries_6', 'Cat ries_7': 'Cat ries_7', 'Cat ries_8': 'Cat ries_8', 'Cat ries_9': 'Cat ries_9', 'Cat ries10': 'Cat ries10', 'Severidad': 'Severidad', 'Severida_1': 'Severida_1', 'Severida_2': 'Severida_2', 'Severida_3': 'Severida_3', 'Severida_4': 'Severida_4', 'Severida_5': 'Severida_5', 'Severida_6': 'Severida_6', 'Severida_7': 'Severida_7', 'Severida_8': 'Severida_8', 'Severida_9': 'Severida_9', 'Severida10': 'Severida10', 'Severida11': 'Severida11', 'Severida12': 'Severida12', 'Condición': 'Condición', 'Riesgo Tra': 'Scoring de Riesgo Transitorios', 'Reinterpre': 'Reinterpre', 'Riesgo-Ame': 'Riesgo-Amenaza Cultivos Transitorios', 'Severida13': 'Severida13', 'Severida14': 'Severida14', 'Condici�_1': 'Condici�_1', 'Riesgo Per': 'Scoring de Riesgo Permanentes', 'Reinterp_1': 'Reinterp_1', 'Riesgo-A_1': 'Riesgo-Amenaza Cultivos Permanentes', 'Area Pixel': 'Area Pixel', 'Ponderador': 'Ponderador', 'Sum valida': 'Sum valida', 'ClavePixMu': 'ClavePixMu', });
lyr_Municipio_9.set('fieldAliases', {'id': 'id', 'MpCodigo': 'MpCodigo', 'MpNombre': 'Municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccio': 'Restriccio', 'Depto': 'Departamento', });
lyr_Departamento_10.set('fieldAliases', {'id': 'id', 'DeCodigo': 'DeCodigo', 'DeNombre': 'Departamento', 'DeArea': 'DeArea', 'DeNorma': 'DeNorma', });
lyr_PrediccinLluviaIDEAMNoviembre2026_5.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Prediccion': 'TextEdit', 'Climatolog': 'TextEdit', 'Anomalia(m': 'TextEdit', 'Cambio(%)': 'TextEdit', 'Prob_val_d': 'TextEdit', 'Por debajo': 'TextEdit', 'Normal(%)': 'TextEdit', 'Por encima': 'TextEdit', 'Cond_mas_p': 'TextEdit', 'Prob_extre': 'TextEdit', });
lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'R.Pred_Oct': 'TextEdit', 'R.Pred_Nov': 'TextEdit', 'R.Pred_Dic': 'TextEdit', 'R.Pred_Ene': 'TextEdit', 'R.Pred_Feb': 'TextEdit', 'R.Pred_Mar': 'TextEdit', 'R.Pred_Abr': 'TextEdit', 'R-A.Pred_O': 'TextEdit', 'R-A.Pred_N': 'TextEdit', 'R-A.Pred_D': 'TextEdit', 'R-A.Pred_E': 'TextEdit', 'R-A.Pred_F': 'TextEdit', 'R-A.Pred_M': 'TextEdit', 'R-A.Pred_A': 'TextEdit', });
lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'clip_chirp': 'TextEdit', 'clip_chi_1': 'TextEdit', 'clip_chi_2': 'TextEdit', 'Prelim_cli': 'TextEdit', 'Pred_Oct20': 'TextEdit', 'Pred_Nov20': 'TextEdit', 'Pred_Dic20': 'TextEdit', 'Pred_Ene20': 'TextEdit', 'Pred_Feb20': 'TextEdit', 'Pred_Mar20': 'TextEdit', 'Pred_Abr20': 'TextEdit', 'clip_chi_3': 'TextEdit', 'clip_chi_4': 'TextEdit', 'clip_chi_5': 'TextEdit', 'Prelim_c_1': 'TextEdit', 'Pred_Oct_1': 'TextEdit', 'Pred_Nov_1': 'TextEdit', 'Pred_Dic_1': 'TextEdit', 'Pred_Ene_1': 'TextEdit', 'Pred_Feb_1': 'TextEdit', 'Pred_Mar_1': 'TextEdit', 'Pred_Abr_1': 'TextEdit', 'Valor ries': 'TextEdit', 'Valor ri_1': 'TextEdit', 'Valor ri_2': 'TextEdit', 'Valor ri_3': 'TextEdit', 'Valor ri_4': 'TextEdit', 'Valor ri_5': 'TextEdit', 'Valor ri_6': 'TextEdit', 'Valor ri_7': 'TextEdit', 'Valor ri_8': 'TextEdit', 'Valor ri_9': 'TextEdit', 'Valor ri10': 'TextEdit', 'Cat riesgo': 'TextEdit', 'Cat ries_1': 'TextEdit', 'Cat ries_2': 'TextEdit', 'Cat ries_3': 'TextEdit', 'Cat ries_4': 'TextEdit', 'Cat ries_5': 'TextEdit', 'Cat ries_6': 'TextEdit', 'Cat ries_7': 'TextEdit', 'Cat ries_8': 'TextEdit', 'Cat ries_9': 'TextEdit', 'Cat ries10': 'TextEdit', 'Severidad': 'TextEdit', 'Severida_1': 'TextEdit', 'Severida_2': 'TextEdit', 'Severida_3': 'TextEdit', 'Severida_4': 'TextEdit', 'Severida_5': 'TextEdit', 'Severida_6': 'TextEdit', 'Severida_7': 'TextEdit', 'Severida_8': 'TextEdit', 'Severida_9': 'TextEdit', 'Severida10': 'TextEdit', 'Severida11': 'TextEdit', 'Severida12': 'TextEdit', 'Condición': 'TextEdit', 'Riesgo Tra': 'TextEdit', 'Reinterpre': 'TextEdit', 'Riesgo-Ame': 'TextEdit', 'Severida13': 'TextEdit', 'Severida14': 'TextEdit', 'Condici�_1': 'TextEdit', 'Riesgo Per': 'TextEdit', 'Reinterp_1': 'TextEdit', 'Riesgo-A_1': 'TextEdit', 'Area Pixel': 'TextEdit', 'Ponderador': 'TextEdit', 'Sum valida': 'TextEdit', 'ClavePixMu': 'TextEdit', });
lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'clip_chirp': 'TextEdit', 'clip_chi_1': 'TextEdit', 'clip_chi_2': 'TextEdit', 'Prelim_cli': 'TextEdit', 'Pred_Oct20': 'TextEdit', 'Pred_Nov20': 'TextEdit', 'Pred_Dic20': 'TextEdit', 'Pred_Ene20': 'TextEdit', 'Pred_Feb20': 'TextEdit', 'Pred_Mar20': 'TextEdit', 'Pred_Abr20': 'TextEdit', 'clip_chi_3': 'TextEdit', 'clip_chi_4': 'TextEdit', 'clip_chi_5': 'TextEdit', 'Prelim_c_1': 'TextEdit', 'Pred_Oct_1': 'TextEdit', 'Pred_Nov_1': 'TextEdit', 'Pred_Dic_1': 'TextEdit', 'Pred_Ene_1': 'TextEdit', 'Pred_Feb_1': 'TextEdit', 'Pred_Mar_1': 'TextEdit', 'Pred_Abr_1': 'TextEdit', 'Valor ries': 'TextEdit', 'Valor ri_1': 'TextEdit', 'Valor ri_2': 'TextEdit', 'Valor ri_3': 'TextEdit', 'Valor ri_4': 'TextEdit', 'Valor ri_5': 'TextEdit', 'Valor ri_6': 'TextEdit', 'Valor ri_7': 'TextEdit', 'Valor ri_8': 'TextEdit', 'Valor ri_9': 'TextEdit', 'Valor ri10': 'TextEdit', 'Cat riesgo': 'TextEdit', 'Cat ries_1': 'TextEdit', 'Cat ries_2': 'TextEdit', 'Cat ries_3': 'TextEdit', 'Cat ries_4': 'TextEdit', 'Cat ries_5': 'TextEdit', 'Cat ries_6': 'TextEdit', 'Cat ries_7': 'TextEdit', 'Cat ries_8': 'TextEdit', 'Cat ries_9': 'TextEdit', 'Cat ries10': 'TextEdit', 'Severidad': 'TextEdit', 'Severida_1': 'TextEdit', 'Severida_2': 'TextEdit', 'Severida_3': 'TextEdit', 'Severida_4': 'TextEdit', 'Severida_5': 'TextEdit', 'Severida_6': 'TextEdit', 'Severida_7': 'TextEdit', 'Severida_8': 'TextEdit', 'Severida_9': 'TextEdit', 'Severida10': 'TextEdit', 'Severida11': 'TextEdit', 'Severida12': 'TextEdit', 'Condición': 'TextEdit', 'Riesgo Tra': 'TextEdit', 'Reinterpre': 'TextEdit', 'Riesgo-Ame': 'TextEdit', 'Severida13': 'TextEdit', 'Severida14': 'TextEdit', 'Condici�_1': 'TextEdit', 'Riesgo Per': 'TextEdit', 'Reinterp_1': 'TextEdit', 'Riesgo-A_1': 'TextEdit', 'Area Pixel': 'TextEdit', 'Ponderador': 'TextEdit', 'Sum valida': 'TextEdit', 'ClavePixMu': 'TextEdit', });
lyr_Municipio_9.set('fieldImages', {'id': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'TextEdit', 'MpAltitud': 'Range', 'Restriccio': 'TextEdit', 'Depto': 'TextEdit', });
lyr_Departamento_10.set('fieldImages', {'id': 'TextEdit', 'DeCodigo': 'TextEdit', 'DeNombre': 'TextEdit', 'DeArea': 'TextEdit', 'DeNorma': 'TextEdit', });
lyr_PrediccinLluviaIDEAMNoviembre2026_5.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'Prediccion': 'inline label - always visible', 'Climatolog': 'hidden field', 'Anomalia(m': 'hidden field', 'Cambio(%)': 'inline label - visible with data', 'Prob_val_d': 'inline label - visible with data', 'Por debajo': 'hidden field', 'Normal(%)': 'hidden field', 'Por encima': 'hidden field', 'Cond_mas_p': 'hidden field', 'Prob_extre': 'hidden field', });
lyr_RiesgohumedadsueloNoviembre2026visualV09Oct2026_6.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'R.Pred_Oct': 'hidden field', 'R.Pred_Nov': 'hidden field', 'R.Pred_Dic': 'hidden field', 'R.Pred_Ene': 'hidden field', 'R.Pred_Feb': 'hidden field', 'R.Pred_Mar': 'hidden field', 'R.Pred_Abr': 'hidden field', 'R-A.Pred_O': 'inline label - visible with data', 'R-A.Pred_N': 'header label - visible with data', 'R-A.Pred_D': 'inline label - visible with data', 'R-A.Pred_E': 'inline label - visible with data', 'R-A.Pred_F': 'hidden field', 'R-A.Pred_M': 'hidden field', 'R-A.Pred_A': 'hidden field', });
lyr_RiesgoCultivosTransitoriosPeriodoOct2026aFeb2027_7.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'clip_chirp': 'hidden field', 'clip_chi_1': 'hidden field', 'clip_chi_2': 'hidden field', 'Prelim_cli': 'hidden field', 'Pred_Oct20': 'hidden field', 'Pred_Nov20': 'hidden field', 'Pred_Dic20': 'hidden field', 'Pred_Ene20': 'hidden field', 'Pred_Feb20': 'hidden field', 'Pred_Mar20': 'hidden field', 'Pred_Abr20': 'hidden field', 'clip_chi_3': 'hidden field', 'clip_chi_4': 'hidden field', 'clip_chi_5': 'hidden field', 'Prelim_c_1': 'hidden field', 'Pred_Oct_1': 'hidden field', 'Pred_Nov_1': 'hidden field', 'Pred_Dic_1': 'hidden field', 'Pred_Ene_1': 'hidden field', 'Pred_Feb_1': 'hidden field', 'Pred_Mar_1': 'hidden field', 'Pred_Abr_1': 'hidden field', 'Valor ries': 'hidden field', 'Valor ri_1': 'hidden field', 'Valor ri_2': 'hidden field', 'Valor ri_3': 'hidden field', 'Valor ri_4': 'hidden field', 'Valor ri_5': 'hidden field', 'Valor ri_6': 'hidden field', 'Valor ri_7': 'hidden field', 'Valor ri_8': 'hidden field', 'Valor ri_9': 'hidden field', 'Valor ri10': 'hidden field', 'Cat riesgo': 'hidden field', 'Cat ries_1': 'hidden field', 'Cat ries_2': 'hidden field', 'Cat ries_3': 'hidden field', 'Cat ries_4': 'hidden field', 'Cat ries_5': 'hidden field', 'Cat ries_6': 'hidden field', 'Cat ries_7': 'hidden field', 'Cat ries_8': 'hidden field', 'Cat ries_9': 'hidden field', 'Cat ries10': 'hidden field', 'Severidad': 'hidden field', 'Severida_1': 'hidden field', 'Severida_2': 'hidden field', 'Severida_3': 'hidden field', 'Severida_4': 'hidden field', 'Severida_5': 'hidden field', 'Severida_6': 'hidden field', 'Severida_7': 'hidden field', 'Severida_8': 'hidden field', 'Severida_9': 'hidden field', 'Severida10': 'hidden field', 'Severida11': 'hidden field', 'Severida12': 'hidden field', 'Condición': 'hidden field', 'Riesgo Tra': 'header label - always visible', 'Reinterpre': 'hidden field', 'Riesgo-Ame': 'no label', 'Severida13': 'hidden field', 'Severida14': 'hidden field', 'Condici�_1': 'hidden field', 'Riesgo Per': 'hidden field', 'Reinterp_1': 'hidden field', 'Riesgo-A_1': 'hidden field', 'Area Pixel': 'hidden field', 'Ponderador': 'hidden field', 'Sum valida': 'hidden field', 'ClavePixMu': 'hidden field', });
lyr_RiesgoCultivosPermanentesPeriodoJun2026aAbr2027_8.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'clip_chirp': 'hidden field', 'clip_chi_1': 'hidden field', 'clip_chi_2': 'hidden field', 'Prelim_cli': 'hidden field', 'Pred_Oct20': 'hidden field', 'Pred_Nov20': 'hidden field', 'Pred_Dic20': 'hidden field', 'Pred_Ene20': 'hidden field', 'Pred_Feb20': 'hidden field', 'Pred_Mar20': 'hidden field', 'Pred_Abr20': 'hidden field', 'clip_chi_3': 'hidden field', 'clip_chi_4': 'hidden field', 'clip_chi_5': 'hidden field', 'Prelim_c_1': 'hidden field', 'Pred_Oct_1': 'hidden field', 'Pred_Nov_1': 'hidden field', 'Pred_Dic_1': 'hidden field', 'Pred_Ene_1': 'hidden field', 'Pred_Feb_1': 'hidden field', 'Pred_Mar_1': 'hidden field', 'Pred_Abr_1': 'hidden field', 'Valor ries': 'hidden field', 'Valor ri_1': 'hidden field', 'Valor ri_2': 'hidden field', 'Valor ri_3': 'hidden field', 'Valor ri_4': 'hidden field', 'Valor ri_5': 'hidden field', 'Valor ri_6': 'hidden field', 'Valor ri_7': 'hidden field', 'Valor ri_8': 'hidden field', 'Valor ri_9': 'hidden field', 'Valor ri10': 'hidden field', 'Cat riesgo': 'hidden field', 'Cat ries_1': 'hidden field', 'Cat ries_2': 'hidden field', 'Cat ries_3': 'hidden field', 'Cat ries_4': 'hidden field', 'Cat ries_5': 'hidden field', 'Cat ries_6': 'hidden field', 'Cat ries_7': 'hidden field', 'Cat ries_8': 'hidden field', 'Cat ries_9': 'hidden field', 'Cat ries10': 'hidden field', 'Severidad': 'hidden field', 'Severida_1': 'hidden field', 'Severida_2': 'hidden field', 'Severida_3': 'hidden field', 'Severida_4': 'hidden field', 'Severida_5': 'hidden field', 'Severida_6': 'hidden field', 'Severida_7': 'hidden field', 'Severida_8': 'hidden field', 'Severida_9': 'hidden field', 'Severida10': 'hidden field', 'Severida11': 'hidden field', 'Severida12': 'hidden field', 'Condición': 'hidden field', 'Riesgo Tra': 'hidden field', 'Reinterpre': 'hidden field', 'Riesgo-Ame': 'hidden field', 'Severida13': 'hidden field', 'Severida14': 'hidden field', 'Condici�_1': 'hidden field', 'Riesgo Per': 'header label - always visible', 'Reinterp_1': 'hidden field', 'Riesgo-A_1': 'no label', 'Area Pixel': 'hidden field', 'Ponderador': 'hidden field', 'Sum valida': 'hidden field', 'ClavePixMu': 'hidden field', });
lyr_Municipio_9.set('fieldLabels', {'id': 'hidden field', 'MpCodigo': 'hidden field', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccio': 'hidden field', 'Depto': 'inline label - visible with data', });
lyr_Departamento_10.set('fieldLabels', {'id': 'hidden field', 'DeCodigo': 'hidden field', 'DeNombre': 'hidden field', 'DeArea': 'hidden field', 'DeNorma': 'hidden field', });
lyr_Departamento_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});