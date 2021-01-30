const { fs, path } = require("@vuepress/shared-utils");
module.exports = {
    title: "测试例子 VuePress",
    description: "Just playing around",
    base: "/vuepress/",
    head: [["link", { rel: "icon", href: "/favicon-lehua.ico" }]],
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "文章",
                items: [
                    {
                        text: "基础文档",
                        items: [{ text: "系统基础", link: "/base/systems/" }],
                    },
                    {
                        text: "技术文档",
                        items: [
                            { text: "JAVA", link: "/skill/java/" },
                            { text: "WEB", link: "/skill/web/" },
                        ],
                    },
                ],
            },
            { text: "华彩智云", link: "http://www.hczhiyun.com/" },
            { text: "GitHub", link: "https://github.com/" },
            { text: "知乎", link: "https://www.zhihu.com/" },
        ],
        sidebar: {
            "/base/systems/": getSidebar({ diretoryPath: "../base/systems/", collapsable: false }),
            "/skill/java/": [""],
            "/skill/web/": getWebSidebar("JS基础", "Vue基础", "组件"),
        },
    },
};

/**
 * 获取指定目录下的所有md文件名
 * @diretoryPath 文件夹路径
 * @routePrefix  返回的路由前缀
 * @return ['prefix/filename']
 */
function getFileName(diretoryPath, routePrefix) {
    console.log("文件夹名称", diretoryPath);
    // diretoryPath = encodeURI(diretoryPath);
    routePrefix = encodeURI(routePrefix);
    return fs
        .readdirSync(path.resolve(__dirname, diretoryPath))
        .map((filename) => routePrefix + "/" + filename.slice(0, -3))
        .sort();
}
/**
 * 获取指定目录下的所有md文件名
 * @params 配置对象: diretoryPath:文件夹路径
 */
function getSidebar(params) {
    let { diretoryPath, diretoryArray, collapsable } = params;
    if (!diretoryPath) {
        console.error("没有配置文件夹路径");
        return;
    }
    // 没有指定文件夹 默认全部读取
    if (!Array.isArray(diretoryArray) || diretoryArray.length <= 0) {
        let arr = [];
        console.log("没有指定文件夹");
        fs.readdirSync(path.resolve(__dirname, diretoryPath)).forEach((item) => {
            console.log(item);
            let stat = fs.lstatSync(path.resolve(__dirname, diretoryPath) + "/" + item);
            if (stat.isDirectory() === true) {
                console.log("文件夹", item);
                arr.push(item);
            }
        });
        diretoryArray = arr;
    }
    console.log(diretoryPath);
    console.log(diretoryArray);
    var result = diretoryArray.map((item) => {
        return {
            title: item,
            collapsable: !!collapsable,
            children: getFileName(diretoryPath + item, item),
        };
    });
    console.log(result);
    return result;
}

function getWebSidebar(titleA, titleB, titleC) {
    return [
        {
            title: "测试",
            children: [["", "web"]], // 首页 名称
        },
        {
            title: titleA,
            collapsable: false,
            children: getFileName("../skill/web/" + titleA, titleA),
            // children: [["", pluginIntro], "using-a-plugin", "writing-a-plugin", "life-cycle", "option-api", "context-api"],
        },
        {
            title: titleB,
            collapsable: false,
            children: getFileName("../skill/web/" + titleB, titleB),
        },
        {
            title: titleC,
            collapsable: false,
            children: getFileName("../skill/web/" + titleC, titleC),
        },
    ];
}
// function getWebSidebar(groupA, groupB, groupC) {
//     return [
//         {
//             title: groupA,
//             collapsable: false,
//             children: ["", "/JS基础/触底功能"],
//         },
//         {
//             title: groupB,
//             collapsable: false,
//             children: ["/VUE基础/VUE基础"],
//         },
//         {
//             title: groupC,
//             collapsable: false,
//             children: ["/组件/拖拽DOM"],
//         },
//     ];
// }
