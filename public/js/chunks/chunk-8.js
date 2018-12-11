webpackJsonp([8],{"2gEq":function(t,e,i){"use strict";var n=i("NYxO"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.a={methods:a({},Object(n.mapActions)("events",["clearForm"])),computed:a({},Object(n.mapState)({events:function(t){return t.events},subEvents:function(t){return t.subEvents},invitations:function(t){return t.invitations}}))}},"7OD6":function(t,e,i){var n=i("VU/8")(i("PoP0"),i("GjvQ"),!1,function(t){i("lHJl")},null,null);t.exports=n.exports},"8nzx":function(t,e,i){"use strict";e.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(t){this.$store.dispatch(this.service.name+"/setPerPage",t)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(t){return this.$store.dispatch(this.service.name+"/select",t)},save:function(t){return this.$store.dispatch(this.service.name+"/save",t)},mutateSetErrors:function(t){this.$store.commit(this.service.name+"/mutateSetErrors",t)},mutateFormData:function(t){this.$store.commit(this.service.name+"/mutateFormData",t)},mutateSetFormField:function(t){this.$store.commit(this.service.name+"/mutateSetFormField",t)},mutateSetService:function(t){this.$store.commit(this.service.name+"/mutateSetService",t)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var t=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){t.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var t=this,e="update"===this.mode?_.find(this.rows,function(e){return e.id===t.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(e),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var t=this;this.save(this.mode).then(function(){t.back(),t.clearForm()})},can:function(t){return t&&!1},cannot:function(t){return!can(t)},gotoPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(i=i||this.pagination).current_page!==t&&(t<1||t>i.last_page||this.$store.dispatch((e||this.service.name)+"/setCurrentPage",t))},isCurrent:function(t,e){return t.id===e.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},GjvQ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"py-2 text-center"},[t._m(0),t._v(" "),t.selected.id&&t.events.data.links?i("div",{staticClass:"row bg-primary text-white"},[i("div",{staticClass:"col-12 mt-2"},[i("h3",[t._v("\n                    "+t._s(t.selected.name)+"\n\n                    "),t.subEvents.selected&&t.subEvents.selected.id==t.events.selected.id&&t.subEvents.selected.name?i("span",[t._v("\n                        - "+t._s(t.subEvents.selected.name)+"\n                    ")]):t._e()])])]):t._e()]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[t.events.data.links?i("app-table-panel",{attrs:{title:"Eventos ("+t.pagination.total+")","add-button":{uri:"/events/create",disabled:t.cannot("create"),dusk:"createEventButton"},"per-page":t.eventsPerPage,"filter-text":t.eventsFilterText},on:{"set-per-page":function(e){t.eventsPerPage=e},"input-filter-text":function(e){t.eventsFilterText=e.target.value}}},[i("app-table",{attrs:{pagination:t.events.data.links.pagination,columns:["Nome",""]},on:{"goto-page":function(e){t.eventsGotoPage(e)}}},t._l(t.events.data.rows,function(e){return i("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.selected)},on:{click:function(i){t.selectEvent(e)}}},[i("td",{staticClass:"align-middle text-left"},[t._v(t._s(e.name))]),t._v(" "),i("td",{staticClass:"align-middle text-right"},[i("button",{staticClass:"btn btn-info btn-sm text-white btn-table-utility ml-1 pull-right",attrs:{disabled:t.cannot("update")||!t.environment.debug,title:"Enviar todas as credenciais não enviadas"},on:{click:function(i){t.sendCredentials(e)}}},[e.busy?t._e():i("i",{staticClass:"fa fa-landmark"}),t._v(" "),e.busy?i("i",{staticClass:"fa fa-cog fa-spin"}):t._e()]),t._v(" "),i("button",{staticClass:"btn btn-warning btn-sm btn-table-utility ml-1 pull-right",attrs:{disabled:t.cannot("update"),title:"Enviar todos os convites não enviados"},on:{click:function(i){t.sendInvitations(e)}}},[e.busy?t._e():i("i",{staticClass:"fa fa-angle-double-right"}),t._v(" "),e.busy?i("i",{staticClass:"fa fa-cog fa-spin"}):t._e()]),t._v(" "),i("router-link",{staticClass:"btn btn-danger btn-sm btn-table-utility ml-1 pull-right",attrs:{to:"/events/"+e.id+"/update",tag:"button",disabled:t.cannot("update"),title:"Editar Evento"}},[i("i",{staticClass:"fa fa-edit"})])],1)])}))],1):t._e()],1),t._v(" "),i("div",{staticClass:"col-8"},[t.selected.id&&t.subEvents.data.links?i("app-table-panel",{attrs:{title:t.selected.name+" ("+t.subEvents.data.links.pagination.total+" subeventos)","add-button":{uri:"/events/"+t.subEvents.event.id+"/sub-events/create",disabled:t.cannot("create")},"per-page":t.subEventsPerPage,"filter-text":t.subEventsFilterText},on:{"set-per-page":function(e){t.subEventsPerPage=e},"input-filter-text":function(e){t.subEventsFilterText=e.target.value}}},[i("app-table",{attrs:{pagination:t.subEvents.data.links.pagination,columns:["Setor","Nome",{title:"Convidados",trClass:"text-right"},"Data","Hora","Confirmado","Realizado",""]},on:{"goto-page":function(e){t.subEventsGotoPage(e)}}},t._l(t.subEvents.data.rows,function(e){return i("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.subEvents.selected)},on:{click:function(i){t.selectSubEvent(e)}}},[i("td",{staticClass:"align-middle"},[i("span",{staticClass:"badge text-white p-2",style:{"background-color":e.sector?e.sector.color:"","text-transform":"uppercase"}},[t._v("\n                                "+t._s(e.sector?e.sector.name:"")+"\n                            ")])]),t._v(" "),i("td",{staticClass:"align-middle"},[i("strong",[t._v(t._s(e.name))]),i("br"),t._v("\n                            "+t._s(e.place)+"\n                        ")]),t._v(" "),i("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.invitations_count))]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v(t._s(e.date))]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v(t._s(e.time))]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v(t._s(e.confirmed_at))]),t._v(" "),i("td",{staticClass:"align-middle"},[t._v(t._s(e.ended_at))]),t._v(" "),i("td",{staticClass:"align-middle text-right subevents-buttons"},[e.associated_subevent_id?t._e():i("button",{staticClass:"btn btn-info btn-sm btn-table-utility text-white ml-1 pull-right",attrs:{disabled:t.cannot("update"),title:"Replicar textos para todos os outros subeventos"},on:{click:function(i){t.replicateCommonInfo(e)}}},[i("i",{staticClass:"fa fa-copy"})]),t._v(" "),e.confirmed_at?t._e():i("button",{staticClass:"btn btn-success btn-sm btn-table-utility ml-1 pull-right",attrs:{disabled:t.cannot("update")||!t.environment.events.confirmation.enabled,title:"Confirmar Sub-evento"},on:{click:function(i){t.confirmSubEvent(e)}}},[i("i",{staticClass:"fa fa-check"})]),t._v(" "),!e.ended_at&&e.confirmed_at?i("button",{staticClass:"btn btn-primary btn-sm btn-table-utility ml-1 pull-right",attrs:{disabled:t.cannot("update"),title:"Finalizar Sub-evento"},on:{click:function(i){t.finalizeSubEvent(e)}}},[i("i",{staticClass:"fa fa-times-circle"})]):t._e(),t._v(" "),i("router-link",{staticClass:"btn btn-danger btn-sm btn-table-utility ml-1 pull-right",attrs:{to:"events/"+t.subEvents.event.id+"/sub-events/"+e.id+"/update",tag:"button",disabled:t.cannot("update"),title:"Editar Sub-evento"}},[i("i",{staticClass:"fa fa-edit"})]),t._v(" "),i("button",{staticClass:"btn btn-warning btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Imprimir lista de convidados"},on:{click:function(i){t.downloadSubEventPDF(e)}}},[t.downloading?t._e():i("i",{staticClass:"fa fa-print"}),t._v(" "),t.downloading?i("i",{staticClass:"fa fa-cog fa-spin"}):t._e()])],1)])}))],1):t._e()],1)]),t._v(" "),t.invitations.subEvent.id?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t.selected.id&&t.invitations.data.links?i("app-table-panel",{attrs:{title:t.invitations.data.links.pagination.total+" convidado"+(1==t.invitations.data.links.pagination.total?"":"s")+" para "+t.subEvents.selected.name+" de "+t.selected.name,"add-button":{uri:"/events/"+t.subEvents.event.id+"/sub-events/"+t.subEvents.selected.id+"/invitations/create",disabled:t.cannot("create")},"per-page":t.invitationsPerPage,"filter-text":t.invitationsFilterText,"dont-center-filters":"true"},on:{"set-per-page":function(e){t.invitationsPerPage=e},"input-filter-text":function(e){t.invitationsFilterText=e.target.value}}},[i("template",{slot:"checkboxes"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"hasNoEmailCheckbox",label:"sem e-mail",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.hasNoEmailCheckbox,callback:function(e){t.hasNoEmailCheckbox=e},expression:"hasNoEmailCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"sentCheckbox",label:"enviados",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.sentCheckbox,callback:function(e){t.sentCheckbox=e},expression:"sentCheckbox"}}),t._v(" "),i("br"),t._v(" "),i("app-input",{attrs:{name:"notSentCheckbox",label:"não enviados",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.notSentCheckbox,callback:function(e){t.notSentCheckbox=e},expression:"notSentCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"receivedCheckbox",label:"recebidos",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.receivedCheckbox,callback:function(e){t.receivedCheckbox=e},expression:"receivedCheckbox"}}),t._v(" "),i("br"),t._v(" "),i("app-input",{attrs:{name:"notReceivedCheckbox",label:"não recebidos",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.notReceivedCheckbox,callback:function(e){t.notReceivedCheckbox=e},expression:"notReceivedCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"acceptedCheckbox",label:"aceitos",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.acceptedCheckbox,callback:function(e){t.acceptedCheckbox=e},expression:"acceptedCheckbox"}}),t._v(" "),i("br"),t._v(" "),i("app-input",{attrs:{name:"notAcceptedCheckbox",label:"não aceitos",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.notAcceptedCheckbox,callback:function(e){t.notAcceptedCheckbox=e},expression:"notAcceptedCheckbox"}}),t._v(" "),i("app-input",{attrs:{name:"declinedCheckbox",label:"declinados",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.declinedCheckbox,callback:function(e){t.declinedCheckbox=e},expression:"declinedCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"credentialsSentCheckbox",label:"credenciais enviadas",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.credentialsSentCheckbox,callback:function(e){t.credentialsSentCheckbox=e},expression:"credentialsSentCheckbox"}}),t._v(" "),i("br"),t._v(" "),i("app-input",{attrs:{name:"credentialsNotSentCheckbox",label:"credenciais não enviadas",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.credentialsNotSentCheckbox,callback:function(e){t.credentialsNotSentCheckbox=e},expression:"credentialsNotSentCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"credentialsReceivedCheckbox",label:"credenciais recebidas",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.credentialsReceivedCheckbox,callback:function(e){t.credentialsReceivedCheckbox=e},expression:"credentialsReceivedCheckbox"}}),t._v(" "),i("br"),t._v(" "),i("app-input",{attrs:{name:"credentialsNotReceivedCheckbox",label:"credenciais não recebidas",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.credentialsNotReceivedCheckbox,callback:function(e){t.credentialsNotReceivedCheckbox=e},expression:"credentialsNotReceivedCheckbox"}})],1),t._v(" "),i("div",{staticClass:"col"},[i("app-input",{attrs:{name:"notCheckedInCheckbox",label:"não fizeram check in",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.notCheckedInCheckbox,callback:function(e){t.notCheckedInCheckbox=e},expression:"notCheckedInCheckbox"}})],1)])]),t._v(" "),i("app-table",{attrs:{pagination:t.invitations.data.links.pagination,columns:["Código","Convidado",{title:"Pendências",trClass:"text-center"},{title:"Convite",trClass:"text-center"},{title:"Credencial",trClass:"text-center"},{title:"Check in",trClass:"text-center"},""]},on:{"goto-page":function(e){t.invitationsGotoPage(e)}}},t._l(t.invitations.data.rows,function(e){return i("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.invitations.selected)},on:{click:function(i){t.selectInvitation(e)}}},[i("td",{staticClass:"align-middle"},[t._v(t._s(e.code))]),t._v(" "),i("td",{staticClass:"align-middle"},[i("strong",[t._v(t._s(e.person_institution.person.name))]),t._v(" ("+t._s(e.person_institution.title)+")"),i("br"),t._v("\n                            "+t._s(e.person_institution.role.name)+" - "+t._s(e.person_institution.institution.name)+"\n                        ")]),t._v(" "),i("td",{staticClass:"align-middle text-center"},t._l(e.pending,function(e){return i("h6",{staticClass:"m-0"},[i("span",{class:"badge badge-"+e.type},[t._v(t._s(e.label))])])})),t._v(" "),i("td",{staticClass:"align-middle text-center"},[i("h6",{staticClass:"mb-0"},[e.sent_at?i("span",{staticClass:"badge badge-success"},[t._v("enviados: "+t._s(t.filterNotifications(e.notifications,"invitation").length))]):i("span",{staticClass:"badge badge-danger"},[t._v("não enviado")])]),t._v(" "),i("h6",{staticClass:"mb-0"},[e.received_at&&!e.received_by_id?i("span",{staticClass:"badge badge-success"},[t._v("recebidos: "+t._s(t.filterNotificationsReceived(e.notifications,"invitation").length))]):t._e(),t._v(" "),e.received_at&&e.received_by_id?i("span",{staticClass:"badge badge-warning"},[t._v("recebido manualmente")]):t._e(),t._v(" "),e.received_at?t._e():i("span",{staticClass:"badge badge-danger"},[t._v("não recebido")])]),t._v(" "),i("h6",{staticClass:"mb-0"},[e.accepted_at&&e.accepted_by_id?i("span",{staticClass:"badge badge-warning"},[t._v("aceito manualmente")]):t._e(),t._v(" "),e.declined_at&&e.declined_by_id?i("span",{staticClass:"badge badge-warning"},[t._v("declinado manualmente")]):t._e(),t._v(" "),e.sent_at?[e.received_at||e.accepted_at||e.declined_at?t._e():i("span",{staticClass:"badge badge-danger"},[t._v("não recebido")]),t._v(" "),!e.received_at||e.accepted_at||e.declined_at?t._e():i("span",{staticClass:"badge badge-primary"},[t._v("não respondeu")]),t._v(" "),!e.accepted_by_id&&e.accepted_at?i("span",{staticClass:"badge badge-success"},[t._v("aceitou")]):t._e(),t._v(" "),!e.declined_by_id&&e.declined_at?i("span",{staticClass:"badge badge-danger"},[t._v("declinou")]):t._e()]:t._e()],2)]),t._v(" "),i("td",{staticClass:"align-middle text-center"},[e.declined_at?i("span",[i("h6",{staticClass:"mb-0"},[i("span",{staticClass:"badge badge-primary"},[t._v("convite declinado")])])]):i("span",[i("h6",{staticClass:"mb-0"},[e.credentials_sent_at?i("span",{staticClass:"badge badge-success"},[t._v("enviadas: "+t._s(t.filterNotifications(e.notifications,"credentials").length))]):i("span",{staticClass:"badge badge-danger"},[t._v("não enviada")])]),t._v(" "),i("h6",{staticClass:"mb-0"},[e.credentials_received_at&&!e.credentials_received_by_id?i("span",{staticClass:"badge badge-success"},[t._v("recebidas: "+t._s(t.filterNotificationsReceived(e.notifications,"credentials").length))]):t._e(),t._v(" "),e.credentials_received_at&&e.credentials_received_by_id?i("span",{staticClass:"badge badge-warning"},[t._v("recebida manualmente")]):t._e(),t._v(" "),e.credentials_received_at?t._e():i("span",{staticClass:"badge badge-danger"},[t._v("não recebida")])])])]),t._v(" "),i("td",{staticClass:"align-middle text-center"},[t._v("\n                            "+t._s(e.checkin_at)+"\n                        ")]),t._v(" "),i("td",{staticClass:"align-middle text-right"},[t.can("update")&&t.canSendEmail(e)?i("button",{staticClass:"btn btn-info btn-sm btn-sm btn-table-utility text-white ml-1 pull-right",attrs:{title:"Enviar "+(e.accepted_at?"credenciais":"convite"),disabled:e.accepted_at&&!t.environment.debug},on:{click:function(i){e.accepted_at?t.sendCredential(e):t.sendInvitation(e)}}},[e.accepted_at?i("i",{staticClass:"fa fa-landmark"}):t._e(),t._v(" "),e.accepted_at?t._e():i("i",{staticClass:"fa fa-mail-bulk"})]):t._e(),t._v(" "),t.can("update")&&e.sub_event.confirmed_at&&!e.received_at?i("button",{staticClass:"btn btn-success btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Marcar o convite como 'recebido manualmente'"},on:{click:function(i){t.markAsReceived(e,"invitation")}}},[i("i",{staticClass:"fa fa-check"})]):t._e(),t._v(" "),t.can("update")&&e.sub_event.confirmed_at&&e.accepted_at&&!e.credentials_received_at?i("button",{staticClass:"btn btn-warning btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Marcar as credenciais como 'recebida manualmente'"},on:{click:function(i){t.markAsReceived(e,"credentials")}}},[i("i",{staticClass:"fa fa-check"})]):t._e(),t._v(" "),t.can("update")&&e.sub_event.confirmed_at&&!e.accepted_at?i("button",{staticClass:"btn btn-success btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Aceitar o convite manualmente"},on:{click:function(i){t.markAsAccepted(e)}}},[i("i",{staticClass:"fa fa-check-double"})]):t._e(),t._v(" "),t.can("update")&&e.sub_event.confirmed_at&&!e.declined_at?i("button",{staticClass:"btn btn-danger btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Declinar o convite manualmente"},on:{click:function(i){t.markAsDeclined(e)}}},[i("i",{staticClass:"fa fa-calendar-times"})]):t._e(),t._v(" "),t.can("update")&&t.canSendEmail(e)&&e.accepted_at?i("button",{staticClass:"btn btn-warning btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Baixar PDF das credenciais"},on:{click:function(i){t.downloadInvitation(e)}}},[e.busy?t._e():i("i",{staticClass:"fa fa-id-badge"}),t._v(" "),e.busy?i("i",{staticClass:"fa fa-cog fa-spin"}):t._e()]):t._e(),t._v(" "),i("router-link",{staticClass:"btn btn-warning btn-sm btn-table-utility ml-1 pull-right",attrs:{to:"/events/"+e.sub_event.event.id+"/sub-events/"+e.sub_event.id+"/invitations/"+e.id+"/show",tag:"button",disabled:t.cannot("update"),title:"Ver todos os dados do convite"}},[i("i",{staticClass:"fa fa-eye"})]),t._v(" "),t.can("update")&&!e.sent_at?i("button",{staticClass:"btn btn-danger btn-sm btn-table-utility ml-1 pull-right",attrs:{title:"Excluir convite (ainda não foi enviado)"},on:{click:function(i){t.unInvite(e)}}},[i("i",{staticClass:"fa fa-trash"})]):t._e()],1)])}))],2):t._e()],1)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[this._v("Eventos")])])])}]}},PoP0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("8nzx"),a=i("2gEq"),s=i("r76k"),o=i("NYxO"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r={name:"events",uri:"events"};e.default={mixins:[n.a,a.a,s.a],data:function(){return{service:r,downloading:!1}},methods:c({},Object(o.mapActions)(r.name,["selectEvent","selectSubEvent","selectInvitation"]),{eventsGotoPage:function(t){this.gotoPage(t,"events",this.events.data.links.pagination)},subEventsGotoPage:function(t){this.gotoPage(t,"subEvents",this.subEvents.data.links.pagination)},invitationsGotoPage:function(t){this.gotoPage(t,"invitations",this.invitations.data.links.pagination)},unInvite:function(t){var e=this;confirm("Deseja realmente desconvidar "+t.person_institution.person.name+"?",this).then(function(i){if(i)return e.$store.dispatch("invitations/unInvite",t)})},markAsAccepted:function(t){var e=this;confirm("Deseja realmente confirmar a presença de "+t.person_institution.person.name+"?",this).then(function(i){if(i)return e.$store.dispatch("invitations/markAsAccepted",t)})},markAsReceived:function(t,e){var i=this;confirm("Deseja realment marcar como recebido o covite de "+t.person_institution.person.name+"?",this).then(function(n){if(n)return i.$store.dispatch("invitations/markAsReceived",{invitation:t,type:e})})},markAsDeclined:function(t){var e=this;confirm("Deseja realmente declinar a presença de "+t.person_institution.person.name+"?",this).then(function(i){if(i)return e.$store.dispatch("invitations/markAsDeclined",t)})},downloadInvitation:function(t){t.busy=!0,downloadPDF(this.$store.getters["invitations/getDataUrl"]+"/"+t.id+"/download").then(function(){t.busy=!1})},sendCredential:function(t){var e=this;t.busy=!0,confirm("Deseja realmente enviar as credencias para "+t.person_institution.person.name+"?",this).then(function(i){if(i)return e.$store.dispatch("invitations/sendCredentials",t)})},sendInvitation:function(t){var e=this;t.busy=!0,confirm("Deseja realmente enviar o convite para "+t.person_institution.person.name+"?",this).then(function(i){if(i)return e.$store.dispatch("invitations/sendInvitation",t)})},confirmSubEvent:function(t){var e=this;confirm("Deseja realmente confirmar "+t.name+"?",this).then(function(i){if(i)return e.$store.dispatch("subEvents/confirm",t)})},finalizeSubEvent:function(t){var e=this;confirm("Deseja realmente confirmar que o evento foi realizado "+t.name+"?",this).then(function(i){i&&e.finalizeSubEventReconfirmed(t)})},finalizeSubEventReconfirmed:function(t){var e=this;confirm("Tem certeza que deseja marcar este sub-evento como realizado?",this).then(function(i){if(i)return e.$store.dispatch("subEvents/finalize",t)})},sendInvitations:function(t){var e=this;confirm("Você tem certeza que deseja enviar todos os convites agora?",this).then(function(i){if(i)return t.busy=!0,e.$store.dispatch("events/sendInvitations",t).then(function(){t.busy=!1})})},sendCredentials:function(t){var e=this;confirm("Você tem certeza que deseja enviar todas as credenciais agora?",this).then(function(i){if(i)return t.busy=!0,e.$store.dispatch("events/sendCredentials",t).then(function(){t.busy=!1})})},downloadSubEventPDF:function(t){var e=this;this.downloading=!0,downloadPDF(this.$store.getters["subEvents/getDataUrl"]+"/"+t.id+"/download").then(function(){e.downloading=!1})},canSendEmail:function(t){return t.has_email&&t.sub_event.confirmed_at},replicateCommonInfo:function(t){var e=this;confirm('Você tem certeza que replicar os textos de "'+t.name+" - "+t.sector.name+'" para os outros sub-eventos?',this).then(function(i){confirm("CERTEZA ABSOLUTA?",e).then(function(i){if(i)return t.busy=!0,e.$store.dispatch("subEvents/replicateCommonInfo",t).then(function(){t.busy=!1})})})},filterNotifications:function(t,e){return _.filter(t,function(t){return t.content_type===e})},filterNotificationsReceived:function(t,e){return _.filter(this.filterNotifications(t,e),function(t){return t.received_at})}}),computed:{eventsFilterText:{get:function(){return this.$store.state.events.data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},eventsPerPage:{get:function(){return this.$store.state.events.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("events/setPerPage",t)}},subEventsFilterText:{get:function(){return this.$store.state.subEvents.data.filter.text},set:function(t){return this.$store.dispatch("subEvents/mutateSetQueryFilterText",t)}},subEventsPerPage:{get:function(){return this.$store.state.subEvents.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("subEvents/setPerPage",t)}},invitationsFilterText:{get:function(){return this.$store.state.invitations.data.filter.text},set:function(t){return this.$store.dispatch("invitations/mutateSetQueryFilterText",t)}},hasNoEmailCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.hasNoEmail},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"hasNoEmail",value:t}),this.$store.dispatch("invitations/load")}},sentCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.sent},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"sent",value:t}),this.$store.dispatch("invitations/load")}},notSentCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.notSent},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"notSent",value:t}),this.$store.dispatch("invitations/load")}},receivedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.received},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"received",value:t}),this.$store.dispatch("invitations/load")}},notReceivedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.notReceived},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"notReceived",value:t}),this.$store.dispatch("invitations/load")}},credentialsSentCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.credentialsSent},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"credentialsSent",value:t}),this.$store.dispatch("invitations/load")}},credentialsNotSentCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.credentialsNotSent},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"credentialsNotSent",value:t}),this.$store.dispatch("invitations/load")}},credentialsReceivedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.credentialsReceived},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"credentialsReceived",value:t}),this.$store.dispatch("invitations/load")}},credentialsNotReceivedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.credentialsNotReceived},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"credentialsNotReceived",value:t}),this.$store.dispatch("invitations/load")}},acceptedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.accepted},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"accepted",value:t}),this.$store.dispatch("invitations/load")}},declinedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.declined},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"declined",value:t}),this.$store.dispatch("invitations/load")}},notAcceptedCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.notAccepted},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"notAccepted",value:t}),this.$store.dispatch("invitations/load")}},notCheckedInCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.notCheckedIn},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"notCheckedIn",value:t}),this.$store.dispatch("invitations/load")}},notAnsweredCheckbox:{get:function(){return this.$store.state.invitations.data.filter.checkboxes.notAnswered},set:function(t){this.$store.commit("invitations/mutateFilterCheckbox",{field:"notAnswered",value:t}),this.$store.dispatch("invitations/load")}},invitationsPerPage:{get:function(){return this.$store.state.invitations.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("invitations/setPerPage",t)}}}}},lHJl:function(t,e,i){var n=i("tEfT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("712ef2b5",n,!0,{})},r76k:function(t,e,i){"use strict";e.a={methods:{can:function(t){return t&&!0},cannot:function(t){return!this.can(t)}}}},tEfT:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])}});