import t from"vue-text-mask";import e from"text-mask-addons/dist/createNumberMask";var n=function(t,e,n,o,a,i,r,s,u,d){"boolean"!=typeof r&&(u=s,s=r,r=!1);var l,c="function"==typeof n?n.options:n;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),o&&(c._scopeId=o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):e&&(l=r?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(c.functional){var f=c.render;c.render=function(t,e){return l.call(e),f(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return n}({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("masked-input",{attrs:{type:"text",mask:t.nairaMask,guide:!1},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})},staticRenderFns:[]},void 0,{name:"NairaInput",components:{MaskedInput:t},props:{initialAmount:{type:Number,default:function(){return 0}}},data:function(){return{nairaMask:e({prefix:"₦",allowDecimal:!0}),amount:""+this.initialAmount}},watch:{amount:function(t){var e=t.length?parseFloat(t.replace(/[₦,]/g,"")):0;this.$emit("input",e)}},methods:{clear:function(){this.amount=""}}},void 0,!1,void 0,void 0,void 0);function o(t){o.installed||(o.installed=!0,t.component("NairaInput",n))}var a={install:o},i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(a),n.install=o;export default n;
