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
            "pais":"SV",
            "zona": true
        }
    },
    CRE011: {
        status: 1,
        payload: {
            cuentas: [{
                valCodigoProducto: 'HCL',
                valCodigoSubProducto: 'HCL002',
                valNumeroProducto: '0000012345'
            }],
            SV: {
                CONTRATO_DE_CREDITO_MOVIL: {
                    cantidadCuotasMensuales: 'ss',
                    codCiudad: 'ss',
                    comisionSinIVA: '312',
                    comisionUSD: '99999999999999999',
                    cuotaTotalMensual: 'ss',
                    desembolso: 'ss',
                    destinoCredito: '',
                    direccion: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
                    dui:'AAAAAAAAAAAAAAAAAAAAAA',
                    edadActualAnios: '29',
                    edadActualMeses: '2',
                    fechaActual: {
                      anioFechaActual: 'XXXX',
                      aniocortoFechaActual: 'XX',
                      diaFechaActual: 'C',
                      fechaActual: 'CC',
                      mesFechaActual: 'xXX',
                    },
                    finalidadPrestamo: 'ww',
                    impuestoTransferenciaMueblesBienes: 'dfdf',
                    interesSaldoMora: 'ww',
                    ivaUSD: '888888888888888',
                    nombres: {
                      primerApellido: 'sd'  ,
                      primerNombre: ' sdsd'  ,
                      segundoApellido: 'sdsd'  ,
                      segundoNombre: 'wee'
                    },
                    numeroCuenta: 'wwe',
                    pagarDiaMes: 'wee',
                    pagoInteresesAbonoCapital: 'wewe',
                    pagoSeguroVida: 'wewe',
                    plazoSolicitado: 'wewe',
                    porcentajeTasaReferenciaMes: 'weew',
                    profesion:'XXXXXXXXXXXXXXXXXXXXXX',	  
                    tasaInteresEfectivaAnual: 'wewe',
                    tasaInteresEfectivaAnualTexto: 'wewewe',
                    tasaInteresNominalAnual: 'www',
                    tasaInteresNominalAnualTexto: '222',
                    tasaReferenciaMes: 'ww',
                    valorSolicitado: 'eee'
                },
                "CONTRATO_BANCA_ELECTRONICA": {
                    "codCiudad": "14",
                    "codDepartamento": "6",
                    "codMunicipio": "",
                    "direccion": "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                    "dui": "003002768",
                    "edad": 66,
                    "fechaActual": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "20",
                        "diaFechaActual": "24",
                        "fechaActual": "2020-02-24T15:36:45-06:00",
                        "mesFechaActual": "2"
                    },
                    "nombres": {
                        "primerApellido": "HUEZO",
                        "primerNombre": "LILIAN",
                        "segundoApellido": "CACERES",
                        "segundoNombre": "ESTER"
                    },
                    "numeroDocumento": "003002768",
                    "profesion": "JUB"
                },
                "CONTRATO_CUENTA_AHORROS": {
                    "beneficiarios": {
                        "nombres": ['Ssergio', 'Rafael'],
                        "parentescos": ['YO', 'YO tambien'],
                        "porcentajes": [50, 50]
                    },
                    "contratoFinDiasHabiles": "5",
                    "direccion": "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                    "fechaActual": {
                        "anioFechaActual": "2020",
                        "aniocortoFechaActual": "20",
                        "diaFechaActual": "24",
                        "fechaActual": "2020-02-24T15:36:45-06:00",
                        "mesFechaActual": "2"
                    },
                    "montosComisionesCargos": [{
                            "valComision": "Cobro al emisor por cada cheque rechazado",
                            "valDescripcion": "Recargo al emisor de cheques por falta de fondos, firma no valida, etc. El cobro de dicho recargo procederÃ¡ sÃ³lo si se aplica al emisor del cheque no pagado por causa atribuible a Ã©l, sin que su cobro deba trasladarse al beneficiario del mismo.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "MembresÃ­a de tarjeta de dÃ©bito o Acceso a servicios de canales electrÃ³nicos.",
                            "valDescripcion": "ComisiÃ³n por acceso a red de establecimientos afiliados en el paÃ­s y en el exterior para pago de bienes y servicios, kioscos electrÃ³nicos, servicios de banca por telÃ©fono denominada IVR, asÃ­ como acceso a servicios varios de asistencia contratados con un tercero, segÃºn los tÃ©rminos de esa contrataciÃ³n.",
                            "valTarifaCobro": "1.00"
                        },
                        {
                            "valComision": "ReposiciÃ³n de tarjeta de dÃ©bito por destrucciÃ³n o extravÃ­o.",
                            "valDescripcion": "ComisiÃ³n por la emisiÃ³n de una nueva tarjeta de dÃ©bito en caso de reposiciÃ³n por extravÃ­o, hurto, robo, daÃ±o o destrucciÃ³n u otros motivos no imputables al emisor.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Retiro de Efectivo de cuenta de depÃ³sito, Acceso electrÃ³nico a Fondos de lÃ­nea de crÃ©dito o retiro en ventanilla sin previo aviso, Acceso electrÃ³nico a adelanto salarial en cualquier medio electrÃ³nico disponible y retiro en ventanilla, consulta de saldo, cambio de PIN e ImpresiÃ³n de estado de cuenta en cajero automÃ¡tico Davivienda SalvadoreÃ±o.",
                            "valDescripcion": "ComisiÃ³n por transacciones con tarjeta de dÃ©bito en cajeros automÃ¡ticos del Banco ubicados en el recinto de la agencia (Incluye los autobancos) a partir de la 5ta. transacciÃ³n y fuera del recinto de la agencia desde la primera transacciÃ³n. | Los cajeros del Banco ubicados fuera de las agencias, es decir centros comerciales, tiendas de conveniencia, etc., se cobre desde la primera transacciÃ³n 1ComisiÃ³n por transacciones con tarjeta de dÃ©bito del Banco, retiro de efectivo de cuenta de depÃ³sito, consulta de saldo, cambio de pin y acceso electrÃ³nico a Fondos de lÃ­nea de crÃ©dito o Adelanto Salarial.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Operaciones en cajeros automÃ¡ticos fuera de red Davivienda SalvadoreÃ±o",
                            "valDescripcion": "ComisiÃ³n a todas aquellas tarjetas de dÃ©bito que efectÃºan transacciones en cajeros automÃ¡ticos ajenos al banco en el territorio nacional e internacional.",
                            "valTarifaCobro": "3.00"
                        },
                        {
                            "valComision": "LiberaciÃ³n de fondos en compensaciÃ³n local",
                            "valDescripcion": "LiberaciÃ³n de fondos en compensaciÃ³n local\tComisiÃ³n por el servicio de anticipo de fondos sobre cheques en proceso de cobro, emitidos por instituciones salvadoreÃ±as autorizadas para tal efecto por la Superintendencia del Sistema Financiero.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "LiberaciÃ³n de fondos en compensaciÃ³n extranjera",
                            "valDescripcion": "Es el pago aplicado por cada evento en el cliente solicita copia de un comprobante de compra por considerar que es una operaciÃ³n que no le corresponde. El cobro aplica cuando la transacciÃ³n fue efectivamente realizada por el cliente.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Servicio de Banca por Internet Banc@ Personal y Banc@ Pyme",
                            "valDescripcion": "ComisiÃ³n por el servicio de sistema de banca electrÃ³nica que incluye consultas y transacciones a travÃ©s de internet",
                            "valTarifaCobro": "1.00"
                        },
                        {
                            "valComision": "Manejo de saldo mÃ­nimo mensual menor a USD50.00 para personas naturales y USD75.00 para personas jurÃ­dicas en cuentas corrientes y de ahorros y por saldo menor a USD500.00 en cuenta de ahorro Plazo Flexible.",
                            "valDescripcion": "ComisiÃ³n por manejo de cuentas cuando el saldo de la misma sea menor al mÃ­nimo establecido por el Banco y las leyes correspondientes.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Por trÃ¡mite de devoluciÃ³n de giros, cheques extranjeros y otros instrumentos internacionales rechazados",
                            "valDescripcion": "CertificaciÃ³n de cheques: ComisiÃ³n por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y que han sido reservados especÃ­ficamente hasta su cobro. EmisiÃ³n de cheque de caja o de gerencia: ComisiÃ³n por elaboraciÃ³n y emisiÃ³n de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra lo siguiente: Costos de materiales, elaboraciÃ³n, atenciÃ³n y controles operativos.",
                            "valTarifaCobro": "3.00"
                        },
                        {
                            "valComision": "CertificaciÃ³n de cheques, emisiÃ³n de cheques de caja o de gerencia",
                            "valDescripcion": "CertificaciÃ³n de cheques: comisiÃ³n por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y han sido reservados especÃ­ficamente hasta su cobro. emisiÃ³n de cheque de caja o de gerencia : ComisiÃ³n por elaboraciÃ³n y emisiÃ³n de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra los siguiente: Costos de materiales, elaboraciÃ³n,atenciÃ³n y controles operativos",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Remesas con cheques del exterior",
                            "valDescripcion": "ComisiÃ³n por servicio de gestiÃ³n de cobro de cheques emitidos en el exterior y depositados a cuentas del banco.",
                            "valTarifaCobro": "3.00"
                        },
                        {
                            "valComision": "Por trÃ¡mite de devoluciÃ³n de giros, cheques extranjeros, y otros instrumentos internacionales rechazados",
                            "valDescripcion": "ComisiÃ³n por servicio de gestiÃ³n de cobro de cheques emitidos en el exterior y depositados a cuenta del banco",
                            "valTarifaCobro": "3.00"
                        },
                        {
                            "valComision": "Cargos a cuenta por cobro de servicios y pagos diversos, exceptuando el cargo por venta de chequera",
                            "valDescripcion": "ComisiÃ³n por servicio proporcionado a clientes que solicitan que el Banco realice pagos a terceros con cargo a la cuenta del cliente.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Conteo de moneda fraccionaria y billete (para clientes comerciales de alto volumen y servicio requerido por el cliente), siempre que no sea con el objetivo de realizar un pago o depÃ³sito.",
                            "valDescripcion": "ComisiÃ³n por conteo de efectivo directamente en agencias para clientes comerciales de alto volumen, servicio requerido por el cliente.",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Por emisiÃ³n de constancias a requerimiento del consumidor.",
                            "valDescripcion": "ComisiÃ³n por emisiÃ³n de documentos solicitados por el cliente.",
                            "valTarifaCobro": "1.00"
                        },
                        {
                            "valComision": "Transferencias:Orden entrante del exterior, abono a cuenta Davivienda",
                            "valDescripcion": "ComisiÃ³n por el servicio de recibir fondos procedentes de cualquier paÃ­s de cualquier paÃ­s a travÃ©s de bancos corresponsales para ser transferidos a cuentas Davivienda",
                            "valTarifaCobro": "1.00"
                        },
                        {
                            "valComision": "Transferencias salientes al exterior",
                            "valDescripcion": "ComisiÃ³n por servicio de envÃ­o de fondos a un beneficiario en el extranjero a travÃ©s de bancos corresponsales",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Copia de voucher o comprobantes de compra con tarjetas de dÃ©bito",
                            "valDescripcion": "Es el pago aplicado por cada evento en el cliente solicita copia de un comprobante de compra por considerar que es una operaciÃ³n que no le corresponde. El cobro aplica cuando la transacciÃ³n fue efectivamente realizada por el cliente.",
                            "valTarifaCobro": "1.00"
                        },
                        {
                            "valComision": "CertificaciÃ³n de cheques, emisiÃ³n de cheques de caja o de gerencia",
                            "valDescripcion": "CertificaciÃ³n de cheques: comisiÃ³n por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y han sido reservados especÃ­ficamente hasta su cobro. emisiÃ³n de cheque de caja o de gerencia : ComisiÃ³n por elaboraciÃ³n y emisiÃ³n de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra los siguiente: Costos de materiales, elaboraciÃ³n,atenciÃ³n y controles operativos",
                            "valTarifaCobro": "2.00"
                        },
                        {
                            "valComision": "Remesas con cheques del exterior",
                            "valDescripcion": "ComisiÃ³n por servicio de gestiÃ³n de cobro de cheques emitidos en el exterior y depositados a cuenta del banco",
                            "valTarifaCobro": "3.00"
                        }
                    ],
                    "nit": "06141611530080",
                    "noComisionSaldoInferior": "0.00",
                    "nombres": {
                        "primerApellido": "HUEZO",
                        "primerNombre": "LILIAN",
                        "segundoApellido": "CACERES",
                        "segundoNombre": "ESTER"
                    },
                    "numeroCuenta": "",
                    "numeroDocumento": "003002768",
                    "profesion": "JUB",
                    "tasasInteres": [{
                            "valDescripcion": "Por la porciÃ³n de saldo sobre $ 500,000.01",
                            "valPorcentaje": "2.25%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 340,000.01 a $ 500,000.00",
                            "valPorcentaje": "3.25%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 120,000.01 a $ 340,000.00",
                            "valPorcentaje": "0.50%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 60,000.01 a $ 120,000.00",
                            "valPorcentaje": "0.10%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 20,000.01 a $ 60,000.00",
                            "valPorcentaje": "3.26%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 5,000.01 a $ 20,000.00",
                            "valPorcentaje": "1.00%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 2,000.01 a $ 5,000.00",
                            "valPorcentaje": "0.05%"
                        },
                        {
                            "valDescripcion": "Por la porciÃ³n de saldo entre $ 0.01 a $ 2,000.00",
                            "valPorcentaje": "2.29%"
                        },
                        {
                            "valDescripcion": "Cuentas de ahorro inactivas",
                            "valPorcentaje": "2.29%"
                        }
                    ],
                    "codCiudad": "14",
                    "codDepartamento": "6",
                    "codMunicipio": "",
                },
                FORMULARIO_VINCULACION: {
                    informacionPersonasPoliExp: {
                        productosExtrangero: {
                            codCiudadProductosExtrangero: ''
                        }
                    }
                }
            }
        }
    }
};
