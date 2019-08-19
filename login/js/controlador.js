// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var usuarios=[
    {
      "usuario": "registrado",
      "clave" : "registrado"
    },
    {
      "usuario": "admin",
      "clave" : "admin"
    }
  ];

  function verificar(){
    let usuario={
      nombre : document.getElementById('usuario').value,
      clave : document.getElementById('clave').value
    };
    console.log('si leyó los datos ingresados');
    for(let i =0;i< usuarios.length; i++){
      if(usuarios[i].usuario == usuario.nombre && usuarios[i].clave == usuario.clave){
        document.location.href= "../Administrador/inicio/index.html";
        return
      }
    }
    window.alert('El usuario o contraseña son inválidos');
  };