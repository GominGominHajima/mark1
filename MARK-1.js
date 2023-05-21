// window.addEventListener('resize', function() {
//     var adElement = document.getElementById('ad');
//     var windowWidth = window.innerWidth;

//     if (windowWidth <= 2000) {
//         adElement.style.display = 'none'; // 창 크기가 800px 이하인 경우 광고를 숨김
//     } else {
//         adElement.style.display = 'block'; // 창 크기가 800px 초과인 경우 광고를 보여줌
//     }
// });


function showHideAd() {
    var adElement = document.getElementById('ad');
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1900) {
        adElement.style.display = 'none'; // 창 크기가 800px 이하인 경우 광고를 숨김         
    } else {
        adElement.style.display = 'block'; // 창 크기가 800px 초과인 경우 광고를 보여줌
    }
}

window.addEventListener('resize', showHideAd);
window.addEventListener('fullscreenchange', showHideAd);
