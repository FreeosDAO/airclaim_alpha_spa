(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{3468:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("CompleteDialog",{ref:"complete"}),a("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[a("div",{staticClass:"panel-wrap"},[a("q-card",{staticClass:"panel  q-pa-lg"},[a("div",{staticClass:"text-h4 text-center q-ma-lg"},[t._v("Staking Requirement")]),t.bcUnstaking||t.userHasStaked?t._e():a("div",{staticClass:"q-pb-lg"},[a("p",{staticClass:"text-center q-mb-xs"},[t._v("In order to Claim your weekly "+t._s(t.tokenCurrencyName)+"s, you need to stake ")]),"118"!=t.accountType?a("div",[a("p",{staticClass:"text-h5 text-center q-mb-xs"},[t._v("Verified accounts stake "+t._s(t.stakeRequirementKYC)+" "+t._s(t.stakeCurrency)+".")]),a("p",{staticClass:"text-body1 text-center q-mb-xs q-mt-md"},[t._v("Verify your account at "),a("a",{attrs:{target:"_black",href:"http://protonkyc.com/"}},[t._v("protonkyc.com")])]),a("p",{staticClass:"text-body2 text-center q-mb-md"},[a("a",{attrs:{target:"_black",href:"https://medium.com/freedao/staking-and-kyc-update-fe5be2985ce6"}},[t._v("How to verify your account?")])]),a("p",{staticClass:"text-h5 text-center q-mb-xs"},[t._v("Not verified?")])]):t._e(),a("p",{staticClass:"text-body1 text-center q-mb-xs"},[t._v("Stake "+t._s(t.stakeRequirement)+" "+t._s(t.stakeCurrency))]),a("p",{staticClass:"text-body2 text-center q-mb-xs"},[a("a",{attrs:{href:"https://medium.com/freedao/freeos-xusdc-guide-20c2a1cfc07b",target:"_blank"}},[t._v("How to get XUSDC?")])])]),t.bcUnstaking?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-xs text-subtitle1",staticStyle:{"line-height":"1.2"}},[a("strong",[t._v("You have unstaked")])]),a("h4",{staticClass:"text-h4 q-mt-none q-mb-sm",staticStyle:{"line-height":"1"}},[t._v(t._s(t.userStake)+" "+t._s(t.stakeCurrency))]),a("p",{staticClass:"q-mb-md text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("Your will NOT be eligible to Claim your weekly "+t._s(t.tokenCurrencyName)+"s in the next iteration. You need a minimum "+t._s(t.stakeRequirement)+" "+t._s(t.stakeCurrency)+" to Claim. This can be rectified by cancelling the process if you wish")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You are currently unstaking "+t._s(t.userStake)+" "+t._s(t.stakeCurrency)+". The unstaking will complete in "),a("strong",{staticClass:"text-primary"},[t._v(t._s(t.stakeIterationMsg))])]),a("p",{staticClass:"q-mb-md",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#unstaking"}},[t._v("click here")])],1),t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",color:"primary"},on:{click:function(e){return t.cancelSubmit()}}},[t._v("Cancel Unstaking")]):t._e()],1):t._e(),t.XPRBalance<t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4 text-warning",staticStyle:{"line-height":"1.2"}},[t._v("Warning")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[a("strong",[t._v("We see your balance is short on "+t._s(t.stakeCurrency)+" You need to transfer the following to")])]),a("h4",{staticClass:"text-h5 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.stakeRequirement-t.XPRBalance)+" "+t._s(t.stakeCurrency))]),a("q-btn",{staticClass:"q-mt-md",attrs:{unelevated:"","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.protonSwap()}}},[t._v("Get "+t._s(t.stakeCurrency)+" via ProtonSwap")])],1):t._e(),t.userHasStaked&&!t.bcUnstaking?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("You're Staked!")]),a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You've Staked so you can Claim, you've currently staked:")]),a("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.userStake)+" "+t._s(t.stakeCurrency))]),a("p",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1.4"}},[t._v("Now return to the "),a("router-link",{attrs:{to:"/claim"}},[t._v("Claim page")])],1),a("p",{staticClass:"q-mt-md q-mb-sm",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#staking"}},[t._v("click here")])],1)]):t._e(),t.XPRBalance>=t.stakeRequirement&&!t.userHasStaked?a("div",{staticClass:"panel panel-info q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.4"}},[t._v("You currently have more than enough in your account to stake and claim your weekly "+t._s(t.tokenCurrencyName)+"s.")]),a("p",{staticClass:"q-mb-xs"},[a("strong",[t._v("Current balance:")])]),a("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.XPRBalance)+" "+t._s(t.stakeCurrency))])]):t._e(),t.userHasStaked&&!t.bcUnstaking&&t.stakeRequirement>0?a("div",{staticClass:"panel panel-warning q-pa-lg text-center q-mb-lg q-pa-lg"},[a("p",{staticClass:"q-mb-md text-h4",staticStyle:{"line-height":"1.2"}},[t._v("Unstake")]),a("p",{staticClass:"text-subtitle1 q-mb-xs",staticStyle:{"line-height":"1.4"}},[a("strong",[t._v("This process will complete at the start of the next Claim")]),t._v(" also if you unstake you will NOT be eligible to Claim your weekly "+t._s(t.tokenCurrencyName)+"s. ")]),a("p",{staticClass:"q-mb-md",staticStyle:{"line-height":"1.4"}},[t._v("For more info, "),a("router-link",{attrs:{to:"/info#unstaking"}},[t._v("click here")])],1),t.userHasStaked?a("div",{staticClass:"row justify-center q-mb-xs q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",color:"primary"},on:{click:function(e){return t.unstakeSubmit()}}},[t._v("Unstake")]):t._e()],1):t._e()]):t._e(),t.userHasStaked?t._e():a("div",{staticClass:"row justify-center q-mb-md q-pb-xs",staticStyle:{"align-items":"center"}},[t.isAuthenticated?a("q-btn",{attrs:{unelevated:"",outline:"",size:"lg",disable:t.XPRBalance<t.stakeRequirement,color:"primary"},on:{click:function(e){return t.stakeSubmit()}}},[t._v("Stake")]):t._e()],1)])],1)])],1)},n=[],i=a("ded3"),r=a.n(i),c=a("2f62"),l=a("37ca"),o=(a("2a19"),{name:"Stake",data(){return{countdown:1,stakeCurrency:"XPR",currencyName:"BETA",tokenCurrencyName:this.$options.filters.capitalize("POINT")}},components:{CompleteDialog:l["a"]},computed:r()(r()({},Object(c["c"])("freeos",["accountName","accountType","bcUnstaking","XPRBalance","liquidFreeos","isAuthenticated","stakeRequirement","stakeRequirementKYC","userHasStaked","userStake","userMeetsStakeRequirement","currentIteration","unstakingIteration"])),{},{stakeIterationMsg(){if(this.unstakingIteration&&this.currentIteration&&this.unstakingIteration===this.currentIteration.iteration_number){const e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3),a=Math.floor(Date.parse((new Date).toISOString())/1e3);var t=this.secondsToDhms(e-a);return t}return"a minute"}}),created(){},methods:r()(r()({},Object(c["b"])("freeos",["fetch","stake","unstake","cancelUnstake"])),{},{protonSwap(){window.open("https://proton.alcor.exchange/","_blank")},async stakeSubmit(){const t=this;var e=await t.stake(t.stakeRequirement);e instanceof Error||this.$refs.complete.openDialog({title:"Great Stake",subtitle:"You staked",value:this.stakeRequirement,currency:"XPR"})},async unstakeSubmit(){var t=await this.unstake();t instanceof Error||this.$refs.complete.openDialog({title:"Unstaked",subtitle:"You've unstaked",value:this.userStake,currency:"XPR"})},async cancelSubmit(){var t=await this.cancelUnstake();t instanceof Error||this.$refs.complete.openDialog({title:"Cancel Unstaking",subtitle:"You've cancelled Unstaking",value:this.userStake,currency:"XPR"})},setCountdown(){const t=this,e=Math.floor(Date.parse(this.currentIteration.end+"Z")/1e3);setInterval((function(){const a=Math.floor(Date.parse((new Date).toISOString())/1e3);t.countdown=t.secondsToDhms(e-a)}),1e3)},secondsToDhms(t){t=Number(t);var e=Math.floor(t/86400),a=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),n=(Math.floor(t%60),e>0?e+(1==e?" day":" days"):""),i=a>0?a+(1==a?" hour":" hours"):"",r=s>0?s+(1==s?" min":" mins"):"";return n&&i?n+", "+i:i?i+", "+r:n||"0 hours "+r}})}),u=o,m=a("2877"),h=a("f09f"),k=a("9c40"),p=a("eebe"),d=a.n(p),g=Object(m["a"])(u,s,n,!1,null,"7e9a4746",null);e["default"]=g.exports;d()(g,"components",{QCard:h["a"],QBtn:k["a"]})}}]);