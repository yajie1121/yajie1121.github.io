// 霸都丶傲天 2019.10.10
$(function () {
    // 创建文本和图片元素
    let dom = document.createElement("span");

    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;

        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // 占位符图片
            img.setAttribute("data-src", config.imgs[item]);
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }

        dom.appendChild(p);
    });

    $("#texts-container").append(dom);

    // 懒加载使用 Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    // 观察所有带有 'text-img' 类的图片
    const images = document.querySelectorAll('.text-img');
    images.forEach(img => {
        observer.observe(img);
    });

    // 设置描述内容
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
