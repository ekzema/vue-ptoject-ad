<template>
    <v-container>
        <v-layout row v-if="!loading && myAds !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card class="elevation-10 mb-3" v-for="ad of myAds" :key="ad.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                                    :src="ad.imageSrc"
                                    height="160px"
                            ></v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--secondary mb-3">{{ad.title}}</h2>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn :to="'/ad/'+ad.id" class="info">Open</v-btn>
                                </v-card-actions>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loading && myAds === 0">
            <v-flex xs12 class="text-xs-center">
                <h1 class="text--primary">You have no ads</h1>
            </v-flex>
        </v-layout>
        <v-layout v-else>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                        :size="100"
                        :width="4"
                        color="purple"
                        indeterminate
                ></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
