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
              <div @click="clickPopup(marker.code)" style="cursor: pointer">{{ marker.name }}</div>
            </l-popup>
          </l-marker>
        </template>
      </l-map>
    </div>
    <b-modal ref="modal" hide-header-close ok-only>
      <div style="height: 350px">
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
          code: 'Hsc__3CfA3Q'
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
</style>
