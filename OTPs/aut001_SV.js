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
    CUE003: {
        status: 1,
        payload: {}
    },
    AUT001: {
        status: 1,
        payload: {
			codigoVendedor: '',
            "SV": {
				"CARGO_CUENTA_CASO_MORAL": {
					"duiCliente": "022353615",
					"fechaActual": {
						"anioFechaActual": "2020",
						"aniocortoFechaActual": "VEINTE",
						"diaFechaActual": "SIETE",
						"fechaActual": "07-05-2020",
						"mesFechaActual": "mayo"
					},
					"nombres": {
						"primerApellido": "CASTILLO",
						"primerNombre": "WILLIAM",
						"segundoApellido": "PIMENTEL",
						"segundoNombre": "ANTONIO"
					},
					"numeroCuenta": ""
				},
				"CONTRATO_BANCA_ELECTRONICA": {
					"codCiudad": "AHUACHAPAN",
					"codDepartamento": "AHUACHAPAN",
					"codMunicipio": "AHUACHAPAN",
					"direccion": "COL. PROY HAB MANANTIALES COL. DE LA ESPERERANZA POLG. LA 4 AHUACHAPaNAHUACHAPaN",
					"dui": "022353615",
					"edad": 35,
					"fechaActual": {
						"anioFechaActual": "2020",
						"aniocortoFechaActual": "VEINTE",
						"diaFechaActual": "SIETE",
						"fechaActual": "07-05-2020",
						"mesFechaActual": "mayo"
					},
					"nombres": {
						"primerApellido": "CASTILLO",
						"primerNombre": "WILLIAM",
						"segundoApellido": "PIMENTEL",
						"segundoNombre": "ANTONIO"
					},
					"numeroDocumento": "022353615",
					"profesion": "EMPLEADO"
				},
				"CONTRATO_CUENTA_AHORROS": {
					"beneficiarios": {
						"nombres": [
							"sofia nicole castillo "
						],
						"parentescos": [
							"HIJO"
						],
						"porcentajes": [
							"100"
						]
					},
					"codCiudad": "1",
					"codDepartamento": "1",
					"codMunicipio": "1",
					"contratoFinDiasHabiles": "5",
					"direccion": "COL. PROY HAB MANANTIALES COL. DE LA ESPERERANZA POLG. LA 4 AHUACHAPaNAHUACHAPaN",
					"fechaActual": {
						"anioFechaActual": "2020",
						"aniocortoFechaActual": "VEINTE",
						"diaFechaActual": "SIETE",
						"fechaActual": "07-05-2020",
						"mesFechaActual": "mayo"
					},
					"montosComisionesCargos": [{
							"valComision": "Membresía de tarjeta de débito o Acceso a servicios de canales electrónicos.",
							"valDescripcion": "Comisión por acceso a red de establecimientos afiliados en el país y en el exterior para pago de bienes y servicios, kioscos electrónicos, servicios de banca por teléfono denominada IVR, así como acceso a servicios varios de asistencia contratados con un tercero, según los términos de esa contratación.",
							"valTarifaCobro": "Hasta $1.77 mensual, más IVA"
						},
						{
							"valComision": "Reposición de tarjeta de débito por destrucción o extravío.",
							"valDescripcion": "Comisión por la emisión de una nueva tarjeta de débito en caso de reposición por extravío, hurto, robo, daño o destrucción u otros motivos no imputables al emisor.",
							"valTarifaCobro": "$3.00 más IVA"
						},
						{
							"valComision": "Retiro de Efectivo de cuenta de depósito, Acceso electrónico a Fondos de línea de crédito o retiro en ventanilla sin previo aviso, Acceso electrónico a adelanto salarial en cualquier medio electrónico disponible, consulta de saldo, cambio de PIN e Impresión de estado de cuenta en cajero automático Davivienda Salvadoreño.",
							"valDescripcion": "Comisión por transacciones con tarjeta de débito en cajeros automáticos del Banco ubicados en el recinto de la agencia (Incluye los autobancos) a partir de la 5ta. transacción y fuera del recinto de la agencia desde la primera transacción.-  Los cajeros del Banco ubicados fuera de las agencias, es decir centros comerciales, tiendas de conveniencia, etc., se cobre desde la primera transacción-  Comisión por transacciones con tarjeta de débito del Banco, retiro de efectivo de cuenta de depósito, consulta de saldo, cambio de pin y acceso electrónico a Fondos de línea de crédito o Adelanto Salarial.",
							"valTarifaCobro": "Gratis las primeras 4 transacciones, $0.70 ctvs por cada operación adicional, más IVA. $0.70 ctvs por cada operación, más IVA. Acceso electrónico a Fondos de línea de crédito o retiro en ventanilla sin previo aviso y Acceso electrónico a adelanto salarial en cualquier medio electrónico disponible, 3% sobre el monto desembolsado retirado, mínimo $5.00"
						},
						{
							"valComision": "Operaciones en cajeros automáticos fuera de red Davivienda Salvadoreño",
							"valDescripcion": "Comisión a todas aquellas tarjetas de débito que efectúan transacciones en cajeros automáticos ajenos al banco en el territorio nacional e internacional.",
							"valTarifaCobro": "Hasta $4.00 por operación, más IVA."
						},
						{
							"valComision": "Liberación de fondos en compensación local",
							"valDescripcion": "Comisión por el servicio de anticipo de fondos sobre cheques en proceso de cobro, emitidos por instituciones salvadoreñas autorizadas para tal efecto por la Superintendencia del Sistema Financiero.",
							"valTarifaCobro": "Hasta 0.50% sobre monto, mínimo $5.00 más IVA"
						},
						{
							"valComision": "Liberación de fondos en compensación extranjera",
							"valDescripcion": "Comisión por el servicio de anticipo de fondos sobre cheques en proceso de cobro, emitidos por instituciones extranjeras.",
							"valTarifaCobro": "Hasta 1.00% sobre monto, mínimo $5.00 más IVA."
						},
						{
							"valComision": "Copia de voucher o comprobantes de compra con tarjetas de débito",
							"valDescripcion": "Es el pago aplicado por cada evento en el cliente solicita copia de un comprobante de compra por considerar que es una operación que no le corresponde. El cobro aplica cuando la transacción fue efectivamente realizada por el cliente.",
							"valTarifaCobro": "$2.00 por compras locales y $25.00 por compras internacionales, más IVA."
						},
						{
							"valComision": "Por saldo promedio mensual menor a $25.00 en todas las Cuentas de Ahorro y Corriente de Personas Naturales aperturadas antes de mayo 2012. Por manejo de saldo promedio mensual menor a $50.00 para personas naturales y $75.00 para personas jurídicas, en cuentas corrientes y de ahorros posteriores a mayo 2012. Para cuentas DaBuenavida: por saldo promedio mensual menor a $20.00 en cuentas a 12 meses plazo, por saldo promedio mensual menor a $15.00 en cuentas a 24 meses plazo; y por saldo promedio mensual menor a $10.00 en cuentas a 36 meses plazo. Para las cuentas de ahorro Plazo Flexible 90 y 180 con saldo promedio mensual a $500.00 y para cuentas de ahorro Plazo Flexible 360, con saldo promedio mensual menor $20.00",
							"valDescripcion": "Recargo por manejo de cuentas cuando el saldo de la misma sea menor al mínimo establecido por el Banco y las leyes correspondientes.",
							"valTarifaCobro": "$1.77 más IVA"
						},
						{
							"valComision": "Certificación de cheques, emisión de cheques de caja o de gerencia.",
							"valDescripcion": "Certificación de cheques: Comisión por el servicio de validar y certificar que los fondos del cheque girado de la cuenta corriente del cliente existen y que han sido reservados específicamente hasta su cobro. Emisión de cheque de caja o de gerencia: Comisión por elaboración y emisión de un cheque propio del banco para los pagos locales que realice el solicitante. Este servicio involucra lo siguiente: Costos de materiales, elaboración, atención y controles operativos.",
							"valTarifaCobro": "$1.50 por cheque (hasta $25.00 más IVA por cheque emitido electrónicamente y pagado en otros bancos)"
						},
						{
							"valComision": "Remesas con cheques del exterior",
							"valDescripcion": "Comisión por servicio de gestión de cobro de cheques emitidos en el exterior y depositados a cuentas del banco.",
							"valTarifaCobro": "Hasta 0.50 ctvs por operación, más IVA (no incluye costos de envío)"
						},
						{
							"valComision": "Por trámite de devolución de giros, cheques extranjeros, y otros instrumentos internacionales rechazados",
							"valDescripcion": "Comisión por servicio para la gestión que realiza el Banco por giro del exterior, cheque internacional o cualquier instrumento internacional que el cliente haya abonado y éste sea rechazado por el banco emisor",
							"valTarifaCobro": "$25.00 más cualquier cobro generado por el Banco emisor, por cada uno más IVA."
						},
						{
							"valComision": "Cargos a cuenta por cobro de servicios y pagos diversos, exceptuando el cargo por venta de chequera",
							"valDescripcion": "Comisión por servicio proporcionado a clientes que solicitan que el Banco realice pagos a terceros con cargo a la cuenta del cliente.",
							"valTarifaCobro": "$1.00 por cada cargo, más IVA"
						},
						{
							"valComision": "Conteo de moneda fraccionaria y billete (para clientes comerciales de alto volumen y servicio requerido por el cliente), siempre que no sea con el objetivo de realizar un pago o depósito.",
							"valDescripcion": "Comisión por conteo de efectivo directamente en agencias para clientes comerciales de alto volumen, servicio requerido por el cliente.",
							"valTarifaCobro": "Hasta $2.50 por cada millar de billetes y $1.00 por cada $100 en moneda, más IVA"
						},
						{
							"valComision": "Transferencias:Orden entrante del exterior, abono a cuenta Davivienda",
							"valDescripcion": "Comisión por el servicio de recibir fondos procedentes de cualquier país de cualquier país a través de bancos corresponsales para ser transferidos a cuentas Davivienda",
							"valTarifaCobro": "$10.00 C/U, más IVA"
						},
						{
							"valComision": "Transferencias salientes al exterior",
							"valDescripcion": "Comisión por servicio de envío de fondos a un beneficiario en el extranjero a través de bancos corresponsales",
							"valTarifaCobro": "En canal electrónico hasta $25.00 y en ventanilla hasta $32.00, más IVA. no incluye gastos por Swift"
						}
					],
					"nit": "01042410841019",
					"noComisionSaldoInferior": "0.00",
					"nombres": {
						"primerApellido": "CASTILLO",
						"primerNombre": "WILLIAM",
						"segundoApellido": "PIMENTEL",
						"segundoNombre": "ANTONIO"
					},
					"numeroCuenta": "",
					"numeroDocumento": "022353615",
					"profesion": "EMPLEADO",
					"tasasInteres": [{
							"valDescripcion": "Por la porción de saldo sobre $ 500,000.01",
							"valPorcentaje": "1.25%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 340,000.01 a $ 500,000.00",
							"valPorcentaje": "1.00%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 120,000.01 a $ 340,000.00",
							"valPorcentaje": "0.75%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 60,000.01 a $ 120,000.00",
							"valPorcentaje": "0.50%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 20,000.01 a $ 60,000.00",
							"valPorcentaje": "0.25%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 5,000.01 a $ 20,000.00",
							"valPorcentaje": "0.25%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 2,000.01 a $ 5,000.00",
							"valPorcentaje": "0.05%"
						},
						{
							"valDescripcion": "Por la porción de saldo entre $ 0.01 a $ 2,000.00",
							"valPorcentaje": "0.05%"
						},
						{
							"valDescripcion": "Cuentas de ahorro inactivas",
							"valPorcentaje": "0.01%"
						}
					]
				},
				"DECLARACION_JURADA": {
					"codActividadEconomica": "0005",
					"codOrigenPrincipal": "",
					"montoAbono": " 1000",
					"montoAbonoEfectivo": "2000",
					"montoRetiro": "3000",
					"montoRetiroEfectivo": "4000",
					"otroOrigen": "",
					"primerApellido": "HUEZO",
					"primerNombre": "LILIAN",
					"segundoApellido": "CACERES",
					"segundoNombre": "ESTER"
				},
				"FORMULARIO_VINCULACION": {
					"datosPersonales": {
						"1": "",
						"6": "",
						"7": "",
						"direccionPersonal": {
							"barrio": "",
							"codCiudad": "",
							"codDepartamento": "AHUACHAPAN",
							"codMunicipio": "",
							"codPais": "EL SALVADOR",
							"condicionVivienda": "",
							"direccionPersonal": "COL. PROY HAB MANANTIALES COL. DE LA ESPERERANZA POLG. LA 4 AHUACHAPaNAHUACHAPaN",
							"esPrincipal": false,
							"mensualidadVivienda": "",
							"referencia": "",
							"telefonoCelular": "76290648",
							"tiempoHabitado": "",
							"tipoDireccion": "01"
						},
						"documento": {
							"expedicion": "19-09-2018",
							"lugarExpedicion": "",
							"numeroDocumento": "022353615",
							"otroNumero": "",
							"tipoDocumento": "D",
							"tipoDui": "X",
							"tipoPasaporte": " ",
							"vencimiento": "18-09-2026"
						},
						"email": "willcastillo24@hotmail.com",
						"estadoCivil": "2",
						"genero": "M",
						"nacimiento": {
							"ciudadNacimiento": "",
							"codEstadoNacimiento": "",
							"codMunicipioNacimiento": "",
							"codPaisNacimiento": "EL SALVADOR",
							"fecha": "24-10-1984",
							"lugar": "",
							"nacionalidad": "EL SALVADOR",
							"otraNacionalidad": ""
						},
						"nit": "01042410841019",
						"nombreConyugue": "",
						"nombres": {
							"primerApellido": "CASTILLO",
							"primerNombre": "WILLIAM",
							"segundoApellido": "PIMENTEL",
							"segundoNombre": "ANTONIO"
						},
						"personasDependen": "",
						"sexoF": "",
						"sexoM": "X",
						"telefonoResidencia": "",
						"a1": "",
						"a2": "",
						"a3": "",
						"a5": "",
						"tipoOperacionImportacion": "",
						"tipoOperacionOtro": "",
						"tipoOperacionPagoServicios": "",
						"tipoOperacionGiro": "",
						"tipoOperacionExportacion": "",
						"tipoOperacionInversion": "",
						"tipoOperacionDivisas": "",
						"tipoOperacionPrestamo": "",
						"tipoOperacionRemesa": "",
						"tipoOperacionProducto": ""
					},
					"esFatcaNo": "X",
					"esFatcaSi": " ",
					"fechaActual": {
						"anioFechaActual": "2020",
						"aniocortoFechaActual": "VEINTE",
						"diaFechaActual": "SIETE",
						"fechaActual": "07-05-2020",
						"mesFechaActual": "mayo"
					},
					"informacionFinanciera": {
						"ingresosFijos": "",
						"ingresosMensuales": "",
						"ingresosVariables": "",
						"origenIngresos": "",
						"origenOtrosIngresos": "",
						"otraFuenteIngresos": "",
						"totalGastosMensuales": "",
						"valorTotalBienes": "",
						"valorTotalDeudas": ""
					},
					"informacionLaboral": {
						"actividadEconomica": "",
						"codEstadoLaboral": "",
						"codMunicipioLaboral": "",
						"codPaisLaboral": "",
						"direccionLaboral": "",
						"empresa": {
							"cargo": "",
							"fechaIngreso": "",
							"nombre": "",
							"telefono": {
								"extension": "",
								"indicativo": "",
								"numero": ""
							}
						},
						"profesion": "EMPLEADO"
					},
					"informacionPersonasPoliExp": {
						"esPoliticamenteExpuesto": false,
						"esPoliticamenteExpuestoNo": "X",
						"esPoliticamenteExpuestoSi": " ",
						"esRepresentanteLegal": false,
						"esRepresentanteLegalNo": "X",
						"esRepresentanteLegalSi": " ",
						"nombreConyugeEsPep": "",
						"numeroCuenta": "",
						"numeroDocumentoPep": "",
						"operacionesInternacionales": {
							"beneficiarioPrincipal": "",
							"codPaisDestino": "",
							"nombreBancoDestino": "",
							"numeroCuentaOperacionesInternacionales": "",
							"otroTipoOperacion": "",
							"tipoMoneda": "",
							"tipoOperacion": "",
							"tipoOperacionDivisas": "",
							"tipoOperacionExportacion": "",
							"tipoOperacionGiro": "",
							"tipoOperacionImportacion": "",
							"tipoOperacionInversion": "",
							"tipoOperacionOtro": "X",
							"tipoOperacionPagoServicios": "",
							"tipoOperacionPrestamo": "",
							"tipoOperacionProducto": "",
							"tipoOperacionRemesa": "",
							"totalRealiza": ""
						},
						"operacionesInternacionalesNo": "X",
						"operacionesInternacionalesSi": " ",
						"parentesco": "",
						"parentescoEsPep": false,
						"parentescoEsPepNo": "X",
						"parentescoEsPepSi": " ",
						"productosExtrangero": {
							"codCiudadProductosExtrangero": "",
							"codDepartamentoProductosExtrangero": "",
							"codPaisProductosExtrangero": "",
							"monto": "",
							"nombreBanco": "",
							"numeroProducto": "",
							"tipoMonedaProductosExtrangero": "",
							"tipoProducto": ""
						},
						"productosExtrangeroNo": "X",
						"productosExtrangeroSi": " ",
						"reconocimientoPublico": false,
						"reconocimientoPublicoNo": "X",
						"reconocimientoPublicoSi": " ",
						"tieneCaracteristicasPep": false,
						"tieneCaracteristicasPepNo": "X",
						"tieneCaracteristicasPepSi": " ",
						"tipoDocumentoPep": "",
						"tipoDocumentoPepDui": "",
						"tipoDocumentoPepPasaporte": ""
					}
				},
				"FORMULARIO_W9": {
					"clasificacionTributaria": "",
					"codCiudad": "",
					"codEstado": "",
					"codigoBenExe": "",
					"codigoExeDeclFatca": "",
					"direccion": "",
					"empresa": {
						"codEstadoEmpresa": "",
						"codigoPostal": "",
						"direccionEmpresa": "",
						"nombre": ""
					},
					"fechaActual": {
						"anioFechaActual": "2020",
						"aniocortoFechaActual": "VEINTE",
						"diaFechaActual": "SIETE",
						"fechaActual": "07-05-2020",
						"mesFechaActual": "mayo"
					},
					"nombres": {
						"primerApellido": "CASTILLO",
						"primerNombre": "WILLIAM",
						"segundoApellido": "PIMENTEL",
						"segundoNombre": "ANTONIO"
					},
					"numTinCasilla1": "",
					"numTinCasilla2": "",
					"numTinCasilla3": "",
					"numTinCasilla4": "",
					"numTinCasilla5": "",
					"numTinCasilla6": "",
					"numTinCasilla7": "",
					"numTinCasilla8": "",
					"numTinCasilla9": "",
					"numeroCuenta": "",
					"numeroDocumento": "022353615",
					"tin": "",
					"ct2": "",
					"ct1": "",
					"ct5": "",
					"ct6": "",
					"ct3": "",
					"ct4": ""
				}
			},
			"esCliente": true,
			"esFatca": false
        }
    }
};
