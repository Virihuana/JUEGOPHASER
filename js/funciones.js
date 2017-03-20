function crearPuntos(game){
    coins = game.add.group();
    coins.enableBody = true;   
    bags = game.add.group();
    bags.enableBody = true;  
      for (var i = 1; i < 9; i++){          
        var coin = coins.create(i*20, 50, 'coin');
        coin.body.gravity.y = 300;
        coin.animations.add('run');
        coin.animations.play('run',4,true);
        coin.body.bounce.y = 0.5 + Math.random() * 0.2;
    }        
    for (var i = 1; i < 4; i++){          
        var bag = bags.create(i*40, 200, 'bag');
        bag.body.gravity.y = 250;
       /* bag.animations.add('run');
        bag.animations.play('run',4,true);*/
        bag.body.bounce.y = 0.5 + Math.random() * 0.2;
    }   
}//FIN CREAR COINS

function crearArboles(game){
    arboles = game.add.group();
    arboles.enableBody = true;
    arbol = arboles.create(40, 10, 'arboles');
    arbol2 = arboles.create(58, 10, 'arboles');
    arbol3 = arboles.create(78, 10, 'arboles');
    arbol4 = arboles.create(88, 10, 'arboles');
    arbol.animations.add('run');
    arbol.animations.play('run',4,true);
    arbol2.animations.add('run');
    arbol2.animations.play('run',4,true);
    arbol3.animations.add('run');
    arbol3.animations.play('run',4,true);
    arbol4.animations.add('run');
    arbol4.animations.play('run',4,true);
}//FIN CREAR ARBOLES

function moverDer(player) {    
    player.body.velocity.x = VELPOSX;
    player.play('right');    
} //FIN MOVERDER
function moverIzq(player) {    
    player.body.velocity.x = -VELNEGX;
    player.play('left');
} //FIN MOVER IZQ
function moverUp(player) {
    player.body.velocity.y = -VELNEGY;
    player.play('up');
} //FIN MOVER UP
function moverDown(player) {
    player.body.velocity.y = VELPOSY;
    player.play('down');
}
function chocoMoneda(player,coin)  {  
    //Se elimina el elemento con el que colisiono el jugador
    coin.kill();
    score += 10;
    scoreText.text = ''+score;
}
function chocoBagMoney(player,bag)  {  
    //Se elimina el elemento con el que colisiono el jugador
    bag.kill();
    score += 15;
    scoreText.text = ''+score;
}

function chocoEnemy(player) {  
    //Se elimina el elemento con el que colisiono el jugador
    chocoBandera++;
    player.kill();
    if(score != 0)
        score -= 10;
    scoreText.text = ''+score;
}
