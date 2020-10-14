function printTime() {
  const clock = document.getElementById("clock");            // 출력할 장소 선택
  const now = new Date();                                                  // 현재시간
  const nowTime = now.getFullYear() + "년 " + (now.getMonth()+1) + "월 " + now.getDate() + "일 " + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초";
  clock.innerHTML = nowTime;           // 현재시간을 출력
  // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}

window.onload = function() {                         // 페이지가 로딩되면 실행
  setInterval(printTime,500);
}

const start = document.getElementById('submit');
let nowTime: any;
let nowExp1: any;
let nowExp2: any;


start.addEventListener('click', function (event) {
  const exp1: any = document.getElementById('exp1');
  const exp2: any = document.getElementById('exp2');
  if (nowExp1 !== undefined && nowExp2 !== undefined) {
    const result = document.getElementById('result');
    const resultExp1 = document.getElementById('resultExp');
    // @ts-ignore
    const getNow = moment();
    const diff = getNow.diff(nowTime, 'second');
    let exp = nowExp1 * 100 + nowExp2;
    let inputExp = Number(exp1.value) * 100 + Number(exp2.value);
    let resultExp = inputExp - exp;

    let diffTime = 3600 / diff;

    let reExp = resultExp * diffTime;

    let cExp1 = Number(String(reExp / 100).split('.')[0]);
    let cExp2 = reExp % 100;

    // console.log(diff, diffTime, resultExp, reExp, cExp1, cExp2);
    result.innerHTML = cExp1 + ' / ' + cExp2.toFixed(2) + '%';

    resultExp1.innerHTML =
      Number(String(resultExp / 100).split('.')[0])
      + ' / ' + (resultExp % 100).toFixed(2) + '% | '
      + Math.floor(diff / 3600) + '시간 '
      + Math.floor(diff / 60 % 60) + '분 '
      + Math.floor(diff % 60) + '초';

  } else {
    nowExp1 = Number(exp1.value);
    nowExp2 = Number(exp2.value);
    // @ts-ignore
    nowTime = moment();
    start.innerHTML = '입력';
    exp1.value = '';
    exp2.value = '';
    const start1 = document.getElementById('start');
    start1.innerHTML = nowExp1 + ' / ' + nowExp2 + '%';
    const start2 = document.getElementById('startTime');
    // @ts-ignore
    start2.innerHTML = moment().format('YYYY년 MM월 DD일 HH:mm:ss');
  }
})




