(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(709),_interopRequireDefault=__webpack_require__(710);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(711)),_classCallCheck2=_interopRequireDefault(__webpack_require__(712)),_createClass2=_interopRequireDefault(__webpack_require__(713)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(714)),_getPrototypeOf3=_interopRequireDefault(__webpack_require__(717)),_inherits2=_interopRequireDefault(__webpack_require__(718)),_react=_interopRequireWildcard(__webpack_require__(0)),_reactDom=_interopRequireDefault(__webpack_require__(45)),_View=_interopRequireDefault(__webpack_require__(721)),_bodymovin=_interopRequireDefault(__webpack_require__(720)),Animation=function(_PureComponent){function Animation(){var _getPrototypeOf2,_this;(0,_classCallCheck2.default)(this,Animation);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Animation)).call.apply(_getPrototypeOf2,[this].concat(args)))).animationDOMNode=null,_this.loadAnimation=function(props){_this.anim&&_this.anim.destroy(),_this.anim=_bodymovin.default.loadAnimation({container:_this.animationDOMNode,animationData:props.source,renderer:"svg",loop:props.loop||!1,autoplay:props.autoPlay})},_this.setAnimationDOMNode=function(ref){return _this.animationDOMNode=_reactDom.default.findDOMNode(ref)},_this}return(0,_inherits2.default)(Animation,_PureComponent),(0,_createClass2.default)(Animation,[{key:"componentDidMount",value:function(){this.loadAnimation(this.props)}},{key:"componentWillReceiveProps",value:function(nextProps){this.props.source&&nextProps.source&&this.props.source.nm!==nextProps.source.nm&&this.loadAnimation(nextProps)}},{key:"render",value:function(){return _react.default.createElement(_View.default,{style:this.props.style,ref:this.setAnimationDOMNode})}}]),Animation}(_react.PureComponent),_default=_react.default.forwardRef(function(props,ref){return _react.default.createElement(Animation,(0,_extends2.default)({},props,{ref:"function"==typeof ref?function(c){return ref(c&&c.anim)}:ref}))});exports.default=_default},321:function(module){module.exports={v:"4.9.0",fr:30,ip:0,op:38,w:315,h:280,nm:"new",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"bodyband Konturen",parent:3,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[157.5,129,0]},a:{a:0,k:[157.5,140,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.667,y:1},o:{x:.333,y:0},n:"0p667_1_0p333_0",t:9,s:[{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-14.5,52],[14.5,52],[14.5,52.25],[-14.5,52.25]],c:!0}],e:[{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-14.5,-41],[14.5,-41],[14.5,52.25],[-14.5,52.25]],c:!0}]},{t:19.111328125}]},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[.871,.702,.271,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[160.5,184],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"topband Konturen",parent:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[157.5,140,0]},a:{a:0,k:[157.5,140,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.667,y:1},o:{x:.333,y:0},n:"0p667_1_0p333_0",t:16.777,s:[{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-14.5,-14.5],[14.5,-14.5],[15.036,-14.207],[-13.964,-14.207]],c:!0}],e:[{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-14.5,-14.5],[14.5,-14.5],[14.5,14.5],[-14.5,14.5]],c:!0}]},{t:23}]},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.831,.396,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[160.5,128.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"body Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[-13]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:5.432,s:[-13],e:[17.85]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:11.111,s:[17.85],e:[0]},{t:16.2958984375}]},p:{a:1,k:[{i:{x:.667,y:1},o:{x:.333,y:0},n:"0p667_1_0p333_0",t:0,s:[162.125,247.599,0],e:[162.125,145.599,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.667,y:1},o:{x:.333,y:0},n:"0p667_1_0p333_0",t:8.148,s:[162.125,145.599,0],e:[162.125,236.099,0],to:[0,0,0],ti:[0,0,0]},{t:16.2958984375}]},a:{a:0,k:[162.125,225.099,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0],[-3.228,0],[0,0],[-2.75,.062]],o:[[0,0],[0,0],[4.75,-.188],[0,0],[3.228,0],[0,0]],v:[[56.25,46.5],[-54.75,46.5],[-55,46.688],[-49.658,46.5],[49.658,46.5],[56,46.688]],c:!0}],e:[{i:[[0,0],[0,0],[0,0],[-3.228,0],[0,0],[0,3.21]],o:[[0,0],[0,0],[0,3.21],[0,0],[3.228,0],[0,0]],v:[[55.5,-46.5],[-55.5,-46.5],[-55.5,40.688],[-49.658,46.5],[49.658,46.5],[55.5,40.688]],c:!0}]},{t:3.7041015625}]},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[.008,.588,.847,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[161.5,178.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"top Konturen",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3.704,s:[0],e:[100]},{t:4.4443359375}]},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:8.148,s:[10],e:[-23]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:14.074,s:[-23],e:[0]},{t:20}]},p:{a:1,k:[{i:{x:.937,y:.946},o:{x:.167,y:.167},n:"0p937_0p946_0p167_0p167",t:0,s:[160,177.5,0],e:[150,34.5,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.097,y:0},o:{x:.084,y:.101},n:"0p097_0_0p084_0p101",t:10.37,s:[150,34.5,0],e:[161,128.5,0],to:[0,0,0],ti:[0,0,0]},{t:20}]},a:{a:0,k:[161,128.5,0]},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p667_1_0p333_0","0p667_1_0p333_0","0p667_1_0p333_0"],t:0,s:[0,0,100],e:[58.621,58.621,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p667_1_0p333_0","0p667_1_0p333_0","0p667_1_0p333_0"],t:10.37,s:[58.621,58.621,100],e:[100,100,100]},{t:20}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.219,0],[0,0],[0,-3.204],[0,0],[-3.219,0],[0,0],[0,3.204],[0,0]],o:[[0,0],[-3.219,0],[0,0],[0,3.204],[0,0],[3.219,0],[0,0],[0,-3.204]],v:[[61.174,-14.5],[-61.174,-14.5],[-67,-8.7],[-67,8.7],[-61.174,14.5],[61.174,14.5],[67,8.7],[67,-8.7]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[.012,.663,.957,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[161,128.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"schleife/new Konturen",parent:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[161,115,0]},a:{a:0,k:[161,115,0]},s:{a:1,k:[{i:{x:[.029,.029,.833],y:[1.656,1.656,-15.667]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p029_1p656_0p167_0p167","0p029_1p656_0p167_0p167","0p833_-15p667_0p167_16p667"],t:23,s:[0,0,100],e:[100,100,100]},{t:34}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[8.059,0],[1.667,-.428],[-.598,-1.849],[-1.278,0],[0,-4.797],[4.835,0],[0,0],[-8.693,2.139],[.541,1.87],[3.006,-6.366],[4.932,3.716],[1.157,-1.595],[-1.586,-3.998],[0,0],[0,4.796],[-4.834,0],[-2.606,-1.934],[-1.272,1.478],[5.256,0],[0,-7.995],[-8.058,0],[0,0],[0,0],[0,7.995]],o:[[-1.91,0],[.541,1.87],[1.145,-.282],[4.835,0],[0,4.796],[0,0],[2.097,-5.318],[-.598,-1.849],[-9.385,2.413],[-2.071,-4.386],[-1.272,1.478],[5.152,3.823],[0,0],[-4.834,0],[0,-4.797],[3.679,0],[1.157,-1.595],[-3.498,-2.637],[-8.058,0],[0,7.995],[0,0],[0,0],[8.059,0],[0,-7.995]],v:[[23.385,-14.5],[18.024,-13.831],[19.756,-8.259],[23.385,-8.7],[32.155,0],[23.385,8.7],[4.075,8.7],[19.756,-8.259],[18.024,-13.831],[0,3.422],[-10.322,-10.065],[-13.987,-5.478],[-4.083,8.7],[-23.385,8.7],[-32.154,0],[-23.385,-8.7],[-13.987,-5.478],[-10.322,-10.065],[-23.385,-14.5],[-38,0],[-23.385,14.5],[0,14.5],[23.385,14.5],[38,0]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.831,.396,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[161,100.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"shadow Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[162,236,0]},a:{a:0,k:[162,225,0]},s:{a:1,k:[{i:{x:[.115,.115,.833],y:[1,1,-5.19]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p115_1_0p167_0p167","0p115_1_0p167_0p167","0p833_-5p19_0p167_16p667"],t:0,s:[0,0,100],e:[100,100,100]},{t:13}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-53.02,0],[0,-3.313],[53.02,0],[0,3.313]],o:[[53.02,0],[0,3.313],[-53.02,0],[0,-3.313]],v:[[0,-6],[96,0],[0,6],[-96,0]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[.945,.945,.945,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[162,225],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"Ebene 12 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:9,s:[262],e:[0]},{t:29}]},p:{a:1,k:[{i:{x:0,y:.359},o:{x:.167,y:.167},n:"0_0p359_0p167_0p167",t:9,s:[157.5,140,0],e:[95.449,44.997,0],to:[0,0,0],ti:[0,0,0]},{t:29}]},a:{a:0,k:[95.449,44.997,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:9,s:[0,0,100],e:[100,100,100]},{t:29}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],v:[[-2.18,-3.777],[2.178,-3.775],[4.359,.001],[2.181,3.777],[-2.18,3.775],[-4.359,-.001]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.012,.663,.957,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[95.449,44.997],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"Ebene 13 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3,s:[-63],e:[0]},{t:23}]},p:{a:1,k:[{i:{x:0,y:.564},o:{x:.167,y:.167},n:"0_0p564_0p167_0p167",t:3,s:[157.5,140,0],e:[248.067,112.75,0],to:[0,0,0],ti:[0,0,0]},{t:23}]},a:{a:0,k:[248.067,112.75,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:3,s:[0,0,100],e:[100,100,100]},{t:23}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],v:[[-1.53,-6.63],[4.974,-4.639],[6.505,1.99],[1.532,6.63],[-4.972,4.64],[-6.505,-1.989]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.012,.663,.957,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[248.067,112.75],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"Ebene 14 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[-200],e:[0]},{t:20}]},p:{a:1,k:[{i:{x:0,y:.477},o:{x:.167,y:.167},n:"0_0p477_0p167_0p167",t:0,s:[157.5,140,0],e:[268.728,57.196,0],to:[0,0,0],ti:[0,0,0]},{t:20}]},a:{a:0,k:[120.728,247.196,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:0,s:[0,0,100],e:[100,100,100]},{t:20}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-2.376,-3.394],[2.799,1.018],[-2.799,3.394]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.149,.784,.333,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[120.728,247.196],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"Ebene 15 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:8,s:[134],e:[0]},{t:28}]},p:{a:1,k:[{i:{x:0,y:.547},o:{x:.167,y:.167},n:"0_0p547_0p167_0p167",t:8,s:[157.5,140,0],e:[61.63,139.445,0],to:[0,0,0],ti:[0,0,0]},{t:28}]},a:{a:0,k:[61.63,139.445,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:8,s:[0,0,100],e:[100,100,100]},{t:28}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[4.37,-5.433],[4.286,5.433],[-4.37,1.022]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.149,.784,.333,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[61.63,139.445],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"Ebene 16 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:5,s:[74],e:[0]},{t:25}]},p:{a:1,k:[{i:{x:0,y:.387},o:{x:.167,y:.167},n:"0_0p387_0p167_0p167",t:5,s:[157.5,140,0],e:[183.561,32.661,0],to:[0,0,0],ti:[0,0,0]},{t:25}]},a:{a:0,k:[183.561,32.661,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:5,s:[0,0,100],e:[100,100,100]},{t:25}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-2.146,0],[0,-2.147],[2.146,0],[0,2.147]],o:[[2.146,0],[0,2.147],[-2.146,0],[0,-2.147]],v:[[-.001,-3.888],[3.886,0],[-.001,3.888],[-3.887,0]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.039,.314,.392,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[183.561,32.661],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:12,ty:4,nm:"Ebene 17 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:12,s:[29],e:[0]},{t:32}]},p:{a:1,k:[{i:{x:0,y:.463},o:{x:.167,y:.167},n:"0_0p463_0p167_0p167",t:12,s:[157.5,140,0],e:[44.65,36.558,0],to:[0,0,0],ti:[0,0,0]},{t:32}]},a:{a:0,k:[214.65,244.558,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:12,s:[0,0,100],e:[100,100,100]},{t:32}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.22,0],[0,-3.222],[3.22,0],[0,3.221]],o:[[3.22,0],[0,3.221],[-3.22,0],[0,-3.222]],v:[[0,-5.832],[5.829,0],[0,5.832],[-5.829,0]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.039,.314,.392,1]},o:{a:0,k:100},w:{a:0,k:1},lc:1,lj:1,ml:4,nm:"Kontur 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[214.65,244.558],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"Ebene 18 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3,s:[168],e:[0]},{t:23}]},p:{a:1,k:[{i:{x:0,y:.243},o:{x:.167,y:.167},n:"0_0p243_0p167_0p167",t:3,s:[157.5,140,0],e:[294.925,112.226,0],to:[0,0,0],ti:[0,0,0]},{t:23}]},a:{a:0,k:[62.925,234.226,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:3,s:[0,0,100],e:[100,100,100]},{t:23}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.209,.131],[0,0],[0,0],[.174,-.142],[0,0],[0,0],[-.093,-.228],[0,0],[0,0],[-.247,.014],[0,0],[0,0],[-.059,.236],[0,0],[0,0]],o:[[0,0],[0,0],[-.012,-.223],[0,0],[0,0],[-.238,-.069],[0,0],[0,0],[-.135,.201],[0,0],[0,0],[.155,.19],[0,0],[0,0],[.232,-.083]],v:[[2.206,-.077],[1.1,-.771],[1.036,-2.051],[.544,-2.269],[-.45,-1.461],[-1.706,-1.819],[-2.062,-1.431],[-1.568,-.237],[-2.281,.82],[-2.008,1.278],[-.711,1.208],[.105,2.221],[.628,2.116],[.938,.878],[2.156,.446]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[62.916,234.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:14,ty:4,nm:"Ebene 19 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:8,s:[-209],e:[0]},{t:28}]},p:{a:1,k:[{i:{x:0,y:.25},o:{x:.167,y:.167},n:"0_0p25_0p167_0p167",t:8,s:[157.5,140,0],e:[35.721,103.978,0],to:[0,0,0],ti:[0,0,0]},{t:28}]},a:{a:0,k:[35.721,103.978,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:8,s:[0,0,100],e:[100,100,100]},{t:28}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.209,.131],[0,0],[0,0],[.174,-.141],[0,0],[0,0],[-.094,-.227],[0,0],[0,0],[-.247,.014],[0,0],[0,0],[-.059,.237],[0,0],[0,0]],o:[[0,0],[0,0],[-.012,-.224],[0,0],[0,0],[-.238,-.068],[0,0],[0,0],[-.135,.2],[0,0],[0,0],[.155,.191],[0,0],[0,0],[.231,-.083]],v:[[2.206,-.078],[1.1,-.771],[1.036,-2.051],[.544,-2.27],[-.45,-1.461],[-1.706,-1.82],[-2.062,-1.432],[-1.568,-.238],[-2.281,.82],[-2.008,1.278],[-.711,1.207],[.105,2.22],[.628,2.115],[.938,.878],[2.156,.446]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[35.712,103.975],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"Ebene 20 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:7,s:[275],e:[0]},{t:27}]},p:{a:1,k:[{i:{x:0,y:.09},o:{x:.167,y:.167},n:"0_0p09_0p167_0p167",t:7,s:[157.5,140,0],e:[261.12,26.218,0],to:[0,0,0],ti:[0,0,0]},{t:27}]},a:{a:0,k:[261.12,26.218,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:7,s:[0,0,100],e:[100,100,100]},{t:27}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.21,.131],[0,0],[0,0],[.174,-.141],[0,0],[0,0],[-.093,-.228],[0,0],[0,0],[-.247,.014],[0,0],[0,0],[-.059,.236],[0,0],[0,0]],o:[[0,0],[0,0],[-.011,-.223],[0,0],[0,0],[-.238,-.068],[0,0],[0,0],[-.135,.2],[0,0],[0,0],[.155,.19],[0,0],[0,0],[.232,-.082]],v:[[2.206,-.078],[1.099,-.771],[1.034,-2.052],[.543,-2.27],[-.45,-1.461],[-1.707,-1.82],[-2.062,-1.432],[-1.568,-.238],[-2.281,.82],[-2.009,1.278],[-.711,1.207],[.105,2.22],[.628,2.115],[.937,.878],[2.155,.445]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[261.111,26.215],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:16,ty:4,nm:"Ebene 21 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3,s:[132.9],e:[0]},{t:23}]},p:{a:1,k:[{i:{x:0,y:.326},o:{x:.167,y:.167},n:"0_0p326_0p167_0p167",t:3,s:[157.5,140,0],e:[268.337,196.938,0],to:[0,0,0],ti:[0,0,0]},{t:23}]},a:{a:0,k:[252.337,213.938,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:3,s:[0,0,100],e:[100,100,100]},{t:23}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.411,.258],[0,0],[0,0],[.34,-.276],[0,0],[0,0],[-.184,-.446],[0,0],[0,0],[-.483,.027],[0,0],[0,0],[-.116,.463],[0,0],[0,0]],o:[[0,0],[0,0],[-.022,-.439],[0,0],[0,0],[-.466,-.133],[0,0],[0,0],[-.265,.392],[0,0],[0,0],[.302,.373],[0,0],[0,0],[.454,-.162]],v:[[4.322,-.152],[2.152,-1.51],[2.027,-4.017],[1.065,-4.447],[-.882,-2.861],[-3.344,-3.565],[-4.038,-2.804],[-3.072,-.465],[-4.468,1.607],[-3.935,2.505],[-1.392,2.366],[.207,4.35],[1.231,4.145],[1.837,1.72],[4.222,.874]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[252.32,213.932],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"Ebene 22 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:13,s:[-266],e:[0]},{t:33}]},p:{a:1,k:[{i:{x:0,y:.337},o:{x:.167,y:.167},n:"0_0p337_0p167_0p167",t:13,s:[157.5,140,0],e:[133.395,26.515,0],to:[0,0,0],ti:[0,0,0]},{t:33}]},a:{a:0,k:[133.395,26.515,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:13,s:[0,0,100],e:[100,100,100]},{t:33}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.411,.258],[0,0],[0,0],[.34,-.277],[0,0],[0,0],[-.183,-.446],[0,0],[0,0],[-.484,.026],[0,0],[0,0],[-.116,.462],[0,0],[0,0]],o:[[0,0],[0,0],[-.022,-.438],[0,0],[0,0],[-.466,-.133],[0,0],[0,0],[-.264,.392],[0,0],[0,0],[.302,.373],[0,0],[0,0],[.454,-.162]],v:[[4.322,-.152],[2.152,-1.511],[2.027,-4.018],[1.065,-4.446],[-.882,-2.861],[-3.344,-3.565],[-4.039,-2.804],[-3.072,-.466],[-4.469,1.607],[-3.935,2.505],[-1.392,2.366],[.207,4.35],[1.231,4.145],[1.837,1.72],[4.222,.874]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[133.378,26.508],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:18,ty:4,nm:"Ebene 23 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:5,s:[399],e:[0]},{t:25}]},p:{a:1,k:[{i:{x:0,y:.478},o:{x:.167,y:.167},n:"0_0p478_0p167_0p167",t:5,s:[157.5,140,0],e:[257.258,159.497,0],to:[0,0,0],ti:[0,0,0]},{t:25}]},a:{a:0,k:[257.258,159.497,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:5,s:[0,0,100],e:[100,100,100]},{t:25}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.721,-.604],[0,0],[0,0],[-.306,-.794],[0,0],[0,0],[-.932,.071],[0,0],[0,0],[-.241,.908],[0,0],[0,0],[.783,.491],[0,0],[0,0]],o:[[0,0],[0,0],[-.821,-.221],[0,0],[0,0],[-.524,.78],[0,0],[0,0],[.566,.723],[0,0],[0,0],[.869,-.333],[0,0],[0,0],[-.027,-.935]],v:[[2.281,-8.697],[-1.528,-5.509],[-6.23,-6.781],[-7.598,-5.261],[-5.84,-.719],[-8.615,3.403],[-7.627,5.141],[-2.732,4.758],[.255,8.578],[2.232,8.133],[3.5,3.356],[8.121,1.595],[8.357,-.417],[4.245,-2.989],[4.113,-7.897]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[257.231,159.483],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:19,ty:4,nm:"Ebene 24 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:11,s:[-212],e:[0]},{t:31}]},p:{a:1,k:[{i:{x:0,y:.748},o:{x:.167,y:.167},n:"0_0p748_0p167_0p167",t:11,s:[157.5,140,0],e:[97.064,84.204,0],to:[0,0,0],ti:[0,0,0]},{t:31}]},a:{a:0,k:[97.064,84.204,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:11,s:[0,0,100],e:[100,100,100]},{t:31}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.675,-.565],[0,0],[0,0],[-.287,-.743],[0,0],[0,0],[-.872,.067],[0,0],[0,0],[-.226,.849],[0,0],[0,0],[.734,.459],[0,0],[0,0]],o:[[0,0],[0,0],[-.77,-.208],[0,0],[0,0],[-.491,.73],[0,0],[0,0],[.53,.677],[0,0],[0,0],[.814,-.312],[0,0],[0,0],[-.026,-.875]],v:[[2.135,-8.142],[-1.43,-5.157],[-5.831,-6.348],[-7.113,-4.926],[-5.467,-.674],[-8.064,3.186],[-7.141,4.812],[-2.557,4.454],[.239,8.029],[2.09,7.613],[3.277,3.141],[7.602,1.493],[7.822,-.391],[3.974,-2.799],[3.851,-7.393]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[97.039,84.191],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:20,ty:4,nm:"Ebene 25 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3,s:[-256],e:[0]},{t:23}]},p:{a:1,k:[{i:{x:0,y:.718},o:{x:.167,y:.167},n:"0_0p718_0p167_0p167",t:3,s:[157.5,140,0],e:[78.559,168.874,0],to:[0,0,0],ti:[0,0,0]},{t:23}]},a:{a:0,k:[78.559,168.874,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:3,s:[0,0,100],e:[100,100,100]},{t:23}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.516,-.432],[0,0],[0,0],[-.219,-.569],[0,0],[0,0],[-.668,.051],[0,0],[0,0],[-.173,.65],[0,0],[0,0],[.562,.351],[0,0],[0,0]],o:[[0,0],[0,0],[-.588,-.159],[0,0],[0,0],[-.376,.559],[0,0],[0,0],[.405,.518],[0,0],[0,0],[.623,-.239],[0,0],[0,0],[-.02,-.669]],v:[[1.633,-6.229],[-1.096,-3.945],[-4.463,-4.856],[-5.442,-3.768],[-4.183,-.516],[-6.17,2.436],[-5.463,3.681],[-1.958,3.407],[.182,6.143],[1.598,5.824],[2.507,2.403],[5.814,1.142],[5.984,-.299],[3.04,-2.141],[2.945,-5.656]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[78.54,168.865],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:21,ty:4,nm:"Ebene 26 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:17,s:[50],e:[18]},{t:37}]},p:{a:1,k:[{i:{x:0,y:.897},o:{x:.167,y:.167},n:"0_0p897_0p167_0p167",t:17,s:[157.5,140,0],e:[155.771,214.44,0],to:[0,0,0],ti:[0,0,0]},{t:37}]},a:{a:0,k:[155.771,214.44,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.008,1.008,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,15.952]},n:["0p042_1p008_0p167_0p167","0p042_1p008_0p167_0p167","0p833_-26p778_0p167_15p952"],t:17,s:[0,0,100],e:[67,67,100]},{t:37}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[1.312,-.183],[0,0],[0,0],[.227,-1.177],[0,0],[0,0],[-1.168,-.61],[0,0],[0,0],[-.967,.904],[0,0],[0,0],[.57,1.171],[0,0],[0,0]],o:[[0,0],[0,0],[-.816,-.879],[0,0],[0,0],[-1.21,.541],[0,0],[0,0],[.137,1.287],[0,0],[0,0],[1.289,.251],[0,0],[0,0],[.665,-1.137]],v:[[10.542,-8.02],[3.609,-7.053],[-1.06,-12.084],[-3.829,-11.291],[-5.121,-4.55],[-11.514,-1.696],[-11.632,1.119],[-5.496,4.318],[-4.779,11.114],[-2.084,12.058],[2.999,7.295],[9.835,8.642],[11.62,6.414],[8.627,.269],[12.136,-5.695]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[155.828,214.455],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0},{ddd:0,ind:22,ty:4,nm:"Ebene 27 Konturen",sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:11,s:[-239],e:[0]},{t:31}]},p:{a:1,k:[{i:{x:0,y:.5},o:{x:.167,y:.167},n:"0_0p5_0p167_0p167",t:11,s:[157.5,140,0],e:[219.606,61.933,0],to:[0,0,0],ti:[0,0,0]},{t:31}]},a:{a:0,k:[219.606,61.933,0]},s:{a:1,k:[{i:{x:[.042,.042,.833],y:[1.006,1.006,-26.778]},o:{x:[.167,.167,.167],y:[.167,.167,16.667]},n:["0p042_1p006_0p167_0p167","0p042_1p006_0p167_0p167","0p833_-26p778_0p167_16p667"],t:11,s:[0,0,100],e:[100,100,100]},{t:31}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.946,-.131],[0,0],[0,0],[.163,-.849],[0,0],[0,0],[-.842,-.44],[0,0],[0,0],[-.697,.652],[0,0],[0,0],[.411,.845],[0,0],[0,0]],o:[[0,0],[0,0],[-.588,-.633],[0,0],[0,0],[-.872,.39],[0,0],[0,0],[.099,.928],[0,0],[0,0],[.929,.181],[0,0],[0,0],[.479,-.819]],v:[[7.601,-5.783],[2.602,-5.086],[-.764,-8.713],[-2.76,-8.141],[-3.693,-3.281],[-8.301,-1.223],[-8.387,.807],[-3.962,3.114],[-3.445,8.013],[-1.503,8.694],[2.163,5.259],[7.09,6.23],[8.378,4.624],[6.219,.195],[8.749,-4.107]],c:!0}},nm:"Pfad 1",mn:"ADBE Vector Shape - Group"},{ty:"fl",c:{a:0,k:[1,.729,.031,1]},o:{a:0,k:100},r:1,nm:"Fläche 1",mn:"ADBE Vector Graphic - Fill"},{ty:"tr",p:{a:0,k:[219.647,61.944],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformieren"}],nm:"Gruppe 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group"}],ip:0,op:150,st:0,bm:0}]}},323:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(46),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_native__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(186),styles=react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({root:{flex:1,alignItems:"center",justifyContent:"center",minHeight:"100vh"}});__webpack_exports__.a=function(renderStory){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__.View,{style:styles.root},renderStory())}},324:function(module,exports,__webpack_require__){__webpack_require__(325),__webpack_require__(441),module.exports=__webpack_require__(442)},442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(322),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(90),_decorator_centered__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(323);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_decorator_centered__WEBPACK_IMPORTED_MODULE_2__.a),Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_0__.setOptions)({name:"Lottie",url:"https://react-native-web-community.github.io/react-native-web-lottie",goFullScreen:!1,showLeftPanel:!0,showDownPanel:!1,downPanelInRight:!1}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function(){__webpack_require__(708)},module)}.call(this,__webpack_require__(236)(module))},708:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(46),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lottie_react_native__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(187),lottie_react_native__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lottie_react_native__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(90);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Lottie",module).add("basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lottie_react_native__WEBPACK_IMPORTED_MODULE_1___default.a,{source:__webpack_require__(321),autoPlay:!0})}).add("loop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lottie_react_native__WEBPACK_IMPORTED_MODULE_1___default.a,{source:__webpack_require__(321),loop:!0,autoPlay:!0})})}.call(this,__webpack_require__(236)(module))}},[[324,1,2]]]);
//# sourceMappingURL=main.9de0a314e42e1192fb40.bundle.js.map