
const music = new Audio('audio/1.mp3');
// music.play();

// scrol = document.getElementsByClassName('pop_song');

const songs = [{
        id: '1',
        songName: `Vula Mlomo <br><div class="subtitle">Musa Keys</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `Selema<br><div class="subtitle">Musa Keys</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Ama Numba Ay'10<br><div class="subtitle">Cassper Nyovest</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Defenders of House<br><div class="subtitle"> Oscar Mbo</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: `Abalele<br><div class="subtitle">Kabza De Small</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `Kwenzekile <br><div class="subtitle">Blxckie ft. Madumane</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: `Vinquet<br><div class="subtitle">Kaygee The Vibe</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Numba<br><div class="subtitle">Sir Trill</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Manca <br><div class="subtitle">Felo Le Tee</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Wenza Kanjane<br><div class="subtitle">Mellow and Sleezy</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Kancane<br><div class="subtitle">Konke X Musa Keys</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: `Salary <br><div class="subtitle">Robot Boi</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: `The Fuxckin Injury<br><div class="subtitle">Mellow and Sleezy</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: `Mama<br><div class="subtitle">Aymos</div>`,
        poster: "img/15.jpg",
    },
    {
        id: "16",
        songName: `Sofa Silahlane<br><div class="subtitle">Master KG</div>`,
        poster: "img/16.jpg",
    },
    {
        id: "17",
        songName: `uGogo<br><div class="subtitle">Rasoe Kaos</div>`,
        poster: "img/17.jpg",
    },
    {
        id: "18",
        songName: `iMali<br><div class="subtitle">Nobule</div>`,
        poster: "img/18.jpg",
    },
    {
        id: "19",
        songName: `Sete<br><div class="subtitle">K.O</div>`,
        poster: "img/19.jpg",
    },
    {
        id: "20",
        songName: `KOA II<br><div class="subtitle">Kabza de Small</div>`,
        poster: "img/20.jpg",
    },
    {
        id: "21",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/21.jpg",
    },
    {
        id: "22",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/22.jpg",
    },
    {
        id: "23",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/23.jpg",
    },
    {
        id: "24",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/24.jpg",
    },
    {
        id: "25",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/25.jpg",
    },
    {
        id: "26",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/26.jpg",
    },
    {
        id: "27",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/27.jpg",
    },
    {
        id: "28",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/28.jpg",
    },
    {
        id: "29",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/29.jpg",
    },
    {
        id: "30",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/30.jpg",
    },
    {
        id: "31",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/31.jpg",
    },
    {
        id: "32",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/32.jpg",
    },
    {
        id: "33",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/33.jpg",
    },
    {
        id: "34",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/34.jpg",
    },
    {
        id: "35",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/35.jpg",
    },
    {
        id: "36",
        songName: `Bizaza<br><div class="subtitle">Mr JazziQ</div>`,
        poster: "img/36.jpg",
    }
]
function change1() {
    alert('wokring')
}

let index = 0;
// music.play();
let poster_master_play = document.getElementById('poster_master_play');
// let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // e.target.classList.remove('bi-play-circle-fill')
        // e.target.classList.add('bi-pause-circle-fill')
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // download_music.href =  `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            // download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(2, 32, 39, .7)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
    });
})

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let navSearchDropDown = document.getElementById('navSearchDropDown');

// dropdown.style.display = ('none') 



let desktopBanner_hold = document.getElementsByClassName('desktopBanner_hold');
let desktopbanner_top = document.getElementById('desktopbanner_top');
let desktopbanner_bottom = document.getElementById('desktopbanner_bottom');
let dtIMG_1 = document.getElementById('dtIMG_1')
let imgSrc = document.getElementById('imgSrc')


function desktopbanner_change(){  
    desktopbanner_top.style.background = ('linear-gradient(90deg, #010915 0%, #FFFFFF 48.96%, rgba(1, 10, 17, 0.42) 100%, #010A11 100%),linear-gradient(0deg, #010A11, #010A11)')
    desktopbanner_bottom.style.background = ('linear-gradient(90deg, #010915 0%, #FFFFFF 48.96%, rgba(1, 10, 17, 0.42) 100%, #010A11 100%),linear-gradient(0deg, #010A11, #010A11)')
    // dtIMG_1.style.transition = ('.3s linear')
    dtIMG_1.style.transform = ('scale(1.3)')
    // imgSrc.style.width = ('380px') 
    // alert('working')
    
}

let bannerTitle = document.getElementById('bannerTitle')
let bannerArtist = document.getElementById('bannerArtist')



function desktopBannerClick(){
    desktopbanner_top.style.background = ('linear-gradient(90deg, rgba(1, 9, 21, 0.65) 0%, #C8133E 48.96%, rgba(1, 10, 17, 0.65) 100%), #010A11')
    desktopbanner_bottom.style.background = ('linear-gradient(90deg, rgba(1, 9, 21, 0.65) 0%, #C8133E 48.96%, rgba(1, 10, 17, 0.65) 100%), #010A11')
    dtIMG_1.style.width = ('380px')
    dtIMG_1.style.height = ('380px')
    imgSrc.style.width = ('380px')
    bannerTitle.style.color = ('#ffffff')
    bannerArtist.style.color = ('#ffffff')
}

function desktopbanner_default(){
    if (desktopbanner_bottom.style.background == ('linear-gradient(90deg, rgba(1, 9, 21, 0.65) 0%, #C8133E 48.96%, rgba(1, 10, 17, 0.65) 100%), #010A11')){
        alert('working')
    } else {
    desktopbanner_top.style.background = ('#ffffff')
    desktopbanner_bottom.style.background = ('#ffffff')
    bannerTitle.style.color = ('#022027')
    bannerArtist.style.color = ('#022027')
    dtIMG_1.style.transform = ('scale(1)')
    }
}

let dropdown = document.getElementById('dropdown');
let btnDropDown = document.getElementById('btnDropDown');

const isHidden = () => toggleBox.classList.contains("dropdown--hidden");

// dropdown.addEventListener("transitionend", function () {
//     if (isHidden()) {
//         dropdown.style.display = "none";
//     }
//   });

// btnDropDown.addEventListener('transitionend', () =>{
//     if (isHidden()) {
//         dropdown.style.removeProperty("display");
//         setTimeout(() => dropdown.classList.remove("dropdown--hidden"), 0);
//         }
//         else {
//             dropdown.classList.add("dropdown--hidden");
//         }
//     })


btnDropDown.addEventListener('click', () =>{
if (dropdown.style.display == ('none')){
    dropdown.style.display = ('block');
    searchWrap.style.display = ('block');
    btnDropDown.classList = ('bi bi-caret-up-fill')
    dtIMG_1.style.transform = ('scale(1)')
    searchWrapBi2.style.color = ('rgba(200, 19, 62, 1)')

} else {
    dropdown.style.display = ('none')
    searchWrap.style.display = ('none')
    btnDropDown.classList = ('bi bi-caret-down-fill')
    searchWrapBi2.style.color = ('rgba(255, 255, 255, 1)')
}})



// let searchWrap = document.getElementById('searchWrap')
// let searchWrapBi2 = document.getElementById('navSearchDropDown')

// searchWrapBi2.addEventListener('click', () =>{
//     if (searchWrap.style.display == ('none')){
//         searchWrap.style.display = ('block');
//         dropdown.style.display = ('block');
//         btnDropDown.classList = ('bi bi-caret-up-fill')
//         searchWrapBi2.style.color = ('rgba(200, 19, 62, 1)')
//     } else {
//         searchWrap.style.display = ('none')
//         dropdown.style.display = ('none')
//         btnDropDown.classList = ('bi bi-caret-down-fill')
//         searchWrapBi2.style.color = ('rgba(255, 255, 255, 1)')
//     }
// })

// alert('working')

// search data start 
let search_results = document.getElementsByClassName('search_results')[0];

function previewPlay (){
    // alert('Working')
    music.play()
}

function previewPause (){
    // alert('Working')
    music.pause()
}



let previewWrap = document.getElementById('previewWrap')
let soundwave = document.getElementById('songwave')
songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
                            <div class="previewWrap" id="previewWrap" onmouseover="previewPlay()" onmouseout="previewPause()">
                                <span class="stroke"></span>
                            </div>
    `;
    search_results.appendChild(card);
});



let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})
// search data end


// input.addEventListener('input', () =>{
//     if (searchWrap.style.display == ('none')){
//         // alert('working')
//         searchWrap.style.display = ('block');
//         navSearch.style.color = ('#C8133E')
//     } else { 
//         if (input){
//         searchWrap.style.display = ('none')
//         navSearch.style.color = ('#fff')
//         }
//     }
// })

// document.addEventListener('keyup'), (e) => {
//     if (e.keyCode = 32){
//         // music.play()
//         alert('working')
//     } else {
//         music.pause()
//     }
// }

// $(window).keypress(function(e) {
//     if (e.keyCode == 0) {
//       if (music.paused == true)
//               music.play();
//           else
//               music.pause();
//     }
//   });
 


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// WAVE LISTENING //
music.onplay = (event) => {
    wave.classList.add('active2');
}
music.onpause = (event) => {
    wave.classList.remove('active2');
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .1)';
    })
}

// /////


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});











// Top 10 left & right scroll 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 979;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 979;
});

// Latest drops left & right scroll 
let pop_latest_left = document.getElementById('latest_song_left');
let pop_latest_right = document.getElementById('latest_song_right');
let pop_latest = document.getElementsByClassName('pop_latest')[0];

pop_latest_right.addEventListener('click', () => {
    pop_latest.scrollLeft += 330;
});
pop_latest_left.addEventListener('click', () => {
    pop_latest.scrollLeft -= 330;
});

////////////////////////// FEATURED ARTIST SCROLL ////////////////////////// 
let featured_artist_left = document.getElementById('featured_artist_left');
let featured_artist_right = document.getElementById('featured_artist_right');
let pop_featured = document.getElementsByClassName('pop_featured')[0];

featured_artist_right.addEventListener('click', () => {
    pop_featured.scrollLeft += 330;
});
featured_artist_left.addEventListener('click', () => {
    pop_featured.scrollLeft -= 330;
});

////////////////////////// COMING UP SCROLL //////////////////////////
let coming_up_left = document.getElementById('coming_up_left');
let coming_up_right = document.getElementById('coming_up_right');
let pop_coming_up = document.getElementsByClassName('pop_coming_up')[0];

coming_up_right.addEventListener('click', () => {
    pop_coming_up.scrollLeft += 330;
});
coming_up_left.addEventListener('click', () => {
    pop_coming_up.scrollLeft -= 330;
});



////////////////////////// CHANGE nav COLOUR ////////////////////////// 
                              // ????? //
    
let nav_container = document.getElementById("nav_container")

function changeNav_bg_playing(){
    nav_container.style.backgroundColor = ('none')
    nav_container.style.backgroundImage = ('linear-gradient(180deg, #022027 0%, rgba(217, 217, 217, 0) 50.21%)')
    nav_container.style.borderBottom = ('0.2px solid #c2c2c22e')
    // navHold.style.backdrop = ('blur(0px)')
    }
function changeNav_bg_paused(){
    nav_container.style.backgroundColor = ("rgba(0, 0, 0, 0.8)")
    nav_container.style.backgroundImage = ('none')
    nav_container.style.borderBottom = ('0.2px solid #c2c2c22e')
    }

music.onplay = (changeNav_bg_playing)
music.onpause = (changeNav_bg_paused)
// music.play();



/////////////////////// POP ART SCROLL ////////////////////////
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});



let shuffle = document.getElementsByClassName('shuffle')[0];


shuffle.addEventListener('mouseover', ()=>{
    let a = shuffle.innerHTML;
    alert('working')
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
       case "repeat": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case "random": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}



music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})

