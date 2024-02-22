class CustomTextEditor {
    /* 생성자 함수
    *  - 셀의 에디팅이 시작 될 때마다 호출
    *  - 루트 엘리먼트를 인스턴스 멤버로 저장
    *  - grid, rowkey, columnInfo, value의 정보를 담은 객체로 전달
    */
    constructor(props) {
        const el = document.createElement('input');
        /* 설정한 사용자 정의 옵션에 접근하여 사용 */
        const {maxLength} = props.columnInfo.editor.options;

        el.type = 'text';
        el.maxLength = maxLength;
        el.value = String(props.value);

        this.el = el;
    }

    /* 에디터의 루트 DOM 엘리먼트 반환 - 편집 시 대상 셀 위치에 반환 된 엘리먼트 삽입 */
    getElement() {
        return this.el;
    }

    /* 셀의 값 반환 - 편집 종료 후 반환 된 값이 셀의 데이터 값으로 사용 */
    getValue() {
        return this.el.value;
    }

    /* input element를 초기화하는 데 사용 - getElement()에서 반환되는 root element가 DOM에 추가된 직후 호출 */
    mounted() {
        this.el.select();
    }
}

const grid = new tui.Grid({
   el: document.getElementById('gridCustom'),
   data: gridData,
   columns: [
       {
           header: 'Name',
           name: 'name',
           /* TUI Grid에 내장 되어 있는 에디터 */
           editor: 'text'
       },
       {
           header: 'Artist',
           name: 'artist',
           editor: {
               type: CustomTextEditor,
               options: {
                   maxLength: 10
               }
           }
       },
       {
           header: 'Type',
           name: 'typeCode',
           /* checkbox, radio, select 등의 에디터 타입을 사용하기 위한 list option 설정 */
           formatter: 'listItemText',
           editor: {
               type: 'select',
               options: {
                   /* 배열. element는 text와 value 속성을 가짐 */
                   listItems: [
                       /* text = 셀의 레이블, value = 셀의 내부 값 */
                       { text: 'Deluxe', value: '1' },
                       { text: 'EP', value: '2' },
                       { text: 'Single', value: '3' }
                   ]
               }
           }
       },
       {
           header: 'Genre',
           name: 'genreCode',
           formatter: 'listItemText',
           editor: {
               type: 'checkbox',
               options: {
                   listItems: [
                       { text: 'Pop', value: '1' },
                       { text: 'Rock', value: '2' },
                       { text: 'R&B', value: '3' },
                       { text: 'Electronic', value: '4' },
                       { text: 'etc.', value: '5' }
                   ]
               }
           },
           copyOptions: {
               useListItemText: true
           }
       },
       {
           header: 'Grade',
           name: 'grade',
           copyOptions: {
               useListItemText: true
           },
           formatter: 'listItemText',
           editor: {
               type: 'radio',
               options: {
                   listItems: [
                       { text: '★☆☆', value: '1' },
                       { text: '★★☆', value: '2' },
                       { text: '★★★', value: '3' }
                   ]
               }
           }
       }
   ]
});

grid.on('befordChange', ev => {
   console.log('before change:', ev);
});

grid.on('afterChange', ev => {
   console.log('after change:', ev);
});