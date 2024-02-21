var Grid = tui.Grid;
const grid = new Grid({
    /* grid가 생성 될 container element (필수) */
    el: document.getElementById('grid'),
    /* 데이터의 이름, 헤더, 에디터 등의 컬럼 정보 배열 (필수) */
    columns: [
        {
            header: 'ID',
            name: 'id'
        },
        {
            header: 'CITY',
            name: 'city',
            editor: 'text'
        },
        {
            header: 'COUNTRY',
            name: 'country'
        }
    ]
});

/* 데이터 입력 */
const data = [
    {
        id: '10012',
        city: 'Seoul',
        country: 'South Korea'
    },
    {
        id: '10013',
        city: 'Tokyo',
        country: 'Japan'
    },
    {
        id: '10014',
        city: 'London',
        country: 'England'
    },
    {
        id: '10015',
        city: 'Ljubljana',
        country: 'Slovenia'
    },
    {
        id: '10016',
        city: 'Reykjavik',
        country: 'Iceland'
    }
];

/* resetData() 메소드로 데이터 입력 */
grid.resetData(data);