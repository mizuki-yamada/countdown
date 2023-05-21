"use strict";

{
  const timer = document.getElementById("timer");
  const btn = document.getElementById("btn");
  let endTime;
  let intervalId;

  const check = () => {
    //残り時間＝終了時刻-現在時刻
    let countdown = endTime - new Date().getTime();

    //③タイマーの終了
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 3 * 1000;
      btn.disabled = false;
    }

    const totalSeconds = Math.floor(countdown / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    //常に二桁表示
    const minutesFormatted = String(minutes).padStart(2, "0");
    const secondsFormatted = String(seconds).padStart(2, "0");

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  };
  //①終了時刻を求める
  btn.addEventListener("click", () => {
    endTime = new Date().getTime() + 3 * 1000;

    btn.disabled = true;

    //②残り時間を求める
    intervalId = setInterval(check, 100);
  });
}
