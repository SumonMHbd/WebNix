(function(){
  /* ------------------------------------------------------------------
     TWO LINES TO CHANGE FOR WORDPRESS
     STB_ASSETS   -> where the "assets" folder contents were uploaded
     WAITLIST_URL -> the registration / waitlist link
     ------------------------------------------------------------------ */
  var STB_ASSETS = window.STB_ASSETS || 'https://digitaldropouts.net/wp-content/uploads/stb-storm-v2/';
  /* EVERY LINK ON THE PAGE LIVES HERE. Change a value, done.
     Leave waitlist empty ('') until the registration page exists: the buttons then scroll to the bottom of the page. */
  var STB_LINKS = window.STB_LINKS || {
    waitlist:     'https://digitaldropouts.net/waitlist/',
    contact:      'https://digitaldropouts.net/contact',
    login:        'https://student.dropoutskool.com/login',
    youtube:      'yw5lXk3GNy8',              /* the ten hour testimonial video id (the part after v= in the YouTube link) */
    privacy:      'https://digitaldropouts.net/privacy-policy',
    refund:       'https://digitaldropouts.net/refund-policy',
    cancellation: 'https://digitaldropouts.net/cancellation-policy',
    terms:        'https://digitaldropouts.net/terms',
    success:      'https://digitaldropouts.net/success',
    facebook:     'https://www.facebook.com/digitaldropouts',
    instagram:    'https://www.instagram.com/digital.dropouts/',
    youtubeChannel: 'https://www.youtube.com/@ShowOffsDhk'
  };
  var WAITLIST_URL = STB_LINKS.waitlist || '';

  var root = document.getElementById('stb-storm');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.matchMedia('(max-width: 900px)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;
  var BIG = (function(){ var w = innerWidth, h = innerHeight; return w >= 3600 && h >= 1900 ? 2 : w >= 2800 && h >= 1500 ? 1.6 : w >= 2200 && h >= 1200 ? 1.3 : 1; })();   /* big monitors: everything grows with the screen */

  /* ---------- the voice in the storm ---------- */
  var STORY_FILE = 'story.mp3';   /* one narration, start to finish */
  var BED_FILE   = 'bed.mp3';     /* the music under the storm, loops forever */

  /* ---------- manifest ---------- */
  var SUCCESS = [["su-001.webp",900,445],["su-002.webp",900,474],["su-003.webp",900,615],["su-004.webp",900,540],["su-005.webp",900,302],["su-006.webp",900,319],["su-007.webp",900,175],["su-008.webp",900,632],["su-009.webp",900,353],["su-010.webp",828,1120],["su-011.webp",900,539],["su-012.webp",900,896],["su-013.webp",900,713],["su-014.webp",826,1104],["su-015.webp",900,163],["su-016.webp",900,983],["su-017.webp",900,588],["su-018.webp",882,976],["su-019.webp",900,1054],["su-020.webp",900,820],["su-021.webp",900,580],["su-022.webp",900,636],["su-023.webp",900,699],["su-024.webp",900,1029],["su-025.webp",764,950],["su-026.webp",900,1177],["su-027.webp",900,1130],["su-028.webp",900,576],["su-029.webp",900,678],["su-030.webp",900,348],["su-031.webp",900,903],["su-032.webp",900,475],["su-033.webp",900,496],["su-034.webp",900,819],["su-035.webp",900,575],["su-036.webp",900,760],["su-037.webp",900,884],["su-038.webp",900,560],["su-039.webp",900,615],["su-040.webp",900,653],["su-041.webp",900,959],["su-042.webp",900,1045],["su-043.webp",900,1050],["su-044.webp",900,1079],["su-045.webp",900,1000],["su-046.webp",900,996],["su-047.webp",900,955],["su-048.webp",900,1022],["su-049.webp",900,157],["su-050.webp",900,198],["su-051.webp",900,387],["su-052.webp",900,921],["su-053.webp",386,838],["su-054.webp",826,888],["su-055.webp",900,453],["su-056.webp",900,951],["su-057.webp",706,1248],["su-058.webp",900,391],["su-059.webp",900,231],["su-060.webp",894,430],["su-061.webp",884,290],["su-062.webp",900,292],["su-063.webp",692,1176],["su-064.webp",900,713],["su-065.webp",688,1176],["su-066.webp",900,942],["su-067.webp",900,865],["su-068.webp",900,827],["su-069.webp",900,121],["su-070.webp",900,154],["su-071.webp",900,1035],["su-072.webp",900,402],["su-073.webp",900,1039],["su-074.webp",900,876],["su-075.webp",900,1072],["su-076.webp",900,1272],["su-077.webp",900,1198],["su-078.webp",702,1046],["su-079.webp",900,807],["su-080.webp",896,222],["su-081.webp",886,286],["su-082.webp",894,172],["su-083.webp",900,200],["su-084.webp",600,168],["su-085.webp",694,190],["su-086.webp",878,356],["su-087.webp",892,260],["su-088.webp",886,158],["su-089.webp",878,138],["su-090.webp",838,170],["su-091.webp",888,174],["su-092.webp",794,92],["su-093.webp",818,138],["su-094.webp",900,892],["su-095.webp",900,713],["su-096.webp",900,529],["su-097.webp",900,1067],["su-098.webp",900,1016],["su-099.webp",900,1291],["su-100.webp",900,722],["su-101.webp",900,1039],["su-102.webp",900,979],["su-103.webp",900,915],["su-104.webp",900,919],["su-105.webp",900,1050],["su-106.webp",900,859],["su-107.webp",900,589],["su-108.webp",900,787],["su-109.webp",900,636],["su-110.webp",834,302],["su-111.webp",900,769],["su-112.webp",808,298],["su-113.webp",810,322],["su-114.webp",900,248],["su-115.webp",900,794],["su-116.webp",900,729],["su-117.webp",900,403],["su-118.webp",900,403],["su-119.webp",900,275],["su-120.webp",900,356],["su-121.webp",900,457],["su-122.webp",900,554],["su-123.webp",900,386],["su-124.webp",900,913],["su-125.webp",900,294],["su-126.webp",900,614],["su-127.webp",900,172],["su-128.webp",816,182],["su-129.webp",900,258],["su-130.webp",900,690],["su-131.webp",900,960],["su-132.webp",900,778],["su-133.webp",680,844],["su-134.webp",698,886],["su-135.webp",690,1028],["su-136.webp",694,876],["su-137.webp",900,231],["su-138.webp",900,186],["su-139.webp",900,304],["su-140.webp",900,299],["su-141.webp",900,408],["su-142.webp",900,213],["su-143.webp",900,187],["su-144.webp",900,204],["su-145.webp",900,412],["su-146.webp",900,237],["su-147.webp",900,207],["su-148.webp",900,128],["su-149.webp",900,612],["su-150.webp",900,138],["su-151.webp",900,116],["su-152.webp",900,138],["su-153.webp",900,161],["su-154.webp",900,126],["su-155.webp",900,161],["su-156.webp",900,210],["su-157.webp",900,152],["su-158.webp",900,210],["su-159.webp",900,177],["su-160.webp",900,129],["su-161.webp",900,114],["su-162.webp",900,117],["su-163.webp",900,141],["su-164.webp",452,169],["su-165.webp",477,158],["su-166.webp",900,327],["su-167.webp",900,200],["su-168.webp",900,525],["su-169.webp",900,481],["su-170.webp",900,230],["su-171.webp",900,498],["su-172.webp",592,954],["su-173.webp",900,128],["su-174.webp",900,263],["su-175.webp",900,143],["su-176.webp",900,154],["su-177.webp",900,154],["su-178.webp",900,184],["su-179.webp",900,184],["su-180.webp",900,565],["su-181.webp",900,148],["su-182.webp",900,176],["su-183.webp",900,122],["su-184.webp",900,193],["su-185.webp",900,102],["su-186.webp",572,980],["su-187.webp",900,273],["su-188.webp",900,142],["su-189.webp",900,142],["su-190.webp",900,142],["su-191.webp",900,163],["su-192.webp",900,163],["su-193.webp",900,217],["su-194.webp",900,238],["su-195.webp",900,129],["su-196.webp",900,154],["su-197.webp",900,246],["su-198.webp",900,321],["su-199.webp",900,321],["su-200.webp",900,166],["su-201.webp",900,154],["su-202.webp",900,133],["su-203.webp",900,175],["su-204.webp",900,404],["su-205.webp",900,270],["su-206.webp",814,958],["su-207.webp",900,205],["su-208.webp",900,238],["su-209.webp",900,324],["su-210.webp",900,231],["su-211.webp",900,415],["su-212.webp",900,497],["su-213.webp",576,1280],["su-214.webp",576,1280],["su-215.webp",576,1280],["su-216.webp",900,276],["su-217.webp",900,279]];
  var GIVE_COUNT = 62;

  /* the screenshots that float around: one fixed set per visit, so the gate can load exactly those (the full 217 only load behind "See all") */
  
var MH_PORTFOLIO = [
  { file: "/portfolio/soil-books.png", w: 1364, h: 3657, title: "SoiLBooks.com", desc: "Full E-Commerce Book Store & Custom WooCommerce Platform", link: "http://www.soilbooks.com" },
  { file: "/portfolio/mykurigram.png", w: 1364, h: 3726, title: "My Kurigram", desc: "News Portal & Dynamic Community Magazine Platform", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/mh-sumon.png", w: 1364, h: 3592, title: "MH Sumon Portfolio", desc: "Personal Brand & Web Agency Showcase Website", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/sales.png", w: 1368, h: 776, title: "Sales.com Landing Page", desc: "High-Converting Product Sales & Funnel Architecture", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/landing-page.png", w: 1364, h: 3491, title: "Modern Product Landing", desc: "Clean Responsive One-Page Product Launch Showcase", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/activebox.png", w: 1376, h: 3778, title: "ActiveBox Web App", desc: "Hand-Coded HTML5, CSS3, Bootstrap & Interactive UI", link: "https://sumonmhbd.github.io/activeBox/" }
];

var POOL = (function(){
  var arr = [];
  for (var k = 0; k < 6; k++) {
    MH_PORTFOLIO.forEach(function(item){
      arr.push([item.file, item.w, item.h, item.title, item.desc, item.link]);
    });
  }
  return arr;
})();

  /* ---------- THE LOADING GATE ----------
     Level 1 (before "Take me in"): everything seen and heard first. Videos and sounds are downloaded whole, then handed to the page.
     A 15 second countdown makes sure nobody is ever stuck: when it ends, the gate opens with whatever is ready and the rest keeps coming.
     Level 2 (after entering): the remaining giveaway photos, floating screenshots and the Baba's answers load quietly in the background.
     Returning visitors: the files are already on their device, so "Take me in" is ready the moment the sound is on. */
  var SIZES = {"giveaways/gi-014.webp":207940,"giveaways/gi-025.webp":86484,"giveaways/gi-049.webp":338086,"giveaways/gi-040.webp":135530,"giveaways/gi-050.webp":287556,"giveaways/gi-045.webp":162492,"giveaways/gi-057.webp":390760,"giveaways/gi-041.webp":124066,"giveaways/gi-043.webp":130264,"giveaways/gi-061.webp":177582,"giveaways/gi-017.webp":146096,"giveaways/gi-034.webp":121942,"giveaways/gi-013.webp":154934,"giveaways/gi-052.webp":360222,"giveaways/gi-005.webp":118326,"giveaways/gi-016.webp":172126,"giveaways/gi-026.webp":84370,"giveaways/gi-029.webp":110668,"giveaways/gi-060.webp":150672,"giveaways/gi-044.webp":91978,"giveaways/gi-015.webp":147456,"giveaways/gi-021.webp":77904,"giveaways/gi-062.webp":204236,"giveaways/gi-033.webp":97692,"giveaways/gi-053.webp":397492,"giveaways/gi-019.webp":151334,"giveaways/gi-020.webp":152196,"giveaways/gi-018.webp":250462,"giveaways/gi-006.webp":120934,"giveaways/gi-007.webp":127326,"giveaways/gi-048.webp":292844,"giveaways/gi-011.webp":198030,"giveaways/gi-051.webp":335364,"giveaways/gi-003.webp":117672,"giveaways/gi-024.webp":104294,"giveaways/gi-056.webp":220756,"giveaways/gi-036.webp":149732,"giveaways/gi-008.webp":117252,"giveaways/gi-022.webp":100560,"giveaways/gi-023.webp":90892,"giveaways/gi-012.webp":130324,"giveaways/gi-046.webp":306806,"giveaways/gi-028.webp":101198,"giveaways/gi-032.webp":132926,"giveaways/gi-004.webp":116796,"giveaways/gi-027.webp":104256,"giveaways/gi-038.webp":142444,"giveaways/gi-002.webp":188322,"giveaways/gi-009.webp":142482,"giveaways/gi-059.webp":351720,"giveaways/gi-037.webp":115194,"giveaways/gi-058.webp":216278,"giveaways/gi-031.webp":98862,"giveaways/gi-001.webp":69146,"giveaways/gi-039.webp":99778,"giveaways/gi-047.webp":388212,"giveaways/gi-035.webp":82342,"giveaways/gi-042.webp":109766,"giveaways/gi-055.webp":352656,"giveaways/gi-030.webp":125458,"giveaways/gi-010.webp":126268,"giveaways/gi-054.webp":385676,"frames/m/v-05.webp":391946,"frames/m/v-03.webp":392556,"frames/m/v-02.webp":392950,"frames/m/v-04.webp":393620,"frames/m/v-01.webp":389416,"frames/d/v-09.webp":525212,"frames/d/v-10.webp":518626,"frames/d/v-07.webp":521198,"frames/d/v-08.webp":523300,"frames/d/v-05.webp":525106,"frames/d/v-03.webp":522536,"frames/d/v-06.webp":521432,"frames/d/v-02.webp":523868,"frames/d/v-04.webp":525276,"frames/d/v-01.webp":515504,"img/ssl-com.png":75510,"img/storm-loop-poster.jpg":50812,"img/hero-arms-poster.jpg":161079,"img/faq-still.jpg":106924,"img/dd-logo.png":11091,"audio/faq-03.mp3":105405,"audio/faq-02.mp3":126765,"audio/thunder-4.mp3":134325,"audio/thunder-1.mp3":104973,"audio/thunder-2.mp3":121749,"audio/faq-05.mp3":135165,"audio/faq-00.mp3":43005,"audio/faq-08.mp3":115485,"audio/faq-10.mp3":220365,"audio/faq-09.mp3":111165,"audio/faq-07.mp3":125565,"audio/faq-04.mp3":58125,"audio/story.mp3":788853,"audio/faq-06.mp3":182445,"audio/bed.mp3":1247853,"audio/faq-01.mp3":215805,"audio/thunder-3.mp3":95133,"success/su-213.webp":71726,"success/su-033.webp":52870,"success/su-131.webp":78968,"success/su-105.webp":141432,"success/su-164.webp":14106,"success/su-127.webp":17214,"success/su-039.webp":68326,"success/su-119.webp":22690,"success/su-190.webp":12370,"success/su-038.webp":43474,"success/su-216.webp":22014,"success/su-203.webp":10916,"success/su-137.webp":13814,"success/su-114.webp":23478,"success/su-096.webp":46326,"success/su-006.webp":36854,"success/su-101.webp":134568,"success/su-103.webp":134322,"success/su-074.webp":57268,"success/su-124.webp":74638,"success/su-088.webp":15202,"success/su-073.webp":28668,"success/su-044.webp":48092,"success/su-157.webp":18302,"success/su-112.webp":14174,"success/su-091.webp":15280,"success/su-158.webp":25154,"success/su-162.webp":12896,"success/su-200.webp":20702,"success/su-149.webp":42544,"success/su-141.webp":45522,"success/su-144.webp":15304,"success/su-160.webp":11292,"success/su-179.webp":15042,"success/su-028.webp":28098,"success/su-049.webp":16154,"success/su-022.webp":34184,"success/su-145.webp":33446,"success/su-201.webp":16596,"success/su-138.webp":8020,"success/su-132.webp":55540,"success/su-195.webp":11772,"success/su-008.webp":72772,"success/su-011.webp":37810,"success/su-194.webp":24340,"success/su-027.webp":129820,"success/su-156.webp":22100,"success/su-002.webp":21626,"success/su-196.webp":8416,"success/su-016.webp":53542,"success/su-209.webp":34954,"success/su-150.webp":18088,"success/su-168.webp":35380,"success/su-174.webp":30100,"success/su-191.webp":19648,"success/su-173.webp":11874,"success/su-082.webp":15066,"success/su-042.webp":36116,"success/su-097.webp":74740,"success/su-085.webp":13658,"success/su-070.webp":11172,"success/su-064.webp":73234,"success/su-110.webp":15416,"success/su-065.webp":37242,"success/su-109.webp":51874,"success/su-130.webp":35040,"success/su-075.webp":48092,"success/su-102.webp":116726,"success/su-175.webp":14632,"success/su-012.webp":57556,"success/su-048.webp":50242,"success/su-007.webp":13274,"success/su-142.webp":19610,"success/su-017.webp":29532,"success/su-086.webp":49212,"success/su-041.webp":50124,"success/su-025.webp":41940,"success/su-067.webp":61308,"success/su-208.webp":19216,"success/su-166.webp":30676,"success/su-095.webp":58602,"success/su-135.webp":72716,"success/su-140.webp":24766,"success/su-087.webp":33002,"success/su-214.webp":77482,"success/su-021.webp":42044,"success/su-045.webp":77674,"success/su-153.webp":17942,"success/su-026.webp":86838,"success/su-004.webp":39372,"success/su-154.webp":13452,"success/su-189.webp":11154,"success/su-139.webp":39976,"success/su-193.webp":17674,"success/su-055.webp":33982,"success/su-057.webp":105036,"success/su-207.webp":18118,"success/su-167.webp":14696,"success/su-192.webp":17080,"success/su-165.webp":12156,"success/su-182.webp":19362,"success/su-018.webp":47876,"success/su-197.webp":18424,"success/su-059.webp":17448,"success/su-185.webp":7816,"success/su-014.webp":68066,"success/su-121.webp":34450,"success/su-034.webp":81832,"success/su-217.webp":31602,"success/su-084.webp":9780,"success/su-094.webp":103226,"success/su-205.webp":29130,"success/su-134.webp":56580,"success/su-123.webp":38518,"success/su-107.webp":44002,"success/su-090.webp":11166,"success/su-029.webp":49536,"success/su-202.webp":12814,"success/su-024.webp":60440,"success/su-136.webp":93058,"success/su-071.webp":99040,"success/su-152.webp":13502,"success/su-106.webp":53474,"success/su-143.webp":22536,"success/su-118.webp":24596,"success/su-035.webp":47404,"success/su-089.webp":9566,"success/su-120.webp":37848,"success/su-060.webp":34898,"success/su-003.webp":33196,"success/su-037.webp":70802,"success/su-056.webp":49592,"success/su-115.webp":56670,"success/su-053.webp":43988,"success/su-058.webp":37308,"success/su-180.webp":72290,"success/su-199.webp":17652,"success/su-211.webp":41048,"success/su-051.webp":36830,"success/su-186.webp":102060,"success/su-031.webp":49184,"success/su-009.webp":26082,"success/su-125.webp":30690,"success/su-177.webp":16862,"success/su-170.webp":21480,"success/su-188.webp":12924,"success/su-108.webp":60208,"success/su-072.webp":45808,"success/su-080.webp":25704,"success/su-062.webp":37330,"success/su-040.webp":77398,"success/su-117.webp":32990,"success/su-023.webp":70202,"success/su-043.webp":33178,"success/su-020.webp":42320,"success/su-001.webp":22430,"success/su-163.webp":15300,"success/su-036.webp":43836,"success/su-100.webp":33324,"success/su-133.webp":85216,"success/su-076.webp":139276,"success/su-147.webp":20096,"success/su-030.webp":26480,"success/su-198.webp":24020,"success/su-146.webp":18740,"success/su-126.webp":67032,"success/su-078.webp":58646,"success/su-204.webp":43972,"success/su-129.webp":32764,"success/su-013.webp":51308,"success/su-176.webp":13774,"success/su-047.webp":51142,"success/su-063.webp":27892,"success/su-046.webp":35540,"success/su-081.webp":35410,"success/su-215.webp":88436,"success/su-184.webp":17168,"success/su-212.webp":38498,"success/su-015.webp":10742,"success/su-093.webp":10100,"success/su-113.webp":18420,"success/su-052.webp":44836,"success/su-104.webp":78362,"success/su-178.webp":9608,"success/su-061.webp":37878,"success/su-054.webp":45820,"success/su-183.webp":11076,"success/su-050.webp":12126,"success/su-116.webp":57754,"success/su-151.webp":13452,"success/su-210.webp":22770,"success/su-172.webp":56270,"success/su-159.webp":21938,"success/su-148.webp":12792,"success/su-032.webp":42952,"success/su-092.webp":6704,"success/su-099.webp":53518,"success/su-068.webp":37990,"success/su-161.webp":9456,"success/su-128.webp":12568,"success/su-206.webp":52882,"success/su-019.webp":59120,"success/su-169.webp":12078,"success/su-111.webp":46322,"success/su-010.webp":52808,"success/su-098.webp":87070,"success/su-069.webp":11552,"success/su-079.webp":194230,"success/su-155.webp":13490,"success/su-187.webp":19766,"success/su-083.webp":12490,"success/su-077.webp":41720,"success/su-066.webp":70670,"success/su-181.webp":10288,"success/su-005.webp":13800,"success/su-122.webp":49450,"success/su-171.webp":38794,"video/faq-orb.mp4":1422434,"video/hero-arms-mobile.mp4":707724,"video/storm-loop-mobile.mp4":512021,"video/faq-up-mobile.mp4":273667,"video/storm-loop.mp4":2275540,"video/faq-up.mp4":1258452,"video/faq-orb-mobile.mp4":314847,"video/faq-idle.mp4":1618113,"video/faq-idle-mobile.mp4":346560,"video/hero-arms.mp4":2826666};
  var BLOB = {};
  function A(rel){ return BLOB[rel] || STB_ASSETS + rel; }
  /* if a site security setting refuses the downloaded copy, the player quietly switches to the normal link */
  var BLOB_REL = {};
  function fb(m){ if (!m || m.__fb) return m; m.__fb = true; m.addEventListener('error', function(){ var src = m.getAttribute('src') || m.src || ''; if (src.indexOf('blob:') === 0 && BLOB_REL[src]) { var was = !m.paused; m.src = STB_ASSETS + BLOB_REL[src]; if (was || m.autoplay || m.tagName === 'VIDEO') m.play().catch(function(){}); } }); return m; }
  var GATE = (function(){
    var el = document.getElementById('loader'), G = { on: !!el, videos: [], ready: false, entered: false };
    if (!el) return G;
    el.style.animation = 'none';   /* the script is alive: cancel the CSS safety net (it only matters if scripts are blocked) */
    var CD = 4, t0 = performance.now(), seen = false;
    try { seen = localStorage.getItem('stb-v2-seen') === '1'; } catch (e) {}
    if (seen) G.ready = true;
    var core = el.querySelector('.ld-core'), bar = el.querySelector('.ld-ring .bar'), pctEl = el.querySelector('.ld-pct b'), typeEl = el.querySelector('.ld-type'), cnt = document.getElementById('ldCount'), btn = document.getElementById('ldBtn'), fl = el.querySelector('.ld-flash');
    var ios = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (ios) el.classList.add('is-ios');
    if (isMobile || window.matchMedia('(pointer: coarse)').matches) el.classList.add('is-phone');
    if (seen) cnt.style.visibility = 'hidden';
    document.documentElement.classList.add('stb-lock');
    /* ---- what to load ---- */
    var M = isMobile ? '-mobile' : '', L1 = [], L2 = [], total = 0, done = 0;
    function item(list, rel, kind){ var w = SIZES[rel] || 150000; list.push({ rel: rel, kind: kind, w: w, got: 0 }); if (list === L1) total += w; }
    ['video/hero-arms' + M + '.mp4', 'video/storm-loop' + M + '.mp4', 'audio/story.mp3', 'audio/bed.mp3', 'audio/thunder-1.mp3', 'audio/thunder-2.mp3', 'audio/thunder-3.mp3', 'audio/thunder-4.mp3', 'video/faq-idle' + M + '.mp4', 'video/faq-up' + M + '.mp4', 'video/faq-orb' + M + '.mp4'].forEach(function(r){ item(L1, r, 'blob'); });
    ['img/hero-arms-poster.jpg', 'img/storm-loop-poster.jpg', 'img/faq-still.jpg'].forEach(function(r){ item(L1, r, 'img'); });
    G.plan = function(){   /* called once the whole script has run (the Baba's frame list is defined further down) */
      var F = isMobile ? BABA2.m : BABA2.d; for (var s = 1; s <= F.sheets; s++) item(L1, 'frames/' + (isMobile ? 'm' : 'd') + '/v-' + String(s).padStart(2, '0') + '.webp', 'img');
      var firstGive = isMobile ? 9 : 14;
      for (var g = 1; g <= GIVE_COUNT; g++) item(g <= firstGive ? L1 : L2, 'giveaways/gi-' + String(g).padStart(3, '0') + '.webp', 'img');
      POOL.forEach(function(p, k){ item(k < 12 ? L1 : L2, 'success/' + p[0], 'img'); });
      for (var q = 0; q <= 10; q++) item(L2, 'audio/faq-' + String(q).padStart(2, '0') + '.mp3', 'blob');
      run(L1, 6, function(){ G.l1 = true; });
    };
    function run(list, par, cb){ var i = 0, live = 0, fin = 0;
      function next(){ while (live < par && i < list.length) { live++; load(list[i++], function(){ live--; fin++; if (fin === list.length) { if (cb) cb(); } else next(); }); } }
      if (!list.length) { if (cb) cb(); return; } next(); }
    function tally(it, n){ if (it.l2) return; var d = Math.min(it.w, n) - it.got; if (d > 0) { it.got += d; done += d; } }
    function load(it, cb){
      var fin = function(){ tally(it, it.w); cb(); };
      if (it.kind === 'img') { var im = new Image(); im.decoding = 'async'; im.onload = im.onerror = fin; im.src = STB_ASSETS + it.rel; return; }
      if (!window.fetch) { fin(); return; }
      fetch(STB_ASSETS + it.rel).then(function(res){
        if (!res.ok) throw 0;
        var len = +res.headers.get('content-length') || 0; if (len) { if (!it.l2) { total += len - it.w; } it.w = len; }
        if (!res.body || !res.body.getReader) return res.blob();
        var rd = res.body.getReader(), parts = [], n = 0;
        return (function pump(){ return rd.read().then(function(r){ if (r.done) return new Blob(parts, { type: res.headers.get('content-type') || '' }); parts.push(r.value); n += r.value.length; tally(it, n); return pump(); }); })();
      }).then(function(b){ var u = URL.createObjectURL(b); BLOB[it.rel] = u; BLOB_REL[u] = it.rel; handOver(it.rel); fin(); }).catch(function(){ fin(); });
    }
    /* a video downloaded whole goes straight into its player (still hidden behind the gate) */
    function handOver(rel){ G.videos.forEach(function(v){ if (v.rel === rel && !v.el.getAttribute('src')) { fb(v.el); v.el.src = BLOB[rel]; v.el.play().catch(function(){}); } }); }
    function flushVideos(){ G.videos.forEach(function(v){ if (!v.el.getAttribute('src')) { fb(v.el); v.el.src = A(v.rel); v.el.play().catch(function(){}); } }); }
    /* ---- typed lines ---- */
    var lines = [], busy = false, queue = [], said = {};
    function say(text, hot, cond){ if (said[text]) return; said[text] = 1; var q = { t: text, hot: hot, cond: cond }; if (hot) { var k = 0; while (k < queue.length && queue[k].hot) k++; queue.splice(k, 0, q); } else queue.push(q); if (!busy) typeNext(); }   /* urgent lines jump the queue */
    function typeNext(){
      var q = queue.shift(); while (q && q.cond && !q.cond()) q = queue.shift(); if (!q) { busy = false; return; } busy = true;
      var p = document.createElement('p'); if (q.hot) p.className = 'hot'; var span = document.createElement('span'), cur = document.createElement('span'); cur.className = 'cur'; cur.textContent = '_';
      p.appendChild(span); p.appendChild(cur);
      Array.prototype.forEach.call(typeEl.children, function(o){ var c = o.querySelector('.cur'); if (c) c.remove(); o.className = (o.className.indexOf('old') >= 0 ? 'old2' : 'old') + (o.classList.contains('hot') ? ' hot' : ''); });
      while (typeEl.children.length > 2) typeEl.removeChild(typeEl.firstChild);
      typeEl.appendChild(p);
      if (reduce) { span.textContent = q.t; setTimeout(typeNext, 900); return; }
      var k = 0; (function tick(){ span.textContent = q.t.slice(0, ++k); if (k < q.t.length) setTimeout(tick, 32 + Math.random() * 30); else setTimeout(typeNext, 1100); })();
    }
    var script = seen ? ['Welcome back.', 'The Baba remembers you.'] : ['Loading MH Sumon portfolio...', 'Connecting to WordPress engine...', 'Compiling live web client designs...', 'Preparing speed-optimized showcases...', 'Opening the portal...'];
    script.forEach(function(l){ say(l, false, seen ? null : function(){ return !G.ready; }); });
    /* ---- glitches, very small, now and then ---- */
    (function glitch(){ if (G.entered || reduce) return; setTimeout(function(){ var c = Math.random() < .5 ? 'glitch' : 'glitch2'; core.classList.add(c); setTimeout(function(){ core.classList.remove(c); }, 90 + Math.random() * 90); glitch(); }, 1400 + Math.random() * 2600); })();
    /* ---- the storm answers the button ---- */
    function flashGate(s){ if (!window.gsap) return; gsap.timeline().to(fl, { opacity: .9 * s, duration: .05 }).to(fl, { opacity: .15, duration: .08 }).to(fl, { opacity: .6 * s, duration: .05 }).to(fl, { opacity: 0, duration: .7, ease: 'power2.out' }); }
    document.addEventListener('stbstorm:strike', function(){ if (!G.entered) flashGate(.7); });
    function paintBtn(){
      var tx = btn.querySelector('.tx');
      if (!soundOn) { btn.className = 'ld-btn sound'; tx.textContent = 'Turn on the sound'; btn.disabled = false; }
      else if (!G.ready) { btn.className = 'ld-btn wait'; tx.textContent = 'Take me in'; btn.disabled = false; btn.setAttribute('aria-disabled', 'true'); }
      else { btn.className = 'ld-btn go'; tx.textContent = 'Take me in'; btn.removeAttribute('aria-disabled'); }
    }
    btn.addEventListener('click', function(){
      if (!soundOn) { userMuted = false; setSound(true); el.classList.add('heard'); thunder(1); flashGate(1); say('Welcome to MH Sumon Portfolio.', true); paintBtn(); return; }
      if (!G.ready) { said['Patience. The Baba is almost here.'] = 0; say('Loading web design projects...', true, function(){ return !G.ready; }); return; }
      enter();
    });
    function enter(){
      if (G.entered) return; G.entered = true;
      try { localStorage.setItem('stb-v2-seen', '1'); } catch (e) {}
      flushVideos();
      if (!soundOn) setSound(true);
      startStory();                                   /* the voice starts right away (this click is what browsers need to allow it) */
      flashGate(1); strikeLight();
      el.classList.add('out'); document.documentElement.classList.remove('stb-lock'); if (typeof scroller !== 'undefined' && scroller) scroller.style.overflow = scroller.__ov || '';
      setTimeout(function(){ el.classList.add('gone'); }, 1200);
      heroIn();
      run(L2.map(function(it){ it.l2 = true; return it; }), 3);
    }
    G.enter = enter;
    /* ---- the clock ---- */
    var shown = CD, slowSaid = false;
    (function clock(){
      if (G.entered) return;
      var el2 = (performance.now() - t0) / 1000, frac = total ? Math.min(1, done / total) : 0;
      if (G.l1) frac = 1;
      if (!G.ready && (G.l1 || el2 >= CD)) { G.ready = true; flushVideos(); say(G.l1 ? 'The Baba is ready.' : 'Your internet gave up. The Baba did not.', true); }
      if (!soundOn && el2 > 2.8) say('Turn on the sound to experience the live showcase.', true, function(){ return !soundOn; });
      if (!G.ready && !slowSaid && el2 > 6 && frac < .5) { slowSaid = true; var notReady = function(){ return !G.ready; }; say('Your internet is slower than your excuses.', true, notReady); say('Cheap internet. Expensive dreams. Wait.', true, notReady); }
      var left = G.ready ? 0 : Math.max(0, Math.ceil(CD - el2)); shown = Math.min(shown, left);
      var txt = G.ready ? 'Ready' : 'Ready in ' + shown + 's'; if (cnt.textContent !== txt) cnt.textContent = txt;
      var pc = G.l1 ? 1 : frac; pctEl.textContent = Math.round(pc * 100);
      bar.style.strokeDashoffset = (351.9 * (1 - pc)).toFixed(1);
      paintBtn();
      setTimeout(clock, 120);
    })();
    var bgEl = el.querySelector('.ld-bg'), bgIm = new Image(); bgIm.onload = function(){ bgEl.style.backgroundImage = 'url(' + bgIm.src + ')'; bgEl.classList.add('on'); }; bgIm.src = STB_ASSETS + 'img/storm-loop-poster.jpg';
    return G;
  })();

  /* ---------- assets ---------- */
  root.querySelectorAll('[data-src]').forEach(function(el){
    var rel = (isMobile && el.getAttribute('data-src-mobile')) ? el.getAttribute('data-src-mobile') : el.getAttribute('data-src');
    if (el.tagName === 'VIDEO' && GATE.on) { GATE.videos.push({ el: el, rel: rel }); return; }   /* the gate downloads these whole first, then hands them over */
    el.src = STB_ASSETS + rel;
  });
  root.querySelectorAll('.waitlist-link').forEach(function(a){ if (WAITLIST_URL) { a.href = WAITLIST_URL; if (WAITLIST_URL.indexOf('http') === 0) { a.target = '_blank'; a.rel = 'noopener'; } } else { a.removeAttribute('href'); a.setAttribute('role', 'button'); a.tabIndex = 0; } });
  root.querySelectorAll('[data-link]').forEach(function(a){ var u = STB_LINKS[a.getAttribute('data-link')]; if (u) { a.href = u; if (u.indexOf('http') === 0) { a.target = '_blank'; a.rel = 'noopener'; } } else { a.removeAttribute('href'); } });
  var player = document.getElementById('player'), YT_ID = STB_LINKS.youtube || (player && player.dataset.youtube);
  if (player && YT_ID) {
    /* the poster shows until someone presses play; only then does YouTube load (faster page, no YouTube cookies before that) */
    player.querySelector('.poster').addEventListener('click', function(){
      if (typeof soundOn !== 'undefined' && soundOn) { userMuted = true; setSound(false); }   /* the storm goes quiet so the video can be heard */
      var ifr = document.createElement('iframe'); ifr.src = 'https://www.youtube-nocookie.com/embed/' + YT_ID + '?autoplay=1&rel=0&modestbranding=1&playsinline=1'; ifr.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'; ifr.allowFullscreen = true; ifr.title = 'Ten hours of student stories';
      player.innerHTML = ''; player.appendChild(ifr);
    });
  }

  (function(){ var retry = function(){ root.querySelectorAll('video:not([data-manual])').forEach(function(v){ if (v.paused) v.play().catch(function(){}); }); }; ['pointerdown', 'touchend', 'keydown'].forEach(function(ev){ addEventListener(ev, retry, { passive: true, once: true }); }); })();
  ['.sky-video', '.v-arms'].forEach(function(sel){
    var v = root.querySelector(sel); if (!v) return;
    var mark = function(){ v.classList.add('ready'); };
    v.addEventListener('playing', mark, { once: true });
    v.addEventListener('loadeddata', function(){ v.play().then(mark).catch(function(){}); }, { once: true });
  });

  /* ---------- audio: storm bed + thunder (synthesised), voice (files) ---------- */
  var soundOn = false, ac = null, master = null, windGain = null;
  function ensureAudio(){
    if (ac) return;
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}   /* iPhones: play the storm even when the ringer switch is on silent, like a video would */
    ac = new AC();
    master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
    var len = ac.sampleRate * 4, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) { var w = Math.random() * 2 - 1; last = (last + .02 * w) / 1.02; d[i] = last * 3.5; }
    var src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
    var lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; lp.Q.value = .7;
    windGain = ac.createGain(); windGain.gain.value = .5;
    var lfo = ac.createOscillator(); lfo.frequency.value = .07; var lfoG = ac.createGain(); lfoG.gain.value = .25; lfo.connect(lfoG); lfoG.connect(windGain.gain); lfo.start();
    var lfo2 = ac.createOscillator(); lfo2.frequency.value = .11; var lfo2G = ac.createGain(); lfo2G.gain.value = 90; lfo2.connect(lfo2G); lfo2G.connect(lp.frequency); lfo2.start();
    src.connect(lp); lp.connect(windGain); windGain.connect(master); src.start();
    var sub = ac.createOscillator(); sub.type = 'sine'; sub.frequency.value = 42; var subG = ac.createGain(); subG.gain.value = .06; sub.connect(subG); subG.connect(master); sub.start();
  }
  /* thunder: four long pre-rendered claps (crack, boom, rolling body, distant echo), picked at random */
  var THUNDER_FILES = ['thunder-1.mp3', 'thunder-2.mp3', 'thunder-3.mp3', 'thunder-4.mp3'], lastThunder = -1;
  function thunder(strength){
    if (!soundOn) return;
    strength = strength || 1;
    var i; do { i = Math.floor(Math.random() * THUNDER_FILES.length); } while (i === lastThunder && THUNDER_FILES.length > 1); lastThunder = i;
    var a = fb(new Audio(A('audio/' + THUNDER_FILES[i]))); a.volume = Math.min(1, .7 + .3 * strength); a.play().catch(function(){});
    if (ac && master) { var t = ac.currentTime + .05, o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(48, t); o.frequency.exponentialRampToValueAtTime(30, t + 3); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.35 * strength, t + .15); g.gain.exponentialRampToValueAtTime(.001, t + 4); o.connect(g); g.connect(master); o.start(t); o.stop(t + 4.1); }
  }
  var soundBtn = document.getElementById('stormBtn'), voiceBtn = document.getElementById('hear'), replayBtn = document.getElementById('replayBtn'), talisman = document.getElementById('talisman'), talismanLabel = document.getElementById('talismanLabel');
  var userMuted = false;
  var voice = new Audio(); voice.preload = 'auto';
  var storyStarted = false, captionTimer = null, bedGain = null, bedLoaded = false;
  var caption = document.getElementById('caption');
  function showCaption(text, ms){
    caption.textContent = text; caption.classList.add('show');
    clearTimeout(captionTimer); captionTimer = setTimeout(function(){ caption.classList.remove('show'); }, ms);
  }
  /* the music bed: two players that hand over to each other with a slow crossfade, so the loop never clicks or jumps.
     On iPhones the volume of a player cannot be changed from code, so there the level goes through the audio engine instead. */
  var beds = [new Audio(), new Audio()], bedCur = 0, bedX = [1, 0], bedLevel = 0, bedTarget = 0, bedCross = 0, bedTimer = null, bedGains = null;
  beds.forEach(function(b, i){ b.preload = i ? 'none' : 'auto'; b.volume = 0; });   /* the second player only loads when it is needed */
  var volumeWorks = (function(){ try { var t = new Audio(); t.volume = .5; return Math.abs(t.volume - .5) < .01; } catch (e) { return true; } })();
  var sameOrigin = (function(){ try { return /^https?:$/.test(location.protocol) && new URL(STB_ASSETS, location.href).origin === location.origin; } catch (e) { return false; } })();
  function applyBed(){ for (var i = 0; i < 2; i++) { var v = Math.max(0, Math.min(1, bedLevel * bedX[i])); if (bedGains) bedGains[i].gain.value = v; else beds[i].volume = v; } }
  function bedTick(){
    bedLevel += (bedTarget - bedLevel) * .12; if (Math.abs(bedLevel - bedTarget) < .01) bedLevel = bedTarget;
    var a = beds[bedCur], b = beds[1 - bedCur], XF = 4;
    if (!bedCross && soundOn && a.duration && a.currentTime > a.duration - XF) { bedCross = performance.now(); b.currentTime = 0; b.play().catch(function(){}); }
    if (bedCross) { var p = Math.min(1, (performance.now() - bedCross) / (XF * 1000)); bedX[bedCur] = Math.cos(p * Math.PI / 2); bedX[1 - bedCur] = Math.sin(p * Math.PI / 2);
      if (p >= 1) { a.pause(); bedCur = 1 - bedCur; bedCross = 0; bedX = bedCur ? [0, 1] : [1, 0]; } }
    applyBed();
  }
  function fadeBed(to){ bedTarget = to; if (!bedTimer) bedTimer = setInterval(bedTick, 60); }
  function loadBed(){
    if (!bedLoaded) { bedLoaded = true;
      if (!volumeWorks && sameOrigin && ac) { try { bedGains = beds.map(function(b){ var g = ac.createGain(); g.gain.value = 0; ac.createMediaElementSource(b).connect(g); g.connect(ac.destination); b.volume = 1; return g; }); } catch (e) { bedGains = null; } }
      beds.forEach(function(b){ fb(b); b.src = A('audio/' + BED_FILE); }); }
    beds[bedCur].play().catch(function(){}); if (bedCross) beds[1 - bedCur].play().catch(function(){});
    fadeBed((storyStarted && !voice.paused && !voice.ended) ? .55 : 1);
  }
  function pauseBed(){ beds.forEach(function(b){ b.pause(); }); }
  /* a hidden tab goes quiet; the storm comes back when the visitor returns */
  document.addEventListener('visibilitychange', function(){ if (document.hidden) { pauseBed(); if (ac) ac.suspend(); } else if (soundOn) { if (ac) ac.resume(); beds[bedCur].play().catch(function(){}); if (bedCross) beds[1 - bedCur].play().catch(function(){}); } });
  function duck(on){ if (ac && windGain) windGain.gain.setTargetAtTime(on ? .2 : .5, ac.currentTime, .5); if (soundOn) fadeBed(on ? .55 : 1); }
  function setSound(on){
    soundOn = on; ensureAudio();
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.setAttribute('aria-label', on ? 'Storm sound: on. Turn off' : 'Storm sound: off. Turn on');
    if (ac) { if (on) { ac.resume(); master.gain.setTargetAtTime(.5, ac.currentTime, .6); } else { master.gain.setTargetAtTime(0, ac.currentTime, .3); } }
    if (on) loadBed(); else { fadeBed(0); setTimeout(function(){ if (!soundOn) pauseBed(); }, 900); }
    if (storyStarted && !on) voice.pause();
  }
  soundBtn.addEventListener('click', function(){ userMuted = soundOn; setSound(!soundOn); });
  /* the storm is always on: it starts by itself at the first touch, click or key (browsers allow sound only after that) */
  function autoSound(){ if (GATE.on && !GATE.entered) return; if (!soundOn && !userMuted) setSound(true); }   /* while the gate is up, its own button turns the sound on */
  ['pointerdown', 'keydown', 'touchend'].forEach(function(ev){ addEventListener(ev, autoSound, { passive: true }); });
  function paintVoice(){
    var playing = storyStarted && !voice.paused && !voice.ended;
    voiceBtn.setAttribute('aria-pressed', String(playing));
    voiceBtn.classList.toggle('playing', playing);
    var txt = !storyStarted ? 'Press to hear' : playing ? 'Press to pause' : voice.ended ? 'Hear it again' : 'Press to resume';
    voiceBtn.setAttribute('aria-label', txt); talismanLabel.textContent = txt;
    replayBtn.style.visibility = storyStarted ? '' : 'hidden';
    root.classList.toggle('speaking', playing);
  }
  function startStory(){
    if (!storyStarted) {
      storyStarted = true; root.classList.add('playing');
      fb(voice); voice.src = A('audio/' + STORY_FILE); voice.volume = 1;
      voice.addEventListener('play', function(){ duck(true); paintVoice(); });
      voice.addEventListener('pause', function(){ duck(false); paintVoice(); });
      voice.addEventListener('ended', function(){ duck(false); paintVoice(); });
    }
    if (!soundOn) setSound(true);
    voice.play().catch(function(){}); paintVoice();
  }
  function replayStory(){ if (!storyStarted) { startStory(); return; } voice.currentTime = 0; if (!soundOn) setSound(true); voice.play().catch(function(){}); paintVoice(); }
  voiceBtn.addEventListener('click', function(){ if (!storyStarted || voice.paused || voice.ended) { if (voice.ended) voice.currentTime = 0; startStory(); } else { voice.pause(); } });
  replayBtn.addEventListener('click', replayStory);
  paintVoice();

  /* ---------- lightning + wind ---------- */
  var gust = 1;
  var flash = root.querySelector('.fx-flash');
  var boltPaths = root.querySelectorAll('.gate-bolt path');
  boltPaths.forEach(function(p){ var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
  function strikeLight(){ strike(true, 1, true); }   /* the entrance: lightning without a thunder clap over the voice */
  function strike(withBolt, strength, silent){
    if (reduce) return;
    strength = strength || 1;
    gsap.timeline().to(flash, { opacity: .9 * strength, duration: .05 }).to(flash, { opacity: .15, duration: .08 }).to(flash, { opacity: .7 * strength, duration: .05 }).to(flash, { opacity: 0, duration: .55, ease: 'power2.out' });
    if (withBolt) boltPaths.forEach(function(p, i){
      gsap.fromTo(p, { strokeDashoffset: p.getTotalLength(), opacity: 1 }, { strokeDashoffset: 0, duration: .18, delay: i * .04, ease: 'power1.in', onComplete: function(){ gsap.to(p, { opacity: 0, duration: .45, delay: .08, ease: 'power2.out' }); } });
    });
    if (!silent) setTimeout(function(){ thunder(strength); }, 260 + Math.random() * 500);
    gust = 4.5; setTimeout(function(){ gust = 2.2; }, 900); setTimeout(function(){ gust = 1; }, 2600);
    document.dispatchEvent(new CustomEvent('stbstorm:strike'));
  }
  function gateVisible(){ return root.querySelector('.gate').getBoundingClientRect().bottom > 160; }
  (function scheduleStrike(){
    setTimeout(function(){ strike(gateVisible() && !storyStarted, .7 + Math.random() * .3); scheduleStrike(); }, 7000 + Math.random() * 8000);
  })();

  /* ---------- smoke ---------- */
  var canvas = root.querySelector('.fx-smoke');
  if (canvas && !reduce) {
    var ctx = canvas.getContext('2d'), puffs = [], N = isMobile ? 12 : 24, cw, ch;
    var sprite = document.createElement('canvas'); sprite.width = sprite.height = 256;
    var sg = sprite.getContext('2d'), g = sg.createRadialGradient(128,128,10,128,128,128);
    g.addColorStop(0, 'rgba(160,200,185,.5)'); g.addColorStop(.4, 'rgba(120,170,150,.2)'); g.addColorStop(1, 'rgba(90,140,120,0)'); sg.fillStyle = g; sg.fillRect(0,0,256,256);
    var resize = function(){ cw = canvas.width = innerWidth; ch = canvas.height = innerHeight; };
    var newPuff = function(any){ var r = 160 + Math.random() * 280; return { x: Math.random()*cw, y: any ? Math.random()*ch : ch + r, r: r, vx: -(.05 + Math.random()*.25), vy: -(.06 + Math.random()*.18), a: .06 + Math.random()*.14, rot: Math.random()*6.28, vr: (Math.random()-.5)*.002 }; };
    resize(); for (var i=0;i<N;i++) puffs.push(newPuff(true)); addEventListener('resize', resize);
    var last = 0;
    (function frame(t){
      if (t - last > 33) { last = t; ctx.clearRect(0,0,cw,ch);
        for (var i=0;i<puffs.length;i++){ var p = puffs[i]; p.x += p.vx * gust; p.y += p.vy; p.rot += p.vr; if (p.y < -p.r) puffs[i] = p = newPuff(false); if (p.x < -p.r) p.x = cw + p.r;
          ctx.save(); ctx.globalAlpha = p.a; ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.drawImage(sprite, -p.r, -p.r*.7, p.r*2, p.r*1.4); ctx.restore(); } }
      requestAnimationFrame(frame);
    })(0);
  }

  /* ---------- the gate: press play, then the page is yours ---------- */
  gsap.registerPlugin(ScrollTrigger);
  /* if the page sits inside a scrolling frame (a preview window) instead of the browser window, scroll with that frame */
  var scroller = (function(){ var el = root.parentElement; while (el && el !== document.body && el !== document.documentElement) { var cs = getComputedStyle(el); if (/(auto|scroll|overlay)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 2) return el; el = el.parentElement; } return null; })();
  if (scroller) ScrollTrigger.defaults({ scroller: scroller });
  function scrollPos(){ return scroller ? scroller.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || 0); }
  function scrollTop0(){ if (scroller) scroller.scrollTop = 0; else window.scrollTo(0, 0); }
  var hear = document.getElementById('hear'), idleTimer = null;
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch(e){}
  scrollTop0(); setTimeout(scrollTop0, 60);
  /* the hero comes alive when the visitor steps in through the loading gate */
  function heroIn(){
    scrollTop0();
    if (!reduce) {
      gsap.timeline({ delay: .35 })
        .to('.stb-storm .gate .title', { opacity: 1, duration: 1.2 })
        .to('.stb-storm .gate .line', { opacity: 1, duration: 1 }, '-=.6')
        .to('.stb-storm .talisman', { opacity: 1, duration: .9 }, '-=.4');
    } else { gsap.set('.stb-storm .gate .title, .stb-storm .gate .line, .stb-storm .talisman', { opacity: 1 }); }
  }
  if (GATE.on) { if (scroller) { scroller.__ov = scroller.style.overflow; scroller.style.overflow = 'hidden'; } } else { heroIn(); setTimeout(function(){ strike(false, 1); }, 1800); }
  function nudge(){ if (storyStarted || !gateVisible()) return; strike(true, .9); showCaption('Press the talisman.', 3000); }
  if (!GATE.on) idleTimer = setTimeout(nudge, 6500);
  hear.addEventListener('click', function(){ clearTimeout(idleTimer); });

  /* ---------- the talisman follows the reader: perched in the hero, then hanging at the corner, swinging with the scroll ---------- */
  (function talismanFollow(){
    var avoid = Array.prototype.slice.call(root.querySelectorAll('.seal, .player .play, .charm-b')), perch = document.getElementById('perch'), docked = false, x = 0, y = 0, tx = 0, ty = 0, lastY = scrollPos(), vel = 0, swing = 0;
    function target(){
      var r = perch.getBoundingClientRect();
      var shouldDock = true;   /* the voice control lives at the bottom right from the start */
      if (shouldDock !== docked) { docked = shouldDock; talisman.classList.toggle('docked', docked); }
      if (docked) { var m = isMobile ? 14 : 34; tx = innerWidth - m; ty = innerHeight - (isMobile ? 100 : 150);
        /* never sit on top of a button: while one passes under it, the talisman steps back for a moment */
        var shy = false; for (var i = 0; i < avoid.length; i++) { var bb = avoid[i].getBoundingClientRect(); if (bb.width && bb.right > tx - (isMobile ? 62 : 90) && bb.left < tx && bb.bottom > ty - 40 && bb.top < ty + 80) shy = true; }
        talisman.classList.toggle('shy', shy); }
      else { tx = r.left + r.width / 2; ty = r.top + (innerHeight < 521 && innerWidth > innerHeight ? 84 : 56); talisman.classList.remove('shy'); }
    }
    target(); x = tx; y = ty;
    addEventListener('scroll', function(){ var sy = scrollPos(); vel += (sy - lastY); lastY = sy; }, { passive: true, capture: true });
    addEventListener('resize', target);
    (function tick(){
      target();
      var k = docked ? .12 : .35; x += (tx - x) * k; y += (ty - y) * k;
      vel *= .86; swing += (Math.max(-40, Math.min(40, vel * .35)) - swing) * .2;
      talisman.style.transform = 'translate3d(' + x + 'px,' + (y - swing * (docked ? 1 : .4)) + 'px,0)';
      talisman.querySelector('.sway').style.rotate = (docked ? swing * .25 : 0) + 'deg';
      requestAnimationFrame(tick);
    })();
  })();

  /* ---------- reveals ---------- */
  if (!reduce) gsap.utils.toArray('.stb-storm .reveal').forEach(function(el){ gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }); });
  else gsap.set('.stb-storm .reveal', { opacity: 1, y: 0 });

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  function openLight(src){ lightbox.querySelector('img').src = src; lightbox.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeLight(){ lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  lightbox.addEventListener('click', function(e){ if (e.target === lightbox || e.target.classList.contains('x')) closeLight(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeLight(); });

  /* ---------- skills: words drifting like spirits ---------- */
  (function spirits(){
    var field = document.getElementById('spirits'); if (!field) return;
    var WORDS = [
      { t: 'WordPress Design', s: 'Elementor, Gutenberg, custom themes & stores.', prime: true },
      { t: 'Web Development', s: 'HTML5, CSS3, Bootstrap & hand-coded scripts.' },
      { t: 'Speed Optimization', s: 'Rocket loading, cache tuning & core vitals.', prime: true },
      { t: 'WooCommerce', s: 'Payment gateways, carts, pricing & inventory.' },
      { t: 'PSD to WordPress', s: 'Pixel-perfect responsive conversion.' },
      { t: 'Theme Customization', s: 'Child themes, custom CSS & tailored widgets.' },
      { t: 'Canva Design', s: 'Posters, social banners & graphic branding.' },
      { t: 'Site Maintenance', s: '24/7 security updates, backups & uptime.' },
      { t: 'SEO & Growth', s: 'On-page technical ranking & meta architecture.' },
      { t: 'Client Discussions', s: 'Audio/video planning to review & delivery.' }
    ];
    var LANES = 5;
    var items = WORDS.map(function(w, i){
      var el = document.createElement('div'); el.className = 'spirit' + (w.prime ? ' prime' : '');
      el.innerHTML = w.t + '<small>' + w.s + '</small>'; field.appendChild(el);
      return { el: el, t: (i % LANES) * .11 + Math.floor(i / LANES) * .5 + Math.random() * .05, speed: .00007, amp: .012 + Math.random() * .025, lane: i % LANES };
    });
    var fw = 0, fh = 0; var measure = function(){ fw = field.clientWidth; fh = field.clientHeight; }; measure(); addEventListener('resize', measure);
    var visible = false; new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }, { rootMargin: '100px' }).observe(field);
    var t0 = performance.now(), acc = 0, lastT = t0;
    (function tick(now){
      var dt = Math.min(50, now - lastT); lastT = now;
      if (visible && !reduce) {
        acc += dt * (1 + (gust - 1) * .35);
        items.forEach(function(it, i){
          var ph = acc * it.speed + it.t;
          var u = 1 - ((ph % 1) + 1) % 1;                      // 1 -> 0 : right to left, forever
          var w = it.el.offsetWidth || 300;
          var x = u * (fw + w) - w;
          var y = fh * (.06 + it.lane * .19) + Math.sin(acc * .0006 + i * 2) * fh * it.amp;
          var a = Math.max(0, Math.min(1, Math.min(u, 1 - u) * 5)) * (it.el.classList.contains('prime') ? 1 : .8);
          it.el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + (Math.sin(acc * .0004 + i) * 3) + 'deg)';
          it.el.style.opacity = a; it.el.style.filter = 'blur(' + ((1 - a) * 6) + 'px)';
        });
      }
      requestAnimationFrame(tick);
    })(t0);
    if (reduce) items.forEach(function(it){ it.el.style.position = 'relative'; it.el.style.opacity = 1; it.el.style.textAlign = 'center'; it.el.style.margin = '18px 0'; it.el.style.whiteSpace = 'normal'; });
  })();

  /* ---------- the storm of screenshots ---------- */
  /* ---------- the storm of screenshots: one engine, two fields (page-wide behind everything, and the stories section) ---------- */
  function stormOf(field, opts){
    var pool = POOL, next = opts.start || 0, alive = [], fw = 0, fh = 0, MAX = 6;
    var measure = function(){ fw = field.clientWidth; fh = field.clientHeight; MAX = Math.max(opts.min, Math.min(opts.max, Math.round(fw * fh / opts.per))); }; measure(); addEventListener('resize', measure);
    function spawn(initial){
      var item = pool[next++ % pool.length];
      var tall = item[2] > item[1];
      var el = document.createElement('a'); el.className = 'leaf' + (tall ? ' tall' : ''); el.href = '#';
      var img = document.createElement('img'); img.src = (item[0].indexOf('/') === 0 || item[0].indexOf('http') === 0) ? item[0] : (STB_ASSETS + 'success/' + item[0]); img.alt = item[3] || 'MH Sumon Portfolio Project'; img.width = item[1]; img.height = item[2]; img.loading = 'lazy'; el.appendChild(img); field.appendChild(el);
      var lh = (tall ? opts.tall : opts.short) * (isMobile ? .72 : 1), lw = lh * item[1] / item[2];
      var L = { el: el, x: initial ? Math.random() * fw : fw + 20, y: initial ? Math.random() * fh * .8 : -lh * .2 + Math.random() * fh * .6, vx: -(.9 + Math.random() * .9) * opts.speed, vy: (.16 + Math.random() * .24) * opts.speed, rot: (Math.random() - .5) * 30, vr: (Math.random() - .5) * .25, ph: Math.random() * 6.28, sway: 14 + Math.random() * 20, held: false, w: lw, h: lh, z: Math.random() };
      el.style.zIndex = Math.round(L.z * 10);
      if (opts.hover) {
        el.addEventListener('mouseenter', function(){ L.held = true; el.classList.add('held'); });
        el.addEventListener('mouseleave', function(){ L.held = false; el.classList.remove('held'); });
        el.addEventListener('click', function(e){ e.preventDefault(); openLight(img.src); });
      }
      alive.push(L);
    }
    var visible = true;
    if (opts.observe) { visible = false; new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }, { rootMargin: '150px' }).observe(field); }
    var lastT = performance.now();
    (function tick(now){
      var dt = Math.min(40, now - lastT) / 16.7; lastT = now;
      if (visible && !reduce && !document.hidden) {
        if (alive.length < MAX && Math.random() < opts.rate) spawn(alive.length < MAX * .5);
        for (var i = alive.length - 1; i >= 0; i--) {
          var L = alive[i];
          if (!L.held) {
            L.ph += .012 * dt;
            L.x += L.vx * gust * dt * (isMobile ? 1.1 : 1.5);
            L.y += (L.vy + Math.sin(L.ph) * .25) * dt * (1 + (gust - 1) * .3);
            L.rot += L.vr * dt * gust * 1.6;
            L.el.style.transform = 'translate3d(' + (L.x + Math.sin(L.ph * .7) * L.sway) + 'px,' + L.y + 'px,0) rotate(' + L.rot + 'deg) scale(' + (.85 + L.z * .25) + ')';
          } else {
            L.el.style.transform = 'translate3d(' + L.x + 'px,' + L.y + 'px,0) rotate(0deg) scale(1.35)';
          }
          if (L.x < -L.w - 60 || L.y > fh + L.h) { L.el.remove(); alive.splice(i, 1); }
        }
      }
      requestAnimationFrame(tick);
    })(lastT);
  }
  var bgField = document.getElementById('leavesBg');
  if (bgField && !reduce) stormOf(bgField, { min: isMobile ? 4 : 8, max: isMobile ? 8 : 34, per: 70000 * BIG * BIG, tall: 150 * BIG, short: 100 * BIG, speed: .7, rate: .35, hover: false, observe: false, start: 18 });
  (function leaves(){
    var field = document.getElementById('leaves'); if (!field) return;
    stormOf(field, { min: isMobile ? 6 : 12, max: isMobile ? 10 : 48, per: 42000 * BIG * BIG, tall: 210 * BIG, short: 150 * BIG, speed: 1, rate: 1, hover: true, observe: true });
    var allgrid = document.getElementById('allgrid');
    var btn = document.getElementById('showAll'); if (btn) btn.addEventListener('click', function(){
      if (!allgrid.children.length) MH_PORTFOLIO.forEach(function(it){
  var card = document.createElement('div');
  card.className = 'portfolio-grid-card';
  card.style.cssText = 'break-inside:avoid; margin-bottom:18px; border-radius:10px; overflow:hidden; border:1px solid rgba(53,195,159,0.3); background:rgba(8,18,14,0.85); box-shadow:0 8px 30px rgba(0,0,0,0.6); transition:transform .3s, border-color .3s;';
  var a = document.createElement('a');
  a.href = it.file;
  a.style.cssText = 'display:block; position:relative; overflow:hidden;';
  var im = document.createElement('img');
  im.loading = 'lazy';
  im.src = it.file;
  im.width = it.w;
  im.height = it.h;
  im.alt = it.title;
  im.style.cssText = 'width:100%; height:auto; display:block; filter:saturate(.85) brightness(.9); transition:filter .3s, transform .5s;';
  a.appendChild(im);
  a.addEventListener('click', function(e){ e.preventDefault(); openLight(im.src); });
  var meta = document.createElement('div');
  meta.style.cssText = 'padding:14px 16px; border-top:1px solid rgba(53,195,159,0.18); display:flex; flex-direction:column; gap:6px;';
  meta.innerHTML = '<h3 style="margin:0; font-family:var(--font-horror); font-size:20px; color:#cdf5e6;">' + it.title + '</h3>' +
    '<p style="margin:0; font-family:var(--font-whisper); font-size:14px; font-style:italic; color:#b7c5be;">' + it.desc + '</p>' +
    '<a href="' + it.link + '" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; margin-top:6px; font-family:var(--font-paint); font-size:11px; text-transform:uppercase; color:#35c39f; letter-spacing:0.06em;">View Live Project &rarr;</a>';
  card.appendChild(a);
  card.appendChild(meta);
  allgrid.appendChild(card);
});
      var open = allgrid.classList.toggle('open'); this.textContent = open ? 'Hide them.' : 'See all.'; ScrollTrigger.refresh();
    });
  })();

  /* ---------- ask the Baba: press a question, he answers in his voice.
     He waits (breathing, hair drifting, thumbs on the orb). An answer starts under a flash of lightning, he makes one tiny slow move
     (eyes up a little, or down into the orb) that always ends exactly where it began, and the lightning hides the switch back. ---------- */
  (function oracle(){
    var seer = document.getElementById('seer'), list = document.getElementById('asks'); if (!seer || !list) return;
    var FAQ = {"0":{"m":"","w":[0.0,1.96,2.32,2.6]},"1":{"m":"orb","w":[0.0,0.24,0.44,0.78,2.54,2.9,3.2,3.52,3.84,6.2,6.6,8.88,9.08,9.58,10.02,11.3,11.58,12.02,13.44,13.7,13.88,14.12,14.4,16.08,16.48,16.74,16.88,17.14,17.6,17.84,18.14,19.28,19.6,19.78,20.06]},"2":{"m":"orb","w":[0.0,0.26,0.52,0.84,2.42,2.66,3.22,4.0,4.22,4.64,6.02,7.18,8.48,10.32,11.1,11.32,11.56]},"3":{"m":"orb","w":[0.0,0.26,0.72,0.98,1.24,1.8,2.7,3.98,4.7,6.46,6.68,6.86,7.16,7.34,7.72,8.14,8.74,9.08]},"4":{"m":"up","w":[0.0,0.42,2.0,3.7,3.96,4.3]},"5":{"m":"orb","w":[0.0,1.54,1.82,2.04,2.5,4.66,5.16,5.5,6.02,6.86,7.28,8.64,9.14,9.48,9.98,10.48,11.14,11.68,11.86,12.08,12.34]},"6":{"m":"up","w":[0.0,1.38,1.72,1.92,2.22,2.64,2.94,3.22,3.52,5.04,6.82,8.9,10.86,11.26,13.54,13.88,14.34,14.66,14.96,16.38,16.84,17.06]},"7":{"m":"orb","w":[0.0,0.28,1.34,1.9,2.5,2.76,3.26,3.88,4.76,4.92,5.1,5.52,6.06,6.62,7.08,8.24,8.8,9.06,9.52,10.7,11.37]},"8":{"m":"up","w":[0.0,0.26,0.5,0.7,0.96,2.42,2.6,2.82,3.18,3.82,4.24,4.82,5.18,6.64,6.9,7.16,7.34,7.52,8.0,9.96]},"9":{"m":"up","w":[0.0,0.26,0.46,0.78,1.08,1.34,1.56,3.1,3.42,3.9,4.42,5.3,5.8,6.18,6.42,8.04,8.42,8.98]},"10":{"m":"up","w":[0.0,0.34,0.84,1.3,1.6,2.06,3.92,5.0,5.54,6.0,6.52,8.18,8.36,9.2,9.98,10.52,12.26,12.72,13.02,13.54,15.0,15.4,15.58,15.78,16.1,16.44,18.32,18.68,19.28,20.04,20.5]}};
    var ORB = [.495, .567, .095];   /* orb centre x, y and radius, as fractions of the picture */
    var idle = seer.querySelector('.v-idle'), still = seer.querySelector('.seer-still'), glow = seer.querySelector('.seer-glow'), flashEl = seer.querySelector('.seer-flash'), sub = document.querySelector('#shrine .seer-sub');
    var sfx = isMobile ? '-mobile' : '', acts = {}, showing = idle, loaded = false, visible = false, cur = 0, introDone = false, subTimer = null;
    ['up', 'orb'].forEach(function(m){ var v = document.createElement('video'); v.className = 'seer-v'; v.muted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('data-manual', ''); v.preload = 'none';
      v.addEventListener('ended', function(){ if (showing === v) flash(toIdle); }); seer.insertBefore(v, glow); acts[m] = v; });
    var talk = new Audio(); talk.preload = 'none';
    function load(){
      if (loaded) return; loaded = true;
      still.src = STB_ASSETS + 'img/faq-still.jpg';
      fb(idle); fb(acts.up); fb(acts.orb); idle.src = A('video/faq-idle' + sfx + '.mp4'); idle.preload = 'auto';
      if (!reduce) { acts.up.src = A('video/faq-up' + sfx + '.mp4'); acts.orb.src = A('video/faq-orb' + sfx + '.mp4'); acts.up.preload = acts.orb.preload = 'auto'; idle.play().catch(function(){}); }
    }
    new IntersectionObserver(function(en){ if (en[0].isIntersecting) load(); }, { rootMargin: '900px 0px' }).observe(seer);
    new IntersectionObserver(function(en){ visible = en[0].isIntersecting && en[0].intersectionRatio > .45;
      if (reduce) return;
      if (en[0].isIntersecting) { if (showing === idle) idle.play().catch(function(){}); } else { idle.pause(); }
      if (visible && !introDone && soundOn && talk.paused && !(storyStarted && !voice.paused)) { introDone = true; speak(0); }   /* "Ask. I will answer." once, when he first comes into view */
    }, { threshold: [0, .45, .7] }).observe(seer);
    /* lightning over the Baba; the switch happens at the brightest moment */
    function flash(cb){
      if (reduce || !window.gsap) { if (cb) cb(); return; }
      gsap.killTweensOf(flashEl);
      gsap.timeline().to(flashEl, { opacity: .95, duration: .07, ease: 'power1.in' }).call(function(){ if (cb) cb(); }).to(flashEl, { opacity: .22, duration: .09 }).to(flashEl, { opacity: .7, duration: .06 }).to(flashEl, { opacity: 0, duration: .8, ease: 'power2.out' });
      var sky = root.querySelector('.fx-flash'); if (sky) gsap.timeline().to(sky, { opacity: .35, duration: .06 }).to(sky, { opacity: 0, duration: .6, ease: 'power2.out' });
    }
    function show(v){ [idle, acts.up, acts.orb].forEach(function(x){ x.classList.toggle('on', x === v); }); showing = v; }
    function toIdle(){ show(idle); idle.play().catch(function(){}); ['up', 'orb'].forEach(function(m){ var v = acts[m]; v.pause(); try { v.currentTime = 0; } catch (e) {} }); }
    function toAct(m){ var v = acts[m]; if (!v || reduce || !v.src) return; try { v.currentTime = 0; } catch (e) {} var pr = v.play(); show(v); if (pr && pr.catch) pr.catch(function(){ show(idle); }); }
    /* subtitles: one short sentence at a time, in step with his voice */
    var groups = [], gShown = -1;
    function setSub(i){
      clearTimeout(subTimer); var a = list.querySelector('[data-i="' + i + '"]'), text = i ? a.parentNode.querySelector('.sr').textContent : 'Ask. I will answer.', words = text.split(' ');
      groups = []; var g = null;
      words.forEach(function(w, k){ if (!g) { g = { k: k, t: [] }; groups.push(g); } g.t.push(w); if (/[.?!:]$/.test(w) || (g.t.length > 7 && /,$/.test(w))) g = null; });
      gShown = -1; sub.innerHTML = '';
    }
    function paintSub(t){
      var w = FAQ[cur] && FAQ[cur].w; if (!w) return; var n = -1;
      for (var j = 0; j < groups.length; j++) if (t >= (w[groups[j].k] || 0) - .08) n = j;
      if (n === gShown || n < 0) return; gShown = n;
      var sp = document.createElement('span'); sp.textContent = groups[n].t.join(' '); sub.innerHTML = ''; sub.appendChild(sp);
      requestAnimationFrame(function(){ sp.classList.add('on'); });
    }
    function speak(i){
      cur = i; setSub(i);
      if (storyStarted && !voice.paused) voice.pause();
      fb(talk); talk.pause(); talk.src = A('audio/faq-' + String(i).padStart(2, '0') + '.mp3'); talk.volume = 1;
      var pr = talk.play(); if (pr && pr.catch) pr.catch(function(){});
      if (soundOn) duck(true);
    }
    talk.addEventListener('ended', function(){ if (soundOn && !(storyStarted && !voice.paused)) duck(false); paintItems(); subTimer = setTimeout(function(){ sub.innerHTML = ''; }, 2600); });
    talk.addEventListener('pause', paintItems); talk.addEventListener('play', paintItems);
    var items = Array.prototype.slice.call(list.querySelectorAll('.charm'));
    function paintItems(){ items.forEach(function(li){ var b = li.querySelector('.charm-b'), me = +b.dataset.i === cur, on = me && !talk.paused && !talk.ended;
      li.classList.toggle('on', on); li.classList.toggle('last', me && !on && !talk.ended && talk.currentTime > 0); b.setAttribute('aria-pressed', String(on));
      b.setAttribute('aria-label', (on ? 'Pause the answer: ' : 'Play the answer: ') + li.querySelector('.charm-t').textContent); }); }
    paintItems();
    items.forEach(function(li){
      var b = li.querySelector('.charm-b');
      b.addEventListener('click', function(){
        var i = +b.dataset.i;
        load();
        if (cur === i && !talk.ended && talk.src) {
          if (!talk.paused) { talk.pause(); if (soundOn) duck(false); return; }                      /* pause: the seal turns back into play */
          if (talk.currentTime > 0) { var pr = talk.play(); if (pr && pr.catch) pr.catch(function(){}); if (soundOn) duck(true); return; }   /* play again: he carries on */
        }
        speak(i);
        flash(function(){ toAct(FAQ[i].m); });
      });
    });
    /* the talismans drift slowly back and forth along a ring around him, five on each side; on phones they sit below him */
    var shrine = document.getElementById('shrine'), ANG = [-1.1, -.55, 0, .55, 1.1], ring = [];
    items.forEach(function(li, k){ ring.push({ el: li, side: k < 5 ? -1 : 1, a: ANG[k % 5], ph: (k < 5 ? 0 : 2.4) + (k % 5) * .35, sp: .5, r: parseFloat(li.style.getPropertyValue('--r')) || 0, held: false });
      li.querySelector('.charm-b').style.setProperty('--d', (6.5 + (k % 4) * 1.3) + 's'); li.querySelector('.charm-b').style.setProperty('--dl', (-k * .9) + 's');
      li.addEventListener('mouseenter', function(){ ring[k].held = true; }); li.addEventListener('mouseleave', function(){ ring[k].held = false; }); });
    var flat = window.matchMedia('(max-width: 900px), (max-height: 520px) and (orientation: landscape)'), shrineVis = false;
    /* on phones the subtitle rides inside the pinned box under him; on bigger screens it sits below him, outside the ring */
    function placeSub(){ var box = shrine.querySelector('.seer-box'); if (flat.matches) { if (sub.parentNode !== box) box.appendChild(sub); } else if (sub.parentNode !== shrine) shrine.insertBefore(sub, list); }
    placeSub(); if (flat.addEventListener) flat.addEventListener('change', placeSub); else if (flat.addListener) flat.addListener(placeSub);
    new IntersectionObserver(function(en){ shrineVis = en[0].isIntersecting; }, { rootMargin: '100px 0px' }).observe(shrine);
    /* chakra marks */
    (function(){ var NS = 'http://www.w3.org/2000/svg', tk = shrine.querySelector('.ticks'), bd = shrine.querySelector('.beads'); if (!tk) return;
      for (var q = 0; q < 72; q++) { var an = q / 72 * Math.PI * 2, l = document.createElementNS(NS, 'line'), r0 = q % 6 ? 92 : 88; l.setAttribute('x1', (Math.cos(an) * r0).toFixed(2)); l.setAttribute('y1', (Math.sin(an) * r0).toFixed(2)); l.setAttribute('x2', (Math.cos(an) * 96).toFixed(2)); l.setAttribute('y2', (Math.sin(an) * 96).toFixed(2)); tk.appendChild(l); }
      for (var q2 = 0; q2 < 10; q2++) { var an2 = q2 / 10 * Math.PI * 2, c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', (Math.cos(an2) * 80).toFixed(2)); c.setAttribute('cy', (Math.sin(an2) * 80).toFixed(2)); c.setAttribute('r', '1.1'); bd.appendChild(c); } })();
    var lastD = 0;
    (function drift(now){
      requestAnimationFrame(drift);
      var dt = Math.min(.05, (now - (lastD || now)) / 1000); lastD = now;
      if (flat.matches || !shrineVis || document.hidden) return;
      var W = shrine.clientWidth, H = shrine.clientHeight, S = shrine.querySelector('.seer-box').clientWidth, cx = W / 2, cy = H / 2,
          cw = ring[0].el.offsetWidth, Rx = Math.min(S / 2 + cw * .62, W / 2 - cw / 2 - 6), Ry = S * .5; cy = 10 + S / 2;
      for (var k = 0; k < ring.length; k++) { var c = ring[k]; if (!c.held && !reduce) c.t = (c.t || 0) + dt; var sway = reduce ? 0 : Math.sin((c.t || 0) * .55 * c.sp + c.ph) * .06,
          a = c.a + sway, x = cx + c.side * Math.pow(Math.cos(a), .6) * Rx - cw / 2, y = cy + Math.sin(a) * Ry - c.el.offsetHeight / 2;
        c.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + c.r + 'deg)'; }
    })(0);
    /* quiet when the tab is hidden, or when the ten hour video starts */
    document.addEventListener('visibilitychange', function(){ if (document.hidden) talk.pause(); });
    voice.addEventListener('play', function(){ talk.pause(); });   /* the talisman story and the answers never talk over each other */
    var poster = root.querySelector('.player .poster'); if (poster) poster.addEventListener('click', function(){ talk.pause(); });
    /* the orb glows with his words */
    var gx = glow.getContext('2d'), GW = 0, env = 0;
    function sizeGlow(){ var r = seer.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1); GW = Math.max(1, Math.round(r.width * d)); glow.width = glow.height = GW; }
    sizeGlow(); addEventListener('resize', sizeGlow);
    (function tick(now){
      requestAnimationFrame(tick);
      if (!loaded || document.hidden) return;
      var speaking = !talk.paused && !talk.ended, t = talk.currentTime, target = .16 + Math.sin(now / 1300) * .05;
      if (speaking) { var w = FAQ[cur] && FAQ[cur].w, e = 0; if (w) for (var k = 0; k < w.length; k++) { var d = t - w[k]; if (d >= 0 && d < 1) e = Math.max(e, Math.exp(-d / .22)); } target = .42 + e * .58; paintSub(t); }
      env += (target - env) * (speaking ? .35 : .06);
      gx.clearRect(0, 0, GW, GW);
      var cx = ORB[0] * GW, cy = ORB[1] * GW, r = ORB[2] * GW * (1.6 + env * .9), g = gx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, 'rgba(255,90,70,' + (env * .75).toFixed(3) + ')'); g.addColorStop(.35, 'rgba(224,40,30,' + (env * .38).toFixed(3) + ')'); g.addColorStop(1, 'rgba(120,10,6,0)');
      gx.fillStyle = g; gx.fillRect(0, 0, GW, GW);
    })(0);
  })();

  /* ---------- the vault: the Baba stands facing you and breathes; the giveaway photos drift around him, forever ---------- */
  var BABA2 = {"d": {"n": 60, "fw": 776, "fh": 1000, "cols": 3, "per": 6, "sheets": 10}, "m": {"n": 60, "fw": 404, "fh": 520, "cols": 4, "per": 12, "sheets": 5}, "fps": 10.0, "head": [0.5, 0.215, 0.17]};
  (function vault(){
    var field = document.getElementById('vault'); if (!field) return;
    var cv = document.getElementById('vaultBaba'), M = isMobile ? BABA2.m : BABA2.d, ctx = cv.getContext('2d');
    cv.width = M.fw; cv.height = M.fh; cv.style.aspectRatio = M.fw + ' / ' + M.fh;
    var sheets = [], lit = 0;
    for (var s = 0; s < M.sheets; s++) { var im = new Image(); im.decoding = 'async'; im.src = STB_ASSETS + 'frames/' + (isMobile ? 'm' : 'd') + '/v-' + String(s + 1).padStart(2, '0') + '.webp'; sheets.push(im); }
    function frame(i){ var sh = sheets[Math.floor(i / M.per)]; if (!sh || !sh.complete || !sh.naturalWidth) return null; var c = i % M.per; return { im: sh, x: (c % M.cols) * M.fw, y: Math.floor(c / M.cols) * M.fh }; }
    var lastKey = -1;
    function drawBaba(t){
      /* ping-pong: the clip plays forward, then backward, so his sway never jumps */
      var LEN = BABA2.pp ? 2 * (M.n - 1) : M.n, map = function(j){ return j < M.n ? j : LEN - j; };
      var f = (t / 1000 * BABA2.fps) % LEN, fi = Math.floor(f), i0 = map(fi), i1 = map((fi + 1) % LEN), k = f - fi, key = Math.round(f * 6) * 100 + Math.round(lit * 20);
      if (key === lastKey) return; lastKey = key;
      var a = frame(i0) || frame(0), b = frame(i1); if (!a) return;
      ctx.clearRect(0, 0, M.fw, M.fh); ctx.globalAlpha = 1; ctx.drawImage(a.im, a.x, a.y, M.fw, M.fh, 0, 0, M.fw, M.fh);
      if (b && k > .05) { ctx.globalAlpha = k; ctx.drawImage(b.im, b.x, b.y, M.fw, M.fh, 0, 0, M.fw, M.fh); ctx.globalAlpha = 1; }
      if (lit > .02) { ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = 'rgba(190,240,225,' + (lit * .35) + ')'; ctx.fillRect(0, 0, M.fw, M.fh); ctx.globalCompositeOperation = 'source-over'; }
    }
    /* the photos: an ellipse around him; in front of him they pass over him, behind him they pass behind */
    var N = isMobile ? 9 : 14, cards = [], next = 0, W = 0, H = 0, speed = 1;
    var HD = { x: 0, y: 0, r: 0 };   /* where his head sits inside the vault, so the storm cloud can sit right behind it */
    function measure(){ W = field.clientWidth; H = field.clientHeight;
      var fr = field.getBoundingClientRect(), br = cv.getBoundingClientRect(), h = BABA2.head || [.5, .16, .13];
      HD.x = br.left - fr.left + br.width * h[0]; HD.y = br.top - fr.top + br.height * h[1]; HD.r = br.width * h[2]; }
    /* smoke: one layer behind him, one around his feet, the same storm smoke as the rest of the page */
    var sb = document.getElementById('smokeBack'), sf = document.getElementById('smokeFront'), sbx = sb.getContext('2d'), sfx = sf.getContext('2d'), puffB = [], puffF = [], spr = document.createElement('canvas');
    spr.width = spr.height = 256; (function(){ var g = spr.getContext('2d'), gr = g.createRadialGradient(128,128,8,128,128,128); gr.addColorStop(0, 'rgba(165,205,190,.55)'); gr.addColorStop(.4, 'rgba(120,170,152,.22)'); gr.addColorStop(1, 'rgba(90,140,120,0)'); g.fillStyle = gr; g.fillRect(0,0,256,256); })();
    function puff(front, any){ var r = (front ? .18 : .12) * W + Math.random() * (front ? .16 : .1) * W, spread = front ? .62 : .24;
      return { x: W * (.5 + (Math.random() - .5) * 2 * spread), y: front ? H * (.78 + Math.random() * .3) : (any ? H * (.25 + Math.random() * .8) : H + r * .5), r: r, vx: (Math.random() - .5) * .25, vy: front ? -(.02 + Math.random() * .05) : -(.08 + Math.random() * .16), a: front ? .22 + Math.random() * .22 : .18 + Math.random() * .2, rot: Math.random() * 6.28, vr: (Math.random() - .5) * .002, life: 0 }; }
    /* a dark storm cloud that lives behind his head: dense in the middle, torn and misty at the rim */
    var cdk = document.createElement('canvas'), cwp = document.createElement('canvas'); cdk.width = cdk.height = cwp.width = cwp.height = 256;
    (function(){ var g = cdk.getContext('2d'), gr = g.createRadialGradient(128,128,4,128,128,128); gr.addColorStop(0, 'rgba(5,12,10,.92)'); gr.addColorStop(.45, 'rgba(7,16,13,.62)'); gr.addColorStop(.75, 'rgba(10,22,18,.22)'); gr.addColorStop(1, 'rgba(12,26,21,0)'); g.fillStyle = gr; g.fillRect(0,0,256,256);
      var w = cwp.getContext('2d'), gw = w.createRadialGradient(128,128,6,128,128,128); gw.addColorStop(0, 'rgba(120,160,146,.34)'); gw.addColorStop(.5, 'rgba(80,120,106,.12)'); gw.addColorStop(1, 'rgba(60,100,86,0)'); w.fillStyle = gw; w.fillRect(0,0,256,256); })();
    var cloud = []; for (var q = 0; q < (isMobile ? 9 : 14); q++) cloud.push({ ang: q / (isMobile ? 9 : 14) * 6.283 + Math.random() * .5, d: .25 + Math.random() * .55, s: .9 + Math.random() * .8, sp: (Math.random() < .5 ? -1 : 1) * (.03 + Math.random() * .05), ph: Math.random() * 6.28, dark: q % 3 !== 2, rot: Math.random() * 6.28 });
    function drawCloud(g, t){
      if (!HD.r) return; var T = t / 1000;
      for (var i = 0; i < cloud.length; i++) { var c = cloud[i], a = c.ang + T * c.sp * speed, dd = HD.r * c.d * (1 + .12 * Math.sin(T * .4 + c.ph)),
          x = HD.x + Math.cos(a) * dd * 1.25, y = HD.y - HD.r * .1 + Math.sin(a) * dd * .9, r = HD.r * c.s * (c.dark ? 1.15 : 1.35);
        g.save(); g.globalAlpha = c.dark ? .9 : .5 + lit * .5; g.translate(x, y); g.rotate(c.rot + T * c.sp * .6); g.drawImage(c.dark ? cdk : cwp, -r, -r * .8, r * 2, r * 1.6); g.restore(); } }
    function seedSmoke(){ sb.width = sf.width = Math.max(1, W); sb.height = sf.height = Math.max(1, H); puffB = []; puffF = []; for (var i = 0; i < (isMobile ? 12 : 22); i++) puffB.push(puff(false, true)); for (var k = 0; k < (isMobile ? 8 : 14); k++) puffF.push(puff(true, true)); }
    measure(); seedSmoke(); addEventListener('resize', function(){ measure(); seedSmoke(); });
    if (window.ResizeObserver) new ResizeObserver(function(){ measure(); }).observe(cv);
    var smokeT = 0;
    function drawSmoke(t){
      if (reduce) { if (t - smokeT > 1000) { smokeT = t; sbx.clearRect(0, 0, W, H); drawCloud(sbx, 0); } return; }   /* still, but the cloud stays behind his head */
      if (t - smokeT < 33) return; smokeT = t;
      [[sbx, puffB, false], [sfx, puffF, true]].forEach(function(L){ var g = L[0], arr = L[1], front = L[2]; g.clearRect(0, 0, W, H); if (!front) drawCloud(g, t);
        for (var i = 0; i < arr.length; i++) { var p = arr[i]; p.x += p.vx * speed; p.y += p.vy * speed; p.rot += p.vr; p.life = Math.min(1, p.life + .01);
          if (!front && p.y < H * .1) arr[i] = p = puff(false, false);
          if (front && (p.y < H * .7 || p.x < -p.r || p.x > W + p.r)) arr[i] = p = puff(true, false);
          g.save(); g.globalAlpha = p.a * p.life * (1 + lit * .6); g.translate(p.x, p.y); g.rotate(p.rot); g.drawImage(spr, -p.r, -p.r * .65, p.r * 2, p.r * 1.3); g.restore(); } });
    }
    function setImg(c){
  var item = MH_PORTFOLIO[(next++) % MH_PORTFOLIO.length];
  c.img.src = item.file;
  c.img.alt = item.title + ' - ' + item.desc;
}
    for (var j = 0; j < N; j++) {
      var el = document.createElement('a'); el.className = 'fcard'; el.href = '#';
      var img = document.createElement('img'); img.alt = 'Giveaway winner on stage'; img.width = 1600; img.height = 900; img.loading = 'lazy'; img.decoding = 'async'; el.appendChild(img); field.appendChild(el);
      var c = { el: el, img: img, a: j / N * Math.PI * 2 + (Math.random() - .5) * .3, lvl: [.3, .5, .38, .6, .34, .56, .46][j % 7], tilt: (Math.random() - .5) * 14, ph: Math.random() * 6.28, spd: .8 + Math.random() * .4, held: false, behind: false };
      setImg(c);
      (function(c){
        c.el.addEventListener('click', function(e){ e.preventDefault(); openLight(c.img.src); });
        c.el.addEventListener('mouseenter', function(){ c.held = true; c.el.classList.add('held'); });
        c.el.addEventListener('mouseleave', function(){ c.held = false; c.el.classList.remove('held'); });
      })(c);
      cards.push(c);
    }
    var visible = false, last = 0;
    new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }, { rootMargin: '200px 0px' }).observe(field);
    document.addEventListener('stbstorm:strike', function(){ if (!visible) return; lit = 1; speed = 3.2; });
    (function tick(t){
      requestAnimationFrame(tick);
      if (!visible || document.hidden) { last = t; return; }
      var dt = Math.min(.05, (t - (last || t)) / 1000); last = t;
      lit *= .9; speed += (1 - speed) * .03;
      drawBaba(t); drawSmoke(t);
      var rx = Math.min(W * (isMobile ? .44 : .4), 760 * BIG), rz = isMobile ? 260 : 380 * BIG, ch = cards[0].el.offsetHeight || 140;
      for (var i = 0; i < cards.length; i++) { var c = cards[i];
        if (!c.held && !reduce) c.a += dt * .16 * c.spd * speed;
        var x = Math.sin(c.a) * rx, z = Math.cos(c.a) * rz, behind = z < -rz * .15;
        if (behind && !c.behind && Math.sin(c.a) > 0) setImg(c);   /* a new photo each time it passes behind him */
        c.behind = behind;
        var y = H * (c.lvl + z / rz * .14) - ch / 2 + Math.sin(t / 1400 + c.ph) * 14,   /* a tilted ring: low in front of him, high behind him, so his face stays clear */ rot = c.held ? 0 : c.tilt + Math.sin(t / 1900 + c.ph) * 5, sc = c.held ? 1.35 : 1;
        if (z > 0 && HD.r) {   /* a photo passing in front of him slides under his chin, never over his face */
          var cw2 = c.el.offsetWidth / 2 + HD.r * .8, ov = 1 - Math.max(0, Math.abs(W / 2 + x - HD.x) - cw2 * .6) / (cw2 * .6), minY = HD.y + HD.r * 1.05;
          if (ov > 0 && y < minY) y += (minY - y) * Math.min(1, ov);
        }
        c.el.style.zIndex = c.held ? 200 : Math.round(z > 0 ? 60 + z / 10 : 40 + z / 20);
        c.el.style.opacity = c.held ? 1 : (0.45 + 0.55 * (z + rz) / (2 * rz)).toFixed(3);
        c.el.style.transform = 'translate3d(' + (W / 2 + x - c.el.offsetWidth / 2).toFixed(1) + 'px,' + y.toFixed(1) + 'px,' + z.toFixed(1) + 'px) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc + ')';
      }
    })(0);
  })();

  // placeholder link: the nav/hero buttons scroll to the final call, the final button itself flashes and explains
  if (!WAITLIST_URL) root.querySelectorAll('.waitlist-link').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var inFinal = a.closest('.final');
      if (!inFinal) { document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' }); return; }
      strike(false, 1); showCaption('The doors are not open yet. This button will carry the registration link when they are.', 5200);
    });
  });
  /* "I want in" in the top bar glides down to "Put me on the list" at the bottom, and the seal lights up */
  (function(){ var want = document.getElementById('navWant'), seal = root.querySelector('.final .seal'); if (!want || !seal) return;
    want.addEventListener('click', function(e){ e.preventDefault();
      seal.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      seal.classList.remove('called'); void seal.offsetWidth; seal.classList.add('called');
      setTimeout(function(){ seal.classList.remove('called'); }, 3200); });
  })();
  setTimeout(function(){ ScrollTrigger.refresh(); }, 900);
  if (GATE.on) setTimeout(GATE.plan, 0);


  /* ============ MY TEAM 3D ORBITAL POLAROID SLIDER (Exact How I Work Baba Shrine & Atmosphere) ============ */
var TEAM_MEMBERS_DATA = [
  {
    name: "MH Sumon",
    role: "Founder & Lead Solutions Architect",
    avatar: "https://mhsumon.epizy.com/wp-content/uploads/2025/10/MH_Sumon_Profile-300x300.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Jafar Sadeque",
    role: "Senior UI/UX & Visual Designer",
    avatar: "/portfolio/sales.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Tanvir Ahmed",
    role: "Frontend Engineer & Animations",
    avatar: "/portfolio/activebox.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Ariyan Khan",
    role: "SEO, Performance & Speed Specialist",
    avatar: "/portfolio/landing-page.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Sadia Rahman",
    role: "QA Lead & Client Success Manager",
    avatar: "/portfolio/mykurigram.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Rashidul Hasan",
    role: "WooCommerce & Backend Developer",
    avatar: "/portfolio/soil-books.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Fahim Shahriar",
    role: "WordPress Customizer & Elementor Pro",
    avatar: "/portfolio/blog.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  },
  {
    name: "Nusrat Jahan",
    role: "Content Strategist & Graphic Designer",
    avatar: "/portfolio/responsive-site.png",
    linkedin: "https://www.linkedin.com/in/mh-sumon/",
    github: "https://github.com/sumonmhbd",
    facebook: "https://www.facebook.com/mhsumonbd"
  }
];

(function initTeamVaultAtmosphere(){
  var field = document.getElementById("teamVault");
  if (!field) return;

  var cv = document.getElementById("teamVaultBaba");
  if (!cv) return;

  var M = isMobile ? BABA2.m : BABA2.d;
  var ctx = cv.getContext("2d");
  cv.width = M.fw;
  cv.height = M.fh;
  cv.style.aspectRatio = M.fw + " / " + M.fh;

  var sheets = [], lit = 0;
  for (var s = 0; s < M.sheets; s++) {
    var im = new Image();
    im.decoding = "async";
    im.src = STB_ASSETS + "frames/" + (isMobile ? "m" : "d") + "/v-" + String(s + 1).padStart(2, "0") + ".webp";
    sheets.push(im);
  }

  function frame(i){
    var sh = sheets[Math.floor(i / M.per)];
    if (!sh || !sh.complete || !sh.naturalWidth) return null;
    var c = i % M.per;
    return { im: sh, x: (c % M.cols) * M.fw, y: Math.floor(c / M.cols) * M.fh };
  }

  var lastKey = -1;
  function drawBaba(t){
    var LEN = BABA2.pp ? 2 * (M.n - 1) : M.n;
    var map = function(j){ return j < M.n ? j : LEN - j; };
    var f = (t / 1000 * BABA2.fps) % LEN;
    var fi = Math.floor(f);
    var i0 = map(fi);
    var i1 = map((fi + 1) % LEN);
    var k = f - fi;
    var key = Math.round(f * 6) * 100 + Math.round(lit * 20);
    if (key === lastKey) return;
    lastKey = key;

    var a = frame(i0) || frame(0);
    var b = frame(i1);
    if (!a) return;

    ctx.clearRect(0, 0, M.fw, M.fh);
    ctx.globalAlpha = 1;
    ctx.drawImage(a.im, a.x, a.y, M.fw, M.fh, 0, 0, M.fw, M.fh);
    if (b && k > 0.05) {
      ctx.globalAlpha = k;
      ctx.drawImage(b.im, b.x, b.y, M.fw, M.fh, 0, 0, M.fw, M.fh);
      ctx.globalAlpha = 1;
    }
    if (lit > 0.02) {
      ctx.globalCompositeOperation = "source-atop";
      ctx.fillStyle = "rgba(190,240,225," + (lit * 0.35) + ")";
      ctx.fillRect(0, 0, M.fw, M.fh);
      ctx.globalCompositeOperation = "source-over";
    }
  }

  var W = 0, H = 0, speed = 1;
  var HD = { x: 0, y: 0, r: 0 };

  function measure(){
    W = field.clientWidth;
    H = field.clientHeight;
    var fr = field.getBoundingClientRect();
    var br = cv.getBoundingClientRect();
    var h = BABA2.head || [0.5, 0.16, 0.13];
    HD.x = br.left - fr.left + br.width * h[0];
    HD.y = br.top - fr.top + br.height * h[1];
    HD.r = br.width * h[2];
  }

  /* Smoke effects */
  var sb = document.getElementById("teamSmokeBack");
  var sf = document.getElementById("teamSmokeFront");
  var sbx = sb.getContext("2d");
  var sfx = sf.getContext("2d");
  var puffB = [], puffF = [];
  var spr = document.createElement("canvas");
  spr.width = spr.height = 256;
  (function(){
    var g = spr.getContext("2d");
    var gr = g.createRadialGradient(128,128,8,128,128,128);
    gr.addColorStop(0, "rgba(165,205,190,.55)");
    gr.addColorStop(0.4, "rgba(120,170,152,.22)");
    gr.addColorStop(1, "rgba(90,140,120,0)");
    g.fillStyle = gr;
    g.fillRect(0,0,256,256);
  })();

  function puff(front, any){
    var r = (front ? 0.18 : 0.12) * W + Math.random() * (front ? 0.16 : 0.1) * W;
    var spread = front ? 0.62 : 0.24;
    return {
      x: W * (0.5 + (Math.random() - 0.5) * 2 * spread),
      y: front ? H * (0.78 + Math.random() * 0.3) : (any ? H * (0.25 + Math.random() * 0.8) : H + r * 0.5),
      r: r,
      vx: (Math.random() - 0.5) * 0.25,
      vy: front ? -(0.02 + Math.random() * 0.05) : -(0.08 + Math.random() * 0.16),
      a: front ? 0.22 + Math.random() * 0.22 : 0.18 + Math.random() * 0.2,
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.002,
      life: 0
    };
  }

  function seedSmoke(){
    sb.width = sf.width = Math.max(1, W);
    sb.height = sf.height = Math.max(1, H);
    puffB = [];
    puffF = [];
    for (var i = 0; i < (isMobile ? 10 : 18); i++) puffB.push(puff(false, true));
    for (var k = 0; k < (isMobile ? 6 : 12); k++) puffF.push(puff(true, true));
  }

  measure();
  seedSmoke();
  window.addEventListener("resize", function(){ measure(); seedSmoke(); });

  var smokeT = 0;
  function drawSmoke(t){
    if (reduce) return;
    if (t - smokeT < 33) return;
    smokeT = t;
    [[sbx, puffB, false], [sfx, puffF, true]].forEach(function(L){
      var g = L[0], arr = L[1], front = L[2];
      g.clearRect(0, 0, W, H);
      for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        p.x += p.vx * speed;
        p.y += p.vy * speed;
        p.rot += p.vr;
        p.life = Math.min(1, p.life + 0.01);
        if (!front && p.y < H * 0.1) arr[i] = p = puff(false, false);
        if (front && (p.y < H * 0.7 || p.x < -p.r || p.x > W + p.r)) arr[i] = p = puff(true, false);
        g.save();
        g.globalAlpha = p.a * p.life * (1 + lit * 0.6);
        g.translate(p.x, p.y);
        g.rotate(p.rot);
        g.drawImage(spr, -p.r, -p.r * 0.65, p.r * 2, p.r * 1.3);
        g.restore();
      }
    });
  }

  /* SVG Social Icons (LinkedIn, GitHub, Facebook) */
  var iconLinkedIn = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z\"/></svg>";
  var iconGithub = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z\"/></svg>";
  var iconFacebook = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z\"/></svg>";

  /* Orbiting Team Polaroid Profile Cards */
  var N = isMobile ? 8 : 12;
  var cards = [];

  for (var j = 0; j < N; j++) {
    var member = TEAM_MEMBERS_DATA[j % TEAM_MEMBERS_DATA.length];
    var el = document.createElement("div");
    el.className = "team-fcard fcard";

    el.innerHTML = 
      "<div class=\"team-fcard-photo-wrap\">" +
        "<img src=\"" + member.avatar + "\" alt=\"" + member.name + "\" width=\"400\" height=\"250\" loading=\"lazy\" />" +
      "</div>" +
      "<div class=\"team-fcard-caption\">" +
        "<h3 class=\"team-fcard-name\">" + member.name + "</h3>" +
        "<span class=\"team-fcard-role\">" + member.role + "</span>" +
        "<div class=\"team-fcard-socials\">" +
          "<a href=\"" + member.linkedin + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn Profile\">" + iconLinkedIn + "</a>" +
          "<a href=\"" + member.github + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub Profile\">" + iconGithub + "</a>" +
          "<a href=\"" + member.facebook + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"Facebook Profile\">" + iconFacebook + "</a>" +
        "</div>" +
      "</div>";

    field.appendChild(el);

    var c = {
      el: el,
      member: member,
      a: (j / N) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
      lvl: [0.32, 0.52, 0.38, 0.62, 0.35, 0.55, 0.44][j % 7],
      tilt: (Math.random() - 0.5) * 14,
      ph: Math.random() * 6.28,
      spd: 0.8 + Math.random() * 0.4,
      held: false,
      behind: false
    };

    (function(item){
      item.el.addEventListener("mouseenter", function(){
        item.held = true;
        item.el.classList.add("held");
      });
      item.el.addEventListener("mouseleave", function(){
        item.held = false;
        item.el.classList.remove("held");
      });
      item.el.addEventListener("click", function(e){
        if (e.target.closest(".team-fcard-socials")) return; // allow clicking socials
        openLight(item.member.avatar);
      });
    })(c);

    cards.push(c);
  }

  var visible = false, last = 0;
  if (window.IntersectionObserver) {
    new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }, { rootMargin: "200px 0px" }).observe(field);
  } else {
    visible = true;
  }

  document.addEventListener("stbstorm:strike", function(){
    if (!visible) return;
    lit = 1;
    speed = 3.2;
  });

  (function tick(t){
    requestAnimationFrame(tick);
    if (!visible || document.hidden) { last = t; return; }
    var dt = Math.min(0.05, (t - (last || t)) / 1000);
    last = t;
    lit *= 0.9;
    speed += (1 - speed) * 0.03;

    drawBaba(t);
    drawSmoke(t);

    var rx = Math.min(W * (isMobile ? 0.44 : 0.4), 760 * BIG);
    var rz = isMobile ? 260 : 380 * BIG;
    var ch = cards[0] ? cards[0].el.offsetHeight || 180 : 180;

    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      if (!c.held && !reduce) c.a += dt * 0.16 * c.spd * speed;

      var x = Math.sin(c.a) * rx;
      var z = Math.cos(c.a) * rz;
      var behind = z < -rz * 0.15;
      c.behind = behind;

      var y = H * (c.lvl + (z / rz) * 0.14) - ch / 2 + Math.sin(t / 1400 + c.ph) * 14;
      var rot = c.held ? 0 : c.tilt + Math.sin(t / 1900 + c.ph) * 5;
      var sc = c.held ? 1.3 : 1;

      if (z > 0 && HD.r) {
        var cw2 = c.el.offsetWidth / 2 + HD.r * 0.8;
        var ov = 1 - Math.max(0, Math.abs(W / 2 + x - HD.x) - cw2 * 0.6) / (cw2 * 0.6);
        var minY = HD.y + HD.r * 1.05;
        if (ov > 0 && y < minY) y += (minY - y) * Math.min(1, ov);
      }

      c.el.style.zIndex = c.held ? 200 : Math.round(z > 0 ? 60 + z / 10 : 40 + z / 20);
      c.el.style.opacity = c.held ? "1" : (0.45 + 0.55 * ((z + rz) / (2 * rz))).toFixed(3);
      c.el.style.transform = "translate3d(" + (W / 2 + x - c.el.offsetWidth / 2).toFixed(1) + "px," + y.toFixed(1) + "px," + z.toFixed(1) + "px) rotate(" + rot.toFixed(2) + "deg) scale(" + sc + ")";
    }
  })(0);
})();



  


  
/* ============ PROFESSIONAL WORKFLOW INTERACTIVE STEPPER LOGIC ============ */
(function initProWorkflow(){
  var stepBtns = document.querySelectorAll(".pro-step-btn");
  var slides = document.querySelectorAll(".pro-slide");
  var dots = document.querySelectorAll(".pro-dot");
  var prevBtn = document.getElementById("proWfPrev");
  var nextBtn = document.getElementById("proWfNext");
  if (!stepBtns.length || !slides.length) return;

  var current = 0;
  var total = slides.length;

  function setStep(idx){
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    current = idx;

    // Update Step Buttons in Header Stepper
    stepBtns.forEach(function(b, i){
      if (i === current) {
        b.classList.add("active");
        b.setAttribute("aria-selected", "true");
        b.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      }
    });

    // Update Slides
    slides.forEach(function(s, i){
      if (i === current) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    // Update Indicator Dots
    dots.forEach(function(d, i){
      if (i === current) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });
  }

  // Bind clicks
  stepBtns.forEach(function(b){
    b.addEventListener("click", function(){
      var s = parseInt(b.getAttribute("data-step") || "0", 10);
      setStep(s);
    });
  });

  dots.forEach(function(d){
    d.addEventListener("click", function(){
      var s = parseInt(d.getAttribute("data-step") || "0", 10);
      setStep(s);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", function(){
      setStep(current - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function(){
      setStep(current + 1);
    });
  }
})();

})();