function mapaRepublica(game){
    this.cursors;
    this.nestados = ["cdmx","jalisco","guanajuato"];
    this.estados=[];
    this.startButton=[];
    this.puntos=[];
    var context=this;
    this.preload=function(){
      this.game.load.image('pais','imagenes/mapa/starfield.jpg');
      //AJUSTAR AL DEVICE
      this.game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT;
      this.game.load.spritesheet('cdmx','imagenes/cdmx.svg');
      this.game.load.spritesheet('jalisco','imagenes/chiapas.svg');
      this.game.load.spritesheet('guanajuato','imagenes/guanajuato.svg');
    }
    this.create=function(){

        this.game.world.setBounds(0, 0, 706, 480);
        this.game.stage.backgroundColor = '#2d2d2d';
        this.game.add.sprite(0, 0, 'pais');
        this.puntos.push({x:130,y:70});
        textCDMX = this.game.add.text(30, 150, 'CDMX', { fontSize: '20px', fill: '#fff' });
        this.puntos.push({x:200,y:70});
        textCHIAPAS = this.game.add.text(130, 150, 'CHIAPAS', { fontSize: '20px', fill: '#fff' });
        this.puntos.push({x:100,y:200});
        textSONORA = this.game.add.text(50, 300, 'GUANAJUATO', { fontSize: '20px', fill: '#fff' });        
        Obj=function(){
            this.nombre;
            this.ejecutarEstado=function(){
                console.log("non: "+this.nombre);
                context.game.state.start(this.nombre);
            }
        }
        for(i=0; i<this.nestados.length; i++){
             this.estados[i]=new Obj();
             this.estados[i].nombre=this.nestados[i];
             this.startButton[i] = this.add.button(this.puntos[i].x,this.puntos[i].y,this.nestados[i], this.estados[i].ejecutarEstado,this.estados[i], 1, 0, 2);
             this.startButton[i].anchor.set(0.5,0);
             this.startButton[i].scale.set(0.5);
             this.startButton[i].input.useHandCursor = true;
         }
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.input.addPointer();
        
        text = game.add.text(90, 30, 'Seleccione un estado');

        text.anchor.set(0.5);
        text.align = 'center';

        text.font = 'Arial Black';
        text.fontSize = 15;
        text.fontWeight = 'bold';
    
        text.stroke = '#000000';
        text.strokeThickness = 6;
        text.fill = '#43d637';
        text.fixedToCamera=true;
    }
    this.update=function(){
        game.debug.pointer(game.input.pointer1);
        left=false;
        right=false;
        up=false;
        down=false;
        if(game.input.pointer1.isDown){
           
            if(game.input.pointer1.duration>200){
                x1=game.input.pointer1.position.x;
                x2=game.input.pointer1.positionDown.x;
                y1=game.input.pointer1.position.y;
                y2=game.input.pointer1.positionDown.y;
                vertical=false;
                if(Math.abs(y1-y2)>Math.abs(x1-x2)){
                    vertical=true;
                }
                if(vertical){
                    if(y1>y2){
                        up=true;
                    }
                    else{
                        down=true;
                    }
                }
                else{
                    if(x1>x2){
                        left=true;
                    }
                    else{
                        right=true;
                    }
                }
            }
        }
        /*if (this.cursors.up.isDown || up){
            this.game.camera.y -= 4;
        }
        else if (this.cursors.down.isDown || down){
            this.game.camera.y += 4;
        }

        if (this.cursors.left.isDown || left){
            this.game.camera.x -= 4;
        }
        else if (this.cursors.right.isDown || right){
            this.game.camera.x += 4;
        }*/

    }

}
