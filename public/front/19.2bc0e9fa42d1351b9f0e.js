(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{FHCa:function(a,d,o){"use strict";o.d(d,"a",function(){return r});var e=o("OuSF"),t=o("d7Ac"),i=o("AytR"),n=o("8Y7J");class r{constructor(a){this.guard=a,this.guards=i.a.guards}canActivate(a,d){const o=a.data.stepId;return!this.guards||this.guard.lastValue(t.I)===o}canDeactivate(a,d,o,e){const i=d.data.stepId;return!this.guards||this.guard.lastValue(t.I)!==i}canLoad(a,d){return!this.guards||1===a.data.child.filter(a=>this.guard.lastValue(t.I)===a).length}}r.ngInjectableDef=n.defineInjectable({factory:function(){return new r(n.inject(e.a))},token:r,providedIn:"root"})},"eB/O":function(a,d,o){"use strict";o.r(d);var e=o("8Y7J");class t{}var i=o("pMnS"),n=o("SVse"),r=o("ARm4"),l=o("iInd"),c=o("FHCa"),u=o("NY35");const s={stepForbidden:"forbidden",child:["PCL001"]},p={stepForbidden:"forbidden",child:["BEN001"]},h={stepForbidden:"forbidden",child:["CUE001"]},m={stepForbidden:"forbidden",child:["CUE003","CUE005","CUE006"]},C={stepForbidden:"forbidden",child:["VIN001","VIN002","VIN003","VIN004","VIN005","VIN006"]},b={stepForbidden:"forbidden",child:["BIO001","BIO002","BIO003","BIO004","BIO005"]},f={stepForbidden:"forbidden",child:["OTP001"]},I={stepForbidden:"forbidden",child:["CVI001"]},g={stepForbidden:"forbidden",child:["AUT001","AUT002","CRE016","CRE011","CRE017"]},F={stepForbidden:"forbidden",child:["CRE001","CRE002"]},L={stepForbidden:"forbidden",child:["CRE004","CRE005","CRE012"]},R={stepForbidden:"forbidden",child:["CRE006","CRE007","CRE008","CRE009","CRE010"]};class v{}var E=o("pJyK");o.d(d,"CamModuleNgFactory",function(){return M});var M=e["\u0275cmf"](t,[],function(a){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,n.NgLocalization,n.NgLocaleLocalization,[e.LOCALE_ID,[2,n["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,r.b,r.b,[e.PLATFORM_ID]),e["\u0275mpd"](1073742336,n.CommonModule,n.CommonModule,[]),e["\u0275mpd"](1073742336,l.p,l.p,[[2,l.v],[2,l.o]]),e["\u0275mpd"](1073742336,v,v,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,r.a,r.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,l.m,function(){return[[{path:"ingresos",loadChildren:"./ingresos/ingresos.module#IngresosModule",canLoad:[u.a,c.a],data:s},{path:"beneficios",loadChildren:"./beneficios/beneficios.module#BeneficiosModule",canLoad:[u.a,c.a],data:p},{path:"tpc",loadChildren:"./tpc/tpc.module#TpcModule",canLoad:[u.a,c.a],data:h},{path:"apertura",loadChildren:"./apertura/apertura.module#AperturaModule",canLoad:[u.a,c.a],data:m},{path:"vinculacion",loadChildren:"./vinculacion/vinculacion.module#VinculacionModule",canLoad:[u.a,c.a],data:C},{path:"biometria",loadChildren:"./biometria/biometria.module#BiometriaModule",canLoad:[u.a,c.a],data:b},{path:"otp",loadChildren:"./otp/otp.module#OtpModule",canLoad:[u.a,c.a],data:f},{path:"clave",loadChildren:"./clave/clave.module#ClaveModule",canLoad:[u.a,c.a],data:I},{path:"autorizaciones",loadChildren:"./autorizaciones/autorizaciones.module#AutorizacionesModule",canLoad:[u.a,c.a],data:g},{path:"simulador",loadChildren:"./simulador/simulador.module#SimuladorModule",canLoad:[u.a,c.a],data:F},{path:"datos-credito",loadChildren:"./datos-credito/datos-credito.module#DatosCreditoModule",canLoad:[u.a,c.a],data:L},{path:"apertura-credito",loadChildren:"./apertura-credito/apertura-credito.module#AperturaCreditoModule",canLoad:[u.a,c.a],data:R}]]},[])])})}}]);