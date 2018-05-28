<template>
  <scroll-view class="movie-page" scroll-y="true">
    <swiper class="slider" indicator-dots="true" autoplay="true" circular="true">
      <swiper-item class="slider-item" v-for="item in sliders" :key="item">
        <img src="../../../static/img/slider.jpg" alt="">
      </swiper-item>
    </swiper>
    <border-line></border-line>
    <movie-list :listTitle="in_theaters_title" :movies="in_theaters_movies"></movie-list>
    <border-line></border-line>
    <movie-list :listTitle="in_theaters_title" :movies="in_theaters_movies"></movie-list>
    <border-line></border-line>
    <movie-list :listTitle="in_theaters_title" :movies="in_theaters_movies"></movie-list>
  </scroll-view>
</template>

<script type="text/ecmascript-6">
  //  import { request } from '../../api/request'
  import MovieList from '../../components/movie-list.vue'
  import BorderLine from '../../components/border-line.vue'
  import { filterMovies } from '../../utils/index'

  export default{
    data(){
      return {
        sliders: ['', '', ''],
        in_theaters_title: '正在上映的电影-北京',
        in_theaters_movies: [
          {
            "rating": {
              "max": 10,
              "average": 7.3,
              "details": {
                "1": 268.0,
                "2": 1411.0,
                "3": 9783.0,
                "4": 11951.0,
                "5": 3369.0
              },
              "stars": "40",
              "min": 0
            },
            "genres": [
              "喜剧",
              "奇幻"
            ],
            "title": "超时空同居",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg"
                },
                "name_en": "Jiayin Lei",
                "name": "雷佳音",
                "alt": "https://movie.douban.com/celebrity/1312940/",
                "id": "1312940"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg"
                },
                "name_en": "Liya Tong",
                "name": "佟丽娅",
                "alt": "https://movie.douban.com/celebrity/1275756/",
                "id": "1275756"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg"
                },
                "name_en": "Yi Zhang",
                "name": "张衣",
                "alt": "https://movie.douban.com/celebrity/1325751/",
                "id": "1325751"
              }
            ],
            "durations": [
              "101分钟"
            ],
            "collect_count": 67839,
            "mainland_pubdate": "2018-05-18",
            "has_video": false,
            "original_title": "超时空同居",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg"
                },
                "name_en": "Lun Su",
                "name": "苏伦",
                "alt": "https://movie.douban.com/celebrity/1331887/",
                "id": "1331887"
              }
            ],
            "pubdates": [
              "2018-05-18(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",
              "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",
              "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg"
            },
            "alt": "https://movie.douban.com/subject/27133303/",
            "id": "27133303"
          },
          {
            "rating": {
              "max": 10,
              "average": 8.4,
              "details": {
                "1": 876.0,
                "2": 2389.0,
                "3": 19271.0,
                "4": 49296.0,
                "5": 49366.0
              },
              "stars": "45",
              "min": 0
            },
            "genres": [
              "动作",
              "科幻",
              "奇幻"
            ],
            "title": "复仇者联盟3：无限战争",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg"
                },
                "name_en": "Robert Downey Jr.",
                "name": "小罗伯特·唐尼",
                "alt": "https://movie.douban.com/celebrity/1016681/",
                "id": "1016681"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg"
                },
                "name_en": "Chris Hemsworth",
                "name": "克里斯·海姆斯沃斯",
                "alt": "https://movie.douban.com/celebrity/1021959/",
                "id": "1021959"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg"
                },
                "name_en": "Chris Evans",
                "name": "克里斯·埃文斯",
                "alt": "https://movie.douban.com/celebrity/1017885/",
                "id": "1017885"
              }
            ],
            "durations": [
              "150分钟"
            ],
            "collect_count": 302015,
            "mainland_pubdate": "2018-05-11",
            "has_video": false,
            "original_title": "Avengers: Infinity War",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg"
                },
                "name_en": "Anthony Russo",
                "name": "安东尼·罗素",
                "alt": "https://movie.douban.com/celebrity/1321812/",
                "id": "1321812"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg"
                },
                "name_en": "Joe Russo",
                "name": "乔·罗素",
                "alt": "https://movie.douban.com/celebrity/1320870/",
                "id": "1320870"
              }
            ],
            "pubdates": [
              "2018-04-23(加州首映)",
              "2018-04-27(美国)",
              "2018-05-11(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg"
            },
            "alt": "https://movie.douban.com/subject/24773958/",
            "id": "24773958"
          },
          {
            "rating": {
              "max": 10,
              "average": 7.0,
              "details": {
                "1": 98.0,
                "2": 488.0,
                "3": 2103.0,
                "4": 1983.0,
                "5": 687.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "动作",
              "科幻",
              "冒险"
            ],
            "title": "游侠索罗：星球大战外传",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg"
                },
                "name_en": "Alden Ehrenreich",
                "name": "阿尔登·埃伦瑞奇",
                "alt": "https://movie.douban.com/celebrity/1040705/",
                "id": "1040705"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg"
                },
                "name_en": "Emilia Clarke",
                "name": "艾米莉亚·克拉克",
                "alt": "https://movie.douban.com/celebrity/1314668/",
                "id": "1314668"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg"
                },
                "name_en": "Woody Harrelson",
                "name": "伍迪·哈里森",
                "alt": "https://movie.douban.com/celebrity/1053560/",
                "id": "1053560"
              }
            ],
            "durations": [
              "135分钟"
            ],
            "collect_count": 10709,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "Solo: A Star Wars Story",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg"
                },
                "name_en": "Ron Howard",
                "name": "朗·霍华德",
                "alt": "https://movie.douban.com/celebrity/1031844/",
                "id": "1031844"
              }
            ],
            "pubdates": [
              "2018-05-10(洛杉矶首映)",
              "2018-05-25(美国)",
              "2018-05-25(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg"
            },
            "alt": "https://movie.douban.com/subject/25900947/",
            "id": "25900947"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.5,
              "details": {
                "1": 1416.0,
                "2": 6048.0,
                "3": 20930.0,
                "4": 13117.0,
                "5": 3042.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "惊悚",
              "恐怖"
            ],
            "title": "寂静之地",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg"
                },
                "name_en": "Emily Blunt",
                "name": "艾米莉·布朗特",
                "alt": "https://movie.douban.com/celebrity/1041022/",
                "id": "1041022"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg"
                },
                "name_en": "John Krasinski",
                "name": "约翰·卡拉辛斯基",
                "alt": "https://movie.douban.com/celebrity/1027146/",
                "id": "1027146"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg"
                },
                "name_en": "Millicent Simmonds",
                "name": "米利森特·西蒙兹",
                "alt": "https://movie.douban.com/celebrity/1374192/",
                "id": "1374192"
              }
            ],
            "durations": [
              "90分钟",
              "91分钟(中国大陆)"
            ],
            "collect_count": 92040,
            "mainland_pubdate": "2018-05-18",
            "has_video": false,
            "original_title": "A Quiet Place",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg"
                },
                "name_en": "John Krasinski",
                "name": "约翰·卡拉辛斯基",
                "alt": "https://movie.douban.com/celebrity/1027146/",
                "id": "1027146"
              }
            ],
            "pubdates": [
              "2018-03-09(西南偏南电影节)",
              "2018-04-06(美国)",
              "2018-05-18(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg"
            },
            "alt": "https://movie.douban.com/subject/26997663/",
            "id": "26997663"
          },
          {
            "rating": {
              "max": 10,
              "average": 8.6,
              "details": {
                "1": 174.0,
                "2": 699.0,
                "3": 9826.0,
                "4": 41639.0,
                "5": 39933.0
              },
              "stars": "45",
              "min": 0
            },
            "genres": [
              "剧情",
              "喜剧"
            ],
            "title": "完美陌生人",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.jpg"
                },
                "name_en": "Marco Giallini",
                "name": "马可·贾利尼",
                "alt": "https://movie.douban.com/celebrity/1094143/",
                "id": "1094143"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.jpg"
                },
                "name_en": "Kasia Smutniak",
                "name": "卡夏·斯穆特尼亚克",
                "alt": "https://movie.douban.com/celebrity/1022632/",
                "id": "1022632"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.jpg"
                },
                "name_en": "Edoardo Leo",
                "name": "爱德华多·莱奥",
                "alt": "https://movie.douban.com/celebrity/1045775/",
                "id": "1045775"
              }
            ],
            "durations": [
              "97分钟",
              "96分钟(中国大陆)"
            ],
            "collect_count": 197125,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "Perfetti sconosciuti",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.jpg"
                },
                "name_en": "Paolo Genovese",
                "name": "保罗·格诺维塞",
                "alt": "https://movie.douban.com/celebrity/1023888/",
                "id": "1023888"
              }
            ],
            "pubdates": [
              "2016-02-11(意大利)",
              "2018-05-25(中国大陆)"
            ],
            "year": "2016",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.jpg"
            },
            "alt": "https://movie.douban.com/subject/26614893/",
            "id": "26614893"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.8,
              "details": {
                "1": 17.0,
                "2": 79.0,
                "3": 273.0,
                "4": 247.0,
                "5": 74.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "剧情",
              "喜剧",
              "犯罪"
            ],
            "title": "命运速递",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.jpg"
                },
                "name_en": "Bingrui Zhao",
                "name": "赵炳锐",
                "alt": "https://movie.douban.com/celebrity/1326947/",
                "id": "1326947"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.jpg"
                },
                "name_en": "Xiaolin Lü",
                "name": "吕晓霖",
                "alt": "https://movie.douban.com/celebrity/1321008/",
                "id": "1321008"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.jpg"
                },
                "name_en": "Ailei Yu",
                "name": "余皑磊",
                "alt": "https://movie.douban.com/celebrity/1313809/",
                "id": "1313809"
              }
            ],
            "durations": [
              "90分钟",
              "93分钟(中国大陆)"
            ],
            "collect_count": 1522,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "命运速递",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.jpg"
                },
                "name_en": "Fei Li",
                "name": "李非",
                "alt": "https://movie.douban.com/celebrity/1327361/",
                "id": "1327361"
              }
            ],
            "pubdates": [
              "2015-07-30(FIRST青年电影展)",
              "2018-05-25(中国大陆)"
            ],
            "year": "2015",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.jpg"
            },
            "alt": "https://movie.douban.com/subject/25918677/",
            "id": "25918677"
          },
          {
            "rating": {
              "max": 10,
              "average": 5.8,
              "details": {
                "1": 4749.0,
                "2": 8642.0,
                "3": 17749.0,
                "4": 8300.0,
                "5": 2943.0
              },
              "stars": "30",
              "min": 0
            },
            "genres": [
              "剧情",
              "爱情"
            ],
            "title": "后来的我们",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg"
                },
                "name_en": "Boran Jing",
                "name": "井柏然",
                "alt": "https://movie.douban.com/celebrity/1274628/",
                "id": "1274628"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg"
                },
                "name_en": "Dongyu Zhou",
                "name": "周冬雨",
                "alt": "https://movie.douban.com/celebrity/1274224/",
                "id": "1274224"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg"
                },
                "name_en": "Zhuangzhuang Tian",
                "name": "田壮壮",
                "alt": "https://movie.douban.com/celebrity/1274287/",
                "id": "1274287"
              }
            ],
            "durations": [
              "120分钟"
            ],
            "collect_count": 130981,
            "mainland_pubdate": "2018-04-28",
            "has_video": false,
            "original_title": "后来的我们",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg"
                },
                "name_en": "René Liu",
                "name": "刘若英",
                "alt": "https://movie.douban.com/celebrity/1041007/",
                "id": "1041007"
              }
            ],
            "pubdates": [
              "2018-04-28(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg",
              "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg",
              "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg"
            },
            "alt": "https://movie.douban.com/subject/26683723/",
            "id": "26683723"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.4,
              "details": {
                "1": 303.0,
                "2": 1721.0,
                "3": 5345.0,
                "4": 2781.0,
                "5": 821.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "剧情",
              "爱情"
            ],
            "title": "昼颜",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg"
                },
                "name_en": "Aya Ueto",
                "name": "上户彩",
                "alt": "https://movie.douban.com/celebrity/1050105/",
                "id": "1050105"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg"
                },
                "name_en": "Takumi Saitô",
                "name": "斋藤工",
                "alt": "https://movie.douban.com/celebrity/1025531/",
                "id": "1025531"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg"
                },
                "name_en": "Ayumi Ito",
                "name": "伊藤步",
                "alt": "https://movie.douban.com/celebrity/1000823/",
                "id": "1000823"
              }
            ],
            "durations": [
              "125分钟"
            ],
            "collect_count": 24057,
            "mainland_pubdate": "2018-05-18",
            "has_video": false,
            "original_title": "昼顔",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg"
                },
                "name_en": "Hiroshi Nishitani",
                "name": "西谷弘",
                "alt": "https://movie.douban.com/celebrity/1316253/",
                "id": "1316253"
              }
            ],
            "pubdates": [
              "2017-06-10(日本)",
              "2018-05-18(中国大陆)"
            ],
            "year": "2017",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg"
            },
            "alt": "https://movie.douban.com/subject/26877106/",
            "id": "26877106"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.7,
              "details": {
                "1": 45.0,
                "2": 244.0,
                "3": 789.0,
                "4": 614.0,
                "5": 183.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "剧情"
            ],
            "title": "路过未来",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg"
                },
                "name_en": "Zishan Yang",
                "name": "杨子姗",
                "alt": "https://movie.douban.com/celebrity/1312862/",
                "id": "1312862"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg"
                },
                "name_en": "Fang Yin",
                "name": "尹昉",
                "alt": "https://movie.douban.com/celebrity/1340310/",
                "id": "1340310"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg"
                },
                "name_en": "Qinqin Li",
                "name": "李勤勤",
                "alt": "https://movie.douban.com/celebrity/1274639/",
                "id": "1274639"
              }
            ],
            "durations": [
              "129分钟(北影节版)",
              "127分钟"
            ],
            "collect_count": 4296,
            "mainland_pubdate": "2018-05-17",
            "has_video": false,
            "original_title": "路过未来",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg"
                },
                "name_en": "Ruijun Li",
                "name": "李睿珺",
                "alt": "https://movie.douban.com/celebrity/1275599/",
                "id": "1275599"
              }
            ],
            "pubdates": [
              "2017-05-20(戛纳电影节)",
              "2018-05-17(中国大陆)"
            ],
            "year": "2017",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg"
            },
            "alt": "https://movie.douban.com/subject/26909423/",
            "id": "26909423"
          },
          {
            "rating": {
              "max": 10,
              "average": 7.1,
              "details": {
                "1": 7.0,
                "2": 52.0,
                "3": 268.0,
                "4": 269.0,
                "5": 78.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "剧情",
              "家庭"
            ],
            "title": "西小河的夏天",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.jpg"
                },
                "name_en": "Songwen Zhang",
                "name": "张颂文",
                "alt": "https://movie.douban.com/celebrity/1314329/",
                "id": "1314329"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.jpg"
                },
                "name_en": "Zhuo Tan",
                "name": "谭卓",
                "alt": "https://movie.douban.com/celebrity/1312976/",
                "id": "1312976"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.jpg"
                },
                "name_en": "Pao-Ming Ku",
                "name": "顾宝明",
                "alt": "https://movie.douban.com/celebrity/1285575/",
                "id": "1285575"
              }
            ],
            "durations": [
              "102分钟"
            ],
            "collect_count": 1496,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "西小河的夏天",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.jpg"
                },
                "name_en": "Quan Zhou",
                "name": "周全",
                "alt": "https://movie.douban.com/celebrity/1272065/",
                "id": "1272065"
              }
            ],
            "pubdates": [
              "2017-10-14(釜山电影节)",
              "2018-05-25(中国大陆)"
            ],
            "year": "2017",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.jpg"
            },
            "alt": "https://movie.douban.com/subject/26799232/",
            "id": "26799232"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.4,
              "details": {
                "1": 79.0,
                "2": 191.0,
                "3": 653.0,
                "4": 389.0,
                "5": 133.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "剧情",
              "传记",
              "历史"
            ],
            "title": "青年马克思",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg"
                },
                "name_en": "August Diehl",
                "name": "奥古斯特·迪尔",
                "alt": "https://movie.douban.com/celebrity/1014063/",
                "id": "1014063"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg"
                },
                "name_en": "Stefan Konarske",
                "name": "史特凡·柯纳斯克",
                "alt": "https://movie.douban.com/celebrity/1387917/",
                "id": "1387917"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg"
                },
                "name_en": "Vicky Krieps",
                "name": "薇姬·克里普斯",
                "alt": "https://movie.douban.com/celebrity/1341743/",
                "id": "1341743"
              }
            ],
            "durations": [
              "118分钟",
              "115分钟(中国大陆)"
            ],
            "collect_count": 3322,
            "mainland_pubdate": "2018-05-05",
            "has_video": false,
            "original_title": "Le jeune Karl Marx",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg"
                },
                "name_en": "Raoul Peck",
                "name": "哈乌·佩克",
                "alt": "https://movie.douban.com/celebrity/1294186/",
                "id": "1294186"
              }
            ],
            "pubdates": [
              "2017-02-12(柏林电影节)",
              "2017-03-02(德国)",
              "2018-05-05(中国大陆)"
            ],
            "year": "2017",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg"
            },
            "alt": "https://movie.douban.com/subject/5330387/",
            "id": "5330387"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.7,
              "details": {
                "1": 320.0,
                "2": 2407.0,
                "3": 14024.0,
                "4": 8742.0,
                "5": 2275.0
              },
              "stars": "35",
              "min": 0
            },
            "genres": [
              "动作",
              "科幻",
              "冒险"
            ],
            "title": "狂暴巨兽",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg"
                },
                "name_en": "Dwayne Johnson",
                "name": "道恩·强森",
                "alt": "https://movie.douban.com/celebrity/1044707/",
                "id": "1044707"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486878030.07.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486878030.07.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486878030.07.jpg"
                },
                "name_en": "Naomie Harris",
                "name": "娜奥米·哈里斯",
                "alt": "https://movie.douban.com/celebrity/1049542/",
                "id": "1049542"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6531.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6531.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6531.jpg"
                },
                "name_en": "Jeffrey Dean Morgan",
                "name": "杰弗里·迪恩·摩根",
                "alt": "https://movie.douban.com/celebrity/1044708/",
                "id": "1044708"
              }
            ],
            "durations": [
              "107分钟"
            ],
            "collect_count": 58476,
            "mainland_pubdate": "2018-04-13",
            "has_video": false,
            "original_title": "Rampage",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432840050.06.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432840050.06.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432840050.06.jpg"
                },
                "name_en": "Brad Peyton",
                "name": "布拉德·佩顿",
                "alt": "https://movie.douban.com/celebrity/1317388/",
                "id": "1317388"
              }
            ],
            "pubdates": [
              "2018-04-13(美国)",
              "2018-04-13(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516079193.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516079193.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516079193.jpg"
            },
            "alt": "https://movie.douban.com/subject/26430636/",
            "id": "26430636"
          },
          {
            "rating": {
              "max": 10,
              "average": 4.5,
              "details": {
                "1": 132.0,
                "2": 109.0,
                "3": 130.0,
                "4": 30.0,
                "5": 14.0
              },
              "stars": "25",
              "min": 0
            },
            "genres": [
              "动画",
              "冒险",
              "家庭"
            ],
            "title": "冰雪女王3：火与冰",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20303.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20303.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20303.jpg"
                },
                "name_en": "Dee Bradley Baker",
                "name": "迪·布拉雷·贝克尔",
                "alt": "https://movie.douban.com/celebrity/1059406/",
                "id": "1059406"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                  "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                  "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                },
                "name_en": "Lori Gardner",
                "name": "洛瑞·加纳",
                "alt": "https://movie.douban.com/celebrity/1390987/",
                "id": "1390987"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                  "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                  "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                },
                "name_en": "Devin Bailey Griffin",
                "name": "Devin Bailey Griffin",
                "alt": "https://movie.douban.com/celebrity/1390988/",
                "id": "1390988"
              }
            ],
            "durations": [
              "89分钟",
              "90分钟(中国大陆)"
            ],
            "collect_count": 1453,
            "mainland_pubdate": "2018-04-05",
            "has_video": false,
            "original_title": "Снежная королева 3: Огонь и лед",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                  "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                  "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                },
                "name_en": "Aleksey Tsitsilin",
                "name": "阿列克谢·特斯蒂斯林",
                "alt": "https://movie.douban.com/celebrity/1362482/",
                "id": "1362482"
              }
            ],
            "pubdates": [
              "2016-12-29(俄罗斯)",
              "2018-04-05(中国大陆)"
            ],
            "year": "2016",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517033932.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517033932.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517033932.jpg"
            },
            "alt": "https://movie.douban.com/subject/26588783/",
            "id": "26588783"
          },
          {
            "rating": {
              "max": 10,
              "average": 3.6,
              "details": {
                "1": 50.0,
                "2": 38.0,
                "3": 17.0,
                "4": 5.0,
                "5": 0.0
              },
              "stars": "20",
              "min": 0
            },
            "genres": [
              "动画",
              "冒险",
              "家庭"
            ],
            "title": "小公主艾薇拉与神秘王国",
            "casts": [],
            "durations": [
              "78分钟"
            ],
            "collect_count": 488,
            "mainland_pubdate": "2018-05-12",
            "has_video": false,
            "original_title": "小公主艾薇拉与神秘王国",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522392000.73.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522392000.73.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522392000.73.jpg"
                },
                "name_en": "Yang Luo",
                "name": "罗洋",
                "alt": "https://movie.douban.com/celebrity/1390831/",
                "id": "1390831"
              }
            ],
            "pubdates": [
              "2018-05-12(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517769368.jpg",
              "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517769368.jpg",
              "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517769368.jpg"
            },
            "alt": "https://movie.douban.com/subject/30183489/",
            "id": "30183489"
          },
          {
            "rating": {
              "max": 10,
              "average": 0,
              "details": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0
              },
              "stars": "00",
              "min": 0
            },
            "genres": [
              "犯罪",
              "悬疑"
            ],
            "title": "时间暗局",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.jpg"
                },
                "name_en": "Yuze Wang",
                "name": "王宇泽",
                "alt": "https://movie.douban.com/celebrity/1391851/",
                "id": "1391851"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.jpg"
                },
                "name_en": "Mingyue Qin",
                "name": "秦鸣悦",
                "alt": "https://movie.douban.com/celebrity/1342668/",
                "id": "1342668"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.jpg"
                },
                "name_en": "Zichen Jia",
                "name": "贾子宸",
                "alt": "https://movie.douban.com/celebrity/1377507/",
                "id": "1377507"
              }
            ],
            "durations": [
              "87分钟"
            ],
            "collect_count": 57,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "时间暗局",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.jpg"
                },
                "name_en": "Liangyan Chen",
                "name": "陈亮言",
                "alt": "https://movie.douban.com/celebrity/1391841/",
                "id": "1391841"
              }
            ],
            "pubdates": [
              "2018-05-25(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.jpg"
            },
            "alt": "https://movie.douban.com/subject/30197981/",
            "id": "30197981"
          },
          {
            "rating": {
              "max": 10,
              "average": 8.8,
              "details": {
                "1": 733.0,
                "2": 1813.0,
                "3": 18453.0,
                "4": 68571.0,
                "5": 106306.0
              },
              "stars": "45",
              "min": 0
            },
            "genres": [
              "动作",
              "科幻",
              "冒险"
            ],
            "title": "头号玩家",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg"
                },
                "name_en": "Tye Sheridan",
                "name": "泰伊·谢里丹",
                "alt": "https://movie.douban.com/celebrity/1328390/",
                "id": "1328390"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg"
                },
                "name_en": "Olivia Cooke",
                "name": " 奥利维亚·库克",
                "alt": "https://movie.douban.com/celebrity/1327806/",
                "id": "1327806"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg"
                },
                "name_en": "Ben Mendelsohn",
                "name": "本·门德尔森",
                "alt": "https://movie.douban.com/celebrity/1000248/",
                "id": "1000248"
              }
            ],
            "durations": [
              "140分钟"
            ],
            "collect_count": 452697,
            "mainland_pubdate": "2018-03-30",
            "has_video": false,
            "original_title": "Ready Player One",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34602.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34602.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34602.jpg"
                },
                "name_en": "Steven Spielberg",
                "name": "史蒂文·斯皮尔伯格",
                "alt": "https://movie.douban.com/celebrity/1054440/",
                "id": "1054440"
              }
            ],
            "pubdates": [
              "2018-03-11(西南偏南电影节)",
              "2018-03-29(美国)",
              "2018-03-30(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",
              "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",
              "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg"
            },
            "alt": "https://movie.douban.com/subject/4920389/",
            "id": "4920389"
          },
          {
            "rating": {
              "max": 10,
              "average": 6.0,
              "details": {
                "1": 716.0,
                "2": 3584.0,
                "3": 9908.0,
                "4": 3904.0,
                "5": 711.0
              },
              "stars": "30",
              "min": 0
            },
            "genres": [
              "剧情",
              "犯罪",
              "悬疑"
            ],
            "title": "幕后玩家",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg"
                },
                "name_en": "Zheng Xu",
                "name": "徐峥",
                "alt": "https://movie.douban.com/celebrity/1274297/",
                "id": "1274297"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18662.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18662.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18662.jpg"
                },
                "name_en": "Likun Wang",
                "name": "王丽坤",
                "alt": "https://movie.douban.com/celebrity/1313574/",
                "id": "1313574"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410932305.68.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410932305.68.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410932305.68.jpg"
                },
                "name_en": "Yanhui Wang",
                "name": "王砚辉",
                "alt": "https://movie.douban.com/celebrity/1322085/",
                "id": "1322085"
              }
            ],
            "durations": [
              "114分钟"
            ],
            "collect_count": 46287,
            "mainland_pubdate": "2018-04-28",
            "has_video": false,
            "original_title": "幕后玩家",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520825133.06.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520825133.06.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520825133.06.jpg"
                },
                "name_en": "Pengyuan Ren",
                "name": "任鹏远",
                "alt": "https://movie.douban.com/celebrity/1326511/",
                "id": "1326511"
              }
            ],
            "pubdates": [
              "2018-04-15(北京电影节)",
              "2018-04-28(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520543845.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520543845.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520543845.jpg"
            },
            "alt": "https://movie.douban.com/subject/26774033/",
            "id": "26774033"
          },
          {
            "rating": {
              "max": 10,
              "average": 0,
              "details": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0
              },
              "stars": "00",
              "min": 0
            },
            "genres": [
              "喜剧",
              "悬疑",
              "古装"
            ],
            "title": "神谕通天",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.jpg"
                },
                "name_en": "Owodog",
                "name": "敖犬",
                "alt": "https://movie.douban.com/celebrity/1315837/",
                "id": "1315837"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.jpg"
                },
                "name_en": "Shiyun Cai",
                "name": "蔡诗芸",
                "alt": "https://movie.douban.com/celebrity/1377497/",
                "id": "1377497"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.jpg"
                },
                "name_en": "Brian Yuen",
                "name": "阮颂扬",
                "alt": "https://movie.douban.com/celebrity/1377264/",
                "id": "1377264"
              }
            ],
            "durations": [
              "86分钟"
            ],
            "collect_count": 38,
            "mainland_pubdate": "2018-05-25",
            "has_video": false,
            "original_title": "神谕通天",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.jpg"
                },
                "name_en": "Jun Li",
                "name": "李军",
                "alt": "https://movie.douban.com/celebrity/1377900/",
                "id": "1377900"
              }
            ],
            "pubdates": [
              "2018-05-25(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.jpg"
            },
            "alt": "https://movie.douban.com/subject/27041538/",
            "id": "27041538"
          },
          {
            "rating": {
              "max": 10,
              "average": 8.3,
              "details": {
                "1": 40.0,
                "2": 299.0,
                "3": 4797.0,
                "4": 15476.0,
                "5": 11029.0
              },
              "stars": "45",
              "min": 0
            },
            "genres": [
              "剧情",
              "喜剧"
            ],
            "title": "顽主",
            "casts": [
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472014969.9.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472014969.9.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472014969.9.jpg"
                },
                "name_en": "Guoli Zhang",
                "name": "张国立",
                "alt": "https://movie.douban.com/celebrity/1015115/",
                "id": "1015115"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.jpg"
                },
                "name_en": "You Ge",
                "name": "葛优",
                "alt": "https://movie.douban.com/celebrity/1000905/",
                "id": "1000905"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399.jpg"
                },
                "name_en": "Tian Liang",
                "name": "梁天",
                "alt": "https://movie.douban.com/celebrity/1222588/",
                "id": "1222588"
              }
            ],
            "durations": [
              "110分钟"
            ],
            "collect_count": 54635,
            "mainland_pubdate": "",
            "has_video": false,
            "original_title": "顽主",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26163.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26163.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26163.jpg"
                },
                "name_en": "Jiashan Mi",
                "name": "米家山",
                "alt": "https://movie.douban.com/celebrity/1314738/",
                "id": "1314738"
              }
            ],
            "pubdates": [
              "1989-09-15(多伦多电影节)"
            ],
            "year": "1989",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363497441.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363497441.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363497441.jpg"
            },
            "alt": "https://movie.douban.com/subject/1307690/",
            "id": "1307690"
          },
          {
            "rating": {
              "max": 10,
              "average": 5.0,
              "details": {
                "1": 161.0,
                "2": 207.0,
                "3": 255.0,
                "4": 96.0,
                "5": 27.0
              },
              "stars": "25",
              "min": 0
            },
            "genres": [
              "剧情",
              "喜剧"
            ],
            "title": "我是你妈",
            "casts": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.jpg"
                },
                "name_en": "Ni Yan",
                "name": "闫妮",
                "alt": "https://movie.douban.com/celebrity/1274496/",
                "id": "1274496"
              },
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497015403.46.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497015403.46.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497015403.46.jpg"
                },
                "name_en": "Yuanqing Zou",
                "name": "邹元清",
                "alt": "https://movie.douban.com/celebrity/1375319/",
                "id": "1375319"
              },
              {
                "avatars": {
                  "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27637.jpg",
                  "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27637.jpg",
                  "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27637.jpg"
                },
                "name_en": "Ruofu Wu",
                "name": "吴若甫",
                "alt": "https://movie.douban.com/celebrity/1021841/",
                "id": "1021841"
              }
            ],
            "durations": [
              "104分钟"
            ],
            "collect_count": 2742,
            "mainland_pubdate": "2018-05-11",
            "has_video": true,
            "original_title": "我是你妈",
            "subtype": "movie",
            "directors": [
              {
                "avatars": {
                  "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525239604.52.jpg",
                  "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525239604.52.jpg",
                  "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525239604.52.jpg"
                },
                "name_en": "Xiao Zhang",
                "name": "张骁",
                "alt": "https://movie.douban.com/celebrity/1375320/",
                "id": "1375320"
              }
            ],
            "pubdates": [
              "2018-05-11(中国大陆)"
            ],
            "year": "2018",
            "images": {
              "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520372116.jpg",
              "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520372116.jpg",
              "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520372116.jpg"
            },
            "alt": "https://movie.douban.com/subject/26968024/",
            "id": "26968024"
          }

        ],
        coming_soon_title: '即将上映的电影',
        coming_soon_movies: [],
        new_movies_title: 'aaa',
        new_movies: []
      }
    },
    mounted(){
//      request('/v2/movie/in_theaters').then(result => {
//        this.movies = result.subjects
//        this.title = result.title
//        console.log(this.title)
//      })
//      /v2/movie/coming_soon
      this.in_theaters_movies = filterMovies(this.in_theaters_movies)
      console.log(this.in_theaters_movies)
    },
    methods: {},
    components: {
      MovieList,
      BorderLine
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .movie-page {
    height: 100%;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
    .slider-item > img {
      background-size: cover;
      width: 100%;
      height: 100%;
    }
  }


</style>
