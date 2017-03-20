    var BLOQUE=10;
    var PISO=0;
    var PISOS=701;
    var ACERA=2;
    var ACERA2=113;
    var PASTO=115;
    var CATEDRAL=501;
    var GROUND2=3;
    var TAMANIO=20;
    var TAMANIO_W=21;
    var TAMANIO_H=21;
    var VELPOSX=50;
    var VELPOSY=50;
    var VELNEGX=50;
    var VELNEGY=50;

    var calle_Ve=101;
    var calle_Ho=102;
    var calle_VDer=103;
    var calle_VDerI=104;
    var calle_VIzq=105;
    var calle_VIzqI=106;
    var calle_T=107;
    var calle_TI=108;
    var calle_Tder=109;
    var calle_Tizq=110;
    var calle_Cruz=111;

    var map;
    var layer;
    var layerAcera;
    var cursors;

    var banderaChoqueEnemy1=false;
    var banderaChoqueEnemy2=false;
    var banderaChoqueEnemy3=false;
    var chocoBandera=0;
    var num=0;
    var num2=0;
    var num3=0;

    var arboles;
    var arbol;
    var arbol1;
    var arbol2;
    var arbol3;
    var arbol4;
    var playButton;

    var coins;   
    var bags;
    var score=0;
    var scoreText;
    var rulesText;

    var player;
    var enemy1=1;
    var enemy2=2;
    var enemy3=3;

    var choqueDer=null;
    var choqueIzq=null;
    var choqueArr=null;
    var choqueAba=null;
    var banderitaDer=false;
    var banderitaIzq=false;

function guanajuato(game){
    console.log("%c JUEGO", "color:white; background:red");
    this.preload=function(){
        this.game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT;
        this.game.load.image('ground_1x1', 'imagenes/guanajuato/ground_1x1.png');  
        this.game.load.image('pisos', 'imagenes/guanajuato/pisos.svg');  
        this.game.load.image('ground2', 'imagenes/guanajuato/ground2.png');
        this.game.load.image('catedral','imagenes/guanajuato/catedral.svg');
        this.game.load.image('gameover','imagenes/guanajuato/game-over.png');     
        this.game.load.image('winner','imagenes/guanajuato/winner.png');        
        this.game.load.image('acera','imagenes/guanajuato/acera.svg');
        this.game.load.image('acera2','imagenes/guanajuato/acera2.svg');
        this.game.load.image('pasto','imagenes/guanajuato/pasto.svg');

        this.game.load.image('calle_Ve','imagenes/guanajuato/vertical.svg');
        this.game.load.image('calle_Ho','imagenes/guanajuato/horizontal.svg');
        this.game.load.image('calle_VDer','imagenes/guanajuato/vueltader.svg');
        this.game.load.image('calle_VDerI','imagenes/guanajuato/vueltader2.svg');
        this.game.load.image('calle_VIzq','imagenes/guanajuato/vueltaizq.svg');
        this.game.load.image('calle_VIzqI','imagenes/guanajuato/vueltaizq2.svg');
        this.game.load.image('calle_T','imagenes/guanajuato/vueltaT.svg');
        this.game.load.image('calle_TI','imagenes/guanajuato/vueltaT2.svg');
        this.game.load.image('calle_Tder','imagenes/guanajuato/vueltaTder.svg');
        this.game.load.image('calle_Tizq','imagenes/guanajuato/vueltaTizq.svg');
        this.game.load.image('calle_Cruz','imagenes/guanajuato/cruz.svg');
        this.game.load.image('bag', 'imagenes/guanajuato/bagMoney2.png');
        this.game.load.image('rules','imagenes/guanajuato/rules.gif');
        this.game.load.image('scoreText','imagenes/guanajuato/score.gif');

        this.game.load.spritesheet('coin', 'imagenes/guanajuato/coin.png', 18, 18);
        this.game.load.spritesheet('arboles', 'imagenes/guanajuato/arboles.png', 20, 19);
        this.game.load.spritesheet('player', 'imagenes/guanajuato/zavala.svg', 16, 16);
        this.game.load.spritesheet('enemy1', 'imagenes/guanajuato/peje.svg', 16, 16);
        this.game.load.spritesheet('enemy2', 'imagenes/guanajuato/osorio.svg', 16, 16);
        this.game.load.spritesheet('enemy3', 'imagenes/guanajuato/mancera.svg', 16, 16);  
        
    }
    this.create=function(){
        this.game.stage.backgroundColor = '#2d2d2d';
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        map = this.game.add.tilemap();

        map.addTilesetImage('ground_1x1');
        map.addTilesetImage('idpisos','pisos',16,16,0,0,701);
        map.addTilesetImage('idAcera','acera',16,16,0,0,2)
        map.addTilesetImage('idAcera2','acera2',20,20,0,0,113)
        map.addTilesetImage('idPasto','pasto',16,16,0,0,115)
        map.addTilesetImage('idcatedral','catedral',16,16,0,0,501);           
        map.addTilesetImage('idground2','ground2',16,16,0,0,3);  

        map.addTilesetImage('id_Ve','calle_Ve',16,16,0,0,101);  
        map.addTilesetImage('id_Ho','calle_Ho',16,16,0,0,102); 
        map.addTilesetImage('id_VDer','calle_VDer',16,16,0,0,103); 
        map.addTilesetImage('id_VDerI','calle_VDerI',16,16,0,0,104); 
        map.addTilesetImage('id_VIzq','calle_VIzq',16,16,0,0,105); 
        map.addTilesetImage('id_VIzqI','calle_VIzqI',16,16,0,0,106); 
        map.addTilesetImage('id_T','calle_T',16,16,0,0,107); 
        map.addTilesetImage('id_TI','calle_TI',16,16,0,0,108); 
        map.addTilesetImage('id_Tder','calle_Tder',16,16,0,0,109);
        map.addTilesetImage('id_Tizq','calle_Tizq',16,16,0,0,110);
        map.addTilesetImage('id_Cruz','calle_Cruz',16,16,0,0,111);

        //mando a hacer el laberinto random
        var m = display(maze(10,7));
        //columnas del laberinto
        var anchoLaber = m[1].length-2;
        //Renglones del laberinto
        var largoLaber = m.length;   

        layer = map.create('capa',anchoLaber,largoLaber,16,16/*,this.game*/);
        layerAcera = map.create('capaAcera',anchoLaber,largoLaber,16,16/*,this.game*/);
        layer.alpha=1;
        layerAcera.alpha=1;
 

        //dibujo el laberinto
       for(i=0; i<largoLaber; i++){//33//8
            for(j=0; j<anchoLaber; j++){    //16
                if(m[i][j]==2)
                    map.putTile(ACERA,j,i,layerAcera);
                if(m[i][j]==1)
                    map.putTile(PASTO,j,i,layer);                
            }
            
        } 


        map.putTile(CATEDRAL,anchoLaber-2,largoLaber-2,layer);
        map.putTile(502,anchoLaber-1,largoLaber-2,layer);
        map.putTile(503,anchoLaber-2,largoLaber-1,layer);
        map.putTile(504,anchoLaber-1,largoLaber-1,layer);
        map.putTile(GROUND2,1,0,layer);
        
        layer.resizeWorld();

        map.setCollisionBetween(2, 10);    

        //zavala
        player = this.game.add.sprite(20, 50, 'player', 1);
        player.animations.add('left', [2], 10, true);
        player.animations.add('right', [1], 10, true);
        player.animations.add('up', [3], 10, true);
        player.animations.add('down', [0], 10, true);
        //enemy1(PEJE)
        enemy1 = this.game.add.sprite(50, 16, 'enemy1', 1);//los primeros numeros indican donde posicionar el mono en el mapa
        enemy1.animations.add('right', [0], 10, true);
        enemy1.animations.add('down', [2], 10, true);
        enemy1.animations.add('up', [3], 10, true);
        enemy1.animations.add('left', [1], 10, true);
        //enemy2(OSORIO)
        enemy2 = this.game.add.sprite(100, 250, 'enemy2', 2);
        enemy2.animations.add('right', [1], 10, true);
        enemy2.animations.add('down', [2], 10, true);
        enemy2.animations.add('up', [3], 10, true);
        enemy2.animations.add('left', [0], 10, true);
        //enemy3(MANCERA)
        enemy3 = this.game.add.sprite(95, 80, 'enemy3', 3);
        enemy3.animations.add('left', [3,4], 10, true);
        enemy3.animations.add('right', [1,2], 10, true);
        enemy3.animations.add('up', [5], 10, true);
        enemy3.animations.add('down', [0], 10, true);


        this.game.physics.p2.convertTilemap(map, layer);
        this.game.physics.p2.setBoundsToWorld(true, true, true, true, false);

        this.game.physics.arcade.enable(player);
        this.game.physics.arcade.enable(enemy1);
        this.game.physics.arcade.enable(enemy2);
        this.game.physics.arcade.enable(enemy3);

        player.body.setSize(10, 14, 2, 1);
        enemy1.body.setSize(10, 14, 2, 1);

        scoreText = this.game.add.text(215, 0, '0', { fontSize: '15px', fill: '#000' });

        rules = this.game.add.button(2,0,"rules",null,null);                                    
        rules.scale.setTo(0.4,0.4);  
        scoreTextImg = this.game.add.button(175,2,"scoreText",null,null);                                    
        scoreTextImg.scale.setTo(0.4,0.4);  

        this.game.camera.follow(player);
                
        cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.addPointer();
        crearPuntos(this.game);        

    }//FIN CREATE

    //SON PARA GENERAR UN NUEVO NUMERO Y SE MUEVAN A OTRO LADO LOS ENEMIGOS
    this.choco=function() {    
        banderaChoqueEnemy1=true;
        var numPosibilidades = 4 - 1; 
        var aleat = Math.random() * numPosibilidades;
        aleat = Math.round(aleat);
        num = parseInt(1) + aleat;  
        console.log("choco");
    }
    this.choco2=function() {  
        banderaChoqueEnemy2=true;
        var numPosibilidades = 4 - 1; 
        var aleat = Math.random() * numPosibilidades;
        aleat = Math.round(aleat);
        num2 = parseInt(1) + aleat;
    }
    this.choco3=function() {  
        banderaChoqueEnemy3=true;
        var numPosibilidades = 4 - 1; 
        var aleat = Math.random() * numPosibilidades;
        aleat = Math.round(aleat);
        num3 = parseInt(1) + aleat;
    }


    //********************************************************* FIN FUNCIONES
    this.update=function(){

        this.game.physics.arcade.collide(player, layerAcera);
        this.game.physics.arcade.collide(coins, layerAcera);     
        this.game.physics.arcade.collide(bags, layerAcera);   
        this.game.physics.arcade.collide(enemy1, layerAcera, this.choco, null);                
        this.game.physics.arcade.collide(enemy2, layerAcera, this.choco2, null);       
        this.game.physics.arcade.collide(enemy3, layerAcera, this.choco3, null);   

        this.game.physics.arcade.overlap(player, coins, chocoMoneda, null, this);
        this.game.physics.arcade.overlap(player, bags, chocoBagMoney, null, this);        
        this.game.physics.arcade.overlap(enemy1, player, chocoEnemy, null, this);
        this.game.physics.arcade.overlap(enemy2, player, chocoEnemy, null, this);
        //this.game.physics.arcade.overlap(enemy3, player, chocoEnemy, null, this);

        player.body.velocity.set(0);
        enemy1.body.velocity.set(0);
        enemy2.body.velocity.set(0);
        enemy3.body.velocity.set(0);
        
        if(banderaChoqueEnemy1==false)
           moverDer(enemy1);            
        else
            {
            if(num==1){
                moverIzq(enemy1);                
            }
            if(num==2){
                moverDer(enemy1);                
            }
            if(num==3){
                moverUp(enemy1);
            }
            if(num==4){
                moverDown(enemy1);
            }
        }
        if(banderaChoqueEnemy2==false)
           moverIzq(enemy2);
        else
            {
            if(num2==1){
                moverUp(enemy2);
            }
            if(num2==2){
                moverIzq(enemy2);
            }
            if(num2==3){
                moverDown(enemy2);
            }
            if(num2==4){
                moverDer(enemy2);
            }
        }
        if(banderaChoqueEnemy3==false)
           moverIzq(enemy3);
        else
            {
            if(num3==1){
                moverUp(enemy3);
            }
            if(num3==2){
                moverIzq(enemy3);
            }
            if(num3==3){
                moverDown(enemy3);
            }
            if(num3==4){
                moverDer(enemy3);
            }
        }

    ///****************************************** PARA EL TOUCH
        this.game.debug.pointer(this.game.input.pointer1);
        left=false;
        right=false;
        up=false;
        down=false;
        if(this.game.input.pointer1.isDown){
           
            if(this.game.input.pointer1.duration>200){
                x1=this.game.input.pointer1.position.x;
                x2=this.game.input.pointer1.positionDown.x;
                y1=this.game.input.pointer1.position.y;
                y2=this.game.input.pointer1.positionDown.y;
                vertical=false;
                if(Math.abs(y1-y2)>Math.abs(x1-x2)){
                    console.log("Es vertical");
                    vertical=true;
                }
                if(vertical){
                    if(y1>y2){
                        down=true;
                    }
                    else{
                        up=true;
                    }
                }
                else{
                    if(x1>x2){
                        right=true;
                    }
                    else{
                        left=true;
                    }
                }
                console.log("---------Funciona");
            }
        }

        ///*********************************************

        if (cursors.left.isDown || left){
            player.body.velocity.x = -100;
            player.play('left');
        }
        else if (cursors.right.isDown || right){
            player.body.velocity.x = 100;
            player.play('right');
        }
        else if (cursors.up.isDown || up){
            player.body.velocity.y = -100;
            player.play('up');
        }
        else if (cursors.down.isDown || down){
            player.body.velocity.y = 100;
            player.play('down');
        }
        else{
            player.animations.stop();
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        }

        if(score==0 && chocoBandera==2 || score<=0 && chocoBandera==1){  
            chocoBandera=0; 
            score=0;          
            playButton = this.game.add.button(0,30,"gameover",this.reiniciar,this);                                    
            playButton.scale.setTo(0.4,0.4);        
        }
        if(score>=115){
            chocoBandera=0; 
            score=0; 
            playButton = this.game.add.button(0,30,"winner",this.reiniciar,this);                                    
            playButton.scale.setTo(0.4,0.4);  
        }


    }
    this.reiniciar=function(){
        console.log("Se presiono el icono");        
        this.game.state.start('mapaRepublica');        
    }
}
