// mock.js
// http://mockjs.com/examples.html
// mockjs内置的数据生成规则函数
// @boolean         @boolean(1, 9, true)
// @natural         @natural(60, 100)
// @integer         @integer(60, 100)
// @float           @float(60, 100, 3, 5)
// @character       @character("lower")   @character("upper")   @character("number")   @character("symbol")
// @string          @string(7, 10)   @string("lower", 5)   @string("upper", 5)   @string("number", 5)   @string("symbol", 5)
// @range           @range(3, 7)     @range(1, 10, 3)
// @date("yyyy-MM-dd")    @date("yy-MM-dd")   @date("y-M-d")
// @time  @time("A HH:mm:ss")   @time("a HH:mm:ss")   @time("H:m:s")
// @datetime  @datetime("yyyy-MM-dd A HH:mm:ss")  @datetime("y-MM-dd HH:mm:ss")  @datetime("y-M-d H:m:s")
// @now
// @color           @hex  @rgb   @rgba   @hsl
// @paragraph       @paragraph(1, 3)
// @sentence        @sentence(3, 5)
// @word            @word(3, 5)
// @title           @title(3, 5)
// @cparagraph      @cparagraph(1, 3)
// @csentence       @csentence(3, 5)
// @cword           @cword(3, 5)          @cword("零一二三四五六七八九十", 5, 7)
// @ctitle          @ctitle(3, 5)
// @first           @last
// @cfirst          @clast
// @name            @cname
// @url             @domain       @protocol     @ip
// @email
// @province        @city       @city(true)
// @county          @county(true)
// @zip
// @guid            @id         @increment

// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// Mock示例
Random.id()
Random.csentence()
Random.datetime()
Random.integer(60, 100)
Random.cname()
Mock.mock('/mock/users',{
  'userData|4-20': [
    {
      id: '@id',
      main: '@csentence',
      deadTime: '@datetime',
      age: '@integer(10,120)',
      approve: '@cname',
    },
  ],
  count() {
    return this.userData.length
  },
})
