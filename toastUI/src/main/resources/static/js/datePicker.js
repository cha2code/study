/* 초기 데이터 */
const gridData = [
    {
        c1: '1992/03/25',
        c2: '12/06/2019',
        c3: '2014-04-16',
        c4: '2019-11-19 09:00 AM',
        c5: '2019-11-19 09:00 AM',
        c6: '2019-01',
        c7: '2019'
    }
];

const grid = new tui.Grid({
   el: document.getElementById('gridDate'),
   data: gridData,
    /* columns의 editor에 datePicker 설정 시 사용 가능 */
   columns: [
       {
           header: 'DatePicker (Default)',
           name: 'c1',
           editor: 'datePicker'
       },
       {
           header: 'DatePicker (Using options)',
           name: 'c2',
           editor: {
               type: 'datePicker',
               options: {
                   format: 'dd/MM/yyyy'
               }
           }
       },
       {
           header: 'DatePicker (selectableRanges)',
           name: 'c3',
           editor: {
               type: 'datePicker',
               options: {
                   selectableRanges: [[new Date(2014, 3, 10), new Date(2014, 5, 20)]]
               }
           }
       },
       {
           header: 'Date TimePicker',
           name: 'c4',
           editor: {
               type: 'datePicker',
               options: {
                   format: 'yyyy-MM-dd HH:mm A',
                   timePicker: true
               }
           }
       },
       {
           header: 'Date TimePicker With tab',
           name: 'c5',
           editor: {
               type: 'datePicker',
               options: {
                   format: 'yyyy-MM-dd HH:mm A',
                   timePicker: {
                       layoutType: 'tab',
                       inputType: 'spinbox'
                   }
               }
           }
       },
       {
           header: 'MonthPicker',
           name: 'c6',
           editor: {
               type: 'datePicker',
               options: {
                   format: 'yyyy-MM',
                   type: 'month'
               }
           }
       },
       {
           header: 'YearPicker',
           name: 'c7',
           editor: {
               type: 'datePicker',
               options: {
                   format: 'yyyy',
                   type: 'year'
               }
           }
       }
   ]
});