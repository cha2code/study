const grid = new tui.Grid({
    el: document.getElementById("gridThemes"),
    data: gridData,
    rowHeaders: ['rowNum'],
    columns: [
        {
            header: 'Name',
            name: 'name'
        },
        {
            header: 'Artist',
            name: 'artist',
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
        }
    ]
});

/* preset 버튼 클릭 이벤트 - 버튼 별 테마 변경 */
Array.prototype.forEach.call(document.querySelectorAll('.btn-theme'), el => {
    el.addEventListener('click', ev => {
        const preset = ev.target.getAttribute('data-preset');
        tui.Grid.applyTheme(preset);
    });
});

/* Apply 버튼 클릭 이벤트 */
document.querySelector('.btn-custom').addEventListener('click', () => {
    /* textarea에 작성 된 custom options 값 저장 */
    const options = eval(`(${document.getElementById('custom-text').value})`);
    /* options에 설정 된 default 값으로 테마 변경 */
    tui.Grid.applyTheme('default', options);
})