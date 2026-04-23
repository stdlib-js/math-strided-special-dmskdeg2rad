"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=u(function(C,v){
var x=require('@stdlib/strided-base-dmskmap/dist'),l=require('@stdlib/math-base-special-deg2rad/dist');function R(e,r,a,i,s,t,d){return x(e,r,a,i,s,t,d,l)}v.exports=R
});var o=u(function(D,m){
var _=require('@stdlib/strided-base-dmskmap/dist').ndarray,E=require('@stdlib/math-base-special-deg2rad/dist');function O(e,r,a,i,s,t,d,y,f,j){return _(e,r,a,i,s,t,d,y,f,j,E)}m.exports=O
});var g=u(function(F,p){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),h=o();b(c,"ndarray",h);p.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=g(),n,k=z(w(__dirname,"./native.js"));k instanceof Error?n=A:n=k;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
