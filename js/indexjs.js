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
$(function () {
  start();
  setInterval(start, 1000 * 60 * 10);
  function start() {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_5();
  }

  //在字符串中间添加字符
  function insertChar(str, char, position) {
    return str.substr(0, position) + char + str.substr(position);
  }
//   $.ajax({
//     url: "/JkjlBIM/GetMechanicalEquipMain",
//     type: "GET",
//     success: function (text) {},
//   });
  function echarts_1() {
    var myChart = echarts.init(document.getElementById("echart1"));
    var offices = ["12.1", "12.2", "12.3", "12.3", "12.4", "12.5", "12.6"];
    var pie_data2 = [56, 65, 73, 12, 33, 83, 17];
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
                          <div style="color:#fff;text-align: center;line-height: 36px;">${params[0].name}: <span style="color: #FFDA00;font-weight: 600;">${params[0].value}</span> 片</div>
                        </div>
                      `;
        },
      },
      grid: {
        left: "3%",
        right: "5%",
        top: "10%",
        bottom: "10%",
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
        data: offices,
      },
      yAxis: {
        type: "value",
        name: "片",
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
          name: "leftA",
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
          data: pie_data2,
        },
        {
          name: "rightA",
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
          data: pie_data2,
          barGap: 0,
        },
        {
          name: "topA",
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
          data: pie_data2,
          z: 3,
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // })
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    var myChart = echarts.init(document.getElementById("echart2"));
    var floor = [
      "11.11~11.17",
      "11.18~11.24",
      "11.25~12.1",
      "12.2~12.8",
      "12.9~12.15",
    ];
    var bar_data = [150, 230, 180, 110, 100];

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
                              <div style="color:#fff;text-align: center;line-height: 36px;">${params[0].name}:</br> <span style="color: #FFDA00;font-weight: 600;">${params[0].value}</span> 块</div>
                            </div>`;
        },
      },
      grid: {
        left: "3%",
        right: "5%",
        top: "10%",
        bottom: "10%",
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
  //标段三
  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart5"));
    option = {
      title: {
        text: "标段",
        textStyle: {
          fontSize: "0.3rem",
          color: "#fff",
          fontFamily: "Microsoft Yahei",
          fontWeight: "600",
        },
        x: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
        formatter: function (params) {
          return params[0].name + ": " + params[0].value;
        },
      },
      xAxis: {
        data: [
          "标段一",
          "标段二",
          "标段三",
          "标段四",
          "标段五",
          "标段六",
          "标段七",
          "标段八",
        ],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      color: ["#89DA4F", "#FCC828", "#8EC7F4", "#CDCBEC", "#14B961"],
      series: [
        {
          name: "hill",
          type: "pictorialBar",
          barCategoryGap: "50%",
          symbol: "path://M0,10 L10,10 L5,0 L0,10 z",
          // symbol: 'path://path://M10 600 Q 95 0 180 600',
          label: {
            normal: {
              show: true,
              position: "top",
              formatter: "{c}",
            },
          },
          itemStyle: {
            normal: {
              opacity: 0.5,
              color: function (params) {
                var colorList = [
                  "#89DA4F",
                  "#FCC828",
                  "#8EC7F4",
                  "#ADCAED",
                  "#14B961",
                  "#E3E3E3",
                  "#3CC",
                  "#33C",
                ];
                return colorList[params.dataIndex];
              },
            },
            emphasis: {
              opacity: 1,
            },
          },
          data: [123, 60, 125, 80, 12, 30, 90, 38],
        },
      ],
    };
    option = {
      backgroundColor: '#035254',
      // color:'#ff8000',
      title: {
          text: '折线图堆叠'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['邮件营销', '视频广告', '直接访问']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
              symbolSize: [12, 12],
              lineStyle: {
                  color: "#78abff"
              }
          }
      },
      yAxis: {
          type: 'value',
          axisLine: {
              symbolSize: [12, 12],
              lineStyle: {
                  color: "#78abff"
              }
          }
      },
      series: [
          {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              symbol: 'circle',//折线点设置为实心点
              symbolSize: 12,   //折线点的大小
              smooth: true,
              data: [120, 132, 101, 134, 90, 230, 210],
              itemStyle: {
                  color: '#5cfbff',
                  shadowColor: '#5cfbff',
                  shadowBlur: 20,
              },
              lineStyle: {
                  shadowColor: "#5cfbff",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  opacity: 1,
                  shadowBlur: 8,
                  type: "solid",
                  width: 4
              },
          },
          {
              name: '视频广告',
              type: 'line',
              smooth: true,
              stack: '总量',
              symbol: 'circle',//折线点设置为实心点
              symbolSize: 12,   //折线点的大小
              data: [150, 232, 201, 154, 190, 330, 410],
              itemStyle: {
                  color: '#ecf390',
                  shadowColor: '#ecf390',
                  shadowBlur: 9.5,
              },
              lineStyle: {
                  shadowColor: "#ecf390",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  opacity: 1,
                  shadowBlur: 8,
                  type: "solid",
                  width: 4,
              },
          },
          {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              smooth: true,
              symbol: 'circle',//折线点设置为实心点
              symbolSize: 12,   //折线点的大小
              data: [320, 332, 301, 334, 390, 330, 320],
              itemStyle: {
                  color: '#bbffce',
                  shadowColor: '#9bfeff',
                  shadowBlur: 9.5,
              },
              lineStyle: {
                  width: 4,
                  shadowColor: "#bbffce",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  opacity: 1,
                  shadowBlur: 8,
                  type: "solid"
              },
          },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  //标段二
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart3"));
    var project = ["标段一", "标段二", "标段三"];
    var week_time = ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"];
    var line_data1 = [
      [42, 36, 87, 65, 35, 78, 32],
      [35, 67, 39, 20, 55, 32, 84],
      [65, 32, 28, 19, 40, 11, 29],
    ];
    option = {
      title: {
        text: "当前进度",
        left: "center",
        top: "55%",
        textStyle: {
          color: "rgba(14,185,151,0.5)",
          fontSize: 16,
        },
        // bottom:'0'
      },
      //饼图中间显示文字
      graphic: {
        type: "text",
        left: "center",
        top: "30%",
        style: {
          text: "30%", //文字内容
          // 	fill: "red",//文字颜色
          fontSize: 30, //文字字号
          fontWeight: "800",
          fill: "aqua",
        },
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          //第一张圆环
          type: "pie",
          radius: ["80%", "100%"],
          center: ["50%", "50%"],
          // 隐藏指示线
          labelLine: { show: false },
          //隐藏圆环上文字
          label: {
            show: false,
          },
          data: [
            //value当前进度 + 颜色
            {
              value: 30,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#07A0B3" },
                    { offset: 1, color: "rgba(14,185,151,0)" },
                  ]),
                },
              },
            },
            {
              value: 100 - 30,
              itemStyle: {
                normal: { color: "rgba(22,58,87,0.3)" },
              },
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    // }
    // );
  }
});
let TopList = {
  word:'512片',
  word1:'701片',
  word1Num:'(4个块体)',
  word2:'342片',
  BLData:{
    name:'13#节段',
    state:'生产中',
    NUM:'15',
    NUM1:'45',
  },
  BRData:[
    {name:'生产中：第16层片体',progress:'75%',},
    {name:'生产中：第17层片体',progress:'50%',},
    {name:'生产中：第18层片体',progress:'100%',},
  ]
};
let Tophtml = ``;
Tophtml = `<span>${TopList.word}</span>`;
$("#top_word").html(Tophtml);
let Tophtml1 = ``;
Tophtml1 = `<span>${TopList.word1}</span><span style="font-size: 20px">${TopList.word1Num}</span>`;
$("#top_word1").html(Tophtml1);
let Tophtml2 = ``;
Tophtml2 = `<span>${TopList.word2}</span>`;
$("#top_word2").html(Tophtml2);
let Chtml = ``;
Chtml = `<div class="BLeft">${TopList.BLData.name}</div>
              <div class="BRight">
                <div class="RTop">${TopList.BLData.state}</div>
                <div class="RBottom">当前状态</div>
              </div>`;
$("#BLData").html(Chtml);
let CRtml = ``;
CRtml = `<div class="CRight_top">
                  <div class="CRT">
                    <div class="CRtop"></div>
                    <div>完工数量</div>
                  </div>
                  <div class="CRNum">${TopList.BLData.NUM}</div>
                </div>
                <div class="CRight_top">
                  <div class="CRT">
                    <div class="CRtop1"></div>
                    <div>计划数量</div>
                  </div>
                  <div class="CRNum1">${TopList.BLData.NUM1}</div>
              </div>`;
$("#CRData").html(CRtml);
let BRhtml = ``;
for(let i=0;i<TopList.BRData.length;i++){
  BRhtml += `<div class="BRTOP">
                <div class="BRTOP_left">${TopList.BRData[i].name}
                   <span style="font-size: 12px; color: #ccc;margin-left: 15%;">当前进度</span>
                </div>
                <div class="progress-container">
                  <div class="progress-bar" style="width: ${TopList.BRData[i].progress};"></div>
                </div>
                <div class="progress-num">${TopList.BRData[i].progress}</div>
              </div>`;
}
$("#BRData").html(BRhtml);

