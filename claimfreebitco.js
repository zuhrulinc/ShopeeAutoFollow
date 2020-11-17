//jQuery Library
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
var token = "yus52tZavQt7"
var fingerprint = "20cb9cad5a0323f307e411a50a4fb8bb"

var indexClaim = 0
var maxClaim = 720
// delay seconds
var delay = 3720
var responseClaim = ""


function getClientSeed() {
    // random client seed
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < 16; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

function claimBitcoin() {
    $.ajax({
        url: '/',
        data: {
            "csrf_token": token,
            "fingerprint": fingerprint,
            "op": "free_play",
            "client_seed": getClientSeed()
        },
        type: 'post',
        success: function (result) {
            // success posting
            responseClaim = result.responseText
    
        }
    });
}

function startBotting() {
    if(indexClaim <= maxClaim) {
        claimBitcoin()
        console.log("Status Claim: "+responseClaim)
        console.log("Horray I already claim ^_^ wait one hour again... (AUTO)")
        setTimeout(startBotting, delay * 1000)
        indexClaim++;
    }
}

startBotting()


