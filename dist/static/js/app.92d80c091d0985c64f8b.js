webpackJsonp([1],{"/A7c":function(t,e,n){t.exports=n.p+"static/img/money_chokinbako.3851822.png"},"8mt5":function(t,e){},EEbw:function(t,e){t.exports={version:"0.20.1"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("MMSg"),s=n.n(i),o=(n("doPI"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var r=n("VU/8")({name:"App",beforeCreate:function(){this.$store.dispatch("registerWeb3")}},o,!1,function(t){n("syO8")},null,null).exports,c=n("/ocq"),l=n("//Fk"),u=n.n(l),p={name:"Top",data:function(){return{name:null,target:null,limoptions:[{text:"10分",value:"600"},{text:"1週間",value:"604800"},{text:"1ヶ月",value:"2592000"},{text:"3ヶ月",value:"7776000"},{text:"6ヶ月",value:"15552000"},{text:"1年",value:"31536000"}],limit:31536e3,amount:null,penalty:0,Pigglist:[],showindex:null,showname:null,showtarget:null,showamount:null,showlimit:null,showpenalty:null,WithdrawActive:!0,DetailPigModal:!1,MakeModal:!1,DepositModal:!1,WithdrawModal:!1,PenaltyWithdrawModal:!1,exertid:null,exertname:null}},computed:{web3:function(){return this.$store.state.web3}},mounted:function(){this.$store.dispatch("getContractInstance");var t=document.querySelector(".burger"),e=document.querySelector("#"+t.dataset.target);t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")}),console.log(this.web3.coinbase),this.displayPigs(this.web3.coinbase)},methods:{unixcurrent:function(){return Date.now()},unixtodate:function(t){var e=new Date(1e3*t+32400);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)},getPigDetails:function(t){var e=this;return new u.a(function(n,a){e.$store.state.contractInstance().pigs.call(t,function(t,e){t||(console.log(e),n(e))})})},pigToOwner:function(t){this.$store.state.contractInstance().pigToOwner.call(t,function(t,e){if(!t)return console.log(e),e})},getPigByOwner:function(t){var e=this;return new u.a(function(n,a){e.$store.state.contractInstance().getPigByOwner.call(t,function(t,e){if(!t){for(var n=new Array(e.length),a=0;a<e.length;a++)n[a]=e[a].c[0];return n}})})},displayPigs:function(t){var e=this;e.Pigglist=[],u.a.resolve(t).then(function(n){return new u.a(function(n,a){e.$store.state.contractInstance().getPigByOwner.call(t,function(t,e){if(!t){for(var a=new Array(e.length),i=0;i<e.length;i++)a[i]=e[i].c[0];n(a)}})})}).then(function(t){return u.a.all([new u.a(function(n,a){for(var i=u.a.resolve(),s=0;s<t.length;s++)!function(n){i=i.then(function(){return new u.a(function(a,i){e.$store.state.contractInstance().pigs.call(t[n],function(i,s){if(!i){var o={};o.name=s[0],o.target=s[1].c[0]/1e4,o.amount=s[2].c[0]/1e4,o.starttime=s[3].c[0],o.limittime=s[4].c[0],o.penalty=s[5].c[0],o.id=t[n],e.Pigglist.push(o),a()}})})})}(s);console.log("表示"),n()})])})},make:function(){var t=this;u.a.resolve().then(function(){return new u.a(function(e,n){t.$store.state.contractInstance().makepig(t.name,1e18*t.target,t.limit,t.penalty,{gas:3e5,value:t.$store.state.web3.web3Instance().toWei(t.amount,"ether"),from:t.$store.state.web3.coinbase},function(n,a){n?console.log(n):(t.name=null,t.target=null,t.limit=null,t.amount=null,t.penalty=null,e())})})}),t.MakeModal=!1},deposit:function(t,e){console.log(t),console.log(e);var n=this;u.a.resolve().then(function(){return new u.a(function(a,i){n.$store.state.contractInstance().deposit(t,{gas:3e5,value:n.$store.state.web3.web3Instance().toWei(e,"ether"),from:n.$store.state.web3.coinbase},function(t,e){t?console.log(t):(console.log(n.amount),n.amount=null,a())})})}),n.exertid=null,n.exertname=null,n.DepositModal=!1,n.DetailPigModal=!1,console.log("貯金する")},withdraw:function(t){this.WithdrawActive=!1,console.log(t);var e=this;u.a.resolve().then(function(){return new u.a(function(n,a){e.$store.state.contractInstance().withdraw(t,{gas:3e5,value:0,from:e.$store.state.web3.coinbase},function(t,a){t?console.log(t):(e.WithdrawActive=!0,n())})})}),e.exertid=null,e.exertname=null,e.WithdrawModal=!1,e.DetailPigModal=!1,console.log("引き出す")},penaltywithdraw:function(t){console.log(t);var e=this;u.a.resolve().then(function(){return new u.a(function(n,a){e.$store.state.contractInstance().penaltywithdraw(t,{gas:3e5,value:0,from:e.$store.state.web3.coinbase},function(t,e){t?console.log(t):n()})})}),e.exertid=null,e.exertname=null,e.PenaltyWithdrawModal=!1,e.DetailPigModal=!1,console.log("引き出す")}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"piggy"},[t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5"},[a("div",{staticClass:"box",staticStyle:{"text-align":"left"}},[a("h2",{staticClass:"subtitle"},[t._v("Pig(貯金箱)を作る")]),t._v(" "),a("p",[t._v("Pigの名前(貯金の目的や、可愛い名前でも！)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"名前を入れてね"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("p",[t._v("貯金の目標額(いくら貯めますか？)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.target,expression:"target"}],attrs:{placeholder:"目標額を記入",type:"number",number:""},domProps:{value:t.target},on:{input:function(e){e.target.composing||(t.target=e.target.value)}}}),t._v(" Ether\n          "),a("p",[t._v("最初にいくら入れますか？")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:"投入額を記入",type:"number",number:""},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" Ether\n          "),a("p",[t._v("(オプション)")]),t._v(" "),a("p",[t._v("どのくらいの期間で貯金する予定ですか？(デフォルトだと1年です)")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.limit=e.target.multiple?n:n[0]}}},t._l(t.limoptions,function(e,n){return a("option",{key:n,domProps:{value:e.value}},[t._v("\n              "+t._s(e.text)+"\n            ")])})),t._v(" "),a("p",[t._v("本気度%(デフォルトだと0%です)")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.penalty,expression:"penalty"}],attrs:{number:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.penalty=e.target.multiple?n:n[0]}}},[a("option",[t._v("0")]),t._v(" "),a("option",[t._v("5")]),t._v(" "),a("option",[t._v("10")]),t._v(" "),a("option",[t._v("25")]),t._v(" "),a("option",[t._v("50")]),t._v(" "),a("option",[t._v("75")]),t._v(" "),a("option",[t._v("100")])]),t._v(" "),a("p",[t._v("設定した期間までに貯金できなかった場合に、Pigの中の残金のうち、設定したパーセンテージが投げ銭としてPiggy Bank作成者に送られます。")]),t._v(" "),1==t.web3.networkId?a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.MakeModal=!0}}},[t._v("作成")]):t._e(),t._v(" "),1!=t.web3.networkId?a("p",{staticStyle:{color:"red"}},[t._v("MainNetでの接続をお願いします。")]):t._e()])]),t._v(" "),a("div",{staticClass:"column is-7"},[a("div",{staticClass:"box"},[a("h2",{staticClass:"subtitle"},[t._v("あなたのPigs")]),t._v(" "),a("div",{attrs:{id:"#pigs"}},t._l(t.Pigglist,function(e,i){return a("div",{key:i},[i%3==0?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4 is-desktop box",staticStyle:{margin:"0 0px 12px 0px"}},[a("p",[t._v(t._s(t.Pigglist[i].name))]),t._v(" "),a("img",{attrs:{src:n("/A7c")}}),t._v(" "),a("p",[t._v("目標額:"+t._s(t.Pigglist[i].target)+" Ether")]),t._v(" "),a("p",[t._v("達成率:"+t._s(t.Pigglist[i].amount/t.Pigglist[i].target*100)+"%")]),t._v(" "),a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.DetailPigModal=!0,t.showname=t.Pigglist[i].name,t.showindex=t.Pigglist[i].id,t.showtarget=t.Pigglist[i].target,t.showamount=t.Pigglist[i].amount,t.showlimit=t.Pigglist[i].limittime,t.showpenalty=t.Pigglist[i].penalty}}},[t._v("詳細")])]),t._v(" "),t.Pigglist[i+1]?a("div",{staticClass:"column is-4 is-desktop box",staticStyle:{margin:"0 0px 12px 0px"}},[a("p",[t._v(t._s(t.Pigglist[i+1].name))]),t._v(" "),a("img",{attrs:{src:n("/A7c")}}),t._v(" "),a("p",[t._v("目標額:"+t._s(t.Pigglist[i+1].target)+" Ether")]),t._v(" "),a("p",[t._v("達成率:"+t._s(t.Pigglist[i+1].amount/t.Pigglist[i+1].target*100)+"%")]),t._v(" "),a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.DetailPigModal=!0,t.showname=t.Pigglist[i+1].name,t.showindex=t.Pigglist[i+1].id,t.showtarget=t.Pigglist[i+1].target,t.showamount=t.Pigglist[i+1].amount,t.showlimit=t.Pigglist[i+1].limittime,t.showpenalty=t.Pigglist[i+1].penalty}}},[t._v("詳細")])]):t._e(),t._v(" "),t.Pigglist[i+2]?a("div",{staticClass:"column is-4 is-desktop box",staticStyle:{margin:"0 0px 12px 0px"}},[a("p",[t._v(t._s(t.Pigglist[i+2].name))]),t._v(" "),a("img",{attrs:{src:n("/A7c")}}),t._v(" "),a("p",[t._v("目標額:"+t._s(t.Pigglist[i+2].target)+" Ether")]),t._v(" "),a("p",[t._v("達成率:"+t._s(t.Pigglist[i+2].amount/t.Pigglist[i+2].target*100)+"%")]),t._v(" "),a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.DetailPigModal=!0,t.showname=t.Pigglist[i+2].name,t.showindex=t.Pigglist[i+2].id,t.showtarget=t.Pigglist[i+2].target,t.showamount=t.Pigglist[i+2].amount,t.showlimit=t.Pigglist[i+2].limittime,t.showpenalty=t.Pigglist[i+2].penalty}}},[t._v("詳細")])]):t._e()]):t._e()])})),t._v(" "),a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.displayPigs(t.web3.coinbase)}}},[t._v("表示")])])])])]),t._v(" "),a("b-modal",{attrs:{active:t.DetailPigModal},on:{"update:active":function(e){t.DetailPigModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.showname))])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("img",{attrs:{src:n("/A7c")}}),t._v(" "),a("p",[t._v("目標額:"+t._s(t.showtarget)+" Ether")]),t._v(" "),a("p",[t._v("合計:"+t._s(t.showamount)+" Ether")]),t._v(" "),a("p",[t._v("達成率:"+t._s(t.showamount/t.showtarget*100)+"%")]),t._v(" "),a("p",[t._v("本気度:"+t._s(t.showpenalty)+"%")]),t._v(" "),a("p",[t._v("期限："+t._s(t.unixtodate(t.showlimit)))]),t._v(" "),t.unixcurrent()<=1e3*t.showlimit?a("p",[t._v("期限内です")]):t._e(),t._v(" "),t.unixcurrent()>1e3*t.showlimit?a("p",{staticStyle:{color:"red"}},[t._v("期限を超えてしまいました")]):t._e()]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[t.unixcurrent()<=1e3*t.showlimit&&t.showamount/t.showtarget*100<100?a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.DepositModal=!0,t.exertid=t.showindex,t.exertname=t.showname}}},[t._v("貯金")]):t._e(),t._v(" "),t.showamount/t.showtarget*100>=100&&t.WithdrawActive?a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.WithdrawModal=!0,t.exertid=t.showindex,t.exertname=t.showname}}},[t._v("割る")]):t._e(),t._v(" "),t.showamount/t.showtarget*100<100&&t.WithdrawActive?a("a",{staticClass:"button is-info is-outlined",on:{click:function(e){t.PenaltyWithdrawModal=!0,t.exertid=t.showindex,t.exertname=t.showname}}},[t._v("割る")]):t._e(),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.DetailPigModal=!1}}},[t._v("閉じる")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.MakeModal},on:{"update:active":function(e){t.MakeModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("以下の条件で貯金箱を作成します。")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("名前: "+t._s(this.name))]),t._v(" "),a("p",[t._v("目標額: "+t._s(this.target)+" Ether")]),t._v(" "),a("p",[t._v("初期投入額: "+t._s(this.amount)+" Ether")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.make()}}},[t._v("作成実行")]),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.MakeModal=!1}}},[t._v("閉じる")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.DepositModal},on:{"update:active":function(e){t.DepositModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("PiggにEtherを入れます")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("名前: "+t._s(t.exertid)+":"+t._s(t.exertname))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:"目標額を記入",type:"number",number:""},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" Ether\n         ")]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.deposit(t.exertid,t.amount)}}},[t._v("Pigに入れる")]),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.DepositModal=!1}}},[t._v("閉じる")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.WithdrawModal},on:{"update:active":function(e){t.WithdrawModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Pigを割ってEtherを引き出します")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("名前: "+t._s(t.exertname))]),t._v(" "),a("p",[t._v("Pigいっぱいにお金が溜まりましたね。おめでたいです！")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.withdraw(t.exertid)}}},[t._v("Pigを割る")]),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.WithdrawModal=!1}}},[t._v("閉じる")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.PenaltyWithdrawModal},on:{"update:active":function(e){t.PenaltyWithdrawModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Pigを割ってEtherを引き出します")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("名前: "+t._s(t.exertname))]),t._v(" "),t.unixcurrent()<=1e3*t.showlimit?a("p",[t._v("目標額溜まってないですが本当に割りますか？"),a("br"),t._v("このままだと投げ銭が発生します。")]):t._e(),t._v(" "),t.unixcurrent()>1e3*t.showlimit?a("p",[t._v("期限をすぎてしまったため、投げ銭が発生します。")]):t._e()]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.penaltywithdraw(t.exertid)}}},[t._v("Pigを割る")]),t._v(" "),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.PenaltyWithdrawModal=!1}}},[t._v("閉じる")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("section",{staticClass:"hero is-default is-bold"},[e("div",{staticClass:"hero-head"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item title",attrs:{href:"../"}},[this._v("\n                Piggy Bank (α版)\n              ")]),this._v(" "),e("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenu"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])])])])])])])}]};var m=n("VU/8")(p,d,!1,function(t){n("sK7b"),n("8mt5")},"data-v-d84b00a6",null).exports;a.a.use(c.a);var v=new c.a({mode:"history",routes:[{path:"",name:"Top",component:m}]}),y=n("NYxO"),g={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},b=n("woOf"),_=n.n(b),f=n("8k0n"),w=n.n(f),h=new u.a(function(t,e){var n=window.web3;if(void 0!==n){var a=new w.a(n.currentProvider);t({injectedWeb3:a.isConnected(),web3:function(){return a}})}else e(new Error("Unable to connect to Metamask"))}).then(function(t){return new u.a(function(e,n){t.web3().version.getNetwork(function(a,i){a?n(new Error("Unable to retrieve network ID")):(t=_()({},t,{networkId:i}),e(t))})})}).then(function(t){return new u.a(function(e,n){t.web3().eth.getCoinbase(function(a,i){a?n(new Error("Unable to retrieve coinbase")):(t=_()({},t,{coinbase:i}),e(t))})})}).then(function(t){return new u.a(function(e,n){t.web3().eth.getBalance(t.coinbase,function(a,i){a?n(new Error("Unable to retrieve balance for address: "+t.coinbase)):(t=_()({},t,{balance:i}),e(t))})})}),x=function(t){var e=window.web3;e=new w.a(e.currentProvider),setInterval(function(){if(e&&M.state.web3.web3Instance)if(e.eth.coinbase!==M.state.web3.coinbase){var t=e.eth.coinbase;e.eth.getBalance(e.eth.coinbase,function(e,n){e?console.log(e):M.dispatch("pollWeb3",{coinbase:t,balance:parseInt(n,10)})})}else e.eth.getBalance(M.state.web3.coinbase,function(t,e){t?console.log(t):parseInt(e,10)!==M.state.web3.balance&&M.dispatch("pollWeb3",{coinbase:M.state.web3.coinbase,balance:e})})},500)},P=[{constant:!1,inputs:[],name:"nagesen",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"ownerPigCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"pigs",outputs:[{name:"name",type:"string"},{name:"target",type:"uint256"},{name:"amount",type:"uint256"},{name:"starttime",type:"uint256"},{name:"limittime",type:"uint256"},{name:"penaltybalance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_id",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"contractowner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"pigToOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_target",type:"uint256"},{name:"_limit",type:"uint256"},{name:"_penalty",type:"uint256"}],name:"makepig",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_id",type:"uint256"}],name:"deposit",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_id",type:"uint256"}],name:"penaltybycontractowner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_id",type:"uint256"}],name:"penaltywithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"getPigByOwner",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"pigId",type:"uint256"}],name:"NewPig",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],C=new u.a(function(t,e){t(new w.a(window.web3.currentProvider).eth.contract(P).at("0xa2d32af03e5777d35929f49e0f49bb4f7d8d62d7"))});a.a.use(y.a);var M=new y.a.Store({strict:!0,state:g,mutations:{registerWeb3Instance:function(t,e){console.log("registerWeb3instance Mutation being executed",e);var n=e,a=t.web3;a.coinbase=n.coinbase,a.networkId=n.networkId,a.balance=parseInt(n.balance,10),a.isInjected=n.injectedWeb3,a.web3Instance=n.web3,t.web3=a,x()},pollWeb3Instance:function(t,e){console.log("pollWeb3Instance mutation being executed",e),t.web3.coinbase=e.coinbase,t.web3.balance=parseInt(e.balance,10)},registerContractInstance:function(t,e){t.contractInstance=function(){return e}}},actions:{registerWeb3:function(t){var e=t.commit;console.log("registerWeb3 Action being executed"),h.then(function(t){console.log("committing result to registerWeb3Instance mutation"),e("registerWeb3Instance",t)}).catch(function(t){console.log("error in action registerWeb3",t)})},pollWeb3:function(t,e){var n=t.commit;console.log("pollWeb3 action being executed"),n("pollWeb3Instance",e)},getContractInstance:function(t){var e=t.commit;C.then(function(t){e("registerContractInstance",t)}).catch(function(t){return console.log(t)})}}});a.a.config.productionTip=!1,a.a.use(s.a),new a.a({el:"#app",router:v,store:M,components:{App:r},template:"<App/>"})},"R/pS":function(t,e){t.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},UIsv:function(t,e){t.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},doPI:function(t,e){},oPsS:function(t,e){t.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},sK7b:function(t,e){},syO8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92d80c091d0985c64f8b.js.map