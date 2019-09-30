module.exports = {
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'ING002',
        ING002: 'TPC001',
        TPC001: 'BEN001',
        BEN001: 'VIN001',
        VIN001: 'VIN002',
        VIN002: 'VIN003',
        VIN003: 'VIN004',
        VIN004: 'VIN005',
        VIN005: 'OTP001',
        OTP001: 'OTP001'
    },
    ING001: {
        status: 1,
        payload: {
            aliado: 'LM',
            idModulo: 'CAM',
            canal: '',
            lenguaje: 'ES',
            pais: 'CR'
        }
    },
    ING002: {
        status: 1,
        payload: {}
    },
    BEN001: {
        status: 1,
        payload: {
            titulo: 'Conviértase en Cliente Davivienda en menos tiempo abriendo su Cuenta de Ahorros Móvil y acceda a los siguientes beneficios:',
        }
    },
    TPC001: {
        status: 1,
        payload: {}
    },
    OTP001: {
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
                     tipo: '0001',
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
    ACU003: {
        status: 1,
        payload: {}
    }
};
