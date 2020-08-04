module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CVI001',
        CVI001: 'VIN006'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"2",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"CR"
        }
    },
    CVI001: {
        status: 1,
        payload: {
            // usuarioBancaElectronica: '123456789',
            crypto: {
                metodo: "encriptacionClaveA",
                credencial: `-----BEGIN PUBLIC KEY-----
                MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5EM+PpFGljhLw4ZvcoxS
                kyLaVkJVN03Pk3aw99tc6jsgmUmM4aYkxeTDHPcpd7FwzIiwRmHPaYxA54r0hYVq
                wQ5KfNlJm3J1SY6B0EyWnEsvLwk382wvFlZW0DWmE6K2aBa1ypZUqXUwGmyAFu1q
                jg5AWb4qigziwy1/ukYPfNsFEfbldSAB3m3qZJC08YbcDfmfmOc1ylV6UWVWdUh7
                uGjPMipL9VI6MuIK5cqXliMKjUsIqoP585JrwnqkWe0f9GcShGBtONpyAK6/2scD
                t9sugaS2TDgu9JWe+Clh9yPXPoRuHnti0/kctpzCtQRR59UIqDG0jyajxQDyx8wb
                7K2aCvFv+d1BqNJ+JkHA7oSW0Ulvd3/sou7VjKK1d+o0RaU+6JDtda444ZNBx0lo
                Q+C+ZnMd0R9uoxGREeyprxnJRPph1GVfGSkr8QHIxTLmYUhacMgnORbccEGkhMyQ
                UQOsSzBaI63NbcqX28oExyRlpZDsMiDR59ikvaX1supUOBZRR1614GTsWvV2xIW+
                y+/an/Gzq3yGSOI2dzPrqrS4Qr086HZEs7NgmZQPbKsckNwmidLAJZue2ovNmCAa
                3OyhDEtCyiQxEb2Z7kL9kJqKmdqtKQVCHqjM2PqzWX3PJ9VQX+GS9riqOwJqkUQZ
                ii/NcrfiE71w0hiOMkBAzukCAwEAAQ==
                -----END PUBLIC KEY-----
                `
            },
            usuario: 'usurioSSS'
        }
    },
    VIN006: {
        status: 2,
        payload: {}
    }
};
