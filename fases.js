function fase1 () {
            var x = 30;
            var v = 0;
            var i=0;
            var tempo=30;
            var fr=0;
            var alt=window.innerHeight;
            var larg=window.innerWidth;
            var LIFE=[], TERRA=[];
            var vidas=3;

            function preload() {
                for(a=0; a<5; a++) {
                    if(a<3) {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
                    }
                    else {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
                    }
                }
                for(b=0; b<2; b++) {
                    TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
                }
            }


            function setup() {
            createCanvas(larg, alt);
            frameRate(60);

            }

            function draw() {
            //R, G, B
            background('#7C3D99');

            fill('white');
            stroke('black');
            strokeWeight(1);
            rect(0, larg/3, larg/3, alt, 10);
            rect(larg/3, larg/3, larg/3, alt, 10);
            rect(2*larg/3, larg/3, larg/3, alt, 10);

            if (x<larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(0, larg/3, larg/3, alt, 10);
            }
            else if (x>larg/3 && x<2*larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(larg/3, larg/3, larg/3, alt, 10);
            }
            else {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(2*larg/3, larg/3, larg/3, alt, 10);
            }

            //TEMPO:
                fr=frameCount;
                if(fr%60==0) {
                    if(tempo>0) {
                        tempo--;
                    }
                    else {
                        tempo=0;
                    }
                }
            //LIFE:
                if(fr%20==0) {
                    i++;
                    if(i==5) {
                        i=0;
                    }
                }

            fill('black');
            textSize(30);

            text('ACRE, TOCANTINS,', 0.0585*larg, 0.864*alt);
            text('MARANHÃO, BAHIA E PARÁ', 0.022*larg, 0.92*alt);

            text('AMAZONAS, ACRE,', 0.41*larg, 0.832*alt);
            text('RORAIMA, PARÁ, AMAPÁ', 0.381*larg, 0.888*alt);
            text('RONDÔNIA, TOCANTINS', 0.388*larg, 0.944*alt);

            text('RIO GRANDE DO NORTE', 0.710*larg, 0.864*alt);
            text('E RIO GRANDE DO SUL', 0.715*larg, 0.92*alt);

            text('TEMPO: '+tempo, 30, 0.08*alt);
            image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
            image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
            image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            textSize(50);
            text('A FLORESTA AMAZÔNICA SE ESTENDE POR QUAIS', 0.044*larg, 0.24*alt);
            text('ESTADOS BRASILEIROS?', 0.256*larg, 0.352*alt);

            fill('blue');
            stroke('black');
            strokeWeight(1);
            ellipse(x, larg/3-40, 80, 80);
            image(TERRA[1], x-67, larg/3-120, 130, 130)

            //VELOCIDADE DA BOLA
                if(x<larg) {
                    x+=10+v;
                }
                else {
                    x=0;
                    if(v<35) {
                        v+=3;
                    }
                    else {
                        v=35;
                    }
                }
            }
            function keyPressed () {
            if(x>=0 && x<larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
                alert("PARABENS");
                }
            if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
                    vidas--;
                }
            }
}
function fase2 () {
            var x = 30;
            var v = 0;
            var i=0;
            var tempo=30;
            var fr=0;
            var alt=window.innerHeight;
            var larg=window.innerWidth;
            var LIFE=[], TERRA=[];

            function preload() {
                for(a=0; a<5; a++) {
                    if(a<3) {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
                    }
                    else {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
                    }
                }
                for(b=0; b<2; b++) {
                    TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
                }
            }


            function setup() {
            createCanvas(larg, alt);
            frameRate(60);

            }

            function draw() {
            //R, G, B
            background('#7C3D99');

            fill('white');
            stroke('black');
            strokeWeight(1);
            rect(0, larg/3, larg/3, alt, 10);
            rect(larg/3, larg/3, larg/3, alt, 10);
            rect(2*larg/3, larg/3, larg/3, alt, 10);

            if (x<larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(0, larg/3, larg/3, alt, 10);
            }
            else if (x>larg/3 && x<2*larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(larg/3, larg/3, larg/3, alt, 10);
            }
            else {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(2*larg/3, larg/3, larg/3, alt, 10);
            }

            //TEMPO:
                fr=frameCount;
                if(fr%60==0) {
                    if(tempo>0) {
                        tempo--;
                    }
                    else {
                        tempo=0;
                    }
                }
            //LIFE:
                if(fr%20==0) {
                    i++;
                    if(i==5) {
                        i=0;
                    }
                }

            fill('black');
            textSize(30);

            text('CORAÇÃO DO MUNDO', 0.0485*larg, 0.864*alt);

            text('ESTÔMAGO DO MUNDO', 0.371*larg, 0.864*alt);

            text('PULMÃO DO MUNDO', 0.730*larg, 0.864*alt);


            text('TEMPO: '+tempo, 30, 0.08*alt);
            if(vidas==3) {
                image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            } 
            if(vidas==2) {
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }

            textSize(50);
            text('A FLORESTA AMAZÔNICA TAMBÉM É', 0.176*larg, 0.24*alt);
            text('CONHECIDA COMO:', 0.307*larg, 0.352*alt);

            fill('blue');
            stroke('black');
            strokeWeight(1);
            ellipse(x, larg/3-40, 80, 80);
            image(TERRA[1], x-67, larg/3-120, 130, 130)

            //VELOCIDADE DA BOLA
                if(x<larg) {
                    x+=10+v;
                }
                else {
                    x=0;
                    if(v<35) {
                        v+=3;
                    }
                    else {
                        v=35;
                    }
                }
            }
            function keyPressed () {
            if(x>=0 && x<larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
                    alert("PARABENS");
                }
            }
}
function fase3 () {
            var x = 30;
            var v = 0;
            var i=0;
            var tempo=30;
            var fr=0;
            var alt=window.innerHeight;
            var larg=window.innerWidth;
            var LIFE=[], TERRA=[];
            vidas=3

            function preload() {
                for(a=0; a<5; a++) {
                    if(a<3) {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
                    }
                    else {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
                    }
                }
                for(b=0; b<2; b++) {
                    TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
                }
            }


            function setup() {
            createCanvas(larg, alt);
            frameRate(60);

            }

            function draw() {
            //R, G, B
            background('#7C3D99');

            fill('white');
            stroke('black');
            strokeWeight(1);
            rect(0, larg/3, larg/3, alt, 10);
            rect(larg/3, larg/3, larg/3, alt, 10);
            rect(2*larg/3, larg/3, larg/3, alt, 10);

            if (x<larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(0, larg/3, larg/3, alt, 10);
            }
            else if (x>larg/3 && x<2*larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(larg/3, larg/3, larg/3, alt, 10);
            }
            else {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(2*larg/3, larg/3, larg/3, alt, 10);
            }

            //TEMPO:
                fr=frameCount;
                if(fr%60==0) {
                    if(tempo>0) {
                        tempo--;
                    }
                    else {
                        tempo=0;
                    }
                }
            //LIFE:
                if(fr%20==0) {
                    i++;
                    if(i==5) {
                        i=0;
                    }
                }

            fill('black');
            textSize(30);

            text('PICO 31 DE MARÇO', 0.0585*larg, 0.864*alt);

            text('PICO GUIMARÃES ROSA', 0.371*larg, 0.864*alt);

            text('PICO DA NEBLINA', 0.740*larg, 0.864*alt);


            text('TEMPO: '+tempo, 30, 0.08*alt);
            if(vidas==3) {
                image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            } 
            if(vidas==2) {
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }
            if(vidas==1) {
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }

            textSize(50);
            text('QUAL O NOME DA MAIOR SERRA QUE', 0.166*larg, 0.24*alt);
            text('TEMOS NO TERRITÓRIO BRASILEIRO?', 0.166*larg, 0.352*alt);

            fill('blue');
            stroke('black');
            strokeWeight(1);
            ellipse(x, larg/3-40, 80, 80);
            image(TERRA[1], x-67, larg/3-120, 130, 130)

            //VELOCIDADE DA BOLA
                if(x<larg) {
                    x+=10+v;
                }
                else {
                    x=0;
                    if(v<35) {
                        v+=3;
                    }
                    else {
                        v=35;
                    }
                }
            }
            function keyPressed () {
            if(x>=0 && x<larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
                    alert("PARABENS");
                }
            }
}
function fase4 () {
            var x = 30;
            var v = 0;
            var i=0;
            var tempo=30;
            var fr=0;
            var alt=window.innerHeight;
            var larg=window.innerWidth;
            var LIFE=[], TERRA=[];

            function preload() {
                for(a=0; a<5; a++) {
                    if(a<3) {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
                    }
                    else {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
                    }
                }
                for(b=0; b<2; b++) {
                    TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
                }
            }


            function setup() {
            createCanvas(larg, alt);
            frameRate(60);

            }

            function draw() {
            //R, G, B
            background('#7C3D99');

            fill('white');
            stroke('black');
            strokeWeight(1);
            rect(0, larg/3, larg/3, alt, 10);
            rect(larg/3, larg/3, larg/3, alt, 10);
            rect(2*larg/3, larg/3, larg/3, alt, 10);

            if (x<larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(0, larg/3, larg/3, alt, 10);
            }
            else if (x>larg/3 && x<2*larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(larg/3, larg/3, larg/3, alt, 10);
            }
            else {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(2*larg/3, larg/3, larg/3, alt, 10);
            }

            //TEMPO:
                fr=frameCount;
                if(fr%60==0) {
                    if(tempo>0) {
                        tempo--;
                    }
                    else {
                        tempo=0;
                    }
                }
            //LIFE:
                if(fr%20==0) {
                    i++;
                    if(i==5) {
                        i=0;
                    }
                }

            fill('black');
            textSize(30);

            text('CARNE BOVINA', 0.0785*larg, 0.864*alt);
            text('E SOJA', 0.12*larg, 0.924*alt);

            text('CANA-DE-AÇÚCAR', 0.4*larg, 0.864*alt);
            text('E CAFÉ', 0.457*larg, 0.924*alt);

            text('PETRÓLEO', 0.770*larg, 0.864*alt);
            text('E LATÉX', 0.782*larg, 0.924*alt);


            text('TEMPO: '+tempo, 30, 0.08*alt);
            if(vidas==3) {
                image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            } 
            if(vidas==2) {
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }
            if(vidas==1) {
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }

            textSize(40);
            text('COM A ABERTURA DAS RODOVIAS E A IMPLEMENTAÇÃO', 0.086*larg, 0.24*alt);
            text('DE HIDROVIAS EM ALGUNS RIOS AMAZÔNICOS, A', 0.136*larg, 0.352*alt);
            text('AMAZÔNIA COMEÇOU A ATRAIS PRODUTORES DE: ', 0.13*larg, 0.452*alt);

            fill('blue');
            stroke('black');
            strokeWeight(1);
            ellipse(x, larg/3-40, 80, 80);
            image(TERRA[1], x-67, larg/3-120, 130, 130)

            //VELOCIDADE DA BOLA
                if(x<larg) {
                    x+=10+v;
                }
                else {
                    x=0;
                    if(v<35) {
                        v+=3;
                    }
                    else {
                        v=35;
                    }
                }
            }
            function keyPressed () {
            if(x>=0 && x<larg/3 && keyCode===ENTER) {
                    alert("PARABENS");
                }
            if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
                    vidas--;
                }
            }
}
function fase5 () {
            var x = 30;
            var v = 0;
            var i=0;
            var tempo=30;
            var fr=0;
            var alt=window.innerHeight;
            var larg=window.innerWidth;
            var LIFE=[], TERRA=[];

            function preload() {
                for(a=0; a<5; a++) {
                    if(a<3) {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(a+1)+'.png');
                    }
                    else {
                        LIFE[a]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/life'+(5-a)+'.png');
                    }
                }
                for(b=0; b<2; b++) {
                    TERRA[b]=loadImage('https://raw.githubusercontent.com/MrDinizz/mrdinizz.github.io/master/imagens/terra'+(b+1)+'.png');
                }
            }


            function setup() {
            createCanvas(larg, alt);
            frameRate(60);

            }

            function draw() {
            //R, G, B
            background('#7C3D99');

            fill('white');
            stroke('black');
            strokeWeight(1);
            rect(0, larg/3, larg/3, alt, 10);
            rect(larg/3, larg/3, larg/3, alt, 10);
            rect(2*larg/3, larg/3, larg/3, alt, 10);

            if (x<larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(0, larg/3, larg/3, alt, 10);
            }
            else if (x>larg/3 && x<2*larg/3) {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(larg/3, larg/3, larg/3, alt, 10);
            }
            else {
                fill('#008080');
                stroke('black');
                strokeWeight(2);
                rect(2*larg/3, larg/3, larg/3, alt, 10);
            }

            //TEMPO:
                fr=frameCount;
                if(fr%60==0) {
                    if(tempo>0) {
                        tempo--;
                    }
                    else {
                        tempo=0;
                    }
                }
            //LIFE:
                if(fr%20==0) {
                    i++;
                    if(i==5) {
                        i=0;
                    }
                }

            fill('black');
            textSize(30);

            text('CAFÉ', 0.13*larg, 0.864*alt);

            text('LATÉX', 0.46*larg, 0.864*alt);

            text('ALGODÃO', 0.8*larg, 0.864*alt);

            text('TEMPO: '+tempo, 30, 0.08*alt);
            if(vidas==3) {
                image(LIFE[i], 0.805*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            } 
            if(vidas==2) {
                image(LIFE[i], 0.864*larg, 0.016*alt, 80, 80);
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }
            if(vidas==1) {
                image(LIFE[i], 0.922*larg, 0.016*alt, 80, 80);
            }

            textSize(50);
            text('NO FIM DO SÉCULO XIX E INÍCIO DO SÉCULO XX,', 0.056*larg, 0.24*alt);
            text('O BRASIL TORNOU-SE O MAIOR FORNECEDOR DE: ', 0.04*larg, 0.352*alt);

            fill('blue');
            stroke('black');
            strokeWeight(1);
            ellipse(x, larg/3-40, 80, 80);
            image(TERRA[1], x-67, larg/3-120, 130, 130)

            //VELOCIDADE DA BOLA
                if(x<larg) {
                    x+=10+v;
                }
                else {
                    x=0;
                    if(v<35) {
                        v+=3;
                    }
                    else {
                        v=35;
                    }
                }
            }
            function keyPressed () {
            if(x>=0 && x<larg/3 && keyCode===ENTER) {
                    vidas--;
                }
            if(x>=larg/3 && x<2*larg/3 && keyCode===ENTER) {
                alert("PARABENS");
                }
            if(x>=2*larg/3 && x<=larg && keyCode===ENTER) {
                    vidas--;
                }
            }
}
