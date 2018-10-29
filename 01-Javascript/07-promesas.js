//07-promesas.js

const fs = require('fs');

const nuevaPromesaLectura=new Promise(
    (resolve)=> {
        fs.readFile('06-texto23.txt','utf-8',
            (err,contenidoArchivo)=>{
                if(err){
                    resolve(err);
                }else {
                    resolve(contenidoArchivo)
                }
            });

    }
);

const nuevaPromesaEscritura = (contenidoLeido) => {
    return new Promise(
        (resolve, reject) => {

            const contenido = contenidoLeido ? contenidoLeido + 'Otro ola' : 'Otro ola';

            fs.writeFile('06-texto23.txt', contenido,
                (err,) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenido);
                    }
                });
        }
    );
};

nuevaPromesaLectura
    .then(
        (contenidoArchivo) => {
            console.log('Todo bien', contenidoArchivo);
            return nuevaPromesaEscritura(contenidoArchivo)
        }
    )
    .then(
        (contenidoCompleto) => {
            console.log('Contenido completo', contenidoCompleto);
        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );

const nuevaPromesaAppendFile = (nombreArchivo,contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo,'utf-8',
                (error,contenidoArchivoLeido)=>{
                    if (error){
                        fs.writeFile(nombreArchivo,contenidoArchivo,
                            (err)=>{
                                if (err) {
                                    reject(console.error('Error escribiendo'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );

                    }else{
                        fs.writeFile(nombreArchivo,contenidoArchivoLeido+contenidoArchivo,
                            (err)=>{
                                if (err) {
                                    reject(console.error('Error escribiendo'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );
                    }

                }


            );

        }
    );
};

nuevaPromesaAppendFile('06-texto3.text','\n Adios Mundo')
    .then(
        (resultadoOk) => {
            console.log('Todo bien', resultadoOk);
            return nuevaPromesaAppendFile(contenidoArchivo,contenidoArchivo)

        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );

nuevaPromesaApentFile
    .then(



    );
