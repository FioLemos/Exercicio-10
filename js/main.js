$(document).ready(function() {

    $('#CPF').mask('000.000.000-00');

    $('#telefone').mask('(00) 00000-0000');

    $('#CEP').mask('00000-000');

    $('form').validate({ 
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            },
            endereco: {
                required: true
            },
            CPF: {
                required: true,
                minlength: 14
            },
            CEP: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            telefone: {
                minlength:"São 11 numeros burro"
            },
            CPF: {
                minlength:"Passa teu CPF ai"
            },
            CEP: {
                minlength:"Ce mora no nada?"
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incoretos`)
            }
        }
    })
});