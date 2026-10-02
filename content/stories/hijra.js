Enc.register('stories/hijra', {
  "id": "hijra",
  "format": "narrative",
  "wordlists": true,
  "modal": "s_cave",
  "title": {
    "ar": "الهجرة: ثلاث ليالٍ في غار ثور",
    "en": "The Hijra: Three Nights in the Cave of Thawr"
  },
  "dek": {
    "ar": "أُذن له في الخروج بعد ثلاث عشرة سنة من الدعوة في مكة، فخرج مع صاحبه أبي بكر، فاختبآ في غار ثور ثلاث ليال، ثم سلكا طريق الساحل وقريشٌ تجعل فيهما الدية، حتى استقبلته المدينة يوم الاثنين من ربيع الأول.",
    "en": "After thirteen years of calling in Makkah he was given leave to go. He left with his companion Abu Bakr; they hid three nights in the cave of Thawr, then took the coastal road with a bounty on their heads, until Madinah welcomed him on a Monday in Rabi' al-Awwal."
  },
  "tone": "amber-deep",
  "icon": "mountain",
  "when": {
    "ar": "السنة الأولى للهجرة (٦٢٢م)",
    "en": "1 AH (622 CE)",
    "ref": "umari"
  },
  "place": {
    "map": "madinah",
    "ar": "من مكة إلى المدينة",
    "en": "From Makkah to Madinah"
  },
  "places": [
    "mecca",
    "madinah"
  ],
  "people": [
    "c_abubakr",
    "c_zubayr"
  ],
  "topics": [
    "dawah"
  ],
  "review": {
    "status": "approved",
    "reviewer": "صاحب الموقع",
    "date": "2026-09-30"
  },
  "grades": {
    "tirmidhi:3618": {
      "grade": "sahih",
      "grader": "albani"
    }
  },
  "scenes": [
    {
      "id": "idhn",
      "title": {
        "ar": "«إني أرجو أن يُؤذن لي»",
        "en": "\"I hope to be given leave\""
      },
      "sub": {
        "ar": "مكة، السنة الثالثة عشرة من البعثة",
        "en": "Makkah, the thirteenth year of the mission"
      },
      "blocks": [
        {
          "id": "idhn-1",
          "type": "prose",
          "lead": true,
          "ar": "مكث ﷺ في مكة ثلاث عشرة سنة يُوحى إليه، ثم أُمر بالهجرة[^bukhari:3902]، وقريشٌ تتشاور في أمره، وفي ذلك نزل قوله تعالى:",
          "en": "He ﷺ stayed in Makkah for thirteen years receiving revelation, then he was commanded to emigrate[^bukhari:3902], while Quraysh plotted over what to do with him. About this Allah revealed:"
        },
        {
          "id": "idhn-2",
          "type": "quran",
          "ref": "quran:8:30",
          "surah": {
            "ar": "الأنفال",
            "en": "Al-Anfal"
          },
          "ar": "﴿وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ﴾",
          "en": "﴿And when those who disbelieved plotted against you to restrain you, or kill you, or drive you out: they plot, and Allah plots, and Allah is the best of planners.﴾"
        },
        {
          "id": "idhn-3",
          "type": "prose",
          "ar": "وكان قد أُري دار الهجرة، فقال للمسلمين: [«إني أُريتُ دار هجرتكم، ذاتَ نخلٍ بين لابتين»](h:bukhari:3905)، فهاجر من هاجر قِبَل المدينة، وتجهَّز [أبو بكر](p:c_abubakr) للخروج، فقال له ﷺ: [«على رِسْلك؛ فإني أرجو أن يُؤذن لي»](h:bukhari:3905)، فحبس أبو بكر نفسه عليه ليصحبه، [«وعلف راحلتين كانتا عنده ورق السَّمُر — وهو الخَبَط — أربعة أشهر»](h:bukhari:3905).",
          "en": "He had been shown the land of the emigration, and told the Muslims: [\"I have been shown the land of your emigration, a land of palm trees between two lava fields\"](h:bukhari:3905). So those who emigrated went towards Madinah, and [Abu Bakr](p:c_abubakr) got ready to leave, but he ﷺ told him: [\"Wait a while, for I hope to be given leave.\"](h:bukhari:3905) Abu Bakr held himself back to accompany him, [\"and fed two riding camels he had on the leaves of the samur tree — that is, khabat — for four months.\"](h:bukhari:3905)"
        }
      ]
    },
    {
      "id": "ready",
      "title": {
        "ar": "في نحر الظهيرة",
        "en": "In the full heat of noon"
      },
      "sub": {
        "ar": "بيت أبي بكر بمكة",
        "en": "Abu Bakr's house in Makkah"
      },
      "blocks": [
        {
          "id": "ready-1",
          "type": "prose",
          "ar": "ثم جاء اليوم الموعود في ساعةٍ لم يكن يأتيهم فيها؛ تحكي عائشة (رضي الله عنها) ما رأته في بيت أبيها[^bukhari:3905]:",
          "en": "Then the promised day came, at an hour when he never used to visit them. 'A'ishah (رضي الله عنها) tells what she saw in her father's house[^bukhari:3905]:"
        },
        {
          "id": "ready-2",
          "type": "hadith",
          "ref": "bukhari:3905",
          "grade": "sahih",
          "full": true,
          "narrator": {
            "ar": "تقول عائشة (رضي الله عنها):",
            "en": "'A'ishah (رضي الله عنها) said:"
          },
          "ar": "«فبينما نحن يومًا جلوسٌ في بيت أبي بكر في [نحر الظهيرة](g:nahr)، قال قائلٌ لأبي بكر: هذا رسول الله ﷺ [متقنِّعًا](g:taqannu) في ساعةٍ لم يكن يأتينا فيها، فقال أبو بكر: فداءٌ له أبي وأمي، والله ما جاء به في هذه الساعة إلا أمر… فقال النبي ﷺ لأبي بكر: أخرِجْ من عندك، فقال أبو بكر: إنما هم أهلك بأبي أنت يا رسول الله، قال: فإني قد أُذن لي في الخروج، فقال أبو بكر: الصحابةَ بأبي أنت يا رسول الله؟ قال رسول الله ﷺ: نعم، قال أبو بكر: فخذ بأبي أنت يا رسول الله إحدى راحلتيَّ هاتين، قال رسول الله ﷺ: بالثمن»",
          "en": "\"One day, as we were sitting in Abu Bakr's house in [the full heat of noon](g:nahr), someone said to Abu Bakr: Here is the Messenger of Allah ﷺ, [his head covered](g:taqannu), at an hour he never used to come to us. Abu Bakr said: May my father and mother be his ransom! By Allah, nothing but a grave matter brings him at this hour … The Prophet ﷺ said to Abu Bakr: Send out whoever is with you. Abu Bakr said: They are only your family, may my father be your ransom, Messenger of Allah. He said: I have been given leave to go out. Abu Bakr said: Your companion, may my father be your ransom, Messenger of Allah? The Messenger of Allah ﷺ said: Yes. Abu Bakr said: Then take, may my father be your ransom, Messenger of Allah, one of these two riding camels of mine. The Messenger of Allah ﷺ said: For its price.\""
        },
        {
          "id": "ready-3",
          "type": "aside",
          "kind": "riwaya",
          "title": {
            "ar": "لماذا قال: «بالثمن»؟",
            "en": "Why \"for its price\"?"
          },
          "ar": "قال ابن حجر: «ونقل السهيلي في الروض عن بعض شيوخ المغرب أنه سُئل عن امتناعه من أخذ الراحلة مع أنَّ أبا بكر أنفق عليه ماله، فقال: أحبَّ أن لا تكون هجرته إلا من مال نفسه»[^fath:7/235].",
          "en": "Ibn Hajar said: \"Al-Suhayli, in al-Rawd, reports from one of the scholars of the Maghrib that he was asked why he declined to take the camel, when Abu Bakr had spent his wealth on him; he answered: He wanted his emigration to be made from nothing but his own wealth.\"[^fath:7/235]"
        },
        {
          "id": "ready-4",
          "type": "hadith",
          "ref": "bukhari:3905",
          "grade": "sahih",
          "narrator": {
            "ar": "وتقول عائشة:",
            "en": "And 'A'ishah said:"
          },
          "ar": "«فجهَّزناهما أحثَّ الجَهاز، وصنعنا لهما سُفرةً في جِراب، فقطعت أسماءُ بنتُ أبي بكر قطعةً من [نِطاقها](g:nitaq) فربطت به على فم الجِراب، فبذلك سُمِّيت ذاتَ النطاقين»",
          "en": "\"We made them ready as quickly as we could and prepared them provisions in a leather bag. Asma' bint Abi Bakr cut a piece from her [waistband](g:nitaq) and tied the mouth of the bag with it, and for that she was named Dhat al-Nitaqayn, the woman of the two waistbands.\""
        },
        {
          "id": "ready-5",
          "type": "aside",
          "kind": "people",
          "title": {
            "ar": "أهل بيت الهجرة",
            "en": "The household of the emigration"
          },
          "ar": "أسماء بنت أبي بكر: جهَّزت الزاد وربطته بقطعةٍ من نطاقها[^bukhari:3905].\nعبد الله بن أبي بكر: «غلامٌ شابٌّ ثَقِفٌ لَقِن»، كان يأتيهما بأخبار قريش[^bukhari:3905].\nعامر بن فُهيرة: مولى أبي بكر، يرعى عليهما الغنم ويسقيهما لبنها[^bukhari:3905].\nالدليل: رجلٌ من بني الدِّيل «هاديًا خِرِّيتًا… وهو على دين كفار قريش»، فأمِناه ودفعا إليه راحلتيهما[^bukhari:3905].",
          "en": "Asma' bint Abi Bakr: prepared the provisions and tied them with a piece of her waistband[^bukhari:3905].\n'Abd Allah ibn Abi Bakr: \"a sharp and quick-witted young man\", who brought them the news of Quraysh[^bukhari:3905].\n'Amir ibn Fuhayrah: Abu Bakr's freedman, who grazed the sheep near them and brought them their milk[^bukhari:3905].\nThe guide: a man of Banu al-Dil, \"an expert guide … following the religion of the unbelievers of Quraysh\"; they trusted him and handed him their two camels[^bukhari:3905]."
        }
      ]
    },
    {
      "id": "cave",
      "title": {
        "ar": "في الغار",
        "en": "In the cave"
      },
      "sub": {
        "ar": "غار ثور",
        "en": "The cave of Thawr"
      },
      "blocks": [
        {
          "id": "cave-1",
          "type": "aside",
          "kind": "place",
          "title": {
            "ar": "جبل ثور",
            "en": "Mount Thawr"
          },
          "ar": "قال ياقوت: «ثور… اسم جبلٍ بمكة فيه الغار الذي اختفى فيه النبيُّ ﷺ»، ونقل عن الزمخشري أنه «من جبال مكة بالمفجر من خلف مكة على طريق اليمن»[^yaqut:2/86]؛ أي في جهة اليمن، لا في جهة المدينة.",
          "en": "Yaqut said: \"Thawr … is the name of a mountain at Makkah in which is the cave where the Prophet ﷺ hid\", and he quotes al-Zamakhshari that it is \"one of the mountains of Makkah, at al-Mafjar behind Makkah on the road to Yemen\"[^yaqut:2/86] — that is, towards Yemen, not towards Madinah."
        },
        {
          "id": "cave-2",
          "type": "hadith",
          "ref": "bukhari:3905",
          "grade": "sahih",
          "narrator": {
            "ar": "تقول عائشة (رضي الله عنها):",
            "en": "'A'ishah (رضي الله عنها) said:"
          },
          "ar": "«ثم لحق رسول الله ﷺ وأبو بكر بغارٍ في جبل ثور، فكمنا فيه ثلاث ليال، يبيت عندهما عبد الله بن أبي بكر، وهو غلامٌ شابٌّ [ثَقِفٌ](g:thaqif) لَقِن، فيُدلج من عندهما بسحر، فيصبح مع قريش بمكة كبائت، فلا يسمع أمرًا [يُكتادان](g:yuktadan) به إلا وعاه، حتى يأتيهما بخبر ذلك حين يختلط الظلام، ويرعى عليهما عامر بن فهيرة مولى أبي بكر مِنحةً من غنم، فيُريحها عليهما حين تذهب ساعةٌ من العشاء، فيبيتان في [رِسْلٍ](g:risl) — وهو لبن منحتهما و[رضيفهما](g:radif) — حتى ينعق بها عامر بن فهيرة بغلس، يفعل ذلك في كل ليلةٍ من تلك الليالي الثلاث»",
          "en": "\"Then the Messenger of Allah ﷺ and Abu Bakr reached a cave in Mount Thawr and stayed hidden in it for three nights. 'Abd Allah ibn Abi Bakr, a [sharp](g:thaqif) and quick-witted young man, spent the nights with them; he would leave them before dawn and be among Quraysh in Makkah in the morning as if he had spent the night there. He heard of no [plot against them](g:yuktadan) without taking it in, and brought them the news when darkness fell. 'Amir ibn Fuhayrah, Abu Bakr's freedman, grazed a milch flock of sheep near them and brought it to them when an hour of the night had passed, so they spent the night on [fresh milk](g:risl) — the milk of their sheep, [warmed with heated stones](g:radif) — until 'Amir ibn Fuhayrah called the flock away in the last darkness before dawn. He did this on every one of those three nights.\""
        },
        {
          "id": "cave-3",
          "type": "prose",
          "ar": "واشتدَّ الطلب حتى رأى أبو بكر أقدام المشركين على رؤوسهما وهما في الغار[^muslim:2381]:",
          "en": "The search grew so close that Abu Bakr saw the feet of the idolaters above their heads while they were in the cave[^muslim:2381]:"
        },
        {
          "id": "cave-4",
          "type": "hadith",
          "ref": "bukhari:3653",
          "grade": "sahih",
          "also": [
            "muslim:2381"
          ],
          "narrator": {
            "ar": "يقول أبو بكر (رضي الله عنه):",
            "en": "Abu Bakr (رضي الله عنه) said:"
          },
          "ar": "«قلتُ للنبيِّ ﷺ وأنا في الغار: لو أنَّ أحدهم نظر تحت قدميه لأبصرنا، فقال: ما ظنُّك يا أبا بكر باثنين الله ثالثهما»",
          "en": "\"I said to the Prophet ﷺ while I was in the cave: If one of them looked down at his feet, he would see us. He said: What do you think, Abu Bakr, of two whose third is Allah?\""
        },
        {
          "id": "cave-5",
          "type": "quran",
          "ref": "quran:9:40",
          "surah": {
            "ar": "التوبة",
            "en": "At-Tawbah"
          },
          "ar": "﴿إِلَّا تَنْصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا﴾",
          "en": "﴿If you do not help him — Allah has already helped him when those who disbelieved drove him out as the second of two, when they were both in the cave and he said to his companion: Do not grieve; indeed Allah is with us.﴾"
        },
        {
          "id": "cave-6",
          "type": "reflect",
          "ar": "أعدَّا الراحلتين والدليل والزاد، ورتَّبا من يأتيهما بالأخبار ومن يسقيهما اللبن[^bukhari:3905]، ثم لمَّا ضاق الأمر قال ﷺ: [«ما ظنُّك يا أبا بكر باثنين الله ثالثهما»](h:bukhari:3653)؛ فالأخذ بالأسباب كاملةً لا ينافي التوكُّل الكامل.",
          "en": "They prepared the camels, the guide and the provisions, and arranged who would bring them news and who would bring them milk[^bukhari:3905]; then, when things grew tight, he ﷺ said: [\"What do you think, Abu Bakr, of two whose third is Allah?\"](h:bukhari:3653) Taking every means does not contradict complete trust in Allah."
        }
      ]
    },
    {
      "id": "sahil",
      "title": {
        "ar": "على طريق الساحل",
        "en": "On the coastal road"
      },
      "sub": {
        "ar": "بين مكة والمدينة",
        "en": "Between Makkah and Madinah"
      },
      "blocks": [
        {
          "id": "sahil-1",
          "type": "prose",
          "ar": "وبعد ثلاث ليالٍ جاءهما الدليل بالراحلتين، [«وانطلق معهما عامر بن فهيرة والدليل، فأخذ بهم طريق السواحل»](h:bukhari:3905). وسأل عازبٌ أبا بكر بعد ذلك: كيف صنعتما حين سريتَ مع رسول الله ﷺ؟ فحدَّثه[^bukhari:3615]:",
          "en": "After three nights the guide brought them the two camels, [\"and 'Amir ibn Fuhayrah and the guide set out with them, and he took them along the coastal road.\"](h:bukhari:3905) Later 'Azib asked Abu Bakr: How did you manage when you travelled by night with the Messenger of Allah ﷺ? And he told him[^bukhari:3615]:"
        },
        {
          "id": "sahil-2",
          "type": "hadith",
          "ref": "bukhari:3615",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول أبو بكر (رضي الله عنه):",
            "en": "Abu Bakr (رضي الله عنه) said:"
          },
          "ar": "«أسرينا ليلتنا ومن الغد حتى قام قائم الظهيرة، وخلا الطريق لا يمرُّ فيه أحد، فرُفعت لنا صخرةٌ طويلة لها ظلٌّ لم تأتِ عليه الشمس، فنزلنا عنده، وسوَّيتُ للنبيِّ ﷺ مكانًا بيدي ينام عليه، وبسطتُ فيه فروة، وقلتُ: نَمْ يا رسول الله وأنا أنفض لك ما حولك، فنام، وخرجتُ أنفض ما حوله… فحلب في قَعْبٍ كُثبةً من لبن، ومعي إداوةٌ حملتُها للنبيِّ ﷺ يرتوي منها يشرب ويتوضأ، فأتيتُ النبيَّ ﷺ فكرهتُ أن أوقظه، فوافقته حين استيقظ، فصببتُ من الماء على اللبن حتى برد أسفله، فقلتُ: اشرب يا رسول الله، قال: فشرب حتى رضيتُ»",
          "en": "\"We travelled all that night and the next day until the sun stood at noon and the road was empty, with no one passing. A long rock rose up before us with shade the sun had not reached, and we stopped by it. I smoothed a place for the Prophet ﷺ with my hands to sleep on, spread a fur over it, and said: Sleep, Messenger of Allah, and I will keep watch around you. He slept, and I went out to keep watch around him … The shepherd milked a little milk into a wooden bowl. I had a leather water-skin I carried for the Prophet ﷺ to drink from and make wudu'. I came to the Prophet ﷺ and did not want to wake him, and it happened that he woke; I poured water over the milk until the bottom of it cooled, and said: Drink, Messenger of Allah. He drank — until I was content.\""
        },
        {
          "id": "sahil-3",
          "type": "prose",
          "ar": "وكان أبو بكر معروفًا على الطريق والناس لا يعرفون صاحبه، يقول أنس: [«فيلقى الرجلُ أبا بكر فيقول: يا أبا بكر، من هذا الرجل الذي بين يديك؟ فيقول: هذا الرجل يهديني السبيل»](h:bukhari:3911)، قال أنس: [«فيحسب الحاسب أنه إنما يعني الطريق، وإنما يعني سبيل الخير»](h:bukhari:3911).",
          "en": "Abu Bakr was known along the road while people did not know his companion. Anas said: [\"A man would meet Abu Bakr and say: Abu Bakr, who is this man in front of you? And he would say: This man guides me on the way.\"](h:bukhari:3911) Anas said: [\"The one who heard it thought he meant the road, but he meant the way of good.\"](h:bukhari:3911)"
        }
      ]
    },
    {
      "id": "suraqa",
      "title": {
        "ar": "سُراقة",
        "en": "Suraqah"
      },
      "sub": {
        "ar": "ديار بني مدلج على الطريق",
        "en": "The lands of Banu Mudlij on the road"
      },
      "blocks": [
        {
          "id": "suraqa-1",
          "type": "prose",
          "ar": "وجعلت قريشٌ لمن قتلهما أو أسرهما الدية، فيروي سُراقة بن مالك نفسه ما جرى له[^bukhari:3906]:",
          "en": "Quraysh set a blood-price as the reward for whoever killed or captured them, and Suraqah ibn Malik himself tells what happened to him[^bukhari:3906]:"
        },
        {
          "id": "suraqa-2",
          "type": "hadith",
          "ref": "bukhari:3906",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول سراقة بن مالك (رضي الله عنه):",
            "en": "Suraqah ibn Malik (رضي الله عنه) said:"
          },
          "ar": "«جاءنا رسل كفار قريش يجعلون في رسول الله ﷺ وأبي بكر ديةَ كلِّ واحدٍ منهما من قتله أو أسره، فبينما أنا جالسٌ في مجلسٍ من مجالس قومي بني مدلج أقبل رجلٌ منهم حتى قام علينا ونحن جلوس، فقال: يا سراقة، إني قد رأيتُ آنفًا [أسوِدةً](g:aswida) بالساحل أُراها محمدًا وأصحابه، قال سراقة: فعرفتُ أنهم هم… حتى إذا سمعتُ قراءة رسول الله ﷺ وهو لا يلتفت، وأبو بكر يُكثر الالتفات، ساخت يدا فرسي في الأرض حتى بلغتا الركبتين، فخررتُ عنها، ثم زجرتُها فنهضت فلم تكد تُخرج يديها، فلمَّا استوت قائمةً إذا لأثر يديها [عُثانٌ](g:uthan) ساطعٌ في السماء مثل الدخان… فناديتهم بالأمان، فوقفوا، فركبتُ فرسي حتى جئتهم، ووقع في نفسي حين لقيتُ ما لقيتُ من الحبس عنهم أن سيظهر أمر رسول الله ﷺ… وعرضتُ عليهم الزاد والمتاع فلم [يرزآني](g:yarza) ولم يسألاني إلا أن قال: أخفِ عنَّا، فسألته أن يكتب لي كتاب أمن، فأمر عامر بن فهيرة فكتب في رقعةٍ من أديم»",
          "en": "\"Messengers of the unbelievers of Quraysh came to us offering the blood-price of each of them — the Messenger of Allah ﷺ and Abu Bakr — to whoever killed or captured him. While I was sitting in one of the gatherings of my people, Banu Mudlij, a man of them came up and stood over us as we sat, and said: Suraqah, I have just seen [some figures](g:aswida) on the coast; I think they are Muhammad and his companions. Suraqah said: I knew it was they … Then, when I could hear the recitation of the Messenger of Allah ﷺ — he did not look round, while Abu Bakr kept looking round — the forelegs of my horse sank into the ground up to the knees and I fell off her. I urged her on and she rose, hardly able to pull her forelegs out, and when she stood upright there rose from the marks of her forelegs a [haze](g:uthan) climbing into the sky like smoke … I called out to them offering safety, and they stopped. I rode up to them, and after what I had met in being held back from them, it came into my heart that the cause of the Messenger of Allah ﷺ would prevail … I offered them provisions and goods, but they [took nothing from me](g:yarza) and asked me nothing, except that he said: Keep us hidden. I asked him to write me a letter of safety, and he told 'Amir ibn Fuhayrah, who wrote it on a piece of leather.\""
        },
        {
          "id": "suraqa-3",
          "type": "aside",
          "kind": "riwaya",
          "title": {
            "ar": "من طالبٍ إلى حارس",
            "en": "From pursuer to guard"
          },
          "ar": "وفي رواية أبي بكر: قال سراقة: [«إني أُراكما قد دعوتما عليَّ، فادعوا لي، فالله لكما أن أردَّ عنكما الطلب»](h:bukhari:3615)، فدعا له النبيُّ ﷺ فنجا، [«فجعل لا يلقى أحدًا إلا قال: كُفيتم ما هنا… قال: ووفى لنا»](h:bukhari:3615).\nوفي رواية أنس: [«فكان أوَّل النهار جاهدًا على نبي الله ﷺ، وكان آخر النهار مَسلحةً له»](h:bukhari:3911).",
          "en": "In Abu Bakr's account, Suraqah said: [\"I see that you two have prayed against me, so pray for me, and I pledge by Allah to you that I will turn the pursuers away from you\"](h:bukhari:3615); the Prophet ﷺ prayed for him and he got free, [\"and he met no one without saying: You have been spared the trouble here … and he kept his word to us.\"](h:bukhari:3615)\nIn Anas's account: [\"At the start of the day he was striving against the Prophet of Allah ﷺ, and at the end of the day he was his armed guard.\"](h:bukhari:3911)"
        }
      ]
    },
    {
      "id": "arrival",
      "title": {
        "ar": "أشرقت المدينة",
        "en": "Madinah shone"
      },
      "sub": {
        "ar": "قباء ثم المدينة، يوم الاثنين من ربيع الأول",
        "en": "Quba', then Madinah — a Monday in Rabi' al-Awwal"
      },
      "blocks": [
        {
          "id": "arrival-1",
          "type": "prose",
          "ar": "ولقي في الطريق [الزبير](p:c_zubayr) في ركبٍ من المسلمين قادمين من الشام، [«فكسا الزبيرُ رسولَ الله ﷺ وأبا بكر ثيابَ بياض»](h:bukhari:3906)، وكان المسلمون في المدينة قد سمعوا بخروجه، [«فكانوا يغدون كلَّ غداةٍ إلى الحرَّة فينتظرونه حتى يردَّهم حرُّ الظهيرة»](h:bukhari:3906)، حتى كان اليوم الذي أقبل فيه[^bukhari:3906]:",
          "en": "On the way he met [al-Zubayr](p:c_zubayr) with a caravan of Muslims returning from Syria, [\"and al-Zubayr clothed the Messenger of Allah ﷺ and Abu Bakr in white garments\"](h:bukhari:3906). The Muslims in Madinah had heard that he had left Makkah, [\"and every morning they would go out to the lava field and wait for him until the heat of noon drove them back\"](h:bukhari:3906) — until the day he came[^bukhari:3906]:"
        },
        {
          "id": "arrival-2",
          "type": "hadith",
          "ref": "bukhari:3906",
          "grade": "sahih",
          "narrator": {
            "ar": "يروي عروة بن الزبير:",
            "en": "'Urwah ibn al-Zubayr relates:"
          },
          "ar": "«فلمَّا أوَوا إلى بيوتهم أوفى رجلٌ من يهود على [أُطُمٍ](g:utum) من آطامهم لأمرٍ ينظر إليه، فبصُر برسول الله ﷺ وأصحابه [مبيَّضين](g:mubayyad) يزول بهم السراب، فلم يملك اليهوديُّ أن قال بأعلى صوته: يا معاشر العرب، هذا [جدُّكم](g:jadd) الذي تنتظرون، فثار المسلمون إلى السلاح، فتلقَّوا رسول الله ﷺ بظهر الحرَّة، فعدل بهم ذات اليمين حتى نزل بهم في بني عمرو بن عوف، وذلك يوم الاثنين من شهر ربيع الأول»",
          "en": "\"When they had gone back to their houses, a man of the Jews climbed up one of their [forts](g:utum) to look at something, and caught sight of the Messenger of Allah ﷺ and his companions [dressed in white](g:mubayyad), shimmering in the mirage. The Jew could not help crying out at the top of his voice: People of the Arabs! Here is [the one you have been waiting for](g:jadd)! The Muslims rushed to their weapons and met the Messenger of Allah ﷺ on the far side of the lava field. He turned with them to the right until he stopped among Banu 'Amr ibn 'Awf — that was a Monday in the month of Rabi' al-Awwal.\""
        },
        {
          "id": "arrival-3",
          "type": "aside",
          "kind": "place",
          "title": {
            "ar": "قُباء",
            "en": "Quba'"
          },
          "ar": "قال ياقوت: «قُبا… وأصله اسم بئرٍ هناك عُرفت القرية بها، وهي مساكن بني عمرو بن عوف من الأنصار»[^yaqut:4/301]، قال ابن حجر: «ومنازلهم بقباء، وهي على فرسخ من المسجد النبوي»[^fath:7/243].",
          "en": "Yaqut said: \"Quba' … was originally the name of a well there by which the village became known; it is where Banu 'Amr ibn 'Awf of the Ansar lived\"[^yaqut:4/301]. Ibn Hajar said: \"Their homes were at Quba', a farsakh from the Prophet's Mosque.\"[^fath:7/243]"
        },
        {
          "id": "arrival-4",
          "type": "prose",
          "ar": "[«فقام أبو بكر للناس، وجلس رسول الله ﷺ صامتًا»](h:bukhari:3906)، فجعل من لم يره من الأنصار يحيِّي أبا بكر، [«حتى أصابت الشمسُ رسولَ الله ﷺ، فأقبل أبو بكر حتى ظلَّل عليه بردائه، فعرف الناس رسول الله ﷺ عند ذلك»](h:bukhari:3906)، [«فلبث رسول الله ﷺ في بني عمرو بن عوف بضع عشرة ليلة، وأُسِّس المسجد الذي أُسِّس على التقوى»](h:bukhari:3906).",
          "en": "[\"Abu Bakr stood up to receive the people, and the Messenger of Allah ﷺ sat in silence\"](h:bukhari:3906), so those of the Ansar who had never seen him began greeting Abu Bakr, [\"until the sun fell on the Messenger of Allah ﷺ, and Abu Bakr came and shaded him with his cloak — and then the people knew the Messenger of Allah ﷺ.\"](h:bukhari:3906) [\"The Messenger of Allah ﷺ stayed among Banu 'Amr ibn 'Awf a little over ten nights, and the mosque founded on piety was founded.\"](h:bukhari:3906)"
        },
        {
          "id": "arrival-5",
          "type": "hadith",
          "ref": "bukhari:3925",
          "grade": "sahih",
          "narrator": {
            "ar": "يقول البراء بن عازب (رضي الله عنهما):",
            "en": "Al-Bara' ibn 'Azib (رضي الله عنهما) said:"
          },
          "ar": "«فما رأيتُ أهل المدينة فرحوا بشيءٍ فرحهم برسول الله ﷺ، حتى جعل الإماء يقلن: قدم رسول الله ﷺ»",
          "en": "\"I never saw the people of Madinah as happy about anything as they were about the Messenger of Allah ﷺ — even the slave-girls were saying: The Messenger of Allah ﷺ has come!\""
        },
        {
          "id": "arrival-6",
          "type": "prose",
          "ar": "ثم ركب راحلته يمشي معه الناس [«حتى بركت عند مسجد الرسول ﷺ بالمدينة»](h:bukhari:3906)، فقال: [«هذا إن شاء الله المنزل»](h:bukhari:3906). ويختصر أنس بن مالك ذلك اليوم في جملة: [«لمَّا كان اليوم الذي دخل فيه رسول الله ﷺ المدينة أضاء منها كلُّ شيء»](h:tirmidhi:3618).",
          "en": "Then he rode his camel with the people walking alongside [\"until she knelt at the place of the Messenger's Mosque in Madinah\"](h:bukhari:3906), and he said: [\"This, if Allah wills, is the place to stay.\"](h:bukhari:3906) Anas ibn Malik sums up that day in one sentence: [\"On the day the Messenger of Allah ﷺ entered Madinah, everything in it shone.\"](h:tirmidhi:3618)"
        }
      ]
    }
  ],
  "lessons": [
    {
      "kind": "aqidah",
      "ar": "يمكرون ويمكر الله: [﴿وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ﴾](q:8:30).",
      "en": "They plot, and Allah plots: [﴿they plot, and Allah plots, and Allah is the best of planners﴾](q:8:30)."
    },
    {
      "kind": "aqidah",
      "ar": "التوكُّل الكامل مع الأخذ بالأسباب: أعدَّا الراحلتين والدليل والزاد[^bukhari:3905]، ثم قال: [«ما ظنُّك يا أبا بكر باثنين الله ثالثهما»](h:bukhari:3653).",
      "en": "Complete trust with every means taken: they prepared the camels, the guide and the provisions[^bukhari:3905], then he said: [\"What do you think, Abu Bakr, of two whose third is Allah?\"](h:bukhari:3653)"
    },
    {
      "kind": "tarbiyah",
      "ar": "الصحبة الصادقة خدمةٌ بلا منَّة: سوَّى له أبو بكر مكان نومه، وبرَّد له اللبن، [«فشرب حتى رضيتُ»](h:bukhari:3615).",
      "en": "True companionship serves without reproach: Abu Bakr smoothed his sleeping place and cooled his milk, [\"and he drank — until I was content.\"](h:bukhari:3615)"
    },
    {
      "kind": "tarbiyah",
      "ar": "لكلٍّ في البيت دوره في نصرة الحق: أسماء تجهِّز الزاد، وعبد الله ينقل الأخبار، وعامر يرعى ويسقي[^bukhari:3905].",
      "en": "Everyone in a household has a part in supporting the truth: Asma' prepared the provisions, 'Abd Allah carried the news, 'Amir grazed the sheep and brought the milk[^bukhari:3905]."
    },
    {
      "kind": "dawah",
      "ar": "الحكمة في الكلام تحفظ الأمر وتصدق معًا: [«هذا الرجل يهديني السبيل»](h:bukhari:3911).",
      "en": "Wise words can protect a secret and still be true: [\"This man guides me on the way.\"](h:bukhari:3911)"
    },
    {
      "kind": "qiyadah",
      "ar": "الكتمان من التدبير: [«أخرِجْ من عندك»](h:bukhari:3905)، [«أخفِ عنَّا»](h:bukhari:3906).",
      "en": "Discretion is part of planning: [\"Send out whoever is with you\"](h:bukhari:3905); [\"Keep us hidden.\"](h:bukhari:3906)"
    },
    {
      "kind": "qiyadah",
      "ar": "قد يصير العدوُّ حارسًا: [«فكان أوَّل النهار جاهدًا على نبي الله ﷺ، وكان آخر النهار مَسلحةً له»](h:bukhari:3911).",
      "en": "An enemy may become a guard: [\"At the start of the day he was striving against the Prophet of Allah ﷺ, and at the end of the day he was his armed guard.\"](h:bukhari:3911)"
    }
  ],
  "unproven": [
    {
      "id": "spider",
      "status": "weak",
      "review": "confirmed",
      "claim": {
        "ar": "أنَّ العنكبوت نسجت على باب الغار، وأنَّ حمامتين عشَّشتا عنده فانصرف المشركون.",
        "en": "That a spider wove its web over the mouth of the cave and two doves nested there, so the idolaters turned away."
      },
      "note": {
        "ar": "ضعَّف الألباني هذه الروايات.",
        "en": "Al-Albani graded these reports weak."
      }
    },
    {
      "id": "badr-song",
      "status": "weak",
      "review": "confirmed",
      "claim": {
        "ar": "إنشاد أهل المدينة «طلع البدر علينا من ثنيات الوداع» عند وصوله ﷺ.",
        "en": "The people of Madinah singing \"Tala'a al-badru 'alayna\" when he ﷺ arrived."
      },
      "note": {
        "ar": "لا يثبت بإسناد صحيح؛ ضعَّفه الألباني.",
        "en": "It is not established with an authentic chain; al-Albani graded it weak."
      }
    },
    {
      "id": "umm-mabad",
      "status": "weak",
      "review": "confirmed",
      "claim": {
        "ar": "نزوله ﷺ وصاحبه بخيمة أم معبد الخزاعية، وحلبه شاتها العجفاء فدرَّت، ووصفها له ﷺ وصفًا طويلًا.",
        "en": "That he ﷺ and his companion stopped at the tent of Umm Ma'bad al-Khuza'iyyah, milked her lean ewe and it gave milk, and her long description of him ﷺ."
      },
      "note": {
        "ar": "صحَّحه الحاكم، وتعقَّبه الذهبي بأنه ليس في طرقه شيءٌ على شرط الصحيح، وحسَّنه بعض أهل العلم بمجموع طرقه وشهرته. فلم نُدخله في السرد احتياطًا، وأبقيناه هنا للتنبيه.",
        "en": "Al-Hakim graded it authentic; al-Dhahabi objected that none of its routes meets the standard of the authentic, and some scholars considered it hasan through its many routes and fame. As a precaution it is kept out of the narrative and noted here."
      }
    },
    {
      "id": "suraqa-kisra",
      "status": "mursal",
      "review": "confirmed",
      "claim": {
        "ar": "قوله ﷺ لسراقة بن مالك وهو يطارده: «كيف بك إذا لبستَ سوارَي كسرى؟».",
        "en": "That he ﷺ said to Suraqah ibn Malik while Suraqah was pursuing him: \"How will it be for you when you wear the bracelets of Khosrow?\""
      },
      "note": {
        "ar": "يُروى مرسلًا عن الحسن البصري ولا يثبت بإسنادٍ متصل. والثابت في البخاري (٣٩٠٦) خبر سراقة: غوص قوائم فرسه، وطلبه الأمان، وكتابه له.",
        "en": "It is reported as mursal from al-Hasan al-Basri, with no connected chain. What al-Bukhari (3906) establishes is Suraqah's story: his horse's legs sinking, his request for safety, and the written guarantee."
      }
    },
    {
      "id": "snake",
      "status": "weak",
      "review": "confirmed",
      "claim": {
        "ar": "أن أبا بكر سدَّ جحور الغار بثوبه، وبقي جحرٌ ألقمه قدمه فلدغته حيَّة فلم يتحرَّك، فتفل النبي ﷺ على موضعها فبرأ.",
        "en": "That Abu Bakr blocked the holes of the cave with his garment, put his foot over the last hole, was bitten by a snake and did not move, and the Prophet ﷺ applied his saliva to it and it healed."
      },
      "note": {
        "ar": "لا يصحُّ إسناده، وعدَّه أهل العلم من المناكير فيما يُروى عن الهجرة. والثابت في الصحيح خوفُ أبي بكر لما رأى أقدام المشركين، وقوله ﷺ: «ما ظنُّك باثنين الله ثالثهما».",
        "en": "Its chain is not authentic, and scholars count it among the unacceptable reports about the Hijra. What is authentic is Abu Bakr's fear on seeing the idolaters' feet, and his ﷺ words: \"What do you think of two when Allah is their third?\""
      }
    },
    {
      "id": "ali-bed",
      "status": "weak",
      "review": "confirmed",
      "claim": {
        "ar": "أنَّ قريشًا تشاورت ليلةً في حبسه أو قتله أو إخراجه، فبات عليٌّ على فراشه ﷺ والمشركون يحرسونه يحسبونه النبيَّ ﷺ، فلمَّا أصبحوا ثاروا إليه.",
        "en": "That Quraysh met one night to decide whether to imprison, kill or expel him, and 'Ali slept in his bed while the idolaters kept watch, taking him for the Prophet ﷺ, and rushed at him in the morning."
      },
      "note": {
        "ar": "رواه أحمد (٣٢٥١) عن ابن عباس، وقال محقِّقو المسند: إسناده ضعيف؛ عثمان الجزري ضعيف. والثابت في المعنى قوله تعالى: ﴿وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ﴾.",
        "en": "Ahmad reports it (3251) from Ibn 'Abbas; the editors of the Musnad say its chain is weak, 'Uthman al-Jazari being weak. What is established on the matter is Allah's word: ﴿And when those who disbelieved plotted against you to restrain you, or kill you, or drive you out﴾."
      }
    }
  ],
  "glossary": {
    "nahr": {
      "ar": "نحر الظهيرة: أوَّل الزوال، وهو أشدُّ ما يكون في حرارة النهار",
      "en": "nahr al-zahirah: the beginning of the sun's decline, the hottest part of the day",
      "ref": "fath:7/235"
    },
    "taqannu": {
      "ar": "متقنِّعًا: مغطِّيًا رأسه",
      "en": "mutaqanniʿan: with his head covered",
      "ref": "fath:7/235"
    },
    "nitaq": {
      "ar": "النِّطاق: ما يُشدُّ به الوسط",
      "en": "nitaq: a band tied round the waist",
      "ref": "fath:7/236"
    },
    "thaqif": {
      "ar": "ثَقِف: الحاذق، تقول: ثقِفتُ الشيء إذا أقمتَ عوجه",
      "en": "thaqif: sharp, skilful — from thaqiftu al-shay', \"I straightened what was crooked in it\"",
      "ref": "fath:7/237"
    },
    "yuktadan": {
      "ar": "يُكتادان به: يُطلب لهما فيه المكروه، وهو من الكيد",
      "en": "yuktadan bihi: harm is sought against them in it — from kayd, plotting",
      "ref": "fath:7/237"
    },
    "risl": {
      "ar": "الرِّسْل: اللبن الطري",
      "en": "risl: fresh milk",
      "ref": "fath:7/237"
    },
    "radif": {
      "ar": "الرَّضيف: اللبن المرضوف، أي الذي وُضعت فيه الحجارة المحماة بالشمس أو النار",
      "en": "radif: milk warmed by dropping stones heated in the sun or fire into it",
      "ref": "fath:7/237"
    },
    "aswida": {
      "ar": "أسوِدة: أشخاصًا",
      "en": "aswidah: figures, people seen from afar",
      "ref": "fath:7/241"
    },
    "uthan": {
      "ar": "العُثان: الدخان، قال أبو عمرو بن العلاء: الدخان من غير نار",
      "en": "ʿuthan: smoke — Abu 'Amr ibn al-'Ala' said: smoke without fire",
      "ref": "fath:7/242"
    },
    "yarza": {
      "ar": "فلم يرزآني: لم ينقصاني ممَّا معي شيئًا",
      "en": "lam yarza'ani: they took nothing of what I had",
      "ref": "fath:7/242"
    },
    "utum": {
      "ar": "الأُطُم: الحصن",
      "en": "utum: a fort",
      "ref": "fath:7/243"
    },
    "mubayyad": {
      "ar": "مبيَّضين: عليهم الثياب البيض التي كساهم إيَّاها الزبير أو طلحة",
      "en": "mubayyadin: wearing the white clothes al-Zubayr (or Talhah) had given them",
      "ref": "fath:7/243"
    },
    "jadd": {
      "ar": "جدُّكم: حظُّكم وصاحب دولتكم الذي تتوقَّعونه",
      "en": "jaddukum: your good fortune — the one whose rule you are expecting",
      "ref": "fath:7/243"
    }
  },
  "fulltext": {
    "bukhari:3905": {
      "narrator": {
        "ar": "عن عائشة (رضي الله عنها)",
        "en": "From 'A'ishah (رضي الله عنها)"
      },
      "ar": "لَمْ أَعْقِلْ أَبَوَيَّ قَطُّ إِلَّا وَهُمَا يَدِينَانِ الدِّينَ، وَلَمْ يَمُرَّ عَلَيْنَا يَوْمٌ إِلَّا يَأْتِينَا فِيهِ رَسُولُ اللَّهِ ﷺ طَرَفَيِ النَّهَارِ بُكْرَةً وَعَشِيَّةً.\nفَلَمَّا ابْتُلِيَ الْمُسْلِمُونَ خَرَجَ أَبُو بَكْرٍ مُهَاجِرًا نَحْوَ أَرْضِ الْحَبَشَةِ حَتَّى بَلَغَ بَرْكَ الْغِمَادِ لَقِيَهُ ابْنُ الدَّغِنَةِ وَهُوَ سَيِّدُ الْقَارَةِ، فَقَالَ: أَيْنَ تُرِيدُ يَا أَبَا بَكْرٍ؟ فَقَالَ أَبُو بَكْرٍ: أَخْرَجَنِي قَوْمِي فَأُرِيدُ أَنْ أَسِيحَ فِي الْأَرْضِ وَأَعْبُدَ رَبِّي، قَالَ ابْنُ الدَّغِنَةِ: فَإِنَّ مِثْلَكَ يَا أَبَا بَكْرٍ لَا يَخْرُجُ وَلَا يُخْرَجُ، إِنَّكَ تَكْسِبُ الْمَعْدُومَ وَتَصِلُ الرَّحِمَ، وَتَحْمِلُ الْكَلَّ وَتَقْرِي الضَّيْفَ، وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ، فَأَنَا لَكَ جَارٌ ارْجِعْ وَاعْبُدْ رَبَّكَ بِبَلَدِكَ.\nفَرَجَعَ وَارْتَحَلَ مَعَهُ ابْنُ الدَّغِنَةِ، فَطَافَ ابْنُ الدَّغِنَةِ عَشِيَّةً فِي أَشْرَافِ قُرَيْشٍ، فَقَالَ لَهُمْ: إِنَّ أَبَا بَكْرٍ لَا يَخْرُجُ مِثْلُهُ وَلَا يُخْرَجُ، أَتُخْرِجُونَ رَجُلًا يَكْسِبُ الْمَعْدُومَ وَيَصِلُ الرَّحِمَ، وَيَحْمِلُ الْكَلَّ وَيَقْرِي الضَّيْفَ، وَيُعِينُ عَلَى نَوَائِبِ الْحَقِّ، فَلَمْ تُكَذِّبْ قُرَيْشٌ بِجِوَارِ ابْنِ الدَّغِنَةِ، وَقَالُوا لِابْنِ الدَّغِنَةِ: مُرْ أَبَا بَكْرٍ فَلْيَعْبُدْ رَبَّهُ فِي دَارِهِ فَلْيُصَلِّ فِيهَا، وَلْيَقْرَأْ مَا شَاءَ وَلَا يُؤْذِينَا بِذَلِكَ، وَلَا يَسْتَعْلِنْ بِهِ، فَإِنَّا نَخْشَى أَنْ يَفْتِنَ نِسَاءَنَا وَأَبْنَاءَنَا، فَقَالَ ذَلِكَ ابْنُ الدَّغِنَةِ لِأَبِي بَكْرٍ، فَلَبِثَ أَبُو بَكْرٍ بِذَلِكَ يَعْبُدُ رَبَّهُ فِي دَارِهِ، وَلَا يَسْتَعْلِنُ بِصَلَاتِهِ وَلَا يَقْرَأُ فِي غَيْرِ دَارِهِ، ثُمَّ بَدَا لِأَبِي بَكْرٍ فَابْتَنَى مَسْجِدًا بِفِنَاءِ دَارِهِ، وَكَانَ يُصَلِّي فِيهِ وَيَقْرَأُ الْقُرْآنَ، فَيَنْقَذِفُ عَلَيْهِ نِسَاءُ الْمُشْرِكِينَ وَأَبْنَاؤُهُمْ وَهُمْ يَعْجَبُونَ مِنْهُ وَيَنْظُرُونَ إِلَيْهِ، وَكَانَ أَبُو بَكْرٍ رَجُلًا بَكَّاءً لَا يَمْلِكُ عَيْنَيْهِ إِذَا قَرَأَ الْقُرْآنَ، وَأَفْزَعَ ذَلِكَ أَشْرَافَ قُرَيْشٍ مِنَ الْمُشْرِكِينَ، فَأَرْسَلُوا إِلَى ابْنِ الدَّغِنَةِ فَقَدِمَ عَلَيْهِمْ، فَقَالُوا: إِنَّا كُنَّا أَجَرْنَا أَبَا بَكْرٍ بِجِوَارِكَ عَلَى أَنْ يَعْبُدَ رَبَّهُ فِي دَارِهِ، فَقَدْ جَاوَزَ ذَلِكَ فَابْتَنَى مَسْجِدًا بِفِنَاءِ دَارِهِ، فَأَعْلَنَ بِالصَّلَاةِ وَالْقِرَاءَةِ فِيهِ، وَإِنَّا قَدْ خَشِينَا أَنْ يَفْتِنَ نِسَاءَنَا وَأَبْنَاءَنَا، فَانْهَهُ فَإِنْ أَحَبَّ أَنْ يَقْتَصِرَ عَلَى أَنْ يَعْبُدَ رَبَّهُ فِي دَارِهِ فَعَلَ، وَإِنْ أَبَى إِلَّا أَنْ يُعْلِنَ بِذَلِكَ فَسَلْهُ أَنْ يَرُدَّ إِلَيْكَ ذِمَّتَكَ فَإِنَّا قَدْ كَرِهْنَا أَنْ نُخْفِرَكَ وَلَسْنَا مُقِرِّينَ لِأَبِي بَكْرٍ الِاسْتِعْلَانَ.\nقَالَتْ عَائِشَةُ: فَأَتَى ابْنُ الدَّغِنَةِ إِلَى أَبِي بَكْرٍ، فَقَالَ: قَدْ عَلِمْتَ الَّذِي عَاقَدْتُ لَكَ عَلَيْهِ، فَإِمَّا أَنْ تَقْتَصِرَ عَلَى ذَلِكَ، وَإِمَّا أَنْ تَرْجِعَ إِلَيَّ ذِمَّتِي فَإِنِّي لَا أُحِبُّ أَنْ تَسْمَعَ الْعَرَبُ أَنِّي أُخْفِرْتُ فِي رَجُلٍ عَقَدْتُ لَهُ، فَقَالَ أَبُو بَكْرٍ: فَإِنِّي أَرُدُّ إِلَيْكَ جِوَارَكَ وَأَرْضَى بِجِوَارِ اللَّهِ عَزَّ وَجَلَّ.\nوَالنَّبِيُّ ﷺ يَوْمَئِذٍ بِمَكَّةَ، فَقَالَ النَّبِيُّ ﷺ لِلْمُسْلِمِينَ: إِنِّي أُرِيتُ دَارَ هِجْرَتِكُمْ ذَاتَ نَخْلٍ بَيْنَ لَابَتَيْنِ وَهُمَا الْحَرَّتَانِ، فَهَاجَرَ مَنْ هَاجَرَ قِبَلَ الْمَدِينَةِ وَرَجَعَ عَامَّةُ مَنْ كَانَ هَاجَرَ بِأَرْضِ الْحَبَشَةِ إِلَى الْمَدِينَةِ وَتَجَهَّزَ أَبُو بَكْرٍ قِبَلَ الْمَدِينَةِ، فَقَالَ لَهُ رَسُولُ اللَّهِ ﷺ: عَلَى رِسْلِكَ فَإِنِّي أَرْجُو أَنْ يُؤْذَنَ لِي، فَقَالَ أَبُو بَكْرٍ: وَهَلْ تَرْجُو ذَلِكَ بِأَبِي أَنْتَ، قَالَ: نَعَمْ، فَحَبَسَ أَبُو بَكْرٍ نَفْسَهُ عَلَى رَسُولِ اللَّهِ ﷺ لِيَصْحَبَهُ وَعَلَفَ رَاحِلَتَيْنِ كَانَتَا عِنْدَهُ وَرَقَ السَّمُرِ وَهُوَ الْخَبَطُ أَرْبَعَةَ أَشْهُرٍ.\nقَالَ ابْنُ شِهَابٍ: قَالَ عُرْوَةُ: قَالَتْ عَائِشَةُ: فَبَيْنَمَا نَحْنُ يَوْمًا جُلُوسٌ فِي بَيْتِ أَبِي بَكْرٍ فِي نَحْرِ الظَّهِيرَةِ، قَالَ قَائِلٌ لِأَبِي بَكْرٍ: هَذَا رَسُولُ اللَّهِ ﷺ مُتَقَنِّعًا فِي سَاعَةٍ لَمْ يَكُنْ يَأْتِينَا فِيهَا، فَقَالَ أَبُو بَكْرٍ: فِدَاءٌ لَهُ أَبِي وَأُمِّي وَاللَّهِ مَا جَاءَ بِهِ فِي هَذِهِ السَّاعَةِ إِلَّا أَمْرٌ، قَالَتْ: فَجَاءَ رَسُولُ اللَّهِ ﷺ فَاسْتَأْذَنَ، فَأُذِنَ لَهُ فَدَخَلَ، فَقَالَ النَّبِيُّ ﷺ لِأَبِي بَكْرٍ: أَخْرِجْ مَنْ عِنْدَكَ، فَقَالَ أَبُو بَكْرٍ: إِنَّمَا هُمْ أَهْلُكَ بِأَبِي أَنْتَ يَا رَسُولَ اللَّهِ، قَالَ: فَإِنِّي قَدْ أُذِنَ لِي فِي الْخُرُوجِ، فَقَالَ أَبُو بَكْرٍ: الصَّحَابَةُ بِأَبِي أَنْتَ يَا رَسُولَ اللَّهِ، قَالَ رَسُولُ اللَّهِ ﷺ: نَعَمْ، قَالَ أَبُو بَكْرٍ: فَخُذْ بِأَبِي أَنْتَ يَا رَسُولَ اللَّهِ إِحْدَى رَاحِلَتَيَّ هَاتَيْنِ، قَالَ رَسُولُ اللَّهِ ﷺ: بِالثَّمَنِ.\nقَالَتْ عَائِشَةُ: فَجَهَّزْنَاهُمَا أَحَثَّ الْجِهَازِ وَصَنَعْنَا لَهُمَا سُفْرَةً فِي جِرَابٍ، فَقَطَعَتْ أَسْمَاءُ بِنْتُ أَبِي بَكْرٍ قِطْعَةً مِنْ نِطَاقِهَا فَرَبَطَتْ بِهِ عَلَى فَمِ الْجِرَابِ، فَبِذَلِكَ سُمِّيَتْ ذَاتَ النِّطَاقَيْنِ.\nقَالَتْ: ثُمَّ لَحِقَ رَسُولُ اللَّهِ ﷺ وَأَبُو بَكْرٍ بِغَارٍ فِي جَبَلِ ثَوْرٍ فَكَمَنَا فِيهِ ثَلَاثَ لَيَالٍ يَبِيتُ عِنْدَهُمَا عَبْدُ اللَّهِ بْنُ أَبِي بَكْرٍ وَهُوَ غُلَامٌ شَابٌّ ثَقِفٌ لَقِنٌ، فَيُدْلِجُ مِنْ عِنْدِهِمَا بِسَحَرٍ فَيُصْبِحُ مَعَ قُرَيْشٍ بِمَكَّةَ كَبَائِتٍ، فَلَا يَسْمَعُ أَمْرًا يُكْتَادَانِ بِهِ إِلَّا وَعَاهُ حَتَّى يَأْتِيَهُمَا بِخَبَرِ ذَلِكَ حِينَ يَخْتَلِطُ الظَّلَامُ، وَيَرْعَى عَلَيْهِمَا عَامِرُ بْنُ فُهَيْرَةَ مَوْلَى أَبِي بَكْرٍ مِنْحَةً مِنْ غَنَمٍ فَيُرِيحُهَا عَلَيْهِمَا حِينَ تَذْهَبُ سَاعَةٌ مِنَ الْعِشَاءِ، فَيَبِيتَانِ فِي رِسْلٍ وَهُوَ لَبَنُ مِنْحَتِهِمَا وَرَضِيفِهِمَا حَتَّى يَنْعِقَ بِهَا عَامِرُ بْنُ فُهَيْرَةَ بِغَلَسٍ يَفْعَلُ ذَلِكَ فِي كُلِّ لَيْلَةٍ مِنْ تِلْكَ اللَّيَالِي الثَّلَاثِ.\nوَاسْتَأْجَرَ رَسُولُ اللَّهِ ﷺ وَأَبُو بَكْرٍ رَجُلًا مِنْ بَنِي الدِّيلِ وَهُوَ مِنْ بَنِي عَبْدِ بْنِ عَدِيٍّ هَادِيَا خِرِّيتًا، وَالْخِرِّيتُ الْمَاهِرُ بِالْهِدَايَةِ قَدْ غَمَسَ حِلْفًا فِي آلِ الْعَاصِ بْنِ وَائِلٍ السَّهْمِيِّ وَهُوَ عَلَى دِينِ كُفَّارِ قُرَيْشٍ، فَأَمِنَاهُ فَدَفَعَا إِلَيْهِ رَاحِلَتَيْهِمَا وَوَاعَدَاهُ غَارَ ثَوْرٍ بَعْدَ ثَلَاثِ لَيَالٍ بِرَاحِلَتَيْهِمَا صُبْحَ ثَلَاثٍ، وَانْطَلَقَ مَعَهُمَا عَامِرُ بْنُ فُهَيْرَةَ وَالدَّلِيلُ فَأَخَذَ بِهِمْ طَرِيقَ السَّوَاحِلِ.",
      "en": "For as long as I can remember, my parents followed the religion, and not a day passed without the Messenger of Allah ﷺ coming to us at both ends of the day, morning and evening.\nWhen the Muslims were put to the trial, Abu Bakr set out as an emigrant towards Abyssinia. When he reached Bark al-Ghimad, Ibn al-Dughunnah, chief of al-Qarah, met him and said: Where are you going, Abu Bakr? Abu Bakr said: My people have driven me out, and I want to travel the land and worship my Lord. Ibn al-Dughunnah said: A man like you, Abu Bakr, does not leave and is not driven out. You give to the destitute, you keep the ties of kinship, you carry the burden of the weak, you honour the guest and you help against the calamities of life. I will be your protector; go back and worship your Lord in your own land.\nSo he returned, and Ibn al-Dughunnah travelled with him. In the evening Ibn al-Dughunnah went round the nobles of Quraysh and said to them: A man like Abu Bakr does not leave and is not driven out. Would you drive out a man who gives to the destitute, keeps the ties of kinship, carries the burden of the weak, honours the guest and helps against the calamities of life? Quraysh did not reject Ibn al-Dughunnah's protection, and they told him: Tell Abu Bakr to worship his Lord in his house, praying and reciting what he likes there, and not to trouble us with it or do it openly, for we fear he will lure away our women and children. Ibn al-Dughunnah told Abu Bakr this, and for a while Abu Bakr worshipped his Lord in his house, not praying openly and not reciting anywhere but in his house. Then Abu Bakr decided to build a place of prayer in the courtyard of his house. He prayed there and recited the Qur'an, and the idolaters' women and children would throng around him, marvelling at him and watching him; Abu Bakr was a man who wept much and could not hold back his tears when he recited the Qur'an. This alarmed the nobles of Quraysh among the idolaters, and they sent for Ibn al-Dughunnah. When he came, they said: We let Abu Bakr stay under your protection on condition that he worship his Lord in his house. He has gone beyond that: he has built a place of prayer in the courtyard of his house and prays and recites openly in it, and we fear he will lure away our women and children. So stop him. If he is willing to keep to worshipping his Lord in his house, let him; but if he insists on doing it openly, ask him to give you back your pledge, for we would hate to make you break your word, and we will not allow Abu Bakr to do it openly.\n'A'ishah said: Ibn al-Dughunnah came to Abu Bakr and said: You know the terms on which I gave you protection; either keep to them or give me back my pledge, for I would not like the Arabs to hear that I was betrayed in a man I had pledged to protect. Abu Bakr said: Then I give you back your protection, and I am content with the protection of Allah, Mighty and Majestic.\nThe Prophet ﷺ was then in Makkah, and he said to the Muslims: I have been shown the land of your emigration, a land of palm trees between two lava fields — the two harrahs. So those who emigrated went towards Madinah, and most of those who had emigrated to Abyssinia came back to Madinah. Abu Bakr prepared to leave for Madinah, but the Messenger of Allah ﷺ told him: Wait a while, for I hope to be given permission. Abu Bakr said: Do you hope for that, may my father be your ransom? He said: Yes. So Abu Bakr held himself back for the Messenger of Allah ﷺ, to accompany him, and fed two riding camels he had on the leaves of the samur tree — that is, khabat — for four months.\nIbn Shihab said: 'Urwah said: 'A'ishah said: One day, as we were sitting in Abu Bakr's house in the full heat of noon, someone said to Abu Bakr: Here is the Messenger of Allah ﷺ with his head covered, at an hour he never used to come to us. Abu Bakr said: May my father and my mother be his ransom! By Allah, nothing but a grave matter brings him at this hour. She said: The Messenger of Allah ﷺ came and asked permission; he was given it and came in, and the Prophet ﷺ said to Abu Bakr: Send out whoever is with you. Abu Bakr said: They are only your family, may my father be your ransom, Messenger of Allah. He said: I have been given permission to leave. Abu Bakr said: Your companion, may my father be your ransom, Messenger of Allah? The Messenger of Allah ﷺ said: Yes. Abu Bakr said: Then take, may my father be your ransom, Messenger of Allah, one of these two riding camels of mine. The Messenger of Allah ﷺ said: For its price.\n'A'ishah said: We made them ready as quickly as we could and prepared them provisions in a leather bag. Asma' bint Abi Bakr cut a piece from her waistband and tied the mouth of the bag with it, and for that she was named Dhat al-Nitaqayn, the woman of the two waistbands.\nShe said: Then the Messenger of Allah ﷺ and Abu Bakr reached a cave in Mount Thawr and stayed hidden in it for three nights. 'Abd Allah ibn Abi Bakr, a sharp and quick-witted young man, spent the nights with them; he would leave them before dawn and be among Quraysh in Makkah in the morning as if he had spent the night there. He heard of no plot against them without taking it in, and brought them the news when darkness fell. 'Amir ibn Fuhayrah, Abu Bakr's freedman, grazed a milch flock of sheep near them and brought it to them when an hour of the night had passed, so they spent the night on fresh milk, the milk of their sheep warmed with heated stones, until 'Amir ibn Fuhayrah called the flock away in the last darkness before dawn. He did this on every one of those three nights.\nThe Messenger of Allah ﷺ and Abu Bakr hired a man of Banu al-Dil, of Banu 'Abd ibn 'Adiyy, as an expert guide — khirrit means one skilled at guiding the way — who had sworn an alliance with the family of al-'As ibn Wa'il al-Sahmi and followed the religion of the unbelievers of Quraysh. They trusted him, handed him their two riding camels and arranged to meet him at the cave of Thawr after three nights, with their two camels, on the morning of the third. 'Amir ibn Fuhayrah and the guide set out with them, and the guide took them along the coastal road."
    }
  }
});
