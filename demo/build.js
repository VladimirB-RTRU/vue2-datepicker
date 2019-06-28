!(function (e) {
  var t = {}
  function n (a) {
    if (t[a]) return t[a].exports
    var r = (t[a] = { i: a, l: !1, exports: {} })
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = e),
  (n.c = t),
  (n.d = function (e, t, a) {
    n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: a
        })
  }),
  (n.r = function (e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  }),
  (n.n = function (e) {
    var t =
        e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
    return n.d(t, 'a', t), t
  }),
  (n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }),
  (n.p = ''),
  n((n.s = 2))
})([
  function (e, t) {
    e.exports = Vue
  },
  function (e, t) {
    e.exports = DatePicker
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(0),
      r = n.n(a),
      i = n(1),
      o = n.n(i)
    r.a.use(o.a),
    new r.a({
      el: '#app',
      data: function () {
        return {
          value1: new Date(),
          value2: '',
          value3: new Date(),
          value4: '',
          value5: '',
          value6: '',
          value7: '',
          value8: '',
          value9: '',
          value10: new Date(),
          value11: new Date(),
          value12: '',
          value13: ''
        }
      },
      methods: {
        getSource: function (e) {
          var t = this,
            n = this.$createElement
          return Object.keys(e).map(function (a) {
            var i = e[a]
            return n('section', { class: 'source' }, [
              n('label', { class: 'label' }, [a, ' : ']),
              r.a.compile(i).render.call(t)
            ])
          })
        },
        getPre: function (e) {
          var t = this.$createElement
          return Object.keys(e).map(function (n) {
            var a = e[n].replace(/\n/g, '').replace(/\s+/g, ' ')
            return t('pre', { class: 'pre' }, [
              t('code', { class: 'language-html' }, [a])
            ])
          })
        }
      },
      render: function (e) {
        var t = this
        return e('div', { attrs: { id: 'app' } }, [
          [
            {
              exam: {
                base:
                    '<date-picker v-model="value1" valueType="format" lang="en" ></date-picker>',
                range:
                    '<date-picker v-model="value2" range appendToBody></date-picker>',
                month:
                    '<date-picker v-model="value10" lang="en" type="month" format="YYYY-MM"></date-picker>',
                year:
                    '<date-picker v-model="value11" lang="en" type="year" format="YYYY"></date-picker>',
                time:
                    '<date-picker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></date-picker>'
              }
            },
            {
              exam: {
                datetime:
                    '\n        <date-picker\n          v-model="value3"\n          lang="en"\n          type="datetime"\n          format="[on] MM-DD-YYYY [at] HH:mm"></date-picker>',
                'datetime with time-picker-options':
                    '\n        <date-picker\n          v-model="value4"\n          lang="en"\n          type="datetime"\n          appendToBody\n          format="YYYY-MM-DD hh:mm:ss a"\n          :time-picker-options="{\n            start: \'00:00\',\n            step: \'00:30\',\n            end: \'23:30\'\n          }"></date-picker>',
                'datetime with minute-step':
                    '\n        <date-picker\n          v-model="value9"\n          lang="en"\n          type="datetime"\n          format="YYYY-MM-DD hh:mm:ss a"\n          :minute-step="10"\n          ></date-picker>',
                'datetime with time-select-options':
                    '\n        <date-picker\n          v-model="value13"\n          lang="en"\n          type="datetime"\n          format="YYYY-MM-DD hh:mm:ss a"\n          :time-select-options="{\n            hours: [9, 10, 11, 12, 13, 14, 15, 16],\n            minutes: [0, 10,20,30,40,50],\n            seconds: []\n          }"\n          ></date-picker>',
                'datetime range':
                    '\n        <date-picker\n          v-model="value5"\n          range\n          type="datetime"\n          lang="en"\n          format="YYYY-MM-DD HH:mm:ss"></date-picker>'
              },
              tips:
                  'if you use the datetime, you should set the format to "YYYY-MM-DD HH:mm:ss" which default is "YYY-MM-DD'
            },
            {
              exam: {
                'with confirm':
                    '\n        <date-picker\n          v-model="value6"\n          format="YYYY-MM-DD"\n          lang="en"\n          confirm></date-picker>',
                'datetime with confirm':
                    '\n        <date-picker\n          v-model="value7"\n          type="datetime"\n          lang="en"\n          format="YYYY-MM-DD hh:mm:ss"\n          confirm></date-picker>',
                'range width confirm':
                    '\n        <date-picker\n          v-model="value8"\n          range\n          lang="en"\n          format="YYYY-MM-DD"\n          confirm></date-picker>'
              },
              tips:
                  'Recommend to use the confirm option when the type is "datetime" or "range" is true'
            }
          ].map(function (n) {
            return e('div', { class: 'example' }, [
              t.getSource(n.exam),
              n.tips ? e('blockquote', { class: 'tips' }, [n.tips]) : '',
              t.getPre(n.exam)
            ])
          })
        ])
      }
    })
  }
])
// # sourceMappingURL=build.js.map
