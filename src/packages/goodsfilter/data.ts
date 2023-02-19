export default {
  // 默认选中项
  selectedValue: {
    filterAttrs: [0],
    goodsAttrs: [{ id: 1, values: ["12690", "19306"] }]
  },
  filterAttrs: [{
    id: 0,
    name: '仅看有货'
  }, {
    id: 1,
    name: '京东物流'
  }, {
    id: 2,
    name: '货到付款'
  }, {
    id: 3,
    name: '放心购'
  }],
  // 价格区间
  priceRanges: [{
    low: '53',
    high: '132',
    desc: '14%选择',
    extra: {}
  }, {
    low: '132',
    high: '314',
    desc: '45%选择',
    extra: {}
  }, {
    low: '3141',
    high: '13291329',
    desc: '27%选择',
    extra: {}
  }],
  // 商品属性筛选
  goodsAttrs: [{
    title: '品牌',
    id: 1,
    values: [{
      id: "12690",
      name: "蒙牛",
      extra: {},
    }, {
      id: "19306",
      name: "伊利",
      extra: {},
    }, {
      id: "15139",
      name: "三元（SAN YUAN）",
      extra: {},
    }, {
      id: "575367",
      name: "麦趣尔",
      extra: {},
    }, {
      id: "6024",
      name: "德亚（Weidendorf）",
      extra: {},
    }, {
      id: "3492",
      name: "安佳（Anchor）",
      extra: {},
    }, {
      id: "376553",
      name: "认养一头牛",
      extra: {},
    }, {
      id: "1",
      name: "小西牛",
      extra: {},
    }, {
      id: "2",
      name: "澳牧",
      extra: {},
    }, {
      id: "3",
      name: "光明",
      extra: {},
    }, {
      id: "4",
      name: "旺旺",
      extra: {},
    }, {
      id: "5",
      name: "西域春",
      extra: {},
    }, {
      id: "6",
      name: "新希望",
      extra: {},
    }, {
      id: "7",
      name: "Bio-E",
      extra: {},
    }, {
      id: "8",
      name: "植选",
      extra: {},
    }, {
      id: "9",
      name: "百菲酪",
      extra: {},
    }, {
      id: "10",
      name: "新农",
      extra: {},
    }, {
      id: "11",
      name: "卡士",
      extra: {},
    }, {
      id: "12",
      name: "君乐宝",
      extra: {},
    }, {
      id: "13",
      name: "甘蒂牧场",
      extra: {},
    }, {
      id: "14",
      name: "爱氏晨曦",
      extra: {},
    }, {
      id: "15",
      name: "简颜轻",
      extra: {},
    }, {
      id: "16",
      name: "歌帝梵",
      extra: {},
    }, {
      id: "17",
      name: "瑞士莲",
      extra: {},
    }, {
      id: "18",
      name: "BEAUTYBUFFET",
      extra: {},
    }, {
      id: "19",
      name: "纽麦福",
      extra: {},
    }, {
      id: "20",
      name: "TAUPO PURE",
      extra: {},
    }, {
      id: "21",
      name: "西域美农",
      extra: {},
    }, {
      id: "22",
      name: "风车牧场",
      extra: {},
    }]
  }, {
    title: '类别',
    id: 2,
    values: [{
      id: "76437",
      name: "鲜牛奶",
      extra: {},
    }, {
      id: "83307",
      name: "低温酸奶",
      extra: {},
    }, {
      id: "101080",
      name: "调味鲜牛奶",
      extra: {},
    }, {
      id: "86611",
      name: "低温牛奶",
      extra: {},
    }]
  }, {
    title: '口味',
    id: 3,
    values: [{
      id: "21484",
      name: "水果味",
      extra: {},
    }, {
      id: "154960",
      name: "白桃味",
      extra: {},
    }, {
      id: "32593",
      name: "巧克力味",
      extra: {},
    }, {
      id: "9689",
      name: "原味",
      extra: {},
    }, {
      id: "9787",
      name: "草莓味",
      extra: {},
    }, {
      id: "114540",
      name: "红枣味",
      extra: {},
    }, {
      id: "82221",
      name: "香蕉味",
      extra: {},
    }, {
      id: "82690",
      name: "水蜜桃味",
      extra: {},
    }]
  }, {
    title: '钙含量',
    id: 3,
    values: [{
      id: "83057",
      name: "高钙",
      extra: {},
    }, {
      id: "131114",
      name: "非高钙",
      extra: {},
    }]
  }, {
    title: '蛋白质含量',
    id: 4,
    values: [{
      id: "9756",
      name: "高蛋白",
      extra: {},
    }, {
      id: "131113",
      name: "非高蛋白",
      extra: {},
    }]
  }],

  beforeSelected: (done: any, selectedValue: any) => {
    if (selectedValue.values.length > 2) {
      console.log('最多选4个')
    } else {
      done()
    }
  },

  addressList: [{
    id: 1,
    detail: '北京市朝阳区八里庄街道'
  }, {
    id: 2,
    detail: '钓鱼岛钓鱼岛全区'
  }, {
    id: 3,
    detail: '北京市大兴区科创十一街18号院京东大厦'
  }]
}