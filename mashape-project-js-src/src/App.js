import React, { Component } from 'react';
import Playlist from './Playlist';
import ReactAudioPlayer from 'react-audio-player';

var trackdata = [
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 244.55836734693878, 
    "title": [
      "10A - The One"
    ], 
    "url": "files/10A - The One-166380874.mp3"
  }, 
  {
    "artist": [
      "TJCK"
    ], 
    "date": [
      "20160320"
    ], 
    "length": 202.2922448979592, 
    "title": [
      "119"
    ], 
    "url": "files/119-253696433.mp3"
  }, 
  {
    "artist": [
      "MARC E. BASSY"
    ], 
    "date": [
      "20140716"
    ], 
    "length": 186.93224489795918, 
    "title": [
      "4. RELAPSE FT. IAMSU!"
    ], 
    "url": "files/4. RELAPSE FT. IAMSU!-158987021.mp3"
  }, 
  {
    "album": [
      "45/7 #20 ARTIST: STRICTLY KEV aka DJ FOOD"
    ], 
    "artist": [
      "45/7 VINYL CLUB"
    ], 
    "date": [
      "20160301"
    ], 
    "genre": [
      "Meditative"
    ], 
    "length": 3690.057142857143, 
    "title": [
      "45/7 #20 ARTIST: STRICTLY KEV aka DJ FOOD"
    ], 
    "url": "files/45_7 #20 ARTIST - STRICTLY KEV aka DJ FOOD-249624513.mp3"
  }, 
  {
    "artist": [
      "Gabriel Garz\u00f3n-Montano"
    ], 
    "date": [
      "20140521"
    ], 
    "length": 298.814693877551, 
    "title": [
      "6 8"
    ], 
    "url": "files/6 8-150581783.mp3"
  }, 
  {
    "artist": [
      "Penthouse Penthouse"
    ], 
    "date": [
      "20150818"
    ], 
    "length": 235.07591836734693, 
    "title": [
      "69' Camaro - Penthouse Penthouse & Bobby Saint"
    ], 
    "url": "files/69' Camaro - Penthouse Penthouse & Bobby Saint-219813256.mp3"
  }, 
  {
    "artist": [
      "AmirObe"
    ], 
    "date": [
      "20140611"
    ], 
    "length": 197.74693877551022, 
    "title": [
      "8. Amir Ob\u00e9 - Hennessy Breath [Prod. By NYLZ]"
    ], 
    "url": "files/8. Amir Obe\u0301 - Hennessy Breath [Prod. By NYLZ]-153910380.mp3"
  }, 
  {
    "artist": [
      "Eight One Three \ud83c\udf6d"
    ], 
    "date": [
      "20140303"
    ], 
    "length": 193.26299319727892, 
    "title": [
      "813 - Crying Flute"
    ], 
    "url": "files/813 - Crying Flute-137695095.mp3"
  }, 
  {
    "artist": [
      "Kiefer"
    ], 
    "date": [
      "20170528"
    ], 
    "length": 133.33333333333334, 
    "title": [
      "aaaaa"
    ], 
    "url": "files/aaaaa-324841600.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 241.8677551020408, 
    "title": [
      "AbJo - Three"
    ], 
    "url": "files/AbJo - Three-166380847.mp3"
  }, 
  {
    "album": [
      "Abysmal Lounge"
    ], 
    "albumartist": [
      "Stupid Kozo + fico"
    ], 
    "artist": [
      "Abysmal Lounge"
    ], 
    "date": [
      "20160426"
    ], 
    "encodedby": [
      "iTunes 12.3.3.17"
    ], 
    "genre": [
      "Abysmal Lounge"
    ], 
    "length": 4693.263673469388, 
    "title": [
      "Abysmal Lounge #93"
    ], 
    "tracknumber": [
      "93"
    ], 
    "url": "files/Abysmal Lounge #93-260987565.mp3"
  }, 
  {
    "artist": [
      "jinsang."
    ], 
    "date": [
      "20140728"
    ], 
    "length": 142.86367346938775, 
    "title": [
      "Alone (jinsang x ameba.)"
    ], 
    "url": "files/Alone (jinsang x ameba.)-160691557.mp3"
  }, 
  {
    "artist": [
      "svpply"
    ], 
    "date": [
      "20150430"
    ], 
    "length": 102.52428571428571, 
    "title": [
      "Anderson .Paak - Drugs (SVPPLY EDIT)"
    ], 
    "url": "files/Anderson .Paak - Drugs (SVPPLY EDIT)-203210726.mp3"
  }, 
  {
    "artist": [
      "rose"
    ], 
    "date": [
      "20160312"
    ], 
    "length": 127.55591836734693, 
    "title": [
      "aqua typa"
    ], 
    "url": "files/aqua typa-251579456.mp3"
  }, 
  {
    "artist": [
      "Lane Beckstrom"
    ], 
    "date": [
      "20150120"
    ], 
    "length": 206.39090702947846, 
    "title": [
      "Argot"
    ], 
    "url": "files/Argot-187001555.mp3"
  }, 
  {
    "artist": [
      "Flight Facilities"
    ], 
    "date": [
      "20170619"
    ], 
    "length": 232.18827664399092, 
    "title": [
      "Arty Boy with Emma Louise"
    ], 
    "url": "files/Arty Boy with Emma Louise-328772475.mp3"
  }, 
  {
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20161006"
    ], 
    "length": 4850.729795918367, 
    "title": [
      "ASTROCAST55: Maeco"
    ], 
    "url": "files/ASTROCAST55 - Maeco-286358935.mp3"
  }, 
  {
    "artist": [
      "seph"
    ], 
    "date": [
      "20160726"
    ], 
    "length": 157.7022902494331, 
    "title": [
      "autumn in the city"
    ], 
    "url": "files/autumn in the city-275388600.mp3"
  }, 
  {
    "artist": [
      "EKALI"
    ], 
    "date": [
      "20170626"
    ], 
    "length": 3071.1379591836735, 
    "title": [
      "Awakening - Mix.2"
    ], 
    "url": "files/Awakening - Mix.2-330210640.mp3"
  }, 
  {
    "artist": [
      "Djemba Djemba"
    ], 
    "date": [
      "20130404"
    ], 
    "length": 324.0489795918367, 
    "title": [
      "BANKS - Fall Over (Djemba Djemba Remix)"
    ], 
    "url": "files/BANKS - Fall Over (Djemba Djemba Remix)-86298134.mp3"
  }, 
  {
    "artist": [
      "B A S E C A M P"
    ], 
    "date": [
      "20140804"
    ], 
    "length": 240.0, 
    "title": [
      "BASECAMP - Shudder"
    ], 
    "url": "files/BASECAMP - Shudder-161589050.mp3"
  }, 
  {
    "artist": [
      "saib."
    ], 
    "date": [
      "20161105"
    ], 
    "length": 193.84616780045351, 
    "title": [
      "Battlecry (saib. mix)"
    ], 
    "url": "files/Battlecry (saib. mix)-291674776.mp3"
  }, 
  {
    "artist": [
      "SBTRKT"
    ], 
    "date": [
      "20150821"
    ], 
    "length": 3638.2839909297054, 
    "title": [
      "BBC RADIO 1 RESIDENCY No. 2 AUGUST 2015"
    ], 
    "url": "files/BBC RADIO 1 RESIDENCY No. 2 AUGUST 2015-220241383.mp3"
  }, 
  {
    "artist": [
      "FABBA"
    ], 
    "date": [
      "20160423"
    ], 
    "length": 226.44197278911565, 
    "title": [
      "Birds"
    ], 
    "url": "files/Birds-260486682.mp3"
  }, 
  {
    "artist": [
      "Edo Lee"
    ], 
    "date": [
      "20131231"
    ], 
    "length": 161.24916099773242, 
    "title": [
      "Black Coffee"
    ], 
    "url": "files/Black Coffee-127337725.mp3"
  }, 
  {
    "artist": [
      "Purple Vibe"
    ], 
    "date": [
      "20160606"
    ], 
    "length": 3552.6008163265305, 
    "title": [
      "Blueprint Sessions J Dilla Mix by Taimles (INFINIT)"
    ], 
    "url": "files/Blueprint Sessions J Dilla Mix by Taimles (INFINIT)-267734745.mp3"
  }, 
  {
    "artist": [
      "\uff25\uff16\uff16\uff33 \u5375"
    ], 
    "date": [
      "20160316"
    ], 
    "length": 61.56040816326531, 
    "title": [
      "bopp"
    ], 
    "url": "files/bopp-252090959.mp3"
  }, 
  {
    "artist": [
      "Chillhop Music"
    ], 
    "date": [
      "20160105"
    ], 
    "length": 288.9926530612245, 
    "title": [
      "brandon* - Love And Luxuria (Opening Theme)"
    ], 
    "url": "files/brandon_ - Love And Luxuria (Opening Theme)-240501065.mp3"
  }, 
  {
    "artist": [
      "snow garden"
    ], 
    "date": [
      "20160811"
    ], 
    "length": 165.15092970521542, 
    "title": [
      "breathe"
    ], 
    "url": "files/breathe-277847358.mp3"
  }, 
  {
    "artist": [
      "Samurai Guru"
    ], 
    "date": [
      "20150614"
    ], 
    "length": 120.0, 
    "title": [
      "Calm Mornings (Glitch Album Cassette Version) Bonus"
    ], 
    "url": "files/Calm Mornings (Glitch Album Cassette Version) Bonus-210245858.mp3"
  }, 
  {
    "artist": [
      "Whoeva?"
    ], 
    "date": [
      "20140916"
    ], 
    "length": 200.3069387755102, 
    "title": [
      "Can't Let Go"
    ], 
    "url": "files/Can't Let Go-168015842.mp3"
  }, 
  {
    "artist": [
      "snow garden"
    ], 
    "date": [
      "20161026"
    ], 
    "length": 90.85714285714286, 
    "title": [
      "can't sleep"
    ], 
    "url": "files/can't sleep-290026932.mp3"
  }, 
  {
    "artist": [
      "Flirtini"
    ], 
    "date": [
      "20140309"
    ], 
    "length": 197.74693877551022, 
    "title": [
      "Chloe Martini - Candy (from Heartbreaks & Promises compilation)"
    ], 
    "url": "files/Chloe Martini - Candy (from Heartbreaks & Promises compilation)-138756044.mp3"
  }, 
  {
    "artist": [
      "Djemba Djemba"
    ], 
    "date": [
      "20151204"
    ], 
    "length": 244.53224489795917, 
    "title": [
      "Cola Splash - Curry Drinker (Djemba Djemba Remix)"
    ], 
    "url": "files/Cola Splash - Curry Drinker (Djemba Djemba Remix)-236016668.mp3"
  }, 
  {
    "artist": [
      "Ahead Of Our Time"
    ], 
    "date": [
      "20161006"
    ], 
    "length": 352.49632653061224, 
    "title": [
      "Coldcut - 'Only Heaven feat. Roots Manuva'"
    ], 
    "url": "files/Coldcut - 'Only Heaven feat. Roots Manuva'-286295014.mp3"
  }, 
  {
    "artist": [
      "YELLE"
    ], 
    "date": [
      "20141111"
    ], 
    "length": 171.91419501133788, 
    "title": [
      "Compl\u00e8tement Fou (20syl remix)"
    ], 
    "url": "files/Comple\u0300tement Fou (20syl remix)-176453865.mp3"
  }, 
  {
    "artist": [
      "Brasstracks"
    ], 
    "date": [
      "20150309"
    ], 
    "length": 197.41775510204081, 
    "title": [
      "Corduroy"
    ], 
    "url": "files/Corduroy-195035905.mp3"
  }, 
  {
    "artist": [
      "svpply"
    ], 
    "date": [
      "20150720"
    ], 
    "length": 106.28571428571429, 
    "title": [
      "damn bronson why ya be dat way (yo I sampled that song he was talking over tho)"
    ], 
    "url": "files/damn bronson why ya be dat way (yo I sampled that song he was talking over tho)-215601466.mp3"
  }, 
  {
    "artist": [
      "medasin"
    ], 
    "date": [
      "20160725"
    ], 
    "length": 200.838231292517, 
    "title": [
      "Daydream (ft. JOBA)"
    ], 
    "url": "files/Daydream (ft. JOBA)-275308631.mp3"
  }, 
  {
    "artist": [
      "SNAKEHIPS"
    ], 
    "date": [
      "20140716"
    ], 
    "length": 174.96816326530612, 
    "title": [
      "Days With You (ft Sinead Harnett)[Pomo Remix]"
    ], 
    "url": "files/Days With You (ft Sinead Harnett)[Pomo Remix]-158935080.mp3"
  }, 
  {
    "artist": [
      "JEDA41"
    ], 
    "date": [
      "20140617"
    ], 
    "length": 120.6521768707483, 
    "title": [
      "desmond"
    ], 
    "url": "files/desmond-154741009.mp3"
  }, 
  {
    "artist": [
      "Djemba Djemba"
    ], 
    "date": [
      "20130609"
    ], 
    "length": 3562.9714285714285, 
    "title": [
      "Diplo and Friends BBC Mix - Mr Carmack & Djemba Djemba"
    ], 
    "url": "files/Diplo and Friends BBC Mix - Mr Carmack & Djemba Djemba-96089887.mp3"
  }, 
  {
    "artist": [
      "AM!R"
    ], 
    "artistsort": [
      "AM!R"
    ], 
    "date": [
      "20161219"
    ], 
    "length": 232.48979591836735, 
    "title": [
      "Dirty Whispers (JNTHN STEIN Remix)"
    ], 
    "titlesort": [
      "Dirty Whispers (JNTHN STEIN Remix) "
    ], 
    "url": "files/Dirty Whispers (JNTHN STEIN Remix)-298644970.mp3"
  }, 
  {
    "artist": [
      "Mass Appeal Records"
    ], 
    "date": [
      "20160406"
    ], 
    "length": 277.279410430839, 
    "title": [
      "DJ Shadow - The Mountain Will Fall"
    ], 
    "url": "files/DJ Shadow - The Mountain Will Fall-257627166.mp3"
  }, 
  {
    "artist": [
      "S\u00e1ngo"
    ], 
    "date": [
      "20160118"
    ], 
    "length": 179.04326530612244, 
    "title": [
      "Don't (Sango & Bryson Tiller Salgueiro Mix) Ft. Chris McClenney"
    ], 
    "url": "files/Don't (Sango & Bryson Tiller Salgueiro Mix) Ft. Chris McClenney-242522651.mp3"
  }, 
  {
    "artist": [
      "Ninja Tune"
    ], 
    "date": [
      "20150223"
    ], 
    "length": 240.81074829931973, 
    "title": [
      "Dorian Concept - 'Ann River, Mn' (Bibio Remix)"
    ], 
    "url": "files/Dorian Concept - 'Ann River, Mn' (Bibio Remix)-192618592.mp3"
  }, 
  {
    "artist": [
      "TOKiMONSTA"
    ], 
    "date": [
      "20140908"
    ], 
    "length": 194.86226757369616, 
    "title": [
      "Drive Feat. Arama"
    ], 
    "url": "files/Drive Feat. Arama-166811628.mp3"
  }, 
  {
    "artist": [
      "DUMMY"
    ], 
    "date": [
      "20150225"
    ], 
    "length": 2691.6310204081633, 
    "title": [
      "Dummy Mix 246 // Dan Deacon"
    ], 
    "url": "files/Dummy Mix 246 _ Dan Deacon-192957512.mp3"
  }, 
  {
    "artist": [
      "ECLEKTIK"
    ], 
    "date": [
      "20150513"
    ], 
    "length": 3081.1428571428573, 
    "title": [
      "ECLEKTIK Mix 001: Howie Lee"
    ], 
    "url": "files/ECLEKTIK Mix 001 - Howie Lee-205269180.mp3"
  }, 
  {
    "artist": [
      "esta."
    ], 
    "date": [
      "20161123"
    ], 
    "length": 142.08, 
    "title": [
      "El Sambroso"
    ], 
    "url": "files/El Sambroso-294489171.mp3"
  }, 
  {
    "artist": [
      "Whethan"
    ], 
    "date": [
      "20160517"
    ], 
    "length": 231.27274376417233, 
    "title": [
      "Elohim - Sensations (Whethan Remix)"
    ], 
    "url": "files/Elohim - Sensations (Whethan Remix)-264591453.mp3"
  }, 
  {
    "artist": [
      "Autograf"
    ], 
    "date": [
      "20161213"
    ], 
    "length": 256.86204081632656, 
    "title": [
      "Episode"
    ], 
    "url": "files/Episode-297765563.mp3"
  }, 
  {
    "artist": [
      "Yik Yak"
    ], 
    "date": [
      "20160330"
    ], 
    "length": 1810.0, 
    "title": [
      "Escape To Everest: Kev"
    ], 
    "url": "files/Escape To Everest - Kev-256297786.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 139.72897959183675, 
    "title": [
      "Esta - Luna"
    ], 
    "url": "files/Esta - Luna-166380899.mp3"
  }, 
  {
    "album": [
      "Eton Messy Music"
    ], 
    "artist": [
      "Eton Messy Records"
    ], 
    "date": [
      "20131111"
    ], 
    "genre": [
      "Hip Hop/Funk"
    ], 
    "length": 1424.2323129251702, 
    "title": [
      "Eton Messy Presents... FKJ"
    ], 
    "url": "files/Eton Messy Presents... FKJ-119655893.mp3"
  }, 
  {
    "artist": [
      "KEV"
    ], 
    "date": [
      "20150903"
    ], 
    "length": 133.18684807256236, 
    "title": [
      "Evening News ft. NATEY"
    ], 
    "url": "files/Evening News ft. NATEY-222231855.mp3"
  }, 
  {
    "artist": [
      "DAYFADE"
    ], 
    "date": [
      "20150417"
    ], 
    "length": 142.18750566893425, 
    "title": [
      "Everyday Struggle Remix (feat. I2eye & I.R. Giant)"
    ], 
    "url": "files/Everyday Struggle Remix (feat. I2eye & I.R. Giant)-201204236.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 258.76897959183674, 
    "title": [
      "Evil Needle - Antidote"
    ], 
    "url": "files/Evil Needle - Antidote-166380875.mp3"
  }, 
  {
    "artist": [
      "Sivey"
    ], 
    "date": [
      "20111201"
    ], 
    "length": 160.15780045351474, 
    "title": [
      "Evil Needle ft. Sivey - Rendez-vous"
    ], 
    "url": "files/Evil Needle ft. Sivey - Rendez-vous-29469733.mp3"
  }, 
  {
    "artist": [
      "Alina Baraz"
    ], 
    "date": [
      "20140924"
    ], 
    "length": 218.94739229024944, 
    "title": [
      "Fantasy"
    ], 
    "url": "files/Fantasy-169170570.mp3"
  }, 
  {
    "artist": [
      "Hannah.Faith"
    ], 
    "date": [
      "20170117"
    ], 
    "length": 3465.325714285714, 
    "title": [
      "FEELS"
    ], 
    "url": "files/FEELS-303131883.mp3"
  }, 
  {
    "artist": [
      "FKJ"
    ], 
    "date": [
      "20170113"
    ], 
    "length": 235.0, 
    "title": [
      "FKJ - Go Back Home"
    ], 
    "url": "files/FKJ - Go Back Home-302498916.mp3"
  }, 
  {
    "artist": [
      "RocheMusique"
    ], 
    "date": [
      "20170303"
    ], 
    "length": 238.88965986394558, 
    "title": [
      "FKJ - Joy"
    ], 
    "url": "files/FKJ - Joy-310532617.mp3"
  }, 
  {
    "artist": [
      "UKNOWY Music"
    ], 
    "date": [
      "20160129"
    ], 
    "length": 170.86956916099774, 
    "title": [
      "Flamingosis - Hidden Attraction"
    ], 
    "url": "files/Flamingosis - Hidden Attraction-244384625.mp3"
  }, 
  {
    "artist": [
      "future classic"
    ], 
    "date": [
      "20141110"
    ], 
    "length": 178.41632653061225, 
    "title": [
      "Flight Facilities - Two Bodies feat. Emma Louise (Lido Remix)"
    ], 
    "url": "files/Flight Facilities - Two Bodies feat. Emma Louise (Lido Remix)-176209033.mp3"
  }, 
  {
    "artist": [
      "Jakarta Records"
    ], 
    "date": [
      "20140723"
    ], 
    "length": 169.529410430839, 
    "title": [
      "FloFilz - Shawbreak (Taken from \"Summer In Jakarta\" Free DLL in description)"
    ], 
    "url": "files/FloFilz - Shawbreak (Taken from 'Summer In Jakarta' Free DLL in description)-159925848.mp3"
  }, 
  {
    "artist": [
      "Flyinglotus"
    ], 
    "date": [
      "20140511"
    ], 
    "length": 207.30775510204083, 
    "title": [
      "Flotus"
    ], 
    "url": "files/Flotus-148927360.mp3"
  }, 
  {
    "artist": [
      "SNAKEHIPS"
    ], 
    "date": [
      "20160214"
    ], 
    "length": 2274.0, 
    "title": [
      "Fly High 002: SFTB Valentines Special"
    ], 
    "url": "files/Fly High 002 - SFTB Valentines Special-247035571.mp3"
  }, 
  {
    "artist": [
      "TastyTreat"
    ], 
    "date": [
      "20151208"
    ], 
    "length": 253.20489795918368, 
    "title": [
      "For a Minute (feat. MOONZz)"
    ], 
    "url": "files/For a Minute (feat. MOONZz)-236699104.mp3"
  }, 
  {
    "artist": [
      "AJMW"
    ], 
    "date": [
      "20150207"
    ], 
    "encodedby": [
      "Logic Pro X"
    ], 
    "length": 196.41469387755103, 
    "title": [
      "for them"
    ], 
    "url": "files/for them-190009373.mp3"
  }, 
  {
    "artist": [
      "Tennyson"
    ], 
    "date": [
      "20140127"
    ], 
    "length": 153.20816326530613, 
    "title": [
      "For You"
    ], 
    "url": "files/For You-131715732.mp3"
  }, 
  {
    "artist": [
      "k?d"
    ], 
    "date": [
      "20161006"
    ], 
    "length": 123.5069387755102, 
    "title": [
      "forgotten"
    ], 
    "url": "files/forgotten-286436779.mp3"
  }, 
  {
    "artist": [
      "Wave Racer"
    ], 
    "date": [
      "20140603"
    ], 
    "length": 188.40473922902495, 
    "title": [
      "Foster The People - Best Friend (Wave Racer Remix)"
    ], 
    "url": "files/Foster The People - Best Friend (Wave Racer Remix)-152697040.mp3"
  }, 
  {
    "artist": [
      "B. Lewis"
    ], 
    "date": [
      "20140122"
    ], 
    "length": 190.72, 
    "title": [
      "Four Days Alone"
    ], 
    "url": "files/Four Days Alone-130858562.mp3"
  }, 
  {
    "artist": [
      "Louis Futon Beats"
    ], 
    "date": [
      "20170510"
    ], 
    "length": 204.06857142857143, 
    "title": [
      "Frank Ocean - Solo (Louis Futon Flip)"
    ], 
    "url": "files/Frank Ocean - Solo (Louis Futon Flip)-321958436.mp3"
  }, 
  {
    "artist": [
      "VNDMG"
    ], 
    "date": [
      "20120926"
    ], 
    "length": 238.4195918367347, 
    "title": [
      "Frantic"
    ], 
    "url": "files/Frantic-61204823.mp3"
  }, 
  {
    "artist": [
      "HW&W Recordings"
    ], 
    "date": [
      "20150407"
    ], 
    "length": 265.8653741496599, 
    "title": [
      "Freddie Gibbs & KAYTRANADA - My Dope House"
    ], 
    "url": "files/Freddie Gibbs & KAYTRANADA - My Dope House-199752301.mp3"
  }, 
  {
    "artist": [
      "SWEATER BEATS"
    ], 
    "date": [
      "20151125"
    ], 
    "length": 2231.567006802721, 
    "title": [
      "Future Feels Mix"
    ], 
    "url": "files/Future Feels Mix-234686779.mp3"
  }, 
  {
    "artist": [
      "Andrew Luce"
    ], 
    "date": [
      "20170214"
    ], 
    "length": 2223.825328798186, 
    "title": [
      "Get Lost In: Lust"
    ], 
    "url": "files/Get Lost In - Lust-307736504.mp3"
  }, 
  {
    "albumartist": [
      "Andre Power"
    ], 
    "artist": [
      "Andre Power"
    ], 
    "date": [
      "20151231"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 4800.3134693877555, 
    "title": [
      "Getting Lost In Foreign Places"
    ], 
    "url": "files/Getting Lost In Foreign Places-239872093.mp3"
  }, 
  {
    "artist": [
      "Fool's Gold Records"
    ], 
    "date": [
      "20141110"
    ], 
    "length": 191.47755102040816, 
    "title": [
      "Giraffage - Chocolate"
    ], 
    "url": "files/Giraffage - Chocolate-176242992.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 146.41632653061225, 
    "title": [
      "GoldLink - Velho (Freestyle) [Prod. by oriJanus]"
    ], 
    "url": "files/GoldLink - Velho (Freestyle) [Prod. by oriJanus]-166380903.mp3"
  }, 
  {
    "artist": [
      "GRiZ"
    ], 
    "date": [
      "20160920"
    ], 
    "length": 273.91755102040815, 
    "title": [
      "Gotta Push On (Ft. Brasstracks & Eric Krasno)"
    ], 
    "url": "files/Gotta Push On (Ft. Brasstracks & Eric Krasno)-283804621.mp3"
  }, 
  {
    "artist": [
      "graves"
    ], 
    "date": [
      "20160215"
    ], 
    "length": 166.94857142857143, 
    "title": [
      "graves & Havok Roth - Imaginary Friends [NEST HQ Premiere]"
    ], 
    "url": "files/graves & Havok Roth - Imaginary Friends [NEST HQ Premiere]-247205929.mp3"
  }, 
  {
    "artist": [
      "KEV"
    ], 
    "date": [
      "20161120"
    ], 
    "length": 253.79310657596372, 
    "title": [
      "Greens (2015)"
    ], 
    "url": "files/Greens (2015)-293969465.mp3"
  }, 
  {
    "artist": [
      "Jakarta Records"
    ], 
    "date": [
      "20140731"
    ], 
    "length": 288.0, 
    "title": [
      "Guts - Musicotherapy (Taken from \"Summer In Jakarta\", Free DLL in description)"
    ], 
    "url": "files/Guts - Musicotherapy (Taken from 'Summer In Jakarta', Free DLL in description)-161137455.mp3"
  }, 
  {
    "artist": [
      "onstreet."
    ], 
    "date": [
      "20160401"
    ], 
    "length": 250.35755102040815, 
    "title": [
      "Halpe - Emerald (Kuiters edition)[Free DL]"
    ], 
    "url": "files/Halpe - Emerald (Kuiters edition)[Free DL]-256781198.mp3"
  }, 
  {
    "length": 218.988, 
    "title": [
      "Hand In Hand feat. Lake Rescue"
    ], 
    "url": "files/Hand In Hand feat. Lake Rescue-26176283.mp3"
  }, 
  {
    "artist": [
      "Amelia Airhorn"
    ], 
    "date": [
      "20170613"
    ], 
    "length": 120.55510204081632, 
    "title": [
      "Hard 2 Get"
    ], 
    "url": "files/Hard 2 Get-327828102.mp3"
  }, 
  {
    "artist": [
      "Tate Tucker"
    ], 
    "date": [
      "20161130"
    ], 
    "length": 182.33469387755102, 
    "title": [
      "HCIBM"
    ], 
    "url": "files/HCIBM-295477740.mp3"
  }, 
  {
    "artist": [
      "\u20aa jetson"
    ], 
    "date": [
      "20170525"
    ], 
    "length": 82.43478458049887, 
    "title": [
      "hmu"
    ], 
    "url": "files/hmu-324374738.mp3"
  }, 
  {
    "artist": [
      "quickly, quickly"
    ], 
    "date": [
      "20170104"
    ], 
    "length": 160.84337868480725, 
    "title": [
      "hushed"
    ], 
    "url": "files/hushed-300863486.mp3"
  }, 
  {
    "artist": [
      "HW&W Recordings"
    ], 
    "date": [
      "20140325"
    ], 
    "length": 2494.9812244897957, 
    "title": [
      "HW&W Mix #11: Evil Needle - Back To The 90s"
    ], 
    "url": "files/HW&W Mix #11 - Evil Needle - Back To The 90s-141395238.mp3"
  }, 
  {
    "artist": [
      "Ting Christ"
    ], 
    "date": [
      "20170120"
    ], 
    "length": 120.50392290249434, 
    "title": [
      "I (Prod. by Taleil Brown)"
    ], 
    "url": "files/I (Prod. by Taleil Brown)-303596621.mp3"
  }, 
  {
    "artist": [
      "M-Phazes"
    ], 
    "date": [
      "20140321"
    ], 
    "length": 230.20195011337867, 
    "title": [
      "I Don't Wanna Fall In Love"
    ], 
    "url": "files/I Don't Wanna Fall In Love-140647185.mp3"
  }, 
  {
    "artist": [
      "SBTRKT"
    ], 
    "date": [
      "20160323"
    ], 
    "length": 204.45600907029478, 
    "title": [
      "I FEEL YOUR PAIN (feat. D.R.A.M. & Mabel)"
    ], 
    "url": "files/I FEEL YOUR PAIN (feat. D.R.A.M. & Mabel)-254695921.mp3"
  }, 
  {
    "artist": [
      "Ta-ku"
    ], 
    "date": [
      "20130711"
    ], 
    "length": 231.0008163265306, 
    "title": [
      "I Miss You"
    ], 
    "url": "files/I Miss You-100553360.mp3"
  }, 
  {
    "artist": [
      "tessellated"
    ], 
    "date": [
      "20160202"
    ], 
    "length": 87.14448979591836, 
    "title": [
      "i'm good (ode to chance)"
    ], 
    "url": "files/i'm good (ode to chance)-244985074.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 169.14285714285714, 
    "title": [
      "IAMNOBODI - When You Know It"
    ], 
    "url": "files/IAMNOBODI - When You Know It-166380908.mp3"
  }, 
  {
    "artist": [
      "BRAINFEEDER"
    ], 
    "date": [
      "20151028"
    ], 
    "length": 172.19918367346938, 
    "title": [
      "Iglooghost - 'Xiangjiao'"
    ], 
    "url": "files/Iglooghost - 'Xiangjiao'-230463988.mp3"
  }, 
  {
    "artist": [
      "coyote kisses"
    ], 
    "date": [
      "20150805"
    ], 
    "length": 216.55510204081634, 
    "title": [
      "illusion"
    ], 
    "url": "files/illusion-217923659.mp3"
  }, 
  {
    "artist": [
      "AARON LONDON"
    ], 
    "date": [
      "20150712"
    ], 
    "length": 221.68090702947845, 
    "title": [
      "In The Cut(ft. Masego)"
    ], 
    "url": "files/In The Cut(ft. Masego)-214361836.mp3"
  }, 
  {
    "artist": [
      "nerstylist"
    ], 
    "date": [
      "20170421"
    ], 
    "genre": [
      "Electronic"
    ], 
    "length": 3621.6163265306122, 
    "title": [
      "In Transit"
    ], 
    "url": "files/In Transit-318744789.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 3610.697142857143, 
    "title": [
      "INFINIT Session #1 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #1 (mixed by taimles)-300184666.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 2956.8522448979593, 
    "title": [
      "INFINIT Session #10 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #10 (mixed by taimles)-300214928.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 2830.08, 
    "title": [
      "INFINIT Session #11 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #11 (mixed by taimles)-300216308.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 2643.2522448979594, 
    "title": [
      "INFINIT Session #12 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #12 (mixed by taimles)-300218509.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 2753.1232653061224, 
    "title": [
      "INFINIT Session #13 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #13 (mixed by taimles)-300219928.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 3000.0326530612247, 
    "title": [
      "INFINIT Session #14 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #14 (mixed by taimles)-300221945.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 2929.6848979591837, 
    "title": [
      "INFINIT Session #15 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #15 (mixed by taimles)-300224361.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20170205"
    ], 
    "length": 4112.718367346939, 
    "title": [
      "INFINIT Session #16 (mixed By Taimles)"
    ], 
    "url": "files/INFINIT Session #16 (mixed By Taimles)-306261586.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20170312"
    ], 
    "length": 3750.138775510204, 
    "title": [
      "INFINIT Session #17 (mixed By Taimles)"
    ], 
    "url": "files/INFINIT Session #17 (mixed By Taimles)-311983965.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20170506"
    ], 
    "length": 2222.210612244898, 
    "title": [
      "INFINIT Session #18 (mixed by Taimles)"
    ], 
    "url": "files/INFINIT Session #18 (mixed by Taimles)-321248443.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 7801.051428571429, 
    "title": [
      "INFINIT Session #2 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #2 (mixed by taimles)-300190202.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 6622.406530612245, 
    "title": [
      "INFINIT Session #4 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #4 (mixed by taimles)-300191242.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 7389.074285714286, 
    "title": [
      "INFINIT Session #5 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #5 (mixed by taimles)-300193335.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 6434.377142857143, 
    "title": [
      "INFINIT Session #6 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #6 (mixed by taimles)-300195820.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 6129.94612244898, 
    "title": [
      "INFINIT Session #7 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #7 (mixed by taimles)-300198155.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 3845.4595918367345, 
    "title": [
      "INFINIT Session #8 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #8 (mixed by taimles)-300200985.mp3"
  }, 
  {
    "artist": [
      "INFINIT Remixes & Gems"
    ], 
    "date": [
      "20161230"
    ], 
    "length": 3177.691428571429, 
    "title": [
      "INFINIT Session #9 (mixed by taimles)"
    ], 
    "url": "files/INFINIT Session #9 (mixed by taimles)-300213450.mp3"
  }, 
  {
    "artist": [
      "Ta-ku"
    ], 
    "date": [
      "20131029"
    ], 
    "length": 2306.507755102041, 
    "title": [
      "INTERVIEW : SongsToBreakUpTo"
    ], 
    "url": "files/INTERVIEW  - SongsToBreakUpTo-117653746.mp3"
  }, 
  {
    "artist": [
      "Djemba Djemba"
    ], 
    "date": [
      "20150216"
    ], 
    "length": 198.03428571428572, 
    "title": [
      "Iris v2 feat Mr Carmack"
    ], 
    "url": "files/Iris v2 feat Mr Carmack-191363709.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 125.93632653061225, 
    "title": [
      "J-Louis - Perseverance"
    ], 
    "url": "files/J-Louis - Perseverance-166380855.mp3"
  }, 
  {
    "artist": [
      "medasin"
    ], 
    "date": [
      "20161101"
    ], 
    "length": 216.76208616780045, 
    "title": [
      "JAHKOY - California Heaven (Medasin Remix) ft. Schoolboy Q"
    ], 
    "url": "files/JAHKOY - California Heaven (Medasin Remix) ft. Schoolboy Q-291003107.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 266.44897959183675, 
    "title": [
      "Jarreau Vandal - Essence"
    ], 
    "url": "files/Jarreau Vandal - Essence-166380914.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 204.43428571428572, 
    "title": [
      "Jay Prince - All You"
    ], 
    "url": "files/Jay Prince - All You-166380868.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 227.84, 
    "title": [
      "JD. Reid - On Air"
    ], 
    "url": "files/JD. Reid - On Air-166380859.mp3"
  }, 
  {
    "artist": [
      "JNTHN STEIN"
    ], 
    "date": [
      "20170426"
    ], 
    "length": 227.97061224489795, 
    "title": [
      "JNTHN STEIN - Everything Is A Drug"
    ], 
    "url": "files/JNTHN STEIN - Everything Is A Drug-319544971.mp3"
  }, 
  {
    "artist": [
      "Pluto"
    ], 
    "date": [
      "20170406"
    ], 
    "length": 230.1370068027211, 
    "title": [
      "Jocelyn Alice - Bound To You (Pluto Remix)"
    ], 
    "url": "files/Jocelyn Alice - Bound To You (Pluto Remix)-316416596.mp3"
  }, 
  {
    "album": [
      "Joe Kay's \"Slowed\" Edits Vol. 1"
    ], 
    "artist": [
      "JOE KAY"
    ], 
    "date": [
      "20170109"
    ], 
    "encodedby": [
      "iTunes 12.5.4.42"
    ], 
    "genre": [
      "Easy Listening"
    ], 
    "length": 3162.435918367347, 
    "title": [
      "Joe Kay's \"Slowed\" Edits Vol. 1"
    ], 
    "url": "files/Joe Kay's 'Slowed' Edits Vol. 1-301630847.mp3"
  }, 
  {
    "artist": [
      "future classic"
    ], 
    "date": [
      "20170524"
    ], 
    "length": 216.571179138322, 
    "title": [
      "Jonti - SOH013 (Remix the House)"
    ], 
    "url": "files/Jonti - SOH013 (Remix the House)-324347901.mp3"
  }, 
  {
    "artist": [
      "JUAN Cristobal"
    ], 
    "date": [
      "20130729"
    ], 
    "length": 194.08979591836734, 
    "title": [
      "JUAN Cristobal - UTS (Under The Sheets) instrumental"
    ], 
    "url": "files/JUAN Cristobal - UTS (Under The Sheets) instrumental-103164310.mp3"
  }, 
  {
    "artist": [
      "e.t.m"
    ], 
    "date": [
      "20140310"
    ], 
    "length": 233.14285714285714, 
    "title": [
      "Justin Bieber - All That Matters (JerseyClub Remix by ETM)"
    ], 
    "url": "files/Justin Bieber - All That Matters (JerseyClub Remix by ETM)-138905320.mp3"
  }, 
  {
    "artist": [
      "TREKKIE TRAX"
    ], 
    "date": [
      "20150622"
    ], 
    "length": 253.7534693877551, 
    "title": [
      "KAN TAKAHIKO - NRG (Masayoshi Iimori Remix) [Nest HQ Premiere]"
    ], 
    "url": "files/KAN TAKAHIKO - NRG (Masayoshi Iimori Remix) [Nest HQ Premiere]-211403926.mp3"
  }, 
  {
    "artist": [
      "Kasbo"
    ], 
    "date": [
      "20170607"
    ], 
    "length": 3296.835918367347, 
    "title": [
      "Kasbo - Cry / Dance Mix_01"
    ], 
    "url": "files/Kasbo - Cry _ Dance Mix_01-326986685.mp3"
  }, 
  {
    "artist": [
      "GITCHII"
    ], 
    "date": [
      "20160325"
    ], 
    "length": 216.0356462585034, 
    "title": [
      "Kaskade & CID - US (OFFICIAL GITCHII REMIX)"
    ], 
    "url": "files/Kaskade & CID - US (OFFICIAL GITCHII REMIX)-255029285.mp3"
  }, 
  {
    "artist": [
      "Louis Futon Beats"
    ], 
    "date": [
      "20170503"
    ], 
    "length": 145.71428571428572, 
    "title": [
      "Kendrick Lamar - PRIDE. (Louis Futon Flip)"
    ], 
    "url": "files/Kendrick Lamar - PRIDE. (Louis Futon Flip)-320798238.mp3"
  }, 
  {
    "artist": [
      "steeziak."
    ], 
    "date": [
      "20160209"
    ], 
    "length": 162.40326530612245, 
    "title": [
      "KEV & steeziak - Crenshaw Blvd"
    ], 
    "url": "files/KEV & steeziak - Crenshaw Blvd-246229652.mp3"
  }, 
  {
    "artist": [
      "BLACK MONDAY"
    ], 
    "date": [
      "20160630"
    ], 
    "length": 183.0215873015873, 
    "title": [
      "Kevin Abstract - Michigan"
    ], 
    "url": "files/Kevin Abstract - Michigan-271634580.mp3"
  }, 
  {
    "artist": [
      "Brasstracks"
    ], 
    "date": [
      "20161219"
    ], 
    "length": 257.3675963718821, 
    "title": [
      "Khalid X Brasstracks - Whirlwind #songsfromscratch"
    ], 
    "url": "files/Khalid X Brasstracks - Whirlwind #songsfromscratch-298692176.mp3"
  }, 
  {
    "artist": [
      "Marcus Marr"
    ], 
    "date": [
      "20160301"
    ], 
    "length": 436.1462811791383, 
    "title": [
      "Killing Jar"
    ], 
    "url": "files/Killing Jar-249581894.mp3"
  }, 
  {
    "artist": [
      "Grynpyret"
    ], 
    "date": [
      "20161206"
    ], 
    "length": 205.07707482993197, 
    "title": [
      "Kites"
    ], 
    "url": "files/Kites-296526724.mp3"
  }, 
  {
    "artist": [
      "KLOKE"
    ], 
    "date": [
      "20140823"
    ], 
    "encodedby": [
      "iTunes 11.2.1"
    ], 
    "length": 1824.052244897959, 
    "title": [
      "Kloke Mix No.8 // Thrupence // Visual Gap"
    ], 
    "url": "files/Kloke Mix No.8 _ Thrupence _ Visual Gap-164352262.mp3"
  }, 
  {
    "artist": [
      "terrorhythm"
    ], 
    "date": [
      "20150320"
    ], 
    "length": 211.04326530612244, 
    "title": [
      "KRNE & Portrait - Italics VIP"
    ], 
    "url": "files/KRNE & Portrait - Italics VIP-196794345.mp3"
  }, 
  {
    "artist": [
      "SOULECTION GEMS"
    ], 
    "date": [
      "20170214"
    ], 
    "length": 3287.04, 
    "title": [
      "Kronika - Let's Chill 4Real."
    ], 
    "url": "files/Kronika - Let's Chill 4Real.-307722637.mp3"
  }, 
  {
    "artist": [
      "Film Noir"
    ], 
    "date": [
      "20151108"
    ], 
    "length": 233.37795918367348, 
    "title": [
      "Krs. ~ Faking It. w/ Mars Today, Khary, Maurice Moore & Kingbnjmn"
    ], 
    "url": "files/Krs. ~ Faking It. w_ Mars Today, Khary, Maurice Moore & Kingbnjmn-232183789.mp3"
  }, 
  {
    "artist": [
      "Ta-ku"
    ], 
    "date": [
      "20130924"
    ], 
    "length": 224.6008163265306, 
    "title": [
      "Krule Love"
    ], 
    "url": "files/Krule Love-112137051.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 213.44653061224489, 
    "title": [
      "Leland Aleem F\u0101kir - Momma's Hoopty"
    ], 
    "url": "files/Leland Aleem Fa\u0304kir - Momma's Hoopty-166380845.mp3"
  }, 
  {
    "artist": [
      "SMOOTH OPERATOR 3000"
    ], 
    "date": [
      "20160817"
    ], 
    "length": 171.13045351473923, 
    "title": [
      "LEPHONK"
    ], 
    "url": "files/LEPHONK-278705927.mp3"
  }, 
  {
    "artist": [
      "Lexdray"
    ], 
    "date": [
      "20161011"
    ], 
    "length": 4180.035918367347, 
    "title": [
      "Lexdray City Series - Volume 66 - Welcome to Woodstock - Mixed by Photay"
    ], 
    "url": "files/Lexdray City Series - Volume 66 - Welcome to Woodstock - Mixed by Photay-287196573.mp3"
  }, 
  {
    "artist": [
      "stwo"
    ], 
    "date": [
      "20140711"
    ], 
    "length": 198.79183673469387, 
    "title": [
      "Lido - Lost feat. Muri (Stwo Remix)"
    ], 
    "url": "files/Lido - Lost feat. Muri (Stwo Remix)-158258118.mp3"
  }, 
  {
    "artist": [
      "Eton Messy"
    ], 
    "date": [
      "20160404"
    ], 
    "length": 1302.732335600907, 
    "title": [
      "Lights on Mix for Monki on BBC 1xtra"
    ], 
    "url": "files/Lights on Mix for Monki on BBC 1xtra-257243751.mp3"
  }, 
  {
    "artist": [
      "Onetalk"
    ], 
    "date": [
      "20120716"
    ], 
    "length": 411.01167800453516, 
    "title": [
      "Little Dragon - Twice (Onetalk Remix)"
    ], 
    "url": "files/Little Dragon - Twice (Onetalk Remix)-53014690.mp3"
  }, 
  {
    "album": [
      "Make me Feel EP"
    ], 
    "albumartist": [
      "Lolica Tonica"
    ], 
    "artist": [
      "TREKKIE TRAX"
    ], 
    "date": [
      "20150826"
    ], 
    "length": 200.0, 
    "title": [
      "Lolica Tonica - Make me Feel"
    ], 
    "tracknumber": [
      "1"
    ], 
    "url": "files/Lolica Tonica - Make me Feel-220921731.mp3"
  }, 
  {
    "artist": [
      "Loose Lips"
    ], 
    "date": [
      "20160920"
    ], 
    "encodedby": [
      "Sound Forge Pro"
    ], 
    "length": 7986.625306122449, 
    "title": [
      "Loose Lips Show (Music Box Radio) - 12/09/16 - w/Strictly Kev (DJ Food)"
    ], 
    "url": "files/Loose Lips Show (Music Box Radio) - 12_09_16 - w_Strictly Kev (DJ Food)-283751504.mp3"
  }, 
  {
    "artist": [
      "quickly, quickly"
    ], 
    "date": [
      "20161203"
    ], 
    "length": 184.7711111111111, 
    "title": [
      "lost you"
    ], 
    "url": "files/lost you-295990448.mp3"
  }, 
  {
    "artist": [
      "Cavalier"
    ], 
    "date": [
      "20160215"
    ], 
    "length": 206.77884353741496, 
    "title": [
      "Lost"
    ], 
    "url": "files/Lost-247246032.mp3"
  }, 
  {
    "album": [
      "Soulection White Label: 015"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20150724"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 210.625306122449, 
    "title": [
      "Louie Lastic - I Need Girls"
    ], 
    "tracknumber": [
      "2/3"
    ], 
    "url": "files/Louie Lastic - I Need Girls-216199423.mp3"
  }, 
  {
    "album": [
      "Soulection White Label: 015"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20150724"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 172.4604081632653, 
    "title": [
      "Louie Lastic - Reactions"
    ], 
    "tracknumber": [
      "1/3"
    ], 
    "url": "files/Louie Lastic - Reactions-216199429.mp3"
  }, 
  {
    "album": [
      "Soulection White Label: 015"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20150724"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 179.98367346938775, 
    "title": [
      "Louie Lastic - Say Yes"
    ], 
    "tracknumber": [
      "3/3"
    ], 
    "url": "files/Louie Lastic - Say Yes-216199416.mp3"
  }, 
  {
    "artist": [
      "Louis Futon"
    ], 
    "date": [
      "20160407"
    ], 
    "encodedby": [
      "iTunes 12.3.3.17"
    ], 
    "length": 2789.5379591836736, 
    "title": [
      "Louis Futon - Zoned Out Vol. 1"
    ], 
    "url": "files/Louis Futon - Zoned Out Vol. 1-257824044.mp3"
  }, 
  {
    "artist": [
      "Ta-ku"
    ], 
    "date": [
      "20130522"
    ], 
    "length": 241.97224489795917, 
    "title": [
      "Love Lost"
    ], 
    "url": "files/Love Lost-93317308.mp3"
  }, 
  {
    "artist": [
      "rose"
    ], 
    "date": [
      "20160319"
    ], 
    "length": 132.04897959183674, 
    "title": [
      "lovely reasons"
    ], 
    "url": "files/lovely reasons-253275404.mp3"
  }, 
  {
    "artist": [
      "\u029f\u1d1c\u1d04\u1d00 \u029f\u1d1cs\u029c"
    ], 
    "date": [
      "20160525"
    ], 
    "length": 143.6734693877551, 
    "title": [
      "LUCA LUSH X MYRNE - LOW LIFE"
    ], 
    "url": "files/LUCA LUSH X MYRNE - LOW LIFE-265930012.mp3"
  }, 
  {
    "artist": [
      "slom"
    ], 
    "date": [
      "20160916"
    ], 
    "length": 190.01469387755103, 
    "title": [
      "Luhh(w/ j.robb)"
    ], 
    "url": "files/Luhh(w_ j.robb)-283157089.mp3"
  }, 
  {
    "artist": [
      "MISOGI"
    ], 
    "date": [
      "20150509"
    ], 
    "length": 261.60625850340136, 
    "title": [
      "LUNAR"
    ], 
    "url": "files/LUNAR-204713454.mp3"
  }, 
  {
    "artist": [
      "terrorhythm"
    ], 
    "date": [
      "20150617"
    ], 
    "length": 222.64163265306124, 
    "title": [
      "Mace - Touch Me"
    ], 
    "url": "files/Mace - Touch Me-210742378.mp3"
  }, 
  {
    "artist": [
      "medasin"
    ], 
    "date": [
      "20170324"
    ], 
    "length": 212.02603174603175, 
    "title": [
      "Martin Garrix - Scared To Be Lonely (Medasin Remix) ft. Dua Lipa"
    ], 
    "url": "files/Martin Garrix - Scared To Be Lonely (Medasin Remix) ft. Dua Lipa-314286890.mp3"
  }, 
  {
    "artist": [
      "Film Noir"
    ], 
    "date": [
      "20150620"
    ], 
    "length": 230.32163265306122, 
    "title": [
      "Masego x Medasin ~ Bounce"
    ], 
    "url": "files/Masego x Medasin ~ Bounce-211235551.mp3"
  }, 
  {
    "artist": [
      "Film Noir"
    ], 
    "date": [
      "20150620"
    ], 
    "length": 226.16922902494332, 
    "title": [
      "Masego x Medasin ~ Sunday Vibes"
    ], 
    "url": "files/Masego x Medasin ~ Sunday Vibes-211235537.mp3"
  }, 
  {
    "artist": [
      "Childish Gambino"
    ], 
    "date": [
      "20161101"
    ], 
    "length": 379.2266666666667, 
    "title": [
      "Me And Your Mama"
    ], 
    "url": "files/Me And Your Mama-290949554.mp3"
  }, 
  {
    "artist": [
      "Brasstracks"
    ], 
    "date": [
      "20160818"
    ], 
    "length": 250.52145124716554, 
    "title": [
      "Melanin Man (feat. Masego)"
    ], 
    "url": "files/Melanin Man (feat. Masego)-278816092.mp3"
  }, 
  {
    "artist": [
      "Maltine Records"
    ], 
    "date": [
      "20160314"
    ], 
    "length": 147.6, 
    "title": [
      "Mikeneko Homeless x Masayoshi Iimori - America feat. Nagi Nemoto(Nijicon)"
    ], 
    "url": "files/Mikeneko Homeless x Masayoshi Iimori - America feat. Nagi Nemoto(Nijicon)-251812304.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 293.3812244897959, 
    "title": [
      "Mikos Da Gawd - Love"
    ], 
    "url": "files/Mikos Da Gawd - Love-166380850.mp3"
  }, 
  {
    "album": [
      "Miss You Most (Single)"
    ], 
    "artist": [
      "Forward Thinkers Group"
    ], 
    "date": [
      "20140430"
    ], 
    "encodedby": [
      "iTunes 11.1.5"
    ], 
    "length": 248.328, 
    "title": [
      "Miss You Most (At Night), With Taku"
    ], 
    "url": "files/Miss You Most (At Night), With Taku-147160834.mp3"
  }, 
  {
    "artist": [
      "MITYA"
    ], 
    "date": [
      "20140921"
    ], 
    "length": 183.0117006802721, 
    "title": [
      "MITYA & Gillepsy - Jamal (Money) feat. Toussa [w/ Video]"
    ], 
    "url": "files/MITYA & Gillepsy - Jamal (Money) feat. Toussa [w_ Video]-168766993.mp3"
  }, 
  {
    "artist": [
      "THUMP"
    ], 
    "date": [
      "20150611"
    ], 
    "length": 3519.480997732426, 
    "title": [
      "MIXED BY Crookers"
    ], 
    "url": "files/MIXED BY Crookers-209906799.mp3"
  }, 
  {
    "album": [
      "Foreign Pedestrians"
    ], 
    "albumartist": [
      "Monster Rally & Jay Stone"
    ], 
    "artist": [
      "Monster Rally"
    ], 
    "date": [
      "20150203"
    ], 
    "genre": [
      "Hip-Hop"
    ], 
    "length": 318.42780045351475, 
    "title": [
      "Monster Rally & Jay Stone - Parthenogenesis (feat. Brandon Rayson)"
    ], 
    "tracknumber": [
      "7"
    ], 
    "url": "files/Monster Rally & Jay Stone - Parthenogenesis (feat. Brandon Rayson)-189325850.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 157.1004081632653, 
    "title": [
      "Mr. Carmack - Bells"
    ], 
    "url": "files/Mr. Carmack - Bells-166380880.mp3"
  }, 
  {
    "artist": [
      "J\u039bSMINE"
    ], 
    "date": [
      "20151116"
    ], 
    "length": 249.6261224489796, 
    "title": [
      "Never Let The Scene Girl Down"
    ], 
    "url": "files/Never Let The Scene Girl Down-233325942.mp3"
  }, 
  {
    "artist": [
      "Yiannis Ioannides"
    ], 
    "date": [
      "20160121"
    ], 
    "length": 266.0310204081633, 
    "title": [
      "New World Order"
    ], 
    "url": "files/New World Order-243079953.mp3"
  }, 
  {
    "artist": [
      "wearealaya"
    ], 
    "date": [
      "20170404"
    ], 
    "length": 1837.1609070294785, 
    "title": [
      "nohidea. - home movies"
    ], 
    "url": "files/nohidea. - home movies-316081472.mp3"
  }, 
  {
    "artist": [
      "Chillhop Music"
    ], 
    "date": [
      "20161010"
    ], 
    "length": 111.8458276643991, 
    "title": [
      "Nymano - Sorry"
    ], 
    "url": "files/Nymano - Sorry-286972218.mp3"
  }, 
  {
    "artist": [
      "Leaving Records"
    ], 
    "date": [
      "20160923"
    ], 
    "length": 401.1470068027211, 
    "title": [
      "Odd Nosdam - Endless feat. Teebs"
    ], 
    "url": "files/Odd Nosdam - Endless feat. Teebs-284312245.mp3"
  }, 
  {
    "artist": [
      "kl flips"
    ], 
    "date": [
      "20170109"
    ], 
    "length": 188.45181405895693, 
    "title": [
      "one more time 'fore i go"
    ], 
    "url": "files/one more time 'fore i go-301739556.mp3"
  }, 
  {
    "artist": [
      "FKJ"
    ], 
    "date": [
      "20140806"
    ], 
    "length": 312.0731746031746, 
    "title": [
      "Open the Door"
    ], 
    "url": "files/Open the Door-161943442.mp3"
  }, 
  {
    "artist": [
      "LTGL"
    ], 
    "date": [
      "20140806"
    ], 
    "length": 171.0, 
    "title": [
      "ORANGUTAN"
    ], 
    "url": "files/ORANGUTAN-161971342.mp3"
  }, 
  {
    "artist": [
      "MR\u2022CAR/\\\\ACK"
    ], 
    "date": [
      "20161106"
    ], 
    "encodedby": [
      "iTunes 11.2.2"
    ], 
    "length": 131.42204081632653, 
    "title": [
      "otis otis"
    ], 
    "url": "files/otis otis-291812166.mp3"
  }, 
  {
    "artist": [
      "Louis Futon"
    ], 
    "date": [
      "20150408"
    ], 
    "length": 220.57795918367347, 
    "title": [
      "Phony Ppl - End Of The Night (Louis Futon Remix) [Free Download]"
    ], 
    "url": "files/Phony Ppl - End Of The Night (Louis Futon Remix) [Free Download]-199865756.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 190.38040816326532, 
    "title": [
      "Photay - Astral Projection (Yung Gutted Remix)"
    ], 
    "tracknumber": [
      "4/9"
    ], 
    "url": "files/Photay - Astral Projection (Yung Gutted Remix)-202905047.mp3"
  }, 
  {
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20170223"
    ], 
    "length": 395.8595918367347, 
    "title": [
      "Photay - Bombogenesis"
    ], 
    "url": "files/Photay - Bombogenesis-309199913.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 881.2669387755102, 
    "title": [
      "Photay - Detox (Michael's Conversation With A Mountain Mix)"
    ], 
    "tracknumber": [
      "9/9"
    ], 
    "url": "files/Photay - Detox (Michael's Conversation With A Mountain Mix)-202904617.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 389.5640816326531, 
    "title": [
      "Photay - Dusk (Kallie Lampel Remix)"
    ], 
    "tracknumber": [
      "5/9"
    ], 
    "url": "files/Photay - Dusk (Kallie Lampel Remix)-202904970.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 195.13469387755103, 
    "title": [
      "Photay - Dusk (Orlando Volcano Remix)"
    ], 
    "tracknumber": [
      "7/9"
    ], 
    "url": "files/Photay - Dusk (Orlando Volcano Remix)-202904832.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 207.77795918367346, 
    "title": [
      "Photay - Illusion Of Seclusion (Aether Remix)"
    ], 
    "tracknumber": [
      "1/9"
    ], 
    "url": "files/Photay - Illusion Of Seclusion (Aether Remix)-202905225.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "encodedby": [
      "iTunes 12.0.1.26"
    ], 
    "length": 338.664, 
    "title": [
      "Photay - Illusion Of Seclusion (Fulgeance Remix)"
    ], 
    "tracknumber": [
      "6/9"
    ], 
    "url": "files/Photay - Illusion Of Seclusion (Fulgeance Remix)-202904884.mp3"
  }, 
  {
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20160229"
    ], 
    "length": 284.28800453514737, 
    "title": [
      "Photay - Monday (feat. Photay)"
    ], 
    "url": "files/Photay - Monday (feat. Photay)-249412055.mp3"
  }, 
  {
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20140612"
    ], 
    "length": 229.0938775510204, 
    "title": [
      "Photay - No Sass"
    ], 
    "url": "files/Photay - No Sass-153965941.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 181.62938775510204, 
    "title": [
      "Photay - Reconstruct (Maxo Remix)"
    ], 
    "tracknumber": [
      "3/9"
    ], 
    "url": "files/Photay - Reconstruct (Maxo Remix)-202905100.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 278.77877551020407, 
    "title": [
      "Photay - Static At The Summit (Dali Vision Remix)"
    ], 
    "tracknumber": [
      "8/9"
    ], 
    "url": "files/Photay - Static At The Summit (Dali Vision Remix)-202904771.mp3"
  }, 
  {
    "album": [
      "Photay Remixed"
    ], 
    "artist": [
      "Astro Nautico"
    ], 
    "date": [
      "20150428"
    ], 
    "length": 233.16897959183675, 
    "title": [
      "Photay - These Fruits, These Vegetables (Comanche Remix)"
    ], 
    "tracknumber": [
      "2/9"
    ], 
    "url": "files/Photay - These Fruits, These Vegetables (Comanche Remix)-202905176.mp3"
  }, 
  {
    "artist": [
      "PROJECT MOONCIRCLE"
    ], 
    "date": [
      "20170707"
    ], 
    "length": 621.8513832199546, 
    "title": [
      "PMC162 - submerse - Are You Anywhere (LP/CD-JP/Digital - Project: Mooncircle, 10/06/2017)"
    ], 
    "url": "files/PMC162 - submerse - Are You Anywhere (LP_CD-JP_Digital - Project - Mooncircle, 10_06_2017)-332065891.mp3"
  }, 
  {
    "artist": [
      "medasin"
    ], 
    "date": [
      "20170519"
    ], 
    "length": 194.43433106575964, 
    "title": [
      "Portugal The Man - Feel it Still (Medasin Remix)"
    ], 
    "url": "files/Portugal The Man - Feel it Still (Medasin Remix)-323431291.mp3"
  }, 
  {
    "artist": [
      "Pouya ."
    ], 
    "date": [
      "20161125"
    ], 
    "length": 142.35918367346937, 
    "title": [
      "Pouya - We All Not Shit (Prod. By Chevali)"
    ], 
    "url": "files/Pouya - We All Not Shit (Prod. By Chevali)-294793591.mp3"
  }, 
  {
    "artist": [
      "Point Point"
    ], 
    "date": [
      "20161122"
    ], 
    "length": 255.96648526077098, 
    "title": [
      "Power"
    ], 
    "url": "files/Power-294279693.mp3"
  }, 
  {
    "artist": [
      "e e v e e"
    ], 
    "date": [
      "20161221"
    ], 
    "length": 46.84451247165533, 
    "title": [
      "pure"
    ], 
    "url": "files/pure-298982125.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 206.81142857142856, 
    "title": [
      "PYRMDPLAZA - Mantralu"
    ], 
    "url": "files/PYRMDPLAZA - Mantralu-166380851.mp3"
  }, 
  {
    "artist": [
      "nymano"
    ], 
    "date": [
      "20141220"
    ], 
    "length": 127.24244897959184, 
    "title": [
      "quand la pluie tombe (also uploaded for The Visionary Collective tape)"
    ], 
    "url": "files/quand la pluie tombe (also uploaded for The Visionary Collective tape)-182404492.mp3"
  }, 
  {
    "artist": [
      "Film Noir"
    ], 
    "date": [
      "20170115"
    ], 
    "length": 228.8, 
    "title": [
      "quickly, quickly ~ What?"
    ], 
    "url": "files/quickly, quickly ~ What-302852091.mp3"
  }, 
  {
    "artist": [
      "harris cole"
    ], 
    "date": [
      "20150914"
    ], 
    "length": 82.28571428571429, 
    "title": [
      "rain, pt. 2"
    ], 
    "url": "files/rain, pt. 2-223864829.mp3"
  }, 
  {
    "artist": [
      "brandon*"
    ], 
    "date": [
      "20160201"
    ], 
    "length": 185.67836734693878, 
    "title": [
      "Raindrops & Rainbows"
    ], 
    "url": "files/Raindrops & Rainbows-244837317.mp3"
  }, 
  {
    "artist": [
      "Blue In Green"
    ], 
    "date": [
      "20101109"
    ], 
    "length": 155.5069387755102, 
    "title": [
      "Rainy Streets (\"The Break of Dawn\" VINYL coming in April!)"
    ], 
    "url": "files/Rainy Streets ('The Break of Dawn' VINYL coming in April!)-6846149.mp3"
  }, 
  {
    "artist": [
      "cool tweens"
    ], 
    "date": [
      "20160101"
    ], 
    "length": 168.0457142857143, 
    "title": [
      "real love"
    ], 
    "url": "files/real love-239905276.mp3"
  }, 
  {
    "artist": [
      "Numbers"
    ], 
    "date": [
      "20140724"
    ], 
    "length": 256.62666666666667, 
    "title": [
      "Redinho - Playing With Fire"
    ], 
    "url": "files/Redinho - Playing With Fire-160083857.mp3"
  }, 
  {
    "artist": [
      "SASHAMARIE"
    ], 
    "date": [
      "20150130"
    ], 
    "length": 2634.2574149659863, 
    "title": [
      "REFRESH"
    ], 
    "url": "files/REFRESH-188612777.mp3"
  }, 
  {
    "artist": [
      "Flamingosis"
    ], 
    "date": [
      "20160404"
    ], 
    "length": 204.25532879818593, 
    "title": [
      "Rhoda - For You (Flamingosis Remix)"
    ], 
    "url": "files/Rhoda - For You (Flamingosis Remix)-257286776.mp3"
  }, 
  {
    "album": [
      "www.theripe.tv"
    ], 
    "artist": [
      "Ripe"
    ], 
    "date": [
      "20140520"
    ], 
    "encodedby": [
      "iTunes 11.1.5"
    ], 
    "length": 2021.5379591836734, 
    "title": [
      "Ripe Guest Mix with HWLS"
    ], 
    "url": "files/Ripe Guest Mix with HWLS-150383458.mp3"
  }, 
  {
    "artist": [
      "Rock The Boat Ams"
    ], 
    "date": [
      "20170520"
    ], 
    "length": 3047.25283446712, 
    "title": [
      "Rock The Boat - 4 Year Anniversary Mix [by Crate & Lee]"
    ], 
    "url": "files/Rock The Boat - 4 Year Anniversary Mix [by Crate & Lee]-323696965.mp3"
  }, 
  {
    "artist": [
      "SASHAMARIE"
    ], 
    "date": [
      "20170428"
    ], 
    "length": 3631.856326530612, 
    "title": [
      "Rose Is A Rose"
    ], 
    "url": "files/Rose Is A Rose-319917478.mp3"
  }, 
  {
    "artist": [
      "C h i n s a k u"
    ], 
    "date": [
      "20160828"
    ], 
    "length": 338.8897052154195, 
    "title": [
      "S t r e e t s"
    ], 
    "url": "files/S t r e e t s-280271695.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 121.02530612244898, 
    "title": [
      "Sam Gellaitry x Connor Pearson - The Seems"
    ], 
    "url": "files/Sam Gellaitry x Connor Pearson - The Seems-166380879.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 209.5804081632653, 
    "title": [
      "Sango - Tell Me"
    ], 
    "url": "files/Sango - Tell Me-166380864.mp3"
  }, 
  {
    "artist": [
      "Porter Robinson"
    ], 
    "date": [
      "20150917"
    ], 
    "length": 181.1069387755102, 
    "title": [
      "Sea Of Voices (Galimatias Remix)"
    ], 
    "url": "files/Sea Of Voices (Galimatias Remix)-224304953.mp3"
  }, 
  {
    "artist": [
      "swindail"
    ], 
    "date": [
      "20161118"
    ], 
    "length": 178.22083900226758, 
    "title": [
      "seekae - turbine blue [swindail remix]"
    ], 
    "url": "files/seekae - turbine blue [swindail remix]-293573440.mp3"
  }, 
  {
    "artist": [
      "esta."
    ], 
    "date": [
      "20161128"
    ], 
    "length": 2073.862789115646, 
    "title": [
      "Self Help[mix]"
    ], 
    "url": "files/Self Help[mix]-295110203.mp3"
  }, 
  {
    "artist": [
      "\u00bfT\u00e9o?"
    ], 
    "date": [
      "20150601"
    ], 
    "length": 278.2302040816327, 
    "title": [
      "Selfless-ish (Prod. J Dilla)"
    ], 
    "url": "files/Selfless-ish (Prod. J Dilla)-208189996.mp3"
  }, 
  {
    "artist": [
      "TriAngleRecords"
    ], 
    "date": [
      "20160823"
    ], 
    "length": 269.60979591836735, 
    "title": [
      "serpentwithfeet - four ethers"
    ], 
    "url": "files/serpentwithfeet - four ethers-279514759.mp3"
  }, 
  {
    "artist": [
      "Billboard"
    ], 
    "date": [
      "20150316"
    ], 
    "length": 225.67183673469387, 
    "title": [
      "Shapes"
    ], 
    "url": "files/Shapes-196157921.mp3"
  }, 
  {
    "album": [
      "shh042: LLLL"
    ], 
    "artist": [
      "Secret Songs"
    ], 
    "date": [
      "20160329"
    ], 
    "encodedby": [
      "iTunes 12.3.2.35"
    ], 
    "genre": [
      "Classical"
    ], 
    "length": 197.736, 
    "title": [
      "shh042: LLLL - Sincerely Yours"
    ], 
    "url": "files/shh042 - LLLL - Sincerely Yours-255761470.mp3"
  }, 
  {
    "artist": [
      "TEK.LUN"
    ], 
    "date": [
      "20140714"
    ], 
    "length": 191.89551020408163, 
    "title": [
      "Show Me. Remember Me."
    ], 
    "url": "files/Show Me. Remember Me.-158701352.mp3"
  }, 
  {
    "artist": [
      "\ud83d\udd4a"
    ], 
    "date": [
      "20160615"
    ], 
    "length": 106.18775510204081, 
    "title": [
      "simon eng - blue"
    ], 
    "url": "files/simon eng - blue-269155625.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 218.04408163265308, 
    "title": [
      "Sivey - Pillow Talk"
    ], 
    "url": "files/Sivey - Pillow Talk-166380856.mp3"
  }, 
  {
    "artist": [
      "PYRMDPLAZA"
    ], 
    "date": [
      "20150103"
    ], 
    "length": 243.5821088435374, 
    "title": [
      "Skyloft"
    ], 
    "url": "files/Skyloft-184239653.mp3"
  }, 
  {
    "artist": [
      "GUNKST"
    ], 
    "date": [
      "20150917"
    ], 
    "length": 189.29578231292518, 
    "title": [
      "Slept 2 Death [Nest HQ Premiere]"
    ], 
    "url": "files/Slept 2 Death [Nest HQ Premiere]-224321700.mp3"
  }, 
  {
    "artist": [
      "bob le head"
    ], 
    "date": [
      "20160904"
    ], 
    "length": 48.76190476190476, 
    "title": [
      "snakes"
    ], 
    "url": "files/snakes-281400806.mp3"
  }, 
  {
    "artist": [
      "Childish Gambino"
    ], 
    "date": [
      "20140914"
    ], 
    "length": 252.08163265306123, 
    "title": [
      "Sober"
    ], 
    "url": "files/Sober-167701797.mp3"
  }, 
  {
    "artist": [
      "KAYTRANADA"
    ], 
    "date": [
      "20161011"
    ], 
    "length": 291.2130612244898, 
    "title": [
      "SOLANGE - CRANES IN THE SKY (KAYTRANADA DJ EDIT)"
    ], 
    "url": "files/SOLANGE - CRANES IN THE SKY (KAYTRANADA DJ EDIT)-287210543.mp3"
  }, 
  {
    "album": [
      "Solid Steel Radio Show"
    ], 
    "artist": [
      "Ninja Tune"
    ], 
    "date": [
      "20161219"
    ], 
    "encodedby": [
      "iTunes 12.3.2.35"
    ], 
    "genre": [
      "The Broadest Beats"
    ], 
    "length": 3571.121632653061, 
    "title": [
      "Solid Steel Radio Show 23/12/2016 Hour 2 - Nikitch"
    ], 
    "url": "files/Solid Steel Radio Show 23_12_2016 Hour 2 - Nikitch-298640257.mp3"
  }, 
  {
    "artist": [
      "Ninja Tune"
    ], 
    "date": [
      "20160622"
    ], 
    "length": 3783.941224489796, 
    "title": [
      "Solid Steel Radio Show 24/6/2016 Hour 1 - Moneyshot + Cheeba (Odelay Tribute Mix)"
    ], 
    "url": "files/Solid Steel Radio Show 24_6_2016 Hour 1 - Moneyshot + Cheeba (Odelay Tribute Mix)-270399928.mp3"
  }, 
  {
    "artist": [
      "Ninja Tune"
    ], 
    "date": [
      "20160323"
    ], 
    "length": 3733.10693877551, 
    "title": [
      "Solid Steel Radio Show 25/3/2016 Hour 1 - Kaytronik"
    ], 
    "url": "files/Solid Steel Radio Show 25_3_2016 Hour 1 - Kaytronik-254687549.mp3"
  }, 
  {
    "artist": [
      "Ninja Tune"
    ], 
    "date": [
      "20150929"
    ], 
    "length": 3592.3350113378683, 
    "title": [
      "Solid Steel Radio Show 2/10/2015 Hour 1 - HNNY"
    ], 
    "url": "files/Solid Steel Radio Show 2_10_2015 Hour 1 - HNNY-226101481.mp3"
  }, 
  {
    "artist": [
      "re:plus"
    ], 
    "date": [
      "20131215"
    ], 
    "length": 256.18285714285713, 
    "title": [
      "Solitude"
    ], 
    "url": "files/Solitude-124958228.mp3"
  }, 
  {
    "artist": [
      "nymano"
    ], 
    "date": [
      "20151005"
    ], 
    "length": 148.60117913832198, 
    "title": [
      "solitude"
    ], 
    "url": "files/solitude-227042825.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20150521"
    ], 
    "length": 7200.62693877551, 
    "title": [
      "Soulection Guest Mix for Diplo & Friends on BBC Radio 1xtra"
    ], 
    "url": "files/Soulection Guest Mix for Diplo & Friends on BBC Radio 1xtra-206590789.mp3"
  }, 
  {
    "album": [
      "26 March 2016"
    ], 
    "albumsort": [
      "26 March 2016"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "artistsort": [
      "Soulection Radio"
    ], 
    "date": [
      "20160401"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 7267.84, 
    "title": [
      "Soulection Radio Show #252 (Phife Dawg Tribute)"
    ], 
    "titlesort": [
      "Show #252 (Phife Dawg Tribute)"
    ], 
    "url": "files/Soulection Radio Show #252 (Phife Dawg Tribute)-256764963.mp3"
  }, 
  {
    "album": [
      "18 February 2017"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20170225"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 7239.862857142857, 
    "title": [
      "Soulection Radio Show #297"
    ], 
    "url": "files/Soulection Radio Show #297-309430274.mp3"
  }, 
  {
    "album": [
      "11 March 2017"
    ], 
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20170317"
    ], 
    "genre": [
      "SOULECTION"
    ], 
    "length": 10744.26775510204, 
    "title": [
      "Soulection Radio Show #300"
    ], 
    "url": "files/Soulection Radio Show #300-312946293.mp3"
  }, 
  {
    "artist": [
      "saib."
    ], 
    "date": [
      "20160716"
    ], 
    "length": 216.45167800453515, 
    "title": [
      "Spike Spiegel."
    ], 
    "url": "files/Spike Spiegel.-274001220.mp3"
  }, 
  {
    "artist": [
      "Rapzilla"
    ], 
    "date": [
      "20131204"
    ], 
    "length": 286.90285714285716, 
    "title": [
      "SPZRKT - U N I V E R S E [prod by @SangoBeats]"
    ], 
    "url": "files/SPZRKT - U N I V E R S E [prod by @SangoBeats]-123210326.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 190.19755102040816, 
    "title": [
      "starRo - Bout You"
    ], 
    "url": "files/starRo - Bout You-166380913.mp3"
  }, 
  {
    "artist": [
      "nightcorey"
    ], 
    "date": [
      "20150722"
    ], 
    "length": 194.1384126984127, 
    "title": [
      "Stay"
    ], 
    "url": "files/Stay-215787834.mp3"
  }, 
  {
    "artist": [
      "Elysian Records"
    ], 
    "date": [
      "20160222"
    ], 
    "length": 238.29514739229026, 
    "title": [
      "St\u00e9Louse & MYRNE - Call Me"
    ], 
    "url": "files/Ste\u0301Louse & MYRNE - Call Me-248360843.mp3"
  }, 
  {
    "artist": [
      "Sahar Habibi"
    ], 
    "date": [
      "20170417"
    ], 
    "length": 1971.4351020408162, 
    "title": [
      "Stick Wit U"
    ], 
    "url": "files/Stick Wit U-318098916.mp3"
  }, 
  {
    "artist": [
      "C418"
    ], 
    "date": [
      "20160926"
    ], 
    "length": 265.18519274376416, 
    "title": [
      "strange gambino"
    ], 
    "url": "files/strange gambino-284778524.mp3"
  }, 
  {
    "artist": [
      "kuma"
    ], 
    "date": [
      "20140419"
    ], 
    "length": 236.71233560090704, 
    "title": [
      "sumimasen"
    ], 
    "url": "files/sumimasen-145501729.mp3"
  }, 
  {
    "artist": [
      "jinsang."
    ], 
    "date": [
      "20140913"
    ], 
    "length": 180.34920634920636, 
    "title": [
      "Summer's Day. [v2]"
    ], 
    "url": "files/Summer's Day. [v2]-167505592.mp3"
  }, 
  {
    "artist": [
      "MateoDYNT"
    ], 
    "date": [
      "20140611"
    ], 
    "length": 212.84501133786847, 
    "title": [
      "Sun Goes Down - Jimmy Johnson"
    ], 
    "url": "files/Sun Goes Down - Jimmy Johnson-153804883.mp3"
  }, 
  {
    "artist": [
      "ameba."
    ], 
    "date": [
      "20161003"
    ], 
    "length": 121.65224489795918, 
    "title": [
      "sunday.night"
    ], 
    "url": "files/sunday.night-285785001.mp3"
  }, 
  {
    "artist": [
      "SYMBOLS"
    ], 
    "date": [
      "20140513"
    ], 
    "length": 302.5763265306122, 
    "title": [
      "Sweater Beats & Vindata - Where You Are ft. Bella Hunter"
    ], 
    "url": "files/Sweater Beats & Vindata - Where You Are ft. Bella Hunter-149265044.mp3"
  }, 
  {
    "artist": [
      "Thissongissick.com"
    ], 
    "date": [
      "20140421"
    ], 
    "length": 3599.152993197279, 
    "title": [
      "Sweater Beats - Diplo And Friends Mix 2014 [Thissongissick.com Exclusive Download]"
    ], 
    "url": "files/Sweater Beats - Diplo And Friends Mix 2014 [Thissongissick.com Exclusive Download]-145806926.mp3"
  }, 
  {
    "artist": [
      "{wav.god}"
    ], 
    "date": [
      "20140129"
    ], 
    "length": 187.2480045351474, 
    "title": [
      "Synergy"
    ], 
    "url": "files/Synergy-132066253.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 251.97714285714287, 
    "title": [
      "Ta-ku - CaseyBanks"
    ], 
    "url": "files/Ta-ku - CaseyBanks-166380871.mp3"
  }, 
  {
    "artist": [
      "HW&W Recordings"
    ], 
    "date": [
      "20131007"
    ], 
    "length": 266.76, 
    "title": [
      "Ta-ku - I Miss You More Feat. Atu"
    ], 
    "url": "files/Ta-ku - I Miss You More Feat. Atu-114242468.mp3"
  }, 
  {
    "artist": [
      "Jakarta Records"
    ], 
    "date": [
      "20160314"
    ], 
    "length": 122.79698412698413, 
    "title": [
      "Ta-ku - You&I (off \"brrwd love volume one\")"
    ], 
    "url": "files/Ta-ku - You&I (off 'brrwd love volume one')-251794865.mp3"
  }, 
  {
    "artist": [
      "Buygore"
    ], 
    "date": [
      "20160520"
    ], 
    "length": 184.2991156462585, 
    "title": [
      "TastyTreat - Ascension"
    ], 
    "url": "files/TastyTreat - Ascension-265085346.mp3"
  }, 
  {
    "artist": [
      "Djemba Djemba"
    ], 
    "date": [
      "20140430"
    ], 
    "length": 240.9534693877551, 
    "title": [
      "That Money"
    ], 
    "url": "files/That Money-147183469.mp3"
  }, 
  {
    "artist": [
      "Natalie Cressman"
    ], 
    "date": [
      "20151020"
    ], 
    "length": 240.0, 
    "title": [
      "The Hills (The Weeknd Cover)"
    ], 
    "url": "files/The Hills (The Weeknd Cover)-229282095.mp3"
  }, 
  {
    "artist": [
      "Insightful"
    ], 
    "date": [
      "20170612"
    ], 
    "length": 2495.0, 
    "title": [
      "the lovers path"
    ], 
    "url": "files/the lovers path-327623052.mp3"
  }, 
  {
    "artist": [
      "didi crazzz"
    ], 
    "date": [
      "20170607"
    ], 
    "length": 187.97714285714287, 
    "title": [
      "The Vibe jazz"
    ], 
    "url": "files/The Vibe jazz-327027991.mp3"
  }, 
  {
    "artist": [
      "domino"
    ], 
    "date": [
      "20170311"
    ], 
    "length": 114.00399092970521, 
    "title": [
      "Thoughts (Prod. KEV)"
    ], 
    "url": "files/Thoughts (Prod. KEV)-311874896.mp3"
  }, 
  {
    "artist": [
      "Pomo"
    ], 
    "date": [
      "20140426"
    ], 
    "length": 267.61063492063494, 
    "title": [
      "Tinashe - Vulnerable (Pomo Remix)"
    ], 
    "url": "files/Tinashe - Vulnerable (Pomo Remix)-146587000.mp3"
  }, 
  {
    "artist": [
      "Too Future Mixes"
    ], 
    "date": [
      "20160210"
    ], 
    "length": 3625.4884580498865, 
    "title": [
      "Too Future. Guest Mix 055: Robotaki"
    ], 
    "url": "files/Too Future. Guest Mix 055 - Robotaki-246412977.mp3"
  }, 
  {
    "artist": [
      "Too Future Mixes"
    ], 
    "date": [
      "20161116"
    ], 
    "length": 4000.1828571428573, 
    "title": [
      "Too Future. Guest Mix 069: Luca Lush"
    ], 
    "url": "files/Too Future. Guest Mix 069 - Luca Lush-293351192.mp3"
  }, 
  {
    "artist": [
      "Too Future Mixes"
    ], 
    "date": [
      "20170510"
    ], 
    "length": 2040.1371428571429, 
    "title": [
      "Too Future. Guest Mix 081: Saint WKND"
    ], 
    "url": "files/Too Future. Guest Mix 081 - Saint WKND-321941461.mp3"
  }, 
  {
    "artist": [
      "FALCONS"
    ], 
    "date": [
      "20140630"
    ], 
    "length": 206.3934693877551, 
    "title": [
      "Tory Lanez - R.I.D.E. (Falcons Remix)"
    ], 
    "url": "files/Tory Lanez - R.I.D.E. (Falcons Remix)-156730133.mp3"
  }, 
  {
    "artist": [
      "future classic"
    ], 
    "date": [
      "20130415"
    ], 
    "length": 349.4130612244898, 
    "title": [
      "Touch Sensitive - Pizza Guy"
    ], 
    "url": "files/Touch Sensitive - Pizza Guy-87943423.mp3"
  }, 
  {
    "artist": [
      "future classic"
    ], 
    "date": [
      "20141205"
    ], 
    "length": 264.1240816326531, 
    "title": [
      "Touch Sensitive - Teen Idols"
    ], 
    "url": "files/Touch Sensitive - Teen Idols-180029104.mp3"
  }, 
  {
    "artist": [
      "DOMINANT"
    ], 
    "date": [
      "20160629"
    ], 
    "length": 199.82031746031745, 
    "title": [
      "tryna keep calm, vibes flowing"
    ], 
    "url": "files/tryna keep calm, vibes flowing-271476164.mp3"
  }, 
  {
    "artist": [
      "BOILER ROOM"
    ], 
    "date": [
      "20170616"
    ], 
    "length": 3586.821224489796, 
    "title": [
      "Two Fresh Boiler Room x Budweiser Denver DJ Set"
    ], 
    "url": "files/Two Fresh Boiler Room x Budweiser Denver DJ Set-328445308.mp3"
  }, 
  {
    "artist": [
      "Nateicon"
    ], 
    "date": [
      "20160924"
    ], 
    "length": 174.3934693877551, 
    "title": [
      "Tyler, The Creator - Hey You (Prod. Toro Y Moi) LOOP edit"
    ], 
    "url": "files/Tyler, The Creator - Hey You (Prod. Toro Y Moi) LOOP edit-284394918.mp3"
  }, 
  {
    "artist": [
      "Penthouse Penthouse"
    ], 
    "date": [
      "20160627"
    ], 
    "length": 207.73834467120182, 
    "title": [
      "Upload - Penthouse Penthouse & Bobby Saint"
    ], 
    "url": "files/Upload - Penthouse Penthouse & Bobby Saint-271092645.mp3"
  }, 
  {
    "artist": [
      "J-Louis"
    ], 
    "date": [
      "20150425"
    ], 
    "length": 144.0, 
    "title": [
      "VicMensa-DownOnMyLuck( J-LOUIS Remix )"
    ], 
    "url": "files/VicMensa-DownOnMyLuck( J-LOUIS Remix )-202424711.mp3"
  }, 
  {
    "artist": [
      "Daniel Caesar"
    ], 
    "date": [
      "20140917"
    ], 
    "length": 144.03918367346938, 
    "title": [
      "Violet"
    ], 
    "url": "files/Violet-168160613.mp3"
  }, 
  {
    "artist": [
      "Team Supreme"
    ], 
    "date": [
      "20161018"
    ], 
    "length": 1488.4832653061223, 
    "title": [
      "Vol. 136 (\"Throw My Ball\" Cypher)"
    ], 
    "url": "files/Vol. 136 ('Throw My Ball' Cypher)-288836693.mp3"
  }, 
  {
    "artist": [
      "Joey Pecoraro"
    ], 
    "date": [
      "20150417"
    ], 
    "length": 130.66666666666666, 
    "title": [
      "Warm"
    ], 
    "url": "files/Warm-201247503.mp3"
  }, 
  {
    "artist": [
      "ok2222"
    ], 
    "date": [
      "20170610"
    ], 
    "length": 223.2, 
    "title": [
      "we fall (1 hour demo)"
    ], 
    "url": "files/we fall (1 hour demo)-327388364.mp3"
  }, 
  {
    "artist": [
      "Ta-ku"
    ], 
    "date": [
      "20130829"
    ], 
    "length": 229.0416326530612, 
    "title": [
      "We Were In Love"
    ], 
    "url": "files/We Were In Love-107753933.mp3"
  }, 
  {
    "artist": [
      "Penthouse Penthouse"
    ], 
    "date": [
      "20140923"
    ], 
    "length": 295.41877551020406, 
    "title": [
      "When It Rains (w/ Stwo)"
    ], 
    "url": "files/When It Rains (w_ Stwo)-169017493.mp3"
  }, 
  {
    "artist": [
      "[ bsd.u ]"
    ], 
    "date": [
      "20150909"
    ], 
    "length": 126.08054421768708, 
    "title": [
      "white widow"
    ], 
    "url": "files/white widow-223147448.mp3"
  }, 
  {
    "artist": [
      "SASHAMARIE"
    ], 
    "date": [
      "20161108"
    ], 
    "length": 2340.911020408163, 
    "title": [
      "wine, sleepy eyes & turbulence."
    ], 
    "url": "files/wine, sleepy eyes & turbulence.-292007801.mp3"
  }, 
  {
    "artist": [
      "nymano"
    ], 
    "date": [
      "20141023"
    ], 
    "length": 69.22448979591837, 
    "title": [
      "women (an extended version is available in \"short stories\" album)"
    ], 
    "url": "files/women (an extended version is available in 'short stories' album)-173540224.mp3"
  }, 
  {
    "artist": [
      "future classic"
    ], 
    "date": [
      "20151013"
    ], 
    "length": 216.11102040816326, 
    "title": [
      "World Champion - Avocado Galaxy (Lissvik Remix)"
    ], 
    "url": "files/World Champion - Avocado Galaxy (Lissvik Remix)-228166149.mp3"
  }, 
  {
    "artist": [
      "Louis The Child"
    ], 
    "date": [
      "20170324"
    ], 
    "length": 174.4, 
    "title": [
      "World On Fire (feat. Ashe)"
    ], 
    "url": "files/World On Fire (feat. Ashe)-314206080.mp3"
  }, 
  {
    "artist": [
      "Beck"
    ], 
    "date": [
      "20161005"
    ], 
    "length": 193.89333333333335, 
    "title": [
      "Wow (TOKiMONSTA Remix)"
    ], 
    "url": "files/Wow (TOKiMONSTA Remix)-286141637.mp3"
  }, 
  {
    "artist": [
      "snow garden"
    ], 
    "date": [
      "20160819"
    ], 
    "length": 176.22378684807256, 
    "title": [
      "yeah pretty much"
    ], 
    "url": "files/yeah pretty much-278966878.mp3"
  }, 
  {
    "artist": [
      "Young Futura"
    ], 
    "date": [
      "20161209"
    ], 
    "length": 173.58258503401362, 
    "title": [
      "Young Futura - Patience"
    ], 
    "url": "files/Young Futura - Patience-297072447.mp3"
  }, 
  {
    "artist": [
      "zack villere"
    ], 
    "date": [
      "20170528"
    ], 
    "length": 125.23591836734694, 
    "title": [
      "zack villere - cool"
    ], 
    "url": "files/zack villere - cool-324893643.mp3"
  }, 
  {
    "artist": [
      "SOULECTION"
    ], 
    "date": [
      "20140905"
    ], 
    "length": 261.04163265306124, 
    "title": [
      "Zikomo - Champion Riddim"
    ], 
    "url": "files/Zikomo - Champion Riddim-166380911.mp3"
  }, 
  {
    "album": [
      "[NC-06] FAST"
    ], 
    "albumartist": [
      "NITE CORP."
    ], 
    "artist": [
      "NITE CORP."
    ], 
    "date": [
      "20151007"
    ], 
    "genre": [
      "NXC"
    ], 
    "length": 233.6261224489796, 
    "title": [
      "~NxC::Exclusive~ - 2U"
    ], 
    "tracknumber": [
      "11/13"
    ], 
    "url": "files/~NxC - -Exclusive~ - 2U-227249520.mp3", 
    "version": [
      "155"
    ]
  }, 
  {
    "artist": [
      "rigly chang"
    ], 
    "date": [
      "20130219"
    ], 
    "length": 94.28571428571429, 
    "title": [
      "\u2248Freak\u2248"
    ], 
    "url": "files/\u2248Freak\u2248-79922293.mp3"
  }, 
  {
    "length": 121.05142857142857, 
    "title": [
      "\u591c\u306e\u732b"
    ], 
    "url": "files/\u591c\u306e\u732b-218440548.mp3"
  }, 
  {
    "artist": [
      "Saito"
    ], 
    "date": [
      "20160603"
    ], 
    "length": 65.93544217687075, 
    "title": [
      "\u7121\u984c (instrumental short ver.)"
    ], 
    "url": "files/\u7121\u984c (instrumental short ver.)-267394004.mp3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      filterText: ''
    };
  }

  render() {
    return (
      <div>
        <ReactAudioPlayer
          controls
          src={'http://localhost:5000/' + trackdata[this.state.selectedIndex]['url']} />
        <Playlist
          tracks={trackdata}
          selectedIndex={this.state.selectedIndex}
          filterText={this.state.filterText} />
      </div>
    );
  }
}

export default App;
