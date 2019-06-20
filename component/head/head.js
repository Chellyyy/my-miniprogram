// component/head/head.js
Component({
  created:function(){
    console.log(this.properties.innerDate)
  },
  ready:function(){
    date2Value(this.properties.innerDate)
  },
  /**
   * 组件的属性列表
   */
  properties: {
    innerDate: {
      type: Date
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    date2Value:function(date){
      var year = date.getFullYear();
      var month = date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1;
      var day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
      this.setData({
        year:year,
        month:month,
        day:day
      })
      
    }
  }
})
