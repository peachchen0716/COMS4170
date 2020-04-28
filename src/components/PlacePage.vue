<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="mx-5">
      </div>
      <h3 class="my-4">
        {{ this.place.name }}
      </h3>
      <button class="btn btn-link m-4" @click="goBack">Back</button>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="nav nav-pills flex-column">
          <a class="nav-link" href="#"  
          v-for="feature in this.place.features" 
          :key="feature.id"
          @click="curFeature = feature.id">{{ feature.name }}</a>
        </div>
      </div>
      <div class="col-md-6">
        <img class="px-2 img-fluid rounded" :src="this.place.features[curFeature].url" :alt="this.place.features[curFeature].name">
      </div>
      <div class="col-md-3 text-left" id="feature-content">{{ this.place.features[curFeature].content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlacePage",
  data: function () {
    return {
      feature: 0,
      places: [
        {
          name: "Hagia Sophia",
          group: "",
          features: [
            {
              id: 0,
              name: "Cathedral & Mosque",
              content: "Hagia Sophia is a former Christian cathedral, later an Ottoman imperial mosque in Istanbul, Turkey.\n\n" + 
                       "It is famous for its large dome and is said to have changed the history of architecture\".",
              url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
            },
            {
              id: 1,
              name: "Minarets",
              content: "The minarets were an turkish addition and not part of the original church's Byzantine design.\n\n" +
                       "Each of these minarets is pencil-shaped.\n\n" +
                       "They are towers typically built into mosques to notify prayers.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Minarets_of_Hagia_Sophia%2C_Istanbul.jpg/320px-Minarets_of_Hagia_Sophia%2C_Istanbul.jpg",
            },
            {
              id: 2,
              name: "Dome",
              content: "The dome is an innovative and unique design stemmed from the Ottomans tradition.\n\n" + 
                       "The great dome is carried on four spherical triangular pendentives, and is 107 feet in diameter.",
              url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Istanbul_001.JPG",
            }
          ]
        },
        {
          name: "Blue Mosque",
          group: "",
          features: [
            {
              id: 0,
              name: "Last Mosque",
              content: "The design of Blue Mosque is the culmination of two centuries of Ottoman mosque development.\n\n" + 
                      "It incorporates many Byzantine elements of the neighboring Hagia Sophia with traditional Islamic architecture and is considered to be the last great mosque of the classical period.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/P1020390.JPG/1024px-P1020390.JPG",
            },
            {
              id: 1,
              name: "Minarets",
              content: "The Blue Mosque is one of the two mosques in Turkey that has six minarets.\n\n" +
                      "They were used to have prayer caller climb a narrow spiral staircase to announce the call to prayer.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blue_Mosque_2017.jpg/1024px-Blue_Mosque_2017.jpg",
            }
          ]
        },
        {
          name: "Taj Mahal",
          group: "india",
          features: [
            {
              id: '0',
              name: "Tomb",
              content: "The Taj Mahal incorporates and expands on design traditions of Persian tomb\n\n" +
              "It is an ivory-white marble structure on the south bank of the Yamuna river, India.\n\n" +
              "It was commissioned an Indian emperor to house the tomb of his beloved wife.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1024px-Taj_Mahal_%28Edited%29.jpeg",
            },
            {
              id: '1',
              name: "Dome",
              content: "Because of its shape, the dome is often called an onion dome.\n\n" +
              "The shape of the dome is emphasised by four smaller domed structures (kiosks) placed at its corners.",
              url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Dome_Chhatris_Spires_-_Taj_Mahal_-_Agra_2014-05-14_3805.JPG"
            },
            {
              id: '2',
              name: "Finial",
              content: "The finial was originally made of gold but was replaced by gilded bronze.\n\n" +
              "The finial is topped by a moon, a typical Islamic motif whose horns point heavenward.",
              url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Taj_Mahal_finial-1.jpg"
            }
          ]
        },
        {
          name: "Lakshmana Temple",
          group: "india",
          features: [
            {
              id: '0',
              name: "Temple",
              content: "The structure consists of typical elements of Hindu temple architecture. It has entrance porch, pillared hall, and inner sanctuary.\n\n" +
              "The Hindu shrine is surrounded by four subsidiary shrines.",
              url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Khajuraho-Lakshmana_temple.JPG"
            },
            {
              id: '1',
              name: "Main Idol",
              content: "Main idol of the temple is a tri-headed & four-armed sculpture of Vishnu.\n\n" + 
              "Vishnu is a Hindu god with the central head of human, and two sides of boar and lion.",
              url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Khajuraho_India%2C_Lakshman_Temple%2C_Sculpture_07.JPG"
            }
          ]
        },
        {
          name: "Ananda Temple",
          group: "sea",
          features: [
            {
              id: '0',
              name: "Temple",
              content: "The Buddhist temple is located in Bagan, Myanmar.\n\n" +
              "It is built with bricks and plaster depicting iconographic images to educate people in accordance with royal beliefs of Theravada Buddhism.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ananda-Temple-2.JPG/1024px-Ananda-Temple-2.JPG"
            },
            {
              id: '1',
              name: "Pagoda",
              content: "The top was covered by a small pagoda and an umbrella, which is the top ornament found in almost all pagodas in Myanmar.",
              url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Ananda_Temple_Bagan.jpg"
            }
          ]
        },
        {
          name: "Angkor Wat",
          group: "sea",
          features: [
            {
              id: '0',
              name: "City of Temples",
              content: "Angkor Wat is the largest religious monument in the world.\n\n" +
              "It was built as a Hindu temple dedicated to the god Vishnu, and was transformed into a Buddhist temple towards the end of the 12th century.",
              url: "https://www.ancient.eu/uploads/images/11887.jpg?v=1581580703"
            },
            {
              id: '1',
              name: "Angkor Wat Style",
              content: "Angkor Wat is the prime example of its own style — the Angkor Wat style.\n\n" + 
              "Most of the visible areas are skillfully built with sandstone blocks.\n\n" + 
              "Similar to Lakashama temple, Angkow Wat is based on cruciform terraces which appear along the main axis of the temple.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Angkor-Wat-from-the-air.JPG/640px-Angkor-Wat-from-the-air.JPG"
            },
            {
              id: '2',
              name: "Pagoda",
              content: "The tower is build on top of the central shrine.\n\n" + 
              "It is a typical Hindu tower shaped like lotus buds",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Angkor_Wat_Tempel_34.jpg/240px-Angkor_Wat_Tempel_34.jpg",
            }
          ]
        },
        {
          name: "Forbidden City",
          group: "east-asia",
          features: [
            {
              id: '0',
              name: "Imperial Palace",
              content: "The Forbidden City is a palace complex in Beijing, China. It was the former imperial residence of the Emperor of China.\n\n" +
              "The palace is a typical Chinese palatial architecture, and has influenced architectural developments in East Asia and elsewhere.",
              url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Forbidden_City_Beijing_%283019178959%29.jpg"
            },
            {
              id: '1',
              name: "Symbolism",
              content: "Yellow is the color of the Emperor.\n\n" + 
              "Thus almost all roofs in the Forbidden City bear yellow glazed tiles.",
              url: "https://www.tripsavvy.com/thmb/ejzDLwHDzOqWZn1Fu3z7xMt-1A8=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8082532155_f307da252d_k-592ed77b3df78cbe7edb69d6.jpg"
            },
            {
              id: '2',
              name: "Roof Decoration",
              content: "The sloping ridges of building roofs are decorated with a line of statue led by a man riding a phoenix and followed by an imperial dragon.",
              url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/HighStatusRoofDeco.jpg"
            }
          ]
        },
        {
          name: "Kinkaku-ji",
          group: "east-asia",
          features: [
            {
              id: '0',
              name: "Temple of the Golden Pavilion",
              content: "Kinkaku-ji is a Zen Buddhist temple in Kyoto, Japan.\n\n" +
              "The pavilion successfully incorporates three distinct styles of architecture, which are shinden, samurai and zen, specifically on each floor.",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG/1024px-Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG"
            },
            {
              id: '1',
              name: "Wealth",
              content: "Kinkaku-ji was built to echo the extravagant culture that developed in the wealthy aristocratic circles of Kyoto around 14th century.",
              url: "https://www.japan-guide.com/g18/3908_02.jpg"
            }
          ]
        }
      ]
    }
  },
  computed: {
    curFeature: {
      get: function () {
        return this.feature
      },
      set: function (newValue) {
        this.feature = newValue
      }
    },
    place() {
      var id = this.$route.params.id
      return this.places[parseInt(id) - 1]
    }
  },
  methods: {
    goBack() {
      this.$router.push('/learn/' + this.place.group)
    }
  }
}
</script>

<style scoped>
  img {
    max-height: 450px;
  }
  #feature-content {
    white-space: pre-wrap;
  }
</style>