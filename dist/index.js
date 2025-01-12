"use strict";var w=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var R=w(function(er,F){
var _=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/ndarray-base-unary-loop-interchange-order/dist'),d=require('@stdlib/math-base-special-fast-min/dist');function K(i,u,f,e,l,p,n,o,c,q){var r,t,a,v,x,m,O,s,y,b,g,j,E,h;for(h=J([i,u],[e,l],[o,c]),x=h.sh,s=h.sx,y=h.sy,m=x[0],O=x[1],r=s[0],t=s[1]-m*s[0],a=y[0],v=y[1]-m*y[0],b=p,g=q,E=0;E<O;E++){for(j=0;j<m;j++)n[g]=f[b],b+=r,g+=a;b+=t,g+=v}return n}function P(i,u,f,e,l,p,n,o,c,q){var r,t,a,v;if(r=p,t=q,_([e,l])){for(v=0;v<i;v++){for(a=v;a<u;a++)n[t+a*c]=f[r+a*l];r+=e,t+=o}return n}for(v=0;v<u;v++){for(a=0;a<=d(v,i-1);a++)n[t+a*o]=f[r+a*e];r+=l,t+=c}return n}function Q(i,u,f,e,l,p,n,o,c,q){var r,t,a,v;if(r=p,t=q,_([e,l])){for(v=0;v<i;v++){for(a=0;a<=d(v,u-1);a++)n[t+a*c]=f[r+a*l];r+=e,t+=o}return n}for(v=0;v<u;v++){for(a=v;a<i;a++)n[t+a*o]=f[r+a*e];r+=l,t+=c}return n}function W(i,u,f,e,l,p,n,o,c,q,r){return i==="upper"?P(u,f,e,l,p,n,o,c,q,r):i==="lower"?Q(u,f,e,l,p,n,o,c,q,r):K(u,f,e,l,p,n,o,c,q,r)}F.exports=W
});var U=w(function(ur,T){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=R();function Z(i,u,f,e,l,p,n,o){var c,q,r,t;if(!X(i))throw new TypeError(S('1ypFx',i));if(i==="column-major")c=1,q=p,r=1,t=o;else{if(p<e)throw new RangeError(S('1ypG8',e,p));if(o<e)throw new RangeError(S('1ypG9',e,o));c=p,q=1,r=o,t=1}return Y(u,f,e,l,c,q,0,n,r,t,0)}T.exports=Z
});var z=w(function(nr,k){
var $=R();function M(i,u,f,e,l,p,n,o,c,q,r){return $(i,u,f,e,l,p,n,o,c,q,r)}k.exports=M
});var H=w(function(vr,G){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=U(),D=z();L(C,"ndarray",D);G.exports=C
});var N=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),rr=H(),V,I=A(N(__dirname,"./native.js"));B(I)?V=rr:V=I;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
