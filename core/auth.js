// core/auth.js
var CU = { 
    username: "efeiswat", 
    rank: "OWNER", 
    coins: 999999999, 
    isLogin: false 
};

function doAuth() {
    var u = document.getElementById("auth-user").value.trim();
    var p = document.getElementById("auth-pass").value.trim();
    
    // Senin Giriş Bilgilerin
    if(u === "efeiswat" && p === "motbox2026") {
        CU.username = u;
        CU.rank = "OWNER";
        CU.coins = 999999999;
        showToast("BAŞARILI", "Hoş geldin Kurucu efeiswat!", "var(--gr)");
        goLobby();
    } else {
        // Normal Oyuncu Girişi
        CU.username = u || "Oyuncu";
        CU.rank = "Member";
        goLobby();
    }
}

