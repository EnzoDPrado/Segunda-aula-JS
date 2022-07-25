//Exibir na tela
console.log('EXERCICIO PARA CALCULAR A MEDIA');

//Import da biblioteca da readline(permite interagir com o usuario!)
var readline = require('readline');

//Instancia o objeto para criar a interacao com o usuario
var entradaDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

/* tipos de variaveis:
 -  var = escopo global (a variavel criada com var, tera existencia em todas as partes do projeto, ou seja todas as funcoes terao acesso a esta variavel)
 -  let = escopo local   (a variavel criada com let, tera existencia somente na funcao que esta sendo utilizada)
*/

//Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome){

    //Declaracao de variavel local e atribuiindo um valor
    let nomeAluno = nome;
    console.log('O nome do aluno e: ' + nomeAluno);

        //Entrada da primeira nota
        entradaDados.question('Digite a primeira nota para calcular a media \n', function(valor1){
            let nota1 = valor1;

                //Entrada da segunda nota
                entradaDados.question('Digite a segunda nota para calcular a media \n', function(valor2){
                    let nota2 = valor2;

                    //Entrada da terceira nota
                    entradaDados.question('Digite a terceira nota para calcular a media \n', function(valor3){
                        let nota3 = valor3;

                        //Entrada da quarta nota
                        entradaDados.question('Digite o valor da quarta nota para calcular a media \n', function(valor4){
                            let nota4 = valor4;
                            let media;
                            let statusAluno;

                            //Validacao para o nome do aluno
                            if(nomeAluno == '')
                            {
                                console.log('nome do aluno deve ser informado')
                            
                            //Validacao para as notas 
                            }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                console.log('E necessario informar todas as notas para o calculo!');
                            }else{
                                //Para converter uma string e valor, podemos utilizar o parseInt ou parseFloat
                                //parseInt - converte para inteiro
                                //parseFloat - converte para real
                                media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

                                //Estrutura de decisao para saber se o aluno atingiu a media
                                if(media > 7){
                                    statusAluno = 'APROVADO';                                 
                                }

                                //Estrutura de decisao para saber se o aluno necessita fazer um exame para passar de ano
                                else if(media >=4 && media <=6.9){
                                    statusAluno = 'EXAME';
                                }

                                //Estrutura de decisao para saber se o aluno reprovou
                                else{
                                    statusAluno = 'REPROVADO';
                                }

                                //Mostrando todos os status do aluno na saida
                                console.log('O aluno ' + nomeAluno + ' teve media de: ' + media + '\nele esta: ' + statusAluno);
                            

                               
                            }
                        });
                    });
                });
        });

});


