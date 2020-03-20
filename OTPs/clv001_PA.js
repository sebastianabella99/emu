module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CVI001',
        CVI001: 'ING001'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"2",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"PA"
        }
    },
    CVI001: {
        status: 1,
        payload: {
            usuarioBancaElectronica: '123456789',
            crypto: {
                metodo: "encriptacionClaveA",
                credencial : `-----BEGIN PUBLIC KEY-----
                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi0/ajmKQ6P3+lInTZvRp
                l8NBxUikVzz1ZaqJVlW6cy6rXkms2TYwawHJp6Uat4VoMj7+jCFxs7daOcQOLWA2
                6KMKP+C8uSzdy6tgKN/CwkalDPU/+kC/ImEHwa7i3FFnXsBeJN5Md7my0MOhqYR6
                vpiGtFu99YvRzBkOsj53ZT7Fya/EgEFrAmudfnNg7BmALO0lgXUKwGBZbg5h4pSk
                ss06SQdNwvrpC0dRBBnww0nOXQmnEljNIfcJ1kCXyYO3GKVNkyzW+gQCpkB+xPxM
                4+m4WWo93xKbI9SOXaIxhDu19Y5V7cbm2BunVaIvTNAtQuoamUN3arfg3d9mO8/y
                BQIDAQAB
          -----END PUBLIC KEY-----`
            }
        }
    },
    VIN006: {
        status: 1,
        payload: {}
    }
};
