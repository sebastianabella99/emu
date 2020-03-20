module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'AUT001',
        AUT001: 'AUT002',
        AUT002: 'VIN006'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado":"LM",
            "canal":"1",
            "idModulo":"MNUING",
            "lenguaje":"ES",
            "pais":"SV"
        }
    },
    AUT001: {
        status: 1,
        payload: {
            esCliente: false,
                esFatca: false,
                SV: {
                    CARGO_CUENTA_CASO_MORAL: {
                        duiCliente: "003002768",
                        fechaActual: {
                            anioFechaActual: "2020",
                            aniocortoFechaActual: "20",
                            diaFechaActual: "24",
                            fechaActual: "2020-02-24T15:36:45-06:00",
                            mesFechaActual: "2"
                        },
                        nombres: {
                            primerApellido: "HUEZO",
                            primerNombre: "LILIAN",
                            segundoApellido: "CACERES",
                            segundoNombre: "ESTER"
                        },
                        numeroCuenta: ""
                    },
                    CONTRATO_BANCA_ELECTRONICA: {
                        codCiudad: "14",
                        codDepartamento: "06",
                        codMunicipio: "",
                        direccion: "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                        dui: "003002768",
                        edad: 66,
                        fechaActual: {
                            anioFechaActual: "2020",
                            aniocortoFechaActual: "20",
                            diaFechaActual: "24",
                            fechaActual: "2020-02-24T15:36:45-06:00",
                            mesFechaActual: "2"
                        },
                        nombres: {
                            primerApellido: "HUEZO",
                            primerNombre: "LILIAN",
                            segundoApellido: "CACERES",
                            segundoNombre: "ESTER"
                        },
                        numeroDocumento: "003002768",
                        profesion: "JUB"
                    },
                    CONTRATO_CUENTA_AHORROS: {
                        "beneficiarios": {
                            "nombres": [
                                "Chars",
                                "miau"
                            ],
                            parentescos: [
                                [{
                                    value: "3",
                                    label: "HIJO"
                                }],
                                [{
                                    value: "5",
                                    label: "ABUELA"
                                }]
                            ],
                            "porcentajes": [
                                "50",
                                "50"
                            ]
                        },
                        contratoFinDiasHabiles: "5",
                        direccion: "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                        fechaActual: {
                            anioFechaActual: "2020",
                            aniocortoFechaActual: "20",
                            diaFechaActual: "24",
                            fechaActual: "2020-02-24T15:36:45-06:00",
                            mesFechaActual: "2"
                        },
                        montosComisionesCargos: [{
                                valComision: "Cobro al emisor por cada cheque rechazado",
                                valDescripcion: "Recargo al emisor de cheques por falta de fondos, firma no valida, etc. El cobro de dicho recargo procederá sólo si se aplica al emisor del cheque no pagado por causa atribuible a él, sin que su cobro deba trasladarse al beneficiario del mismo.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Membresía de tarjeta de débito o Acceso a servicios de canales electrónicos.",
                                valDescripcion: "Comisión por acceso a red de establecimientos afiliados en el país y en el exterior para pago de bienes y servicios, kioscos electrónicos, servicios de banca por teléfono denominada IVR, así como acceso a servicios varios de asistencia contratados con un tercero, según los términos de esa contratación.",
                                valTarifaCobro: "1.00"
                            },
                            {
                                valComision: "Reposición de tarjeta de débito por destrucción o extravío.",
                                valDescripcion: "Comisión por la emisión de una nueva tarjeta de débito en caso de reposición por extravío, hurto, robo, daño o destrucción u otros motivos no imputables al emisor.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Retiro de Efectivo de cuenta de depósito, Acceso electrónico a Fondos de línea de crédito o retiro en ventanilla sin previo aviso, Acceso electrónico a adelanto salarial en cualquier medio electrónico disponible y retiro en ventanilla, consulta de saldo, cambio de PIN e Impresión de estado de cuenta en cajero automático Davivienda Salvadoreño.",
                                valDescripcion: "Comisión por transacciones con tarjeta de débito en cajeros automáticos del Banco ubicados en el recinto de la agencia (Incluye los autobancos) a partir de la 5ta. transacción y fuera del recinto de la agencia desde la primera transacción. | Los cajeros del Banco ubicados fuera de las agencias, es decir centros comerciales, tiendas de conveniencia, etc., se cobre desde la primera transacción 1Comisión por transacciones con tarjeta de débito del Banco, retiro de efectivo de cuenta de depósito, consulta de saldo, cambio de pin y acceso electrónico a Fondos de línea de crédito o Adelanto Salarial.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Operaciones en cajeros automáticos fuera de red Davivienda Salvadoreño",
                                valDescripcion: "Comisión a todas aquellas tarjetas de débito que efectúan transacciones en cajeros automáticos ajenos al banco en el territorio nacional e internacional.",
                                valTarifaCobro: "3.00"
                            },
                            {
                                valComision: "Liberación de fondos en compensación local",
                                valDescripcion: "Liberación de fondos en compensación local\tComisión por el servicio de anticipo de fondos sobre cheques en proceso de cobro, emitidos por instituciones salvadoreñas autorizadas para tal efecto por la Superintendencia del Sistema Financiero.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Liberación de fondos en compensación extranjera",
                                valDescripcion: "Es el pago aplicado por cada evento en el cliente solicita copia de un comprobante de compra por considerar que es una operación que no le corresponde. El cobro aplica cuando la transacción fue efectivamente realizada por el cliente.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Servicio de Banca por Internet Banc@ Personal y Banc@ Pyme",
                                valDescripcion: "Comisión por el servicio de sistema de banca electrónica que incluye consultas y transacciones a través de internet",
                                valTarifaCobro: "1.00"
                            },
                            {
                                valComision: "Manejo de saldo mínimo mensual menor a USD50.00 para personas naturales y USD75.00 para personas jurídicas en cuentas corrientes y de ahorros y por saldo menor a USD500.00 en cuenta de ahorro Plazo Flexible.",
                                valDescripcion: "Comisión por manejo de cuentas cuando el saldo de la misma sea menor al mínimo establecido por el Banco y las leyes correspondientes.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Por trámite de devolución de giros, cheques extranjeros y otros instrumentos internacionales rechazados",
                                valDescripcion: "Certificación de cheques: Comisión por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y que han sido reservados específicamente hasta su cobro. Emisión de cheque de caja o de gerencia: Comisión por elaboración y emisión de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra lo siguiente: Costos de materiales, elaboración, atención y controles operativos.",
                                valTarifaCobro: "3.00"
                            },
                            {
                                valComision: "Certificación de cheques, emisión de cheques de caja o de gerencia",
                                valDescripcion: "Certificación de cheques: comisión por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y han sido reservados específicamente hasta su cobro. emisión de cheque de caja o de gerencia : Comisión por elaboración y emisión de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra los siguiente: Costos de materiales, elaboración,atención y controles operativos",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Remesas con cheques del exterior",
                                valDescripcion: "Comisión por servicio de gestión de cobro de cheques emitidos en el exterior y depositados a cuentas del banco.",
                                valTarifaCobro: "3.00"
                            },
                            {
                                valComision: "Por trámite de devolución de giros, cheques extranjeros, y otros instrumentos internacionales rechazados",
                                valDescripcion: "Comisión por servicio de gestión de cobro de cheques emitidos en el exterior y depositados a cuenta del banco",
                                valTarifaCobro: "3.00"
                            },
                            {
                                valComision: "Cargos a cuenta por cobro de servicios y pagos diversos, exceptuando el cargo por venta de chequera",
                                valDescripcion: "Comisión por servicio proporcionado a clientes que solicitan que el Banco realice pagos a terceros con cargo a la cuenta del cliente.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Conteo de moneda fraccionaria y billete (para clientes comerciales de alto volumen y servicio requerido por el cliente), siempre que no sea con el objetivo de realizar un pago o depósito.",
                                valDescripcion: "Comisión por conteo de efectivo directamente en agencias para clientes comerciales de alto volumen, servicio requerido por el cliente.",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Por emisión de constancias a requerimiento del consumidor.",
                                valDescripcion: "Comisión por emisión de documentos solicitados por el cliente.",
                                valTarifaCobro: "1.00"
                            },
                            {
                                valComision: "Transferencias:Orden entrante del exterior, abono a cuenta Davivienda",
                                valDescripcion: "Comisión por el servicio de recibir fondos procedentes de cualquier país de cualquier país a través de bancos corresponsales para ser transferidos a cuentas Davivienda",
                                valTarifaCobro: "1.00"
                            },
                            {
                                valComision: "Transferencias salientes al exterior",
                                valDescripcion: "Comisión por servicio de envío de fondos a un beneficiario en el extranjero a través de bancos corresponsales",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Copia de voucher o comprobantes de compra con tarjetas de débito",
                                valDescripcion: "Es el pago aplicado por cada evento en el cliente solicita copia de un comprobante de compra por considerar que es una operación que no le corresponde. El cobro aplica cuando la transacción fue efectivamente realizada por el cliente.",
                                valTarifaCobro: "1.00"
                            },
                            {
                                valComision: "Certificación de cheques, emisión de cheques de caja o de gerencia",
                                valDescripcion: "Certificación de cheques: comisión por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y han sido reservados específicamente hasta su cobro. emisión de cheque de caja o de gerencia : Comisión por elaboración y emisión de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra los siguiente: Costos de materiales, elaboración,atención y controles operativos",
                                valTarifaCobro: "2.00"
                            },
                            {
                                valComision: "Remesas con cheques del exterior",
                                valDescripcion: "Comisión por servicio de gestión de cobro de cheques emitidos en el exterior y depositados a cuenta del banco",
                                valTarifaCobro: "3.00"
                            }
                        ],
                        nit: "06141611530080",
                        noComisionSaldoInferior: "0.00",
                        nombres: {
                            primerApellido: "HUEZO",
                            primerNombre: "LILIAN",
                            segundoApellido: "CACERES",
                            segundoNombre: "ESTER"
                        },
                        numeroCuenta: "",
                        numeroDocumento: "003002768",
                        profesion: "JUB",
                        tasasInteres: [{
                                valDescripcion: "Por la porción de saldo sobre $ 500,000.01",
                                valPorcentaje: "2.25%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 340,000.01 a $ 500,000.00",
                                valPorcentaje: "3.25%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 120,000.01 a $ 340,000.00",
                                valPorcentaje: "0.50%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 60,000.01 a $ 120,000.00",
                                valPorcentaje: "0.10%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 20,000.01 a $ 60,000.00",
                                valPorcentaje: "3.26%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 5,000.01 a $ 20,000.00",
                                valPorcentaje: "1.00%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 2,000.01 a $ 5,000.00",
                                valPorcentaje: "0.05%"
                            },
                            {
                                valDescripcion: "Por la porción de saldo entre $ 0.01 a $ 2,000.00",
                                valPorcentaje: "2.29%"
                            },
                            {
                                valDescripcion: "Cuentas de ahorro inactivas",
                                valPorcentaje: "2.29%"
                            }
                        ]
                    },
                    DECLARACION_JURADA: {
                        codActividadEconomica: "Empleado",
                        codOrigenPrincipal: "",
                        montoAbono: "1",
                        montoAbonoEfectivo: "1",
                        montoRetiro: "1",
                        montoRetiroEfectivo: "1",
                        otroOrigen: "",
                        primerApellido: "HUEZO",
                        primerNombre: "LILIAN",
                        segundoApellido: "CACERES",
                        segundoNombre: "ESTER"
                    },
                    FORMULARIO_VINCULACION: {
                        datosPersonales: {
                            1: "x",
                            6: "",
                            7: "",
                            direccionPersonal: {
                                barrio: "",
                                codCiudad: "14",
                                codDepartamento: "06",
                                codMunicipio: "",
                                codPais: "SV",
                                condicionVivienda: "",
                                direccionPersonal: "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                                esPrincipal: false,
                                mensualidadVivienda: "",
                                referencia: "",
                                telefonoCelular: "79223902",
                                tiempoHabitado: "",
                                tipoDireccion: "01"
                            },
                            documento: {
                                expedicion: null,
                                lugarExpedicion: ",  .",
                                numeroDocumento: "003002768",
                                otroNumero: "",
                                tipoDocumento: "D",
                                tipoDui: "X",
                                tipoPasaporte: " ",
                                vencimiento: "2026-11-22T00:00:00-06:00"
                            },
                            email: "rocio.huezo@davivienda.com.sv",
                            estadoCivil: "1",
                            genero: "F",
                            nacimiento: {
                                ciudadNacimiento: "",
                                codEstadoNacimiento: "",
                                codMunicipioNacimiento: "",
                                codPaisNacimiento: "SV",

                                lugar: "",
                                nacionalidad: "SV",
                                otraNacionalidad: ""
                            },
                            nombreConyugue: "",
                            nombres: {
                                primerApellido: "HUEZO",
                                primerNombre: "LILIAN",
                                segundoApellido: "CACERES",
                                segundoNombre: "ESTER"
                            },
                            personasDependen: "",
                            sexoF: "X",
                            sexoM: "",
                            telefonoResidencia: {
                                numeroFijo: "",
                                numeroCelular: "79223902"
                            },
                            a1: "",
                            a2: "",
                            a3: "",
                            a5: "",
                            tipoOperacionImportacion: "",
                            tipoOperacionOtro: "",
                            tipoOperacionPagoServicios: "",
                            tipoOperacionGiro: "",
                            tipoOperacionExportacion: "",
                            tipoOperacionInversion: "",
                            tipoOperacionDivisas: "",
                            tipoOperacionPrestamo: "",
                            tipoOperacionRemesa: "",
                            tipoOperacionProducto: ""
                        },
                        esFatcaNo: "X",
                        esFatcaSi: " ",
                        fechaActual: {
                            anioFechaActual: "2020",
                            aniocortoFechaActual: "20",
                            diaFechaActual: "24",
                            fechaActual: "04-03-2020",
                            mesFechaActual: "2"
                        },
                        informacionFinanciera: {
                            ingresosFijos: "",
                            ingresosMensuales: "",
                            ingresosVariables: "",
                            origenIngresos: "",
                            origenOtrosIngresos: "",
                            otraFuenteIngresos: "",
                            totalGastosMensuales: "",
                            valorTotalBienes: "",
                            valorTotalDeudas: ""
                        },
                        informacionLaboral: {
                            actividadEconomica: "1",
                            codEstadoLaboral: "",
                            codMunicipioLaboral: "01",
                            codPaisLaboral: "",
                            direccionLaboral: "",
                            empresa: {
                                cargo: "",
                                fechaIngreso: "",
                                nombre: "",
                                telefono: {
                                    extension: "",
                                    indicativo: "",
                                    numero: ""
                                }
                            },
                            profesion: "JUB"
                        },
                        informacionPersonasPoliExp: {
                            esPoliticamenteExpuesto: false,
                            esPoliticamenteExpuestoNo: "X",
                            esPoliticamenteExpuestoSi: " ",
                            esRepresentanteLegal: false,
                            esRepresentanteLegalNo: "X",
                            esRepresentanteLegalSi: " ",
                            nombreConyugeEsPep: "",
                            numeroCuenta: "",
                            numeroDocumentoPep: "",
                            operacionesInternacionales: {
                                beneficiarioPrincipal: "",
                                codPaisDestino: "AS",
                                nombreBancoDestino: "",
                                numeroCuentaOperacionesInternacionales: "",
                                otroTipoOperacion: "",
                                tipoMoneda: "",
                                tipoOperacion: "",
                                tipoOperacionDivisas: "",
                                tipoOperacionExportacion: "",
                                tipoOperacionGiro: "",
                                tipoOperacionImportacion: "",
                                tipoOperacionInversion: "",
                                tipoOperacionOtro: "X",
                                tipoOperacionPagoServicios: "",
                                tipoOperacionPrestamo: "",
                                tipoOperacionProducto: "",
                                tipoOperacionRemesa: "",
                                totalRealiza: ""
                            },
                            operacionesInternacionalesNo: "X",
                            operacionesInternacionalesSi: " ",
                            parentesco: "7",
                            parentescoEsPep: false,
                            parentescoEsPepNo: "X",
                            parentescoEsPepSi: " ",
                            productosExtrangero: {
                                codCiudadProductosExtrangero: "",
                                codDepartamentoProductosExtrangero: "",
                                codPaisProductosExtrangero: "AS",
                                monto: "xx",
                                nombreBanco: "xx",
                                numeroProducto: "xx",
                                tipoMonedaProductosExtrangero: "xx",
                                tipoProducto: "xx"
                            },
                            productosExtrangeroNo: "X",
                            productosExtrangeroSi: " ",
                            reconocimientoPublico: false,
                            reconocimientoPublicoNo: "X",
                            reconocimientoPublicoSi: " ",
                            tieneCaracteristicasPep: false,
                            tieneCaracteristicasPepNo: "X",
                            tieneCaracteristicasPepSi: " ",
                            tipoDocumentoPep: "",
                            tipoDocumentoPepDui: "X",
                            tipoDocumentoPepPasaporte: " "
                        }
                    },
                    FORMULARIO_W9: {
                        clasificacionTributaria: "",
                        codCiudad: "",
                        codEstado: "",
                        codigoBenExe: "",
                        codigoExeDeclFatca: "",
                        direccion: {
                            codigoPais: "SV",
                            codigoDepartamento: "6",
                            codigoCiudad: "14",
                            codigoMunicipio: "",
                            barrio: "",
                            referencia: "",
                            tipo: "01",
                            direccion: "COL.SAN MATEO AV.LA PAZ BLK.C NO.18SAN SALVADOR S.S.LVADOR S.S.",
                            esPrincipal: false,
                            condicionVivienda: "",
                            tiempoHabitado: "",
                            mensualidadVivienda: ""
                        },
                        empresa: {
                            codEstado: "",
                            codigoPostal: "",
                            direccion: "",
                            nombre: ""
                        },
                        fechaActual: {
                            anioFechaActual: "2020",
                            aniocortoFechaActual: "20",
                            diaFechaActual: "24",
                            fechaActual: "2020-02-24T15:36:45-06:00",
                            mesFechaActual: "2"
                        },
                        nombres: {
                            primerApellido: "HUEZO",
                            primerNombre: "LILIAN",
                            segundoApellido: "CACERES",
                            segundoNombre: "ESTER"
                        },
                        numTinCasilla1: "",
                        numTinCasilla2: "",
                        numTinCasilla3: "",
                        numTinCasilla4: "",
                        numTinCasilla5: "",
                        numTinCasilla6: "",
                        numTinCasilla7: "",
                        numTinCasilla8: "",
                        numTinCasilla9: "",
                        numeroCuenta: "",
                        numeroDocumento: "003002768",
                        tin: "",
                        ct2: "",
                        ct3: "",
                        ct4: ""
                    }
                },
                codigoVendedor: [{ label: '2', value: '2' }]
        }
    },
    AUT002: {
        status: 1,
        payload: {
            codigoVendedor: [{ label: '2', value: '2'}],
            SV: {},
            PA: {},
            CR: {},
            HN: {},
            sv: {},
            hn: {},
            cr: {},
            pa: {}
        }
    },
    VIN006: {
        status: 1,
        payload: {}
    }
};
