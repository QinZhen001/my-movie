<template>
  <div class="movie-page">
    <img class="movie-detail-bg" :src="movieDetail.image" v-if="movieDetail.image"/>
    <div class="movie-info-wrapper">
      <img class="poster-img" :src="movieDetail.image" alt="">
      <h5 class="movie-title">{{movieDetail.title}}</h5>
      <div class="info-item movie-score">
        <span class="info-item-text">评分:</span>
        {{movieDetail.score === 0 ? '暂无' : movieDetail.score}}
        <div class="star-wrapper">
          <star :score="movieDetail.score"></star>
        </div>
      </div>
      <div class="info-item movie-directors">
        <span class="info-item-text">导演:</span>
        <span class="director" v-for="director in movieDetail.directors" :key="director">{{director}}</span>
      </div>
      <div class="info-item main-actors">
        <span class="info-item-text">主演:</span>
        <span class="actor" v-for="actor in movieDetail.mainActors">{{actor}}</span>
      </div>
      <div class="summary">
        <p class="summary-title">摘要:</p>
        <p class="summary-text">{{movieDetail.summary}}</p>
      </div>
      <div class="video-wrapper" v-if="movieDetail.trailer_url">
        <video id="myVideo" :src="movieDetail.trailer_url" controls="true"></video>
      </div>
    </div>
    <div class="reviews-wrapper" v-if="this.reviews">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Star from '../../components/star.vue'

  export default{
    data(){
      return {
        id: '',
        movieDetail: {
          "rating": {
            "max": 10,
            "average": 7.3,
            "details": {
              "1": 112.0,
              "2": 569.0,
              "3": 2535.0,
              "4": 2364.0,
              "5": 787.0
            },
            "stars": "35",
            "min": 0
          },
          "reviews_count": 170,
          "videos": [],
          "wish_count": 8077,
          "original_title": "Solo: A Star Wars Story",
          "blooper_urls": [
            "http://vt1.doubanio.com/201805281909/5d5c372bd8d124d5595dfbe0909f9384/view/movie/M/302310360.mp4",
            "http://vt1.doubanio.com/201805281909/aed943c9b26cf8ab4b7b508b23645dca/view/movie/M/302090871.mp4"
          ],
          "collect_count": 12564,
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg"
          },
          "douban_site": "",
          "year": "2018",
          "popular_comments": [
            {
              "rating": {
                "max": 5,
                "value": 3.0,
                "min": 0
              },
              "useful_count": 38,
              "author": {
                "uid": "cyrus_wong",
                "avatar": "https://img3.doubanio.com/icon/u62974457-11.jpg",
                "signature": "微信公众账号：wali-movie",
                "alt": "https://www.douban.com/people/cyrus_wong/",
                "id": "62974457",
                "name": "瓦力"
              },
              "subject_id": "25900947",
              "content": "为弥补没有激光剑斗的遗憾，让达斯魔现身亮剑留续集尾巴..对于我这种只看过真人电影版的真是一脸懵逼，当年这货腰斩都能不死？那杜库真可怜啊被砍了脑袋...这么说斯诺克也要在《星战9》复活了吧？朗霍华德临危受命也难以挽救本片的乏味，更惨的是贝坦尼，本月他在内地银幕被迪士尼搞死3次了...5.5/10",
              "created_at": "2018-05-24 16:39:20",
              "id": "1378663714"
            },
            {
              "rating": {
                "max": 5,
                "value": 2.0,
                "min": 0
              },
              "useful_count": 57,
              "author": {
                "uid": "yangshuangblue",
                "avatar": "https://img1.doubanio.com/icon/u1761378-208.jpg",
                "signature": "Hors milieu",
                "alt": "https://www.douban.com/people/yangshuangblue/",
                "id": "1761378",
                "name": "牛腩羊耳朵"
              },
              "subject_id": "25900947",
              "content": "两位主角化学反应为零",
              "created_at": "2018-05-16 22:08:05",
              "id": "1374582878"
            },
            {
              "rating": {
                "max": 5,
                "value": 1.0,
                "min": 0
              },
              "useful_count": 97,
              "author": {
                "uid": "3346015",
                "avatar": "https://img3.doubanio.com/icon/u3346015-2.jpg",
                "signature": "",
                "alt": "https://www.douban.com/people/3346015/",
                "id": "3346015",
                "name": "est-formula0"
              },
              "subject_id": "25900947",
              "content": "一脸懵逼，这是星球大战？这是han solo?很想把这个一脸猥琐只会莫名邪魅一笑的傻子叉出去！最后出现的xx让我整个人都混乱了，黑人问号无限连？？？",
              "created_at": "2018-05-16 04:30:56",
              "id": "1374242088"
            },
            {
              "rating": {
                "max": 5,
                "value": 2.0,
                "min": 0
              },
              "useful_count": 209,
              "author": {
                "uid": "108719440",
                "avatar": "https://img3.doubanio.com/icon/u108719440-1.jpg",
                "signature": "",
                "alt": "https://www.douban.com/people/108719440/",
                "id": "108719440",
                "name": "洋聪电影"
              },
              "subject_id": "25900947",
              "content": "迪士尼真是榨汁机，星战都要被榨干了，还有漫威迟早有榨干的一天……还是卢卡斯好，善良的农场主，养了这么多年的星战都舍不得杀，直接卖",
              "created_at": "2018-05-16 09:22:12",
              "id": "1374280478"
            }
          ],
          "alt": "https://movie.douban.com/subject/25900947/",
          "id": "25900947",
          "mobile_url": "https://movie.douban.com/subject/25900947/mobile",
          "photos_count": 380,
          "pubdate": "2018-05-25",
          "title": "游侠索罗：星球大战外传",
          "do_count": null,
          "has_video": false,
          "share_url": "https://m.douban.com/movie/subject/25900947",
          "seasons_count": null,
          "languages": [
            "英语"
          ],
          "schedule_url": "https://movie.douban.com/subject/25900947/cinema/",
          "writers": [
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375067505.96.jpg",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375067505.96.jpg",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375067505.96.jpg"
              },
              "name_en": "Jon Kasden",
              "name": "乔恩·卡斯丹",
              "alt": "https://movie.douban.com/celebrity/1332069/",
              "id": "1332069"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375168892.91.jpg",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375168892.91.jpg",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1375168892.91.jpg"
              },
              "name_en": "Lawrence Kasdan",
              "name": "劳伦斯·卡斯丹",
              "alt": "https://movie.douban.com/celebrity/1014071/",
              "id": "1014071"
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p650.jpg",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p650.jpg",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p650.jpg"
              },
              "name_en": "George Lucas",
              "name": "乔治·卢卡斯",
              "alt": "https://movie.douban.com/celebrity/1054507/",
              "id": "1054507"
            }
          ],
          "pubdates": [
            "2018-05-10(洛杉矶首映)",
            "2018-05-25(美国)",
            "2018-05-25(中国大陆)"
          ],
          "website": "www.starwars.com/solo",
          "tags": [
            "科幻",
            "美国",
            "2018",
            "冒险",
            "动作",
            "太空",
            "经典",
            "迪士尼",
            "外传",
            "史诗"
          ],
          "has_schedule": true,
          "durations": [
            "135分钟"
          ],
          "genres": [
            "动作",
            "科幻",
            "冒险"
          ],
          "collection": null,
          "trailers": [
            {
              "medium": "https://img3.doubanio.com/img/trailer/medium/2522432395.jpg?",
              "title": "香港预告片 (中文字幕)",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/231159/",
              "small": "https://img3.doubanio.com/img/trailer/small/2522432395.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/3ec6c5a6189e7923245149ec5c858f16/view/movie/M/302310159.mp4",
              "id": "231159"
            },
            {
              "medium": "https://img3.doubanio.com/img/trailer/medium/2521154535.jpg?",
              "title": "中国预告片：终极版 (中文字幕)",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/230539/",
              "small": "https://img3.doubanio.com/img/trailer/small/2521154535.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/f3b05239f658cbce008fe0e4536394b8/view/movie/M/302300539.mp4",
              "id": "230539"
            },
            {
              "medium": "https://img3.doubanio.com/img/trailer/medium/2518748664.jpg?",
              "title": "中国预告片 (中文字幕)",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/229583/",
              "small": "https://img3.doubanio.com/img/trailer/small/2518748664.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/0357648b65dd20836299b7515a3e927c/view/movie/M/302290583.mp4",
              "id": "229583"
            },
            {
              "medium": "https://img3.doubanio.com/img/trailer/medium/2512738120.jpg?",
              "title": "电视版：超级碗版 (中文字幕)",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/227124/",
              "small": "https://img3.doubanio.com/img/trailer/small/2512738120.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/e58c5a23752f7c6dc9239fa05023300e/view/movie/M/302270124.mp4",
              "id": "227124"
            }
          ],
          "episodes_count": null,
          "trailer_urls": [
            "http://vt1.doubanio.com/201805281909/3ec6c5a6189e7923245149ec5c858f16/view/movie/M/302310159.mp4",
            "http://vt1.doubanio.com/201805281909/f3b05239f658cbce008fe0e4536394b8/view/movie/M/302300539.mp4",
            "http://vt1.doubanio.com/201805281909/0357648b65dd20836299b7515a3e927c/view/movie/M/302290583.mp4",
            "http://vt1.doubanio.com/201805281909/e58c5a23752f7c6dc9239fa05023300e/view/movie/M/302270124.mp4"
          ],
          "has_ticket": true,
          "bloopers": [
            {
              "medium": "https://img1.doubanio.com/img/trailer/medium/2522868807.jpg?",
              "title": "其它花絮",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/231360/",
              "small": "https://img1.doubanio.com/img/trailer/small/2522868807.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/5d5c372bd8d124d5595dfbe0909f9384/view/movie/M/302310360.mp4",
              "id": "231360"
            },
            {
              "medium": "https://img3.doubanio.com/img/trailer/medium/2410348132.jpg?",
              "title": "其它花絮：星球大战周年庆典",
              "subject_id": "25900947",
              "alt": "https://movie.douban.com/trailer/209871/",
              "small": "https://img3.doubanio.com/img/trailer/small/2410348132.jpg?",
              "resource_url": "http://vt1.doubanio.com/201805281909/aed943c9b26cf8ab4b7b508b23645dca/view/movie/M/302090871.mp4",
              "id": "209871"
            }
          ],
          "clip_urls": [],
          "current_season": null,
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
            },
            {
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1466186775.21.jpg",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1466186775.21.jpg",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1466186775.21.jpg"
              },
              "name_en": "Donald Glover",
              "name": "唐纳德·格洛弗",
              "alt": "https://movie.douban.com/celebrity/1314061/",
              "id": "1314061"
            }
          ],
          "countries": [
            "美国"
          ],
          "mainland_pubdate": "2018-05-25",
          "photos": [
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2513317213.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2513317213.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2513317213.jpg",
              "alt": "https://movie.douban.com/photos/photo/2513317213/",
              "id": "2513317213",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2513317213.jpg"
            },
            {
              "thumb": "https://img1.doubanio.com/view/photo/thumb/public/p2523263029.jpg",
              "image": "https://img1.doubanio.com/view/photo/photo/public/p2523263029.jpg",
              "cover": "https://img1.doubanio.com/view/photo/albumcover/public/p2523263029.jpg",
              "alt": "https://movie.douban.com/photos/photo/2523263029/",
              "id": "2523263029",
              "icon": "https://img1.doubanio.com/view/photo/icon/public/p2523263029.jpg"
            },
            {
              "thumb": "https://img1.doubanio.com/view/photo/thumb/public/p2522450838.jpg",
              "image": "https://img1.doubanio.com/view/photo/photo/public/p2522450838.jpg",
              "cover": "https://img1.doubanio.com/view/photo/albumcover/public/p2522450838.jpg",
              "alt": "https://movie.douban.com/photos/photo/2522450838/",
              "id": "2522450838",
              "icon": "https://img1.doubanio.com/view/photo/icon/public/p2522450838.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2522450826.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2522450826.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2522450826.jpg",
              "alt": "https://movie.douban.com/photos/photo/2522450826/",
              "id": "2522450826",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2522450826.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2518879791.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2518879791.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2518879791.jpg",
              "alt": "https://movie.douban.com/photos/photo/2518879791/",
              "id": "2518879791",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2518879791.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2513317196.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2513317196.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2513317196.jpg",
              "alt": "https://movie.douban.com/photos/photo/2513317196/",
              "id": "2513317196",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2513317196.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2512715920.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2512715920.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2512715920.jpg",
              "alt": "https://movie.douban.com/photos/photo/2512715920/",
              "id": "2512715920",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2512715920.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2512715585.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2512715585.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2512715585.jpg",
              "alt": "https://movie.douban.com/photos/photo/2512715585/",
              "id": "2512715585",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2512715585.jpg"
            },
            {
              "thumb": "https://img1.doubanio.com/view/photo/thumb/public/p2523048948.jpg",
              "image": "https://img1.doubanio.com/view/photo/photo/public/p2523048948.jpg",
              "cover": "https://img1.doubanio.com/view/photo/albumcover/public/p2523048948.jpg",
              "alt": "https://movie.douban.com/photos/photo/2523048948/",
              "id": "2523048948",
              "icon": "https://img1.doubanio.com/view/photo/icon/public/p2523048948.jpg"
            },
            {
              "thumb": "https://img3.doubanio.com/view/photo/thumb/public/p2523048944.jpg",
              "image": "https://img3.doubanio.com/view/photo/photo/public/p2523048944.jpg",
              "cover": "https://img3.doubanio.com/view/photo/albumcover/public/p2523048944.jpg",
              "alt": "https://movie.douban.com/photos/photo/2523048944/",
              "id": "2523048944",
              "icon": "https://img3.doubanio.com/view/photo/icon/public/p2523048944.jpg"
            }
          ],
          "summary": "在《游侠索罗》（暂译）中，影迷们将跟随“千年隼号”及银河系中最受爱戴的“恶棍”韩·索罗，迎来全新的银河系探险旅程。经过在黑暗危险的罪犯地下社会中的重重冒险，韩·索罗遇见了他未来强大的副驾驶丘巴卡、以及臭名昭著的赌徒兰多·卡瑞辛，共同展开了一场星战传奇中最不“正统”的英雄历程。",
          "clips": [],
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
          "comments_count": 4743,
          "popular_reviews": [
            {
              "rating": {
                "max": 5,
                "value": 5.0,
                "min": 0
              },
              "title": "《游侠索罗》彩蛋梳理与《汉·索罗三部曲》小说概述",
              "subject_id": "25900947",
              "author": {
                "uid": "45489788",
                "avatar": "https://img3.doubanio.com/icon/u45489788-2.jpg",
                "signature": "May the Force Be with You",
                "alt": "https://www.douban.com/people/45489788/",
                "id": "45489788",
                "name": "南方战士"
              },
              "summary": "本文分三部分。 第一部分是《游侠索罗》的原创载具和兵种 第二部分是《游侠索罗》的彩蛋、致敬、渊源和梗的梳理。 第三部分是对官方小说《汉·索罗三部曲》的概述以及小说和电影的比较。 一、《游侠索罗》的原创...",
              "alt": "https://movie.douban.com/review/9392304/",
              "id": "9392304"
            },
            {
              "rating": {
                "max": 5,
                "value": 4.0,
                "min": 0
              },
              "title": "对不起，这部《星球大战外传》不应该被这么贬低！",
              "subject_id": "25900947",
              "author": {
                "uid": "reave",
                "avatar": "https://img1.doubanio.com/icon/u1752908-27.jpg",
                "signature": "无话可说",
                "alt": "https://www.douban.com/people/reave/",
                "id": "1752908",
                "name": "谢谢你们的鱼"
              },
              "summary": "感觉上，这两年开始，内地的大V还有很多电影类微信号对于好莱坞电影越来越不友好了，大V们天天贬低好莱坞电影，鼓吹着中国电影还未真正成型的工业体系，顺便拿着中美的文化差异可劲儿唱衰引进片的商业价值，一部...",
              "alt": "https://movie.douban.com/review/9394579/",
              "id": "9394579"
            },
            {
              "rating": {
                "max": 5,
                "value": 5.0,
                "min": 0
              },
              "title": "记录一些挺有趣的小细节",
              "subject_id": "25900947",
              "author": {
                "uid": "pudengxuaner",
                "avatar": "https://img3.doubanio.com/icon/u2710488-76.jpg",
                "signature": "我没有在打游戏我在画画",
                "alt": "https://www.douban.com/people/pudengxuaner/",
                "id": "2710488",
                "name": "Sash"
              },
              "summary": "千年隼的逃生舱飞了 所以一直缺一块 千年隼不需要逃生舱 人在船在 千年隼的样子很奇怪 所以扁扁得很好侧飞 千年隼的天线也飞了 后来换了几次了 千年隼 Tie战机的克星 同时瞄准系统我一直都觉得也太难了吧 千年隼...",
              "alt": "https://movie.douban.com/review/9393242/",
              "id": "9393242"
            },
            {
              "rating": {
                "max": 5,
                "value": 5.0,
                "min": 0
              },
              "title": "惊世骇俗的LGBTQ太空言情片",
              "subject_id": "25900947",
              "author": {
                "uid": "3056342",
                "avatar": "https://img3.doubanio.com/icon/u3056342-2.jpg",
                "signature": "",
                "alt": "https://www.douban.com/people/3056342/",
                "id": "3056342",
                "name": "Royma"
              },
              "summary": "漫威超级英雄电影这些年来走向火爆，当中有一种现象值得留意——所谓的“官方卖腐”。有耽美类作品的爱好者，喜欢把部分MCU的英雄进行“10配对”，譬如“盾铁”“锤基”之类。官方似乎也有所迎合这种风气，增加“...",
              "alt": "https://movie.douban.com/review/9397786/",
              "id": "9397786"
            },
            {
              "rating": {
                "max": 5,
                "value": 3.0,
                "min": 0
              },
              "title": "王晶导演应该找迪士尼和卢卡斯影业要版权费",
              "subject_id": "25900947",
              "author": {
                "uid": "mbbbbbbbcker",
                "avatar": "https://img3.doubanio.com/icon/u45066005-6.jpg",
                "signature": "你們中出了一個叛徒",
                "alt": "https://www.douban.com/people/mbbbbbbbcker/",
                "id": "45066005",
                "name": "马泽尔法克尔"
              },
              "summary": "重要剧透：男主角在电影的最后活了下来，但是没有和女主角在一起。 如果上面的剧透还没看过瘾，那么请继续往下看。 故事围绕着长得像壮阳药的超级燃料展开。主角韩和青梅竹马的女朋友Qi'ra成长在一个看上去没什么...",
              "alt": "https://movie.douban.com/review/9391598/",
              "id": "9391598"
            },
            {
              "rating": {
                "max": 5,
                "value": 3.0,
                "min": 0
              },
              "title": "聊聊《游侠索罗》中的星战梗",
              "subject_id": "25900947",
              "author": {
                "uid": "EverybodyFool",
                "avatar": "https://img1.doubanio.com/icon/u37142357-8.jpg",
                "signature": "Be water, my friend.",
                "alt": "https://www.douban.com/people/EverybodyFool/",
                "id": "37142357",
                "name": "彩蛋君KL"
              },
              "summary": "*文中有剧透，请绕道行驶。 （配图版编辑中……） 经典片头 熟悉星战系列的观众都知道，电影开场必先出现一句序言“A long time ago in a galaxy far, far away”（很久很久以前，在一个遥远的银河系），紧接着经...",
              "alt": "https://movie.douban.com/review/9393826/",
              "id": "9393826"
            },
            {
              "rating": {
                "max": 5,
                "value": 4.0,
                "min": 0
              },
              "title": "《韩索罗》——从科幻电影到科幻+电影",
              "subject_id": "25900947",
              "author": {
                "uid": "liyishu",
                "avatar": "https://img1.doubanio.com/icon/u1189323-219.jpg",
                "signature": "有不错的剧本项目欢迎来找我",
                "alt": "https://www.douban.com/people/liyishu/",
                "id": "1189323",
                "name": "写剧本的李亦树"
              },
              "summary": "《韩索罗》的价值在于存在本身。作为一部星战外传电影，显得很不星战，竟然没有光剑和原力。而另一方面电影又非常星战，讲解了星战最有趣平民角色韩索罗的人物前史。在星战正传续集越发难看的今天，（我是指，新...",
              "alt": "https://movie.douban.com/review/9394702/",
              "id": "9394702"
            },
            {
              "rating": {
                "max": 5,
                "value": 2.0,
                "min": 0
              },
              "title": "我们真的需要这部“外传”（前传）吗？",
              "subject_id": "25900947",
              "author": {
                "uid": "gegemoon",
                "avatar": "https://img3.doubanio.com/icon/u2447648-24.jpg",
                "signature": "豆邮要资源的死全家",
                "alt": "https://www.douban.com/people/gegemoon/",
                "id": "2447648",
                "name": "gegemoon"
              },
              "summary": "不需要。 本影评前半部分不涉及剧透，后半部分将有完全剧透吐槽。请按需谨慎阅读。 作为一个伪星战粉，看过所有电影，但是经常叫不出人名字，彩蛋也只能认全一半，在戛纳看首映纯属凑热闹。因为工作日程接近尾声...",
              "alt": "https://movie.douban.com/review/9371063/",
              "id": "9371063"
            },
            {
              "rating": {
                "max": 5,
                "value": 4.0,
                "min": 0
              },
              "title": "骂够了吗？骂够了我夸几句",
              "subject_id": "25900947",
              "author": {
                "uid": "175293106",
                "avatar": "https://img3.doubanio.com/icon/u175293106-4.jpg",
                "signature": "有料、有趣、有逼格",
                "alt": "https://www.douban.com/people/175293106/",
                "id": "175293106",
                "name": "电影幕后故事"
              },
              "summary": "本文首发于电影幕后故事微信公众号（微信号“saymovie”），欢迎关注，看幕后君第一时间为你评新片，品经典。 《游侠索罗：星球大战外传》全球扑街！ 作为比肩漫威的超级大IP,星战系列虽然在国内不温不火，但在欧...",
              "alt": "https://movie.douban.com/review/9395280/",
              "id": "9395280"
            },
            {
              "rating": {
                "max": 5,
                "value": 2.0,
                "min": 0
              },
              "title": "过度消费的星战IP",
              "subject_id": "25900947",
              "author": {
                "uid": "157783465",
                "avatar": "https://img3.doubanio.com/icon/u157783465-2.jpg",
                "signature": "",
                "alt": "https://www.douban.com/people/157783465/",
                "id": "157783465",
                "name": "在下大福老师"
              },
              "summary": "从观影体验上来说，这是一部流畅的爆米花电影，对于没有看过或者不太熟悉星战系列的观众来说十分友好。首先，本片对于新观众的优势在于它和星战系列剧情的关联不大，人们无需恶补星战知识就能看懂剧情；其次，套...",
              "alt": "https://movie.douban.com/review/9390876/",
              "id": "9390876"
            }
          ],
          "ratings_count": 11764,
          "aka": [
            "韩索罗：星球大战外传(港)",
            "星球大战外传：游侠索罗",
            "星球大战外传：索罗",
            "星球大战韩·索罗外传",
            "游侠索罗",
            "韩索罗外传",
            "星战外传2"
          ]

        }
      }
    },
    mounted(){
      this.id = this.$root.$mp.query.id
      this.movieDetail = this.filterMovieDetail(this.movieDetail)
      this.reviews = this.filterMovieRevies(this.movieDetail)
      console.log(this.movieDetail)
    },
    methods: {
      filterMovieDetail(movieDetail){
        return {
          id: movieDetail.id,
          title: movieDetail.title,
          score: movieDetail.rating.average,
          image: movieDetail.images.small,
          mainActors: movieDetail.casts.map(item => { return item.name }),
          directors: movieDetail.directors.map(item => { return item.name }),
          summary: movieDetail.summary,
          countries: movieDetail.countries,
          trailer_url: movieDetail.trailer_urls[0]
        }
      },
      filterMovieRevies(movieDetail){
        return movieDetail.popular_reviews
      }
    },
    components: {
      Star
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .movie-page {
    .movie-detail-bg {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(3px);
      opacity: .2;
    }
    .movie-info-wrapper {
      padding: 20px 10% 10px 10%;
      .poster-img {
        height: 400px;
        width: 100%;
      }
      .movie-title {
        height: 22px;
        text-align: center;
        line-height: 22px;
        font-size: 16px;
        color: #444;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .info-item {
        margin-top: 10px;
        color: #333;
        font-size: 12px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .info-item-text {
          margin-right: 5px;
        }
        .director, .actor {
          margin-right: 5px;
        }
      }
      .movie-score {
        .star-wrapper {
          float: right;
          display: inline-block;
        }
      }
      .summary {
        margin-top: 20px;
        .summary-title {
          font-weight: 600;
          font-size: 14px;
        }
        .summary-text {
          margin-top: 10px;
          line-height: 16px;
          font-size: 12px;
          text-indent: 2em;
          font-weight: normal;
        }
      }
      .video-wrapper {
        margin-top: 25px;
      }
    }
    .reviews-wrapper {
      margin-top: 25px;
      width: 100%;
    }
  }
</style>
