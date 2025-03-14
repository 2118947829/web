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
let TopList = {
  TLdata:{
    name:'YS-75-3-高测腹板',
    length:'30m',
    Glth:'12mm',
    Tlth:'30mm',
    TNum:'12根',
    Blth:'24mm',
    BNum:'16根',
  },
  BLData:{
    name:'YS-75-3-底板箍筋块体',
    state:'双层纵筋布料',
  },
  TRData:{name:'299层',pencent:'168根',progress:'30%',},
  BRData:{
    SV:'380V',
    SA:'100A',
    ZV:'12V',
    ZA:'12KA',
  }
};
let TopLhtml = ``;
TopLhtml = `<div class="words">
              <div class="words_left">
                <span>块体名称：</span>
                <span>${TopList.TLdata.name}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>块体长度：</span>
                <span>${TopList.TLdata.length}</span>
              </div>
              <div class="words_right">
                <span>箍筋：</span>
                <span>${TopList.TLdata.Glth}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>上层纵筋：</span>
                <span>${TopList.TLdata.Tlth}</span>
              </div>
              <div class="words_right">
                <span>数量：</span>
                <span>${TopList.TLdata.TNum}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>下层纵筋：</span>
                <span>${TopList.TLdata.Blth}</span>
              </div>
              <div class="words_right">
                <span>数量：</span>
                <span>${TopList.TLdata.BNum}</span>
              </div>
            </div>`;
$("#TLData").html(TopLhtml);
let BLhtml = ``;
BLhtml = `<div class="words">
              <div class="words_left">
                <span>生产中：</span>
                <span>${TopList.BLData.name}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>当前工序：</span>
                <span>${TopList.BLData.state}</span>
              </div>
            </div>`;
$("#BLData").html(BLhtml);
let TRhtml = ``;
TRhtml = `<div class="words">
              <div class="words_left">
                <span>箍筋总层数：</span>
                <span>${TopList.TRData.name}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>箍筋已完成：</span>
                <span>${TopList.TRData.pencent}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>块体制作进度：</span>
                <span>${TopList.TRData.progress}</span>
              </div>
            </div>`;
$("#TRData").html(TRhtml);
let BRhtml = ``;
BRhtml = `<div class="words">
              <div class="words_left">
                <span>闪光焊电压：</span>
                <span>${TopList.BRData.SV}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>闪光焊电流：</span>
                <span>${TopList.BRData.SA}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>电阻焊电压：</span>
                <span>${TopList.BRData.ZV}</span>
              </div>
            </div>
            <div class="words">
              <div class="words_left">
                <span>电阻焊电压：</span>
                <span>${TopList.BRData.ZA}</span>
              </div>
            </div>`;
$("#BRData").html(BRhtml);
