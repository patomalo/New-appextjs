/**
 * Created by Alvaro M Patty Cruz on 29/07/2014.
 */
Ext.define('Myapp.store.Items',{
    extend: 'Ext.data.Store',
    model: 'Myapp.model.Item',

    data: [
        {item: '<img src="resources/items/3.jpg" width="30" height="30"/>',nombre: 'Black King Bar', precio: '3.900', requiere: 'Mithril Hammer - Ogre Axe - Recipe', informacion: ' Avatar te vuelve inmune contra la magia.'},
        {item: '<img src="resources/items/7.gif" width="30" height="30"/>',nombre: 'Linken’s Sphere', precio: '5.175', requiere: 'Perseverance - Ultimate Orb - Recipe', informacion: 'La protección anti magia se activa automáticamente.'},
        {item: '<img src="resources/items/8.jpg" width="30" height="30"/>',nombre: 'Vanguard', precio: '2.225', requiere: 'Ring of Health - Vitality Booster - Stout Shield', informacion: 'Damage Block tiene un chance de 70% de bloquear 40 de daño si lo usa un héroe de cuerpo a cuerpo (Melee), y solo bloqueara 20 de daño si lo usa un héroe de Rango.'},
        {item: '<img src="resources/items/13.jpg" width="30" height="30"/>',nombre: 'Orchid Malevolence', precio: '5.025', requiere: 'Oblivion Staff x2 - Recipe', informacion: ' Orchid Malevolence puede quemar las capacidades de lanzamiento de conjuros de un enemigo por un tiempo limitado.'},
        {item: '<img src="resources/items/22.jpg" width="30" height="30"/>',nombre: 'Vladmir’s Offering', precio: '2.050', requiere: 'Mask of Death - Ring of Basilius - Ring of Regeneration - Recipe', informacion: ' Vampiric Aura ofrece 16% de Lifesteal en un area de 1100 solo a unidades Melee.'},
        {item: '<img src="resources/items/32.jpg" width="30" height="30"/>',nombre: 'Divine Rapier', precio: '6.200', requiere: 'Sacred Relic - Demon Edge', informacion: ' + 250 de daño'},
        {item: '<img src="resources/items/42.gif" width="30" height="30"/>',nombre: 'Lothars Edge', precio: '3.300', requiere: 'Claymore - QuarterStaff - Recipe', informacion: ' Invisible (activo)'},
        {item: '<img src="resources/items/46.jpg" width="30" height="30"/>',nombre: 'Mjollnir', precio: '5.400', requiere: 'Hyperstone - Maelstrom - Recipe', informacion: ' Carga estática (activo) - Cadena de relámpagos (pasivo)'}
    ]
});