"use strict";var w=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var R=w(function(ur,C){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),d=require('@stdlib/math-base-special-fast-min/dist');function K(v,u,f,e,l,p,i,o,c,q){var r,t,a,n,x,s,O,m,y,b,g,j,E,h;for(h=J([v,u],[e,l],[o,c]),x=h.sh,m=h.sx,y=h.sy,s=x[0],O=x[1],r=m[0],t=m[1]-s*m[0],a=y[0],n=y[1]-s*y[0],b=p,g=q,E=0;E<O;E++){for(j=0;j<s;j++)i[g]=f[b],b+=r,g+=a;b+=t,g+=n}return i}function P(v,u,f,e,l,p,i,o,c,q){var r,t,a,n;if(r=p,t=q,_([e,l])){for(n=0;n<v;n++){for(a=n;a<u;a++)i[t+a*c]=f[r+a*l];r+=e,t+=o}return i}for(n=0;n<u;n++){for(a=0;a<=d(n,v-1);a++)i[t+a*o]=f[r+a*e];r+=l,t+=c}return i}function Q(v,u,f,e,l,p,i,o,c,q){var r,t,a,n;if(r=p,t=q,_([e,l])){for(n=0;n<v;n++){for(a=0;a<=d(n,u-1);a++)i[t+a*c]=f[r+a*l];r+=e,t+=o}return i}for(n=0;n<u;n++){for(a=n;a<v;a++)i[t+a*o]=f[r+a*e];r+=l,t+=c}return i}function W(v,u,f,e,l,p,i,o,c,q,r){return v==="upper"?P(u,f,e,l,p,i,o,c,q,r):v==="lower"?Q(u,f,e,l,p,i,o,c,q,r):K(u,f,e,l,p,i,o,c,q,r)}C.exports=W
});var T=w(function(ir,F){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=R();function $(v,u,f,e,l,p,i,o){var c,q,r,t;if(!X(v))throw new TypeError(S('1ypFx',v));if(Y(v))c=1,q=p,r=1,t=o;else{if(p<e)throw new RangeError(S('1ypG8',e,p));if(o<e)throw new RangeError(S('1ypG9',e,o));c=p,q=1,r=o,t=1}return Z(u,f,e,l,c,q,0,i,r,t,0)}F.exports=$
});var k=w(function(nr,U){
var M=R();function L(v,u,f,e,l,p,i,o,c,q,r){return M(v,u,f,e,l,p,i,o,c,q,r)}U.exports=L
});var H=w(function(vr,G){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=T(),N=k();D(z,"ndarray",N);G.exports=z
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),rr=require('@stdlib/assert-is-error/dist'),ar=H(),V,I=B(A(__dirname,"./native.js"));rr(I)?V=ar:V=I;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
