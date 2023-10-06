process.env['FB_JEST_TEST'] = 'TEST'

beforeEach(()=>{
  jQuery.fn.sortable = () => {}
})

afterEach(()=>{
  delete jQuery.fn.sortable
})
