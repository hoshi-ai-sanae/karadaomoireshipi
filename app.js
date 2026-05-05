const recipes = [
  {
    id: "ginger-chicken-rice",
    title: "しょうが鶏雑炊",
    category: "cold",
    tags: ["風邪っぽい", "温まる", "消化にやさしい", "冷え"],
    summary: "体を冷やしたくない日や、食欲が落ちている時に。しょうがと鶏のうまみで食べやすい一品です。",
    ingredients: "ごはん、鶏ささみ、卵、しょうが、長ねぎ、だし",
    steps: "だしで鶏肉を煮て、ごはんとしょうがを加え、最後に溶き卵を回し入れます。",
    point: "熱すぎない温度でゆっくり食べると、のどにもやさしいです。",
    image: "assets/recipes/ginger-chicken-rice.png",
    imagePosition: "center",
    imageAlt: "温かい雑炊のイメージ",
  },
  {
    id: "salmon-miso-soup",
    title: "鮭と根菜のみそ汁",
    category: "tired",
    tags: ["疲れている", "具だくさん", "作り置き", "冷え"],
    summary: "疲れて料理をがんばれない日に。汁物だけでも満足しやすい、たんぱく質と野菜を入れたみそ汁です。",
    ingredients: "鮭、にんじん、大根、じゃがいも、しめじ、みそ",
    steps: "根菜をやわらかく煮て、鮭としめじを加え、火を止める直前にみそを溶きます。",
    point: "ごはんを添えれば、無理なく一食になります。",
    image: "assets/recipes/salmon-miso-soup.png",
    imagePosition: "center",
    imageAlt: "具だくさんの汁物のイメージ",
  },
  {
    id: "tofu-egg-soup",
    title: "豆腐と卵のとろみスープ",
    category: "stomach",
    tags: ["胃にやさしい", "10分で作れる", "軽め"],
    summary: "胃を休めたい時に。豆腐と卵で軽くたんぱく質をとれる、やさしい味のスープです。",
    ingredients: "豆腐、卵、片栗粉、鶏がらスープ、青ねぎ",
    steps: "スープを温めて豆腐を入れ、水溶き片栗粉でとろみをつけてから卵を加えます。",
    point: "刺激が気になる時は、こしょうやラー油は控えめにします。",
    image: "assets/recipes/tofu-egg-soup.png",
    imagePosition: "center",
    imageAlt: "やさしいスープのイメージ",
  },
  {
    id: "komatsuna-sesame-rice",
    title: "小松菜とごまのおにぎり",
    category: "tired",
    tags: ["疲れている", "貧血ぎみ", "鉄分を意識", "持ち歩き"],
    summary: "忙しくて食事が雑になりそうな日に。小松菜とごまで香ばしく、軽く食べやすいおにぎりです。",
    ingredients: "ごはん、小松菜、白ごま、しらす、しょうゆ",
    steps: "刻んだ小松菜を炒め、しらすとごまを混ぜ、ごはんに合わせて握ります。",
    point: "朝作っておくと、食べそびれ防止にもなります。",
    image: "assets/recipes/komatsuna-sesame-rice.png",
    imagePosition: "center",
    imageAlt: "おにぎりやごはん料理のイメージ",
  },
  {
    id: "apple-yogurt",
    title: "りんごヨーグルト",
    category: "beauty",
    tags: ["肌を整えたい", "朝ごはん", "甘さ控えめ"],
    summary: "重い食事にしたくない朝に。りんごの甘みとヨーグルトで、軽く整える一皿です。",
    ingredients: "りんご、プレーンヨーグルト、はちみつ、きなこ",
    steps: "りんごを小さく切り、ヨーグルト、きなこ、少量のはちみつをかけます。",
    point: "小さなお子さんや咳が強い時は、はちみつの扱いに注意してください。",
    image: "assets/recipes/apple-yogurt.png",
    imagePosition: "center",
    imageAlt: "りんごとヨーグルトの朝食イメージ",
  },
  {
    id: "udon-vegetable",
    title: "くたくた野菜うどん",
    category: "cold",
    tags: ["風邪っぽい", "のどにやさしい", "温まる", "冷え"],
    summary: "のどがつらい時や、しっかり噛むのがしんどい時に。野菜をやわらかく煮たうどんです。",
    ingredients: "うどん、白菜、にんじん、卵、だし、しょうゆ",
    steps: "野菜をだしでくたっとするまで煮て、うどんを加え、卵で仕上げます。",
    point: "味は薄めにして、食べながら調整すると体に入りやすいです。",
    image: "assets/recipes/udon-vegetable.png",
    imagePosition: "center",
    imageAlt: "温かいうどんのイメージ",
  },
  {
    id: "chicken-tomato-stew",
    title: "鶏肉とトマトの元気スープ",
    category: "beauty",
    tags: ["肌を整えたい", "野菜多め", "たんぱく質", "作り置き"],
    summary: "野菜不足が気になる日に。トマトの酸味で食べやすく、鶏肉で満足感もあるスープです。",
    ingredients: "鶏もも肉、トマト缶、玉ねぎ、キャベツ、にんにく少量",
    steps: "具材を炒めてトマト缶と水を加え、やわらかくなるまで煮込みます。",
    point: "疲れが強い日は、にんにくを抜いて軽い味にしてもおいしいです。",
    image: "assets/recipes/chicken-tomato-stew.png",
    imagePosition: "center",
    imageAlt: "野菜たっぷり料理のイメージ",
  },
  {
    id: "banana-soy-smoothie",
    title: "バナナ豆乳スムージー",
    category: "stomach",
    tags: ["胃にやさしい", "朝ごはん", "食欲がない", "10分で作れる"],
    summary: "食欲がない朝や、固形物が重く感じる時に。材料を混ぜるだけの簡単ドリンクです。",
    ingredients: "バナナ、無調整豆乳、ヨーグルト、すりごま",
    steps: "材料をミキサーでなめらかにします。冷えが気になる時は常温に近づけます。",
    point: "冷たいものがつらい時は、無理に飲まず温かいスープを選びます。",
    image: "assets/recipes/banana-soy-smoothie.png",
    imagePosition: "center",
    imageAlt: "バナナスムージーのイメージ",
  },
  {
    id: "ume-shiso-tofu-chazuke",
    title: "冷やし梅しそ豆腐茶漬け",
    category: "tired",
    tags: ["夏バテ", "朝ごはん", "食欲がない", "10分で作れる"],
    summary: "暑さで食欲が落ちた日に。梅としその香りでさっぱり食べられる、冷たいお茶漬け風の一皿です。",
    ingredients: "ごはん、豆腐、梅干し、しそ、きゅうり、冷たいだし",
    steps: "ごはんに豆腐、刻んだしそときゅうり、梅干しをのせ、冷たいだしをかけます。",
    point: "冷えが気になる時は、だしを常温に近づけてください。",
    image: "assets/recipes/ume-shiso-tofu-chazuke.png",
    imagePosition: "center",
    imageAlt: "梅としそと豆腐の冷たい茶漬け",
  },
  {
    id: "pork-summer-vegetables",
    title: "豚しゃぶと夏野菜のさっぱり皿",
    category: "tired",
    tags: ["夏バテ", "たんぱく質", "野菜多め", "10分で作れる"],
    summary: "暑さでだるい日に。豚肉と夏野菜をさっぱり食べられる、満足感のある主菜です。",
    ingredients: "豚しゃぶ肉、トマト、オクラ、なす、レタス、ポン酢",
    steps: "豚肉をゆで、焼いたなす、トマト、オクラと一緒に盛り、ポン酢をかけます。",
    point: "肉を冷やしすぎず、常温に近い状態で食べると体に入りやすいです。",
    image: "assets/recipes/pork-summer-vegetables.png",
    imagePosition: "center",
    imageAlt: "豚しゃぶと夏野菜のさっぱり皿",
  },
  {
    id: "clam-komatsuna-soup",
    title: "あさりと小松菜の鉄分スープ",
    category: "tired",
    tags: ["貧血ぎみ", "鉄分を意識", "疲れている", "温まる"],
    summary: "ふらつきや疲れが気になる日に。あさりと小松菜を使った、軽く飲みやすいスープです。",
    ingredients: "あさり、小松菜、にんじん、白ごま、だし、しょうゆ",
    steps: "だしでにんじんを煮て、あさりと小松菜を加え、しょうゆで薄く味を整えます。",
    point: "鉄分を意識したい時は、主食も添えて無理なく一食にします。",
    image: "assets/recipes/clam-komatsuna-soup.png",
    imagePosition: "center",
    imageAlt: "あさりと小松菜のスープ",
  },
  {
    id: "chicken-hijiki-tsukune",
    title: "鶏ひじきつくねのおろし添え",
    category: "tired",
    tags: ["貧血ぎみ", "作り置き", "たんぱく質", "鉄分を意識"],
    summary: "鉄分を意識したい日に。ひじき入りのつくねをさっぱり大根おろしで食べるおかずです。",
    ingredients: "鶏ひき肉、ひじき、豆腐、片栗粉、大根おろし、しょうゆ",
    steps: "材料を混ぜて丸め、フライパンで焼き、大根おろしを添えます。",
    point: "多めに焼いておくと、翌日の朝ごはんやお弁当にも使えます。",
    image: "assets/recipes/chicken-hijiki-tsukune.png",
    imagePosition: "center",
    imageAlt: "ひじき入り鶏つくね",
  },
  {
    id: "salmon-spinach-soy-risotto",
    title: "鮭とほうれん草の豆乳リゾット",
    category: "cold",
    tags: ["冷え", "睡眠不足", "温まる", "たんぱく質"],
    summary: "冷えや寝不足で力が出ない日に。豆乳でやさしく温まる、鮭とほうれん草のリゾットです。",
    ingredients: "ごはん、鮭、ほうれん草、無調整豆乳、玉ねぎ、みそ少量",
    steps: "玉ねぎと鮭を煮て、ごはんと豆乳、ほうれん草を加え、みそ少量で整えます。",
    point: "豆乳は沸騰させすぎず、弱火で温めるとやさしい口当たりになります。",
    image: "assets/recipes/salmon-spinach-soy-risotto.png",
    imagePosition: "center",
    imageAlt: "鮭とほうれん草の豆乳リゾット",
  },
  {
    id: "ginger-miso-kenchin",
    title: "しょうが味噌けんちん汁",
    category: "cold",
    tags: ["冷え", "作り置き", "温まる", "野菜多め"],
    summary: "体が冷えやすい日に。根菜と豆腐を入れた、作り置きしやすい具だくさん汁です。",
    ingredients: "豆腐、大根、にんじん、ごぼう、長ねぎ、しょうが、みそ",
    steps: "根菜を煮て豆腐を加え、しょうがとみそで仕上げます。",
    point: "翌日はごはんやうどんを入れても食べやすいです。",
    image: "assets/recipes/ginger-miso-kenchin.png",
    imagePosition: "center",
    imageAlt: "しょうが味噌けんちん汁",
  },
  {
    id: "shirasu-natto-breakfast-bowl",
    title: "しらす納豆の朝ごはん丼",
    category: "tired",
    tags: ["朝ごはん", "10分で作れる", "貧血ぎみ", "たんぱく質"],
    summary: "忙しい朝に。しらすと納豆でたんぱく質をとりやすい、すぐ作れる朝ごはんです。",
    ingredients: "ごはん、納豆、しらす、卵黄、青ねぎ、しょうゆ",
    steps: "ごはんに納豆、しらす、卵黄、青ねぎをのせ、しょうゆを少量かけます。",
    point: "朝に食べそびれやすい人でも、短時間で用意できます。",
    image: "assets/recipes/shirasu-natto-breakfast-bowl.png",
    imagePosition: "center",
    imageAlt: "しらす納豆の朝ごはん丼",
  },
  {
    id: "tomato-egg-soup",
    title: "卵とトマトの10分スープ",
    category: "stomach",
    tags: ["10分で作れる", "朝ごはん", "胃にやさしい", "温まる"],
    summary: "時間がない朝や軽く済ませたい日に。トマトと卵でさっと作れる温かいスープです。",
    ingredients: "トマト、卵、鶏がらスープ、青ねぎ、水、片栗粉少量",
    steps: "スープでトマトを煮て、溶き卵を回し入れ、好みでとろみをつけます。",
    point: "酸味が強い時は少し長めに煮るとまろやかになります。",
    image: "assets/recipes/tomato-egg-soup.png",
    imagePosition: "center",
    imageAlt: "卵とトマトのスープ",
  },
  {
    id: "mackerel-cabbage-mealprep",
    title: "さば缶とキャベツの作り置き煮",
    category: "beauty",
    tags: ["作り置き", "肌を整えたい", "たんぱく質", "10分で作れる"],
    summary: "作り置きで栄養を整えたい日に。さば缶とキャベツを使った、手軽な煮ものです。",
    ingredients: "さば水煮缶、キャベツ、しょうが、酒、しょうゆ、みりん少量",
    steps: "キャベツとさば缶を汁ごと煮て、しょうがと調味料で味を整えます。",
    point: "冷蔵で翌日も食べやすく、ごはんにも合います。",
    image: "assets/recipes/mackerel-cabbage-mealprep.png",
    imagePosition: "center",
    imageAlt: "さば缶とキャベツの煮もの",
  },
  {
    id: "shio-koji-chicken-broccoli",
    title: "鶏むねとブロッコリーの塩麹蒸し",
    category: "beauty",
    tags: ["作り置き", "肌を整えたい", "たんぱく質", "疲れている"],
    summary: "体を整えたい日に。鶏むね肉とブロッコリーを蒸して、軽く食べられる作り置きおかずです。",
    ingredients: "鶏むね肉、ブロッコリー、塩麹、酒、オリーブオイル少量",
    steps: "鶏むね肉を塩麹でなじませ、ブロッコリーと一緒に蒸します。",
    point: "冷めても食べやすいので、翌日の一品にも向いています。",
    image: "assets/recipes/shio-koji-chicken-broccoli.png",
    imagePosition: "center",
    imageAlt: "鶏むねとブロッコリーの蒸し料理",
  },
  {
    id: "pumpkin-bean-soup",
    title: "かぼちゃと豆の冷え対策スープ",
    category: "cold",
    tags: ["冷え", "作り置き", "温まる", "肌を整えたい"],
    summary: "冷えが気になる日に。かぼちゃと豆でほっとする、やさしい甘みのスープです。",
    ingredients: "かぼちゃ、ミックスビーンズ、玉ねぎ、豆乳、みそ少量",
    steps: "かぼちゃと玉ねぎを煮て、豆と豆乳を加え、みそ少量で整えます。",
    point: "多めに作って、翌朝のスープにしても便利です。",
    image: "assets/recipes/pumpkin-bean-soup.png",
    imagePosition: "center",
    imageAlt: "かぼちゃと豆のスープ",
  },
  {
    id: "black-sesame-banana-yogurt",
    title: "黒ごまバナナきなこヨーグルト",
    category: "beauty",
    tags: ["肌を整えたい", "朝ごはん", "10分で作れる", "甘さ控えめ"],
    summary: "軽く整えたい朝に。バナナ、黒ごま、きなこで満足感を出したヨーグルトです。",
    ingredients: "プレーンヨーグルト、バナナ、黒ごま、きなこ、はちみつ少量",
    steps: "ヨーグルトに輪切りのバナナ、黒ごま、きなこをのせます。",
    point: "甘さはバナナで足りることも多いので、はちみつは少量にします。",
    image: "assets/recipes/black-sesame-banana-yogurt.png",
    imagePosition: "center",
    imageAlt: "黒ごまとバナナのヨーグルト",
  },
  {
    id: "barley-mushroom-salad",
    title: "もち麦ときのこの作り置きサラダ",
    category: "beauty",
    tags: ["作り置き", "肌を整えたい", "野菜多め", "整えたい"],
    summary: "食事のリズムを整えたい日に。もち麦ときのこで食べごたえのある作り置きサラダです。",
    ingredients: "もち麦、しめじ、まいたけ、レタス、きゅうり、オリーブオイル、酢",
    steps: "もち麦をゆで、炒めたきのこ、野菜、調味料と合わせます。",
    point: "冷蔵しておくと、主菜に添えるだけで食事が整いやすくなります。",
    image: "assets/recipes/barley-mushroom-salad.png",
    imagePosition: "center",
    imageAlt: "もち麦ときのこのサラダ",
  },
  {
    id: "tuna-tofu-quick-bowl",
    title: "ツナと豆腐の10分丼",
    category: "stomach",
    tags: ["10分で作れる", "朝ごはん", "胃にやさしい", "たんぱく質"],
    summary: "料理をがんばれない日に。ツナと豆腐をのせるだけで作れる、軽めの丼です。",
    ingredients: "ごはん、ツナ、豆腐、きゅうり、青ねぎ、ごま、しょうゆ",
    steps: "ごはんに豆腐、ツナ、きゅうり、青ねぎをのせ、ごまとしょうゆをかけます。",
    point: "胃が重い日は、ごはんを少なめにして豆腐を多めにします。",
    image: "assets/recipes/tuna-tofu-quick-bowl.png",
    imagePosition: "center",
    imageAlt: "ツナと豆腐の丼",
  },
  {
    id: "hojicha-milk-porridge",
    title: "眠れない日のほうじ茶ミルク粥",
    category: "stomach",
    tags: ["睡眠不足", "胃にやさしい", "朝ごはん", "温まる"],
    summary: "寝不足で胃が重い日に。ほうじ茶の香りでほっとする、やわらかいミルク粥です。",
    ingredients: "ごはん、ほうじ茶、牛乳または豆乳、バナナ、すりごま",
    steps: "ごはんをほうじ茶と牛乳でやわらかく煮て、バナナとすりごまを添えます。",
    point: "甘くしすぎず、温かいうちにゆっくり食べます。",
    image: "assets/recipes/hojicha-milk-porridge.png",
    imagePosition: "center",
    imageAlt: "ほうじ茶ミルク粥",
  },
  {
    id: "avocado-natto-bowl",
    title: "アボカド納豆の肌整え丼",
    category: "beauty",
    tags: ["肌を整えたい", "朝ごはん", "10分で作れる", "たんぱく質"],
    summary: "肌や食事バランスを整えたい日に。アボカドと納豆を合わせた、満足感のある丼です。",
    ingredients: "ごはん、納豆、アボカド、トマト、ベビーリーフ、ごま、しょうゆ",
    steps: "ごはんに納豆、アボカド、トマト、ベビーリーフをのせ、ごまとしょうゆをかけます。",
    point: "朝ごはんにも、軽い昼食にも使いやすい一皿です。",
    image: "assets/recipes/avocado-natto-bowl.png",
    imagePosition: "center",
    imageAlt: "アボカド納豆の丼",
  },];

const categoryLabels = {
  all: "すべて",
  tired: "疲れている",
  cold: "風邪っぽい",
  stomach: "胃にやさしい",
  beauty: "整えたい",
};

const symptomRules = [
  {
    label: "風邪っぽい時",
    words: ["風邪", "かぜ", "咳", "せき", "のど", "喉", "発熱", "熱", "鼻水", "寒気", "だるい"],
    recipeIds: ["ginger-chicken-rice", "udon-vegetable", "tofu-egg-soup"],
  },
  {
    label: "疲れている時",
    words: ["疲", "だる", "しんど", "元気", "眠い", "忙しい", "栄養", "食べそびれ"],
    recipeIds: ["salmon-miso-soup", "komatsuna-sesame-rice", "chicken-tomato-stew"],
  },
  {
    label: "胃を休めたい時",
    words: ["胃", "お腹", "腹", "吐き気", "食欲", "消化", "重い", "下痢", "もたれ"],
    recipeIds: ["tofu-egg-soup", "banana-soy-smoothie", "ginger-chicken-rice", "udon-vegetable"],
  },
  {
    label: "体を整えたい時",
    words: ["肌", "むくみ", "便秘", "野菜", "整え", "美容", "朝", "軽く"],
    recipeIds: ["apple-yogurt", "chicken-tomato-stew", "komatsuna-sesame-rice"],
  },
];

const recipeList = document.querySelector("#recipe-list");
const emptyMessage = document.querySelector("#empty-message");
const resultCount = document.querySelector("#result-count");
const searchInput = document.querySelector("#recipe-search");
const filterButtons = document.querySelectorAll(".filter-button");
const savedList = document.querySelector("#saved-list");
const savedEmpty = document.querySelector("#saved-empty");
const savedDetail = document.querySelector("#saved-detail");
const clearSavedButton = document.querySelector("#clear-saved");
const todayPick = document.querySelector("#today-pick");
const todayImage = document.querySelector("#today-image");
const todaySummary = document.querySelector("#today-summary");
const symptomInput = document.querySelector("#symptom-input");
const symptomButton = document.querySelector("#symptom-button");
const symptomHint = document.querySelector("#symptom-hint");

const storageKey = "healthy-recipe-saved";
const todayRecipe = recipes[new Date().getDate() % recipes.length];
let activeFilter = "all";
let recommendedRecipeIds = null;
let savedRecipeIds = loadSavedRecipes();

function loadSavedRecipes() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveRecipes() {
  localStorage.setItem(storageKey, JSON.stringify(savedRecipeIds));
}

function getFilteredRecipes() {
  const keyword = searchInput.value.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesFilter = activeFilter === "all" || recipe.category === activeFilter;
    const matchesSymptoms = !recommendedRecipeIds || recommendedRecipeIds.includes(recipe.id);
    const searchableText = [
      recipe.title,
      recipe.summary,
      recipe.ingredients,
      recipe.steps,
      recipe.point,
      categoryLabels[recipe.category],
      ...recipe.tags,
    ].join(" ").toLowerCase();

    return matchesFilter && matchesSymptoms && searchableText.includes(keyword);
  });
}

function renderRecipes() {
  const filteredRecipes = getFilteredRecipes();
  recipeList.innerHTML = "";
  emptyMessage.hidden = filteredRecipes.length > 0;
  resultCount.textContent = `${filteredRecipes.length}件`;

  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const image = createRecipeImage(recipe);

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const tags = document.createElement("div");
    tags.className = "tag-row";
    recipe.tags.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tags.append(tag);
    });

    const summary = document.createElement("p");
    summary.textContent = recipe.summary;

    const detail = document.createElement("div");
    detail.className = "recipe-detail";
    detail.append(
      createDetail("材料", recipe.ingredients),
      createDetail("作り方", recipe.steps),
      createDetail("ポイント", recipe.point),
    );

    const saveButton = document.createElement("button");
    const isSaved = savedRecipeIds.includes(recipe.id);
    saveButton.type = "button";
    saveButton.className = isSaved ? "save-button saved" : "save-button";
    saveButton.textContent = isSaved ? "保存済み" : "作りたいリストに追加";
    saveButton.addEventListener("click", () => toggleSavedRecipe(recipe.id));

    card.append(image, title, tags, summary, detail, saveButton);
    recipeList.append(card);
  });
}

function createRecipeImage(recipe) {
  const image = document.createElement("div");
  image.className = "recipe-image";
  image.setAttribute("role", "img");
  image.setAttribute("aria-label", recipe.imageAlt);
  image.style.backgroundPosition = recipe.imagePosition;

  if (recipe.image.endsWith(".b64")) {
    fetch(recipe.image)
      .then((response) => response.text())
      .then((base64) => {
        image.style.backgroundImage = `url("data:image/jpeg;base64,${base64.trim()}")`;
      })
      .catch(() => {
        image.classList.add("image-missing");
      });
  } else {
    image.style.backgroundImage = `url("${recipe.image}")`;
  }

  return image;
}

function createDetail(label, text) {
  const detail = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = `${label}: `;
  detail.append(strong, text);
  return detail;
}

function showRecipeDetail(recipe, prefix = "レシピ") {
  savedDetail.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = `${prefix}: ${recipe.title}`;

  const summary = document.createElement("p");
  summary.textContent = recipe.summary;

  const list = document.createElement("dl");
  list.append(
    createDefinition("材料", recipe.ingredients),
    createDefinition("作り方", recipe.steps),
    createDefinition("ポイント", recipe.point),
  );

  savedDetail.append(heading, summary, list);
}

function createDefinition(label, text) {
  const fragment = document.createDocumentFragment();
  const term = document.createElement("dt");
  const description = document.createElement("dd");
  term.textContent = label;
  description.textContent = text;
  fragment.append(term, description);
  return fragment;
}

function toggleSavedRecipe(recipeId) {
  if (savedRecipeIds.includes(recipeId)) {
    savedRecipeIds = savedRecipeIds.filter((id) => id !== recipeId);
  } else {
    savedRecipeIds.push(recipeId);
  }

  saveRecipes();
  renderRecipes();
  renderSavedRecipes();
}

function renderSavedRecipes() {
  savedList.innerHTML = "";
  savedEmpty.hidden = savedRecipeIds.length > 0;

  savedRecipeIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean)
    .forEach((recipe) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = recipe.title;
      button.addEventListener("click", () => showRecipeDetail(recipe, "作りたい"));
      item.append(button);
      savedList.append(item);
    });
}

function recommendFromSymptoms() {
  const text = symptomInput.value.trim();

  if (!text) {
    recommendedRecipeIds = null;
    symptomHint.textContent = "症状や気分を入れると、近いレシピを表示します。";
    renderRecipes();
    return;
  }

  const matchedRules = symptomRules.filter((rule) =>
    rule.words.some((word) => text.includes(word)),
  );

  if (matchedRules.length === 0) {
    recommendedRecipeIds = null;
    searchInput.value = text;
    symptomHint.textContent = "ぴったりの症状分類は見つからなかったので、入力した言葉で検索しました。";
    renderRecipes();
    return;
  }

  recommendedRecipeIds = [...new Set(matchedRules.flatMap((rule) => rule.recipeIds))];
  activeFilter = "all";
  searchInput.value = "";
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });
  symptomHint.textContent = `${matchedRules.map((rule) => rule.label).join("・")}に合いそうなレシピを表示しています。`;
  renderRecipes();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    recommendedRecipeIds = null;
    symptomHint.textContent = "体調カテゴリで絞り込んでいます。";
    filterButtons.forEach((current) => current.classList.remove("active"));
    button.classList.add("active");
    renderRecipes();
  });
});

searchInput.addEventListener("input", () => {
  recommendedRecipeIds = null;
  symptomHint.textContent = "検索欄のキーワードで絞り込んでいます。";
  renderRecipes();
});

symptomButton.addEventListener("click", recommendFromSymptoms);
symptomInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    recommendFromSymptoms();
  }
});
symptomInput.addEventListener("input", () => {
  if (!symptomInput.value.trim()) {
    recommendedRecipeIds = null;
    symptomHint.textContent = "症状や気分を入れると、近いレシピを表示します。";
    renderRecipes();
  }
});

clearSavedButton.addEventListener("click", () => {
  savedRecipeIds = [];
  saveRecipes();
  renderRecipes();
  renderSavedRecipes();
  savedDetail.innerHTML = '<p class="empty-message">今日のおすすめや保存したメニューを押すと、材料と作り方がここに出ます。</p>';
});

todayPick.addEventListener("click", () => showRecipeDetail(todayRecipe, "今日のおすすめ"));
todayPick.textContent = todayRecipe.title;
todayImage.style.backgroundImage = `url("${todayRecipe.image}")`;
todayImage.setAttribute("aria-label", `${todayRecipe.title}の写真`);
todaySummary.textContent = todayRecipe.summary;
renderRecipes();
renderSavedRecipes();








