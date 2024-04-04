
const data = {
  name: 'Cell',
  config: {},
  id: '0',
  zoomRatio: 1,
  order: '0',
  column: 50,
  addRows: 70,
  row: 90,
  status: 1,
  celldata: [],
  calcChain: [
    {
      r: 0,
      c: 3,
      id: '0',
      func: [ true, 3, '=Formula!A1+Formula!B1' ],
      color: 'w',
      parent: null,
      chidren: {},
      times: 0,
    },
  ],
  scrollLeft: 0,
  scrollTop: 0,
  frozen: {
    type: 'rangeBoth',
    range: {
      row_focus: 0,
      column_focus: 0,
    },
  },
};

export default data;

