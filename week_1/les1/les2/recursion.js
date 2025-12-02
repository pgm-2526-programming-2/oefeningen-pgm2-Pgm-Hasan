let amoutOfMesseages = 0;

function showMessage() {
    amoutOfMesseages = amoutOfMesseages + 1
    console.log('Hoi');

    if (amoutOfMesseages === 10) return;

    showMessage();
}
showMessage();
//=======================//
const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]

// 1. ZONDER RECURSIE
console.log()

menu.forEach(page => {
    console.log(`Page: ${page.name}, Page: ${page.path}`);

    if (page.subpages) {
        page.subpages.forEach(subpage1 => {
            console.log(`Subpage: ${subpage1.name}, Path: ${subpage1.path}`);

            if(subpage1.subpages) {
                subpage1.subpages.forEach(subpage2 => {
                    console.log(`Subpage: ${subpage2.name}, Path: ${subpage2.path}`)
                })
            }
        })
    }
})


// 2. MET RECURSIE
function logMenuPages(item) {
    item.forEach(item => {
        console.log(`Page: ${item.name}, Path: ${item.path}`);
        if(item.subpages && item.subpages.length > 0) {
            logMenuPages(item.subpages);
        }
    })
}

