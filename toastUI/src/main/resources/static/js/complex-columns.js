const grid = new tui.Grid({
    el: document.getElementById('grid'),
    /* commonData.js에서 받은 gridData */
    data: gridData,
    columns: [
        {
            header: 'Name',
            name: 'name',
        },
        {
            header: 'Artist',
            name: 'artist'
        },
        {
            header: 'Type',
            name: 'type'
        },
        {
            header: 'Release',
            name: 'release'
        },
        {
            header: 'Genre',
            name: 'genre'
        },
        {
            header: 'Price',
            name: 'price'
        },
        {
            header: 'Download',
            name: 'downloadCount'
        },
        {
            header: 'Listen',
            name: 'listenCount'
        }
    ],
    /* 여러 컬럼을 하나의 부모 헤더로 그룹 지어 트리 형태로 생성 */
    header: {
        height: 160,
        complexColumns: [
            {
                /* 부모 컬럼의 이름 */
                header: 'Basic',
                name: 'mergeColumn1',
                /* 부모 컬럼 밑에 들어갈 자식 컬럼 설정 */
                childNames: ['name', 'artist']
            },
            {
                header: 'Extra',
                name: 'mergeColumn2',
                childNames: ['type', 'release', 'genre']
            },
            {
                header: 'Detail',
                name: 'mergeColumn3',
                /* 부모 컬럼인 Basic, Extra를 다른 부모 컬럼인 Detail의 자식으로 설정 */
                childNames: ['mergeColumn1', 'mergeColumn2']
            },
            {
                header: 'Count',
                name: 'mergeColumn4',
                childNames: ['downloadCount', 'listenCount']
            },
            {
                header: 'Album Info',
                name: 'mergeColumn5',
                childNames: ['mergeColumn3', 'mergeColumn4']
            }
        ]
    }
});