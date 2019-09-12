module.exports = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkhOIiwibW9kdWxvIjoicXVlPz8_In0.RACacOzgx-qr0yKGUTMYqlU_Uod9L0ijZudl95iAzsY',
    workflow: {
          APPBOOT: 'ING001',
          ING001: 'BIO001',
          BIO001: 'BIO002',
          BIO002: 'BIO003',
          BIO003: 'BIO004',
          BIO004: 'BIO005',
          BIO005: 'BIO006',
          BIO006: 'BIO001'
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: 'web',
            idModulo: 'cam',
            lenguaje: 'es',
            pais: 'HN'
        }
    },
    ING002: {
        status: 1,
        payload: {}
    },
    BEN001: {
        status: 1,
        payload: {
            titulo: 'Conviértase en Cliente Davivienda en menos tiempo abriendo su Cuenta de Ahorros Móvil y acceda a los siguientes beneficios:'
        }
    },
    TPC001: {
        status: 1,
        payload: {}
    },
    BIO001: {
        status: 1,
        payload: {}
    },
   BIO002: {
        status: 1,
        payload: {}
   },
   BIO003: {
        status: 1,
        payload: {}
   },
   BIO004: {
        status: 1,
        payload: {}
   },
   BIO005: {
        status: 1,
        payload: {}
   },
   BIO006: {
        status: 1,
        payload: {
            entidades: [
                {
                    id: '0',
                    nombre: 'Ciudad de Panama'
                }
            ],
            operadores: [
                {
                    id: '0',
                    nombre: 'Claro'
                }
            ]
        }
   },
   VIN001: {
        status: 1,
        payload: {
            cliente:{
                nombre: 'Sergio Rafael',
                documento: {
                     tipo: '01',
                     numero: '1234567890'
                },
                sexo: 'M',
                nit: '111111111'
             }
        }
   },
   VIN002: {
        status: 1,
        payload: {}
   },
   VIN003: {
        status: 1,
        payload: {}
   },
   VIN004: {
        status: 1,
        payload: {}
   },
   VIN005: {
        status: 1,
        payload: {}
   },
   VIN006: {
        status: 1,
        payload: {}
   },
   ACU001: {
        status: 1,
        payload: {}
   },
   AUT001: {
        status: 1,
        payload: {}
   },
   AUT002: {
        status: 1,
        payload: {}
   },
   ACU002: {
        status: 1,
        payload: {}
   },
   OTP001: {
        status: 1,
        payload: {}
   },
   ACU003: {
        status: 1,
        payload: {}
   }
};