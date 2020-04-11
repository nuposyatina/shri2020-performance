"use strict";
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');



let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;

});

selectOptions.forEach(o => {
    o.addEventListener('click', function(e) {
        document.querySelector('#' + e.target.dataset.group).checked = true;

        selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
        e.target.classList.toggle('filter__select-item_checked', true);
        popup.classList.toggle('filter__select-popup_open', false);
        selectButtonText.innerText = e.target.innerText;
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        const purchaseListContainer = document.createElement('div');
        const purchaseListTitle = document.createElement('p');
        const purchaseList = document.createElement('ol');
        const purchaseListItemOne = document.createElement('li');
        const purchaseListItemTwo = document.createElement('li');

        purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        purchaseListTitle.textContent = 'Список покупок:';
        purchaseList.setAttribute('class', 'purchase-list');
        purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        purchaseListItemOne.textContent = 'Хлеб';
        purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        purchaseListItemTwo.textContent = 'Молоко';

        purchaseListContainer.appendChild(purchaseListTitle);
        purchaseListContainer.appendChild(purchaseList);
        purchaseList.appendChild(purchaseListItemOne);
        purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = () => {
            fridgeInfoContainer.replaceWith(purchaseListContainer)
            buttonsContainer.style.display = "none";
        }
    }, 500)
   

    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
}, !1);
var initVideoObs = function () {
    var t = 100, n = 100;

    function e(e, t) {
        if (Hls.isSupported()) {
            var n = new Hls;
            n.loadSource(t), n.attachMedia(e), n.on(Hls.Events.MANIFEST_PARSED, function () {
                e.play()
            })
        } else e.canPlayType("application/vnd.apple.mpegurl") && (e.src = t, e.addEventListener("loadedmetadata", function () {
            e.play()
        }))
    }

    e(document.getElementById("video-1"), "http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8"), e(document.getElementById("video-2"), "http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8"), e(document.getElementById("video-3"), "http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8"), e(document.getElementById("video-4"), "http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8");
    for (var r = function (e, t, n) {
        null == t && (t = e.getBoundingClientRect().left), null == n && (n = e.getBoundingClientRect().top), e.style.top = -n + "px", e.style.left = -t + "px"
    }, o = function (e) {
        var t = e.target, n = document.querySelector(".video-controls"), o = t.parentNode.querySelector(".analyser");
        t.classList.contains("video_active") ? (n.classList.remove("video-controls_active"), o.classList.remove("analyser_active"), t.style.width = "100%", t.style.height = "300px", r(t, 0, 0), setTimeout(function () {
            t.classList.remove("video_active"), document.querySelector("html").style.overflow = "scroll"
        }, 500)) : ("" == t.style.filter ? c(100, 100) : c(/brightness\(([^)]+)%\)/.exec(t.style.filter)[1], /contrast\(([^)]+)%\)/.exec(t.style.filter)[1]), document.querySelector("html").style.overflow = "hidden", n.classList.add("video-controls_active"), t.classList.add("video_active"), o.classList.add("analyser_active"), t.style.width = window.innerWidth + "px", t.style.height = window.innerHeight + "px", r(t))
    }, i = function (e) {
        document.querySelector(".video_active").style.filter = "brightness(" + t + "%) contrast(" + n + "%)"
    }, c = function (e, t) {
        document.querySelector(".video-control_brightness").value = e, document.querySelector(".video-control_contrast").value = t
    }, a = function (e) {
        t = e.target.value, i()
    }, l = function (e) {
        n = e.target.value, i()
    }, s = function (e) {
        var t = e.target;
        t.classList.contains("video-control_brightness") && document.addEventListener("pointermove", a), t.classList.contains("video-control_contrast") && document.addEventListener("pointermove", l)
    }, d = function (e) {
        var t = document.getElementById(e.target.dataset.video);
        t.muted = !t.muted, e.target.classList.toggle("video-volume_unmuted")
    }, u = function (n) {
        var e = new (window.AudioContext || window.webkitAudioContext), t = e.createMediaElementSource(n),
            o = e.createAnalyser();
        o.smoothingTimeConstant = .1, o.fftSize = 32;
        var r = new Uint8Array(o.frequencyBinCount);
        setInterval(function () {
            o.getByteFrequencyData(r);
            for (var e = 0, t = 0; t < r.length; t++) r[t] > e && (e = r[t]);
            n.parentNode.querySelector(".analyser").style.height = e + "px"
        }, 100), t.connect(o), o.connect(e.destination)
    }, m = document.getElementsByClassName("video"), p = 0; p < m.length; p++) m[p].addEventListener("pointerdown", o), u(m[p]);
    for (var v = document.getElementsByClassName("video-control"), h = 0; h < v.length; h++) v[h].addEventListener("pointerdown", s);
    for (var y = document.getElementsByClassName("video-volume"), g = 0; g < y.length; g++) y[g].addEventListener("pointerdown", d);
    document.addEventListener("pointerup", function (e) {
        document.removeEventListener("pointermove", a), document.removeEventListener("pointermove", l)
    })
};