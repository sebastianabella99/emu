(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{FHCa:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("OuSF"),i=o("d7Ac"),r=o("AytR"),a=o("8Y7J");class s{constructor(t){this.guard=t,this.guards=r.a.guards}canActivate(t,e){const o=t.data.stepId;return!this.guards||this.guard.lastValue(i.I)===o}canDeactivate(t,e,o,n){const r=e.data.stepId;return!this.guards||this.guard.lastValue(i.I)!==r}canLoad(t,e){return!this.guards||1===t.data.child.filter(t=>this.guard.lastValue(i.I)===t).length}}s.ngInjectableDef=a.defineInjectable({factory:function(){return new s(a.inject(n.a))},token:s,providedIn:"root"})},Qmo6:function(t,e){},R4SG:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("Cfvw"),i=o("eIep"),r=(o("u+Mh"),o("OuSF"),o("d7Ac")),a=(o("nql9"),o("CFIy"),o("qzbh"),o("rbVQ"),o("CqYc"),o("AytR"));o("2bpA");class s{constructor(t,e,o,n,i,a,s,l,m,d,c,u,p,f){this.router=t,this.auth=e,this.http=o,this.workflow=n,this.obser=i,this.formBuilder=a,this.rules=s,this.catalogo=l,this.deviceService=m,this.route=d,this.postMessagesService=c,this.sanitizer=u,this.zipString=p,this.cripto=f,this.prefix="data:image/png;base64,",this.disableButton=!1,this.stepId="",this.aliado=this.obser.lastValue(r.b),this.pais=this.obser.lastValue(r.y),this.modulo=this.obser.lastValue(r.t),this.canal=this.obser.lastValue(r.e),this.lenguaje=this.obser.lastValue(r.p),this.faceImage=this.obser.lastValue(r.k),this.imageFront=this.obser.lastValue(r.m),this.imageBack=this.obser.lastValue(r.l),this.formulario=this.formBuilder.group({}),this.payloadSubscription=this.obser.getData(r.z).subscribe(this.responsePayload()),this.router.data.subscribe(this.responseRouteData()),this.obser.getData(r.x).subscribe(t=>{this.disableButton=!!t})}responsePayload(){return t=>{t&&(this.payload=t,setTimeout(()=>this.obser.unSubscribe(this.payloadSubscription),150))}}responseRouteData(){return t=>{this.stepId=t.stepId}}onBack(t){this.workflow.workflow(this.stepId,t())}onCall(t){this.formulario.valid&&this.workflow.workflow(this.stepId,t())}onRedirect(t){this.route.navigate([this.workflow.getRoute(t)])}setRules(t,e={}){this.formulario=this.formBuilder.group(t,e)}params(t){const e={};return t.map(t=>(e[t]=this.obser.lastValue(t),t)),e.limit||(e.limit="-1"),e}get deviceInfo(){return this.deviceService.getDeviceInfo()}get isMobile(){return this.deviceService.isMobile()}get isTablet(){return this.deviceService.isTablet()}get isDesktopDevice(){const t=navigator.userAgent.toLowerCase();return!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))}get serverEnrollmentKey(){return this.obser.lastValue(r.E)}set serverEnrollmentKey(t){this.obser.sendData(t,r.E)}appReady(){return this.obser.sendData(!1,r.d),this.postMessagesService.appReady(),this.obser.getData(r.d)}setTitle(){this.postMessagesService.setTitle()}registerPath(t){return this.obser.sendData(!1,r.D),this.postMessagesService.registerPath(t),this.obser.getData(r.D)}captureFrontDocument(t){return this.obser.sendData(!1,r.h),this.postMessagesService.captureFrontDocument(this.serverEnrollmentKey,t),this.obser.getData(r.h)}captureBackDocument(){return this.obser.sendData(!1,r.f),this.postMessagesService.captureBackDocument(this.serverEnrollmentKey),this.obser.getData(r.f)}captureFace(){return this.obser.sendData(!1,r.g),this.postMessagesService.captureFace(this.serverEnrollmentKey),this.obser.getData(r.g)}appFinish(){return this.obser.sendData(!1,r.c),this.postMessagesService.appFinish(this.serverEnrollmentKey),this.obser.getData(r.c)}saveImages(t,e=!1){const o=new FormData;t.clientId=this.auth.getClientId(),o.append("clientId",t.clientId);const r=this.auth.headerTokenInjectorMultipart();if(e){this.cripto.createEncryptor(this.cripto.getPublickeyMbaas());const e=Object.keys(t.images)[0];return Object(n.a)(this.cripto.encrypter(t.images[e])).pipe(Object(i.a)(this.switchMap(o,e,r)))}return Object.keys(t.images).map(e=>o.append("img_"+e,t.images[e])),this.http.post(a.a.soporteUploadImage,o,{headers:r})}switchMap(t,e,o){return n=>{if(n.length<9e5)t.append(`img_${e}_0`,n);else{let o=0;for(let i=0;i<n.length;i+=9e5)t.append(`img_${e}_${o}`,n.substr(i,9e5)),o++}return this.http.post(a.a.soporteUploadImage,t,{headers:o})}}saveImagesLHC(t){const e=new FormData;Object.keys(t).map((o,n)=>e.append(o,t[o]));const o=this.auth.headerTokenInjectorMultipart();return this.http.post(a.a.soporteWebAppLHC,e,{headers:o})}hasProperty(t,e){return 0!==Object.keys(t).length&&(!!t.hasOwnProperty(e)||Object.keys(t).map(o=>"object"==typeof t[o]?this.hasProperty(t[o],e):o===e).reduce((t,e,o,n)=>t||e))}existeRuta(t,e,o=0){let n=[];return"string"==typeof e&&(n=e.split(".")),"object"==typeof e&&(n=e),void 0!==t[n[o]]&&o+1===n.length||!!t[n[o]]&&this.existeRuta(t[n[o]],n,o+1)}get OS(){let t="Desconocido";return-1!==navigator.appVersion.indexOf("Win")&&(t="Windows"),-1!==navigator.appVersion.indexOf("Mac")&&(t="MacOS"),-1!==navigator.appVersion.indexOf("X11")&&(t="UNIX"),-1!==navigator.appVersion.indexOf("Linux")&&(t="Linux"),-1!==navigator.appVersion.indexOf("Android")&&(t="Android"),t}get HOSTNAME(){return location.hostname}}},qg61:function(t,e,o){"use strict";o.r(e);var n=o("8Y7J");class i{}var r=o("pMnS"),a=o("SVse");class s{constructor(){this.selectItem=new n.EventEmitter,this.charg=!1}set charged(t){this.char=t,setTimeout(()=>this.charg=t,200)}get charged(){return this.char}ngOnInit(){}onSelect(){this.selectItem.emit(this.id)}}var l=n["\u0275crt"]({encapsulation:0,styles:[[".loaderSRC[_ngcontent-%COMP%]{background:linear-gradient(310deg,#fff,#cdcdd0);background-size:400% 400%;-webkit-animation:2s infinite AnimationName;animation:2s infinite AnimationName}@-webkit-keyframes AnimationName{0%,100%{background-position:10% 0}50%{background-position:91% 100%}}@keyframes AnimationName{0%,100%{background-position:10% 0}50%{background-position:91% 100%}}.charged[_ngcontent-%COMP%]{opacity:0;transition:opacity .7s}.charged-show[_ngcontent-%COMP%]{opacity:1}"]],data:{}});function m(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,2,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),n["\u0275did"](1,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](2,{background:0,loaderSRC:1})],function(t,e){var o=t(e,2,0,!0,!0);t(e,1,0,o)},function(t,e){t(e,0,0,"")})}function d(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,2,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),n["\u0275did"](1,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](2,{background:0,loaderSRC:1,charged:2,"charged-show":3})],function(t,e){var o=t(e,2,0,!0,!0,!0,e.component.charg);t(e,1,0,o)},function(t,e){t(e,0,0,e.component.background)})}function c(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","mainMenu__content"]],null,[[null,"click"]],function(t,e,o){var n=!0;return"click"===e&&(n=!1!==t.component.onSelect()&&n),n},null,null)),(t()(),n["\u0275eld"](1,0,null,null,1,"h3",[["class","text__color--light"]],null,null,null,null,null)),(t()(),n["\u0275ted"](2,null,["",""])),(t()(),n["\u0275eld"](3,0,null,null,1,"h6",[["class","text__color--light"]],null,null,null,null,null)),(t()(),n["\u0275ted"](4,null,["",""])),(t()(),n["\u0275eld"](5,0,null,null,0,"img",[["alt",""],["class","icon"],["src","./assets/cam/img/icon/flecha_izquierda.svg"]],null,[[null,"click"]],function(t,e,o){var n=!0;return"click"===e&&(n=!1!==t.component.onSelect()&&n),n},null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,m)),n["\u0275did"](7,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,d)),n["\u0275did"](9,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){var o=e.component;t(e,7,0,!o.char),t(e,9,0,o.char)},function(t,e){var o=e.component;t(e,2,0,o.title),t(e,4,0,o.subtitle)})}var u=o("R4SG"),p=(o("Qmo6"),o("d7Ac")),f=o("AytR");class g extends u.a{ngOnInit(){this.itemButton="",this.produccion=this.prod(),this.zona=!0===this.payload.zona?"privada":"publica",this.catalogo.data(this.produccion?"ING001PROD/visible":"ING001/visible",{pais:this.payload.pais,lenguaje:this.payload.lenguaje,canal:this.payload.canal,property:"status"}).subscribe(t=>{this.productos=t?t.filter(this.filterResponse()):[],this.productos=this.productos.map(this.mapResponse())})}mapResponse(){return(t,e)=>(this.getImagen(t.imagen,e),t.charged=!1,t.index=e,t)}filterResponse(){return t=>t.zona===this.zona}getImagen(t,e){this.catalogo.assetsText(t).subscribe(t=>{t&&(this.productos[e].imagen=t,this.productos[e].charged=!0)})}ngOnDestroy(){}getDataToPayload(t){return this.disableButton=!0,this.obser.sendData(this.payload.aliado,p.b),this.obser.sendData(this.payload.pais,p.y),this.obser.sendData(t.idProducto,p.t),this.obser.sendData(this.payload.lenguaje,p.p),this.obser.sendData(this.payload.canal,p.e),this.obser.sendData(t.titulo,p.w),this.obser.sendData(t.idProducto,p.B),()=>({idModulo:t.idProducto,flujo:{atras:!1,continuar:!0,callback:()=>{}}})}postMessages(t){this.postMessagesService.appFinish("",t)}redirect(t){window.open(t,"_self")}nothing(){}prod(){return f.a.production}}var h=o("iInd"),b=o("rbVQ"),x=o("IheW"),w=o("u+Mh"),y=o("OuSF"),_=o("s7LF"),C=o("nql9"),v=o("CFIy"),k=o("ARm4"),z=o("qzbh"),M=o("cUpR"),j=o("2bpA"),I=o("CqYc"),P=n["\u0275crt"]({encapsulation:3,styles:[[""],['html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;border:0;margin:1em 0;border-bottom:2px solid #fff}pre,textarea{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{font-family:MyriadPro!important}body{font-size:1em;line-height:1.3125em;font-weight:100;font-style:normal;margin:auto;padding:0;position:relative;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.isHidden{display:none}@font-face{font-family:MyriadPro;font-style:italic;font-weight:100;src:url(/front/assets/cam/fonts/MyriadPro-It.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-It.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-It.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-It.svg#MyriadPro) format("svg")}@font-face{font-family:MyriadPro;font-style:normal;font-weight:100;src:url(/front/assets/cam/fonts/MyriadPro-Regular.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-Regular.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-Regular.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-Regular.svg#MyriadPro) format("svg")}@font-face{font-family:MyriadPro;font-style:normal;font-weight:700;src:url(/front/assets/cam/fonts/MyriadPro-Bold.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-Bold.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-Bold.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-Bold.svg#MyriadPro) format("svg")}@font-face{font-family:icomoon;font-style:normal;font-weight:400;src:url(/front/assets/cam/fonts/icomoon.eot?) format("eot"),url(/front/assets/cam/fonts/icomoon.woff) format("woff"),url(/front/assets/cam/fonts/icomoon.ttf) format("truetype"),url(/front/assets/cam/fonts/icomoon.svg#icomoon) format("svg")}.h1,h1{color:#323c47;font-family:MyriadPro;font-size:3.5625em;font-weight:900;line-height:1.33333333em;margin-top:.36842105em;margin-bottom:.73684211em;font-style:normal}.h2,h2{color:#323c47;font-family:MyriadPro;font-size:2.25em;font-weight:900;line-height:1.16666667em;margin-top:.19444444em;margin-bottom:.5em;font-style:normal}.h3,h3{color:#323c47;font-family:MyriadPro;font-size:1.625em;font-weight:300;line-height:.80769231em;margin-top:0;margin-bottom:.80769231em;font-style:normal}.h4,h4{color:#323c47;font-family:MyriadPro;font-size:1.125em;font-weight:600;line-height:1.16666667em;margin-top:0;margin-bottom:1em;font-style:normal}.h5,h5{color:#323c47;font-family:MyriadPro;font-size:1em;font-weight:300;line-height:1.3125em;margin-top:0;margin-bottom:1.3125em;font-style:normal}.h6,h6{color:#323c47;font-family:MyriadPro;font-size:.75em;font-weight:300;line-height:1.33333333em;margin-top:0;margin-bottom:.83333333em;font-style:normal}p{color:#2f3337;font-family:MyriadPro;font-size:1em;font-weight:100;line-height:1.3125em;margin-top:0;margin-bottom:1.3125em;font-style:normal}ul li{color:#323c47;font-family:MyriadPro;font-size:.9375em;font-weight:200;line-height:1.06666667em;margin-top:.46666667em;margin-bottom:0;font-style:normal}em{color:#323c47;font-family:MyriadPro;font-size:.6875em;font-weight:300;line-height:1.36363636em;margin-top:.90909091em;margin-bottom:0;font-style:normal}.text__color--light{color:#fff!important}.text__color--dark{color:#22262a!important}.text__color{color:#323c47}.text__color--primary{color:#ee3124}.text__align--left{display:block;text-align:left}.text__align--right{display:block;text-align:right}.text__align--center{display:block;text-align:center}.text__weight--regular{font-weight:400!important}.text__margin--bottom0{margin-bottom:0}.formContainer{width:100%;display:block;height:auto;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.formContainer__columnContainer{margin:2.5em 0;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:space-around;-o-justify-content:space-around;-ms-justify-content:space-around;justify-content:space-around;-moz-align-items:flex-start;-o-align-items:flex-start;-ms-align-items:flex-start;align-items:flex-start;-moz-flex-direction:column;-o-flex-direction:column;flex-direction:column}.formContainer__columnContainer--noMargin{margin:0!important}.formContainer__columnContainer .centerText{text-align:center}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer{-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}.formContainer__columnContainer .centerText{width:80%}}@media (min-width:992px){.formContainer{padding:2.1875em 2.5em;border:1px solid #bdbdbd;background-image:url(/front/assets/cam/img/layout/curve_bg.png);background-position:right bottom;background-repeat:no-repeat;background-color:rgba(189,189,189,.04);border-radius:2.625em;height:auto;-o-box-shadow:0 0 .5em rgba(47,51,55,.17);-ms-box-shadow:0 0 .5em rgba(47,51,55,.17);box-shadow:0 0 .5em rgba(47,51,55,.17)}.formContainer__columnContainer{-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}.formContainer__columnContainer .centerText{width:80%}}.formContainer__columnContainer .centerText--small{width:70%;margin:.5rem auto}@media (min-width:576px) and (max-width:768px){.formContainer__columnContainer .centerText--small{width:60%}}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .centerText--small{width:100%}}@media (min-width:992px){.formContainer__columnContainer .centerText--small{width:80%}}.formContainer__columnContainer .centerText--info{width:100%;margin:.5rem auto}@media (min-width:576px) and (max-width:768px){.formContainer__columnContainer .centerText--info{width:60%}}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .centerText--info{width:70%}}@media (min-width:992px){.formContainer__columnContainer .centerText--info{width:45%}}.formContainer__columnContainer .centerText--colorPrimary{color:#ee3124}.formContainer__columnContainer .formColumn{width:100%;margin:0;padding:0}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumn{width:45%}}@media (min-width:992px){.formContainer__columnContainer .formColumn{width:35%}}.formContainer__columnContainer .formColumn--center{margin:auto}.formContainer__columnContainer .formColumn--small{width:60%;text-align:center;margin:auto}@media (min-width:992px){.formContainer__columnContainer .formColumn--small{width:20%;margin:2.5em auto}}.formContainer__columnContainer .formColumn__content{width:70%;margin:auto;padding:.625em .625em 0;border:2px solid #ee3124;border-radius:5px}.formContainer__columnContainer .formColumn__content--large{width:90%;text-align:center;margin-bottom:2rem}.formContainer__columnContainer .formColumn__contentCenter{text-align:center}.formContainer__columnContainer .formColumn__contentCenter a{cursor:pointer;color:#ee3124!important;display:inline-block;margin:0 .3125em;font-weight:700;pointer-events:auto!important}.formContainer__columnContainer .formColumn__contentCenter img{margin:30% auto 5%}.formContainer__columnContainer .formColumnPrincipal{width:100%;margin:0;padding-top:1em}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumnPrincipal{width:95%}}@media (min-width:992px){.formContainer__columnContainer .formColumnPrincipal{width:85%}}.formContainer__columnContainer .formColumnPrincipal p{text-align:justify}.formContainer__columnContainer .formColumnMiddle{width:100%;margin:0;padding-top:1em;text-align:center}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumnMiddle{width:70%}}@media (min-width:992px){.formContainer__columnContainer .formColumnMiddle{width:60%}}.formContainer__columnContainer .indications{display:flex;width:100%}.formContainer__columnContainer .indications ul{width:100%;margin:auto}.formContainer__buttonContainer{width:100%;margin:2.5em auto;display:block}.formContainer__buttonContainer--dualButton{-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:space-between;-o-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center}.formContainer__buttonContainer--dualButton app-button-continue{width:100%;margin:0 .3125em;padding:0;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;justify-content:center;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center;-o-box-shadow:none;-ms-box-shadow:none;box-shadow:none;-webkit-outline:none;-moz-outline:none;-o-outline:none;-ms-outline:none;outline:0;transition:ease all .3s}.formContainer__buttonContainer--dualButton app-button-continue button{width:100%}.formContainer__buttonContainer--dualButton button{margin:0 .3125em;width:100%}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .indications ul{width:60%}.formContainer__buttonContainer{padding:0 25%}}@media (min-width:1200px){.formContainer__buttonContainer{padding:0 30%}}.formContainer::-webkit-scrollbar-track{-webkit-box-shadow:none;border-radius:5px;background-color:rgba(255,255,255,0);cursor:pointer!important}.formContainer::-webkit-scrollbar{width:5px;background-color:rgba(255,255,255,0);cursor:pointer!important}.formContainer::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:none;background-color:#bdbdbd;cursor:pointer!important}.cardsContainer{width:100%;display:block;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.cardsContainer__row{margin:2.5em 0;width:100%;min-height:100px;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;justify-content:center;-moz-align-items:flex-start;-o-align-items:flex-start;-ms-align-items:flex-start;align-items:flex-start;-moz-flex-direction:column;-o-flex-direction:column;flex-direction:column}@media (min-width:768px) and (max-width:992px){.cardsContainer__row{-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}}@media (min-width:992px){.formContainer__columnContainer .indications ul{width:40%}.formContainer__buttonContainer{padding:0 30%}.cardsContainer{padding:2.1875em 2.5em;border:1px solid #bdbdbd;background-image:url(/front/assets/cam/img/layout/curve_bg.png);background-position:right bottom;background-repeat:no-repeat;background-color:rgba(189,189,189,.04);border-radius:2.625em;-o-box-shadow:0 0 .5em rgba(47,51,55,.17);-ms-box-shadow:0 0 .5em rgba(47,51,55,.17);box-shadow:0 0 .5em rgba(47,51,55,.17)}.cardsContainer__row{-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}}.cardsContainer__row .card{padding:1.5625em 1.875em;border-radius:1.25em;background:#e4e4e4;margin:1rem 0;width:100%;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}@media (min-width:768px) and (max-width:992px){.cardsContainer__row .card{font-size:1.15em;width:45%;margin:1rem}.cardsContainer__row .card__body{min-height:13rem}}@media (min-width:992px){.cardsContainer__row .card{font-size:1.15em;width:30%;margin:1rem}}.cardsContainer__row .card__header{border-bottom:3px solid #ee3124;width:100%}.cardsContainer__row .card__header h4{font-weight:700}.cardsContainer__row .card__header h4 strong{color:#ee3124}.cardsContainer__row .card__body{margin:.75em 0}.cardsContainer__row .card__body ul{padding:0 .9375em;list-style:none}.cardsContainer__row .card__body ul li:before{content:"\\2022";color:#ee3124;font-weight:700;display:inline-block;width:1em;margin-left:-1em}.cardsContainer__row .card__footer{margin-top:1.25em;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:flex-end;-o-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center}.cardsContainer__row .card__footer span{color:#ee3124;margin-right:.625em}.cardsContainer__row .card__footer img{width:20px}.cardsContainer__buttonContainer{width:100%;margin:2.5em 0;display:block}.container{width:100%;background-color:#fff;position:relative;padding:2em 1.25em;min-height:100vh;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-justify-content:flex-start;-o-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center;-moz-flex-direction:column;-o-flex-direction:column;flex-direction:column}.container--menu{margin-bottom:0}@media (min-width:992px){.cardsContainer__row .card__body{min-height:14rem}.container--menu{width:50%;margin:0 auto}}@media (min-width:1200px){.container--menu{width:50%;margin:0 auto}}.mainMenu{padding:1em;border-radius:1.25em;height:5em;width:100%;margin-bottom:1.25em;position:relative;overflow:hidden;background-color:transparent;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;justify-content:center}.mainMenu__content{flex-grow:12;position:relative;margin:0 .3125em 0 30px;padding:0 .4375em;text-align:center;z-index:10;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:flex;-moz-flex-direction:column;-o-flex-direction:column;flex-direction:column;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;align-items:center;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;justify-content:center;-moz-flex:1;-o-flex:1;flex:1}@media (min-width:992px){.mainMenu{border-radius:2.1875em;height:7.5em}.mainMenu__content{font-size:1.4rem}}.mainMenu__content h6{margin-bottom:0}.mainMenu__content h3{margin-bottom:.1875em}.mainMenu .icon{width:25px;z-index:10}.mainMenu .background{width:110%;position:absolute;left:-5%;top:0;bottom:0;z-index:0;margin:auto}']],data:{}});function D(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,3,"app-item-process",[["class","mainMenu"]],null,[[null,"click"]],function(t,e,o){var n=!0,i=t.component;return"click"===e&&(n=!1!==("url"!==t.context.$implicit.tipo||i.disableButton?i.nothing():i.onCall(i.getDataToPayload(t.context.$implicit)))&&n),"click"===e&&(n=!1!==("postMessage"!==t.context.$implicit.tipo||i.disableButton?i.nothing():i.postMessages(t.context.$implicit.data[t.context.$implicit.tipo]))&&n),"click"===e&&(n=!1!==("urlExterna"!==t.context.$implicit.tipo||i.disableButton?i.nothing():i.redirect(t.context.$implicit.data[t.context.$implicit.tipo]))&&n),"click"===e&&(n=!1!==(i.itemButton=t.context.$implicit.index)&&n),n},c,l)),n["\u0275did"](1,278528,null,0,a.NgStyle,[n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),n["\u0275pod"](2,{cursor:0}),n["\u0275did"](3,114688,null,0,s,[],{id:[0,"id"],title:[1,"title"],subtitle:[2,"subtitle"],background:[3,"background"],charged:[4,"charged"]},null)],function(t,e){var o=e.component,n=t(e,2,0,o.disableButton?"not-allowed":"pointer");t(e,1,0,n),t(e,3,0,e.context.$implicit.idProducto,e.context.$implicit.titulo,e.context.$implicit.descripcion,e.context.$implicit.imagen,o.disableButton&&o.itemButton===e.context.$implicit.index?null:e.context.$implicit.charged)},null)}function R(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,2,"section",[["class","container container--menu"]],null,null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,D)),n["\u0275did"](2,278528,null,0,a.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,2,0,e.component.productos)},null)}function S(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"app-ing001",[],null,null,null,R,P)),n["\u0275did"](1,245760,null,0,g,[h.a,b.a,x.c,w.a,y.a,_.f,C.a,v.a,k.b,h.o,z.a,M.c,j.LZStringService,I.a],null,null)],function(t,e){t(e,1,0)},null)}var O=n["\u0275ccf"]("app-ing001",g,S,{},{},[]);class B{}var T=o("FHCa");const V={stepId:"ING001"};class F{}o.d(e,"ProductosModuleNgFactory",function(){return A});var A=n["\u0275cmf"](i,[],function(t){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,O]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[n.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),n["\u0275mpd"](1073742336,B,B,[]),n["\u0275mpd"](1073742336,h.p,h.p,[[2,h.v],[2,h.o]]),n["\u0275mpd"](1073742336,F,F,[]),n["\u0275mpd"](1073742336,i,i,[]),n["\u0275mpd"](1024,h.m,function(){return[[{path:"**",component:g,canActivate:[T.a],canDeactivate:[T.a],data:V}]]},[])])})}}]);