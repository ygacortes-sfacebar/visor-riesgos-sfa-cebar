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
var format_RiesgoHumedadAgosto_2 = new ol.format.GeoJSON();
var features_RiesgoHumedadAgosto_2 = format_RiesgoHumedadAgosto_2.readFeatures(json_RiesgoHumedadAgosto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoHumedadAgosto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoHumedadAgosto_2.addFeatures(features_RiesgoHumedadAgosto_2);
var lyr_RiesgoHumedadAgosto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoHumedadAgosto_2, 
                style: style_RiesgoHumedadAgosto_2,
                popuplayertitle: 'Riesgo Humedad Agosto',
                interactive: true,
    title: 'Riesgo Humedad Agosto<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_0.png" /> Riesgo severo. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_1.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_2.png" /> Riesgo moderado. Aumento de humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_3.png" /> Riesto tolerable. Adecuada humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_4.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_5.png" /> Riesgo moderado. Reducción de humedad del suelo.<br />\
    <img src="styles/legend/RiesgoHumedadAgosto_2_6.png" /> Riesgo severo. Reducción de humedad del suelo.<br />' });
var format_Riesgo_TransitoriosPeriodoJulNov2026_3 = new ol.format.GeoJSON();
var features_Riesgo_TransitoriosPeriodoJulNov2026_3 = format_Riesgo_TransitoriosPeriodoJulNov2026_3.readFeatures(json_Riesgo_TransitoriosPeriodoJulNov2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riesgo_TransitoriosPeriodoJulNov2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riesgo_TransitoriosPeriodoJulNov2026_3.addFeatures(features_Riesgo_TransitoriosPeriodoJulNov2026_3);
var lyr_Riesgo_TransitoriosPeriodoJulNov2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riesgo_TransitoriosPeriodoJulNov2026_3, 
                style: style_Riesgo_TransitoriosPeriodoJulNov2026_3,
                popuplayertitle: 'Riesgo_Transitorios Periodo Jul-Nov2026',
                interactive: true,
    title: 'Riesgo_Transitorios Periodo Jul-Nov2026<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/Riesgo_TransitoriosPeriodoJulNov2026_3_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });
var format_Riesgo_PermanentesPeriodoMar2026Ene2027_4 = new ol.format.GeoJSON();
var features_Riesgo_PermanentesPeriodoMar2026Ene2027_4 = format_Riesgo_PermanentesPeriodoMar2026Ene2027_4.readFeatures(json_Riesgo_PermanentesPeriodoMar2026Ene2027_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riesgo_PermanentesPeriodoMar2026Ene2027_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riesgo_PermanentesPeriodoMar2026Ene2027_4.addFeatures(features_Riesgo_PermanentesPeriodoMar2026Ene2027_4);
var lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riesgo_PermanentesPeriodoMar2026Ene2027_4, 
                style: style_Riesgo_PermanentesPeriodoMar2026Ene2027_4,
                popuplayertitle: 'Riesgo_Permanentes Periodo Mar2026-Ene2027',
                interactive: true,
    title: 'Riesgo_Permanentes Periodo Mar2026-Ene2027<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_0.png" /> Riesgo severo. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_1.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_2.png" /> Riesgo moderado. Predomina el Exceso de lluvia.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_3.png" /> Riesgo tolerable.  Predomina lluvia en rango adecuado.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_4.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_5.png" /> Riesgo moderado. Predomina el Déficit de lluvia.<br />\
    <img src="styles/legend/Riesgo_PermanentesPeriodoMar2026Ene2027_4_6.png" /> Riesgo severo. Predomina el Déficit de lluvia.<br />' });
var format_Municipio_5 = new ol.format.GeoJSON();
var features_Municipio_5 = format_Municipio_5.readFeatures(json_Municipio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_5.addFeatures(features_Municipio_5);
var lyr_Municipio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipio_5,
maxResolution:1120.1786460904784,
 
                style: style_Municipio_5,
                popuplayertitle: 'Municipio',
                interactive: true,
                title: '<img src="styles/legend/Municipio_5.png" /> Municipio'
            });
var format_Departamento_6 = new ol.format.GeoJSON();
var features_Departamento_6 = format_Departamento_6.readFeatures(json_Departamento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_6.addFeatures(features_Departamento_6);
var lyr_Departamento_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_6,
maxResolution:4200.6699228392945,
 
                style: style_Departamento_6,
                popuplayertitle: 'Departamento',
                interactive: false,
                title: '<img src="styles/legend/Departamento_6.png" /> Departamento'
            });
var group_RiesgoCultivos = new ol.layer.Group({
                                layers: [lyr_Riesgo_TransitoriosPeriodoJulNov2026_3,lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4,],
                                fold: 'open',
                                title: 'Riesgo Cultivos'});
var group_Riesgohumedadsuelo = new ol.layer.Group({
                                layers: [lyr_RiesgoHumedadAgosto_2,],
                                fold: 'open',
                                title: 'Riesgo humedad suelo'});

lyr_GoogleSatellite_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_RiesgoHumedadAgosto_2.setVisible(false);lyr_Riesgo_TransitoriosPeriodoJulNov2026_3.setVisible(false);lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4.setVisible(true);lyr_Municipio_5.setVisible(true);lyr_Departamento_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,group_Riesgohumedadsuelo,group_RiesgoCultivos,lyr_Municipio_5,lyr_Departamento_6];
lyr_RiesgoHumedadAgosto_2.set('fieldAliases', {'fid': 'fid', 'R-A.Pred_A': 'R-A.Pred_A', });
lyr_Riesgo_TransitoriosPeriodoJulNov2026_3.set('fieldAliases', {'fid': 'fid', 'Riesgo-Ame': 'Riesgo-Ame', });
lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4.set('fieldAliases', {'fid': 'fid', 'Riesgo-A_1': 'Riesgo-A_1', });
lyr_Municipio_5.set('fieldAliases', {'id': 'id', 'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccio': 'Restriccio', 'Depto': 'Depto', });
lyr_Departamento_6.set('fieldAliases', {'id': 'id', 'DeCodigo': 'DeCodigo', 'DeNombre': 'DeNombre', 'DeArea': 'DeArea', 'DeNorma': 'DeNorma', });
lyr_RiesgoHumedadAgosto_2.set('fieldImages', {'fid': 'TextEdit', 'R-A.Pred_A': 'TextEdit', });
lyr_Riesgo_TransitoriosPeriodoJulNov2026_3.set('fieldImages', {'fid': 'TextEdit', 'Riesgo-Ame': 'TextEdit', });
lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4.set('fieldImages', {'fid': 'TextEdit', 'Riesgo-A_1': 'TextEdit', });
lyr_Municipio_5.set('fieldImages', {'id': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'TextEdit', 'MpAltitud': 'Range', 'Restriccio': 'TextEdit', 'Depto': 'TextEdit', });
lyr_Departamento_6.set('fieldImages', {'id': 'TextEdit', 'DeCodigo': 'TextEdit', 'DeNombre': 'TextEdit', 'DeArea': 'TextEdit', 'DeNorma': 'TextEdit', });
lyr_RiesgoHumedadAgosto_2.set('fieldLabels', {'fid': 'hidden field', 'R-A.Pred_A': 'no label', });
lyr_Riesgo_TransitoriosPeriodoJulNov2026_3.set('fieldLabels', {'fid': 'hidden field', 'Riesgo-Ame': 'no label', });
lyr_Riesgo_PermanentesPeriodoMar2026Ene2027_4.set('fieldLabels', {'fid': 'hidden field', 'Riesgo-A_1': 'no label', });
lyr_Municipio_5.set('fieldLabels', {'id': 'hidden field', 'MpCodigo': 'hidden field', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccio': 'hidden field', 'Depto': 'inline label - visible with data', });
lyr_Departamento_6.set('fieldLabels', {'id': 'hidden field', 'DeCodigo': 'hidden field', 'DeNombre': 'hidden field', 'DeArea': 'hidden field', 'DeNorma': 'hidden field', });
lyr_Departamento_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});