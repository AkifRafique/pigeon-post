(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69bb8525"],{4289:function(s,t,e){},"4cc6":function(s,t,e){"use strict";var i=e("4289"),r=e.n(i);r.a},c66d:function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"profile"},[e("div",{staticClass:"profile-card"},[e("div",{staticClass:"header"}),s._m(0),e("div",{staticClass:"profile-content"},[e("div",{staticClass:"nickname"},[e("p",[s._v(s._s(s.userProfile.name))])]),e("div",{staticClass:"username"},[e("p",[s._v("@"+s._s(s.userProfile.username))])]),e("div",{staticClass:"bio"},[e("p",[s._v(s._s(s.userProfile.bio))])]),e("div",{staticClass:"metadata"},[e("div",{staticClass:"createdOn"},[e("p",[s._v("Joined "+s._s(s._f("formatDate")(s.userProfile.createdOn)))])])]),e("div",{staticClass:"follow-container"},[e("div",{staticClass:"following"},[e("p",[e("span",[s._v(s._s(s.userProfile.following))]),s._v(" Following ")])]),e("div",{staticClass:"followers"},[e("p",[e("span",[s._v(s._s(s.userProfile.followers))]),s._v(" Followers ")])])])])]),s.filteredPostsByProfile.length?e("div",[e("div",{staticClass:"feed"},s._l(s.filteredPostsByProfile,(function(s){return e("Post",{key:s.id,staticClass:"post",attrs:{post:s}})})),1)]):e("div",{staticClass:"no-results"},[e("p",[s._v("You haven't posted anything yet!")])])])},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"profile-pic"},[e("div",{staticClass:"img"})])}],a=e("2f62"),o=e("9c93"),l=e("c1df"),n=e.n(l),c={data(){return{}},props:{profileId:{type:String,required:!0}},created(){this.$store.dispatch("fetchUserProfile",this.profileId)},computed:{...Object(a["b"])(["userProfile","currentUser","posts","hiddenPosts"]),filteredPostsByProfile(){return this.posts.filter(s=>s.userId===this.userProfile.id)}},filters:{formatDate(s){if(!s)return"-";let t=s.toDate();return n()(t).format("MMMM YYYY")}},components:{Post:o["a"]}},f=c,d=(e("4cc6"),e("2877")),u=Object(d["a"])(f,i,r,!1,null,"27844608",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-69bb8525.4a23ca15.js.map