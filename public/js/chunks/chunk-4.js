webpackJsonp([4],{"2u+0":function(t,e,i){"use strict";var s=i("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={methods:r({},Object(s.mapActions)("roles",["clearForm"])),computed:r({},Object(s.mapState)({roles:function(t){return t.roles}}))}},"648m":function(t,e,i){"use strict";var s=i("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={methods:r({},Object(s.mapActions)("advisors",["clearForm"])),computed:r({},Object(s.mapState)({advisors:function(t){return t.advisors}}))}},"8nzx":function(t,e,i){"use strict";e.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(t){this.$store.dispatch(this.service.name+"/setPerPage",t)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(t){return this.$store.dispatch(this.service.name+"/select",t)},save:function(t){return this.$store.dispatch(this.service.name+"/save",t)},mutateSetErrors:function(t){this.$store.commit(this.service.name+"/mutateSetErrors",t)},mutateFormData:function(t){this.$store.commit(this.service.name+"/mutateFormData",t)},mutateSetFormField:function(t){this.$store.commit(this.service.name+"/mutateSetFormField",t)},mutateSetService:function(t){this.$store.commit(this.service.name+"/mutateSetService",t)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var t=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){t.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var t=this,e="update"===this.mode?_.find(this.rows,function(e){return e.id===t.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(e),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var t=this;this.save(this.mode).then(function(){t.back(),t.clearForm()})},can:function(t){return t&&!1},cannot:function(t){return!can(t)},gotoPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(i=i||this.pagination).current_page!==t&&(t<1||t>i.last_page||this.$store.dispatch((e||this.service.name)+"/setCurrentPage",t))},isCurrent:function(t,e){return t.id===e.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},KOnr:function(t,e,i){"use strict";var s=i("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={data:function(){return{people_current:{id:"null"}}},methods:r({},Object(s.mapActions)("people",["clearForm"]),{makePhotoUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t||(t=this.people.form.fields.photoUrl),t||(t=this.people.selected.photoUrl);var e=this.people_current.id!=this.people.selected.id;return this.people_current.id=this.people.selected.id,flush_image_cache(t,e)}}),computed:r({},Object(s.mapState)({people:function(t){return t.people},personInstitutions:function(t){return t.personInstitutions},contacts:function(t){return t.contacts},addresses:function(t){return t.addresses},personCategories:function(t){return t.personCategories},advisors:function(t){return t.advisors},advisorContacts:function(t){return t.advisorContacts}}))}},KU0h:function(t,e,i){var s=i("VU/8")(i("pK47"),i("U4Pz"),!1,function(t){i("QqWx")},null,null);t.exports=s.exports},QqWx:function(t,e,i){var s=i("XwO4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("ac6dfa08",s,!0,{})},U4Pz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"py-2 text-center"},[i("h2",[t._v(t._s("create"===this.mode?"Novo ":"Editar ")+"Assessor")]),t._v(" "),i("h2",[t._v(" "+t._s(t.form.fields.name?t.form.fields.name:""))])]),t._v(" "),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-8"},[i("form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-3"},[i("app-select",{attrs:{name:"advised_id",label:"Assessor",required:!0,form:t.form,options:t.environment.tables.people},model:{value:t.form.fields.person_id,callback:function(e){t.$set(t.form.fields,"person_id",e)},expression:"form.fields.person_id"}}),t._v(" "),i("app-person-institution-field",{attrs:{form:t.form,environment:t.environment}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-right mb-3"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.saveModel()}}},[t._v("\n                            gravar\n                        ")]),t._v(" "),i("router-link",{staticClass:"btn btn-success",attrs:{to:"/people/",tag:"button"}},[t._v("\n                            cancelar\n                        ")])],1)])])])])])},staticRenderFns:[]}},XwO4:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},pK47:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("8nzx"),r=i("KOnr"),n=i("648m"),o=i("2u+0"),a={name:"advisors",uri:"people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/advisors",isForm:!0};e.default={props:["mode","source"],mixins:[s.a,r.a,n.a,o.a],data:function(){return this.$store.dispatch("environment/loadRoles"),this.$store.dispatch("environment/loadInstitutions"),this.$store.dispatch("environment/loadPeople"),{service:a}},methods:{fillAdditionalFormFields:function(){"create"===this.mode?this.$store.dispatch("advisors/clearForm",{root:!0}):"update"===this.mode&&this.$store.commit("advisors/mutateFormData",this.advisors.selected),this.$store.commit("advisors/mutateSetFormField",{field:"advised_id",value:this.personInstitutions.selected.id})}}}}});