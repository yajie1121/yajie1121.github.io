// 霸都丶傲天 2019.10.10
$(function () {
    let currentIndex = 0;
    const container = $("#texts-container");
    const intervalTime = 500; // 每1秒切换一次

    function showNextText() {
        if (currentIndex >= config.texts.length) {
            currentIndex = 0;
        }

        const item = config.texts[currentIndex];
        const p = document.createElement("p");
        p.innerHTML = item;

        if (config.imgs && config.imgs[item]) {
            const img = document.createElement("img");
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // 占位符图片
            img.setAttribute("data-src", config.imgs[item]);
            img.setAttribute("class", 'text-img');
            p.appendChild(img);

            // 确保图片加载
            img.onload = function () {
                img.src = img.getAttribute('data-src');
            };
        }

        container.empty().append(p);
        currentIndex++;
    }

    // 启动定时器
    setInterval(showNextText, intervalTime);

    // 设置描述内容
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});