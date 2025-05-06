function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
  
    // Guardar en LocalStorage
    localStorage.setItem('nombreUsuario', nombre);
  
    // Mostrar mensaje
    document.getElementById('mensaje').innerText = `¡Hola, ${nombre}! (nombre guardado)`;
  }
  
  // Cuando la página carga, revisamos si ya hay un nombre guardado
  window.onload = function() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    
    if (nombreGuardado) {
      document.getElementById('mensaje').innerText = `¡Hola, ${nombreGuardado}! (nombre guardado)`;
    }
  };
  