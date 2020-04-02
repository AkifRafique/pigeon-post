(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20920028"],{3028:function(s,e,r){"use strict";var t=r("906f"),o=r.n(t);o.a},"906f":function(s,e,r){},a55b:function(s,e,r){"use strict";r.r(e);var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{attrs:{id:"login"}},[r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:s.performingRequest,expression:"performingRequest"}],staticClass:"loading"},[r("p",[s._v("Loading...")])])]),r("section",[r("div",{staticClass:"login"},[s.showLoginForm&&!s.showForgotPassword?r("form",{on:{submit:function(s){s.preventDefault()}}},[s._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.loginForm.email,expression:"loginForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"email",id:"email1"},domProps:{value:s.loginForm.email},on:{input:function(e){e.target.composing||s.$set(s.loginForm,"email",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.loginForm.password,expression:"loginForm.password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"password",id:"password1"},domProps:{value:s.loginForm.password},on:{input:function(e){e.target.composing||s.$set(s.loginForm,"password",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("button",{staticClass:"button",on:{click:s.login}},[s._v("LOGIN")]),r("div",{staticClass:"extras"},[r("a",{on:{click:s.togglePasswordReset}},[r("span",{staticClass:"gray-text"},[s._v("Forgot Your Password?")]),s._v(" Reset Password ")]),r("a",{on:{click:s.toggleForm}},[r("span",{staticClass:"gray-text"},[s._v("Not Registered?")]),s._v(" Sign Up ")])])]):s.showLoginForm||s.showForgotPassword?r("form",{on:{submit:function(s){s.preventDefault()}}},[s.passwordResetSuccess?r("div",{staticClass:"password-form"},[r("h1",[s._v("Email Sent")]),r("p",[s._v("Check your email for a link to reset your password")]),r("button",{staticClass:"button",on:{click:s.togglePasswordReset}},[s._v("Back to Log In")])]):r("div",{staticClass:"password-form"},[r("h1",[s._v("Reset Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.passwordForm.email,expression:"passwordForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"email",id:"email3"},domProps:{value:s.passwordForm.email},on:{input:function(e){e.target.composing||s.$set(s.passwordForm,"email",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("button",{staticClass:"button",on:{click:s.resetPassword}},[s._v("Submit")]),r("div",{staticClass:"extras"},[r("a",{on:{click:s.togglePasswordReset}},[s._v("Back to Log In")])])])]):r("form",{on:{submit:function(s){s.preventDefault()}}},[r("h1",[s._v("Get Started")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.signupForm.username,expression:"signupForm.username",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"username",id:"username"},domProps:{value:s.signupForm.username},on:{input:function(e){e.target.composing||s.$set(s.signupForm,"username",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.signupForm.name,expression:"signupForm.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"nickname",id:"nickname"},domProps:{value:s.signupForm.name},on:{input:function(e){e.target.composing||s.$set(s.signupForm,"name",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.signupForm.email,expression:"signupForm.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"email",id:"email2"},domProps:{value:s.signupForm.email},on:{input:function(e){e.target.composing||s.$set(s.signupForm,"email",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:s.signupForm.password,expression:"signupForm.password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"password",id:"password2"},domProps:{value:s.signupForm.password},on:{input:function(e){e.target.composing||s.$set(s.signupForm,"password",e.target.value.trim())},blur:function(e){return s.$forceUpdate()}}}),r("button",{staticClass:"button",on:{click:s.signup}},[s._v("Sign Up")]),r("div",{staticClass:"extras"},[r("a",{on:{click:s.toggleForm}},[r("span",{staticClass:"gray-text"},[s._v("Already Registered?")]),s._v(" Log In ")])])]),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:""!==s.errorMsg,expression:"errorMsg !== ''"}],staticClass:"error-msg"},[r("p",[s._v(s._s(s.errorMsg))])])])],1)])],1)},o=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"logo"},[t("h1",[s._v("Pigeon Post")]),t("img",{attrs:{src:r("9952")}})])}];const i=r("1543");var a={data(){return{loginForm:{email:"",password:""},signupForm:{username:"",name:"",email:"",password:""},passwordForm:{email:""},showLoginForm:!0,showForgotPassword:!1,passwordResetSuccess:!1,performingRequest:!1,errorMsg:""}},methods:{resetPassword(){this.performingRequest=!0,this.errorMsg="",i.auth.sendPasswordResetEmail(this.passwordForm.email).then(()=>{this.performingRequest=!1,this.passwordResetSuccess=!0,this.passwordForm.email=""}).catch(s=>{console.log(s),this.performingRequest=!1,this.errorMsg=s.message})},toggleForm(){this.errorMsg="",this.showLoginForm=!this.showLoginForm},togglePasswordReset(){this.errorMsg="",this.showForgotPassword?(this.showLoginForm=!0,this.showForgotPassword=!1,this.passwordResetSuccess=!1):(this.showLoginForm=!1,this.showForgotPassword=!0)},signup(){this.performingRequest=!0,i.auth.createUserWithEmailAndPassword(this.signupForm.email,this.signupForm.password).then(s=>{this.$store.commit("setCurrentUser",s.user),i.usersCollections.doc(s.user.uid).set({username:this.signupForm.username,name:this.signupForm.name,bio:"Edit your profile and write something interesting!",createdOn:new Date,following:0,followers:0}).then(()=>{this.$store.dispatch("fetchUserProfile",s.user),this.performingRequest=!1,this.$router.push("/dashboard")}).catch(s=>{console.log(s),this.performingRequest=!1,this.errorMsg=s.message})}).catch(s=>{console.log(s),this.performingRequest=!1,this.errorMsg=s.message})},login(){this.performingRequest=!0,i.auth.signInWithEmailAndPassword(this.loginForm.email,this.loginForm.password).then(s=>{this.$store.commit("setCurrentUser",s.user),this.$store.dispatch("fetchUserProfile",s.user),this.$router.push("/dashboard")}).catch(s=>{console.log(s),this.performingRequest=!1,this.errorMsg=s.message})}}},n=a,m=(r("3028"),r("2877")),l=Object(m["a"])(n,t,o,!1,null,"3322e156",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-20920028.442a4f9c.js.map