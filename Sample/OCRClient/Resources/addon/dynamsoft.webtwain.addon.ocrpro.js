/*!
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2016, Dynamsoft Corporation 
* Author: Dynamsoft R&D Department
*
* Version: 11.3.2
*
* Module: addon/ocrpro
* final js: build\addon\dynamsoft.webtwain.addon.ocrpro.js
*/
;Dynamsoft.ProOCRVersion="1, 0, 0, 425";(function(b){function a(){var c=this;c._text="";c._left=0;c._top=0;c._right=0;c._bottom=0}a.prototype.GetText=function(){var c=this;return c._text};a.prototype.GetLetterRect=function(){var c=this;return c._left+","+c._top+","+c._right+","+c._bottom};b.NewLetterResult=function(){return new a()}})(Dynamsoft.Lib);(function(b){function a(){var c=this;c._count=0;c._letterlist=[]}a.prototype.GetLettersCount=function(){var c=this;return c._count};a.prototype.GetLetterContent=function(d){var f=this,c=f._count;if(f._errorCode<0){return""}if(d==null||d>=c||d<0){Dynamsoft.Lib.Errors.OCR_InvalidIndex(f,"GetLetterContent");return""}var e=Dynamsoft.Lib.NewLetterResult();e._text=f._letterlist[d].letter;e._left=f._letterlist[d].boundary[0];e._top=f._letterlist[d].boundary[1];e._right=f._letterlist[d].boundary[2];e._bottom=f._letterlist[d].boundary[3];return e};b.NewPageResult=function(){return new a()}})(Dynamsoft.Lib);(function(a){function b(){var c=this;c._input=0;c._message="";c._page=-1}b.prototype.GetInput=function(){var c=this;return c._input};b.prototype.GetMessage=function(){var c=this;return c._message};b.prototype.GetPage=function(){var c=this;return c._page};a.NewErrorInfo=function(){return new b()}})(Dynamsoft.Lib);(function(a){function b(c){var d=this;d._errorCode=0;d._errorString="";d._errorlist=[];d._request="";d._ocrTotalCount=0;d._alreadyOCRCount=0;d._resultlist=[];d._stwain=c}b.prototype.GetErrorCode=function(){var c=this;return c._errorCode};b.prototype.GetErrorString=function(){var c=this;return c._errorString};b.prototype.GetInput=function(){var c=this;if(c._request&&c._request.input){return c._request.input}else{return""}};b.prototype.GetErrorDetailList=function(){var g=this,c=0;if(g._errorlist){c=g._errorlist.length}var e=[];for(var d=0;d<c;d++){var f=Dynamsoft.Lib.NewErrorInfo();f._input=g._errorlist[d].input;f._message=g._errorlist[d].message;f._page=g._errorlist[d].page;e.push(f)}return e};b.prototype.GetOCRTotalCount=function(){var c=this;if(c._ocrTotalCount){return c._ocrTotalCount}else{return 0}};b.prototype.GetAlreadyOCRCount=function(){var c=this;if(c._alreadyOCRCount){return c._alreadyOCRCount}else{return 0}};b.prototype.GetPageCount=function(){var c=this;if(c._resultlist&&c._resultlist.length){return c._resultlist.length}else{return 0}};b.prototype.GetPageContent=function(d){var f=this,c=0;if(f._resultlist){c=f._resultlist.length}if(d==null||d>=c||d<0){Dynamsoft.Lib.Errors.OCR_InvalidIndex(f,"GetPageContent");return""}var e=Dynamsoft.Lib.NewPageResult();if(f._resultlist){e._count=f._resultlist[d].length;e._letterlist=f._resultlist[d]}else{e._count=0}return e};b.prototype.Get=function(){var c=this;return c._stwain._innerFun("GetOCRRestult")};b.prototype.Save=function(c){var e=this,d=a.html5.Funs.replaceLocalFilename(c);return e._stwain._innerFun("SaveOCRRestult",a.html5.Funs.makeParams(d))};a.NewOCRProResult=function(c){return new b(c)}})(Dynamsoft.Lib);var EnumDWT_OCRProRecognitionModule={OCRPM_AUTO:"AUTO",OCRPM_MOSTACCURATE:"MOSTACCURATE",OCRPM_BALANCED:"BALANCED",OCRPM_FASTEST:"FASTEST"};var EnumDWT_OCRProOutputFormat={OCRPFT_TXTS:"TXTS",OCRPFT_TXTCSV:"TXTCSV",OCRPFT_TXTF:"TXTF",OCRPFT_XML:"XML",OCRPFT_IOTPDF:"IOTPDF",OCRPFT_IOTPDF_MRC:"IOTPDF_MRC"};var EnumDWT_OCRProPDFVersion={OCRPPDFV_0:"1.0",OCRPPDFV_1:"1.1",OCRPPDFV_2:"1.2",OCRPPDFV_3:"1.3",OCRPPDFV_4:"1.4",OCRPPDFV_5:"1.5",OCRPPDFV_6:"1.6",OCRPPDFV_7:"1.7"};var EnumDWT_OCRProPDFAVersion={OCRPPDFAV_1A:"pdf/a-1a",OCRPPDFAV_1B:"pdf/a-1b",OCRPPDFAV_2A:"pdf/a-2a",OCRPPDFAV_2B:"pdf/a-2b",OCRPPDFAV_2U:"pdf/a-2u",OCRPPDFAV_3A:"pdf/a-3a",OCRPPDFAV_3B:"pdf/a-3b",OCRPPDFAV_3U:"pdf/a-3u"};var EnumDWT_OCRProType={OCRDT_File:0,OCRDT_Index:1};var EnumDWT_OCRFindTextFlags={OCRFT_WHOLEWORD:1,OCRFT_MATCHCASE:2,OCRFT_FUZZYMATCH:4};var EnumDWT_OCRFindTextAction={OCRFT_HIGHLIGHT:0,OCRFT_STRIKEOUT:1,OCRFT_MARKFORREDACT:2};(function(a){function b(){var c=this;c.FindText="";c.FindTextFlags=EnumDWT_OCRFindTextFlags.OCRFT_WHOLEWORD;c.FindTextAction=EnumDWT_OCRFindTextAction.OCRFT_MARKFORREDACT}a.NewRedaction=function(){return new b()}})(Dynamsoft.Lib);Dynamsoft.WebTwain={Addon:{OCRPro:{}}};(function(a){function b(){var c=this;c.RecognitionModule="";c.Languages="eng";c.OutputFormat="";c.PDFVersion="";c.PDFAVersion="";c.Redaction=Dynamsoft.Lib.NewRedaction()}a.NewSettings=function(){return new b()}})(Dynamsoft.WebTwain.Addon.OCRPro);(function(a){function b(g,f,d,c){var e=this;e.left=g;e.top=f;e.right=d;e.bottom=c}a.NewOCRZone=function(f,e,d,c){return new b(f,e,d,c)}})(Dynamsoft.WebTwain.Addon.OCRPro);(function(d){if(!d.product.bChromeEdition){return}var b=1000,c=function(){return b++};function e(f){var g=d.html5.Funs;f.__innerOCRReadFunction=function(k,r,l,q,h,i,o,j){var n=this;return n.__innerOCRAsyncReadFunction(k,r,l,q,h,i,o,j)};f.__innerOCRAsyncReadFunction=function(k,t,l,r,h,i,q,j){var o=this;var n=function(m){if(m.code==0){if(d.isFunction(q)){if(t!=-1){if(r==1){q(t,h,o.__innerGetOCRProResultAsyncFunction(m))}else{q(t,o.__innerGetOCRProResultAsyncFunction(m))}}else{if(l!=""){q(l,o.__innerGetOCRProResultAsyncFunction(m))}else{q(o.__innerGetOCRProResultAsyncFunction(m))}}}}else{if(d.isFunction(j)){j(m.code,m.message,o.__innerGetOCRProResultAsyncFunction(m))}}g.hideMask(k)},s=function(m){g.hideMask(k)};g.showMask(k);o._innerSend(k,i,true,n,s);return true};f.__innerGetRequestJson=function(n,p,h,r){var m=f;var l="[{";l+='"id":"'+f.clientId+'",';l+='"method":"OCRProRecognize",';l+='"productkey":"'+Dynamsoft.WebTwainEnv.ProductKey+'",';if(n==EnumDWT_OCRProType.OCRDT_File){l+='"inputType":"file",'}else{l+='"inputType":"index",'}l+='"input":[';for(var j=0;j<p.length;j++){if(n==EnumDWT_OCRProType.OCRDT_File){l+='"'+p[j]+'"'}else{l+=p[j]}if(j+1<p.length){l+="|"}}l+="],";l+='"settings":{';l+='"recognitionMethod": "Page"';if(h){if(h.RecognitionModule&&h.RecognitionModule.length>0){l+=',"recognitionModule":"'+h.RecognitionModule+'"'}if(h.Languages&&h.Languages.length>0){l+=',"languages":"'+h.Languages+'"'}if(h.OutputFormat&&h.OutputFormat.length>0){l+=',"outputFormat":"'+h.OutputFormat+'"'}if(h.PDFVersion&&h.PDFVersion.length>0){l+=',"pdfVersion":"'+h.PDFVersion+'"'}if(h.PDFAVersion&&h.PDFAVersion.length>0){l+=',"pdfAVersion":"'+h.PDFAVersion+'"'}if(h.Redaction&&h.Redaction.FindText&&h.Redaction.FindText.length>0){var q=parseInt(h.Redaction.FindTextFlags),o=parseInt(h.Redaction.FindTextAction);if(!isNaN(q)&&!isNaN(o)){l+=',"redaction":{';var k=h.Redaction.FindText;k=k.replace(/\"/g,'\\"');l+='"findText":"'+k+'"';l+=',"findTextFlags":'+q;l+=',"findTextAction":'+o;l+="}"}}}l+="},";l+='"zones":[';for(var j=0;j<r.length;j++){l+="["+r[j].left+","+r[j].top+","+r[j].right+","+r[j].bottom+"]";if(j+1<r.length){l+=","}}l+="],";l+='"outputFile":""';l+="}]";return l};f.__LoadImageFromBytesForDownloadInner=function(m,s,x,r,u,j,p,v,l){var q=f;var h,k,o;if(m>=r){h=j*r;o=s.slice(h,u)}else{h=m*j;k=(m+1)*j;o=s.slice(h,k)}var w=function(){if(Dynamsoft.Lib.isFunction(l)){l()}};var n=function(){if(m>=r){if(Dynamsoft.Lib.isFunction(v)){v()}return}m=m+1;q.__LoadImageFromBytesForDownloadInner(m,s,x,r,u,j,p,v,l)};q.__LoadImageFromBytes(o,x,"",p,n,w,h,u)};f.__LoadImageFromBytesForDownload=function(o,i,n,k,j,q){var m=f;var h=2*1000*1000;var p=o.size||o.length;var l=parseInt(p/h);var r=p%h;if(r==0){l=l-1}m.__LoadImageFromBytesForDownloadInner(0,o,i,l,p,h,k,j,q)};f.__innerDownload=function(m,p,i){var l=f,n;d.cancelFrome=2;m=m.toString();var k=function(){if(d.isFunction(p)){p()}return true},q=function(){if(d.isFunction(i)){i(l.ErrorCode,l.ErrorString)}return false};var h=l._innerFun("GetAddOnVersion",g.makeParams("proocr"));if(h==Dynamsoft.ProOCRVersion){k();return true}if(!m||m==""){d.Errors.OCR_InvalidRemoteFilename(l);q();return false}if(g.isServerInvalid(l)){q();return false}n="get";d.showProgress(l,"Download",true);var o=function(r){var s=(r.total===0)?100:Math.round(r.loaded*100/r.total),t=[r.loaded," / ",r.total].join("");l._OnPercentDone([0,s,"","http"])},j=true;l._OnPercentDone([0,-1,"HTTP Downloading...","http"]);if(!d.isFunction(p)){j=false}g.loadHttpBlob(l,n,m,j,function(r){l._OnPercentDone([0,-1,"Loading..."]);var s=102;l.__LoadImageFromBytesForDownload(r,s,"",j,k,q)},function(){d.closeProgress("Download");q()},o)}}var a=function(g){var h=d.html5.Funs,f;e(g);f={OCRPro:{Settings:false,Recognize:function(q,n,i){var m=[],k=parseInt(q);if(isNaN(k)){var r=Dynamsoft.Lib.NewOCRProResult(g);r._errorCode=-2201;r._errorString="Invalid parameter type";var l=[];var o=Dynamsoft.Lib.NewErrorInfo();o.input=q;o.message=r._errorString;o.page=0;l.push(o);r._errorlist=l;i(r._errorCode,r._errorString,r)}m.push(k);var p=[];var j=g.__innerGetRequestJson(EnumDWT_OCRProType.OCRDT_Index,m,this.Settings,p);return g.__innerOCRReadFunction("OCRProRecognize",q,"",0,p,j,n,i)},RecognizeRect:function(q,i,o,j){var n=[],l=parseInt(q);if(isNaN(l)){var r=Dynamsoft.Lib.NewOCRProResult(g);r._errorCode=-2201;r._errorString="Invalid parameter type.";var m=[];var p=Dynamsoft.Lib.NewErrorInfo();p.input=q;p.message=r._errorString;p.page=0;m.push(p);r._errorlist=m;j(r._errorCode,r._errorString,r)}n.push(l);var k=g.__innerGetRequestJson(EnumDWT_OCRProType.OCRDT_Index,n,this.Settings,i);return g.__innerOCRReadFunction("OCRProRecognize",q,"",1,i,k,o,j)},RecognizeFile:function(k,r,m){if(k.length==0){var u=Dynamsoft.Lib.NewOCRProResult(g);u._errorCode=-2201;u._errorString="File name cannot be empty.";var p=[];var s=Dynamsoft.Lib.NewErrorInfo();s.input=k;s.message=u._errorString;s.page=0;p.push(s);u._errorlist=p;m(u._errorCode,u._errorString,u)}var o=h.replaceLocalFilename(k);var j=[];if(o.indexOf("|")>0){j=o.split("|")}else{if(o.indexOf(";")>0){j=o.split(";")}else{if(o.indexOf(",")>0){j=o.split(",")}}}var q=[];if(j.length>0){for(var l=0;l<j.length;l++){q.push(j[l])}}else{q.push(o)}var t=[];var n=g.__innerGetRequestJson(EnumDWT_OCRProType.OCRDT_File,q,this.Settings,t);return g.__innerOCRReadFunction("OCRProRecognize",-1,k,0,t,n,r,m)},RecognizeSelectedImages:function(j,p){var m;m=h.__SetSelectedImages(g,g._UIManager.GetCurrentImageIndex(),g._UIManager.GetSelectedIndexes());if(m){var l=[];var k=g._UIManager.GetSelectedIndexes();for(var o=0;o<k.length;o++){l.push(k[o])}var n=[];var q=g.__innerGetRequestJson(EnumDWT_OCRProType.OCRDT_Index,l,this.Settings,n);m=g.__innerOCRReadFunction("OCRProRecognize",-1,"",0,n,q,j,p)}return m},Download:function(k,i,j){return g.__innerDownload(k,i,j)}}};g.__addon=g.__addon||{};d.mix(g.__addon,f)};d.DynamicLoadAddonFuns.push(a)})(Dynamsoft.Lib);
