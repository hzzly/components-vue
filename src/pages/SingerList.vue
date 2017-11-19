<template>
  <div class="singer" ref="singer">
    <singer-list :data="singers" ref="list"></singer-list>
  </div>
</template>
<script>
import SingerList from '@/components/singerList'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
const aaa = 'aaa'
export default {
  data() {
    return {
      singers: [
        {
          key: 1,
          title: 'A',
          items: [
            {
              key: 1111,
              name: 'aaa'
            }, {
              key: 2,
              name: 'aaa'
            }, {
              key: 3,
              name: 'aaa'
            }, {
              key: 4,
              name: 'aaa'
            }, {
              key: 5,
              name: 'aaa'
            }, {
              key: 6,
              name: 'aaa'
            }, {
              key: 7,
              name: 'aaa'
            }, {
              key: 8,
              name: 'aaa'
            }, {
              key: 9,
              name: 'aaa'
            }, {
              key: 10,
              name: 'aaa'
            }
          ]
        }, {
          key: 2,
          title: 'B',
          items: [
            {
              key: 1,
              name: 'bbb'
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 3,
          title: 'C',
          items: [
            {
              key: 1,
              name: 'ccc'
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 4,
          title: 'D',
          items: [
            {
              key: 1,
              name: 'ddd'
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 5,
          title: 'E',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 6,
          title: 'F',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 7,
          title: 'G',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 8,
          title: 'H',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 9,
          title: 'I',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 10,
          title: 'J',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 11,
          title: 'K',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 12,
          title: 'L',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 13,
          title: 'N',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 14,
          title: 'M',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 15,
          title: 'O',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 16,
          title: 'P',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 17,
          title: 'Q',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 18,
          title: 'R',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 19,
          title: 'S',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }, {
          key: 20,
          title: 'T',
          items: [
            {
              key: 1,
              name: aaa
            }, {
              key: 2,
              name: aaa
            }, {
              key: 3,
              name: aaa
            }, {
              key: 4,
              name: aaa
            }, {
              key: 5,
              name: aaa
            }, {
              key: 6,
              name: aaa
            }, {
              key: 7,
              name: aaa
            }, {
              key: 8,
              name: aaa
            }, {
              key: 9,
              name: aaa
            }, {
              key: 10,
              name: aaa
            }
          ]
        }
      ]
    }
  },

  components: {
    SingerList
  },

}
</script>
<style lang="scss">
.singer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>