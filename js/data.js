const title = "计数器系统" // 标题

// 账号列表
const accounts = [
    { name: '11qsl33800', password: '11qsl146900' },
    { name: '11qsl88008', password: '11qsl146900' },
    { name: '11qsl88008', password: '11qsl15900' },
]
const bg = './assets/bg.png' // 背景图 
const bgColor = 'rgba(70,130,180, 0.4)' // 背景色

const table_length_1 = 120 // 表格长度
const table_length_2 = 160 // 表格长度
const table_length_3 = 160 // 表格长度

const max_total_3 = 100 // 表格三最大统计值 超过后归零
const max_total_3_2 = -100 // 表格三最大统计值 超过后归零
const max_number = 256 // 表格一最大统计值 超过后归一
const isShowOther = false // 表格是否显示中间列

let data_1 = `
●	●			●	●						●	●								○	○							●	●					○	●					●	●						○	○						○	●						●	●					●	○					●	○	○	●					○	○						○	○	○	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○		○	○	○	○	○		○	○		●	○	○	○									
○	●	●		○	●	●					●	●	●							●	○	○						○	●	●				○	○	●				○	●	●					●	○	○					●	○	●					●	●	●				○	○	○				○	●	●	○	●				○	○	○					○	●	●	●	●	●	●	○	○	○	●	●	○	●	●	○	○	○	○	○	●	●	●	●	●	○	○	○	○	●	○	○									
○	○	●	●	○	○	●	●				●	●	●	●						○	●	○	○					●	○	●	●			●	○	○	●			○	○	●	●				○	●	○	○				●	●	○	●				●	●	●	●			○	○	○	○			●	○	○	●	○	●			●	●	○	○				○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	●	○	●	○	○	○	○	●	○									
●	○	○	●	●	○	○	●	●			○	●	●	●	●					●	○	●	○	○				●	●	○	●	●		○	●	○	○	●		●	○	○	●	●			●	○	●	○	○			●	●	●	○	●			●	○	○	○	○		○	○	○	○	○		○	●	●	○	●	○	●		○	○	○	○	○			●	●	●	●	●	●	○	○	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	●	○	●	○	○	●	○	●									
●	●	○	○	○	●	○	○	●	●		○	○	●	●	●	●				●	●	○	●	○	○			○	●	●	○	●	●	●	○	●	○	○	●	○	●	○	○	●	●		●	●	○	●	○	○		○	●	●	●	○	●		○	●	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	●	○	○	○	○	○	○		○	○	○	○	○	○	○	○	○	○	○	●	○	○	○	○	●	●	●	●	●	●	○	●	●	●	○	●	●	○	○	○									
○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	●	●	●			○	●	●	○	●	○	○		●	○	●	●	○	●	●	●	○	●	○	○	●	○	●	○	○	●	●	○	●	●	○	●	○	○	○	○	●	●	●	○	●	●	○	●	●	●	●	○	○	○	○	○	○	○	●	○	●	●	○	●	○	○	○	●	○	○	○	○	○	○	●	○	○	○	●	○	○	○	○	○	●	●	○	●	●	○	○	○	○	●	○	○	○	○	●	○	○	●	○	○			               						
○	○	●	●	●	●	○	●	○	○	●	○	●	○	○	●	●	●	●		○	○	●	●	○	●	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	●	○	●	○	○	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	○	●	●	●	●	●	●	○	○	○	●	●	○	●	○	●	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	○	●	●	○	○	○	○	○	○	●	○	●	○	●	●	○	●	○									
●	○	○	●	○	●	●	○	●	○	○	●	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	●	○	●	●	○	○	●	●	○	●	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	○	●	●	○	○	●	●	○	○	○	○	○	●	○	○	○	○	○	●	○	○	○	○	●	●	●	●	●	●	●	○	○	○	●	●	●	●	●	●	○	○	○	○	●	○	○	●									
●	●	○	○	○	○	●	●	○	●	○	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	●	●	○	○	●	●	○	○	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	○	●	●	●	●	●	●	○	○	●	○	○	○	○	○	○	○	○	○	○	○	○	●	●	○	○									
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	○	○	●	●	●	○	●	●	○	○	○	○	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	●	●	●	●	●	○	●	●	○	●	○	○	●	○	○	○	○	○	●	○	○	●	●	○	○	●	○	●	●	●	●	●	●	○	○	○	●	●	●	○	●	●	●	●	●	○	○	○	○	●	○	○									
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	●	●	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	○	●	●	●	○									
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	●	○	●	○	●	●	●	●	●									
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	●	●	○	●	○	●	●	○	●	○	●	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	●	●	●	●	●	○	●	○	○	○	○	●	●	○	○	○	●	○	○	●	○	○	●									
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	○	●	○	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	●	●	○	○	●	○	●	●	○	●	○	●	○	○	●	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	●	●	○	○	○	○	●	●	○	●	●	○									
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	○	○	●	●	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	●	○	○	○	○	○	○	○	○	●	○	●	●	●	●	●	○	●	●	○	●	○	○									
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	○	○	●	●	○	○	●	●	○	○	○	○	●	○	○	○	●	○	●	●	●	●	●	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	○	○	●									
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	●	○	●	○	○	●	●	○	○	○	○	○	○	●	●	●	●	●	●	○	○	●	○	○	○	○	○	○	○	○	○	○	○	○	○	●	●									
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	●	●	●	●	●	●	●	●	●	○	●	○	○	○	●	●	●	○	●	○	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	○	○	○	●	○	●	●	●	●	●	●	○	○	○	○	○	●	●									
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	○	●	○	●	○	●	●	●	○	○	○	○	●	○	○	●	○	○	●	○	●	○	○	○	●	●	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	○	○	○	○	○	○	●	●	●	○									
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	○	○	○	●	●	●	○	●	●	●	○	●	●	●	○	○	○	○	●	○	○	●	●	○	●	○	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	●	●	●	●	●	●	○	●	○	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●									
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	●	○	○	○	○	○	●	●	○	○	○	○	●	●	○	○	○	○	○	○	○	○	○	●	●	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●									
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	●	○	●	○	○	○	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	○	○	○	○	○	○	○	●	○	●	●	○	●	○	●	●	○	●	○	○	○	○	○	○	○	●	●	○	○	○	○	○	●	○	○	●	○	○	○	●	●	●	●	●	●	○	●	●	○	○	○	●	○									
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	●	○	●	○	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	○	○	●	●	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●	●	●	○	○	○	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	●	●	○	○	○	○	●	○	○	○	○	○	●	●	○	○	○	○	○									
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	●	○	●	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	○	○	○	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	○	●	○	●	○	●	●	●	○	●	○	●	○	●	○	●	○	●	○	●	○	●	○	●	○	●	●	○	○	○	○	●	●	○									
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	○	●	●	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○									
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	●	○	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	○	○	●	●	○	●	○	○	●	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○									
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○									
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	○	○	●	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○									
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○									
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○									
`

let data_2 = `
●				●							●									○								●						●						●							○							●							●						●						○		●						●							●	●	●	●	○	○	●	○	●	○	●	●	●	●	●	○	○			○	●	●	●			○			●	○	●	○		○			○	○	○	○	○						●								●	○	●	●	○	●	●	●	●	●	○	●						
●	●			●	●						●	●								○	○							●	●					○	●					●	●						○	○						○	●						●	●					●	○					●	○	○	●					○	○						○	○	○	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○		○	○	○	○	○		○	○		●	○	○	●	●	●	●		○	○	●	●	○	○					○	○							○	●	○	○	●	○	○	●	●	○	○	○	○					
○	●	●		○	●	●					●	●	●							●	○	○						○	●	●				○	○	●				○	●	●					●	○	○					●	○	●					●	●	●				○	○	○				○	●	●	○	●				○	○	○					○	●	●	●	●	●	●	○	○	○	●	●	○	●	●	○	○	○	○	○	●	●	●	●	●	○	○	○	○	●	○	●	●	●	●	○	○	○	●	●	○	○	○				○	○	○						○	○	●	○	○	●	●	●	○	●	●	●	●	○				
○	○	●	●	○	○	●	●				●	●	●	●						○	●	○	○					●	○	●	●			●	○	○	●			○	○	●	●				○	●	○	○				●	●	○	●				●	●	●	●			○	○	○	○			●	○	○	●	○	●			●	●	○	○				○	○	○	○	○	○	○	●	○	●	●	●	○	○	○	○	○	●	●	○	○	○	○	●	○	●	○	○	○	○	●	○	○	○	○	○	●	●	○	○	○	○	○	○			○	○	○	○					○	○	○	●	○	○	○	●	○	○	●	○	●	●	○			
●	○	○	●	●	●	●	●	●			○	●	●	●	●					●	○	●	○	○				●	●	○	●	●		○	●	○	○	●		●	○	○	●	●			●	○	●	○	○			●	●	●	○	●			●	○	○	○	○		○	○	○	○	○		○	●	●	○	●	○	●		○	○	○	○	○			●	●	●	●	●	●	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	●	○	●	○	○	●	○	●	○	●	○	○	●	●	●	●	●	○	○	○	○	○	●	○	●	○	○				●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	○		
●	●	○	●	●	●	○	○	●	●		○	○	●	●	●	●				●	●	○	●	●	●			○	●	●	○	●	●	●	○	●	○	○	●	○	●	○	○	●	●		●	●	○	●	○	○		○	●	●	●	○	●		○	●	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	●	○	○	○	○	○	○		○	○	○	○	○	○	○	○	○	○	○	●	○	○	○	○	●	●	●	●	●	●	○	●	●	●	○	●	●	○	○	○	●	○	●	○	○	○	○	○	○	●	○	○	○	○	○	●	○	●	●	●			●	●	●	○	○	●	●	○	●	●	○	●	●	●	●	●	○	
○	●	●	○	●	●	●	○	○	●	●	●	○	○	●	●	●	●			○	●	●	○	●	○	○		●	○	●	●	○	●	●	●	○	●	○	○	●	○	●	○	○	●	●	○	●	●	○	●	○	○	○	○	●	●	●	○	●	●	○	●	●	●	●	○	○	○	○	○	○	○	●	○	●	●	○	●	○	○	○	●	○	○	○	○	○	○	●	○	○	○	●	○	○	○	○	○	●	●	○	●	●	○	○	●	○	●	○	○	○	○	●	○	○	●	○	○	○	○	○	●	○	●	●	●	○	○	●	○	○	○	○	○	●	○	●	○	○		○	○	○	●	●	●	●	●	●	●	○	○	●	●	●	●	○	○
○	○	●	●	●	●	○	●	○	○	●	○	●	○	○	●	●	●	●		○	○	●	●	○	●	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	●	○	●	○	○	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	○	●	●	●	●	●	●	○	○	○	●	●	○	●	○	●	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	○	●	●	○	○	○	●	○	○	●	○	●	○	●	●	○	●	○	○	●	●	●	○	○	○	○	○	○	○	●	○	●	●	●	○	●	○	●	○	●	●	●	○	○	○	○	○	●	○	○	○	●	○	○	●	○	●	○
●	○	○	●	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	●	○	●	●	○	○	●	●	○	●	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	○	●	●	○	○	●	●	○	○	○	○	○	●	○	○	○	○	○	●	○	○	○	○	●	●	●	●	●	●	●	○	○	○	●	●	●	●	●	●	○	○	○	○	●	○	○	●	○	●	○	○	●	●	●	●	●	○	●	●	●	●	●	○	○	○	●	○	●	○	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	○
●	●	○	○	○	○	●	●	○	●	○	●	●	○	●	○	○	●	●	●	○	●	●	●	●	●	○	●	●	○	●	●	○	●	●	○	○	●	●	○	○	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	○	●	●	●	●	●	●	○	○	●	○	○	○	○	○	○	●	○	○	○	○	○	●	●	○	○	●	○	●	○	○	○	○	○	○	●	●	●	●	●	○	●	○	○	○	●	○	○	○	○	○	○	○	●	○	○	●	○	○	○	●	●	●	●	○	●
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	○	○	●	●	●	○	●	●	○	○	○	○	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	●	●	●	●	●	○	●	●	○	●	○	○	●	○	○	○	○	○	●	○	○	●	●	○	○	●	○	●	●	●	●	●	●	○	○	○	●	●	●	○	●	●	●	●	●	○	○	○	○	●	○	○	●	●	●	●	○	○	○	○	○	○	●	○	●	●	○	○	●	●	●	●	●	○	○	●	●	●	●	○	●	●	●	○	●	○	○	●	○	○	○	●
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	●	●	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	○	●	●	●	○	○	●	●	●	○	○	○	○	○	○	○	●	○	○	○	●	●	●	○	○	○	●	○	○	○	●	○	○	○	●	○	○	●	○	○	○	●	○	○	○
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	●	●	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	●	○	●	○	●	●	●	●	●	○	●	○	○	●	●	●	●	●	○	○	○	●	●	●	●	●	○	●	○	●	○	●	○	●	○	●	●	●	●	●	●	○	●	○	●	○	●	○	○
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	●	●	○	●	○	●	●	○	●	○	●	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	●	●	●	●	●	○	●	○	○	○	○	●	●	○	○	○	●	○	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	○	○	○	●	●	○	○	○	●	○	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	●	●	○
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	○	●	○	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	●	●	○	○	●	○	●	●	○	●	○	●	○	○	●	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	●	●	○	○	○	○	●	●	○	●	●	○	●	○	●	●	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	○	●	●	○	●	○	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	○	○	●	●	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	●	○	○	○	○	○	○	○	○	●	○	●	●	●	●	●	○	●	●	○	●	○	○	○	○	○	●	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	○	○
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	○	○	●	●	○	○	●	●	○	○	○	○	●	○	○	○	●	○	●	●	●	●	●	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	○	○	●	○	●	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	●	●	○	○	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	●	○	○
○	○	●	●	●	●	●	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	●	○	●	○	○	●	●	○	○	●	○	○	○	●	●	●	●	●	●	○	○	●	○	○	○	○	○	○	○	○	●	○	●	●	●	●	●	●	●	●	○	●	●	●	●	●	●	●	○	●	●	●	●	○	○	●	●	●	○	●	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	●	●	●	●	●	●	●	●	●	○	●	○	○	○	●	●	●	○	●	○	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	○	○	○	○	○	○	●	●	○	○	●	○	○	●	●	●	●	●	●	○	○	○	●	○	●	●	●	●	●	●	○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	●	○	○	●	●	○	●	●	●	●	●	○	○	○	●	●	●	●	●	●	○	○	●	●
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	○	●	○	●	○	●	●	●	○	○	○	○	●	○	○	●	○	○	●	○	●	○	○	○	●	●	●	○	○	○	○	○	●	●	○	○	●	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	○	○	○	○	○	●	●	●	●	○	●	○	●	●	○	○	○	○	○	●	●	●	○	○	○	●	●	●	○	○	●	●	●	○	○	○	○	○	○	○	○	○	●	○	●	●	●	○	○	●
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	○	○	○	●	●	●	○	●	●	●	○	●	●	●	○	○	○	○	●	○	○	●	●	○	●	○	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	●	●	●	●	●	●	●	○	●	○	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●	○	●	○	●	●	●	●	●	●	○	●	●	●	●	●	○	●	●	●	○	○	●	●	○	○	○	●	●	●	●	●	●	●	●	○	●	●	●	○	○
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	●	○	○	○	○	○	●	●	○	○	○	○	●	●	○	○	●	○	○	○	○	○	○	●	●	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●	●	●	●	○	●	●	●	●	●	●	○	●	●	●	●	●	○	●	●	●	○	○	●	●	●	●	○	○	○	●	●	○	○	○	●	○	●	●	●	○
○	●	○	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	●	○	●	○	○	○	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	○	○	○	○	○	○	○	●	○	●	●	○	●	○	●	●	○	●	○	○	○	○	○	○	○	●	●	○	○	○	●	○	●	○	○	●	○	○	○	●	●	●	●	●	●	○	●	●	○	○	○	●	○	●	○	●	●	○	○	○	○	○	●	●	○	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	●	●	●
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	●	○	●	○	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	○	○	●	●	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●	●	●	○	○	○	○	○	○	○	○	○	○	○	●	○	○	○	●	○	○	●	●	○	○	○	○	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	●	●	○	○	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	●	○	●	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	○	○	○	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	○	●	○	●	○	●	●	●	○	●	○	●	●	●	○	●	○	●	○	●	○	●	○	●	○	●	●	○	○	○	○	●	●	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	○	●	●	○	●	●	●	○	○	○	●	●	●	○	○	●	○	●	●	○	●
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	○	●	●	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	●	●	●	○	○	○	○	○	○	●	●	○	●	●	○	○	○	○	●	●	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	●	●	●	○
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	●	○	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	○	○	●	●	○	●	○	○	●	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	●	○	○	○	○	●	○	○	○	●	●	●	●	●	○	○	○	○	●	●
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○	●	●	●	●	●	○	●	●	○	○	○	○	●	●	○	●	●	○	○	○	●	●	●	●	●	○	○	○	○	○	○	○	○	●	●	●	●	●	●	●
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	○	○	●	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	●	○	●	●	○	○	○	○	●	●	○	●	●	○	●	○	○	○	●	●	●	●	●	●	●	●	●	○	○	●	●	●	○
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	●	●	●	●	○	○	●	●	○	●	●	●	●	○	○	○	●	●	●	●	●	●	●	●	●	○	○	○	○	○	○
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	●	○	○	○	○	○	○	○	○	●	●	●	●	●	●	●	●	●	○
`

let data_3 = `
●				●							●									○								●						●						●							○							●							●						●						●		●						●							●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○			○	●	●	●			○			●	●	●	●		●			●	●	●	●	●						●								●	○	●	●	●	●	●	●	●	●	●	●						
●	●			●	●						●	○								○	○							●	●					○	●					●	●						○	○						○	●						●	●					●	○					●	○	○	●					○	○						○	○	○	○	●	●	●	●	●	●	●	○	○	●	●	○	●	●		●	●	○	●	●		○	○		●	○	○	●	●	●	●		○	●	●	●	○	○					○	○							○	●	○	○	●	○	○	●	●	○	○	○	○					
○	●	●		○	●	●					●	●	●							●	○	○						○	●	●				○	○	●				○	○	○					●	○	○					●	○	●					●	●	●				○	○	○				○	●	●	●	●				○	○	○					○	●	●	●	●	●	●	○	○	●	●	●	○	○	●	●	●	●	○	●	●	○	●	○	●	●	○	○	○	●	○	●	●	●	●	○	●	●	●	●	●	●	●				●	●	○						○	○	●	○	○	●	●	●	○	●	●	●	●	○				
●	○	●	●	○	○	●	○				●	●	●	●						○	●	○	○					●	○	●	●			●	●	●	●			○	●	●	●				○	●	○	○				●	●	○	●				●	●	●	●			○	○	●	●			●	○	●	●	○	●			●	●	○	●				○	○	○	○	○	●	○	●	●	●	●	●	●	●	●	●	○	○	●	○	●	○	○	●	○	●	○	○	○	○	●	○	●	●	●	○	●	●	○	○	○	●	●	○			●	●	●	○					○	○	○	●	○	○	○	●	○	○	●	○	●	●	○			
●	●	○	●	○	●	●	●	●			○	●	●	●	●					●	○	●	○	○				●	●	●	●	●		○	○	○	○	●		●	○	●	●	○			●	○	●	○	○			●	●	●	○	●			●	○	○	○	○		○	●	○	○	○		○	●	●	○	●	○	●		○	○	●	○	○			●	●	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	●	○	○	●	●	○	●	○	●	●	●	●	○	●	○	●	○	○	●	●	●	●	●	●	●	○	○	○	○	●	●	○	○				●	●	○	●	●	●	●	●	●	●	●	●	○	○	●	○		
●	●	○	●	●	●	○	○	●	●		○	●	●	●	●	●				●	●	○	●	●	●			○	●	●	●	●	●	●	○	●	○	○	●	○	●	○	○	●	○		●	●	○	●	○	○		○	●	●	●	○	●		○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	●	○	●	○	○	○	●	●	○		○	●	●	●	●	●	○	○	●	○	●	●	●	●	○	○	●	●	●	●	●	●	○	●	●	●	○	●	●	○	●	●	●	○	●	○	○	○	○	○	○	●	○	○	○	○	●	●	○	●	●	●			●	●	●	○	○	●	●	○	●	●	○	●	●	●	●	●	○	
○	●	●	○	●	●	●	○	○	●	●	●	○	●	●	●	●	●			○	●	●	○	●	○	○		●	○	●	●	○	●	●	●	○	●	●	○	●	○	●	○	○	●	●	○	●	●	○	●	○	○	○	○	●	●	●	○	●	●	○	●	●	●	●	○	●	○	○	○	●	●	●	○	●	●	○	●	○	●	●	●	●	●	●	○	●	○	●	○	○	○	●	●	○	○	●	○	●	●	○	●	●	●	○	●	○	●	○	○	○	●	●	○	○	●	○	○	○	○	○	●	○	●	●	●	○	○	●	●	●	●	●	○	●	○	○	○	○		○	●	●	●	●	●	●	●	●	●	●	○	●	●	●	●	○	○
○	○	●	●	●	●	○	●	○	○	●	○	●	○	○	●	●	●	●		○	○	●	●	○	●	○	○	●	●	○	●	●	○	○	●	●	●	●	○	●	●	●	●	●	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	●	●	●	○	○	●	●	●	●	●	●	●	●	○	●	○	●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	○	●	●	●	○	○	●	○	○	●	●	●	○	●	●	○	●	○	○	●	●	●	○	○	○	○	○	○	○	●	○	●	●	●	○	●	○	●	○	●	●	●	○	○	○	○	○	●	○	●	●	●	○	○	●	○	●	○
●	●	●	●	●	●	●	●	●	●	●	●	○	●	○	○	●	●	●	●	●	●	●	●	●	○	●	○	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	○	●	●	○	○	●	●	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	●	●	●	●	●	●	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	●	○	●	○	○	●	●	●	●	●	○	●	●	●	●	●	○	○	○	●	○	●	○	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	○
●	●	○	○	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	●	●	●	●	●	○	●	●	○	●	●	○	●	●	●	○	●	●	○	○	●	●	●	○	●	○	○	○	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	●	●	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	●	○	○	○	●	○	●	●	●	●	○	○	●	●	●	●	●	●	○	○	●	○	●	●	○	○	○	●	●	●	●	○	○	●	●	○	○	●	○	●	○	●	●	●	●	○	●	●	●	●	●	○	●	○	○	○	●	○	○	○	○	○	○	○	●	○	○	●	○	○	○	●	●	●	●	○	●
○	●	●	○	●	●	○	●	●	○	●	●	●	●	○	●	●	●	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	●	●	○	○	●	●	○	○	●	●	●	○	●	●	○	○	○	○	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	●	●	●	●	●	○	●	●	○	●	○	○	●	○	●	○	○	○	●	○	●	●	●	○	○	●	○	●	●	●	●	●	●	○	○	○	●	●	●	○	●	●	●	●	●	○	○	○	○	●	○	○	●	●	●	●	●	●	●	○	○	○	●	○	●	●	○	○	●	●	●	●	●	○	○	●	●	●	●	○	●	●	●	○	●	○	○	●	○	○	○	●
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	○	○	●	●	●	○	○	●	○	●	●	●	●	●	●	●	○	●	○	○	●	●	●	○	○	●	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	●	●	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	○	●	●	●	○	○	●	●	●	○	○	○	○	○	○	○	●	○	○	○	●	●	●	○	○	○	●	○	○	○	●	○	○	○	●	○	○	●	○	○	○	●	○	○	○
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	●	●	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	●	○	●	○	●	●	●	●	●	○	●	○	○	●	●	●	●	●	○	○	○	●	●	●	●	●	○	●	○	●	○	●	○	●	○	●	●	●	●	●	●	○	●	○	●	○	●	○	○
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	●	○	●	○	○	○	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	●	●	○	●	○	●	●	○	●	○	●	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	●	●	●	●	●	○	●	○	○	○	○	●	●	○	○	○	●	○	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	○	○	○	●	●	○	○	○	●	○	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	●	●	○
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	○	●	○	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	●	●	○	○	●	○	●	●	○	●	○	●	○	○	●	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	●	●	○	○	○	○	●	●	○	●	●	○	●	○	●	●	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	○	●	●	○	●	○	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	○	○	●	●	○	●	○	○	○	○	○	○	○	○	○	○	●	●	○	○	○	○	●	○	○	○	○	○	○	○	○	●	○	●	●	●	●	●	○	●	●	○	●	○	○	○	○	○	●	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	○	○
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	●	●	●	●	○	●	○	○	●	●	○	○	●	●	○	○	○	○	●	○	○	○	●	○	●	●	●	●	●	●	○	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	○	○	○	○	●	○	●	○	○	●	●	●	●	●	●	●	●	●	●	●	○	○	●	●	○	○	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	●	●	○	○
○	○	●	●	●	●	●	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	●	○	●	●	○	●	○	○	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	○	●	○	○	●	●	○	○	●	○	●	○	○	●	●	○	○	●	○	○	○	●	●	●	●	●	●	○	○	●	○	○	○	○	○	○	○	○	●	○	●	●	●	●	●	●	●	●	○	●	●	●	●	●	●	●	○	●	●	●	●	○	○	●	●	●	○	●	●	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	○	●	●	●	○	●	●	●	●	●	●	●	●	●	●	○	●	○	○	○	●	●	●	○	●	○	○	●	○	○	○	○	●	●	○	●	○	○	●	○	○	○	○	○	○	○	○	●	●	○	○	●	○	○	●	●	●	●	●	●	○	○	○	●	○	●	●	●	●	●	●	○	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	●	○	○	●	●	○	●	●	●	●	●	○	○	○	●	●	●	●	●	●	○	○	●	●
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	○	●	○	○	○	○	●	○	●	●	●	○	●	○	●	○	●	●	●	○	○	○	○	●	○	○	●	○	○	●	○	●	○	○	○	●	●	●	○	○	○	○	○	●	●	○	○	●	○	○	○	○	○	○	○	●	○	○	○	●	○	○	○	○	○	○	○	○	●	●	●	●	○	●	○	●	●	○	○	○	○	○	●	●	●	○	○	○	●	●	●	○	○	●	●	●	○	○	○	○	○	○	○	○	○	●	○	●	●	●	○	○	●
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	○	○	○	●	●	●	○	●	●	●	○	●	●	●	○	○	○	○	●	○	○	●	●	○	●	○	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	●	●	●	●	●	●	●	○	●	○	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●	○	●	○	●	●	●	●	●	●	○	●	●	●	●	●	○	●	●	●	○	○	●	●	○	○	○	●	●	●	●	●	●	●	●	○	●	●	●	○	○
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	●	○	●	○	○	●	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	●	○	●	●	●	●	●	●	○	●	●	○	●	○	●	○	○	○	○	○	●	●	○	○	○	○	●	●	○	○	●	○	○	○	○	○	○	●	●	●	●	●	●	○	○	○	○	○	○	○	○	○	●	●	●	●	●	○	●	●	●	●	●	●	○	●	●	●	●	●	○	●	●	●	○	○	●	●	●	●	○	○	○	●	●	○	○	○	●	○	●	●	●	○
○	●	○	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	●	○	●	○	○	○	●	●	○	●	○	○	○	●	○	○	●	●	●	○	○	●	●	○	●	○	○	○	○	○	○	○	●	○	●	●	○	●	○	●	●	○	●	○	○	○	○	○	○	○	●	●	○	○	○	●	○	●	○	○	●	○	○	○	●	●	●	●	●	●	○	●	●	○	○	○	●	○	●	○	●	●	○	○	○	○	○	●	●	○	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	●	●	●
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	○	●	●	●	○	●	○	○	○	●	●	○	●	○	●	○	●	○	○	●	●	●	○	○	●	●	○	○	●	●	●	●	●	●	○	○	○	●	●	○	●	●	●	○	○	○	○	○	○	○	○	○	○	○	●	○	○	○	●	○	○	●	●	○	○	○	○	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	○	●	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	●	●	○	○	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●
●	○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	○	○	●	●	●	○	●	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	○	○	○	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	○	●	○	●	○	●	●	●	○	●	○	●	●	●	○	●	○	●	○	●	○	●	○	●	○	●	●	○	○	○	○	●	●	○	●	○	○	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	○	●	●	○	●	●	●	○	○	○	●	●	●	○	○	●	○	●	●	○	●
●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	○	○	○	●	●	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	●	○	●	○	○	●	○	○	●	●	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	○	●	○	●	●	○	●	●	●	○	○	○	○	○	○	●	●	○	●	●	○	○	○	○	●	●	○	●	●	●	●	●	●	●	●	●	●	○	○	○	●	●	●	●	●	○
○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	●	○	●	●	○	●	○	○	○	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	●	●	○	○	○	○	●	●	○	●	●	●	○	●	○	○	●	●	●	○	○	●	●	●	●	●	○	○	●	●	○	●	○	○	●	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○	○	○	○	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	●	○	○	○	○	●	○	○	○	●	●	●	●	●	○	○	○	○	●	●
○	○	●	●	○	○	●	●	○	●	○	○	●	○	○	●	●	●	●	○	○	○	●	●	○	●	○	○	●	○	●	●	○	●	●	○	○	●	●	○	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	○	○	●	○	●	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	○	○	●	●	●	●	●	●	●	●	●	●	●	●	○	●	●	○	●	●	○	○	○	○	○	●	●	●	●	●	○	●	●	○	○	○	○	●	●	○	●	●	○	○	○	●	●	●	●	●	○	○	○	○	○	○	○	○	●	●	●	●	●	●	●
○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	●	●	○	○	○	○	●	●	○	●	●	○	●	●	○	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	○	●	●	○	●	●	●	○	○	○	○	○	○	○	●	●	○	●	○	●	○	○	○	○	●	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	●	○	●	●	○	○	○	○	●	●	○	●	●	○	●	○	○	○	●	●	●	●	●	●	●	●	●	○	○	●	●	●	○
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	●	●	●	●	○	○	●	●	○	●	●	●	●	○	○	○	●	●	●	●	●	●	●	●	●	○	○	○	○	○	○
○	○	●	●	○	●	○	○	●	●	○	●	●	●	●	○	●	○	○	●	○	●	○	○	○	○	●	●	○	●	●	○	●	●	●	○	●	○	○	●	●	●	●	○	●	○	○	●	●	○	●	○	○	○	○	●	○	○	●	●	●	●	●	●	○	●	●	○	○	○	○	○	○	●	○	●	●	○	●	○	●	○	●	○	○	○	○	●	●	○	○	○	○	○	○	●	●	○	○	○	●	●	○	○	○	○	●	●	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	●	●	○	○	○	○	○	○	○	●	●	○	○	○	○	○	○	○	○	●	●	●	●	●	●	●	●	●	○
`

const data1 = setData(data_1)
const data2 = setData(data_2)
const data3 = setData(data_3)

// console.log(data1);
// console.log(data2);
// console.log(data3);

function setData(oldData) {
    oldData = oldData.replace(/\t/g, '')
    oldData = oldData.split('\n');
    oldData.shift()
    oldData.pop()

    let newData = []
    for (let i = 0, len1 = oldData.length; i < len1; i++) {
        if (!newData[i]) {
            newData[i] = []
        }
        for (let j = 0, len2 = oldData[i].length; j < len2; j++) {
            if (!newData[i][j]) {
                newData[i][j] = ''
            }
            if (oldData[i][j] === '●') {
                newData[i] += 'B'
            } else if (oldData[i][j] === '○') {
                newData[i] += 'W'

            } else {
                newData[i] += '-'
            }
        }
    }
    return newData;
}


let tableData_1 = []
let tableColumns_1 = []

let tableData_2 = []
let tableColumns_2 = []

let tableData_3 = []
let tableColumns_3 = []

settableData(data1, 1, table_length_1)
settableData(data2, 2, table_length_2)
settableData(data3, 3, table_length_3)




function settableData(data, index, length) {
    data.forEach((row, i) => {
        let obj = {
            id: i + 1, // ID 
            selectType: '',  // 选定
            sum_B: '', // 黑色
            sum_W: '', // 白色
            difference: '', // 差值
            total: '', // 统计
        }
        let column = []
        let tyleList = row.split('')

        for (let j = 0; j < length; j++) {
            obj[`${j + 1}`] = tyleList[j] || '-'
            obj[`del_${j + 1}`] = false
            if (i == 0) {
                column.push({ prop: `${j + 1}`, label: `${j + 1}` })
                if (obj[`${j + 1}`] != '-') {
                    obj[`num_${j + 1}`] = 1
                }

            } else {
                obj[`num_${j + 1}`] = ''
            }
        }
        switch (index) {
            case 1:
                tableData_1.push(obj)
                break;
            case 2:
                tableData_2.push(obj)
                break;
            case 3:
                tableData_3.push(obj)
                break;

        }
        if (i == 0) {
            switch (index) {
                case 1:
                    tableColumns_1 = column
                    break;
                case 2:
                    tableColumns_2 = column
                    break;
                case 3:
                    tableColumns_3 = column
                    break;
            }

        }

    })
}

