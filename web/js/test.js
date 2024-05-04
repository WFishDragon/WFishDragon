function shake() {
    var shakeInterval = setInterval(function() {
        var randomX = Math.floor(Math.random() * 21) - 10;
        var randomY = Math.floor(Math.random() * 21) - 10;
        document.body.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
    }, 50);

    setTimeout(function() {
        clearInterval(shakeInterval);
        alert('哈哈哈，你被我整蛊了！')
        document.body.style.transform = 'translate(0, 0)';
    }, 3000); // 3秒后停止
}
shake()