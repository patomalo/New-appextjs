Ext.define("Myapp.view.user.List1", {
    extend: 'Ext.Container',
    xtype: 'userList1',
    title: 'All Users',
    width: 1100,

    layout: {
        type: 'table',
        columns: 5,
        tdAttrs: { style: 'padding: 10px;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 200,
        bodyPadding: 10,
        frame: true
    },

    initComponent: function () {
        this.items = [
            {
                title: 'DOTA',
                html: '<hl>Es un escenario personalizado para el videojuego Warcraft III: The Frozen Throne, creado con ' +
                    'el Editor del Mundo Warcraft III. El mapa se juega en dos equipos, y el objetivo del juego es' +
                    ' destruir el Ancient (en español: ancestro) del oponente.</hl>'
            },{
                html: '<img src="resources/dota1.jpg" width="170" height="170"/>'
            },{
                title: 'Pequeña Historia',
                collapsed: true,
                collapsible: true,
                width: 420,
                html: '<hl>El mapa original de DotA fue creado por un jugador y creador de mapas conocido como «Eul» ' +
                    'mediante el editor de mapas de Warcraft III: Reign of Chaos. Luego del lanzamiento de la expansión ' +
                    'The Frozen Throne, que añadió nuevas características al editor de mapas, Eul no actualizó el ' +
                    'escenario, por lo que fueron otros autores quienes se encargaron de realizar dicha actualización, ' +
                    'y actualizar posteriormente el juego.</hl><br><hl> A partir de la versión 6.x, otro autor con el ' +
                    'nombre de «IceFrog» se puso a cargo del desarrollo del escenario, corrigiendo errores y añadiendo ' +
                    'o actualizando características del juego. Cada versión nueva se acompaña de un registro de cambios.</hl>',
                colspan: 2
            },{
                html: '<hl>Los jugadores controlan poderosas unidades conocidas como "héroes", que son ayudadas por ' +
                    'unidades controladas por inteligencia artificial llamadas "creeps".</hl><br><img src="resources/dota2.jpg" width="175" height="100"/>'
            },{
                html: '<img src="resources/dota3.jpg" width="175" height="175"/>'
            },{
                title: 'Jugabilidad',
                collapsed: true,
                collapsible: true,
                width: 640,
                html: '<hl>En una partida de Defense of the Ancients siempre hay dos equipos de jugadores: los Centinelas ' +
                    '(The Sentinel) y el Azote (The Scourge).</hl><br><hl>Cada base es defendida por estructuras llamadas ' +
                    '"torres", y por oleadas de unidades que recorren tres caminos que unen las dos bases: una central, ' +
                    'y dos laterales. En el fondo de cada base se encuentra el «Ancient» de cada equipo, un edificio que ' +
                    'debe ser destruido para ganar la partida.</hl><br><hl>Cada jugador controla a un héroe, que es una ' +
                    'poderosa unidad con habilidades únicas y que se escoge según su característica principal ' +
                    '(Inteligencia, Agilidad, Fuerza), cada uno con distintas habilidades y ventajas tácticas sobre los ' +
                    'demás.</hl><br><hl>El juego requiere mucho trabajo en equipo; es difícil que un solo jugador lleve ' +
                    'a su equipo a la victoria por sí solo. El juego permite partidas con equipos de hasta 5 personas.</hl>',
                colspan: 3
            },{
                html: '<img src="resources/Baratheon.jpg" width="170" height="170"/>'
            }
        ];

        this.callParent();
    }
});