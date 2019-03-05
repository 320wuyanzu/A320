module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/font.css' }]
    ],
    base: '/A320/',
    title: 'A319/A320机型笔记',
    description: '不定期更新，闲了就写写',
    themeConfig: {
        //lastUpdated: '最后一次编辑',
        nav: [
            { text: '个人主页', link: 'https://320wuyanzu.github.io' },
            { text: 'FIN号介绍', link: '/fin' },
            { text: 'A330', link: 'https://320wuyanzu.github.io/A330' },
            { text: '章节号速查', link: 'https://320wuyanzu.github.io/ATAs' },
            { text: 'FIN速查', link: 'https://320wuyanzu.github.io/FINs' }
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    }
}


/**
 * 折叠式侧边栏
 */
function sidebar_group() {
    let ATA36 = {
        title: 'ATA36-Pneumatic',
        children: ['/ATA36/', './ATA36/1', './ATA36/2', './ATA36/3', './ATA36/4', './ATA36/5', './ATA36/6']
    };
    let ATA21 = {
        title: 'ATA21-Air Conditioning',
        children: ['/ATA21/']
    };
    let ATA22 = {
        title: 'ATA22-Auto Flight',
        children: []
    };
    let ATA23 = {
        title: 'ATA23-Communications',
        children: []
    };
    let ATA24 = {
        title: 'ATA24-Electrical Power',
        children: []
    };
    let ATA25 = {
        title: 'ATA25-Equipment/Furnishings',
        children: []
    };
    let ATA26 = {
        title: 'ATA26-Fire Protection',
        children: []
    };
    let ATA27 = {
        title: 'ATA27-Flight Controls',
        children: []
    };
    let ATA30 = {
        title: 'ATA30-Ice/Rain Protection',
        children: []
    };
    let ATA31 = {
        title: 'ATA31-Indicating/Recording',
        children: ['/ATA31/','/ATA31/1','/ATA31/2','/ATA31/3']
    };
    let ATA32 = {
        title: 'ATA32-Landing Gear',
        children: []
    };
    let ATA33 = {
        title: 'ATA33-Lights',
        children: []
    };
    let ATA34 = {
        title: 'ATA34-Navigation',
        children: []
    };
    let ATA35 = {
        title: 'ATA35-Oxygen',
        children: []
    };

    let ATA38 = {
        title: 'ATA38-Water/Waste',
        children: []
    };
    let ATA46 = {
        title: 'ATA46-Information Systems',
        children: []
    };
    let ATA47 = {
        title: 'ATA47-Inert Gas System',
        children: []
    };
    let ATA49 = {
        title: 'ATA49-APU',
        children: []
    };
    let ATA51 = {
        title: 'ATA51-Structures',
        children: []
    };
    let ATA52 = {
        title: 'ATA52-Doors',
        children: []
    };
    let ATA71 = {
        title: 'ATA71-Power Plant(CFM56)',
        children: ['/ATA71/', '/ATA71/72/', '/ATA71/73/', '/ATA71/74/','/ATA71/75/','/ATA71/76/','/ATA71/77/','/ATA71/78/','/ATA71/79/','/ATA71/80/']
    };
    let ATA28 = {
        title: '28-燃油系统',
        children: ['/ATA28/','/ATA28/10','/ATA28/20']
    };
    let ATA29 = {
        title: '29-液压系统',
        children: ['/ATA29/','/ATA29/10','/ATA29/20']
    };
    let ATA55 = {
        title: '55-结构：安定面',
        children: ['/ATA55/','/ATA55/10','/ATA55/20','/ATA55/30','/ATA55/40']
    };
    let ATA57 = {
        title: '57-结构：大翼',
        children: ['/ATA57/','/ATA57/10','/ATA57/20','/ATA57/30','/ATA57/40','/ATA57/50','/ATA57/60','/ATA57/70']
    };

    return [
        ATA36,
        //ATA21,
        //ATA22,
        //ATA23,
        //ATA24,
        //ATA25,
        //ATA26,
        //ATA27,
        //ATA30,
        //ATA31,
        //ATA32,
        //ATA33,
        //ATA34,
        //ATA35,
        //ATA38,
        //ATA46,
        //ATA47,
        //ATA49,
        //ATA51,
        //ATA52,
        //ATA28,
        //ATA29,
        //ATA55,
        //ATA57,
        //ATA71
    ]
}