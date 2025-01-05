const fs = require('fs')

var logomenu = [
"https://zero-two.info/uploads/images/file-1733536278535-794802122.jpeg",
"https://zero-two.info/uploads/videos/file-1733536630638-26660494.mp4",
"https://zero-two.info/uploads/images/file-1733536282804-294316990.jpeg",
"https://zero-two.info/uploads/videos/file-1733536622316-887112825.mp4",
"https://zero-two.info/uploads/images/file-1733536309235-730309415.jpeg",
"https://zero-two.info/uploads/videos/file-1733536613393-542080951.mp4",
"https://zero-two.info/uploads/images/file-1733536289189-686143659.jpeg",
"https://zero-two.info/uploads/videos/file-1733536604029-828730782.mp4",
"https://zero-two.info/uploads/images/file-1733536300158-440224597.jpeg",
"https://zero-two.info/uploads/videos/file-1733536597069-766596205.mp4"
]

var menulogo = [
"https://zero-two.info/uploads/images/file-1733536789667-928924445.jpeg",
"https://zero-two.info/uploads/videos/file-1733536980093-518638108.mp4",
"https://zero-two.info/uploads/images/file-1733536794882-482566543.jpeg",
"https://zero-two.info/uploads/videos/file-1733536981091-2826154.mp4",
"https://zero-two.info/uploads/images/file-1733536800542-74246230.jpeg",
"https://zero-two.info/uploads/videos/file-1733536998760-788207329.mp4",
"https://zero-two.info/uploads/images/file-1733536806020-278162621.jpeg",
"https://zero-two.info/uploads/videos/file-1733537006610-989764119.mp4",
"https://zero-two.info/uploads/images/file-1733536811949-15686311.jpeg",
"https://zero-two.info/uploads/videos/file-1733537014602-851318231.mp4"
]

var menuadmins = [
"https://zero-two.info/uploads/images/file-1733537201166-451388996.jpeg",
"https://zero-two.info/uploads/videos/file-1733537402252-417788243.mp4",
"https://zero-two.info/uploads/images/file-1733537206141-186802211.jpeg",
"https://zero-two.info/uploads/videos/file-1733537422122-214822302.mp4",
"https://zero-two.info/uploads/images/file-1733537211287-768594098.jpeg",
"https://zero-two.info/uploads/videos/file-1733537426881-41980665.mp4",
"https://zero-two.info/uploads/images/file-1733537216743-936455014.jpeg",
"https://zero-two.info/uploads/videos/file-1733537435901-895599943.mp4",
"https://zero-two.info/uploads/images/file-1733537223369-286952899.jpeg",
"https://zero-two.info/uploads/videos/file-1733537439903-294290858.mp4"
]

var menudonos = [
"https://zero-two.info/uploads/images/file-1733537565463-336037208.jpeg",
"https://zero-two.info/uploads/videos/file-1733537753533-454777866.mp4",
"https://zero-two.info/uploads/images/file-1733537571271-64898514.jpeg",
"https://zero-two.info/uploads/videos/file-1733537775601-377461096.mp4",
"https://zero-two.info/uploads/images/file-1733537576604-708196277.jpeg",
"https://zero-two.info/uploads/videos/file-1733537780264-557310892.mp4",
"https://zero-two.info/uploads/images/file-1733537581518-455444910.jpeg",
"https://zero-two.info/uploads/videos/file-1733537791242-138016916.mp4",
"https://zero-two.info/uploads/images/file-1733537589420-249850153.jpeg",
"https://zero-two.info/uploads/videos/file-1733537792313-846231515.mp4"
]

var menuefeitos = [
"https://zero-two.info/uploads/images/file-1733537929645-642375871.jpeg",
"https://zero-two.info/uploads/videos/file-1733538069732-708111722.mp4",
"https://zero-two.info/uploads/images/file-1733537930189-405125686.jpeg",
"https://zero-two.info/uploads/videos/file-1733538086043-862411895.mp4",
"https://zero-two.info/uploads/images/file-1733537929998-322048805.jpeg",
"https://zero-two.info/uploads/videos/file-1733538100337-284626738.mp4",
"https://zero-two.info/uploads/images/file-1733537930345-170259371.jpeg",
"https://zero-two.info/uploads/videos/file-1733538103854-591014983.mp4",
"https://zero-two.info/uploads/images/file-1733537931543-219626123.jpeg",
"https://zero-two.info/uploads/videos/file-1733538113709-860406877.mp4"
]

var menualteradores = [
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/IMG-20240628-WA0015.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/v2_tiktok7364729538007321873.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/IMG-20240628-WA0016.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/v2_tiktok7379727291850493217.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/IMG-20240628-WA0038.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/v2_tiktok7382290141886385440.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/IMG-20240628-WA0043.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/v2_tiktok7359261251291204897.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/jstnx33-20240625-0001.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Menualteradores/v2_tiktok7382607056278195473.mp4"
]

var menubrincadeiras = [
"https://zero-two.info/uploads/images/file-1733538459489-60762199.jpeg",
"https://zero-two.info/uploads/videos/file-1733538636339-248214989.mp4",
"https://zero-two.info/uploads/images/file-1733538459763-564439209.jpeg",
"https://zero-two.info/uploads/videos/file-1733538645508-559206072.mp4",
"https://zero-two.info/uploads/images/file-1733538460175-185799323.jpeg",
"https://zero-two.info/uploads/videos/file-1733538652646-330566870.mp4",
"https://zero-two.info/uploads/images/file-1733538460636-872029826.jpeg",
"https://zero-two.info/uploads/videos/file-1733538695702-226608858.mp4",
"https://zero-two.info/uploads/images/file-1733538461305-652433675.jpeg",
"https://zero-two.info/uploads/videos/file-1733538697030-829787580.mp4"
]

var menupremium = [
"https://zero-two.info/uploads/images/file-1733538835483-572741924.jpeg",
"https://zero-two.info/uploads/videos/file-1733539104628-555386134.mp4",
"https://zero-two.info/uploads/images/file-1733538835585-823288152.jpeg",
"https://zero-two.info/uploads/videos/file-1733539125529-193656759.mp4",
"https://zero-two.info/uploads/images/file-1733538835782-665700545.jpeg",
"https://zero-two.info/uploads/videos/file-1733539152321-966572795.mp4",
"https://zero-two.info/uploads/images/file-1733538836597-13343988.jpeg",
"https://zero-two.info/uploads/videos/file-1733539154411-309186642.mp4",
"https://zero-two.info/uploads/images/file-1733538837109-111288036.jpeg",
"https://zero-two.info/uploads/videos/file-1733539155662-773316203.mp4"
]

var infodonos = [
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/039eb936050f8215625698202c8a56f1.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/v2_tiktok7337496851601542406.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/1026ef3ce4bb09e93f87d4462bf5a5df.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/v2_tiktok7374474300033699104.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/b917d54aba01da03d359bd96c963855a.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/v2_tiktok7356464392420019461.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/datea.live2.0-20240623-0001.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/v2_tiktok7356588124123696400.mp4",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/IMG-20240627-WA0582.jpg",
"https://luquinhasdomina.sirv.com/Infinity-bot/Infodono/v2_tiktok7359474153897921797.mp4"
]

var menucoins = [
"https://zero-two.info/uploads/images/file-1733539450807-648985884.jpeg",
"https://zero-two.info/uploads/videos/file-1733539603784-195739542.mp4",
"https://zero-two.info/uploads/images/file-1733539451052-857392516.jpeg",
"https://zero-two.info/uploads/videos/file-1733539615563-273147836.mp4",
"https://zero-two.info/uploads/images/file-1733539451522-993164958.jpeg",
"https://zero-two.info/uploads/videos/file-1733539625066-42950688.mp4",
"https://zero-two.info/uploads/images/file-1733539451752-73695566.jpeg",
"https://zero-two.info/uploads/videos/file-1733539634519-737112516.mp4",
"https://zero-two.info/uploads/images/file-1733539452370-412099543.jpeg",
"https://zero-two.info/uploads/videos/file-1733539643168-850345783.mp4"
]

var menuzafkiel = [
"https://file.btch.rf.gd/file/wav5qroht97m2z3a6x7v.mp4",
"https://file.btch.rf.gd/file/bahmesfmiy86w4ipwylj.mp4",
"https://file.btch.rf.gd/file/29qof2kmt17wxaecbdae.mp4",
"https://file.btch.rf.gd/file/qxwc0p78qoa3hcnxgone.mp4",
"https://file.btch.rf.gd/file/sz0r5e5he8icw0s0n49x.mp4",
"https://agathabot.com.br/uploads/images/file-1730274766542-11969689.jpeg",
"https://pomf2.lain.la/f/49xe96ca.jpg",
"https://file.btch.rf.gd/file/lmu0nreeh19o049zj5m6.jpg",
"https://file.btch.rf.gd/file/q00kecs8047rmbpd7e63.jpg",
"https://file.btch.rf.gd/file/329d1j149e4axa3jky2p.jpg"
]

module.exports = { logomenu, menulogo, menuadmins, menudonos, menuefeitos, menualteradores, menubrincadeiras, menupremium, infodonos, menucoins, menuzafkiel }