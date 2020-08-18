module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE006',
        CRE006: 'CRE007',
        CRE007: 'CRE008',
        CRE008: 'CRE009',
        CRE009: 'CRE010',
        CRE010: 'CRE011',
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'ML',
            canal: '1',
            idModulo: 'cam',
            lenguaje: 'ES',
            pais: 'HN',
            zona: true
        }
    },
    CRE006: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE007: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE008: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE009: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true,
            cuota: '11111.99',
            montoAprobado: '2222.99',
            comision: '33.99',
            plazo: '36.66',
            tasaInteres: '12.66',
            ki: {
                capitalInteres: '1',
                tasaInteresNominal: '12',
                tasaInteresEfectiva: '10',
                seguroDeuda: '45.99',
                seguroDesempleo: '9999.99'
            }
         }
    },
    CRE010: {
        status: 1,
        payload: {
            tieneProducto: true,
            esCliente: true
         }
    }
};
