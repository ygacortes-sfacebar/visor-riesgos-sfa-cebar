var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

var vectorTileUrl_PrediccinLluviaIDEAMSeptiembre2026_2 = 'layers/PrediccinLluviaIDEAMSeptiembre2026_2-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_PrediccinLluviaIDEAMSeptiembre2026_2 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_PrediccinLluviaIDEAMSeptiembre2026_2,
    attributions: ' '
});
var lyr_PrediccinLluviaIDEAMSeptiembre2026_2 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_PrediccinLluviaIDEAMSeptiembre2026_2,
    sourceType: 'pbf',
    popuplayertitle: 'Predicción Lluvia IDEAM Septiembre 2026',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_PrediccinLluviaIDEAMSeptiembre2026_2,
    title: 'Predicción Lluvia IDEAM Septiembre 2026<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_0.png" /> <-100%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_1.png" /> -100% - -80%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_2.png" /> -80% - -60%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_3.png" /> -60% - -50%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_4.png" /> -50% - -40%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_5.png" /> -40% - -30%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_6.png" /> -30% - -20%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_7.png" /> -20% - -10%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_8.png" /> -10% - 10%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_9.png" /> 10% - 20%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_10.png" /> 20% - 30%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_11.png" /> 30% - 40%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_12.png" /> 40% - 50%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_13.png" /> 50% - 60%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_14.png" /> 60% - 80%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_15.png" /> 80% - 100%<br />\
    <img src="styles/legend/PrediccinLluviaIDEAMSeptiembre2026_2_16.png" /> >100%<br />' });


var vectorTileUrl_RiesgohumedadsueloVisualSeptiembre2026_3 = 'layers/RiesgohumedadsueloVisualSeptiembre2026_3-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgohumedadsueloVisualSeptiembre2026_3 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_RiesgohumedadsueloVisualSeptiembre2026_3,
    attributions: ' '
});
var lyr_RiesgohumedadsueloVisualSeptiembre2026_3 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgohumedadsueloVisualSeptiembre2026_3,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo humedad suelo (Visual Septiembre2026)',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgohumedadsueloVisualSeptiembre2026_3,
    title: 'Riesgo humedad suelo (Visual Septiembre2026)<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_0.png" /> Riesgo severo. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_1.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_2.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_3.png" /> Riesto tolerable. Adecuada humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_4.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_5.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgohumedadsueloVisualSeptiembre2026_3_6.png" /> Riesgo severo. Reducción de humedad del suelo.<br />' });


var vectorTileUrl_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4 = 'layers/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4,
    attributions: ' '
});
var lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo Cultivos Transitorios Periodo Ago a Dic2026',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4,
    title: 'Riesgo Cultivos Transitorios Periodo Ago a Dic2026<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });


var vectorTileUrl_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5 = 'layers/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5,
    attributions: ' '
});
var lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5,
    sourceType: 'pbf',
    popuplayertitle: 'Riesgo Cultivos Permanentes Periodo Abr2026 a Feb2027',
    extent: ol.proj.transformExtent([-9103151.359619947, -473542.2854889546, -7438924.972260507, 1505468.5717959313], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5,
    title: 'Riesgo Cultivos Permanentes Periodo Abr2026 a Feb2027<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });


var vectorTileUrl_Municipio_6 = 'layers/Municipio_6-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Municipio_6 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 5,
    maxZoom: 7,
    url: vectorTileUrl_Municipio_6,
    attributions: ' '
});
var lyr_Municipio_6 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Municipio_6,
    sourceType: 'pbf',
    popuplayertitle: 'Municipio',
    extent: ol.proj.transformExtent([-9098767.65487092, -470844.22966344346, -7442474.904534864, 1504862.8783052857], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Municipio_6,
    title: '<img src="styles/legend/Municipio_6.png" /> Municipio'
});


var vectorTileUrl_Departamento_7 = 'layers/Departamento_7-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Departamento_7 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 6,
    maxZoom: 8,
    url: vectorTileUrl_Departamento_7,
    attributions: ' '
});
var lyr_Departamento_7 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Departamento_7,
    sourceType: 'pbf',
    popuplayertitle: 'Departamento',
    extent: ol.proj.transformExtent([-9098767.65487092, -470844.22966344346, -7442474.904534864, 1504862.8783052857], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_Departamento_7,
    title: '<img src="styles/legend/Departamento_7.png" /> Departamento'
});

var group_RiesgoCultivos = new ol.layer.Group({
                                layers: [lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4,lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5,],
                                fold: 'open',
                                title: 'Riesgo Cultivos'});
var group_Riesgohumedadsuelo = new ol.layer.Group({
                                layers: [lyr_RiesgohumedadsueloVisualSeptiembre2026_3,],
                                fold: 'close',
                                title: 'Riesgo humedad suelo'});
var group_PrediccinIDEAM = new ol.layer.Group({
                                layers: [lyr_PrediccinLluviaIDEAMSeptiembre2026_2,],
                                fold: 'close',
                                title: 'Predicción IDEAM'});

lyr_GoogleSatellite_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_PrediccinLluviaIDEAMSeptiembre2026_2.setVisible(false);lyr_RiesgohumedadsueloVisualSeptiembre2026_3.setVisible(false);lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4.setVisible(false);lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5.setVisible(true);lyr_Municipio_6.setVisible(true);lyr_Departamento_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,group_PrediccinIDEAM,group_Riesgohumedadsuelo,group_RiesgoCultivos,lyr_Municipio_6,lyr_Departamento_7];
lyr_PrediccinLluviaIDEAMSeptiembre2026_2.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Prediccion': 'Lluvia esperada (mm)', 'Climatolog': 'Climatolog', 'Anomalia(m': 'Anomalia(m', 'Cambio(%)': '% de anomalía respecto a histórico', 'Prob_val_d': 'Probabilidad de ocurrencia (%)', 'Por debajo': 'Por debajo', 'Normal(%)': 'Normal(%)', 'Por encima': 'Por encima', 'Cond_mas_p': 'Cond_mas_p', 'Prob_extre': 'Prob_extre', });
lyr_RiesgohumedadsueloVisualSeptiembre2026_3.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'R.Pred_Ago': 'R.Pred_Ago', 'R.Pred_Sep': 'R.Pred_Sep', 'R.Pred_Oct': 'R.Pred_Oct', 'R.Pred_Nov': 'R.Pred_Nov', 'R.Pred_Dic': 'R.Pred_Dic', 'R.Pred_Ene': 'R.Pred_Ene', 'R.Pred_Feb': 'R.Pred_Feb', 'R-A.Pred_A': 'Riesgo humedad Agosto 2026', 'R-A.Pred_S': 'Riesgo humedad Septiembre 2026', 'R-A.Pred_O': 'Riesgo humedad Octubre 2026', 'R-A.Pred_N': 'Riesgo humedad Noviembre 2026', 'R-A.Pred_D': 'Riesgo humedad Diciembre 2026', 'R-A.Pred_E': 'Riesgo humedad Enero 2027', 'R-A.Pred_F': 'Riesgo humedad Febrero 2027', });
lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'clip_chirp': 'clip_chirp', 'clip_chi_1': 'clip_chi_1', 'clip_chi_2': 'clip_chi_2', 'Prelim_chi': 'Prelim_chi', 'Pred_Ago20': 'Pred_Ago20', 'Pred_Sep20': 'Pred_Sep20', 'Pred_Oct20': 'Pred_Oct20', 'Pred_Nov20': 'Pred_Nov20', 'Pred_Dic20': 'Pred_Dic20', 'Pred_Ene20': 'Pred_Ene20', 'Pred_Feb20': 'Pred_Feb20', 'clip_chi_3': 'clip_chi_3', 'clip_chi_4': 'clip_chi_4', 'clip_chi_5': 'clip_chi_5', 'Prelim_c_1': 'Prelim_c_1', 'Pred_Ago_1': 'Pred_Ago_1', 'Pred_Sep_1': 'Pred_Sep_1', 'Pred_Oct_1': 'Pred_Oct_1', 'Pred_Nov_1': 'Pred_Nov_1', 'Pred_Dic_1': 'Pred_Dic_1', 'Pred_Ene_1': 'Pred_Ene_1', 'Pred_Feb_1': 'Pred_Feb_1', 'Valor ries': 'Valor ries', 'Valor ri_1': 'Valor ri_1', 'Valor ri_2': 'Valor ri_2', 'Valor ri_3': 'Valor ri_3', 'Valor ri_4': 'Valor ri_4', 'Valor ri_5': 'Valor ri_5', 'Valor ri_6': 'Valor ri_6', 'Valor ri_7': 'Valor ri_7', 'Valor ri_8': 'Valor ri_8', 'Valor ri_9': 'Valor ri_9', 'Valor ri10': 'Valor ri10', 'Cat riesgo': 'Cat riesgo', 'Cat ries_1': 'Cat ries_1', 'Cat ries_2': 'Cat ries_2', 'Cat ries_3': 'Cat ries_3', 'Cat ries_4': 'Cat ries_4', 'Cat ries_5': 'Cat ries_5', 'Cat ries_6': 'Cat ries_6', 'Cat ries_7': 'Cat ries_7', 'Cat ries_8': 'Cat ries_8', 'Cat ries_9': 'Cat ries_9', 'Cat ries10': 'Cat ries10', 'Severidad': 'Severidad', 'Severida_1': 'Severida_1', 'Severida_2': 'Severida_2', 'Severida_3': 'Severida_3', 'Severida_4': 'Severida_4', 'Severida_5': 'Severida_5', 'Severida_6': 'Severida_6', 'Severida_7': 'Severida_7', 'Severida_8': 'Severida_8', 'Severida_9': 'Severida_9', 'Severida10': 'Severida10', 'Severida11': 'Severida11', 'Severida12': 'Severida12', 'Condición': 'Condición', 'Riesgo Tra': 'Scoring de Riesgo Transitorios', 'Reinterpre': 'Reinterpre', 'Riesgo-Ame': 'Riesgo-Amenaza Cultivos Transitorios', 'Severida13': 'Severida13', 'Severida14': 'Severida14', 'Condici�_1': 'Condici�_1', 'Riesgo Per': 'Scoring de Riesgo Permanentes', 'Reinterp_1': 'Reinterp_1', 'Riesgo-A_1': 'Riesgo-Amenaza Cultivos Permanentes', 'Area Pixel': 'Area Pixel', 'Ponderador': 'Ponderador', 'Sum valida': 'Sum valida', 'ClavePixMu': 'ClavePixMu', });
lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5.set('fieldAliases', {'fid': 'fid', 'IDPixelAmp': 'IDPixelAmp', 'DetAmpliac': 'DetAmpliac', 'Clave cruc': 'Clave cruc', 'Lon Amplia': 'Lon Amplia', 'Lat Amplia': 'Lat Amplia', 'Clave cr_1': 'Clave cr_1', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'MunicipioC': 'MunicipioC', 'clip_chirp': 'clip_chirp', 'clip_chi_1': 'clip_chi_1', 'clip_chi_2': 'clip_chi_2', 'Prelim_chi': 'Prelim_chi', 'Pred_Ago20': 'Pred_Ago20', 'Pred_Sep20': 'Pred_Sep20', 'Pred_Oct20': 'Pred_Oct20', 'Pred_Nov20': 'Pred_Nov20', 'Pred_Dic20': 'Pred_Dic20', 'Pred_Ene20': 'Pred_Ene20', 'Pred_Feb20': 'Pred_Feb20', 'clip_chi_3': 'clip_chi_3', 'clip_chi_4': 'clip_chi_4', 'clip_chi_5': 'clip_chi_5', 'Prelim_c_1': 'Prelim_c_1', 'Pred_Ago_1': 'Pred_Ago_1', 'Pred_Sep_1': 'Pred_Sep_1', 'Pred_Oct_1': 'Pred_Oct_1', 'Pred_Nov_1': 'Pred_Nov_1', 'Pred_Dic_1': 'Pred_Dic_1', 'Pred_Ene_1': 'Pred_Ene_1', 'Pred_Feb_1': 'Pred_Feb_1', 'Valor ries': 'Valor ries', 'Valor ri_1': 'Valor ri_1', 'Valor ri_2': 'Valor ri_2', 'Valor ri_3': 'Valor ri_3', 'Valor ri_4': 'Valor ri_4', 'Valor ri_5': 'Valor ri_5', 'Valor ri_6': 'Valor ri_6', 'Valor ri_7': 'Valor ri_7', 'Valor ri_8': 'Valor ri_8', 'Valor ri_9': 'Valor ri_9', 'Valor ri10': 'Valor ri10', 'Cat riesgo': 'Cat riesgo', 'Cat ries_1': 'Cat ries_1', 'Cat ries_2': 'Cat ries_2', 'Cat ries_3': 'Cat ries_3', 'Cat ries_4': 'Cat ries_4', 'Cat ries_5': 'Cat ries_5', 'Cat ries_6': 'Cat ries_6', 'Cat ries_7': 'Cat ries_7', 'Cat ries_8': 'Cat ries_8', 'Cat ries_9': 'Cat ries_9', 'Cat ries10': 'Cat ries10', 'Severidad': 'Severidad', 'Severida_1': 'Severida_1', 'Severida_2': 'Severida_2', 'Severida_3': 'Severida_3', 'Severida_4': 'Severida_4', 'Severida_5': 'Severida_5', 'Severida_6': 'Severida_6', 'Severida_7': 'Severida_7', 'Severida_8': 'Severida_8', 'Severida_9': 'Severida_9', 'Severida10': 'Severida10', 'Severida11': 'Severida11', 'Severida12': 'Severida12', 'Condición': 'Condición', 'Riesgo Tra': 'Scoring de Riesgo Transitorios', 'Reinterpre': 'Reinterpre', 'Riesgo-Ame': 'Riesgo-Amenaza Cultivos Transitorios', 'Severida13': 'Severida13', 'Severida14': 'Severida14', 'Condici�_1': 'Condici�_1', 'Riesgo Per': 'Scoring de Riesgo Permanentes', 'Reinterp_1': 'Reinterp_1', 'Riesgo-A_1': 'Riesgo-Amenaza Cultivos Permanentes', 'Area Pixel': 'Area Pixel', 'Ponderador': 'Ponderador', 'Sum valida': 'Sum valida', 'ClavePixMu': 'ClavePixMu', });
lyr_Municipio_6.set('fieldAliases', {'id': 'id', 'MpCodigo': 'MpCodigo', 'MpNombre': 'Municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccio': 'Restriccio', 'Depto': 'Departamento', });
lyr_Departamento_7.set('fieldAliases', {'id': 'id', 'DeCodigo': 'DeCodigo', 'DeNombre': 'Departamento', 'DeArea': 'DeArea', 'DeNorma': 'DeNorma', });
lyr_PrediccinLluviaIDEAMSeptiembre2026_2.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Prediccion': 'TextEdit', 'Climatolog': 'TextEdit', 'Anomalia(m': 'TextEdit', 'Cambio(%)': 'TextEdit', 'Prob_val_d': 'TextEdit', 'Por debajo': 'TextEdit', 'Normal(%)': 'TextEdit', 'Por encima': 'TextEdit', 'Cond_mas_p': 'TextEdit', 'Prob_extre': 'TextEdit', });
lyr_RiesgohumedadsueloVisualSeptiembre2026_3.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'R.Pred_Ago': 'TextEdit', 'R.Pred_Sep': 'TextEdit', 'R.Pred_Oct': 'TextEdit', 'R.Pred_Nov': 'TextEdit', 'R.Pred_Dic': 'TextEdit', 'R.Pred_Ene': 'TextEdit', 'R.Pred_Feb': 'TextEdit', 'R-A.Pred_A': 'TextEdit', 'R-A.Pred_S': 'TextEdit', 'R-A.Pred_O': 'TextEdit', 'R-A.Pred_N': 'TextEdit', 'R-A.Pred_D': 'TextEdit', 'R-A.Pred_E': 'TextEdit', 'R-A.Pred_F': 'TextEdit', });
lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'clip_chirp': 'TextEdit', 'clip_chi_1': 'TextEdit', 'clip_chi_2': 'TextEdit', 'Prelim_chi': 'TextEdit', 'Pred_Ago20': 'TextEdit', 'Pred_Sep20': 'TextEdit', 'Pred_Oct20': 'TextEdit', 'Pred_Nov20': 'TextEdit', 'Pred_Dic20': 'TextEdit', 'Pred_Ene20': 'TextEdit', 'Pred_Feb20': 'TextEdit', 'clip_chi_3': 'TextEdit', 'clip_chi_4': 'TextEdit', 'clip_chi_5': 'TextEdit', 'Prelim_c_1': 'TextEdit', 'Pred_Ago_1': 'TextEdit', 'Pred_Sep_1': 'TextEdit', 'Pred_Oct_1': 'TextEdit', 'Pred_Nov_1': 'TextEdit', 'Pred_Dic_1': 'TextEdit', 'Pred_Ene_1': 'TextEdit', 'Pred_Feb_1': 'TextEdit', 'Valor ries': 'TextEdit', 'Valor ri_1': 'TextEdit', 'Valor ri_2': 'TextEdit', 'Valor ri_3': 'TextEdit', 'Valor ri_4': 'TextEdit', 'Valor ri_5': 'TextEdit', 'Valor ri_6': 'TextEdit', 'Valor ri_7': 'TextEdit', 'Valor ri_8': 'TextEdit', 'Valor ri_9': 'TextEdit', 'Valor ri10': 'TextEdit', 'Cat riesgo': 'TextEdit', 'Cat ries_1': 'TextEdit', 'Cat ries_2': 'TextEdit', 'Cat ries_3': 'TextEdit', 'Cat ries_4': 'TextEdit', 'Cat ries_5': 'TextEdit', 'Cat ries_6': 'TextEdit', 'Cat ries_7': 'TextEdit', 'Cat ries_8': 'TextEdit', 'Cat ries_9': 'TextEdit', 'Cat ries10': 'TextEdit', 'Severidad': 'TextEdit', 'Severida_1': 'TextEdit', 'Severida_2': 'TextEdit', 'Severida_3': 'TextEdit', 'Severida_4': 'TextEdit', 'Severida_5': 'TextEdit', 'Severida_6': 'TextEdit', 'Severida_7': 'TextEdit', 'Severida_8': 'TextEdit', 'Severida_9': 'TextEdit', 'Severida10': 'TextEdit', 'Severida11': 'TextEdit', 'Severida12': 'TextEdit', 'Condición': 'TextEdit', 'Riesgo Tra': 'TextEdit', 'Reinterpre': 'TextEdit', 'Riesgo-Ame': 'TextEdit', 'Severida13': 'TextEdit', 'Severida14': 'TextEdit', 'Condici�_1': 'TextEdit', 'Riesgo Per': 'TextEdit', 'Reinterp_1': 'TextEdit', 'Riesgo-A_1': 'TextEdit', 'Area Pixel': 'TextEdit', 'Ponderador': 'TextEdit', 'Sum valida': 'TextEdit', 'ClavePixMu': 'TextEdit', });
lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5.set('fieldImages', {'fid': 'TextEdit', 'IDPixelAmp': 'TextEdit', 'DetAmpliac': 'TextEdit', 'Clave cruc': 'TextEdit', 'Lon Amplia': 'TextEdit', 'Lat Amplia': 'TextEdit', 'Clave cr_1': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'MunicipioC': 'TextEdit', 'clip_chirp': 'TextEdit', 'clip_chi_1': 'TextEdit', 'clip_chi_2': 'TextEdit', 'Prelim_chi': 'TextEdit', 'Pred_Ago20': 'TextEdit', 'Pred_Sep20': 'TextEdit', 'Pred_Oct20': 'TextEdit', 'Pred_Nov20': 'TextEdit', 'Pred_Dic20': 'TextEdit', 'Pred_Ene20': 'TextEdit', 'Pred_Feb20': 'TextEdit', 'clip_chi_3': 'TextEdit', 'clip_chi_4': 'TextEdit', 'clip_chi_5': 'TextEdit', 'Prelim_c_1': 'TextEdit', 'Pred_Ago_1': 'TextEdit', 'Pred_Sep_1': 'TextEdit', 'Pred_Oct_1': 'TextEdit', 'Pred_Nov_1': 'TextEdit', 'Pred_Dic_1': 'TextEdit', 'Pred_Ene_1': 'TextEdit', 'Pred_Feb_1': 'TextEdit', 'Valor ries': 'TextEdit', 'Valor ri_1': 'TextEdit', 'Valor ri_2': 'TextEdit', 'Valor ri_3': 'TextEdit', 'Valor ri_4': 'TextEdit', 'Valor ri_5': 'TextEdit', 'Valor ri_6': 'TextEdit', 'Valor ri_7': 'TextEdit', 'Valor ri_8': 'TextEdit', 'Valor ri_9': 'TextEdit', 'Valor ri10': 'TextEdit', 'Cat riesgo': 'TextEdit', 'Cat ries_1': 'TextEdit', 'Cat ries_2': 'TextEdit', 'Cat ries_3': 'TextEdit', 'Cat ries_4': 'TextEdit', 'Cat ries_5': 'TextEdit', 'Cat ries_6': 'TextEdit', 'Cat ries_7': 'TextEdit', 'Cat ries_8': 'TextEdit', 'Cat ries_9': 'TextEdit', 'Cat ries10': 'TextEdit', 'Severidad': 'TextEdit', 'Severida_1': 'TextEdit', 'Severida_2': 'TextEdit', 'Severida_3': 'TextEdit', 'Severida_4': 'TextEdit', 'Severida_5': 'TextEdit', 'Severida_6': 'TextEdit', 'Severida_7': 'TextEdit', 'Severida_8': 'TextEdit', 'Severida_9': 'TextEdit', 'Severida10': 'TextEdit', 'Severida11': 'TextEdit', 'Severida12': 'TextEdit', 'Condición': 'TextEdit', 'Riesgo Tra': 'TextEdit', 'Reinterpre': 'TextEdit', 'Riesgo-Ame': 'TextEdit', 'Severida13': 'TextEdit', 'Severida14': 'TextEdit', 'Condici�_1': 'TextEdit', 'Riesgo Per': 'TextEdit', 'Reinterp_1': 'TextEdit', 'Riesgo-A_1': 'TextEdit', 'Area Pixel': 'TextEdit', 'Ponderador': 'TextEdit', 'Sum valida': 'TextEdit', 'ClavePixMu': 'TextEdit', });
lyr_Municipio_6.set('fieldImages', {'id': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'TextEdit', 'MpAltitud': 'Range', 'Restriccio': 'TextEdit', 'Depto': 'TextEdit', });
lyr_Departamento_7.set('fieldImages', {'id': 'TextEdit', 'DeCodigo': 'TextEdit', 'DeNombre': 'TextEdit', 'DeArea': 'TextEdit', 'DeNorma': 'TextEdit', });
lyr_PrediccinLluviaIDEAMSeptiembre2026_2.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'Prediccion': 'inline label - always visible', 'Climatolog': 'hidden field', 'Anomalia(m': 'hidden field', 'Cambio(%)': 'inline label - visible with data', 'Prob_val_d': 'inline label - visible with data', 'Por debajo': 'hidden field', 'Normal(%)': 'hidden field', 'Por encima': 'hidden field', 'Cond_mas_p': 'hidden field', 'Prob_extre': 'hidden field', });
lyr_RiesgohumedadsueloVisualSeptiembre2026_3.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'R.Pred_Ago': 'hidden field', 'R.Pred_Sep': 'hidden field', 'R.Pred_Oct': 'hidden field', 'R.Pred_Nov': 'hidden field', 'R.Pred_Dic': 'hidden field', 'R.Pred_Ene': 'hidden field', 'R.Pred_Feb': 'hidden field', 'R-A.Pred_A': 'hidden field', 'R-A.Pred_S': 'header label - always visible', 'R-A.Pred_O': 'inline label - visible with data', 'R-A.Pred_N': 'inline label - visible with data', 'R-A.Pred_D': 'hidden field', 'R-A.Pred_E': 'hidden field', 'R-A.Pred_F': 'hidden field', });
lyr_RiesgoCultivosTransitoriosPeriodoAgoaDic2026_4.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'clip_chirp': 'hidden field', 'clip_chi_1': 'hidden field', 'clip_chi_2': 'hidden field', 'Prelim_chi': 'hidden field', 'Pred_Ago20': 'hidden field', 'Pred_Sep20': 'hidden field', 'Pred_Oct20': 'hidden field', 'Pred_Nov20': 'hidden field', 'Pred_Dic20': 'hidden field', 'Pred_Ene20': 'hidden field', 'Pred_Feb20': 'hidden field', 'clip_chi_3': 'hidden field', 'clip_chi_4': 'hidden field', 'clip_chi_5': 'hidden field', 'Prelim_c_1': 'hidden field', 'Pred_Ago_1': 'hidden field', 'Pred_Sep_1': 'hidden field', 'Pred_Oct_1': 'hidden field', 'Pred_Nov_1': 'hidden field', 'Pred_Dic_1': 'hidden field', 'Pred_Ene_1': 'hidden field', 'Pred_Feb_1': 'hidden field', 'Valor ries': 'hidden field', 'Valor ri_1': 'hidden field', 'Valor ri_2': 'hidden field', 'Valor ri_3': 'hidden field', 'Valor ri_4': 'hidden field', 'Valor ri_5': 'hidden field', 'Valor ri_6': 'hidden field', 'Valor ri_7': 'hidden field', 'Valor ri_8': 'hidden field', 'Valor ri_9': 'hidden field', 'Valor ri10': 'hidden field', 'Cat riesgo': 'hidden field', 'Cat ries_1': 'hidden field', 'Cat ries_2': 'hidden field', 'Cat ries_3': 'hidden field', 'Cat ries_4': 'hidden field', 'Cat ries_5': 'hidden field', 'Cat ries_6': 'hidden field', 'Cat ries_7': 'hidden field', 'Cat ries_8': 'hidden field', 'Cat ries_9': 'hidden field', 'Cat ries10': 'hidden field', 'Severidad': 'hidden field', 'Severida_1': 'hidden field', 'Severida_2': 'hidden field', 'Severida_3': 'hidden field', 'Severida_4': 'hidden field', 'Severida_5': 'hidden field', 'Severida_6': 'hidden field', 'Severida_7': 'hidden field', 'Severida_8': 'hidden field', 'Severida_9': 'hidden field', 'Severida10': 'hidden field', 'Severida11': 'hidden field', 'Severida12': 'hidden field', 'Condición': 'hidden field', 'Riesgo Tra': 'header label - always visible', 'Reinterpre': 'hidden field', 'Riesgo-Ame': 'no label', 'Severida13': 'hidden field', 'Severida14': 'hidden field', 'Condici�_1': 'hidden field', 'Riesgo Per': 'hidden field', 'Reinterp_1': 'hidden field', 'Riesgo-A_1': 'hidden field', 'Area Pixel': 'hidden field', 'Ponderador': 'hidden field', 'Sum valida': 'hidden field', 'ClavePixMu': 'hidden field', });
lyr_RiesgoCultivosPermanentesPeriodoAbr2026aFeb2027_5.set('fieldLabels', {'fid': 'hidden field', 'IDPixelAmp': 'hidden field', 'DetAmpliac': 'hidden field', 'Clave cruc': 'hidden field', 'Lon Amplia': 'hidden field', 'Lat Amplia': 'hidden field', 'Clave cr_1': 'hidden field', 'Longitud': 'hidden field', 'Latitud': 'hidden field', 'MunicipioC': 'hidden field', 'clip_chirp': 'hidden field', 'clip_chi_1': 'hidden field', 'clip_chi_2': 'hidden field', 'Prelim_chi': 'hidden field', 'Pred_Ago20': 'hidden field', 'Pred_Sep20': 'hidden field', 'Pred_Oct20': 'hidden field', 'Pred_Nov20': 'hidden field', 'Pred_Dic20': 'hidden field', 'Pred_Ene20': 'hidden field', 'Pred_Feb20': 'hidden field', 'clip_chi_3': 'hidden field', 'clip_chi_4': 'hidden field', 'clip_chi_5': 'hidden field', 'Prelim_c_1': 'hidden field', 'Pred_Ago_1': 'hidden field', 'Pred_Sep_1': 'hidden field', 'Pred_Oct_1': 'hidden field', 'Pred_Nov_1': 'hidden field', 'Pred_Dic_1': 'hidden field', 'Pred_Ene_1': 'hidden field', 'Pred_Feb_1': 'hidden field', 'Valor ries': 'hidden field', 'Valor ri_1': 'hidden field', 'Valor ri_2': 'hidden field', 'Valor ri_3': 'hidden field', 'Valor ri_4': 'hidden field', 'Valor ri_5': 'hidden field', 'Valor ri_6': 'hidden field', 'Valor ri_7': 'hidden field', 'Valor ri_8': 'hidden field', 'Valor ri_9': 'hidden field', 'Valor ri10': 'hidden field', 'Cat riesgo': 'hidden field', 'Cat ries_1': 'hidden field', 'Cat ries_2': 'hidden field', 'Cat ries_3': 'hidden field', 'Cat ries_4': 'hidden field', 'Cat ries_5': 'hidden field', 'Cat ries_6': 'hidden field', 'Cat ries_7': 'hidden field', 'Cat ries_8': 'hidden field', 'Cat ries_9': 'hidden field', 'Cat ries10': 'hidden field', 'Severidad': 'hidden field', 'Severida_1': 'hidden field', 'Severida_2': 'hidden field', 'Severida_3': 'hidden field', 'Severida_4': 'hidden field', 'Severida_5': 'hidden field', 'Severida_6': 'hidden field', 'Severida_7': 'hidden field', 'Severida_8': 'hidden field', 'Severida_9': 'hidden field', 'Severida10': 'hidden field', 'Severida11': 'hidden field', 'Severida12': 'hidden field', 'Condición': 'hidden field', 'Riesgo Tra': 'hidden field', 'Reinterpre': 'hidden field', 'Riesgo-Ame': 'hidden field', 'Severida13': 'hidden field', 'Severida14': 'hidden field', 'Condici�_1': 'hidden field', 'Riesgo Per': 'header label - always visible', 'Reinterp_1': 'hidden field', 'Riesgo-A_1': 'no label', 'Area Pixel': 'hidden field', 'Ponderador': 'hidden field', 'Sum valida': 'hidden field', 'ClavePixMu': 'hidden field', });
lyr_Municipio_6.set('fieldLabels', {'id': 'hidden field', 'MpCodigo': 'hidden field', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccio': 'hidden field', 'Depto': 'inline label - visible with data', });
lyr_Departamento_7.set('fieldLabels', {'id': 'hidden field', 'DeCodigo': 'hidden field', 'DeNombre': 'hidden field', 'DeArea': 'hidden field', 'DeNorma': 'hidden field', });
lyr_Departamento_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});