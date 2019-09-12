module.exports = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'VIN005',
        VIN005: 'VIN006'
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: 'web',
            idModulo: 'cam',
            lenguaje: 'es',
            pais: 'SV'
        }
    },
    VIN005: {
        status: 1,
        payload: {
            tipoOperaciones: [
                {
                    id: '01',
                    nombre: 'Tipo Operación CR 1'
                }
            ]
        }
    },
    VIN006: {
        status: 1,
        payload: {}
    }
};
