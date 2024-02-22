class CustomSliderRenderer {
    constructor(props) {
        const el = document.createElement('input');
        const {min, max} = props.columnInfo.renderer.options;

        el.type = 'range';
        el.min = String(min);
        el.max = String(max);

        /* Renderer 활성화 */
        el.addEventListener('mousedown', (ev) => {
            ev.stopPropagation();
        });

        this.el = el;
        this.render(props);
    }

    /* 셀이 추가될 때 반환된 element가 자식으로 삽입 */
    getElement() {
        return this.el;
    }

    /* 렌더링 된 내용과 셀의 값을 동기화 - 셀의 값이 변경될 때마다 호출 */
    render(props) {
        this.el.value = String(props.value)
    }
}

const grid = new tui.Grid({
   el: document.getElementById('gridRenderer'),
   data: gridData,
   columns: [
       {
           header: 'Name',
           name: 'name'
       },
       {
           header: 'Artist',
           name: 'artist'
       },
       {
           header: 'Grade',
           name: 'grade',
           /* Renderer 적용 */
           renderer: {
               type: CustomSliderRenderer,
               options: {
                   min: 1,
                   max: 5
               }
           }
       }
   ]
});