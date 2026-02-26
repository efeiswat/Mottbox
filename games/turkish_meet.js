// games/turkish_meet.js
function initTurkishMeet(scene) {
    // ⛲ MERKEZİ ÇEŞME
    const fountain = BABYLON.MeshBuilder.CreateCylinder("fountain", {height: 1.5, diameter: 5}, scene);
    fountain.position = new BABYLON.Vector3(0, 0.75, 0);
    
    // 🏫 TERK EDİLMİŞ OKUL
    const school = BABYLON.MeshBuilder.CreateBox("school", {width: 15, height: 8, depth: 10}, scene);
    school.position = new BABYLON.Vector3(-25, 4, 25);

    // 🍻 BAR ALANI
    const bar = BABYLON.MeshBuilder.CreateBox("bar", {width: 12, height: 6, depth: 12}, scene);
    bar.position = new BABYLON.Vector3(25, 3, -25);

    // 👤 KARAKTER SPAWN (efeiswat ve diğerleri)
    create3DCharacter("efeiswat", new BABYLON.Vector3(0, 0, -5), scene, true); 
}

function create3DCharacter(name, pos, scene, isOwner) {
    const body = BABYLON.MeshBuilder.CreateBox(name + "_body", {width: 1, height: 2, depth: 0.5}, scene);
    body.position = pos;
    body.position.y = 1;
    
    if(isOwner) {
        // 👑 OWNER TACI
        const crown = BABYLON.MeshBuilder.CreateTorus("crown", {diameter: 0.6, thickness: 0.1}, scene);
        crown.parent = body;
        crown.position.y = 1.3;
        const cMat = new BABYLON.StandardMaterial("cMat", scene);
        cMat.emissiveColor = new BABYLON.Color3(1, 0.8, 0);
        crown.material = cMat;
    }
}

