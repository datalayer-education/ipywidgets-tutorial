"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1013,2469],{71013:(e,t,n)=>{n.r(t),n.d(t,{JavaScriptKernel:()=>s});var o=n(33598),r=n(74547);class s extends o.BaseKernel{constructor(e){super(e),this._evalFunc=new Function("window","code","return window.eval(code);"),this._ready=new r.PromiseDelegate,this._iframe=document.createElement("iframe"),this._iframe.style.visibility="hidden",this._iframe.style.position="absolute",this._iframe.style.top="-100000px",this._iframe.onload=async()=>{await this._initIFrame(),this._ready.resolve(),window.addEventListener("message",(e=>{const t=e.data;if("stream"===t.event){const e=t;this.stream(e)}}))},document.body.appendChild(this._iframe)}dispose(){this.isDisposed||(this._iframe.remove(),super.dispose())}get ready(){return this._ready.promise}async kernelInfoRequest(){return{implementation:"JavaScript",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"javascript"},file_extension:".js",mimetype:"text/javascript",name:"javascript",nbconvert_exporter:"javascript",pygments_lexer:"javascript",version:"es2017"},protocol_version:"5.3",status:"ok",banner:"A JavaScript kernel running in the browser",help_links:[{text:"JavaScript Kernel",url:"https://github.com/jupyterlite/jupyterlite"}]}}async executeRequest(e){const{code:t}=e;try{const e=this._eval(t);return this.publishExecuteResult({execution_count:this.executionCount,data:{"text/plain":e},metadata:{}}),{status:"ok",execution_count:this.executionCount,user_expressions:{}}}catch(e){const{name:t,stack:n,message:o}=e;return this.publishExecuteError({ename:t,evalue:o,traceback:[`${n}`]}),{status:"error",execution_count:this.executionCount,ename:t,evalue:o,traceback:[`${n}`]}}}async completeRequest(e){var t,n;const o=this._evalFunc(this._iframe.contentWindow,"Object.keys(window)"),{code:r,cursor_pos:s}=e,i=null!==(n=(null!==(t=r.slice(0,s).match(/(\w+)$/))&&void 0!==t?t:[])[0])&&void 0!==n?n:"";return{matches:o.filter((e=>e.startsWith(i))),cursor_start:s-i.length,cursor_end:s,metadata:{},status:"ok"}}async inspectRequest(e){throw new Error("Not implemented")}async isCompleteRequest(e){throw new Error("Not implemented")}async commInfoRequest(e){throw new Error("Not implemented")}inputReply(e){throw new Error("Not implemented")}async commOpen(e){throw new Error("Not implemented")}async commMsg(e){throw new Error("Not implemented")}async commClose(e){throw new Error("Not implemented")}_eval(e){return this._evalFunc(this._iframe.contentWindow,e)}async _initIFrame(){this._iframe.contentWindow&&this._evalFunc(this._iframe.contentWindow,'\n        console._log = console.log;\n        console._error = console.error;\n\n        window._bubbleUp = function(msg) {\n          window.parent.postMessage(msg);\n        }\n\n        console.log = function() {\n          const args = Array.prototype.slice.call(arguments);\n          window._bubbleUp({\n            "event": "stream",\n            "name": "stdout",\n            "text": args.join(\' \') + \'\\n\'\n          });\n        };\n        console.info = console.log;\n\n        console.error = function() {\n          const args = Array.prototype.slice.call(arguments);\n          window._bubbleUp({\n            "event": "stream",\n            "name": "stderr",\n            "text": args.join(\' \') + \'\\n\'\n          });\n        };\n        console.warn = console.error;\n\n        window.onerror = function(message, source, lineno, colno, error) {\n          console.error(message);\n        }\n      ')}}}}]);
//# sourceMappingURL=1013.68b7ba5.js.map