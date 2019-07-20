const storage = new XStorage();

window.onload = () => {
    document.getElementById('egg').src = 'res/skins/default.jpg';
    document.getElementById('counter').innerText = storage.eggs;
}

document.getElementById('egg').onclick = () => {
    document.getElementById('counter').innerText = storage.incrementEggs();
}

document.getElementById('egg').ondragstart = () => {
    document.getElementById('counter').innerText = storage.incrementEggs();
    return false;
}