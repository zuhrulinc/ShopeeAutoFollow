var _0x2dfb=['floor','length','responseText','open','{\x22success\x22:true}','log','application/x-www-form-urlencoded;\x20charset=UTF-8','random','Berhasil\x20Follow:\x20','csrftoken','cookie','readyState','charAt','setRequestHeader','Content-type','substring','shopid','Gagal\x20Follow:\x20','querySelectorAll','\x20Pengguna','Mengikuti','csrfmiddlewaretoken=','send','onreadystatechange','.btn-follow','split','push','innerText','https://shopee.co.id/buyer/follow/shop/','X-Requested-With','POST'];(function(_0x4fd53f,_0x2dfbb7){var _0x1ec375=function(_0x2c8546){while(--_0x2c8546){_0x4fd53f['push'](_0x4fd53f['shift']());}};_0x1ec375(++_0x2dfbb7);}(_0x2dfb,0x1b3));var _0x1ec3=function(_0x4fd53f,_0x2dfbb7){_0x4fd53f=_0x4fd53f-0x0;var _0x1ec375=_0x2dfb[_0x4fd53f];return _0x1ec375;};var userId=document[_0x1ec3('0x11')](_0x1ec3('0x17')),listUser=[],statusError,indexUser=0x0,successFollow=0x1,failedfollow=0x1;for(let i=0x0;i<userId['length'];i++){var data=userId[i]['getAttribute'](_0x1ec3('0xf'));userId[i][_0x1ec3('0x1a')]!=_0x1ec3('0x13')&&listUser[_0x1ec3('0x19')](data);}function followUser(_0x5a4bf8){var _0x59f0d0=new XMLHttpRequest(),_0x42e5b5=_0x1ec3('0x1b')+_0x5a4bf8+'/',_0x323296=_0x1ec3('0x14')+readToken(_0x1ec3('0x8'));_0x59f0d0[_0x1ec3('0x2')](_0x1ec3('0x1d'),_0x42e5b5,!![]),_0x59f0d0[_0x1ec3('0xc')](_0x1ec3('0x1c'),'XMLHttpRequest'),_0x59f0d0[_0x1ec3('0xc')](_0x1ec3('0xd'),_0x1ec3('0x5')),_0x59f0d0[_0x1ec3('0x16')]=function(){_0x59f0d0[_0x1ec3('0xa')]==0x4&&_0x59f0d0['status']==0xc8&&(statusError=_0x59f0d0[_0x1ec3('0x1')]);},_0x59f0d0[_0x1ec3('0x15')](_0x323296);}function runBot(){if(indexUser<listUser[_0x1ec3('0x0')]){followUser(listUser[indexUser]);var _0xead9ae=_0x1ec3('0x3');indexUser++,setTimeout(()=>{statusError==_0xead9ae?console[_0x1ec3('0x4')](_0x1ec3('0x7')+successFollow++ +_0x1ec3('0x12')):console[_0x1ec3('0x4')](_0x1ec3('0x10')+failedfollow++ +'\x20Pengguna');},0x7d0),setTimeout(runBot,randomDelay(0xa,0x10)*0x3e8);}}function randomDelay(_0x467eb3,_0x28e57c){return Math[_0x1ec3('0x1e')](Math[_0x1ec3('0x6')]()*(_0x28e57c-_0x467eb3+0x1))+_0x467eb3;}function readToken(_0xb6a167){var _0x465eb9=_0xb6a167+'=',_0x35ba79=document[_0x1ec3('0x9')][_0x1ec3('0x18')](';');for(var _0x5e8e09=0x0;_0x5e8e09<_0x35ba79['length'];_0x5e8e09++){var _0x443028=_0x35ba79[_0x5e8e09];while(_0x443028[_0x1ec3('0xb')](0x0)=='\x20')_0x443028=_0x443028[_0x1ec3('0xe')](0x1,_0x443028['length']);if(_0x443028['indexOf'](_0x465eb9)==0x0)return _0x443028[_0x1ec3('0xe')](_0x465eb9[_0x1ec3('0x0')],_0x443028['length']);}return null;}runBot();
