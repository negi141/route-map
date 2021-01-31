window.onload = function() {

let canvasWidth = 1000;
let canvasHeight = 1000;
document.getElementById('canvas').width = canvasWidth;
document.getElementById('canvas').height = canvasHeight;

class Station{
  constructor(id, name, latitude, longitude){
    this.id = id;
    this.name = name;
    this.lat = latitude;
    this.lng = longitude;
  }
}

class Line{
  constructor(name, mark, color){
    this.name = name;
    this.mark = mark;
    this.color = color;
    this.stations = [];
  }
  addStation(station){
    this.stations.push(station);
  }
}
const maru = new Line('丸の内線', 'M', [255,0,0]);

const maru_stations = [
  {"id":"01","sta":"荻窪駅","url":"http://www.tokyometro.jp/rosen/eki/ogikubo/index.html","addr":"東京都杉並区荻窪5-31-7","lat":35.704631,"lng":139.619982},
  {"id":"02","sta":"南阿佐ケ谷駅","url":"http://www.tokyometro.jp/rosen/eki/minami-asagaya/index.html","addr":"東京都杉並区阿佐谷南1-15-7","lat":35.699634,"lng":139.635761},
  {"id":"03","sta":"新高円寺駅","url":"http://www.tokyometro.jp/rosen/eki/shin-koenji/index.html","addr":"東京都杉並区高円寺南2-20-1","lat":35.697817,"lng":139.648169},
  {"id":"04","sta":"東高円寺駅","url":"http://www.tokyometro.jp/rosen/eki/higashi-koenji/index.html","addr":"東京都杉並区和田3-55-42","lat":35.697804,"lng":139.657828},
  {"id":"05","sta":"新中野駅","url":"http://www.tokyometro.jp/rosen/eki/shin-nakano/index.html","addr":"東京都中野区中央4-2-15","lat":35.697491,"lng":139.669034},
  {"id":"06","sta":"中野坂上駅","url":"http://www.tokyometro.jp/rosen/eki/nakano-sakaue/index.html","addr":"東京都中野区中央2-1-2","lat":35.697922,"lng":139.682909},
  {"id":"07","sta":"西新宿駅","url":"http://www.tokyometro.jp/rosen/eki/nishi-shinjuku/index.html","addr":"東京都新宿区西新宿6-7-51","lat":35.694302,"lng":139.692782},
  {"id":"08","sta":"新宿駅","url":"http://www.tokyometro.jp/rosen/eki/shinjuku/index.html","addr":"東京都新宿区西新宿1丁目","lat":35.690923,"lng":139.700249},
  {"id":"09","sta":"新宿三丁目駅","url":"http://www.tokyometro.jp/rosen/eki/shinjuku-sanchome/index.html","addr":"東京都新宿区新宿3-14-1","lat":35.690618,"lng":139.706268},
  {"id":"10","sta":"新宿御苑前駅","url":"http://www.tokyometro.jp/rosen/eki/shinjuku-gyoemmae/index.html","addr":"東京都新宿区新宿1-8-1","lat":35.688585,"lng":139.710694},
  {"id":"11","sta":"四谷三丁目駅","url":"http://www.tokyometro.jp/rosen/eki/yotsuya-sanchome/index.html","addr":"東京都新宿区四谷3-8","lat":35.687956,"lng":139.720106},
  {"id":"12","sta":"四ツ谷駅","url":"http://www.tokyometro.jp/rosen/eki/yotsuya/index.html","addr":"東京都新宿区四谷1-3","lat":35.686013,"lng":139.730668},
  {"id":"13","sta":"赤坂見附駅","url":"http://www.tokyometro.jp/rosen/eki/akasaka-mitsuke/index.html","addr":"東京都港区赤坂3-1-6","lat":35.677026,"lng":139.737044},
  {"id":"14","sta":"国会議事堂前駅","url":"http://www.tokyometro.jp/rosen/eki/kokkai-gijidomae/index.html","addr":"東京都千代田区永田町1-7-1","lat":35.673938,"lng":139.745217},
  {"id":"15","sta":"霞ケ関駅","url":"http://www.tokyometro.jp/rosen/eki/kasumigaseki/index.html","addr":"東京都千代田区霞が関2-1-2","lat":35.673831,"lng":139.750906},
  {"id":"16","sta":"銀座駅","url":"http://www.tokyometro.jp/rosen/eki/ginza/index.html","addr":"東京都中央区銀座4-1-2","lat":35.67199,"lng":139.763965},
  {"id":"17","sta":"東京駅","url":"http://www.tokyometro.jp/rosen/eki/tokyo/index.html","addr":"東京都千代田区丸ノ内1-6-5","lat":35.681102,"lng":139.767087},
  {"id":"18","sta":"大手町駅","url":"http://www.tokyometro.jp/rosen/eki/otemachi/index.html","addr":"東京都千代田区大手町1-6-1","lat":35.684806,"lng":139.766087},
  {"id":"19","sta":"淡路町駅","url":"http://www.tokyometro.jp/rosen/eki/awajicho/index.html","addr":"東京都千代田区神田淡路町1-2","lat":35.69543,"lng":139.767576},
  {"id":"20","sta":"御茶ノ水駅","url":"http://www.tokyometro.jp/rosen/eki/ochanomizu/index.html","addr":"東京都文京区湯島1-5-8","lat":35.699856,"lng":139.763786},
  {"id":"21","sta":"本郷三丁目駅","url":"http://www.tokyometro.jp/rosen/eki/hongo-sanchome/index.html","addr":"東京都文京区本郷2-39-1","lat":35.706671,"lng":139.759915},
  {"id":"22","sta":"後楽園駅","url":"http://www.tokyometro.jp/rosen/eki/korakuen/index.html","addr":"東京都文京区春日1-2-3","lat":35.707338,"lng":139.751203},
  {"id":"23","sta":"茗荷谷駅","url":"http://www.tokyometro.jp/rosen/eki/myogadani/index.html","addr":"東京都文京区小日向4-6-15","lat":35.717302,"lng":139.736736},
  {"id":"24","sta":"新大塚駅","url":"http://www.tokyometro.jp/rosen/eki/shin-otsuka/index.html","addr":"東京都文京区大塚4-51-5","lat":35.725694,"lng":139.729968},
  {"id":"25","sta":"池袋駅","url":"http://www.tokyometro.jp/rosen/eki/ikebukuro/index.html","addr":"東京都豊島区西池袋3-28-14","lat":35.72893,"lng":139.710386}
];

maru_stations.forEach(function(sta){
  const s = new Station(sta.id, sta.sta, sta.lat, sta.lng);
  maru.addStation(s);
});

var ctx = document.getElementById('canvas').getContext('2d');

maru.stations.forEach(function(sta){
  const lat = canvasWidth/2 - (sta.lat-35.69)*6000;
  const lng = canvasHeight/2 + (sta.lng-139.71)*6000;
  //console.log(sta.id, lat, lng);

  ctx.beginPath();
  ctx.arc(lng, lat, 12, 0, Math.PI * 2, true);
  ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
  ctx.fill();
  ctx.strokeStyle = "rgba(" + maru.color[0] + "," + maru.color[1] + "," + maru.color[2] + ", 1.0)";
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
  ctx.font = "bold 10px serif";
  let text = ctx.measureText(maru.mark);
  ctx.fillText(maru.mark, lng - text.width/2, lat - 2);

  ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
  ctx.font = "bold 12px serif";
  text = ctx.measureText(sta.id);
  ctx.fillText(sta.id, lng - text.width/2, lat + 8);

});
  
}