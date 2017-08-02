var functions = require('firebase-functions');
var admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendNotification = functions.database.ref('/tarefas/{tarefaId}')
        .onWrite(event => {
            var eventSnapshot = event.data;

            var str = eventSnapshot.child("descricao").val();

            console.log(str);

            var topic = "android";

            var payload = {
                data: {
                    "titulo" : "Nova Tarefa",
                    "descricao" : str
                }
            };

            return admin.messaging().sendToTopic(topic, payload)
                .then(function(response) {
                    console.log("Mensagem enviada com sucesso: ", response);
                })
                .catch(function(error){
                    console.log("Erro ao enviar mensagem: ", error);
                });
        });


