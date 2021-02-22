const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

//取得目前 Date 裡面的年份

const currentYear = new Date().getFullYear();

//設定明年 1月 1日的時間點

const newYearTime = new Date(`January 01 ${currentYear +1} 00:00:00`)

