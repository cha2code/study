const gridData = [];
/* columns내 항목들에 대한 값 생성 */
(function (){
    for (let i = 0; i < 120; i += 1) {
        gridData.push({
           c1: 'User' + (i + 1),
           c2: ((i + 5) % 8) * 100 + i,
           c3: ((i + 3) % 7) * 60
        });
    }
})();

/* tui.Grid 생성 옵션에 summary 속성 추가 */
const grid = new tui.Grid({
    el: document.getElementById('gridSummary'),
    data: gridData,
    bodyHeight: 300,
    rowHeaders: ['rowNum'],
    columns: [
        {
            header: 'User ID',
            name: 'c1',
            align: 'center',
            editor: 'text'
        },
        {
            header: 'Score',
            name: 'c2',
            className: 'clickable',
            editor: 'text'
        },
        {
            header: 'Item Count',
            name: 'c3',
            editor: 'text'
        }
    ],

    summary: {
        /* summary 영역의 높이를 pixel 단위로 지정 */
        height: 40,
        /* summary 영역의 위치 지정 */
        position: 'bottom',
        /* 각 컬럼의 내용을 설정하는 객체 */
        columnContent: {
            c2: {
                /* 함수를 포함하는 객체 - HTML 문자열 반환 */
                template: function(valueMap) {
                    return `MAX: ${valueMap.max}<br>MIN: ${valueMap.min}`;
                }
            },
            c3: {
                template: function(valueMap) {
                    return `TOTAL: ${valueMap.sum}<br>AVG: ${valueMap.avg.toFixed(2)}`;
                }
            }
        }
    }
});