/**
 * Created by Alvaro M Patty Cruz on 22/07/2014.
 */
Ext.define('Myapp.store.Users',{
    extend: 'Ext.data.Store',
    model: 'Myapp.model.User',

    data: [
        {heroe: '<img src="resources/heros/9.gif" width="30" height="30"/>',nombre: 'Rogue Knight', clase: 'Strength', equipo: 'Sentinel', ataque: '54 - 56'},
        {heroe: '<img src="resources/heros/11.gif" width="30" height="30"/>',nombre: 'Earthshaker', clase: 'Strength', equipo: 'Sentinel', ataque: '46 - 56'},
        {heroe: '<img src="resources/heros/17.gif" width="30" height="30"/>',nombre: 'Treant Protector', clase: 'Strength', equipo: 'Sentinel', ataque: '59 - 67'},
        {heroe: '<img src="resources/heros/26.gif" width="30" height="30"/>',nombre: 'Night Stalker', clase: 'Strength', equipo: 'Scourge', ataque: '57 - 61'},
        {heroe: '<img src="resources/heros/27.gif" width="30" height="30"/>',nombre: 'Skeleton King', clase: 'Strength', equipo: 'Scourge', ataque: '54 - 56'},
        {heroe: '<img src="resources/heros/36.gif" width="30" height="30"/>',nombre: 'Lifestealer', clase: 'Strength', equipo: 'Scourge', ataque: '57 - 67'},
        {heroe: '<img src="resources/heros/45.gif" width="30" height="30"/>',nombre: 'Dwarven Sniper', clase: 'Agility', equipo: 'Sentinel', ataque: '36 - 42'},
        {heroe: '<img src="resources/heros/120.jpg" width="30" height="30"/>',nombre: 'Ancient Apparition', clase: 'Intelligence', equipo: 'Scourge', ataque: '27 - 35'},
        {heroe: '<img src="resources/heros/121.jpg" width="30" height="30"/>',nombre: 'Bane Elemental', clase: 'Intelligence', equipo: 'Scourge', ataque: '20 - 33'},
        {heroe: '<img src="resources/heros/122.jpeg" width="30" height="30"/>',nombre: 'Batrider', clase: 'Intelligence', equipo: 'Scourge', ataque: '21 - 36'},
        {heroe: '<img src="resources/heros/123.gif" width="30" height="30"/>',nombre: 'Bone Fletcher', clase: 'Intelligence', equipo: 'Scourge', ataque: '37 - 43'}

    ]
});