if(!self.define){let e,r={};const n=(n,c)=>(n=new URL(n+".js",c).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let a={};const s=e=>n(e,o),f={module:{uri:o},exports:a,require:s};r[o]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),a)))}}define(["./workbox-28412ce9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"smart-agriculture"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"cropIcon/active/cherry.png",revision:"9b8c925beaba1a4b39ce8115fdcae8a1"},{url:"cropIcon/active/cropBackup.png",revision:"f0c20bc3ba4e47c39d517ac12ebe8dd6"},{url:"cropIcon/active/grape.png",revision:"4bf34e94f36a0f931a4ac30bfcde89ab"},{url:"cropIcon/active/persimmon.png",revision:"f8fb1a2ea614f271c25a461024be152d"},{url:"cropIcon/active/rape.png",revision:"dc1fdf75513e19b8e68bf05c1a252e19"},{url:"cropIcon/active/spinach.png",revision:"751ab6cc34f5b5ff2a1999233c7f61df"},{url:"cropIcon/active/strawberry.png",revision:"42ee9c54479392c7aff9ad628e4a4b0c"},{url:"cropIcon/cherry.png",revision:"8d92c6c2d41cabb67c96c5f65b741255"},{url:"cropIcon/cherry/0.png",revision:"192b932608bd145cda03b8eb79466ad3"},{url:"cropIcon/cherry/1.png",revision:"192b932608bd145cda03b8eb79466ad3"},{url:"cropIcon/cropBackup.png",revision:"eaa97bb3d16d08930252522f43cf2023"},{url:"cropIcon/grape.png",revision:"ce47ea0eedb7f11cec423b5c3c054594"},{url:"cropIcon/grape/0.png",revision:"1463fd8bc387db6453afe06862d5490d"},{url:"cropIcon/grape/1.png",revision:"1463fd8bc387db6453afe06862d5490d"},{url:"cropIcon/persimmon.png",revision:"d581f089343ff7cc5117153680d09488"},{url:"cropIcon/persimmon/0.png",revision:"ba3cbbdc819ba0208ada6a2345798eaf"},{url:"cropIcon/persimmon/1.png",revision:"ba3cbbdc819ba0208ada6a2345798eaf"},{url:"cropIcon/rape.png",revision:"f8fd2ee72e741ab0aaf0d8d29d60d044"},{url:"cropIcon/rape/0.png",revision:"09830959f4e16b27f249c5d69d154d45"},{url:"cropIcon/rape/1.png",revision:"1a0801a47fb199b6d6a8c846e6876c4e"},{url:"cropIcon/spinach.png",revision:"8536dcacec7b2cf0988b148df3dbdc39"},{url:"cropIcon/spinach/0.png",revision:"20c39a271009281f1f140103d870e0e6"},{url:"cropIcon/spinach/1.png",revision:"20c39a271009281f1f140103d870e0e6"},{url:"cropIcon/strawberry.png",revision:"94684704c083e0376a60fb140896832b"},{url:"cropIcon/strawberry/0.png",revision:"9d9c488f54f1a3062f9d00120df1a028"},{url:"cropIcon/strawberry/1.png",revision:"9d9c488f54f1a3062f9d00120df1a028"},{url:"css/app.9a5dfde0.css",revision:null},{url:"css/chunk-vendors.a44a3f6e.css",revision:null},{url:"css/loginView.62fdbb83.css",revision:null},{url:"css/moneyManage.9dea128a.css",revision:null},{url:"css/overView.f327c1a7.css",revision:null},{url:"css/plantManage.b21784dd.css",revision:null},{url:"css/smartTouch.ea974547.css",revision:null},{url:"css/smartTouchContainer.0a048746.css",revision:null},{url:"currentSituation/currentCropSituation.png",revision:"99955339e2d52bc41d9f1b8f6009561d"},{url:"currentSituation/currentSoilSituation.png",revision:"d0d5168f40a9b1d71b860af814b40131"},{url:"fonts/element-icons.f1a45d74.ttf",revision:null},{url:"fonts/element-icons.ff18efd1.woff",revision:null},{url:"fonts/qweather-icons.5b73f8d5.woff2",revision:null},{url:"fonts/qweather-icons.a5a8b1e2.woff",revision:null},{url:"fonts/qweather-icons.fe961282.ttf",revision:null},{url:"img/downloadBg.c2cbe407.png",revision:null},{url:"img/empty.png",revision:"5d17ab7ac14a7c7b0643ad8455231f73"},{url:"img/head.d65e9dce.png",revision:null},{url:"img/loginBg.0b65aa80.jpg",revision:null},{url:"img/loginFormBg.819fcdfb.png",revision:null},{url:"img/logo.43039113.png",revision:null},{url:"img/logoNoWhite.845b9005.png",revision:null},{url:"img/monitor.a9d52ea8.png",revision:null},{url:"img/plantManageBg.f7e1d081.jpg",revision:null},{url:"img/wheel.ebfb9278.png",revision:null},{url:"index.html",revision:"29b14cde2a72cf58e039289109ac8df0"},{url:"js/33.fccfc847.js",revision:null},{url:"js/458.b4335afb.js",revision:null},{url:"js/65.0297acbc.js",revision:null},{url:"js/722.957d4204.js",revision:null},{url:"js/app.b573d79f.js",revision:null},{url:"js/loginView.1d5d1267.js",revision:null},{url:"js/moneyManage.d0a3f52b.js",revision:null},{url:"js/overView.7153ec3e.js",revision:null},{url:"js/plantManage.07af44f2.js",revision:null},{url:"js/smartTouch.bbfca525.js",revision:null},{url:"js/smartTouchContainer.1067e63f.js",revision:null},{url:"manifest.json",revision:"2080495cedb5973cb81080335459dcf1"},{url:"map/greenHouseFlag.png",revision:"06191db3c6f432b067c3bb13eab50455"},{url:"map/locate0.png",revision:"e4c4879b7e258b81193daa9efb35dfa1"},{url:"map/locate1.png",revision:"7d6b8dc262f4855f50b4ddc6b5b3b00c"},{url:"map/locate2.png",revision:"4872f83323bcd990b35de8c736717c43"},{url:"map/parkFlag.png",revision:"a18ef95daa4772a738afcd7fdd34ce31"},{url:"mechineIcon/CLmechine.png",revision:"bf3b94d91f1087ac629109f0c7b3c9f2"},{url:"mechineIcon/CMmechine.png",revision:"0dafbaa6b93885acc1d4731646161315"},{url:"mechineIcon/CSmechine.png",revision:"e6ee54d83ebbef91d00b89da0921b02c"},{url:"mechineIcon/ILmechine.png",revision:"d9495ae9dc47e7c4989b1e2119c1bb80"},{url:"mechineIcon/IMmechine.png",revision:"548e85d3bc8c212b758d802ef3592657"},{url:"mechineIcon/ISmechine.png",revision:"44e1a07f46a44c7d49d85f4fec3092e5"},{url:"prescription/avatar0.png",revision:"48d26f5c670c2af17b2c4ae67a05a44a"},{url:"prescription/avatar1.png",revision:"7225842cf919df4ff45bd47c0847af7f"},{url:"prescription/icon.png",revision:"b9e3f48579e973761e1b3d17680a74bd"},{url:"prescription/stamp.png",revision:"b5c7bf1d21ba65d5bcb0b3fcbe8ee9e1"},{url:"prescription/title1.png",revision:"55ab67500a513614037236fe9662ad96"},{url:"prescription/title2.png",revision:"112a446ce1e59a2f169ba87dcb063526"},{url:"prescription/title3.png",revision:"f256d9831746011d03a2ccb439be6297"},{url:"prescription/title4.png",revision:"0a8ae4b1bde144e0e839949bc357b389"},{url:"prescription/title5.png",revision:"3c0436d1641aed4057d33a4806fe6d21"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"smartTouchBtmIcon/K.png",revision:"a500f043fd21240c10f9c833fff60953"},{url:"smartTouchBtmIcon/N.png",revision:"7258ef50384f385952cac26273f2b617"},{url:"smartTouchBtmIcon/P.png",revision:"662d14adff3871c579efbd909f376687"},{url:"smartTouchBtmIcon/humidity.png",revision:"e0c1d9b12890f8fafb1281895b875c4a"},{url:"smartTouchBtmIcon/lighting.png",revision:"54d1e29a84f6442ca3986c8fdce2413e"},{url:"smartTouchBtmIcon/monitor.png",revision:"97e262aa9b5f41b5f09fc47a18bc03ae"},{url:"smartTouchBtmIcon/pest.png",revision:"f7355c1c9978af49abbfd58f4b765d71"},{url:"smartTouchBtmIcon/photosynthetic.png",revision:"fa08a33cc9040e033b04f1ba367a1e0e"},{url:"smartTouchBtmIcon/pressure.png",revision:"45a2cbb3ddaf82bb0ea43b95522bb46c"},{url:"smartTouchBtmIcon/rain.png",revision:"3ff0966d1405f875fdbd61873247c4d4"},{url:"smartTouchBtmIcon/rainSnow.png",revision:"447d41a8a316e02f6a34c227cfe0a9bf"},{url:"smartTouchBtmIcon/soil_co2.png",revision:"4d98a1484c5ff94eb135bc4ae3f5a225"},{url:"smartTouchBtmIcon/soil_conductivity.png",revision:"5452aa94434ffbec8fe0b77c2b7493d4"},{url:"smartTouchBtmIcon/soil_humidity.png",revision:"ea59c94bdadb8811de3decc4bf51267b"},{url:"smartTouchBtmIcon/soil_ph.png",revision:"8c3546133b525d9dd3087017815a188b"},{url:"smartTouchBtmIcon/sold_temperature.png",revision:"7027fea228689e6e41104c1fa491d612"},{url:"smartTouchBtmIcon/sunshine_hour.png",revision:"fa08a33cc9040e033b04f1ba367a1e0e"},{url:"smartTouchBtmIcon/temperature.png",revision:"35bfe19939a80200c5b3db5bf495409f"},{url:"smartTouchBtmIcon/ultraviolet.png",revision:"430caf81c79d07e2c1a6335b48596763"},{url:"smartTouchBtmIcon/windDirection.png",revision:"a7b516b00d3efe3dfeec9d31cf6aa25a"},{url:"smartTouchBtmIcon/windSpeed.png",revision:"b02829ebef08c5a7d433386f02b4588a"},{url:"smartTouchBtns/0/0.png",revision:"774cb34a17cd7fd658467b0e63a4ff60"},{url:"smartTouchBtns/0/1.png",revision:"834fecf03bb40a4af82ec69bf91391eb"},{url:"smartTouchBtns/1/0.png",revision:"16470b609d2345bf61e457a3d2a0abd9"},{url:"smartTouchBtns/1/1.png",revision:"9fa884c2d7b040f4328e99cede319a56"},{url:"smartTouchBtns/1/2.png",revision:"b704568ca599ae081931fce1d95ee290"},{url:"smartTouchBtns/2/0.png",revision:"37d4d2be35a0841598a8c58957f5994e"},{url:"smartTouchBtns/2/1.png",revision:"03266f3b608a8dfc01be91c049e4f30f"},{url:"smartTouchBtns/3/0.png",revision:"8700acc15437a4283927cfabd79bb48e"},{url:"smartTouchBtns/3/1.png",revision:"dcc60ed5f1e8bc7d960458186c3afc9c"},{url:"smartTouchBtns/4/0.png",revision:"9c85744ade258c1aeb8ff604e943afdd"},{url:"smartTouchBtns/4/1.png",revision:"7936fd8676af3753a0b88817a281d1b2"},{url:"smartTouchBtns/5/0.png",revision:"cad6105348219cef1b111cb7a8eaffd1"},{url:"smartTouchBtns/5/1.png",revision:"952fe38eede9f44778c139022cf9279f"},{url:"smartTouchBtns/6/0.png",revision:"b20ff7d1c67107f01d44d6f1af4d5e0b"},{url:"smartTouchBtns/6/1.png",revision:"ccd7036f50bf7ed22822176eedd265a4"},{url:"smartTouchBtns/6/2.png",revision:"9023919141b51da15b83c60d5dd9115c"},{url:"smartTouchBtns/7/0.png",revision:"c0986326ae900b995cf674a4e60ce2d4"},{url:"smartTouchBtns/7/1.png",revision:"627d7e0f65788d169931d3a9f1222735"},{url:"smartTouchBtns/8/0.png",revision:"ad5603dfe5db65713b843d7708c54be8"},{url:"smartTouchBtns/8/1.png",revision:"798e94ccb861861b1074335ed66e3e12"},{url:"smartTouchDeviceAttack/earth.png",revision:"fd479d9f3ed3f567c9eb08b95816e242"},{url:"smartTouchDeviceAttack/earthBg.png",revision:"a85f06a520251a6d9455a0e40024bee5"},{url:"smartTouchDeviceAttack/earthBorder.png",revision:"6ef92cd0f6fd6dbeb0e372c9ec1d0e85"},{url:"smartTouchDeviceAttack/emonitor.png",revision:"ccf79dc73b1afa458e78d818e9916b71"},{url:"smartTouchDeviceAttack/pest.png",revision:"75d8494348e2d2c79893e58145f0e6f4"},{url:"smartTouchDeviceAttack/spore.png",revision:"8dbfa6ddf4af89fd1de76949f7b15f35"},{url:"smartTouchDeviceAttack/waterFertilizer.png",revision:"a86d15b0a12826046c9a066d85a6d0b4"},{url:"smartTouchDeviceAttack/weather.png",revision:"8dae1891e53ba1d6f60b28bdac52f4e8"},{url:"square/blue.png",revision:"0869a447034fc5b7cf31d0d710cdd578"},{url:"square/red.png",revision:"35ae25741c8f6c544b1310bd64294bad"},{url:"square/yellow.png",revision:"17e42ba58980923624583e740d1442b7"}],{})}));
