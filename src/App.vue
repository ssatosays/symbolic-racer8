<template>
  <div id="app">
    <div class="text-start ms-2 mb-3">
      <div>
        <h5 class="title">symbolic-racer8</h5>
      </div>
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
  margin-top: 30px;
}
.map {
  height: 550px;
  width: 100%;
}
.pointer {
  cursor: pointer;
}
.modal-inner {
  height: 350px;
}
</style>
