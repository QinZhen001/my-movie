<template>
  <div class="search-page">
    <div v-if="showNoResult" class="no-result-wrapper">
      <no-result></no-result>
    </div>
    <div class="search-box-wrapper">
      <div class="search-box">
        <img class="search-img" src="../../../static/img/search.png" alt="">
        <input class="search-text" v-model="query" type="text" placeholder="搜索电影">
        <img @click.stop="clear" class="clear-img" v-if="query" src="../../../static/img/clear.png" alt="">
      </div>
    </div>
    <div class="list-wrapper" v-if="searchResults">
      <scroll-view class="list-scroll" scroll-y="true">
        <ul class="list-inner">
          <li class="list-item" v-for="(item,index) in searchResults" :key="item.id"
              @click.stop="clickSearchItem(item.id)">
            <img class="item-img" src="../../../static/img/item-img.png" alt="">
            <span class="item-title">{{item.title}}</span>
            <span class="item-genre" v-for="(genre,genreIndex) in item.genres" :key="genre">{{genre}}</span>
          </li>
        </ul>
      </scroll-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NoResult from '../../components/no-result.vue'
  import { debounce } from '../../utils/index'

  export default{
    data(){
      return {
        query: '',
        searchResults: []
      }
    },
    mounted(){
      let data = [
        {
          "rating": {
            "max": 10,
            "average": 8,
            "details": {
              "1": 0,
              "2": 0,
              "3": 8,
              "4": 16,
              "5": 8
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "纪录片"
          ],
          "title": "张艺谋：中国故事",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            },
            {
              "avatars": null,
              "name_en": "",
              "name": "Zhang’s Mum and Dad",
              "alt": null,
              "id": null
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            }
          ],
          "durations": [
            "58分钟"
          ],
          "collect_count": 71,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "\"Arena\" Zhang Yimou",
          "subtype": "movie",
          "directors": [
            {
              "avatars": null,
              "name_en": "",
              "name": "Christopher Bruce",
              "alt": null,
              "id": null
            }
          ],
          "pubdates": [
            "1993"
          ],
          "year": "1993",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2280764377.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2280764377.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2280764377.webp"
          },
          "alt": "https://movie.douban.com/subject/20271803/",
          "id": "20271803"
        },
        {
          "rating": {
            "max": 10,
            "average": 9.1,
            "details": {
              "1": 264,
              "2": 953,
              "3": 13959,
              "4": 73524,
              "5": 147356
            },
            "stars": "45",
            "min": 0
          },
          "genres": [
            "剧情",
            "历史",
            "家庭"
          ],
          "title": "活着",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46.webp"
              },
              "name_en": "You Ge",
              "name": "葛优",
              "alt": "https://movie.douban.com/celebrity/1000905/",
              "id": "1000905"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27203.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27203.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p27203.webp"
              },
              "name_en": "Wu Jiang",
              "name": "姜武",
              "alt": "https://movie.douban.com/celebrity/1274290/",
              "id": "1274290"
            }
          ],
          "durations": [
            "132分钟"
          ],
          "collect_count": 396665,
          "mainland_pubdate": "",
          "has_video": true,
          "original_title": "活着",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1994-05-17(戛纳电影节)",
            "1994-06-30(香港)"
          ],
          "year": "1994",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.webp"
          },
          "alt": "https://movie.douban.com/subject/1292365/",
          "id": "1292365"
        },
        {
          "rating": {
            "max": 10,
            "average": 5.1,
            "details": {
              "1": 17839,
              "2": 20763,
              "3": 28937,
              "4": 10433,
              "5": 4321
            },
            "stars": "25",
            "min": 0
          },
          "genres": [
            "动作",
            "奇幻",
            "冒险"
          ],
          "title": "长城",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p620.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p620.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p620.webp"
              },
              "name_en": "Matt Damon",
              "name": "马特·达蒙",
              "alt": "https://movie.douban.com/celebrity/1054443/",
              "id": "1054443"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.webp"
              },
              "name_en": "Tian Jing",
              "name": "景甜",
              "alt": "https://movie.douban.com/celebrity/1275432/",
              "id": "1275432"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397806328.94.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397806328.94.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397806328.94.webp"
              },
              "name_en": "Pedro Pascal",
              "name": "佩德罗·帕斯卡",
              "alt": "https://movie.douban.com/celebrity/1329628/",
              "id": "1329628"
            }
          ],
          "durations": [
            "104分钟"
          ],
          "collect_count": 258731,
          "mainland_pubdate": "2016-12-16",
          "has_video": true,
          "original_title": "The Great Wall",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2016-12-16(中国大陆)",
            "2017-02-17(美国)"
          ],
          "year": "2016",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2394573821.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2394573821.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2394573821.webp"
          },
          "alt": "https://movie.douban.com/subject/6982558/",
          "id": "6982558"
        },
        {
          "rating": {
            "max": 10,
            "average": 6.9,
            "details": {
              "1": 2172,
              "2": 9289,
              "3": 42561,
              "4": 32965,
              "5": 14124
            },
            "stars": "35",
            "min": 0
          },
          "genres": [
            "剧情",
            "动作",
            "武侠"
          ],
          "title": "英雄",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48974.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48974.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48974.webp"
              },
              "name_en": "Jet Li",
              "name": "李连杰",
              "alt": "https://movie.douban.com/celebrity/1025146/",
              "id": "1025146"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp"
              },
              "name_en": "Tony Leung Chiu Wai",
              "name": "梁朝伟",
              "alt": "https://movie.douban.com/celebrity/1115918/",
              "id": "1115918"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p793.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p793.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p793.webp"
              },
              "name_en": "Maggie Cheung",
              "name": "张曼玉",
              "alt": "https://movie.douban.com/celebrity/1274231/",
              "id": "1274231"
            }
          ],
          "durations": [
            "93分钟(中国大陆)",
            "99 分钟",
            "110分钟(导演剪辑版)"
          ],
          "collect_count": 185439,
          "mainland_pubdate": "2002-12-19",
          "has_video": true,
          "original_title": "英雄",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2002-12-19(中国大陆)",
            "2002-12-19(香港)"
          ],
          "year": "2002",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1774548839.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1774548839.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1774548839.webp"
          },
          "alt": "https://movie.douban.com/subject/1306123/",
          "id": "1306123"
        },
        {
          "rating": {
            "max": 10,
            "average": 8,
            "details": {
              "1": 2828,
              "2": 6646,
              "3": 49962,
              "4": 110736,
              "5": 70888
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情",
            "历史",
            "战争"
          ],
          "title": "金陵十三钗",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1004.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1004.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1004.webp"
              },
              "name_en": "Christian Bale",
              "name": "克里斯蒂安·贝尔",
              "alt": "https://movie.douban.com/celebrity/1005773/",
              "id": "1005773"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.webp"
              },
              "name_en": "Ni Ni",
              "name": "倪妮",
              "alt": "https://movie.douban.com/celebrity/1315861/",
              "id": "1315861"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464660598.08.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464660598.08.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464660598.08.webp"
              },
              "name_en": "Xinyi Zhang",
              "name": "张歆怡",
              "alt": "https://movie.douban.com/celebrity/1316839/",
              "id": "1316839"
            }
          ],
          "durations": [
            "145分钟"
          ],
          "collect_count": 401730,
          "mainland_pubdate": "2011-12-15",
          "has_video": true,
          "original_title": "金陵十三钗",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2011-12-15(中国大陆)",
            "2011-12-23(美国)"
          ],
          "year": "2011",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1322247572.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1322247572.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1322247572.webp"
          },
          "alt": "https://movie.douban.com/subject/3649049/",
          "id": "3649049"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.7,
            "details": {
              "1": 897,
              "2": 4255,
              "3": 36292,
              "4": 63298,
              "5": 30329
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情",
            "历史",
            "爱情"
          ],
          "title": "归来",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39525.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39525.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39525.webp"
              },
              "name_en": "Daoming Chen",
              "name": "陈道明",
              "alt": "https://movie.douban.com/celebrity/1045565/",
              "id": "1045565"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421862098.71.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421862098.71.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421862098.71.webp"
              },
              "name_en": "Huiwen Zhang",
              "name": "张慧雯",
              "alt": "https://movie.douban.com/celebrity/1339318/",
              "id": "1339318"
            }
          ],
          "durations": [
            "111分钟"
          ],
          "collect_count": 217972,
          "mainland_pubdate": "2014-05-16",
          "has_video": true,
          "original_title": "归来",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2014-05-16(中国大陆)",
            "2014-05-20(戛纳电影节)"
          ],
          "year": "2014",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181207835.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181207835.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181207835.webp"
          },
          "alt": "https://movie.douban.com/subject/21352814/",
          "id": "21352814"
        },
        {
          "rating": {
            "max": 10,
            "average": 8.2,
            "details": {
              "1": 178,
              "2": 622,
              "3": 12024,
              "4": 40094,
              "5": 22611
            },
            "stars": "45",
            "min": 0
          },
          "genres": [
            "剧情",
            "历史",
            "爱情"
          ],
          "title": "红高粱",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp"
              },
              "name_en": "Wen Jiang",
              "name": "姜文",
              "alt": "https://movie.douban.com/celebrity/1021999/",
              "id": "1021999"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361001608.25.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361001608.25.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361001608.25.webp"
              },
              "name_en": "Rujun Teng",
              "name": "滕汝骏",
              "alt": "https://movie.douban.com/celebrity/1299044/",
              "id": "1299044"
            }
          ],
          "durations": [
            "91分钟"
          ],
          "collect_count": 138693,
          "mainland_pubdate": "1988-10-10",
          "has_video": true,
          "original_title": "红高粱",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1988-02(柏林电影节)",
            "1988-10-10(中国大陆)"
          ],
          "year": "1988",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201469903.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201469903.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201469903.webp"
          },
          "alt": "https://movie.douban.com/subject/1306505/",
          "id": "1306505"
        },
        {
          "rating": {
            "max": 10,
            "average": 9.2,
            "details": {
              "1": 80,
              "2": 133,
              "3": 2177,
              "4": 11283,
              "5": 29219
            },
            "stars": "50",
            "min": 0
          },
          "genres": [
            "剧情",
            "爱情",
            "家庭"
          ],
          "title": "大宅门",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524024240.83.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524024240.83.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524024240.83.webp"
              },
              "name_en": "Gaowa Siqin",
              "name": "斯琴高娃",
              "alt": "https://movie.douban.com/celebrity/1274429/",
              "id": "1274429"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp"
              },
              "name_en": "Peiqi Liu",
              "name": "刘佩琦",
              "alt": "https://movie.douban.com/celebrity/1274585/",
              "id": "1274585"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1373425149.09.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1373425149.09.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1373425149.09.webp"
              },
              "name_en": "Baoguo Chen",
              "name": "陈宝国",
              "alt": "https://movie.douban.com/celebrity/1274584/",
              "id": "1274584"
            }
          ],
          "durations": [
            "45分钟"
          ],
          "collect_count": 72254,
          "mainland_pubdate": "2001-04-15",
          "has_video": true,
          "original_title": "大宅门",
          "subtype": "tv",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26718.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26718.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26718.webp"
              },
              "name_en": "Baochang Guo",
              "name": "郭宝昌",
              "alt": "https://movie.douban.com/celebrity/1275311/",
              "id": "1275311"
            }
          ],
          "pubdates": [
            "2001-04-15(中国大陆)",
            "2001-06-04(香港)"
          ],
          "year": "2001",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
          },
          "alt": "https://movie.douban.com/subject/2181930/",
          "id": "2181930"
        },
        {
          "rating": {
            "max": 10,
            "average": 8.4,
            "details": {
              "1": 127,
              "2": 595,
              "3": 10561,
              "4": 38997,
              "5": 26725
            },
            "stars": "45",
            "min": 0
          },
          "genres": [
            "剧情",
            "历史",
            "爱情"
          ],
          "title": "大红灯笼高高挂",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15022.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15022.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15022.webp"
              },
              "name_en": "Jingwu Ma",
              "name": "马精武",
              "alt": "https://movie.douban.com/celebrity/1313092/",
              "id": "1313092"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48297.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48297.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48297.webp"
              },
              "name_en": "Saifei He",
              "name": "何赛飞",
              "alt": "https://movie.douban.com/celebrity/1001393/",
              "id": "1001393"
            }
          ],
          "durations": [
            "125 分钟"
          ],
          "collect_count": 138390,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "大红灯笼高高挂",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1991-09-10(威尼斯电影节)",
            "1991-09-10(多伦多电影节)"
          ],
          "year": "1991",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1254404823.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1254404823.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1254404823.webp"
          },
          "alt": "https://movie.douban.com/subject/1293323/",
          "id": "1293323"
        },
        {
          "rating": {
            "max": 10,
            "average": 8.1,
            "details": {
              "1": 165,
              "2": 990,
              "3": 13255,
              "4": 32324,
              "5": 18856
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情",
            "喜剧"
          ],
          "title": "有话好好说",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517818343.94.webp"
              },
              "name_en": "Wen Jiang",
              "name": "姜文",
              "alt": "https://movie.douban.com/celebrity/1021999/",
              "id": "1021999"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp"
              },
              "name_en": "Baotian Li",
              "name": "李保田",
              "alt": "https://movie.douban.com/celebrity/1038193/",
              "id": "1038193"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421302138.86.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421302138.86.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1421302138.86.webp"
              },
              "name_en": "Ying Qu",
              "name": "瞿颖",
              "alt": "https://movie.douban.com/celebrity/1011112/",
              "id": "1011112"
            }
          ],
          "durations": [
            "90分钟"
          ],
          "collect_count": 117946,
          "mainland_pubdate": "1997-05-16",
          "has_video": true,
          "original_title": "有话好好说",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1997-05-16(中国大陆)",
            "1997-09-02(威尼斯电影节)"
          ],
          "year": "1997",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1194789138.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1194789138.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1194789138.webp"
          },
          "alt": "https://movie.douban.com/subject/1296436/",
          "id": "1296436"
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
            "剧情",
            "动作",
            "古装"
          ],
          "title": "影",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p805.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p805.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p805.webp"
              },
              "name_en": "Chao Deng",
              "name": "邓超",
              "alt": "https://movie.douban.com/celebrity/1274235/",
              "id": "1274235"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415690807.36.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415690807.36.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415690807.36.webp"
              },
              "name_en": "Li Sun",
              "name": "孙俪",
              "alt": "https://movie.douban.com/celebrity/1004856/",
              "id": "1004856"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp"
              },
              "name_en": "Kai Zheng",
              "name": "郑恺",
              "alt": "https://movie.douban.com/celebrity/1275564/",
              "id": "1275564"
            }
          ],
          "durations": [],
          "collect_count": 192,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "影",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2018-07(中国大陆)"
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515014752.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515014752.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515014752.webp"
          },
          "alt": "https://movie.douban.com/subject/4864908/",
          "id": "4864908"
        },
        {
          "rating": {
            "max": 10,
            "average": 5.8,
            "details": {
              "1": 4939,
              "2": 18705,
              "3": 39300,
              "4": 12981,
              "5": 3383
            },
            "stars": "30",
            "min": 0
          },
          "genres": [
            "剧情",
            "武侠",
            "古装"
          ],
          "title": "十面埋伏",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp"
              },
              "name_en": "Ziyi Zhang",
              "name": "章子怡",
              "alt": "https://movie.douban.com/celebrity/1041014/",
              "id": "1041014"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378956633.91.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378956633.91.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378956633.91.webp"
              },
              "name_en": "Andy Lau",
              "name": "刘德华",
              "alt": "https://movie.douban.com/celebrity/1054424/",
              "id": "1054424"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6925.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6925.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6925.webp"
              },
              "name_en": "Takeshi Kaneshiro",
              "name": "金城武",
              "alt": "https://movie.douban.com/celebrity/1027883/",
              "id": "1027883"
            }
          ],
          "durations": [
            "119 分钟"
          ],
          "collect_count": 148431,
          "mainland_pubdate": "2004-07-16",
          "has_video": true,
          "original_title": "十面埋伏",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2004-07-15(香港)",
            "2004-07-16(中国大陆)"
          ],
          "year": "2004",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160809605.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160809605.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160809605.webp"
          },
          "alt": "https://movie.douban.com/subject/1308722/",
          "id": "1308722"
        },
        {
          "rating": {
            "max": 10,
            "average": 5.2,
            "details": {
              "1": 9127,
              "2": 28012,
              "3": 38841,
              "4": 8714,
              "5": 2384
            },
            "stars": "30",
            "min": 0
          },
          "genres": [
            "剧情",
            "动作",
            "爱情"
          ],
          "title": "满城尽带黄金甲",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35678.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35678.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35678.webp"
              },
              "name_en": "Yun-Fat Chow",
              "name": "周润发",
              "alt": "https://movie.douban.com/celebrity/1044899/",
              "id": "1044899"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525674287.43.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525674287.43.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525674287.43.webp"
              },
              "name_en": "Ye Liu",
              "name": "刘烨",
              "alt": "https://movie.douban.com/celebrity/1000572/",
              "id": "1000572"
            }
          ],
          "durations": [
            "114分钟"
          ],
          "collect_count": 157647,
          "mainland_pubdate": "2006-12-14",
          "has_video": true,
          "original_title": "满城尽带黄金甲",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2006-12-14(中国大陆)",
            "2006-12-21(香港)"
          ],
          "year": "2006",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1323644940.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1323644940.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1323644940.webp"
          },
          "alt": "https://movie.douban.com/subject/1499008/",
          "id": "1499008"
        },
        {
          "rating": {
            "max": 10,
            "average": 6.7,
            "details": {
              "1": 3336,
              "2": 14125,
              "3": 65946,
              "4": 42149,
              "5": 12736
            },
            "stars": "35",
            "min": 0
          },
          "genres": [
            "剧情",
            "爱情"
          ],
          "title": "山楂树之恋",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp"
              },
              "name_en": "Dongyu Zhou",
              "name": "周冬雨",
              "alt": "https://movie.douban.com/celebrity/1274224/",
              "id": "1274224"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1409229069.1.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1409229069.1.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1409229069.1.webp"
              },
              "name_en": "Shawn Dou",
              "name": "窦骁",
              "alt": "https://movie.douban.com/celebrity/1274225/",
              "id": "1274225"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40786.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40786.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40786.webp"
              },
              "name_en": "Meijuan Xi",
              "name": "奚美娟",
              "alt": "https://movie.douban.com/celebrity/1001714/",
              "id": "1001714"
            }
          ],
          "durations": [
            "114分钟"
          ],
          "collect_count": 256421,
          "mainland_pubdate": "2010-09-16",
          "has_video": true,
          "original_title": "山楂树之恋",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2010-09-16(中国大陆)"
          ],
          "year": "2010",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p649179543.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p649179543.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p649179543.webp"
          },
          "alt": "https://movie.douban.com/subject/4151110/",
          "id": "4151110"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.8,
            "details": {
              "1": 62,
              "2": 324,
              "3": 5388,
              "4": 11381,
              "5": 4140
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情"
          ],
          "title": "菊豆",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358596116.28.webp"
              },
              "name_en": "Baotian Li",
              "name": "李保田",
              "alt": "https://movie.douban.com/celebrity/1038193/",
              "id": "1038193"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5347.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5347.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5347.webp"
              },
              "name_en": "Wei Li",
              "name": "李纬",
              "alt": "https://movie.douban.com/celebrity/1040943/",
              "id": "1040943"
            }
          ],
          "durations": [
            "95 分钟"
          ],
          "collect_count": 38535,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "菊豆",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pVqONIzZ1qPgcel_avatar_uploaded1407822241.51.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pVqONIzZ1qPgcel_avatar_uploaded1407822241.51.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pVqONIzZ1qPgcel_avatar_uploaded1407822241.51.webp"
              },
              "name_en": "Fengliang Yang",
              "name": "杨凤良",
              "alt": "https://movie.douban.com/celebrity/1342076/",
              "id": "1342076"
            }
          ],
          "pubdates": [
            "1990-04-21(日本)"
          ],
          "year": "1990",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2331293839.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2331293839.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2331293839.webp"
          },
          "alt": "https://movie.douban.com/subject/1299365/",
          "id": "1299365"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.9,
            "details": {
              "1": 149,
              "2": 863,
              "3": 13022,
              "4": 24913,
              "5": 12878
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情",
            "爱情"
          ],
          "title": "我的父亲母亲",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp"
              },
              "name_en": "Ziyi Zhang",
              "name": "章子怡",
              "alt": "https://movie.douban.com/celebrity/1041014/",
              "id": "1041014"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p41469.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p41469.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p41469.webp"
              },
              "name_en": "Hao Zheng",
              "name": "郑昊",
              "alt": "https://movie.douban.com/celebrity/1317855/",
              "id": "1317855"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp"
              },
              "name_en": "Honglei Sun",
              "name": "孙红雷",
              "alt": "https://movie.douban.com/celebrity/1053581/",
              "id": "1053581"
            }
          ],
          "durations": [
            "89分钟"
          ],
          "collect_count": 101772,
          "mainland_pubdate": "1999-10-16",
          "has_video": false,
          "original_title": "我的父亲母亲",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1999-10-16(中国大陆)",
            "2000-02-15(柏林电影节)"
          ],
          "year": "1999",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p871456694.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p871456694.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p871456694.webp"
          },
          "alt": "https://movie.douban.com/subject/1294007/",
          "id": "1294007"
        },
        {
          "rating": {
            "max": 10,
            "average": 4.6,
            "details": {
              "1": 13041,
              "2": 16996,
              "3": 16465,
              "4": 4362,
              "5": 1253
            },
            "stars": "25",
            "min": 0
          },
          "genres": [
            "剧情"
          ],
          "title": "三枪拍案惊奇",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524314905.42.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524314905.42.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524314905.42.webp"
              },
              "name_en": "Xiao Shen-Yang",
              "name": "小沈阳",
              "alt": "https://movie.douban.com/celebrity/1274081/",
              "id": "1274081"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420531092.61.webp"
              },
              "name_en": "Ni Yan",
              "name": "闫妮",
              "alt": "https://movie.douban.com/celebrity/1274496/",
              "id": "1274496"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24747.webp"
              },
              "name_en": "Honglei Sun",
              "name": "孙红雷",
              "alt": "https://movie.douban.com/celebrity/1053581/",
              "id": "1053581"
            }
          ],
          "durations": [
            "95 分钟"
          ],
          "collect_count": 94213,
          "mainland_pubdate": "2009-12-11",
          "has_video": false,
          "original_title": "三枪拍案惊奇",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "2009-12-11(中国大陆)",
            "2009-12-24(香港)"
          ],
          "year": "2009",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p776999771.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p776999771.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p776999771.webp"
          },
          "alt": "https://movie.douban.com/subject/3718447/",
          "id": "3718447"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.8,
            "details": {
              "1": 77,
              "2": 455,
              "3": 8767,
              "4": 19017,
              "5": 7112
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情"
          ],
          "title": "秋菊打官司",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1399268395.47.webp"
              },
              "name_en": "Li Gong",
              "name": "巩俐",
              "alt": "https://movie.douban.com/celebrity/1035641/",
              "id": "1035641"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5612.webp"
              },
              "name_en": "Peiqi Liu",
              "name": "刘佩琦",
              "alt": "https://movie.douban.com/celebrity/1274585/",
              "id": "1274585"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp"
              },
              "name_en": "Kesheng Lei",
              "name": "雷恪生",
              "alt": "https://movie.douban.com/celebrity/1274724/",
              "id": "1274724"
            }
          ],
          "durations": [
            "100分钟"
          ],
          "collect_count": 67588,
          "mainland_pubdate": "1992-08-31",
          "has_video": true,
          "original_title": "秋菊打官司",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1992-08-31(中国大陆)",
            "1992-09-07(威尼斯电影节)"
          ],
          "year": "1992",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1366467090.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1366467090.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1366467090.webp"
          },
          "alt": "https://movie.douban.com/subject/1300108/",
          "id": "1300108"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.5,
            "details": {
              "1": 228,
              "2": 1506,
              "3": 20986,
              "4": 30054,
              "5": 8956
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "喜剧",
            "剧情"
          ],
          "title": "一个都不能少",
          "casts": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17450.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17450.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17450.webp"
              },
              "name_en": "Minzhi Wei",
              "name": "魏敏芝",
              "alt": "https://movie.douban.com/celebrity/1300597/",
              "id": "1300597"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509070007.45.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509070007.45.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509070007.45.webp"
              },
              "name_en": "Huike Zhang",
              "name": "张慧科",
              "alt": "https://movie.douban.com/celebrity/1378547/",
              "id": "1378547"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name_en": "Zhenda Tian",
              "name": "田正达",
              "alt": "https://movie.douban.com/celebrity/1378546/",
              "id": "1378546"
            }
          ],
          "durations": [
            "106 分钟"
          ],
          "collect_count": 124115,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "一个都不能少",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            }
          ],
          "pubdates": [
            "1999-09-07(威尼斯电影节)"
          ],
          "year": "1999",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p907410217.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p907410217.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p907410217.webp"
          },
          "alt": "https://movie.douban.com/subject/1294963/",
          "id": "1294963"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.8,
            "details": {
              "1": 33,
              "2": 212,
              "3": 2871,
              "4": 5044,
              "5": 2318
            },
            "stars": "40",
            "min": 0
          },
          "genres": [
            "喜剧",
            "剧情"
          ],
          "title": "每个人都有他自己的电影",
          "casts": [
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413615170.39.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413615170.39.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413615170.39.webp"
              },
              "name_en": "Josh Brolin",
              "name": "乔什·布洛林",
              "alt": "https://movie.douban.com/celebrity/1004568/",
              "id": "1004568"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp"
              },
              "name_en": "David Cronenberg",
              "name": "大卫·柯南伯格",
              "alt": "https://movie.douban.com/celebrity/1054396/",
              "id": "1054396"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp"
              },
              "name_en": "Takeshi Kitano",
              "name": "北野武",
              "alt": "https://movie.douban.com/celebrity/1054423/",
              "id": "1054423"
            }
          ],
          "durations": [
            "110分钟"
          ],
          "collect_count": 22585,
          "mainland_pubdate": "",
          "has_video": false,
          "original_title": "Chacun son cinéma ou Ce petit coup au cœur quand la lumière s'éteint et que le film commence",
          "subtype": "movie",
          "directors": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p740.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p740.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p740.webp"
              },
              "name_en": "Theodoros Angelopoulos",
              "name": "西奥·安哲罗普洛斯",
              "alt": "https://movie.douban.com/celebrity/1055157/",
              "id": "1055157"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1674.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1674.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1674.webp"
              },
              "name_en": "Olivier Assayas",
              "name": "奥利维耶·阿萨亚斯",
              "alt": "https://movie.douban.com/celebrity/1004899/",
              "id": "1004899"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9398.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9398.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9398.webp"
              },
              "name_en": "Bille August",
              "name": "比利·奥古斯特",
              "alt": "https://movie.douban.com/celebrity/1041311/",
              "id": "1041311"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1380771419.11.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1380771419.11.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1380771419.11.webp"
              },
              "name_en": "Jane Campion",
              "name": "简·坎皮恩",
              "alt": "https://movie.douban.com/celebrity/1045008/",
              "id": "1045008"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53775.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53775.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53775.webp"
              },
              "name_en": "Youssef Chahine",
              "name": "尤瑟夫·夏因",
              "alt": "https://movie.douban.com/celebrity/1005227/",
              "id": "1005227"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28359.webp"
              },
              "name_en": "David Cronenberg",
              "name": "大卫·柯南伯格",
              "alt": "https://movie.douban.com/celebrity/1054396/",
              "id": "1054396"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17302.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17302.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17302.webp"
              },
              "name_en": "Michael Cimino",
              "name": "迈克尔·西米诺",
              "alt": "https://movie.douban.com/celebrity/1004772/",
              "id": "1004772"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003599.02.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003599.02.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003599.02.webp"
              },
              "name_en": "Ethan Coen",
              "name": "伊桑·科恩",
              "alt": "https://movie.douban.com/celebrity/1054401/",
              "id": "1054401"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003189.3.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003189.3.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378003189.3.webp"
              },
              "name_en": "Joel Coen",
              "name": "乔尔·科恩",
              "alt": "https://movie.douban.com/celebrity/1054517/",
              "id": "1054517"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4483.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4483.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4483.webp"
              },
              "name_en": "Jean-Pierre Dardenne",
              "name": "让-皮埃尔·达内",
              "alt": "https://movie.douban.com/celebrity/1045271/",
              "id": "1045271"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3270.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3270.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3270.webp"
              },
              "name_en": "Luc Dardenne",
              "name": "吕克·达内",
              "alt": "https://movie.douban.com/celebrity/1032736/",
              "id": "1032736"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392326420.88.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392326420.88.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392326420.88.webp"
              },
              "name_en": "Manoel de Oliveira",
              "name": "曼努埃尔·德·奥利维拉",
              "alt": "https://movie.douban.com/celebrity/1036826/",
              "id": "1036826"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3226.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3226.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3226.webp"
              },
              "name_en": "Raymond Depardon",
              "name": "雷蒙·德帕东",
              "alt": "https://movie.douban.com/celebrity/1012661/",
              "id": "1012661"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21889.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21889.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21889.webp"
              },
              "name_en": "Atom Egoyan",
              "name": "阿托姆·伊戈扬",
              "alt": "https://movie.douban.com/celebrity/1010662/",
              "id": "1010662"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375630025.44.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375630025.44.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375630025.44.webp"
              },
              "name_en": "Amos Gitai",
              "name": "阿莫斯·吉泰",
              "alt": "https://movie.douban.com/celebrity/1028057/",
              "id": "1028057"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p570.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p570.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p570.webp"
              },
              "name_en": "Alejandro González Iñárritu",
              "name": "亚利桑德罗·冈萨雷斯·伊纳里图",
              "alt": "https://movie.douban.com/celebrity/1054403/",
              "id": "1054403"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3222.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3222.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3222.webp"
              },
              "name_en": "Hsiao-hsien Hou",
              "name": "侯孝贤",
              "alt": "https://movie.douban.com/celebrity/1093843/",
              "id": "1093843"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1024.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1024.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1024.webp"
              },
              "name_en": "Aki Kaurismäki",
              "name": "阿基·考里斯马基",
              "alt": "https://movie.douban.com/celebrity/1112026/",
              "id": "1112026"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10153.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10153.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10153.webp"
              },
              "name_en": "Abbas Kiarostami",
              "name": "阿巴斯·基亚罗斯塔米",
              "alt": "https://movie.douban.com/celebrity/1054510/",
              "id": "1054510"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39452.webp"
              },
              "name_en": "Takeshi Kitano",
              "name": "北野武",
              "alt": "https://movie.douban.com/celebrity/1054423/",
              "id": "1054423"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22658.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22658.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22658.webp"
              },
              "name_en": "Andrey Konchalovskiy",
              "name": "安德烈·康查洛夫斯基",
              "alt": "https://movie.douban.com/celebrity/1103766/",
              "id": "1103766"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369295800.98.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369295800.98.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1369295800.98.webp"
              },
              "name_en": "Claude Lelouch",
              "name": "克洛德·勒卢什",
              "alt": "https://movie.douban.com/celebrity/1041272/",
              "id": "1041272"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45960.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45960.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45960.webp"
              },
              "name_en": "Ken Loach",
              "name": "肯·洛奇",
              "alt": "https://movie.douban.com/celebrity/1019106/",
              "id": "1019106"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23582.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23582.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23582.webp"
              },
              "name_en": "David Lynch",
              "name": "大卫·林奇",
              "alt": "https://movie.douban.com/celebrity/1054578/",
              "id": "1054578"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353034774.49.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353034774.49.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1353034774.49.webp"
              },
              "name_en": "Nanni Moretti",
              "name": "南尼·莫莱蒂",
              "alt": "https://movie.douban.com/celebrity/1022980/",
              "id": "1022980"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366303762.72.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366303762.72.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366303762.72.webp"
              },
              "name_en": "Roman Polanski",
              "name": "罗曼·波兰斯基",
              "alt": "https://movie.douban.com/celebrity/1054420/",
              "id": "1054420"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2914.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2914.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2914.webp"
              },
              "name_en": "Raoul Ruiz",
              "name": "拉乌·鲁兹",
              "alt": "https://movie.douban.com/celebrity/1054276/",
              "id": "1054276"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3107.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3107.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3107.webp"
              },
              "name_en": "Walter Salles",
              "name": "沃尔特·塞勒斯",
              "alt": "https://movie.douban.com/celebrity/1000292/",
              "id": "1000292"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1376352145.06.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1376352145.06.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1376352145.06.webp"
              },
              "name_en": "Elia Suleiman",
              "name": "伊利亚·苏雷曼",
              "alt": "https://movie.douban.com/celebrity/1023020/",
              "id": "1023020"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p842.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p842.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p842.webp"
              },
              "name_en": "Ming-liang Tsai",
              "name": "蔡明亮",
              "alt": "https://movie.douban.com/celebrity/1054505/",
              "id": "1054505"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p461.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p461.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p461.webp"
              },
              "name_en": "Gus Van Sant",
              "name": "格斯·范·桑特",
              "alt": "https://movie.douban.com/celebrity/1041021/",
              "id": "1041021"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378043103.46.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378043103.46.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378043103.46.webp"
              },
              "name_en": "Lars von Trier",
              "name": "拉斯·冯·提尔",
              "alt": "https://movie.douban.com/celebrity/1056007/",
              "id": "1056007"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p569.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p569.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p569.webp"
              },
              "name_en": "Wim Wenders",
              "name": "维姆·文德斯",
              "alt": "https://movie.douban.com/celebrity/1054402/",
              "id": "1054402"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418226223.7.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418226223.7.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418226223.7.webp"
              },
              "name_en": "Kar Wai Wong",
              "name": "王家卫",
              "alt": "https://movie.douban.com/celebrity/1041024/",
              "id": "1041024"
            },
            {
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p568.webp"
              },
              "name_en": "Yimou Zhang",
              "name": "张艺谋",
              "alt": "https://movie.douban.com/celebrity/1054398/",
              "id": "1054398"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.webp"
              },
              "name_en": "Kaige Chen",
              "name": "陈凯歌",
              "alt": "https://movie.douban.com/celebrity/1023040/",
              "id": "1023040"
            }
          ],
          "pubdates": [
            "2007-05-20(戛纳电影节)"
          ],
          "year": "2007",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p541907314.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p541907314.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p541907314.webp"
          },
          "alt": "https://movie.douban.com/subject/2027945/",
          "id": "2027945"
        }
      ]
      this.searchResults = this.filterSearchResult(data)
      console.log(this.searchResults)
      this.$watch('query', debounce((newQuery) => {
        this.search(newQuery)
      }, 200))
    },
    methods: {
      clear(){
        this.query = ''
      },
      search(query){
        console.log(query)
      },
      filterSearchResult(data){
        return data.map(item => {
          return {
            title: item.title,
            genres: item.genres,
            id: item.id
          }
        })
      },
      clickSearchItem(id){
        wx.navigateTo({
          url: '/pages/movieDetail/main?id=' + id
        })
      }
    },
    components: {
      NoResult
    },
    computed: {
      showNoResult(){
        return !this.query
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../../common/less/mixin.less';

  .search-page {
    height: 100%;
    overflow: hidden;
    .no-result-wrapper {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .search-box-wrapper {
      box-sizing: border-box;
      background: #ddd;
      border: 1px solid #7e8c8d;
      .search-box {
        padding: 0 6px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        .search-text {
          flex: 1;
          margin: 0 8px;
          line-height: 18px;
          font-size: 14px;
        }
        .search-img, .clear-img {
          width: 24px;
          height: 24px;
          .extend-click();
        }
      }
    }
    .list-wrapper {
      .list-scroll {
        height: 400px;
        overflow: hidden;
        .list-inner {
          padding: 0 20px;
          .list-item {
            display: flex;
            align-items: center;
            width: 100%;
            height: 36px;
            overflow: hidden;
            .item-img {
              flex: 0 0 32px;
              width: 32px;
              height: 32px;
            }
            .item-title {
              margin-left: 5px;
              flex: 1 1 auto;
              height: 36px;
              line-height: 36px;
              width: auto;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .item-genre {
              margin-left: 4px;
              padding: 1px 2px;
              float: right;
              min-width: 25px;
              height: 16px;
              line-height: 16px;
              font-size: 12px;
              color: #25B423;
              border-radius: 5px;
              border: 1px solid #25B423;
            }
          }
        }
      }
    }
  }
</style>
