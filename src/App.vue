<template>
  <div id="app">
    <div class="text-start ms-2 mb-3">
      <!-- <div>
        <h5 class="title">symbolic-racer8</h5>
      </div> -->
      <div>
        <b-button class="btn-sm" variant="outline-primary" @click="initScalingAndPosition">init</b-button>
        <b-button class="btn-sm ms-2" variant="outline-primary" @click="initScaling">init scaling</b-button>
        <b-button class="btn-sm ms-2" variant="outline-primary" @click="initPosition">init position</b-button>
      </div>
    </div>
    <div v-if="debug" class="text-start mt-1 mb-1 bg-warning">
      <div>zoom: {{ zoom }}</div>
      <div>center: {{ center }}</div>
    </div>
    <div class="map">
      <l-map
        :zoom="zoom"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        ></l-tile-layer>
        <template v-for="(marker, idx) in markers">
          <l-marker :lat-lng="marker.latLng" :visible="marker.visible" :key="idx">
            <l-popup>
              <div class="pointer" @click="clickPopup(marker.code)">{{ marker.name }}</div>
            </l-popup>
          </l-marker>
        </template>
      </l-map>
    </div>
    <div class="text-start ms-2 mt-3">
      <div class="mb-1">
        ・ 板倉さんのYouTube企画「ハイエース一人旅」で行かれていた場所をマッピングしてみました。<br />
        ・ ポップアップをクリックすると動画がモーダル表示されます。
      </div>
      <div>
        <b-button
          class="btn-sm"
          variant="outline-success"
          href="https://www.youtube.com/@user-dk9ms9rh1d"
        >板倉 趣味チャンネル(YouTube)</b-button>
      </div>
      <div class="mt-2">
        <b-button
          class="btn-sm"
          variant="outline-success"
          href="https://twitter.com/itazuratoshiyuk"
        >板倉さんのTwitter</b-button>
        <b-button
          class="btn-sm ms-2"
          variant="outline-success"
          href="https://twitter.com/itakurasyumiCh"
        >板倉趣味チャンネルスタッフ さいとうちゃんのTwitter</b-button>
      </div>
      <div class="mt-2">
        <b-button
          class="btn-sm"
          variant="outline-success"
          href="https://suzuri.jp/itakura-ch"
        >ストア(suzuri)</b-button>
      </div>
    </div>
    <b-modal ref="modal" hide-header-close ok-only>
      <div class="modal-inner">
        <iframe
          width="100%"
          height="100%"
          :src="youtubeUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { latLng } from "leaflet"

export default {
  name: 'App',
  components: {
  },
  data() {
    const minZoom = 0
    const maxZoom = 18
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    return {
      debug: false,
      zoom: 0,
      minZoom: minZoom,
      maxZoom: maxZoom,
      center: null,
      url: url,
      attribution: attribution,
      markers: [
        {
          name: '東京駅',
          latLng: latLng(35.681235294054765, 139.76712523292755),
          visible: true,
          code: ''
        },
        {
          name: 'RVパーク 甲州市勝沼 ぶどうの丘', // 1th
          latLng: latLng(35.673240140957205, 138.73579703736712),
          visible: true,
          code: 'xqZYod_atfY'
        },
        {
          name: 'RVパーク ヘリテイジ美の山', // 2th
          latLng: latLng(36.06632357666182, 139.11613247189374),
          visible: true,
          code: '_TlIq94TZi0'
        },
        {
          name: '美の山公園', // 3th
          latLng: latLng(36.053520817625746, 139.11299614042457),
          visible: true,
          code: 'fgqg2RPVwtw'
        },
        {
          name: 'RVパーク 七里川', // 4th
          latLng: latLng(35.2168524847308, 140.13591765572258),
          visible: true,
          code: 'W2aEWkKRwNk'
        },
        {
          name: 'RVパーク 七里川', // 5th
          latLng: latLng(35.217033599755794, 140.13485565649597),
          visible: true,
          code: 'rkwDRaLJsL4'
        },
        {
          name: '長池親水公園', // 6th
          latLng: latLng(35.42704072619624, 138.87118703895496),
          visible: true,
          code: 'O2j41-q6vtU'
        },
        {
          name: '青根キャンプ場', // 7th
          latLng: latLng(35.54843760181532, 139.13728809810797),
          visible: true,
          code: 'XQRVk-enarY'
        },
        {
          name: '湯河原温泉神谷キャンプ場', // 8th
          latLng: latLng(35.154880791619796, 139.07415324866656),
          visible: true,
          code: 'NvpQt3fmBHc'
        },
        {
          name: 'RVパークsmart 山の駅 養老渓谷 喜楽里', // 9th
          latLng: latLng(35.24134038765043, 140.17163616291464),
          visible: true,
          code: 'N0DatS4GyMI'
        },
        {
          name: 'ネイチャーランドオム', // 10th
          latLng: latLng(35.52447139267352, 139.03950733914553),
          visible: true,
          code: 'pCFyqzMeGaw'
        },
        {
          name: 'ネイチャーランドオム', // 11th
          latLng: latLng(35.52441900155076, 139.03917206300693),
          visible: true,
          code: 'dS9Po2_aHL4'
        },
        {
          name: 'RVパーク 八ヶ岳高原「原村」 もみの木', // 12th
          latLng: latLng(35.96659089134671, 138.25516511535548),
          visible: true,
          code: 'AiuLqVzr3bc'
        },
        {
          name: 'RVパーク 蓼科パークホテル', // 13th
          latLng: latLng(36.03803968224812, 138.27021410255347),
          visible: true,
          code: 'ho3g8cxmFgY'
        },
        {
          name: 'さがざわキャンプ場', // 14th
          latLng: latLng(35.57558405384078, 139.06996812680984),
          visible: true,
          code: 'sDn5lokgMKw'
        },
        {
          name: 'いなかの風キャンプ場', // 15th
          latLng: latLng(35.680442550407975, 137.95138280701505),
          visible: true,
          code: 'FOl9yQOJvX8'
        },
        {
          name: 'RVパーク ゆーとろん水神の湯', // 16th
          latLng: latLng(35.91466729085403, 138.21192585565143),
          visible: true,
          code: 'j92P-EHCBoY'
        }
      ],
      youtubeUrl: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
    centerUpdated(center) {
      this.center = center
    },
    initScaling() {
      this.zoom = 9
    },
    initPosition() {
      this.center = latLng(35.681235294054765, 139.76712523292755)
    },
    initScalingAndPosition() {
      this.initScaling()
      this.initPosition()
    },
    init() {
      this.initScalingAndPosition()
    },
    clickPopup(code) {
      if (code === '') return
      this.youtubeUrl = 'https://www.youtube.com/embed/' + code
      this.$refs.modal.show()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.map {
  height: 600px;
  width: 100%;
}
.pointer {
  cursor: pointer;
}
.modal-inner {
  height: 350px;
}
</style>
