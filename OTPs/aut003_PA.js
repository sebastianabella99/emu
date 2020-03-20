module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTU0NzAwNzYsImV4cCI6MTU0NjkxOTY3NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0._A7pY7lDS3-43R68XFLPUSspUVmyi9fleksPzLifcqI',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE011',
        CRE011: 'ING001'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"1",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"PA",
            "zona": true
        }
    },
    CRE011: {
        status: 1,
        payload: {
            cuentas: [{
                valCodigoProducto: 'HCL',
                valCodigoSubProducto: 'HCL002',
                valNumeroProducto: '0000012345',
                valAliasProducto: 'PORN-HUB'
            }]
        }
    }
};
