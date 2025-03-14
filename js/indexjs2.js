$(window).load(function () {
  $(".loading").fadeOut();
});

/****/
/****/
$(document).ready(function () {
  var whei = $(window).width();
  $("html").css({ fontSize: whei / 20 });
  $(window).resize(function () {
    var whei = $(window).width();
    $("html").css({ fontSize: whei / 20 });
  });
});

var colorList = [
  "#0074c2",
  "#00b59d",
  "#00be2b",
  "#abd300",
  "#f4e000",
  "#ffab00",
  "#ff7100",
  "#f00c00",
  "#c90061",
  "#c900c7",
  "#C6E579",
  "#F4E001",
  "#F0805A",
  "#26C0C0",
];

//var pie_data12 = [127, 69, 88];
//var SS2=A1.join()+','+A2.JOIN();
//VAR A12=[1,2,3];
// $(function () {
//   start();
//   setInterval(start, 1000 * 60 * 10);
//   // function start() {
//   //   echarts_1();
//   // }

//   //在字符串中间添加字符
//   function insertChar(str, char, position) {
//     return str.substr(0, position) + char + str.substr(position);
//   }
//   //   $.ajax({
//   //     url: "/JkjlBIM/GetMechanicalEquipMain",
//   //     type: "GET",
//   //     success: function (text) {},
//   //   });
// });
var TDJson = {
  Pencent: { pencent: "1", PT_NUM: "2", PT_NUM1: "1", Num: "4", },
  average: { pencent: "3", PT_NUM: "1.5", PT_NUM1: "1.5",  },
  status: { start: "10", startNUM: "356",  },
  add_up: { pencent: "1", PT_NUM: "2", PT_NUM1: "1", },
  offices: ["12.1", "12.2", "12.3", "12.3", "12.4", "12.5", "12.6"],
  pie_data2: [5, 6, 3, 1, 3, 8, 1],
  Num: "5台",
  Num1: "13台",
  Num2: "2台",
};
let BPJson = {
  Pencent: { pencent: "10", PT_NUM: "2.00", PT_NUM1: "9.00" },
  BPList: [
    {
      name: "16层片体",
      state: "12",
      rate: "80%",
    },
    {
      name: "13层片体",
      state: "15",
      rate: "30%",
    },
    {
      name: "12层片体",
      state: "11",
      rate: "0%",
    },
    {
      name: "11层片体",
      state: "7",
      rate: "100%",
    },
    {
      name: "10层片体",
      state: "7",
      rate: "90%",
    },
    {
      name: "7层片体",
      state: "7",
      rate: "50%",
    },
  ],
};
let WookList = [
  {
    name: "2车间盘式-弯曲中心",
    state: "关机",
    dpcapacity: "/",
    apoutput: "/",
    rate: "0%",
  },
  {
    name: "3车间-剪切线-3号线",
    state: "开机",
    dpcapacity: "100",
    apoutput: "200",
    rate: "50%",
  },
  {
    name: "2车间盘式-弯曲中心",
    state: "关机",
    dpcapacity: "/",
    apoutput: "/",
    rate: "0%",
  },
  {
    name: "3车间-剪切线-3号线",
    state: "开机",
    dpcapacity: "100",
    apoutput: "200",
    rate: "50%",
  },
  {
    name: "2车间盘式-弯曲中心",
    state: "关机",
    dpcapacity: "/",
    apoutput: "/",
    rate: "0%",
  },
  {
    name: "3车间-剪切线-3号线",
    state: "开机",
    dpcapacity: "100",
    apoutput: "200",
    rate: "50%",
  },
];

// let Devicehtml = ``;
// Devicehtml = `<span style="color:#71edfd">${TDJson.Num}</span>`;
// $("#DeviceNum").html(Devicehtml);
// let Devicehtml1 = ``;
// Devicehtml1 = `<span style="color:#71edfd">${TDJson.Num1}</span>`;
// $("#DeviceNum1").html(Devicehtml1);
// let Devicehtml2 = ``;
// Devicehtml2 = `<span style="color:#71edfd">${TDJson.Num2}</span>`;
// $("#DeviceNum2").html(Devicehtml2);
let PBhtml = ``;
PBhtml = ` <div class="PT_left">
                <span>加工中：</span>
                <span class="pencent_img">${BPJson.Pencent.pencent}</span>
                <span>个料单，</span>
              </div>
              <div class="PT_left">
                <div class="PT_word"><span class="PT_NUM">${BPJson.Pencent.PT_NUM}</span>吨</div>
                <div class="PT_word"><span class="PT_NUM">${BPJson.Pencent.PT_NUM1}</span>吨</div>
              </div>`;
$("#pencent_top").html(PBhtml);
let html = ``;
html += `<div class="listhead headsize">
                <span>料单</span>
                <span>重量（kg）</span>
                <span>进度</span>
              </div>
              <div class="listnav">
                <ul>
                  <div id="taskinfo" style="overflow: hidden; height: 250px">`;
for (let i = 0; i < BPJson.BPList.length; i++) {
  html += `<li>
                        <span>${BPJson.BPList[i].name}</span>
                        <span>${BPJson.BPList[i].state}</span>
                        <span style="display: flex; align-items: center;font-size: 14px;">
                          <div class="progress-container">
                            <div class="progress-bar" style="width: ${BPJson.BPList[i].rate};"></div>
                          </div>
                          <div class="progress-num">${BPJson.BPList[i].rate}</div>
                        </span> 
                      </li>`;
}
html += ` </div>
                </ul>
              </div>`;
$("#BPencent").html(html);
// 自动滚动
const container = document.getElementById("taskinfo");
function autoScroll() {
  container.scrollTop += 1; // 每次滚动1px
  if (
    container.scrollHeight - container.clientHeight - container.scrollTop <=
    2
  ) {
    container.scrollTop = 0; // 当滚动到底部时，重置滚动位置到顶部
  }
}
// 每隔50毫秒执行一次自动滚动
this.scrollTimer = setInterval(autoScroll, 100);
// container.addEventListener("mouseenter", () => {
//   container.style.overflowY = "hidden";
// });
// // 当鼠标移出时，启用滚动
// scrollableDiv.addEventListener("mouseleave", () => {
//   scrollableDiv.style.overflowY = "scroll";
// });
//

wook();
function wook() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("titile");
    event.currentTarget.classList.add("titile");
  }
  let html = ``;
  html += `<div class="listhead headsize">
                <span>设备名称</span>
                <span>状态</span>
                <span>今日产量</span>
                <span>今日产能</span>
                <span>设备运转率</span>
              </div>
              <div class="listnav">
                <ul>
                  <div id="taskinfo1" style="overflow: hidden; height: 170px">`;
  for (let i = 0; i < WookList.length; i++) {
    html += ` <li>
                      <span title="${WookList[i].name}">${WookList[i].name}</span>
                      <span>${WookList[i].state}</span>
                      <span>${WookList[i].dpcapacity}</span>
                      <span>${WookList[i].apoutput}</span>
                      <span>${WookList[i].rate}</span>
                    </li>`;
  }
  html += ` </div>
                </ul>
              </div>`;
  $("#LBcontent").html(html);
  const container1 = document.getElementById("taskinfo1");
  function autoScroll() {
    container1.scrollTop += 1;
    if (
      container1.scrollHeight -
        container1.clientHeight -
        container1.scrollTop <=
      2
    ) {
      container1.scrollTop = 0;
    }
  }
  this.scrollTimer = setInterval(autoScroll, 100);
}
function pencent() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("titile");
    event.currentTarget.classList.add("titile");
  }
  let html = ``;
  html += `<div class="listhead headsize">
                <span>设备名称</span>
                <span>状态</span>
                <span>今日产量</span>
                <span>今日产能</span>
                <span>设备运转率</span>
              </div>
              <div class="listnav">
                <ul>
                  <div id="taskinfo1" style="overflow: hidden; height: 170px">`;
  for (let i = 0; i < WookList.length; i++) {
    html += ` <li>
                      <span title="${WookList[i].name}">${WookList[i].name}</span>
                      <span>${WookList[i].state}</span>
                      <span>${WookList[i].dpcapacity}</span>
                      <span>${WookList[i].apoutput}</span>
                      <span>${WookList[i].rate}</span>
                    </li>`;
  }
  html += ` </div>
                </ul>
              </div>`;
  $("#LBcontent").html(html);
  const container1 = document.getElementById("taskinfo1");
  function autoScroll() {
    container1.scrollTop += 1;
    if (
      container1.scrollHeight -
        container1.clientHeight -
        container1.scrollTop <=
      2
    ) {
      container1.scrollTop = 0;
    }
  }
  this.scrollTimer = setInterval(autoScroll, 100);
}
WeekNum();
function WeekNum() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("PNum");
    event.currentTarget.classList.add("PNum");
  }
  echarts_2();
}
function TodayNum() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("PNum");
    event.currentTarget.classList.add("PNum");
  }
  echarts_3();
}

LBDate();
function LBWeek() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("Title");
    event.currentTarget.classList.add("Title");
  }
  echarts_1();
}
function LBDate() {
  if (event && event.currentTarget.classList) {
    $(".LB_wook").removeClass("Title");
    event.currentTarget.classList.add("Title");
  }
  // echarts_4();

  // let TDhtml = ``;
  // let TDhtml1 = ``;
  // let TDhtml2 = ``;
  // TDhtml = `<span style="color:#71edfd">${TDJson.Pencent.pencent}</span>吨`;
  // TDhtml1 = `<span style="color:#71edfd">${TDJson.Pencent.PT_NUM}</span>吨`;
  // TDhtml2 = `<span style="color:#71edfd">${TDJson.Pencent.PT_NUM1}</span>吨`;
  // $("#pro_bg").html(TDhtml);
  // $("#pro_bg1").html(TDhtml1);
  // $("#pro_bg2").html(TDhtml2);

  // html += ` <div class="PJW">
  //               <div class="product">
  //                 <div class="pro_img">
  //                   <div><img src="./images/finish.svg" alt="" /></div>
  //                   <div style="margin-left: 10%">车丝成品</div>
  //                 </div>
  //                 <div class="pro_bg" id="pro_bg"><span style="color:#71edfd">${TDJson.Pencent.pencent}</span>吨</div>
  //               </div>
  //               <div class="product">
  //                 <div class="pro_img">
  //                   <div><img src="./images/cut.svg" alt="" /></div>
  //                   <div style="margin-left: 10%">剪切成品</div>
  //                 </div>
  //                 <div class="pro_bg" id="pro_bg1"><span style="color:#71edfd">${TDJson.Pencent.PT_NUM}</span>吨</div>
  //               </div>
  //               <div class="product">
  //                 <div class="pro_img">
  //                   <div><img src="./images/bend.svg" alt="" /></div>
  //                   <div style="margin-left: 10%">弯曲成品</div>
  //                 </div>
  //                 <div class="pro_bg" id="pro_bg2"><span style="color:#71edfd">${TDJson.Pencent.PT_NUM1}</span>吨</div>
  //               </div>
  //             </div>`;

  let html = ``;

  html = ` <div class="words">今日生产块体数量</div>
  <div class="words">
  <div class="words_left">
    <span>顶板：</span>
    <span>${TDJson.Pencent.pencent}块</span>
  </div>
   <div class="words_left">
    <span>腹板：</span>
    <span>${TDJson.Pencent.PT_NUM}块</span>
  </div>
  <div class="words_right">
    <span>底板：</span>
    <span>${TDJson.Pencent.PT_NUM1}块</span>
  </div>
</div>
<div class="words">
  <div class="words_left">
    <span>累计完成：</span>
    <span>${TDJson.Pencent.Num}个钢筋块体</span>
  </div>
</div>
<div class="words">生产平均工效</div>
  <div class="words">
  <div class="words_left">
    <span>顶板：</span>
    <span>${TDJson.average.pencent}小时/块</span>
  </div>
   <div class="words_left">
    <span>腹板：</span>
    <span>${TDJson.average.PT_NUM}小时/块</span>
  </div>
  <div class="words_right">
    <span>底板：</span>
    <span>${TDJson.average.PT_NUM1}小时/块</span>
  </div>
</div>
<div class="words">设备工作状态</div>
  <div class="words">
  <div class="words_left">
    <span>当日开机时长：</span>
    <span>${TDJson.status.start}小时</span>
  </div>
   <div class="words_right">
    <span>累计工作时长：</span>
    <span>${TDJson.status.startNUM}小时</span>
   </div>
  </div>
  <div class="words">累计完成</div>
  <div class="words">
  <div class="words_left">
    <span>腹板块体：</span>
    <span>${TDJson.add_up.PT_NUM} 个 </span>
  </div>
  <div class="words_left">
    <span>底板块体：</span>
    <span>${TDJson.add_up.PT_NUM1} 个 </span>
  </div>
  <div class="words_right">
    <span>顶板块体：</span>
    <span>${TDJson.add_up.PT_NUM1} 个 </span>
  </div>
</div>`;
  $("#echart1").html(html);
}
function echarts_1() {
  let chartDom = document.getElementById("echart1");
  let myChart = echarts.getInstanceByDom(chartDom);
  if (myChart == null) {
    myChart = echarts.init(chartDom);
  } else {
    myChart.dispose();
    myChart = echarts.init(chartDom);
  }

  var myChart1 = echarts.init(document.getElementById("echart1"));
  myChart1.clear();
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      padding: [0, 0, 0, 0],
      backgroundColor: "transparent",
      borderWidth: 0,
      formatter: function (params) {
        return `
                      <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAkCAYAAABhc6+LAAAAAXNSR0IArs4c6QAAAV5JREFUaEPtmzFKxFAURd+L4ApcgmBtYwRBsHD2INOK2rgAV+AabMR9WJixm0qcbmY6bW1VEP6/kmiCURfw7uSmTHXePdzMnw/PdyfLMZD3TU/YBNyLey+r+RVgh+7+EJZ0wGAAtt3tthFl5hsfyJcDziPs6OteXJjhRaLCKvoCk6jgglo8iZIokgRIMNUoiSJJgARTjZIokgRIMNUoiSJJgASz3yjYKMNnNXsCblDgmWSOlcfsRO1UiyMH9r4nPk2Gs2T2uPIJkAzYifrJW1aLt4R8LlFxLPZElXdzTA+2XKLiCPpz11e/kKh4giQqrpN/yfTpIxGmwwSlKMCb36rJ8lWnvlgGf//hPWnxkuFYx/M4snqiYLYJFNfNzUTKT1jDexzUYZPoUpbEv0RJFEkCJJhqlESRJECCqUZJFEkCJJhqlESRJECCqUYxitIiW1xr3SKbVkPjSmrJ6tXQTzXOX4QA5P8zAAAAAElFTkSuQmCC);
                      background-repeat: no-repeat; 
                      width: 106px; 
                      height: 36px; 
                      background-size: 100% 100%;">
                        <div style="color:#fff;text-align: center;line-height: 36px;">${params[0].name}: <span style="color: #FFDA00;font-weight: 600;">${params[0].value}</span> T</div>
                      </div>
                    `;
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "20%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          width: 2,
          color: "rgba(255,255,255,.6)",
        },
      },
      axisTick: {
        show: false,
      },
      data: TDJson.offices,
    },
    yAxis: {
      type: "value",
      name: "产量/T",
      // min: 0,
      nameTextStyle: {
        padding: [0, 35, 0, 0],
        color: "#fff",
      },
      splitNumber: 4,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#999",
          type: "dashed",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#999",
          type: "dashed",
        },
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        color: "#fff",
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 14,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            x2: 0,
            y: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#07A0B3" },
              { offset: 1, color: "rgba(14,185,151,0)" },
            ],
          },
        },
        data: TDJson.pie_data2,
      },
      {
        name: "",
        tooltip: {
          show: false,
        },
        type: "bar",
        barWidth: 14,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              x2: 0,
              y: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#09DAF3" },
                { offset: 1, color: "rgba(13,8,16,0)" },
              ],
            },
          },
        },
        data: TDJson.pie_data2,
        barGap: 0,
      },
      {
        name: "",
        type: "pictorialBar",
        itemStyle: {
          normal: {
            color: "#00f9d1",
          },
        },
        symbol: "diamond",
        symbolRotate: 0,
        symbolSize: ["28", "7"],
        symbolOffset: ["0", "-4"],
        symbolPosition: "end",
        data: TDJson.pie_data2,
        z: 3,
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option);
  // })
  window.addEventListener("resize", function () {
    myChart1.resize();
  });
}
function echarts_2() {
  var myChart = echarts.init(document.getElementById("echart2"));
  myChart.clear();
  var floor = ["12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16"];
  var bar_data = [
    [1, 2, 8, 10, 10, 7, 11],
    [3, 1, 3, 3, 6, 7, 5],
    [6, 6, 3, 4, 4, 4, 11],
    [8, 1, 5, 6, 7, 1, 4],
    [7, 4, 2, 6, 9, 8, 2],
  ];

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      padding: [0, 0, 0, 0],
      backgroundColor: "rgb(83 163 243 / 50%)",
      borderWidth: 0,
      formatter: function (params) {
        var res = ``;
        params.forEach(function (item) {
          res += `${item.seriesName} : ${item.value} <br/>`;
        });
        return res;
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "25%",
      containLabel: true,
    },
    legend: {
      x: "center",
      y: "0",
      icon: "circle",
      itemGap: 8,
      textStyle: { color: "rgba(255,255,255,.5)" },
      itemWidth: 10,
      itemHeight: 10,
    },
    xAxis: {
      type: "category",
      data: floor,
      axisLine: { show: false },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    yAxis: {
      type: "value",
      splitNumber: 4,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    series: [
      {
        name: "剪切线",
        type: "bar",
        barWidth: "10%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0465c6c2",
              },
              {
                offset: 1,
                color: "#1144bbf0",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data[0],
      },
      {
        name: "盘式线",
        type: "bar",
        barWidth: "10%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#f5dc33",
              },
              {
                offset: 1,
                color: "#b4b508f0",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data[1],
      },
      {
        name: "立式弯曲",
        type: "bar",
        barWidth: "10%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#3604c6",
              },
              {
                offset: 1,
                color: "#190369f0",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data[2],
      },
      {
        name: "切边",
        type: "bar",
        barWidth: "10%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#c63904",
              },
              {
                offset: 1,
                color: "#692403f0",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data[3],
      },
      {
        name: "盘式弯曲",
        type: "bar",
        barWidth: "10%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#8bd46e",
              },
              {
                offset: 1,
                color: "#03b48e",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data[4],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echarts_3() {
  var myChart = echarts.init(document.getElementById("echart2"));
  myChart.clear();
  var floor = ["盘式弯曲", "剪切线", "切边", "立式弯曲", "盘式线"];
  var bar_data = [15, 20, 18, 2, 10];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      padding: [0, 0, 0, 0],
      backgroundColor: "transparent",
      borderWidth: 0,
      formatter: function (params) {
        return `
                          <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAkCAYAAABhc6+LAAAAAXNSR0IArs4c6QAAAV5JREFUaEPtmzFKxFAURd+L4ApcgmBtYwRBsHD2INOK2rgAV+AabMR9WJixm0qcbmY6bW1VEP6/kmiCURfw7uSmTHXePdzMnw/PdyfLMZD3TU/YBNyLey+r+RVgh+7+EJZ0wGAAtt3tthFl5hsfyJcDziPs6OteXJjhRaLCKvoCk6jgglo8iZIokgRIMNUoiSJJgARTjZIokgRIMNUoiSJJgASz3yjYKMNnNXsCblDgmWSOlcfsRO1UiyMH9r4nPk2Gs2T2uPIJkAzYifrJW1aLt4R8LlFxLPZElXdzTA+2XKLiCPpz11e/kKh4giQqrpN/yfTpIxGmwwSlKMCb36rJ8lWnvlgGf//hPWnxkuFYx/M4snqiYLYJFNfNzUTKT1jDexzUYZPoUpbEv0RJFEkCJJhqlESRJECCqUZJFEkCJJhqlESRJECCqUYxitIiW1xr3SKbVkPjSmrJ6tXQTzXOX4QA5P8zAAAAAElFTkSuQmCC);
                          background-repeat: no-repeat;
                          width: 100px;
                          height: 70px;
                          background-size: 100% 100%;">
                            <div style="color:#fff;text-align: center;line-height: 36px;">${params[0].name}:</br> <span style="color: #FFDA00;font-weight: 600;">${params[0].value}</span> T</div>
                          </div>`;
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "25%",
      containLabel: true,
    },
    legend: {
      x: "center",
      y: "0",
      icon: "circle",
      itemGap: 8,
      textStyle: { color: "rgba(255,255,255,.5)" },
      itemWidth: 10,
      itemHeight: 10,
    },
    xAxis: {
      type: "category",
      data: floor,
      axisLine: { show: false },

      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    yAxis: {
      type: "value",
      splitNumber: 4,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    series: [
      {
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#8bd46e",
              },
              {
                offset: 1,
                color: "#03b48e",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echarts_4() {
  var myChart = echarts.init(document.getElementById("echart1"));
  myChart.clear();
  var floor = ["盘式弯曲", "剪切线", "切边", "立式弯曲", "盘式线"];
  var bar_data = [15, 20, 18, 2, 10];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      padding: [0, 0, 0, 0],
      backgroundColor: "transparent",
      borderWidth: 0,
      formatter: function (params) {
        return `
                          <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAkCAYAAABhc6+LAAAAAXNSR0IArs4c6QAAAV5JREFUaEPtmzFKxFAURd+L4ApcgmBtYwRBsHD2INOK2rgAV+AabMR9WJixm0qcbmY6bW1VEP6/kmiCURfw7uSmTHXePdzMnw/PdyfLMZD3TU/YBNyLey+r+RVgh+7+EJZ0wGAAtt3tthFl5hsfyJcDziPs6OteXJjhRaLCKvoCk6jgglo8iZIokgRIMNUoiSJJgARTjZIokgRIMNUoiSJJgASz3yjYKMNnNXsCblDgmWSOlcfsRO1UiyMH9r4nPk2Gs2T2uPIJkAzYifrJW1aLt4R8LlFxLPZElXdzTA+2XKLiCPpz11e/kKh4giQqrpN/yfTpIxGmwwSlKMCb36rJ8lWnvlgGf//hPWnxkuFYx/M4snqiYLYJFNfNzUTKT1jDexzUYZPoUpbEv0RJFEkCJJhqlESRJECCqUZJFEkCJJhqlESRJECCqUYxitIiW1xr3SKbVkPjSmrJ6tXQTzXOX4QA5P8zAAAAAElFTkSuQmCC);
                          background-repeat: no-repeat;
                          width: 100px;
                          height: 70px;
                          background-size: 100% 100%;">
                            <div style="color:#fff;text-align: center;line-height: 36px;">${params[0].name}:</br> <span style="color: #FFDA00;font-weight: 600;">${params[0].value}</span> T</div>
                          </div>`;
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "25%",
      containLabel: true,
    },
    legend: {
      x: "center",
      y: "0",
      icon: "circle",
      itemGap: 8,
      textStyle: { color: "rgba(255,255,255,.5)" },
      itemWidth: 10,
      itemHeight: 10,
    },
    xAxis: {
      type: "category",
      data: floor,
      axisLine: { show: false },

      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    yAxis: {
      type: "value",
      splitNumber: 4,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
      },
    },
    series: [
      {
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#8bd46e",
              },
              {
                offset: 1,
                color: "#03b48e",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: bar_data,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
