Enc.register('stories/khandaq', {
  "id": "khandaq",
  "format": "narrative",
  "wordlists": true,
  "modal": "s_trench",
  "title": {
    "ar": "غزوة الخندق: يوم الأحزاب",
    "en": "The Battle of the Trench: The Day of the Confederates"
  },
  "dek": {
    "ar": "تحزَّبت قريشٌ وغطفان واليهود على المدينة، فحفر المسلمون حولها خندقًا ورسول الله ﷺ ينقل التراب معهم، وصبروا على الجوع والبرد والحصار، حتى أرسل الله على الأحزاب ريحًا وجنودًا لم يروها.",
    "en": "Quraysh, Ghatafan and the Jews banded together against Madinah. The Muslims dug a trench around it, with the Messenger of Allah ﷺ carrying the earth among them, and endured hunger, cold and siege — until Allah sent upon the Confederates a wind and hosts they did not see."
  },
  "tone": "green-deep",
  "icon": "pickaxe",
  "when": {
    "ar": "شوال، السنة الخامسة للهجرة",
    "en": "Shawwal, 5 AH",
    "ref": "umari"
  },
  "place": {
    "map": "madinah",
    "ar": "المدينة المنورة",
    "en": "Madinah"
  },
  "places": [
    "madinah"
  ],
  "people": [
    "c_jabir",
    "c_umar",
    "c_ali",
    "c_salman",
    "c_ibnumar",
    "c_sad_muaz"
  ],
  "topics": [
    "ghazawat",
    "mujizat"
  ],
  "review": {
    "status": "approved",
    "reviewer": "صاحب الموقع",
    "date": "2026-09-30"
  },
  "grades": {
    "nasai:3176": {
      "grade": "hasan",
      "grader": "albani"
    }
  },
  "scenes": [
    {
      "id": "dig",
      "title": {
        "ar": "حفر الخندق",
        "en": "Digging the Trench"
      },
      "sub": {
        "ar": "المدينة، شوال ٥ هـ",
        "en": "Madinah, Shawwal 5 AH"
      },
      "blocks": [
        {
          "id": "dig-1",
          "type": "prose",
          "lead": true,
          "ar": "في شوال من السنة الخامسة للهجرة[^umari] سُمِّيت الغزوة الخندقَ «لأجل الخندق الذي حُفر حول المدينة بأمر النبي ﷺ»[^fath:7/392]، وسُمِّيت الأحزابَ «لاجتماع طوائف من المشركين على حرب المسلمين، وهم قريش وغطفان واليهود ومن تبعهم»[^fath:7/393]. ولم يأمر ﷺ بالحفر من بعيد، بل نزل يعمل بيده مع أصحابه:",
          "en": "In Shawwal of the fifth year after the Hijra[^umari], the campaign was named \"the Trench\" \"because of the trench dug around Madinah at the Prophet's ﷺ command\"[^fath:7/392], and \"the Confederates\" \"because groups of the idolaters joined together to fight the Muslims — Quraysh, Ghatafan, the Jews and their followers\"[^fath:7/393]. He ﷺ did not order the digging from afar; he went down and worked with his own hands beside his Companions:"
        },
        {
          "id": "dig-2",
          "type": "hadith",
          "ref": "bukhari:2837",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول البراء بن عازب (رضي الله عنهما):",
            "en": "Al-Bara' ibn 'Azib (رضي الله عنهما) said:"
          },
          "ar": "«رأيتُ رسولَ الله ﷺ يومَ الأحزاب ينقلُ الترابَ، وقد وارى الترابُ بياضَ بطنه، وهو يقول: لولا أنتَ ما اهتدينا، ولا تصدَّقنا ولا صلَّينا، فأنزِلِ السكينةَ علينا، وثبِّتِ الأقدامَ إن لاقينا، إنَّ الأُلى قد بغَوا علينا، إذا أرادوا فتنةً أبينا»",
          "en": "\"I saw the Messenger of Allah ﷺ on the day of the Confederates carrying earth, the dust covering the whiteness of his belly, and saying: Were it not for You we would not have been guided, nor given charity, nor prayed; so send down tranquillity upon us, and make our feet firm if we meet the enemy. Those people have wronged us; when they wanted to lead us astray, we refused.\""
        },
        {
          "id": "dig-3",
          "type": "prose",
          "ar": "وكان الجوع والتعب قد أخذا منهم، فلمَّا رأى ﷺ ما بهم قال: [«اللهمَّ إنَّ العيشَ عيشُ الآخرة، فاغفِرْ للأنصارِ والمهاجرة»](h:bukhari:2834)، فأجابوه: [«نحن الذين بايعوا محمَّدًا، على الجهادِ ما بقينا أبدًا»](h:bukhari:2834).",
          "en": "Hunger and fatigue had taken hold of them. When he ﷺ saw their state he said: [\"O Allah, the true life is the life of the Hereafter, so forgive the Ansar and the Emigrants,\"](h:bukhari:2834) and they answered him: [\"We are those who pledged to Muhammad to strive as long as we live.\"](h:bukhari:2834)"
        },
        {
          "id": "dig-4",
          "type": "hadith",
          "ref": "bukhari:4100",
          "grade": "sahih",
          "narrator": {
            "ar": "ويصف أنس (رضي الله عنه) طعامهم يومئذ:",
            "en": "Anas (رضي الله عنه) describes their food in those days:"
          },
          "ar": "«يُؤتَون بملء كفِّي من الشعير، فيُصنع لهم [بإهالةٍ سَنِخة](g:ihalah)، توضع بين يدي القوم، والقوم جياع، وهي بَشِعةٌ في الحلق، ولها ريحٌ منتن»",
          "en": "\"They would be brought my handful of barley, cooked for them [with stale fat](g:ihalah) and set before the men; the men were hungry, and it was harsh in the throat and had a foul smell.\""
        },
        {
          "id": "dig-5",
          "type": "aside",
          "kind": "riwaya",
          "title": {
            "ar": "من أشار بالخندق؟ ومتى كانت؟",
            "en": "Who suggested the trench, and when was it?"
          },
          "ar": "قال ابن حجر: «وكان الذي أشار بذلك سلمان، فيما ذكر أصحاب المغازي»[^fath:7/392]؛ فهو خبر أهل المغازي.\nوذكر الخلاف في سنتها: «قال موسى بن عقبة: كانت في شوال سنة أربع… وقال ابن إسحاق: كانت في شوال سنة خمس، وبذلك جزم غيره من أهل المغازي»، ومال البخاري إلى الأول بحديث ابن عمر: «عرضه يوم أحد وهو ابن أربع عشرة سنة فلم يُجزه، وعرضه يوم الخندق وهو ابن خمس عشرة سنة فأجازه»[^bukhari:4097]، فأجاب ابن حجر بأنه «لا حجة فيه إذا ثبت أنها كانت سنة خمس؛ لاحتمال أن يكون ابن عمر في أحد كان في أول ما طعن في الرابعة عشر، وكان في الأحزاب قد استكمل الخمس عشرة»[^fath:7/393].",
          "en": "Ibn Hajar said: \"The one who suggested it was Salman, according to what the authors of the campaign histories mention\"[^fath:7/392] — it is their report.\nHe notes the disagreement over the year: \"Musa ibn 'Uqbah said: it was in Shawwal of the year four … Ibn Ishaq said: it was in Shawwal of the year five, and the other historians of the campaigns affirm that.\" Al-Bukhari leaned to the first, citing Ibn 'Umar: \"He presented him on the day of Uhud when he was fourteen and did not accept him, and presented him on the day of the Trench when he was fifteen and accepted him\"[^bukhari:4097]. Ibn Hajar answered that \"this is no proof if it is established that it was in the year five, since Ibn 'Umar may have just entered his fourteenth year at Uhud and completed his fifteenth by the Confederates.\"[^fath:7/393]"
        }
      ]
    },
    {
      "id": "rock",
      "title": {
        "ar": "الكُدية وطعام جابر",
        "en": "The Hard Rock and Jabir's Food"
      },
      "sub": {
        "ar": "الخندق",
        "en": "The Trench"
      },
      "blocks": [
        {
          "id": "rock-1",
          "type": "hadith",
          "ref": "bukhari:4101",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول جابر بن عبد الله (رضي الله عنهما):",
            "en": "Jabir ibn 'Abd Allah (رضي الله عنهما) said:"
          },
          "ar": "«إنا يوم الخندق نحفر، فعرضت [كُديةٌ](g:kudyah) شديدة، فجاءوا النبي ﷺ فقالوا: هذه كُديةٌ عرضت في الخندق، فقال: أنا نازل، ثم قام وبطنه معصوبٌ بحجر، ولبثنا ثلاثة أيام لا نذوق ذَواقًا، فأخذ النبي ﷺ المِعول فضرب، فعاد [كثيبًا أهيل](g:ahyal) أو أهيم»",
          "en": "\"On the day of the Trench we were digging when a [hard rock](g:kudyah) came in our way. They came to the Prophet ﷺ and said: Here is a rock that has come in the way of the trench. He said: I will go down. Then he stood up, his belly bound with a stone — we had spent three days tasting nothing — and the Prophet ﷺ took the pickaxe and struck, and it turned into [loose, running sand](g:ahyal).\""
        },
        {
          "id": "rock-2",
          "type": "hadith",
          "ref": "nasai:3176",
          "grade": "hasan",
          "grader": "albani",
          "narrator": {
            "ar": "وفي روايةٍ عند النسائي عن رجلٍ من أصحاب النبي ﷺ:",
            "en": "In a report in al-Nasa'i from one of the Companions of the Prophet ﷺ:"
          },
          "ar": "«لمَّا أمر النبي ﷺ بحفر الخندق، عرضت لهم صخرةٌ حالت بينهم وبين الحفر، فقام رسول الله ﷺ وأخذ المِعول… فندر ثلث الحجر، وسلمان الفارسي قائمٌ ينظر، فبرق مع ضربة رسول الله ﷺ برقة… قال: فإني حين ضربتُ الضربة الأولى رُفعت لي مدائنُ كسرى وما حولها ومدائنُ كثيرة، حتى رأيتُها بعينيَّ… ثم ضربتُ الضربة الثانية، فرُفعت لي مدائنُ قيصر وما حولها، حتى رأيتُها بعينيَّ… ثم ضربتُ الثالثة، فرُفعت لي مدائنُ الحبشة وما حولها من القرى، حتى رأيتُها بعينيَّ»",
          "en": "\"When the Prophet ﷺ ordered the trench to be dug, a rock came in their way and blocked the digging. The Messenger of Allah ﷺ stood and took the pickaxe … and a third of the rock broke off, while Salman al-Farisi stood watching; and with the blow of the Messenger of Allah ﷺ came a flash of light … He said: When I struck the first blow, the cities of Kisra and what lies around them, and many cities, were raised up for me until I saw them with my own eyes … Then I struck the second blow, and the cities of Qaysar and what lies around them were raised up for me until I saw them with my own eyes … Then I struck the third, and the cities of Abyssinia and the villages around them were raised up for me until I saw them with my own eyes.\""
        },
        {
          "id": "rock-3",
          "type": "aside",
          "kind": "riwaya",
          "title": {
            "ar": "حديث الصخرة",
            "en": "The Report of the Rock"
          },
          "ar": "قال ابن حجر: «ووقع عند أحمد والنسائي في هذه القصة زيادةٌ بإسنادٍ حسن من حديث البراء بن عازب»، وفيها أنه ﷺ ضرب الصخرة ثلاثًا يقول: «الله أكبر، أُعطيتُ مفاتيح الشام…»[^fath:7/397]. وحسَّن الألباني رواية النسائي[^nasai:3176]، وضعَّف محققو المسند إسناد أحمد لضعف ميمون أبي عبد الله[^ahmad:18694].",
          "en": "Ibn Hajar said: \"Ahmad and al-Nasa'i have an addition to this story with a sound (hasan) chain, from the report of al-Bara' ibn 'Azib,\" in which he ﷺ struck the rock three times, saying: \"Allahu akbar, I have been given the keys of Syria…\"[^fath:7/397]. Al-Albani graded al-Nasa'i's report sound (hasan)[^nasai:3176], while the editors of the Musnad graded Ahmad's chain weak because Maymun Abu 'Abd Allah is weak[^ahmad:18694]."
        },
        {
          "id": "rock-4",
          "type": "prose",
          "ar": "ورأى [جابر](p:c_jabir) ما به ﷺ من الجوع، فصنع له طعامًا يسيرًا ودعاه ونفرًا معه، فدعا ﷺ أهل الخندق جميعًا[^bukhari:4102]:",
          "en": "[Jabir](p:c_jabir) saw his ﷺ hunger and prepared a little food, inviting him and a few others; and he ﷺ invited all the people of the trench[^bukhari:4102]:"
        },
        {
          "id": "rock-5",
          "type": "hadith",
          "ref": "bukhari:4102",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول جابر:",
            "en": "Jabir said:"
          },
          "ar": "«لمَّا حُفر الخندق رأيتُ بالنبي ﷺ [خَمَصًا](g:khamas) شديدًا، فانكفأتُ إلى امرأتي فقلت: هل عندك شيء؟… فأخرجت إليَّ جرابًا فيه صاعٌ من شعير، ولنا [بُهيمةٌ داجن](g:dajin) فذبحتُها… فجئتُه فساررتُه فقلت: يا رسول الله، ذبحنا بُهيمةً لنا، وطحنَّا صاعًا من شعير كان عندنا، فتعالَ أنت ونفرٌ معك، فصاح النبي ﷺ فقال: يا أهل الخندق، إنَّ جابرًا قد صنع [سُورًا](g:sur) فحيَّ هلًا بهلِّكم… وهم ألف، فأُقسم بالله لقد أكلوا حتى تركوه وانحرفوا، وإنَّ بُرمتنا [لتغِطُّ](g:taghitt) كما هي، وإنَّ عجيننا ليُخبز كما هو»",
          "en": "\"When the trench was being dug I saw that the Prophet ﷺ was [gaunt with hunger](g:khamas). I went back to my wife and said: Have you anything? … She brought out a bag with a sa' of barley, and we had a [small fattened goat kept at home](g:dajin), so I slaughtered it … Then I came to him and whispered: Messenger of Allah, we have slaughtered a little goat of ours and ground a sa' of barley we had; come, you and a few others. The Prophet ﷺ called out: People of the trench! Jabir has made [a meal](g:sur) — come, all of you! … They were a thousand, and I swear by Allah they ate until they left it and went away, while our pot was still [bubbling](g:taghitt) as full as it was, and our dough was still being baked as it was.\""
        },
        {
          "id": "rock-6",
          "type": "reflect",
          "ar": "القائد الذي يشدُّ الحجر على بطنه مع أصحابه[^bukhari:4101] لا يأكل وحده حين يُدعى إلى طعام؛ دعا ﷺ أهل الخندق جميعًا، فبارك الله في القليل حتى أشبع ألفًا[^bukhari:4102].",
          "en": "A leader who binds a stone on his belly alongside his Companions[^bukhari:4101] does not eat alone when he is invited to a meal: he ﷺ invited all the people of the trench, and Allah blessed the little until it filled a thousand[^bukhari:4102]."
        }
      ]
    },
    {
      "id": "siege",
      "title": {
        "ar": "الحصار",
        "en": "The Siege"
      },
      "sub": {
        "ar": "حول المدينة",
        "en": "Around Madinah"
      },
      "blocks": [
        {
          "id": "siege-1",
          "type": "prose",
          "ar": "وأحاط الأحزاب بالمدينة، وفي ذلك نزل قوله تعالى، قالت عائشة (رضي الله عنها): [«كان ذاك يوم الخندق»](h:bukhari:4103):",
          "en": "The Confederates surrounded Madinah, and of that Allah revealed — 'A'ishah (رضي الله عنها) said: [\"That was the day of the Trench\"](h:bukhari:4103):"
        },
        {
          "id": "siege-2",
          "type": "quran",
          "ref": "quran:33:10-11",
          "surah": {
            "ar": "الأحزاب",
            "en": "Al-Ahzab"
          },
          "ar": "﴿إِذْ جَاءُوكُمْ مِنْ فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنْكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا ۝ هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا﴾",
          "en": "﴿When they came at you from above you and from below you, when eyes grew wild and hearts reached the throats, and you were thinking all sorts of thoughts about Allah — there the believers were tested and shaken with a severe shaking.﴾"
        },
        {
          "id": "siege-3",
          "type": "prose",
          "ar": "«وقد أنزل الله تعالى في هذه القصة صدر سورة الأحزاب»[^fath:7/393]، وفيها وصف المؤمنين يومئذ:",
          "en": "\"Allah revealed the opening of Surat al-Ahzab about this event\"[^fath:7/393], and in it He describes the believers that day:"
        },
        {
          "id": "siege-4",
          "type": "quran",
          "ref": "quran:33:22",
          "surah": {
            "ar": "الأحزاب",
            "en": "Al-Ahzab"
          },
          "ar": "﴿وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ وَصَدَقَ اللَّهُ وَرَسُولُهُ ۚ وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا﴾",
          "en": "﴿And when the believers saw the Confederates, they said: This is what Allah and His Messenger promised us, and Allah and His Messenger spoke the truth. And it only increased them in faith and submission.﴾"
        },
        {
          "id": "siege-5",
          "type": "hadith",
          "ref": "bukhari:4115",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول عبد الله بن أبي أوفى (رضي الله عنهما): دعا رسول الله ﷺ على الأحزاب فقال:",
            "en": "'Abd Allah ibn Abi Awfa (رضي الله عنهما) said: The Messenger of Allah ﷺ supplicated against the Confederates, saying:"
          },
          "ar": "«اللهمَّ منزلَ الكتاب، سريعَ الحساب، اهزم الأحزاب، اللهمَّ اهزمهم وزلزلهم»",
          "en": "\"O Allah, Revealer of the Book, swift in reckoning, defeat the Confederates; O Allah, defeat them and shake them.\""
        },
        {
          "id": "siege-6",
          "type": "hadith",
          "ref": "bukhari:4122",
          "grade": "sahih",
          "narrator": {
            "ar": "وتقول عائشة (رضي الله عنها):",
            "en": "And 'A'ishah (رضي الله عنها) said:"
          },
          "ar": "«أُصيب سعدٌ يوم الخندق، رماه رجلٌ من قريش يقال له: حِبَّان بن العَرِقة… رماه في [الأكحل](g:akhal)، فضرب النبيُّ ﷺ خيمةً في المسجد ليعوده من قريب»",
          "en": "\"Sa'd was struck on the day of the Trench; a man of Quraysh called Hibban ibn al-'Ariqah shot him … in the [great vein of the arm](g:akhal). The Prophet ﷺ pitched a tent in the mosque so that he could visit him from close by.\""
        },
        {
          "id": "siege-7",
          "type": "reflect",
          "ar": "بلغت القلوب الحناجر، فقال المؤمنون: [﴿هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ﴾](q:33:22)، ودعا ﷺ على الأحزاب[^bukhari:4115]؛ فالشدَّة لا تزيد المؤمن إلا [﴿إِيمَانًا وَتَسْلِيمًا﴾](q:33:22).",
          "en": "Hearts reached the throats, yet the believers said: [﴿This is what Allah and His Messenger promised us﴾](q:33:22), and he ﷺ called on Allah against the Confederates[^bukhari:4115]. Hardship only adds to the believer [﴿faith and submission﴾](q:33:22)."
        }
      ]
    },
    {
      "id": "salah",
      "title": {
        "ar": "«شغلونا عن الصلاة الوسطى»",
        "en": "\"They kept us from the middle prayer\""
      },
      "sub": {
        "ar": "بُطحان",
        "en": "Buthan"
      },
      "blocks": [
        {
          "id": "salah-1",
          "type": "hadith",
          "ref": "bukhari:4112",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول جابر بن عبد الله (رضي الله عنهما):",
            "en": "Jabir ibn 'Abd Allah (رضي الله عنهما) said:"
          },
          "ar": "«أنَّ عمر بن الخطاب (رضي الله عنه) جاء يوم الخندق بعد ما غربت الشمس، جعل يسبُّ كفار قريش، وقال: يا رسول الله، ما كدتُ أن أصلي حتى كادت الشمس أن تغرب، قال النبي ﷺ: والله ما صلَّيتُها، فنزلنا مع النبي ﷺ بُطحان، فتوضأ للصلاة وتوضأنا لها، فصلَّى العصر بعد ما غربت الشمس، ثم صلَّى بعدها المغرب»",
          "en": "\"'Umar ibn al-Khattab (رضي الله عنه) came on the day of the Trench after the sun had set, cursing the unbelievers of Quraysh, and said: Messenger of Allah, I had hardly prayed before the sun was about to set. The Prophet ﷺ said: By Allah, I have not prayed it. So we went down with the Prophet ﷺ to Buthan; he made ablution for the prayer and so did we, and he prayed 'Asr after the sun had set, then prayed Maghrib after it.\""
        },
        {
          "id": "salah-2",
          "type": "prose",
          "ar": "وقال ﷺ يوم الخندق: [«ملأ الله عليهم بيوتهم وقبورهم نارًا، كما شغلونا عن صلاة الوسطى حتى غابت الشمس»](h:bukhari:4111).",
          "en": "And he ﷺ said on the day of the Trench: [\"May Allah fill their houses and graves with fire, as they kept us from the middle prayer until the sun set.\"](h:bukhari:4111)"
        },
        {
          "id": "salah-3",
          "type": "aside",
          "kind": "place",
          "title": {
            "ar": "بُطحان",
            "en": "Buthan"
          },
          "ar": "قال ياقوت: «بُطحان… وهو وادٍ بالمدينة، وهو أحد أوديتها الثلاثة، وهي العقيق وبطحان وقناة»[^yaqut:1/446].",
          "en": "Yaqut said: \"Buthan … is a valley in Madinah, one of its three valleys: al-'Aqiq, Buthan and Qanah.\"[^yaqut:1/446]"
        },
        {
          "id": "salah-4",
          "type": "reflect",
          "ar": "شُغلوا عن العصر حتى غربت الشمس، فتوضَّأ ﷺ وصلَّاها ثم صلَّى المغرب[^bukhari:4112]، ودعا على من شغلهم عنها[^bukhari:4111]؛ فمكانة الصلاة أعظم من أن تُنسى في أشدِّ الأحوال.",
          "en": "They were kept from 'Asr until the sun had set; he ﷺ made ablution, prayed it and then Maghrib[^bukhari:4112], and called on Allah against those who had kept them from it[^bukhari:4111]. Prayer is too great to be forgotten even in the hardest times."
        }
      ]
    },
    {
      "id": "hudhayfa",
      "title": {
        "ar": "ليلة الريح",
        "en": "The Night of the Wind"
      },
      "sub": {
        "ar": "ليلة الأحزاب",
        "en": "The night of the Confederates"
      },
      "blocks": [
        {
          "id": "hudhayfa-1",
          "type": "hadith",
          "ref": "muslim:1788",
          "grade": "sahih",
          "full": true,
          "narrator": {
            "ar": "يقول حذيفة بن اليمان (رضي الله عنهما):",
            "en": "Hudhayfah ibn al-Yaman (رضي الله عنهما) said:"
          },
          "ar": "«لقد رأيتُنا مع رسول الله ﷺ ليلة الأحزاب، وأخذتنا ريحٌ شديدة و[قُرٌّ](g:qurr)، فقال رسول الله ﷺ: ألا رجلٌ يأتيني بخبر القوم جعله الله معي يوم القيامة؟ فسكتنا فلم يُجبه منا أحد… فقال: قم يا حذيفة فأتنا بخبر القوم، فلم أجد بُدًّا إذ دعاني باسمي أن أقوم، قال: اذهب فأتني بخبر القوم، ولا [تذعرهم عليَّ](g:tadhar)، فلمَّا ولَّيتُ من عنده جعلتُ كأنما أمشي في حمَّام حتى أتيتهم، فرأيتُ أبا سفيان [يَصلي ظهره](g:yasli) بالنار، فوضعتُ سهمًا في [كبد القوس](g:kabid) فأردتُ أن أرميه، فذكرتُ قول رسول الله ﷺ: ولا تذعرهم عليَّ، ولو رميتُه لأصبتُه، فرجعتُ وأنا أمشي في مثل الحمَّام، فلمَّا أتيتُه فأخبرتُه بخبر القوم وفرغتُ قُرِرتُ، فألبسني رسول الله ﷺ من فضل عباءةٍ كانت عليه يصلِّي فيها، فلم أزل نائمًا حتى أصبحت، فلمَّا أصبحتُ قال: قم يا [نومان](g:nawman)»",
          "en": "\"I saw us with the Messenger of Allah ﷺ on the night of the Confederates, when a violent wind and [cold](g:qurr) seized us. The Messenger of Allah ﷺ said: Is there not a man who will bring me news of the enemy — Allah will place him with me on the Day of Resurrection? We kept silent, and none of us answered him … Then he said: Get up, Hudhayfah, and bring us news of the enemy. I had no choice but to get up, since he had called me by name. He said: Go and bring me news of the enemy, and [do not stir them up against me](g:tadhar). When I turned away from him, it was as if I were walking in a bath-house, until I reached them. I saw Abu Sufyan [warming his back](g:yasli) at the fire. I fitted an arrow to [the middle of my bow](g:kabid) and meant to shoot him, but I remembered the words of the Messenger of Allah ﷺ, \"do not stir them up against me\" — and had I shot him, I would have hit him. I went back, still walking as if in a bath-house. When I came to him, told him the news and had finished, I felt the cold. The Messenger of Allah ﷺ covered me with the spare part of a woollen cloak he had on, in which he prayed, and I slept on until morning. When morning came he said: Get up, [sleepyhead](g:nawman)!\""
        },
        {
          "id": "hudhayfa-2",
          "type": "aside",
          "kind": "riwaya",
          "title": {
            "ar": "لماذا حدَّث حذيفة بهذا؟",
            "en": "Why did Hudhayfah tell this?"
          },
          "ar": "بدأ الحديث برجلٍ قال لحذيفة: «لو أدركتُ رسول الله ﷺ قاتلتُ معه وأبليتُ»[^muslim:1788]؛ قال النووي: «معناه أنَّ حذيفة فهم منه أنه لو أدرك النبي ﷺ لبالغ في نصرته ولزاد على الصحابة… فأخبره بخبره في ليلة الأحزاب، وقصد زجره عن ظنِّه أنه يفعل أكثر من فعل الصحابة»[^nawawi:12/145].\nوقال في «كأنما أمشي في حمَّام»: «يعني أنه لم يجد البرد الذي يجده الناس… بل عافاه الله منه ببركة إجابته للنبي ﷺ… وهذه من معجزات رسول الله ﷺ»[^nawawi:12/146].",
          "en": "The hadith begins with a man who told Hudhayfah: \"Had I lived in the time of the Messenger of Allah ﷺ, I would have fought beside him and done my utmost.\"[^muslim:1788] Al-Nawawi said: \"Hudhayfah understood him to mean that had he lived then he would have gone to great lengths in supporting him and done more than the Companions … so he told him his own story on the night of the Confederates, to check his belief that he would have done more than the Companions did.\"[^nawawi:12/145]\nAnd of \"as if I were walking in a bath-house\": \"that is, he did not feel the cold that people felt … Allah spared him it by the blessing of his answering the Prophet ﷺ … and this is one of the miracles of the Messenger of Allah ﷺ.\"[^nawawi:12/146]"
        },
        {
          "id": "hudhayfa-3",
          "type": "reflect",
          "ar": "أطاع حذيفة الأمر وهو قادر: [«ولو رميتُه لأصبتُه»](h:muslim:1788)؛ قال النووي: «وفي هذا الحديث أنه ينبغي للإمام وأمير الجيش بعث الجواسيس والطلائع لكشف خبر العدو»[^nawawi:12/146].",
          "en": "Hudhayfah obeyed while he had the power: [\"and had I shot him, I would have hit him.\"](h:muslim:1788) Al-Nawawi said: \"This hadith shows that the leader and the commander of an army should send out scouts and advance parties to learn the enemy's situation.\"[^nawawi:12/146]"
        }
      ]
    },
    {
      "id": "faraj",
      "title": {
        "ar": "الريح والفرج",
        "en": "The Wind and the Relief"
      },
      "sub": {
        "ar": "بعد الحصار",
        "en": "After the siege"
      },
      "blocks": [
        {
          "id": "faraj-1",
          "type": "prose",
          "ar": "ثم نصر الله نبيَّه بالريح؛ قال ﷺ: [«نُصرتُ بالصَّبا، وأُهلكت عادٌ بالدَّبور»](h:bukhari:4105)، قال ابن حجر: «وعُرف بهذا وجه إيراد المصنف هذا الحديث هنا، وأنَّ الله نصر نبيه في غزوة الخندق بالريح»[^fath:7/402]، وقال تعالى:",
          "en": "Then Allah helped His Prophet with the wind. He ﷺ said: [\"I was helped by the east wind, and 'Ad were destroyed by the west wind.\"](h:bukhari:4105) Ibn Hajar said: \"This shows why the author placed this hadith here: Allah helped His Prophet in the campaign of the Trench with the wind\"[^fath:7/402]; and Allah said:"
        },
        {
          "id": "faraj-2",
          "type": "quran",
          "ref": "quran:33:9",
          "surah": {
            "ar": "الأحزاب",
            "en": "Al-Ahzab"
          },
          "ar": "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَمْ تَرَوْهَا ۚ وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا﴾",
          "en": "﴿O you who believe, remember Allah's favour to you when armies came at you and We sent upon them a wind and hosts you did not see; and Allah sees what you do.﴾"
        },
        {
          "id": "faraj-3",
          "type": "hadith",
          "ref": "bukhari:4114",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول أبو هريرة (رضي الله عنه): كان رسول الله ﷺ يقول:",
            "en": "Abu Hurayrah (رضي الله عنه) said: The Messenger of Allah ﷺ used to say:"
          },
          "ar": "«لا إله إلا الله وحده، أعزَّ جنده، ونصر عبده، وغلب الأحزاب وحده، فلا شيء بعده»",
          "en": "\"There is no god but Allah alone; He gave might to His army, helped His servant and overcame the Confederates alone; there is nothing after Him.\""
        },
        {
          "id": "faraj-4",
          "type": "quran",
          "ref": "quran:33:25",
          "surah": {
            "ar": "الأحزاب",
            "en": "Al-Ahzab"
          },
          "ar": "﴿وَرَدَّ اللَّهُ الَّذِينَ كَفَرُوا بِغَيْظِهِمْ لَمْ يَنَالُوا خَيْرًا ۚ وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ ۚ وَكَانَ اللَّهُ قَوِيًّا عَزِيزًا﴾",
          "en": "﴿And Allah turned back the disbelievers in their rage, having gained no good; Allah spared the believers the fighting, and Allah is Strong, Mighty.﴾"
        },
        {
          "id": "faraj-5",
          "type": "prose",
          "ar": "وقال ﷺ حين أجلى الله الأحزاب عنه: [«الآنَ نغزوهم ولا يغزوننا، نحن نسيرُ إليهم»](h:bukhari:4110)، وكذلك كان: لم تغزُ قريشٌ المدينةَ بعدها[^umari].",
          "en": "When the Confederates had been driven away from him he ﷺ said: [\"Now we will march on them and they will not march on us; we will go to them,\"](h:bukhari:4110) and so it was: Quraysh never attacked Madinah again[^umari]."
        },
        {
          "id": "faraj-6",
          "type": "reflect",
          "ar": "حفروا وصبروا ودعوا، ثم [﴿كَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ﴾](q:33:25)؛ فكان ذكره ﷺ بعدها: [«وغلب الأحزاب وحده»](h:bukhari:4114).",
          "en": "They dug, endured and prayed, and then [﴿Allah spared the believers the fighting﴾](q:33:25); and afterwards his ﷺ remembrance was: [\"and He overcame the Confederates alone.\"](h:bukhari:4114)"
        }
      ]
    }
  ],
  "lessons": [
    {
      "kind": "aqidah",
      "ar": "النصر من عند الله وحده: [«وغلب الأحزاب وحده، فلا شيء بعده»](h:bukhari:4114).",
      "en": "Victory is from Allah alone: [\"He overcame the Confederates alone; there is nothing after Him.\"](h:bukhari:4114)"
    },
    {
      "kind": "aqidah",
      "ar": "الشدائد تزيد المؤمن يقينًا: [﴿وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا﴾](q:33:22).",
      "en": "Hardship increases the believer in certainty: [﴿it only increased them in faith and submission﴾](q:33:22)."
    },
    {
      "kind": "tarbiyah",
      "ar": "القدوة بالعمل: [«رأيتُ رسولَ الله ﷺ يومَ الأحزاب ينقلُ الترابَ»](h:bukhari:2837).",
      "en": "Leading by doing: [\"I saw the Messenger of Allah ﷺ on the day of the Confederates carrying earth.\"](h:bukhari:2837)"
    },
    {
      "kind": "tarbiyah",
      "ar": "الإيثار في المجاعة: دعا ﷺ أهل الخندق جميعًا إلى طعام جابر، فبارك الله فيه حتى أشبع ألفًا[^bukhari:4102].",
      "en": "Sharing in times of hunger: he ﷺ invited all the people of the trench to Jabir's food, and Allah blessed it until it filled a thousand[^bukhari:4102]."
    },
    {
      "kind": "qiyadah",
      "ar": "معرفة أخبار العدو: «ينبغي للإمام وأمير الجيش بعث الجواسيس والطلائع لكشف خبر العدو»[^nawawi:12/146].",
      "en": "Knowing the enemy's situation: \"the leader and the commander of an army should send out scouts and advance parties to learn the enemy's situation.\"[^nawawi:12/146]"
    },
    {
      "kind": "qiyadah",
      "ar": "الطاعة ولو لاحت الفرصة: [«ولا تذعرهم عليَّ»](h:muslim:1788)، فردَّ حذيفة سهمه وهو قادر.",
      "en": "Obedience even when a chance appears: [\"do not stir them up against me\"](h:muslim:1788) — and Hudhayfah held back his arrow though he could have shot."
    }
  ],
  "glossary": {
    "ihalah": {
      "ar": "الإهالة: الدهن الذي يؤتدم به، زيتًا كان أو سمنًا أو شحمًا، والسَّنِخة: التي تغيَّر طعمها ولونها من قِدَمها",
      "en": "ihalah: fat eaten with food — oil, ghee or suet; sanikhah: changed in taste and colour from age",
      "ref": "fath:7/395"
    },
    "kudyah": {
      "ar": "الكُدية: قيل هي القطعة الشديدة الصُّلبة من الأرض",
      "en": "kudyah: said to be a hard, solid piece of ground",
      "ref": "fath:7/396"
    },
    "ahyal": {
      "ar": "كثيبًا أهيل: أي صار رملًا يسيل ولا يتماسك",
      "en": "kathiban ahyal: it became sand that runs and does not hold together",
      "ref": "fath:7/397"
    },
    "dajin": {
      "ar": "بُهيمةٌ داجن: أي سمينة، والداجن التي تُترك في البيت ولا تُفلَت للمرعى",
      "en": "buhaymah dajin: fattened — a dajin is kept at home and not let out to graze",
      "ref": "fath:7/397"
    },
    "khamas": {
      "ar": "الخَمَص: خُموص البطن",
      "en": "khamas: a belly sunken with hunger",
      "ref": "fath:7/399"
    },
    "sur": {
      "ar": "السُّور: هو هنا الصنيع بالحبشية، وقيل: العُرس بالفارسية",
      "en": "sur: here a prepared meal, in Ethiopic — or, it is said, a wedding feast, in Persian",
      "ref": "fath:7/399"
    },
    "taghitt": {
      "ar": "لتغِطُّ: أي تغلي وتفور",
      "en": "la-taghittu: boiling and bubbling",
      "ref": "fath:7/399"
    },
    "qurr": {
      "ar": "القُرّ: البرد",
      "en": "qurr: cold",
      "ref": "nawawi:12/145"
    },
    "tadhar": {
      "ar": "لا تذعرهم عليَّ: معناه لا تفزعهم عليَّ ولا تحرِّكهم عليَّ",
      "en": "la tadh'arhum 'alayya: do not alarm them or stir them up against me",
      "ref": "nawawi:12/145"
    },
    "yasli": {
      "ar": "يَصلي ظهره: أي يدفئه ويدنيه منها",
      "en": "yasli zahrahu: warming his back, bringing it close to the fire",
      "ref": "nawawi:12/146"
    },
    "kabid": {
      "ar": "كبد القوس: هو مقبضها، وكبد كل شيء وسطه",
      "en": "kabid al-qaws: the grip of the bow; the kabid of anything is its middle",
      "ref": "nawawi:12/146"
    },
    "nawman": {
      "ar": "نومان: كثير النوم",
      "en": "nawman: one who sleeps a great deal",
      "ref": "nawawi:12/146"
    },
    "akhal": {
      "ar": "الأكحل: عِرقٌ في وسط الذراع، قال الخليل: هو عِرق الحياة",
      "en": "al-akhal: a vein in the middle of the forearm; al-Khalil said: the vein of life",
      "ref": "fath:7/413"
    }
  },
  "fulltext": {
    "muslim:1788": {
      "narrator": {
        "ar": "عن حذيفة بن اليمان (رضي الله عنهما)",
        "en": "From Hudhayfah ibn al-Yaman (رضي الله عنهما)"
      },
      "ar": "كُنَّا عِنْدَ حُذَيْفَةَ، فَقَالَ رَجُلٌ: لَوْ أَدْرَكْتُ رَسُولَ اللَّهِ ﷺ قَاتَلْتُ مَعَهُ وَأَبْلَيْتُ، فَقَالَ حُذَيْفَةُ: أَنْتَ كُنْتَ تَفْعَلُ ذَلِكَ؟ لَقَدْ رَأَيْتُنَا مَعَ رَسُولِ اللَّهِ ﷺ لَيْلَةَ الْأَحْزَابِ، وَأَخَذَتْنَا رِيحٌ شَدِيدَةٌ وَقُرٌّ، فَقَالَ رَسُولُ اللَّهِ ﷺ: أَلَا رَجُلٌ يَأْتِينِي بِخَبَرِ الْقَوْمِ جَعَلَهُ اللَّهُ مَعِي يَوْمَ الْقِيَامَةِ؟ فَسَكَتْنَا فَلَمْ يُجِبْهُ مِنَّا أَحَدٌ، ثُمَّ قَالَ: أَلَا رَجُلٌ يَأْتِينَا بِخَبَرِ الْقَوْمِ جَعَلَهُ اللَّهُ مَعِي يَوْمَ الْقِيَامَةِ؟ فَسَكَتْنَا فَلَمْ يُجِبْهُ مِنَّا أَحَدٌ، ثُمَّ قَالَ: أَلَا رَجُلٌ يَأْتِينَا بِخَبَرِ الْقَوْمِ جَعَلَهُ اللَّهُ مَعِي يَوْمَ الْقِيَامَةِ؟ فَسَكَتْنَا فَلَمْ يُجِبْهُ مِنَّا أَحَدٌ، فَقَالَ: قُمْ يَا حُذَيْفَةُ فَأْتِنَا بِخَبَرِ الْقَوْمِ، فَلَمْ أَجِدْ بُدًّا إِذْ دَعَانِي بِاسْمِي أَنْ أَقُومَ، قَالَ: اذْهَبْ فَأْتِنِي بِخَبَرِ الْقَوْمِ، وَلَا تَذْعَرْهُمْ عَلَيَّ.\nفَلَمَّا وَلَّيْتُ مِنْ عِنْدِهِ جَعَلْتُ كَأَنَّمَا أَمْشِي فِي حَمَّامٍ حَتَّى أَتَيْتُهُمْ، فَرَأَيْتُ أَبَا سُفْيَانَ يَصْلِي ظَهْرَهُ بِالنَّارِ، فَوَضَعْتُ سَهْمًا فِي كَبِدِ الْقَوْسِ، فَأَرَدْتُ أَنْ أَرْمِيَهُ، فَذَكَرْتُ قَوْلَ رَسُولِ اللَّهِ ﷺ: وَلَا تَذْعَرْهُمْ عَلَيَّ، وَلَوْ رَمَيْتُهُ لَأَصَبْتُهُ، فَرَجَعْتُ وَأَنَا أَمْشِي فِي مِثْلِ الْحَمَّامِ، فَلَمَّا أَتَيْتُهُ فَأَخْبَرْتُهُ بِخَبَرِ الْقَوْمِ وَفَرَغْتُ قُرِرْتُ، فَأَلْبَسَنِي رَسُولُ اللَّهِ ﷺ مِنْ فَضْلِ عَبَاءَةٍ كَانَتْ عَلَيْهِ يُصَلِّي فِيهَا، فَلَمْ أَزَلْ نَائِمًا حَتَّى أَصْبَحْتُ، فَلَمَّا أَصْبَحْتُ قَالَ: قُمْ يَا نَوْمَانُ.",
      "en": "We were with Hudhayfah when a man said: Had I lived in the time of the Messenger of Allah ﷺ, I would have fought beside him and done my utmost. Hudhayfah said: You would have done that? I saw us with the Messenger of Allah ﷺ on the night of the Confederates, when a violent wind and cold seized us. The Messenger of Allah ﷺ said: Is there not a man who will bring me news of the enemy — Allah will place him with me on the Day of Resurrection? We kept silent, and none of us answered him. Then he said: Is there not a man who will bring us news of the enemy — Allah will place him with me on the Day of Resurrection? We kept silent, and none of us answered him. Then he said it a third time, and we kept silent, and none of us answered him. Then he said: Get up, Hudhayfah, and bring us news of the enemy. I had no choice but to get up, since he had called me by name. He said: Go and bring me news of the enemy, and do not stir them up against me.\nWhen I turned away from him, it was as if I were walking in a bath-house, until I reached them. I saw Abu Sufyan warming his back at the fire. I fitted an arrow to the middle of my bow and meant to shoot him, but I remembered the words of the Messenger of Allah ﷺ, \"do not stir them up against me\" — and had I shot him, I would have hit him. I went back, still walking as if in a bath-house. When I came to him, told him the news of the enemy and had finished, I felt the cold. The Messenger of Allah ﷺ covered me with the spare part of a woollen cloak he had on, in which he prayed, and I slept on until morning. When morning came he said: Get up, sleepyhead!"
    }
  }
});
