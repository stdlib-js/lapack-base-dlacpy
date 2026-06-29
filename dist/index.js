"use strict";var w=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(l){throw (e=0, l)}};};var R=w(function(ur,C){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),d=require('@stdlib/math-base-special-fast-min/dist');function K(v,e,l,u,c,f,i,o,p,q){var r,t,a,n,x,s,O,m,y,b,g,j,E,h;for(h=J([v,e],[u,c],[o,p]),x=h.sh,m=h.sx,y=h.sy,s=x[0],O=x[1],r=m[0],t=m[1]-s*m[0],a=y[0],n=y[1]-s*y[0],b=f,g=q,E=0;E<O;E++){for(j=0;j<s;j++)i[g]=l[b],b+=r,g+=a;b+=t,g+=n}return i}function P(v,e,l,u,c,f,i,o,p,q){var r,t,a,n;if(r=f,t=q,_([u,c])){for(n=0;n<v;n++){for(a=n;a<e;a++)i[t+a*p]=l[r+a*c];r+=u,t+=o}return i}for(n=0;n<e;n++){for(a=0;a<=d(n,v-1);a++)i[t+a*o]=l[r+a*u];r+=c,t+=p}return i}function Q(v,e,l,u,c,f,i,o,p,q){var r,t,a,n;if(r=f,t=q,_([u,c])){for(n=0;n<v;n++){for(a=0;a<=d(n,e-1);a++)i[t+a*p]=l[r+a*c];r+=u,t+=o}return i}for(n=0;n<e;n++){for(a=n;a<v;a++)i[t+a*o]=l[r+a*u];r+=c,t+=p}return i}function W(v,e,l,u,c,f,i,o,p,q,r){return v==="upper"?P(e,l,u,c,f,i,o,p,q,r):v==="lower"?Q(e,l,u,c,f,i,o,p,q,r):K(e,l,u,c,f,i,o,p,q,r)}C.exports=W
});var T=w(function(ir,F){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=R();function $(v,e,l,u,c,f,i,o){var p,q,r,t;if(!X(v))throw new TypeError(S('1ypFx',v));if(Y(v))p=1,q=f,r=1,t=o;else{if(f<u)throw new RangeError(S('1ypG8',u,f));if(o<u)throw new RangeError(S('1ypG9',u,o));p=f,q=1,r=o,t=1}return Z(e,l,u,c,p,q,0,i,r,t,0)}F.exports=$
});var k=w(function(nr,U){
var M=R();function L(v,e,l,u,c,f,i,o,p,q,r){return M(v,e,l,u,c,f,i,o,p,q,r)}U.exports=L
});var H=w(function(vr,G){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=T(),N=k();D(z,"ndarray",N);G.exports=z
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),rr=require('@stdlib/assert-is-error/dist'),ar=H(),V,I=B(A(__dirname,"./native.js"));rr(I)?V=ar:V=I;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
