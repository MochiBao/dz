var t={};t=function(){var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",h="month",f="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||n[0])+"]"}},D=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},v={s:D,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+D(r,2,"0")+":"+D(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,h),s=e-i<0,u=n.clone().add(r+(s?-1:1),h);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:h,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=m;var S=function(t){return t instanceof O},Y=function t(n,e,r){var i;if(!n)return y;if("string"==typeof n){var s=n.toLowerCase();g[s]&&(i=s),e&&(g[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;g[a]=n,i=a}return!r&&i&&(y=i),i||!r&&y},p=function(t,n){if(S(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new O(e)},w=v;w.l=Y,w.i=S,w.w=function(t,n){return p(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var O=function(){function m(t){this.$L=Y(t.locale,null,!0),this.parse(t)}var D=m.prototype;return D.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(w.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},D.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},D.$utils=function(){return w},D.isValid=function(){return!(this.$d.toString()===$)},D.isSame=function(t,n){var e=p(t);return this.startOf(n)<=e&&e<=this.endOf(n)},D.isAfter=function(t,n){return p(t)<this.startOf(n)},D.isBefore=function(t,n){return this.endOf(n)<p(t)},D.$g=function(t,n,e){return w.u(t)?this[n]:this.set(e,t)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(t,n){var e=this,r=!!w.u(n)||n,f=w.p(t),$=function(t,n){var i=w.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},l=function(t,n){return w.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},M=this.$W,m=this.$M,D=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case c:return r?$(1,0):$(31,11);case h:return r?$(1,m):$(0,m+1);case o:var y=this.$locale().weekStart||0,g=(M<y?M+7:M)-y;return $(r?D-g:D+(6-g),m);case a:case d:return l(v+"Hours",0);case u:return l(v+"Minutes",1);case s:return l(v+"Seconds",2);case i:return l(v+"Milliseconds",3);default:return this.clone()}},D.endOf=function(t){return this.startOf(t,!1)},D.$set=function(t,n){var e,o=w.p(t),f="set"+(this.$u?"UTC":""),$=(e={},e[a]=f+"Date",e[d]=f+"Date",e[h]=f+"Month",e[c]=f+"FullYear",e[u]=f+"Hours",e[s]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[o],l=o===a?this.$D+(n-this.$W):n;if(o===h||o===c){var M=this.clone().set(d,1);M.$d[$](l),M.init(),this.$d=M.set(d,Math.min(this.$D,M.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},D.set=function(t,n){return this.clone().$set(t,n)},D.get=function(t){return this[w.p(t)]()},D.add=function(r,f){var d,$=this;r=Number(r);var l=w.p(f),M=function(t){var n=p($);return w.w(n.date(n.date()+Math.round(t*r)),$)};if(l===h)return this.set(h,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return M(1);if(l===o)return M(7);var m=(d={},d[s]=n,d[u]=e,d[i]=t,d)[l]||1,D=this.$d.getTime()+r*m;return w.w(D,this)},D.subtract=function(t,n){return this.add(-1*t,n)},D.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,u=this.$m,a=this.$M,o=e.weekdays,h=e.months,f=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},c=function(t){return w.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:f(e.monthsShort,a,h,3),MMMM:f(h,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,o,2),ddd:f(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:w.s(u,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(M,(function(t,n){return n||l[t]||i.replace(":","")}))},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(r,d,$){var l,M=w.p(d),m=p(r),D=(m.utcOffset()-this.utcOffset())*n,v=this-m,y=w.m(this,m);return y=(l={},l[c]=y/12,l[h]=y,l[f]=y/3,l[o]=(v-D)/6048e5,l[a]=(v-D)/864e5,l[u]=v/e,l[s]=v/n,l[i]=v/t,l)[M]||v,$?y:w.a(y)},D.daysInMonth=function(){return this.endOf(h).$D},D.$locale=function(){return g[this.$L]},D.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=Y(t,n,!0);return r&&(e.$L=r),e},D.clone=function(){return w.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},m}(),L=O.prototype;return p.prototype=L,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",h],["$y",c],["$D",d]].forEach((function(t){L[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),p.extend=function(t,n){return t.$i||(t(n,O,p),t.$i=!0),p},p.locale=Y,p.isDayjs=S,p.unix=function(t){return p(1e3*t)},p.en=g[y],p.Ls=g,p.p={},p}();var n;n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};const e=t();console.log(e.format("dddd/MMMM/YYYY H:m:s A"));
//# sourceMappingURL=index.efb71bf7.js.map
