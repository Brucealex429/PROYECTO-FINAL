document.addEventListener('DOMContentLoaded', function() {
    function validateForm() {
        let isValid = true;

        document.querySelectorAll('.error').forEach(e => e.textContent = '');

        const nombre = document.getElementById('nombre').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const tarjeta = document.getElementById('tarjeta').value.trim();
        const caducidad = document.getElementById('caducidad').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!nombre) {
            document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
            isValid = false;
        }
        if (!direccion) {
            document.getElementById('direccionError').textContent = 'La dirección es obligatoria.';
            isValid = false;
        }
        if (!telefono || !/^\d{10}$/.test(telefono)) {
            document.getElementById('telefonoError').textContent = 'El teléfono debe tener 10 dígitos.';
            isValid = false;
        }
        if (!tarjeta || !/^\d{16}$/.test(tarjeta)) {
            document.getElementById('tarjetaError').textContent = 'El número de tarjeta debe tener 16 dígitos.';
            isValid = false;
        }
        if (!caducidad || !/^\d{2}\/\d{2}$/.test(caducidad)) {
            document.getElementById('caducidadError').textContent = 'La fecha de caducidad debe tener el formato MM/AA.';
            isValid = false;
        }
        if (!cvv || !/^\d{3}$/.test(cvv)) {
            document.getElementById('cvvError').textContent = 'El CVV debe tener 3 dígitos.';
            isValid = false;
        }

        return isValid;
    }

    document.getElementById('purchaseForm').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        } else {
            event.preventDefault();

            setTimeout(function() {
                document.getElementById('myModal').style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 3000);

            }, 1000);
        }
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    };
});
