var  nodesData = [
    {
        "name": "app",
        "originName": "app",
        "circleName": "app",
        "depth": 0,
        "value": 3,
        "pv": 3,
        "symbolSize": [
            62,
            62
        ],
        "x": 190,
        "y": 75,
        "symbolOffset": [
            "-50%",
            0
        ],
        "itemStyle": {
            "color": "#025EFF"
        },
        "select": {
            "itemStyle": {
                "borderWidth": 40,
                "borderColor": "rgba(2,94,255,0.2)"
            }
        },
        "laneName": "扫码渠道",
        "label": {},
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
  
    {
        "name": "企微群聊",
        "originName": "企微群聊",
        "circleName": "企微群聊",
        "depth": 0,
        "value": 1,
        "pv": 1,
        "symbolSize": [
            50,
            50
        ],
        "x": 190,
        "y": 350,
        "symbolOffset": [
            "-50%",
            0
        ],
        "itemStyle": {
            "color": "#FF5040"
        },
        "select": {
            "itemStyle": {
                "borderWidth": 40,
                "borderColor": "rgba(255,80,64,0.2)"
            }
        },
        "laneName": "扫码渠道",
        "label": {},
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "name": "企微顾问好友",
        "originName": "企微顾问好友",
        "circleName": "企微顾问好友",
        "depth": 4,
        "value": 36,
        "pv": 129,
        "symbolSize": [
            91,
            91
        ],
        "x": 968,
        "y": 350,
        "symbolOffset": [
            0,
            0
        ],
        "itemStyle": {
            "color": "#87ceeb"
        },
        "select": {
            "itemStyle": {
                "borderWidth": 40,
                "borderColor": "rgba(255,154,38,0.2)"
            }
        },
        "laneName": "企微顾问好友",
        "label": {},
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "name": "长期班",
        "originName": "长期班",
        "circleName": "长期班",
        "depth": 6,
        "value": 70,
        "pv": 70,
        "symbolSize": [
            99,
            99
        ],
        "x": 1616,
        "y": 350,
        "symbolOffset": [
            0,
            0
        ],
        "itemStyle": {
            "color": "#B31D1B"
        },
        "select": {
            "itemStyle": {
                "borderWidth": 40,
                "borderColor": "rgba(179,29,27,0.2)"
            }
        },
        "laneName": "长期班",
        "label": {},
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "name": "企微班级好友",
        "originName": "企微班级好友",
        "circleName": "企微班级好友",
        "depth": 8,
        "value": 17,
        "pv": 20,
        "symbolSize": [
            83,
            83
        ],
        "x": 2264,
        "y": 350,
        "symbolOffset": [
            0,
            0
        ],
        "itemStyle": {
            "color": "#0036B3"
        },
        "select": {
            "itemStyle": {
                "borderWidth": 40,
                "borderColor": "rgba(0,54,179,0.2)"
            }
        },
        "laneName": "企微班级好友",
        "label": {},
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    }
]


var linesData = [
    {
        "source": "长期班",
        "originName": "长期班",
        "lineName": "长期班",
        "target": "企微班级好友",
        "value": 17,
        "pv": 20,
        "sourceLaneName": "长期班",
        "targetLaneName": "企微班级好友",
        "selectedMode": "single",
        "lineStyle": {
            "width": 1.5,
            "color": "#B31D1B",
            "curveness": 0.2
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "symbolSize": [
            6,
            12
        ],
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "source": "企微顾问好友",
        "originName": "企微顾问好友",
        "lineName": "企微顾问好友",
        "target": "长期班",
        "value": 26,
        "pv": 26,
        "sourceLaneName": "企微顾问好友",
        "targetLaneName": "长期班",
        "selectedMode": "single",
        "lineStyle": {
            "width": 1.5,
            "color": "#FF9A26",
            "curveness": 0.2
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "symbolSize": [
            6,
            12
        ],
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "source": "企微群聊",
        "originName": "企微群聊",
        "lineName": "企微群聊",
        "target": "企微顾问好友",
        "value": 1,
        "pv": 5,
        "sourceLaneName": "扫码渠道",
        "targetLaneName": "企微顾问好友",
        "selectedMode": "single",
        "lineStyle": {
            "width": 1.5,
            "color": "#FF5040",
            "curveness": 0.2
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "symbolSize": [
            6,
            12
        ],
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    },
    {
        "source": "app",
        "originName": "app",
        "lineName": "app",
        "target": "企微顾问好友",
        "value": 3,
        "pv": 3,
        "sourceLaneName": "扫码渠道",
        "targetLaneName": "企微顾问好友",
        "selectedMode": "single",
        "lineStyle": {
            "width": 1.5,
            "color": "#025EFF",
            "curveness": 0.2
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "symbolSize": [
            6,
            12
        ],
        "tooltip": {
            "extraCssText": "padding: 6px 10px;white-space:pre-line;"
        }
    }
]