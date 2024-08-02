document.getElementById('scanButton').addEventListener('click', function() {
    // Mostrar el contenedor de la cámara
    document.getElementById('cameraContainer').style.display = 'flex';

    // Inicializar QuaggaJS
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#camera')    // El contenedor donde se mostrará la cámara
        },
        decoder: {
            readers: ["ean_reader"] // Actualizado para leer códigos de barras EAN-13
        }
    }, function(err) {
        if (err) {
            console.log(err);
            alert('Error al iniciar la cámara: ' + err);
            return;
        }
        Quagga.start();
    });

    // Manejar el resultado del escaneo
    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;
        alert('Código de barras escaneado: ' + code);
        document.getElementById('barcodeSearch').value = code;
        filterTable(); // Llama a tu función para filtrar la tabla
        Quagga.stop(); // Detiene la cámara
        document.getElementById('cameraContainer').style.display = 'none'; // Ocultar el contenedor de la cámara
    });
});

document.getElementById('closeCameraButton').addEventListener('click', function() {
    document.getElementById('cameraContainer').style.display = 'none';
    Quagga.stop(); // Detiene la cámara si está activa
});

document.getElementById('barcodeSearch').addEventListener('input', filterTable);
document.getElementById('descriptionSearch').addEventListener('input', filterTable);

function filterTable() {
    const barcodeValue = document.getElementById('barcodeSearch').value.toLowerCase();
    const descriptionValue = document.getElementById('descriptionSearch').value.toLowerCase();
    const rows = document.querySelectorAll('#productTable tbody tr');

    rows.forEach(row => {
        const barcode = row.cells[0].textContent.toLowerCase();
        const description = row.cells[1].textContent.toLowerCase();
        if (barcode.includes(barcodeValue) && description.includes(descriptionValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
