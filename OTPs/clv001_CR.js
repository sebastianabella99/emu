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
            "canal":"48",
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
                MIIGsDCCBZigAwIBAgITfwAAACqf0dPmeaULyQAAAAAAKjANBgkqhkiG9w0BAQsF
                ADBWMRMwEQYKCZImiZPyLGQBGRYDY29tMRwwGgYKCZImiZPyLGQBGRYMZGF2aXZp
                ZW5kYWNyMSEwHwYDVQQDExhEYXZpdmllbmRhIENvc3RhIFJpY2EgQ0EwHhcNMTcw
                NDEwMTUxOTAwWhcNMTgwNDEwMTUyOTAwWjCBjzELMAkGA1UEBhMCQ1IxETAPBgNV
                BAgTCFNhbiBKb3NlMREwDwYDVQQHEwhTYW4gSm9zZTEpMCcGA1UEChMgQmFuY28g
                RGF2aXZpZW5kYSBDb3N0YSBSaWNhIFMuQS4xEzARBgNVBAsTClRlY25vbG9naWEx
                GjAYBgNVBAMTEUJFTC5kYXZpdmllbmRhLmNyMIICIjANBgkqhkiG9w0BAQEFAAOC
                Ag8AMIICCgKCAgEAxOx7nfPRKBgx0DF6V2Ec+U8dZH9ns1rMzCES1doPp3di8/lu
                6D9kgwKFoI0ofDptcY68Ai83BZ9S+8pxppcHaMe2w7ymOqfDLOiwcBLsMuIHco/X
                LRIBan24Hck3oJsgU5ELKBp2GKkxcf0vTGgDgpgBxospPFYwQOb+Z6mvtoOrC8a0
                plAEh/qz26Z7b7mwQatE69PmmAGHuxhF7d5tYRvw2RsKieaFEIgIHWEhGm5CybvF
                WrbKx0ZKSH2QjVG4vlqn9fhHcx/owVsrmAFDKak3MdRxA+Yz0PEZTBLH5B1nODto
                KciX050mMfCteFPKK3nR2Ff+aaM1/J2Xm7I8wfrzBDmTwKpkr2gDcaUaK4Crl6UO
                0VmAq2mCYD33YKRpkQVK90KWXa/l/Mpdkzh+awB8NlP9BGtL42KCYexup9fHWz9k
                b3FZl1rp5YqC3v+Rs0VTgyqYkFKNEZLHllr9Fyky8u6yc1toxu1tNnFryRzkLJ9u
                4qkbZtdGs4VP25TshOR+Tr/OprZHuOgkOXYTAzb72YtzVL73W4E102eXLdCPXaDo
                HmnHO13byGkk5nd+cs5P0TTkWZpn9BI/28XAzawKlWCPN8ufSl2GVKibbF5et1j3
                +mJoSNFei9/ofoGLLZmR+NnYsm3Opb+osimHEDzZy7SbgpqImmotzD9GK7sCAwEA
                AaOCAjswggI3MA4GA1UdDwEB/wQEAwIFoDATBgNVHSUEDDAKBggrBgEFBQcDATAd
                BgNVHQ4EFgQUgJN4zoXGa50MYlQLPMxHzALe54MwHwYDVR0jBBgwFoAU2tWtHk88
                y/Pvu+U+Y9ojb8kjn4EwgekGA1UdHwSB4TCB3jCB26CB2KCB1YaB0mxkYXA6Ly8v
                Q049RGF2aXZpZW5kYSUyMENvc3RhJTIwUmljYSUyMENBLENOPUNSU0pDRTAxMDAw
                M1dEQyxDTj1DRFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
                ZXMsQ049Q29uZmlndXJhdGlvbixEQz1kYXZpdmllbmRhY3IsREM9Y29tP2NlcnRp
                ZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmli
                dXRpb25Qb2ludDCB1QYIKwYBBQUHAQEEgcgwgcUwgcIGCCsGAQUFBzAChoG1bGRh
                cDovLy9DTj1EYXZpdmllbmRhJTIwQ29zdGElMjBSaWNhJTIwQ0EsQ049QUlBLENO
                PVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZpZ3Vy
                YXRpb24sREM9ZGF2aXZpZW5kYWNyLERDPWNvbT9jQUNlcnRpZmljYXRlP2Jhc2U/
                b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1dGhvcml0eTAMBgNVHRMBAf8EAjAA
                MA0GCSqGSIb3DQEBCwUAA4IBAQAH9rM1Lkych+a9aEjmjphHOOuu6bnu2jkVJlHP
                CWNTjZ9nApYqEi1t+9LZQcMxsZanJu3peVW4c/tiig3M1m46sHbLD/RkD0IDA15m
                7K3l8w0ThzPwHXkmMJWnd5fV+oz3s/ojWXpKjT1kZDnQClYR5XGbJoClBQ2fddzf
                2sDlnOKVv/axslqLuk/hl5qKaNTDpx16XWcggx/tR45srhYnRGB9Jl3jRSZ9s0Ws
                G7MH6MukTxTgnwrj+aevLuWm07t6w8VrwB7ys9laShxPLV+jUIhRRM5AwvQMFtyc
                mzCwKkGHCmPP1h856QNeE5VYpxCqt567OPITVU5OnpDxfngc
                -----END PUBLIC KEY-----`
        //         credencial : `-----BEGIN PUBLIC KEY-----
        //         MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi0/ajmKQ6P3+lInTZvRp
        //         l8NBxUikVzz1ZaqJVlW6cy6rXkms2TYwawHJp6Uat4VoMj7+jCFxs7daOcQOLWA2
        //         6KMKP+C8uSzdy6tgKN/CwkalDPU/+kC/ImEHwa7i3FFnXsBeJN5Md7my0MOhqYR6
        //         vpiGtFu99YvRzBkOsj53ZT7Fya/EgEFrAmudfnNg7BmALO0lgXUKwGBZbg5h4pSk
        //         ss06SQdNwvrpC0dRBBnww0nOXQmnEljNIfcJ1kCXyYO3GKVNkyzW+gQCpkB+xPxM
        //         4+m4WWo93xKbI9SOXaIxhDu19Y5V7cbm2BunVaIvTNAtQuoamUN3arfg3d9mO8/y
        //         BQIDAQAB
        //   -----END PUBLIC KEY-----`
            }
        }
    },
    VIN006: {
        status: 1,
        payload: {}
    }
};
