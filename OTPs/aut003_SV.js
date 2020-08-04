module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTU0NzAwNzYsImV4cCI6MTU0NjkxOTY3NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0._A7pY7lDS3-43R68XFLPUSspUVmyi9fleksPzLifcqI',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE017',
        CRE017: 'CRE011'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"1",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"SV",
            "zona": true
        }
    },
    CRE017: {
        "clientId": "af85aa00-745b-11ea-8cb2-ef056eaa4eba",
        "message": "MSG_CRE_001",
        "payload": {
            "cuentas": [{
                "valAliasProducto": "1 CUENTAS DE AHORRO MOVIL",
                "valCodigoProducto": "CAMO",
                "valCodigoSubProducto": "CAHC",
                "valNumeroProducto": "777977006586"
            }, {
                "valAliasProducto": "2 CUENTAS DE AHORRO MOVIL",
                "valCodigoProducto": "CAMO",
                "valCodigoSubProducto": "CAHC",
                "valNumeroProducto": "777977006586"
            }, {
                "valAliasProducto": "3 CUENTAS DE AHORRO MOVIL",
                "valCodigoProducto": "CAMO",
                "valCodigoSubProducto": "CAHC",
                "valNumeroProducto": "777977006586"
            }, {
                "valAliasProducto": " 4 CUENTAS DE AHORRO MOVIL",
                "valCodigoProducto": "CAMO",
                "valCodigoSubProducto": "CAHC",
                "valNumeroProducto": "777977006586"
            }]
        },
        "status": 1,
        "stepId": "CRE011"
    },
    CRE011: {
        "clientId": "af85aa00-745b-11ea-8cb2-ef056eaa4eba",
        "message": "MSG_CRE_001",
        "payload": {
            "cuenta": {
                "valCodigoProducto": 'AAAAAAAA',
                "valCodigoSubProducto": 'BBBBBBB',
                "valAliasProducto": 'CCCCC',
                "valNumeroProducto": 'DDDDDDD'
            },
            "SV": {
                "CARTA_COMUNICACIONES_CRONOGRAMA_PAGOS": {
                    "cantidadCuotasMensuales": "12",
                    "cantidadTotalPagar": " 1,000.00",
                    "codCiudad": "1",
                    "codDepartamento": "1",
                    "comisionSinIVA": "",
                    "codMunicipio": "",
                    "codPais": "SV",
                    "comisionDesembolso": "56.50",
                    "comisionMasIVA": "6.50",
                    "cuotaCapitalIntereses": " 90.00",
                    "cuotaDetalleSeguros": ".60",
                    "cuotaTotal": " 91.00",
                    "desembolso": "1000",
                    "destinoMontoAprobado": "GASTOS PERSONALES",
                    "fechaActual": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "VEINTE",
                        "diaFechaActual": "VEINTICUATRO",
                        "fechaActual": "24-06-2020",
                        "mesFechaActual": "junio"
                    },
                    "montoACobrarHasta": "2.50",
                    "montoOtorgadoMinimo": "225.00",
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    },
                    "numCuotaTotal": "12",
                    "numeroCuentaFormaRetiro": "",
                    "numRemanenteAbonar": "943.50",
                    "numSeguros": ".60",
                    "numSumaCapital": "1,000.00",
                    "numSumaCuotas": "1,099.28",
                    "numSumaIntereses": "92.08",
                    "numSumaSeguros": "7.20",
                    "plazo": 12,
                    "plazoCuotasMensuales": "",
                    "referenciaDeCredito": "",
                    "tablaAmortizacion": [{
                        "numCuota": "1",
                        "fecFechaPago": "09/06/2021",
                        "valCapitalPago": "76.96",
                        "valInteresesPago": "14.01",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "2",
                        "fecFechaPago": "09/07/2021",
                        "valCapitalPago": "78.45",
                        "valInteresesPago": "12.52",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "3",
                        "fecFechaPago": "09/08/2021",
                        "valCapitalPago": "79.13",
                        "valInteresesPago": "11.84",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "4",
                        "fecFechaPago": "09/09/2021",
                        "valCapitalPago": "80.24",
                        "valInteresesPago": "10.73",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "5",
                        "fecFechaPago": "09/10/2021",
                        "valCapitalPago": "81.68",
                        "valInteresesPago": "9.29",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "6",
                        "fecFechaPago": "09/11/2021",
                        "valCapitalPago": "82.51",
                        "valInteresesPago": "8.46",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "7",
                        "fecFechaPago": "09/12/2021",
                        "valCapitalPago": "83.90",
                        "valInteresesPago": "7.07",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "8",
                        "fecFechaPago": "09/01/2022",
                        "valCapitalPago": "84.84",
                        "valInteresesPago": "6.13",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "9",
                        "fecFechaPago": "09/02/2022",
                        "valCapitalPago": "86.03",
                        "valInteresesPago": "4.94",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "10",
                        "fecFechaPago": "09/03/2022",
                        "valCapitalPago": "87.60",
                        "valInteresesPago": "3.37",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "11",
                        "fecFechaPago": "09/04/2022",
                        "valCapitalPago": "88.47",
                        "valInteresesPago": "2.50",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "12",
                        "fecFechaPago": "09/05/2022",
                        "valCapitalPago": "90.19",
                        "valInteresesPago": "1.22",
                        "valMontoSeguro": ".60",
                        "valTotalCuota": "92.01"
                    }],
                    "tasaInteresEfectivaAnual": "31.57",
                    "tasaInteresEfectivaAnualTexto": "TREINTAPUNTO UN PUNTO CINCUENTA Y SIETE",
                    "tasaInteresesNominalMensual": "DIECISEIS PUNTO CINCUENTA",
                    "tasaInteresNominalAnual": "16.5",
                    "tasaInteresNominalAnualTexto": "DIECISEIS PUNTO CINCUENTA"
                },
                "CLAUSULA_ESTIPULACIONES_JUDICIALES": {
                    "codCiudad": "1",
                    "codMunicipio": "",
                    "fechaActual": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "VEINTE",
                        "diaFechaActual": "UNO",
                        "fechaActual": "01-04-2020",
                        "mesFechaActual": "abril"
                    },
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    }
                },
                "CONTRATO_DE_CREDITO_MOVIL": {
                    "cantidadCuotasMensuales": "DOCE",
                    "codCiudad": "1",
                    "codDepartamento": "1",
                    "comisionSinIVA": "50.00",
                    "comisionUSD": "CINCUENTA",
                    "cuotaTotalMensual": "NOVENTA Y UN PUNTO CINCUENTA Y SIETE",
                    "desembolso": "UN MIL",
                    "destinoCredito": "GASTOS PERSONALES",
                    "direccion": "asd",
                    "dui": "CERO TRES SEIS SIETE CINCO NUEVE DOS OCHO NUEVE",
                    "edadActualAnios": "TREINTA Y TRES",
                    "edadActualMeses": "2",
                    "fechaActual": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "VEINTE",
                        "diaFechaActual": "UNO",
                        "fechaActual": "01-04-2020",
                        "mesFechaActual": "abril"
                    },
                    "finalidadPrestamo": "GASTOS PERSONALES",
                    "impuestoTransferenciaMueblesBienes": "CERO PUNTO CERO CERO",
                    "interesSaldoMora": "CINCO",
                    "ivaUSD": "6.50",
                    "montoACobrarHasta": "2.50",
                    "montoOtorgadoMinimo": "225.00",
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    },
                    "numeroCuenta": "",
                    "pagarDiaMes": "UN",
                    "pagoInteresesAbonoCapital": "NOVENTA PUNTO NOVENTA Y SIETE",
                    "pagoSeguroVida": "125.00",
                    "plazoSolicitado": 12,
                    "porcentajeTasaReferenciaMes": "NUEVE PUNTO CINCO",
                    "profesion": "ABOG",
                    "tasaInteresEfectivaAnual": "31.57",
                    "tasaInteresEfectivaAnualTexto": "TREINTAPUNTO UN PUNTO CINCUENTA Y SIETE",
                    "tasaInteresNominalAnual": "16.5",
                    "tasaInteresNominalAnualTexto": "DIECISEIS PUNTO CINCUENTA",
                    "tasaReferenciaMes": "DIECISEIS  PUNTO CINCO",
                    "valorSolicitado": 1000
                },
                "DECLARACION_DE_ASEGURABILIDAD": {
                    "codCiudad": "1",
                    "dui": "036759289",
                    "empresa": {
                        "cargo": "",
                        "direccion": "",
                        "fechaIngreso": "1999-10-10",
                        "nombre": "1"
                    },
                    "fecFechaFinSeguro": "01 de noviembre de 2020",
                    "fecFechaInicioSeguro": "01 de noviembre de 2019",
                    "nacimiento": {
                        "codCiudad": "",
                        "codEstado": "",
                        "codMunicipio": "",
                        "codPais": "SV",
                        "edadActualAnios": "33",
                        "edadActualMeses": "2",
                        "fecha": "1987-01-15",
                        "fechaActual": {
                            "anioFechaActual": "2020",
                            "aniocortoFechaActual": "VEINTE",
                            "diaFechaActual": "UNO",
                            "fechaActual": "01-04-2020",
                            "mesFechaActual": "abril"
                        },
                        "lugar": "",
                        "nacionalidad": "SV",
                        "otraNacionalidad": ""
                    },
                    "nit": "06031501871014",
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    },
                    "plazoSolicitado": "DOCE",
                    "telefonoResidencia": " 78511545",
                    "tipoCredito": "GASTOS PERSONALES",
                    "valorSolicitado": 1000,
                    "vigenciaPolizaAnio": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "VEINTE",
                        "diaFechaActual": "UNO",
                        "fechaActual": "01-04-2020",
                        "mesFechaActual": "abril"
                    }
                },
                "DECLARACION_JURADA": {
                    "codActividadEconomica": "0001",
                    "codOrigenPrincipal": '',
                    "montoAbono": "",
                    "montoAbonoEfectivo": "",
                    "montoRetiro": "",
                    "montoRetiroEfectivo": "",
                    "primerApellido": "MAGANA",
                    "primerNombre": "CRISTINA",
                    "segundoApellido": "CEA",
                    "segundoNombre": "DEL CARMEN"
                },
                "LHC": {
                    "dui": "036759289",
                    "nit": "06031501871014",
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    },
                    "tieneLhc": true
                },
                "SOLICITUD_CREDITO": {
                    "cuotaMensual": "91.57",
                    "plazoSolicitado": 12,
                    "valorSolicitado": 1000
                }
            },
            "esCliente": true,
            "esFatca": false
        },
        "status": 1,
        "stepId": "CRE011"
    },
};
