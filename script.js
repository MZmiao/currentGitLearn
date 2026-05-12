// script.js

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    const kittenText = document.querySelector('p');
    const logo = document.querySelector('img');

    // 1. 点击标题，标题变色
    title.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        title.style.color = randomColor;
        console.log('标题颜色已改变：', randomColor);
    });

    // 2. 点击 Logo 图片弹出提示
    if (logo) {
        logo.addEventListener('click', () => {
            alert('恭喜你解锁了 100 年免费看小说成就！📖');
        });
    }

    // 3. 在控制台打印一段欢迎语
    console.log("Welcome to Git World! 你的第一个网页已成功运行。");
});