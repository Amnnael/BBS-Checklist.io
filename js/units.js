const baseImageUrl = "images/";

const units = [
  {
    id: 1,
    name: "Byakuya",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "001.png"
  },
  {
    id: 2,
    name: "Character 002",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "002.png"
  },
  {
    id: 3,
    name: "Character 003",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "003.png"
  },
  {
    id: 4,
    name: "Character 004",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "004.png"
  },
  {
    id: 5,
    name: "Character 005",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "005.png"
  },
  {
    id: 6,
    name: "Character 006",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "006.png"
  },
  {
    id: 7,
    name: "Character 007",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "007.png"
  },
  {
    id: 8,
    name: "Character 008",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "008.png"
  },
  {
    id: 9,
    name: "Character 009",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "009.png"
  },
  {
    id: 10,
    name: "Character 010",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "010.png"
  },
  {
    id: 11,
    name: "Character 011",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "011.png"
  },
  {
    id: 12,
    name: "Character 012",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "012.png"
  },
  {
    id: 13,
    name: "Character 013",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "013.png"
  },
  {
    id: 14,
    name: "Character 014",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "014.png"
  },
  {
    id: 15,
    name: "Character 015",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "015.png"
  },
  {
    id: 16,
    name: "Character 016",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "016.png"
  },
  {
    id: 17,
    name: "Character 017",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "017.png"
  },
  {
    id: 18,
    name: "Character 018",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "018.png"
  },
  {
    id: 19,
    name: "Character 019",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "019.png"
  },
  {
    id: 20,
    name: "Character 020",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "020.png"
  },
  {
    id: 21,
    name: "Character 021",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "021.png"
  },
  {
    id: 22,
    name: "Character 022",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "022.png"
  },
  {
    id: 23,
    name: "Character 023",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "023.png"
  },
  {
    id: 24,
    name: "Character 024",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "024.png"
  },
  {
    id: 25,
    name: "Character 025",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "025.png"
  },
  {
    id: 26,
    name: "Character 026",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "026.png"
  },
  {
    id: 27,
    name: "Character 027",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "027.png"
  },
  {
    id: 28,
    name: "Character 028",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "028.png"
  },
  {
    id: 29,
    name: "Character 029",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "029.png"
  },
  {
    id: 30,
    name: "Character 030",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "030.png"
  },
  {
    id: 31,
    name: "Character 031",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "031.png"
  },
  {
    id: 32,
    name: "Character 032",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "032.png"
  },
  {
    id: 33,
    name: "Character 033",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "033.png"
  },
  {
    id: 34,
    name: "Character 034",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "034.png"
  },
  {
    id: 35,
    name: "Character 035",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "035.png"
  },
  {
    id: 36,
    name: "Character 036",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "036.png"
  },
  {
    id: 37,
    name: "Character 037",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "037.png"
  },
  {
    id: 38,
    name: "Character 038",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "038.png"
  },
  {
    id: 39,
    name: "Character 039",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "039.png"
  },
  {
    id: 40,
    name: "Character 040",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "040.png"
  },
  {
    id: 41,
    name: "Character 041",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "041.png"
  },
  {
    id: 42,
    name: "Character 042",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "042.png"
  },
  {
    id: 43,
    name: "Character 043",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "043.png"
  },
  {
    id: 44,
    name: "Character 044",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "044.png"
  },
  {
    id: 45,
    name: "Character 045",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "045.png"
  },
  {
    id: 46,
    name: "Character 046",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "046.png"
  },
  {
    id: 47,
    name: "Character 047",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "047.png"
  },
  {
    id: 48,
    name: "Character 048",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "048.png"
  },
  {
    id: 49,
    name: "Character 049",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "049.png"
  },
  {
    id: 50,
    name: "Character 050",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "050.png"
  },
  {
    id: 51,
    name: "Character 051",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "051.png"
  },
  {
    id: 52,
    name: "Character 052",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "052.png"
  },
  {
    id: 53,
    name: "Character 053",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "053.png"
  },
  {
    id: 54,
    name: "Character 054",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "054.png"
  },
  {
    id: 55,
    name: "Character 055",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "055.png"
  },
  {
    id: 56,
    name: "Character 056",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "056.png"
  },
  {
    id: 57,
    name: "Character 057",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "057.png"
  },
  {
    id: 58,
    name: "Character 058",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "058.png"
  },
  {
    id: 59,
    name: "Character 059",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "059.png"
  },
  {
    id: 60,
    name: "Character 060",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "060.png"
  },
  {
    id: 61,
    name: "Character 061",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "061.png"
  },
  {
    id: 62,
    name: "Character 062",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "062.png"
  },
  {
    id: 63,
    name: "Character 063",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "063.png"
  },
  {
    id: 64,
    name: "Character 064",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "064.png"
  },
  {
    id: 65,
    name: "Character 065",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "065.png"
  },
  {
    id: 66,
    name: "Character 066",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "066.png"
  },
  {
    id: 67,
    name: "Character 067",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "067.png"
  },
  {
    id: 68,
    name: "Character 068",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "068.png"
  },
  {
    id: 69,
    name: "Character 069",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "069.png"
  },
  {
    id: 70,
    name: "Character 070",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "070.png"
  },
  {
    id: 71,
    name: "Character 071",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "071.png"
  },
  {
    id: 72,
    name: "Character 072",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "072.png"
  },
  {
    id: 73,
    name: "Character 073",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "073.png"
  },
  {
    id: 74,
    name: "Character 074",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "074.png"
  },
  {
    id: 75,
    name: "Character 075",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "075.png"
  },
  {
    id: 76,
    name: "Character 076",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "076.png"
  },
  {
    id: 77,
    name: "Character 077",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "077.png"
  },
  {
    id: 78,
    name: "Character 078",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "078.png"
  },
  {
    id: 79,
    name: "Character 079",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "079.png"
  },
  {
    id: 80,
    name: "Character 080",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "080.png"
  },
  {
    id: 81,
    name: "Character 081",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "081.png"
  },
  {
    id: 82,
    name: "Character 082",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "082.png"
  },
  {
    id: 83,
    name: "Character 083",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "083.png"
  },
  {
    id: 84,
    name: "Character 084",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "084.png"
  },
  {
    id: 85,
    name: "Character 085",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "085.png"
  },
  {
    id: 86,
    name: "Character 086",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "086.png"
  },
  {
    id: 87,
    name: "Character 087",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "087.png"
  },
  {
    id: 88,
    name: "Character 088",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "088.png"
  },
  {
    id: 89,
    name: "Character 089",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "089.png"
  },
  {
    id: 90,
    name: "Character 090",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "090.png"
  },
  {
    id: 91,
    name: "Character 091",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "091.png"
  },
  {
    id: 92,
    name: "Character 092",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "092.png"
  },
  {
    id: 93,
    name: "Character 093",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "093.png"
  },
  {
    id: 94,
    name: "Character 094",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "094.png"
  },
  {
    id: 95,
    name: "Character 095",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "095.png"
  },
  {
    id: 96,
    name: "Character 096",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "096.png"
  },
  {
    id: 97,
    name: "Character 097",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "097.png"
  },
  {
    id: 98,
    name: "Character 098",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "098.png"
  },
  {
    id: 99,
    name: "Character 099",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "099.png"
  },
  {
    id: 100,
    name: "Character 100",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "100.png"
  },
  {
    id: 101,
    name: "Character 101",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "101.png"
  },
  {
    id: 102,
    name: "Character 102",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "102.png"
  },
  {
    id: 103,
    name: "Character 103",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "103.png"
  },
  {
    id: 104,
    name: "Character 104",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "104.png"
  },
  {
    id: 105,
    name: "Character 105",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "105.png"
  },
  {
    id: 106,
    name: "Character 106",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "106.png"
  },
  {
    id: 107,
    name: "Character 107",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "107.png"
  },
  {
    id: 108,
    name: "Character 108",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "108.png"
  },
  {
    id: 109,
    name: "Character 109",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "109.png"
  },
  {
    id: 110,
    name: "Character 110",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "110.png"
  },
  {
    id: 111,
    name: "Character 111",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "111.png"
  },
  {
    id: 112,
    name: "Character 112",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "112.png"
  },
  {
    id: 113,
    name: "Character 113",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "113.png"
  },
  {
    id: 114,
    name: "Character 114",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "114.png"
  },
  {
    id: 115,
    name: "Character 115",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "115.png"
  },
  {
    id: 116,
    name: "Character 116",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "116.png"
  },
  {
    id: 117,
    name: "Character 117",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "117.png"
  },
  {
    id: 118,
    name: "Character 118",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "118.png"
  },
  {
    id: 119,
    name: "Character 119",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "119.png"
  },
  {
    id: 120,
    name: "Character 120",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "120.png"
  },
  {
    id: 121,
    name: "Character 121",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "121.png"
  },
  {
    id: 122,
    name: "Character 122",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "122.png"
  },
  {
    id: 123,
    name: "Character 123",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "123.png"
  },
  {
    id: 124,
    name: "Character 124",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "124.png"
  },
  {
    id: 125,
    name: "Character 125",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "125.png"
  },
  {
    id: 126,
    name: "Character 126",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "126.png"
  },
  {
    id: 127,
    name: "Character 127",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "127.png"
  },
  {
    id: 128,
    name: "Character 128",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "128.png"
  },
  {
    id: 129,
    name: "Character 129",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "129.png"
  },
  {
    id: 130,
    name: "Character 130",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "130.png"
  },
  {
    id: 131,
    name: "Character 131",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "131.png"
  },
  {
    id: 132,
    name: "Character 132",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "132.png"
  },
  {
    id: 133,
    name: "Character 133",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "133.png"
  },
  {
    id: 134,
    name: "Character 134",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "134.png"
  },
  {
    id: 135,
    name: "Character 135",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "135.png"
  },
  {
    id: 136,
    name: "Character 136",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "136.png"
  },
  {
    id: 137,
    name: "Character 137",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "137.png"
  },
  {
    id: 138,
    name: "Character 138",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "138.png"
  },
  {
    id: 139,
    name: "Character 139",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "139.png"
  },
  {
    id: 140,
    name: "Character 140",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "140.png"
  },
  {
    id: 141,
    name: "Character 141",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "141.png"
  },
  {
    id: 142,
    name: "Character 142",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "142.png"
  },
  {
    id: 143,
    name: "Character 143",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "143.png"
  },
  {
    id: 144,
    name: "Character 144",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "144.png"
  },
  {
    id: 145,
    name: "Character 145",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "145.png"
  },
  {
    id: 146,
    name: "Character 146",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "146.png"
  },
  {
    id: 147,
    name: "Character 147",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "147.png"
  },
  {
    id: 148,
    name: "Character 148",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "148.png"
  },
  {
    id: 149,
    name: "Character 149",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "149.png"
  },
  {
    id: 150,
    name: "Character 150",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "150.png"
  },
  {
    id: 151,
    name: "Character 151",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "151.png"
  },
  {
    id: 152,
    name: "Character 152",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "152.png"
  },
  {
    id: 153,
    name: "Character 153",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "153.png"
  },
  {
    id: 154,
    name: "Character 154",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "154.png"
  },
  {
    id: 155,
    name: "Character 155",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "155.png"
  },
  {
    id: 156,
    name: "Character 156",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "156.png"
  },
  {
    id: 157,
    name: "Character 157",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "157.png"
  },
  {
    id: 158,
    name: "Character 158",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "158.png"
  },
  {
    id: 159,
    name: "Character 159",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "159.png"
  },
  {
    id: 160,
    name: "Character 160",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "160.png"
  },
  {
    id: 161,
    name: "Character 161",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "161.png"
  },
  {
    id: 162,
    name: "Character 162",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "162.png"
  },
  {
    id: 163,
    name: "Character 163",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "163.png"
  },
  {
    id: 164,
    name: "Character 164",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "164.png"
  },
  {
    id: 165,
    name: "Character 165",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "165.png"
  },
  {
    id: 166,
    name: "Character 166",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "166.png"
  },
  {
    id: 167,
    name: "Character 167",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "167.png"
  },
  {
    id: 168,
    name: "Character 168",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "168.png"
  },
  {
    id: 169,
    name: "Character 169",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "169.png"
  },
  {
    id: 170,
    name: "Character 170",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "170.png"
  },
  {
    id: 171,
    name: "Character 171",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "171.png"
  },
  {
    id: 172,
    name: "Character 172",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "172.png"
  },
  {
    id: 173,
    name: "Character 173",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "173.png"
  },
  {
    id: 174,
    name: "Character 174",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "174.png"
  },
  {
    id: 175,
    name: "Character 175",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "175.png"
  },
  {
    id: 176,
    name: "Character 176",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "176.png"
  },
  {
    id: 177,
    name: "Character 177",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "177.png"
  },
  {
    id: 178,
    name: "Character 178",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "178.png"
  },
  {
    id: 179,
    name: "Character 179",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "179.png"
  },
  {
    id: 180,
    name: "Character 180",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "180.png"
  },
  {
    id: 181,
    name: "Character 181",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "181.png"
  },
  {
    id: 182,
    name: "Character 182",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "182.png"
  },
  {
    id: 183,
    name: "Character 183",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "183.png"
  },
  {
    id: 184,
    name: "Character 184",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "184.png"
  },
  {
    id: 185,
    name: "Character 185",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "185.png"
  },
  {
    id: 186,
    name: "Character 186",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "186.png"
  },
  {
    id: 187,
    name: "Character 187",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "187.png"
  },
  {
    id: 188,
    name: "Character 188",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "188.png"
  },
  {
    id: 189,
    name: "Character 189",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "189.png"
  },
  {
    id: 190,
    name: "Character 190",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "190.png"
  },
  {
    id: 191,
    name: "Character 191",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "191.png"
  },
  {
    id: 192,
    name: "Character 192",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "192.png"
  },
  {
    id: 193,
    name: "Character 193",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "193.png"
  },
  {
    id: 194,
    name: "Character 194",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "194.png"
  },
  {
    id: 195,
    name: "Character 195",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "195.png"
  },
  {
    id: 196,
    name: "Character 196",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "196.png"
  },
  {
    id: 197,
    name: "Character 197",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "197.png"
  },
  {
    id: 198,
    name: "Character 198",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "198.png"
  },
  {
    id: 199,
    name: "Character 199",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "199.png"
  },
  {
    id: 200,
    name: "Character 200",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "200.png"
  },
  {
    id: 201,
    name: "Character 201",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "201.png"
  },
  {
    id: 202,
    name: "Character 202",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "202.png"
  },
  {
    id: 203,
    name: "Character 203",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "203.png"
  },
  {
    id: 204,
    name: "Character 204",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "204.png"
  },
  {
    id: 205,
    name: "Character 205",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "205.png"
  },
  {
    id: 206,
    name: "Character 206",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "206.png"
  },
  {
    id: 207,
    name: "Character 207",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "207.png"
  },
  {
    id: 208,
    name: "Character 208",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "208.png"
  },
  {
    id: 209,
    name: "Character 209",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "209.png"
  },
  {
    id: 210,
    name: "Character 210",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "210.png"
  },
  {
    id: 211,
    name: "Character 211",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "211.png"
  },
  {
    id: 212,
    name: "Character 212",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "212.png"
  },
  {
    id: 213,
    name: "Character 213",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "213.png"
  },
  {
    id: 214,
    name: "Character 214",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "214.png"
  },
  {
    id: 215,
    name: "Character 215",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "215.png"
  },
  {
    id: 216,
    name: "Character 216",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "216.png"
  },
  {
    id: 217,
    name: "Character 217",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "217.png"
  },
  {
    id: 218,
    name: "Character 218",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "218.png"
  },
  {
    id: 219,
    name: "Character 219",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "219.png"
  },
  {
    id: 220,
    name: "Character 220",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "220.png"
  },
  {
    id: 221,
    name: "Character 221",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "221.png"
  },
  {
    id: 222,
    name: "Character 222",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "222.png"
  },
  {
    id: 223,
    name: "Character 223",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "223.png"
  },
  {
    id: 224,
    name: "Character 224",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "224.png"
  },
  {
    id: 225,
    name: "Character 225",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "225.png"
  },
  {
    id: 226,
    name: "Character 226",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "226.png"
  },
  {
    id: 227,
    name: "Character 227",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "227.png"
  },
  {
    id: 228,
    name: "Character 228",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "228.png"
  },
  {
    id: 229,
    name: "Character 229",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "229.png"
  },
  {
    id: 230,
    name: "Character 230",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "230.png"
  },
  {
    id: 231,
    name: "Character 231",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "231.png"
  },
  {
    id: 232,
    name: "Character 232",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "232.png"
  },
  {
    id: 233,
    name: "Character 233",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "233.png"
  },
  {
    id: 234,
    name: "Character 234",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "234.png"
  },
  {
    id: 235,
    name: "Character 235",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "235.png"
  },
  {
    id: 236,
    name: "Character 236",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "236.png"
  },
  {
    id: 237,
    name: "Character 237",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "237.png"
  },
  {
    id: 238,
    name: "Character 238",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "238.png"
  },
  {
    id: 239,
    name: "Character 239",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "239.png"
  },
  {
    id: 240,
    name: "Character 240",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "240.png"
  },
  {
    id: 241,
    name: "Character 241",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "241.png"
  },
  {
    id: 242,
    name: "Character 242",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "242.png"
  },
  {
    id: 243,
    name: "Character 243",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "243.png"
  },
  {
    id: 244,
    name: "Character 244",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "244.png"
  },
  {
    id: 245,
    name: "Character 245",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "245.png"
  },
  {
    id: 246,
    name: "Character 246",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "246.png"
  },
  {
    id: 247,
    name: "Character 247",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "247.png"
  },
  {
    id: 248,
    name: "Character 248",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "248.png"
  },
  {
    id: 249,
    name: "Character 249",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "249.png"
  },
  {
    id: 250,
    name: "Character 250",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "250.png"
  },
  {
    id: 251,
    name: "Character 251",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "251.png"
  },
  {
    id: 252,
    name: "Character 252",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "252.png"
  },
  {
    id: 253,
    name: "Character 253",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "253.png"
  },
  {
    id: 254,
    name: "Character 254",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "254.png"
  },
  {
    id: 255,
    name: "Character 255",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "255.png"
  },
  {
    id: 256,
    name: "Character 256",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "256.png"
  },
  {
    id: 257,
    name: "Character 257",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "257.png"
  },
  {
    id: 258,
    name: "Character 258",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "258.png"
  },
  {
    id: 259,
    name: "Character 259",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "259.png"
  },
  {
    id: 260,
    name: "Character 260",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "260.png"
  },
  {
    id: 261,
    name: "Character 261",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "261.png"
  },
  {
    id: 262,
    name: "Character 262",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "262.png"
  },
  {
    id: 263,
    name: "Character 263",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "263.png"
  },
  {
    id: 264,
    name: "Character 264",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "264.png"
  },
  {
    id: 265,
    name: "Character 265",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "265.png"
  },
  {
    id: 266,
    name: "Character 266",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "266.png"
  },
  {
    id: 267,
    name: "Character 267",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "267.png"
  },
  {
    id: 268,
    name: "Character 268",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "268.png"
  },
  {
    id: 269,
    name: "Character 269",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "269.png"
  },
  {
    id: 270,
    name: "Character 270",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "270.png"
  },
  {
    id: 271,
    name: "Character 271",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "271.png"
  },
  {
    id: 272,
    name: "Character 272",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "272.png"
  },
  {
    id: 273,
    name: "Character 273",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "273.png"
  },
  {
    id: 274,
    name: "Character 274",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "274.png"
  },
  {
    id: 275,
    name: "Character 275",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "275.png"
  },
  {
    id: 276,
    name: "Character 276",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "276.png"
  },
  {
    id: 277,
    name: "Character 277",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "277.png"
  },
  {
    id: 278,
    name: "Character 278",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "278.png"
  },
  {
    id: 279,
    name: "Character 279",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "279.png"
  },
  {
    id: 280,
    name: "Character 280",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "280.png"
  },
  {
    id: 281,
    name: "Character 281",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "281.png"
  },
  {
    id: 282,
    name: "Character 282",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "282.png"
  },
  {
    id: 283,
    name: "Character 283",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "283.png"
  },
  {
    id: 284,
    name: "Character 284",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "284.png"
  },
  {
    id: 285,
    name: "Character 285",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "285.png"
  },
  {
    id: 286,
    name: "Character 286",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "286.png"
  },
  {
    id: 287,
    name: "Character 287",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "287.png"
  },
  {
    id: 288,
    name: "Character 288",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "288.png"
  },
  {
    id: 289,
    name: "Character 289",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "289.png"
  },
  {
    id: 290,
    name: "Character 290",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "290.png"
  },
  {
    id: 291,
    name: "Character 291",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "291.png"
  },
  {
    id: 292,
    name: "Character 292",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "292.png"
  },
  {
    id: 293,
    name: "Character 293",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "293.png"
  },
  {
    id: 294,
    name: "Character 294",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "294.png"
  },
  {
    id: 295,
    name: "Character 295",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "295.png"
  },
  {
    id: 296,
    name: "Character 296",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "296.png"
  },
  {
    id: 297,
    name: "Character 297",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "297.png"
  },
  {
    id: 298,
    name: "Character 298",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "298.png"
  },
  {
    id: 299,
    name: "Character 299",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "299.png"
  },
  {
    id: 300,
    name: "Character 300",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "300.png"
  },
  {
    id: 301,
    name: "Character 301",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "301.png"
  },
  {
    id: 302,
    name: "Character 302",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "302.png"
  },
  {
    id: 303,
    name: "Character 303",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "303.png"
  },
  {
    id: 304,
    name: "Character 304",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "304.png"
  },
  {
    id: 305,
    name: "Character 305",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "305.png"
  },
  {
    id: 306,
    name: "Character 306",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "306.png"
  },
  {
    id: 307,
    name: "Character 307",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "307.png"
  },
  {
    id: 308,
    name: "Character 308",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "308.png"
  },
  {
    id: 309,
    name: "Character 309",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "309.png"
  },
  {
    id: 310,
    name: "Character 310",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "310.png"
  },
  {
    id: 311,
    name: "Character 311",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "311.png"
  },
  {
    id: 312,
    name: "Character 312",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "312.png"
  },
  {
    id: 313,
    name: "Character 313",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "313.png"
  },
  {
    id: 314,
    name: "Character 314",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "314.png"
  },
  {
    id: 315,
    name: "Character 315",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "315.png"
  },
  {
    id: 316,
    name: "Character 316",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "316.png"
  },
  {
    id: 317,
    name: "Character 317",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "317.png"
  },
  {
    id: 318,
    name: "Character 318",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "318.png"
  },
  {
    id: 319,
    name: "Character 319",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "319.png"
  },
  {
    id: 320,
    name: "Character 320",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "320.png"
  },
  {
    id: 321,
    name: "Character 321",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "321.png"
  },
  {
    id: 322,
    name: "Character 322",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "322.png"
  },
  {
    id: 323,
    name: "Character 323",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "323.png"
  },
  {
    id: 324,
    name: "Character 324",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "324.png"
  },
  {
    id: 325,
    name: "Character 325",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "325.png"
  },
  {
    id: 326,
    name: "Character 326",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "326.png"
  },
  {
    id: 327,
    name: "Character 327",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "327.png"
  },
  {
    id: 328,
    name: "Character 328",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "328.png"
  },
  {
    id: 329,
    name: "Character 329",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "329.png"
  },
  {
    id: 330,
    name: "Character 330",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "330.png"
  },
  {
    id: 331,
    name: "Character 331",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "331.png"
  },
  {
    id: 332,
    name: "Character 332",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "332.png"
  },
  {
    id: 333,
    name: "Character 333",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "333.png"
  },
  {
    id: 334,
    name: "Character 334",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "334.png"
  },
  {
    id: 335,
    name: "Character 335",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "335.png"
  },
  {
    id: 336,
    name: "Character 336",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "336.png"
  },
  {
    id: 337,
    name: "Character 337",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "337.png"
  },
  {
    id: 338,
    name: "Character 338",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "338.png"
  },
  {
    id: 339,
    name: "Character 339",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "339.png"
  },
  {
    id: 340,
    name: "Character 340",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "340.png"
  },
  {
    id: 341,
    name: "Character 341",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "341.png"
  },
  {
    id: 342,
    name: "Character 342",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "342.png"
  },
  {
    id: 343,
    name: "Character 343",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "343.png"
  },
  {
    id: 344,
    name: "Character 344",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "344.png"
  },
  {
    id: 345,
    name: "Character 345",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "345.png"
  },
  {
    id: 346,
    name: "Character 346",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "346.png"
  },
  {
    id: 347,
    name: "Character 347",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "347.png"
  },
  {
    id: 348,
    name: "Character 348",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "348.png"
  },
  {
    id: 349,
    name: "Character 349",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "349.png"
  },
  {
    id: 350,
    name: "Character 350",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "350.png"
  },
  {
    id: 351,
    name: "Character 351",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "351.png"
  },
  {
    id: 352,
    name: "Character 352",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "352.png"
  },
  {
    id: 353,
    name: "Character 353",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "353.png"
  },
  {
    id: 354,
    name: "Character 354",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "354.png"
  },
  {
    id: 355,
    name: "Character 355",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "355.png"
  },
  {
    id: 356,
    name: "Character 356",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "356.png"
  },
  {
    id: 357,
    name: "Character 357",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "357.png"
  },
  {
    id: 358,
    name: "Character 358",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "358.png"
  },
  {
    id: 359,
    name: "Character 359",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "359.png"
  },
  {
    id: 360,
    name: "Character 360",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "360.png"
  },
  {
    id: 361,
    name: "Character 361",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "361.png"
  },
  {
    id: 362,
    name: "Character 362",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "362.png"
  },
  {
    id: 363,
    name: "Character 363",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "363.png"
  },
  {
    id: 364,
    name: "Character 364",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "364.png"
  },
  {
    id: 365,
    name: "Character 365",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "365.png"
  },
  {
    id: 366,
    name: "Character 366",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "366.png"
  },
  {
    id: 367,
    name: "Character 367",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "367.png"
  },
  {
    id: 368,
    name: "Character 368",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "368.png"
  },
  {
    id: 369,
    name: "Character 369",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "369.png"
  },
  {
    id: 370,
    name: "Character 370",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "370.png"
  },
  {
    id: 371,
    name: "Character 371",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "371.png"
  },
  {
    id: 372,
    name: "Character 372",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "372.png"
  },
  {
    id: 373,
    name: "Character 373",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "373.png"
  },
  {
    id: 374,
    name: "Character 374",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "374.png"
  },
  {
    id: 375,
    name: "Character 375",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "375.png"
  },
  {
    id: 376,
    name: "Character 376",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "376.png"
  },
  {
    id: 377,
    name: "Character 377",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "377.png"
  },
  {
    id: 378,
    name: "Character 378",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "378.png"
  },
  {
    id: 379,
    name: "Character 379",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "379.png"
  },
  {
    id: 380,
    name: "Character 380",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "380.png"
  },
  {
    id: 381,
    name: "Character 381",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "381.png"
  },
  {
    id: 382,
    name: "Character 382",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "382.png"
  },
  {
    id: 383,
    name: "Character 383",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "383.png"
  },
  {
    id: 384,
    name: "Character 384",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "384.png"
  },
  {
    id: 385,
    name: "Character 385",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "385.png"
  },
  {
    id: 386,
    name: "Character 386",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "386.png"
  },
  {
    id: 387,
    name: "Character 387",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "387.png"
  },
  {
    id: 388,
    name: "Character 388",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "388.png"
  },
  {
    id: 389,
    name: "Character 389",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "389.png"
  },
  {
    id: 390,
    name: "Character 390",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "390.png"
  },
  {
    id: 391,
    name: "Character 391",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "391.png"
  },
  {
    id: 392,
    name: "Character 392",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "392.png"
  },
  {
    id: 393,
    name: "Character 393",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "393.png"
  },
  {
    id: 394,
    name: "Character 394",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "394.png"
  },
  {
    id: 395,
    name: "Character 395",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "395.png"
  },
  {
    id: 396,
    name: "Character 396",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "396.png"
  },
  {
    id: 397,
    name: "Character 397",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "397.png"
  },
  {
    id: 398,
    name: "Character 398",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "398.png"
  },
  {
    id: 399,
    name: "Character 399",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "399.png"
  },
  {
    id: 400,
    name: "Character 400",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "400.png"
  },
  {
    id: 401,
    name: "Character 401",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "401.png"
  },
  {
    id: 402,
    name: "Character 402",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "402.png"
  },
  {
    id: 403,
    name: "Character 403",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "403.png"
  },
  {
    id: 404,
    name: "Character 404",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "404.png"
  },
  {
    id: 405,
    name: "Character 405",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "405.png"
  },
  {
    id: 406,
    name: "Character 406",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "406.png"
  },
  {
    id: 407,
    name: "Character 407",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "407.png"
  },
  {
    id: 408,
    name: "Character 408",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "408.png"
  },
  {
    id: 409,
    name: "Character 409",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "409.png"
  },
  {
    id: 410,
    name: "Character 410",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "410.png"
  },
  {
    id: 411,
    name: "Character 411",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "411.png"
  },
  {
    id: 412,
    name: "Character 412",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "412.png"
  },
  {
    id: 413,
    name: "Character 413",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "413.png"
  },
  {
    id: 414,
    name: "Character 414",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "414.png"
  },
  {
    id: 415,
    name: "Character 415",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "415.png"
  },
  {
    id: 416,
    name: "Character 416",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "416.png"
  },
  {
    id: 417,
    name: "Character 417",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "417.png"
  },
  {
    id: 418,
    name: "Character 418",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "418.png"
  },
  {
    id: 419,
    name: "Character 419",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "419.png"
  },
  {
    id: 420,
    name: "Character 420",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "420.png"
  },
  {
    id: 421,
    name: "Character 421",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "421.png"
  },
  {
    id: 422,
    name: "Character 422",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "422.png"
  },
  {
    id: 423,
    name: "Character 423",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "423.png"
  },
  {
    id: 424,
    name: "Character 424",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "424.png"
  },
  {
    id: 425,
    name: "Character 425",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "425.png"
  },
  {
    id: 426,
    name: "Character 426",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "426.png"
  },
  {
    id: 427,
    name: "Character 427",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "427.png"
  },
  {
    id: 428,
    name: "Character 428",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "428.png"
  },
  {
    id: 429,
    name: "Character 429",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "429.png"
  },
  {
    id: 430,
    name: "Character 430",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "430.png"
  },
  {
    id: 431,
    name: "Character 431",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "431.png"
  },
  {
    id: 432,
    name: "Character 432",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "432.png"
  },
  {
    id: 433,
    name: "Character 433",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "433.png"
  },
  {
    id: 434,
    name: "Character 434",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "434.png"
  },
  {
    id: 435,
    name: "Character 435",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "435.png"
  },
  {
    id: 436,
    name: "Character 436",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "436.png"
  },
  {
    id: 437,
    name: "Character 437",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "437.png"
  },
  {
    id: 438,
    name: "Character 438",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "438.png"
  },
  {
    id: 439,
    name: "Character 439",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "439.png"
  },
  {
    id: 440,
    name: "Character 440",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "440.png"
  },
  {
    id: 441,
    name: "Character 441",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "441.png"
  },
  {
    id: 442,
    name: "Character 442",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "442.png"
  },
  {
    id: 443,
    name: "Character 443",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "443.png"
  },
  {
    id: 444,
    name: "Character 444",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "444.png"
  },
  {
    id: 445,
    name: "Character 445",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "445.png"
  },
  {
    id: 446,
    name: "Character 446",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "446.png"
  },
  {
    id: 447,
    name: "Character 447",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "447.png"
  },
  {
    id: 448,
    name: "Character 448",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "448.png"
  },
  {
    id: 449,
    name: "Character 449",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "449.png"
  },
  {
    id: 450,
    name: "Character 450",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "450.png"
  },
  {
    id: 451,
    name: "Character 451",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "451.png"
  },
  {
    id: 452,
    name: "Character 452",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "452.png"
  },
  {
    id: 453,
    name: "Character 453",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "453.png"
  },
  {
    id: 454,
    name: "Character 454",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "454.png"
  },
  {
    id: 455,
    name: "Character 455",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "455.png"
  },
  {
    id: 456,
    name: "Character 456",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "456.png"
  },
  {
    id: 457,
    name: "Character 457",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "457.png"
  },
  {
    id: 458,
    name: "Character 458",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "458.png"
  },
  {
    id: 459,
    name: "Character 459",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "459.png"
  },
  {
    id: 460,
    name: "Character 460",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "460.png"
  },
  {
    id: 461,
    name: "Character 461",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "461.png"
  },
  {
    id: 462,
    name: "Character 462",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "462.png"
  },
  {
    id: 463,
    name: "Character 463",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "463.png"
  },
  {
    id: 464,
    name: "Character 464",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "464.png"
  },
  {
    id: 465,
    name: "Character 465",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "465.png"
  },
  {
    id: 466,
    name: "Character 466",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "466.png"
  },
  {
    id: 467,
    name: "Character 467",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "467.png"
  },
  {
    id: 468,
    name: "Character 468",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "468.png"
  },
  {
    id: 469,
    name: "Character 469",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "469.png"
  },
  {
    id: 470,
    name: "Character 470",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "470.png"
  },
  {
    id: 471,
    name: "Character 471",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "471.png"
  },
  {
    id: 472,
    name: "Character 472",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "472.png"
  },
  {
    id: 473,
    name: "Character 473",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "473.png"
  },
  {
    id: 474,
    name: "Character 474",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "474.png"
  },
  {
    id: 475,
    name: "Character 475",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "475.png"
  },
  {
    id: 476,
    name: "Character 476",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "476.png"
  },
  {
    id: 477,
    name: "Character 477",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "477.png"
  },
  {
    id: 478,
    name: "Character 478",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "478.png"
  },
  {
    id: 479,
    name: "Character 479",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "479.png"
  },
  {
    id: 480,
    name: "Character 480",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "480.png"
  },
  {
    id: 481,
    name: "Character 481",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "481.png"
  },
  {
    id: 482,
    name: "Character 482",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "482.png"
  },
  {
    id: 483,
    name: "Character 483",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "483.png"
  },
  {
    id: 484,
    name: "Character 484",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "484.png"
  },
  {
    id: 485,
    name: "Character 485",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "485.png"
  },
  {
    id: 486,
    name: "Character 486",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "486.png"
  },
  {
    id: 487,
    name: "Character 487",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "487.png"
  },
  {
    id: 488,
    name: "Character 488",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "488.png"
  },
  {
    id: 489,
    name: "Character 489",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "489.png"
  },
  {
    id: 490,
    name: "Character 490",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "490.png"
  },
  {
    id: 491,
    name: "Character 491",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "491.png"
  },
  {
    id: 492,
    name: "Character 492",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "492.png"
  },
  {
    id: 493,
    name: "Character 493",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "493.png"
  },
  {
    id: 494,
    name: "Character 494",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "494.png"
  },
  {
    id: 495,
    name: "Character 495",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "495.png"
  },
  {
    id: 496,
    name: "Character 496",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "496.png"
  },
  {
    id: 497,
    name: "Character 497",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "497.png"
  },
  {
    id: 498,
    name: "Character 498",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "498.png"
  },
  {
    id: 499,
    name: "Character 499",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "499.png"
  },
  {
    id: 500,
    name: "Character 500",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "500.png"
  },
  {
    id: 501,
    name: "Character 501",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "501.png"
  },
  {
    id: 502,
    name: "Character 502",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "502.png"
  },
  {
    id: 503,
    name: "Character 503",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "503.png"
  },
  {
    id: 504,
    name: "Character 504",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "504.png"
  },
  {
    id: 505,
    name: "Character 505",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "505.png"
  },
  {
    id: 506,
    name: "Character 506",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "506.png"
  },
  {
    id: 507,
    name: "Character 507",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "507.png"
  },
  {
    id: 508,
    name: "Character 508",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "508.png"
  },
  {
    id: 509,
    name: "Character 509",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "509.png"
  },
  {
    id: 510,
    name: "Character 510",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "510.png"
  },
  {
    id: 511,
    name: "Character 511",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "511.png"
  },
  {
    id: 512,
    name: "Character 512",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "512.png"
  },
  {
    id: 513,
    name: "Character 513",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "513.png"
  },
  {
    id: 514,
    name: "Character 514",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "514.png"
  },
  {
    id: 515,
    name: "Character 515",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "515.png"
  },
  {
    id: 516,
    name: "Character 516",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "516.png"
  },
  {
    id: 517,
    name: "Character 517",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "517.png"
  },
  {
    id: 518,
    name: "Character 518",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "518.png"
  },
  {
    id: 519,
    name: "Character 519",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "519.png"
  },
  {
    id: 520,
    name: "Character 520",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "520.png"
  },
  {
    id: 521,
    name: "Character 521",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "521.png"
  },
  {
    id: 522,
    name: "Character 522",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "522.png"
  },
  {
    id: 523,
    name: "Character 523",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "523.png"
  },
  {
    id: 524,
    name: "Character 524",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "524.png"
  },
  {
    id: 525,
    name: "Character 525",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "525.png"
  },
  {
    id: 526,
    name: "Character 526",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "526.png"
  },
  {
    id: 527,
    name: "Character 527",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "527.png"
  },
  {
    id: 528,
    name: "Character 528",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "528.png"
  },
  {
    id: 529,
    name: "Character 529",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "529.png"
  },
  {
    id: 530,
    name: "Character 530",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "530.png"
  },
  {
    id: 531,
    name: "Character 531",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "531.png"
  },
  {
    id: 532,
    name: "Character 532",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "532.png"
  },
  {
    id: 533,
    name: "Character 533",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "533.png"
  },
  {
    id: 534,
    name: "Character 534",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "534.png"
  },
  {
    id: 535,
    name: "Character 535",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "535.png"
  },
  {
    id: 536,
    name: "Character 536",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "536.png"
  },
  {
    id: 537,
    name: "Character 537",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "537.png"
  },
  {
    id: 538,
    name: "Character 538",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "538.png"
  },
  {
    id: 539,
    name: "Character 539",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "539.png"
  },
  {
    id: 540,
    name: "Character 540",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "540.png"
  },
  {
    id: 541,
    name: "Character 541",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "541.png"
  },
  {
    id: 542,
    name: "Character 542",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "542.png"
  },
  {
    id: 543,
    name: "Character 543",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "543.png"
  },
  {
    id: 544,
    name: "Character 544",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "544.png"
  },
  {
    id: 545,
    name: "Character 545",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "545.png"
  },
  {
    id: 546,
    name: "Character 546",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "546.png"
  },
  {
    id: 547,
    name: "Character 547",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "547.png"
  },
  {
    id: 548,
    name: "Character 548",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "548.png"
  },
  {
    id: 549,
    name: "Character 549",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "549.png"
  },
  {
    id: 550,
    name: "Character 550",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "550.png"
  },
  {
    id: 551,
    name: "Character 551",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "551.png"
  },
  {
    id: 552,
    name: "Character 552",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "552.png"
  },
  {
    id: 553,
    name: "Character 553",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "553.png"
  },
  {
    id: 554,
    name: "Character 554",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "554.png"
  },
  {
    id: 555,
    name: "Character 555",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "555.png"
  },
  {
    id: 556,
    name: "Character 556",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "556.png"
  },
  {
    id: 557,
    name: "Character 557",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "557.png"
  },
  {
    id: 558,
    name: "Character 558",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "558.png"
  },
  {
    id: 559,
    name: "Character 559",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "559.png"
  },
  {
    id: 560,
    name: "Character 560",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "560.png"
  },
  {
    id: 561,
    name: "Character 561",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "561.png"
  },
  {
    id: 562,
    name: "Character 562",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "562.png"
  },
  {
    id: 563,
    name: "Character 563",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "563.png"
  },
  {
    id: 564,
    name: "Character 564",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "564.png"
  },
  {
    id: 565,
    name: "Character 565",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "565.png"
  },
  {
    id: 566,
    name: "Character 566",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "566.png"
  },
  {
    id: 567,
    name: "Character 567",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "567.png"
  },
  {
    id: 568,
    name: "Character 568",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "568.png"
  },
  {
    id: 569,
    name: "Character 569",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "569.png"
  },
  {
    id: 570,
    name: "Character 570",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "570.png"
  },
  {
    id: 571,
    name: "Character 571",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "571.png"
  },
  {
    id: 572,
    name: "Character 572",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "572.png"
  },
  {
    id: 573,
    name: "Character 573",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "573.png"
  },
  {
    id: 574,
    name: "Character 574",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "574.png"
  },
  {
    id: 575,
    name: "Character 575",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "575.png"
  },
  {
    id: 576,
    name: "Character 576",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "576.png"
  },
  {
    id: 577,
    name: "Character 577",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "577.png"
  },
  {
    id: 578,
    name: "Character 578",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "578.png"
  },
  {
    id: 579,
    name: "Character 579",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "579.png"
  },
  {
    id: 580,
    name: "Character 580",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "580.png"
  },
  {
    id: 581,
    name: "Character 581",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "581.png"
  },
  {
    id: 582,
    name: "Character 582",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "582.png"
  },
  {
    id: 583,
    name: "Character 583",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "583.png"
  },
  {
    id: 584,
    name: "Character 584",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "584.png"
  },
  {
    id: 585,
    name: "Character 585",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "585.png"
  },
  {
    id: 586,
    name: "Character 586",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "586.png"
  },
  {
    id: 587,
    name: "Character 587",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "587.png"
  },
  {
    id: 588,
    name: "Character 588",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "588.png"
  },
  {
    id: 589,
    name: "Character 589",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "589.png"
  },
  {
    id: 590,
    name: "Character 590",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "590.png"
  },
  {
    id: 591,
    name: "Character 591",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "591.png"
  },
  {
    id: 592,
    name: "Character 592",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "592.png"
  },
  {
    id: 593,
    name: "Character 593",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "593.png"
  },
  {
    id: 594,
    name: "Character 594",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "594.png"
  },
  {
    id: 595,
    name: "Character 595",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "595.png"
  },
  {
    id: 596,
    name: "Character 596",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "596.png"
  },
  {
    id: 597,
    name: "Character 597",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "597.png"
  },
  {
    id: 598,
    name: "Character 598",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "598.png"
  },
  {
    id: 599,
    name: "Character 599",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "599.png"
  },
  {
    id: 600,
    name: "Character 600",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "600.png"
  },
  {
    id: 601,
    name: "Character 601",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "601.png"
  },
  {
    id: 602,
    name: "Character 602",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "602.png"
  },
  {
    id: 603,
    name: "Character 603",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "603.png"
  },
  {
    id: 604,
    name: "Character 604",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "604.png"
  },
  {
    id: 605,
    name: "Character 605",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "605.png"
  },
  {
    id: 606,
    name: "Character 606",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "606.png"
  },
  {
    id: 607,
    name: "Character 607",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "607.png"
  },
  {
    id: 608,
    name: "Character 608",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "608.png"
  },
  {
    id: 609,
    name: "Character 609",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "609.png"
  },
  {
    id: 610,
    name: "Character 610",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "610.png"
  },
  {
    id: 611,
    name: "Character 611",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "611.png"
  },
  {
    id: 612,
    name: "Character 612",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "612.png"
  },
  {
    id: 613,
    name: "Character 613",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "613.png"
  },
  {
    id: 614,
    name: "Character 614",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "614.png"
  },
  {
    id: 615,
    name: "Character 615",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "615.png"
  },
  {
    id: 616,
    name: "Character 616",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "616.png"
  },
  {
    id: 617,
    name: "Character 617",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "617.png"
  },
  {
    id: 618,
    name: "Character 618",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "618.png"
  },
  {
    id: 619,
    name: "Character 619",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "619.png"
  },
  {
    id: 620,
    name: "Character 620",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "620.png"
  },
  {
    id: 621,
    name: "Character 621",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "621.png"
  },
  {
    id: 622,
    name: "Character 622",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "622.png"
  },
  {
    id: 623,
    name: "Character 623",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "623.png"
  },
  {
    id: 624,
    name: "Character 624",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "624.png"
  },
  {
    id: 625,
    name: "Character 625",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "625.png"
  },
  {
    id: 626,
    name: "Character 626",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "626.png"
  },
  {
    id: 627,
    name: "Character 627",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "627.png"
  },
  {
    id: 628,
    name: "Character 628",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "628.png"
  },
  {
    id: 629,
    name: "Character 629",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "629.png"
  },
  {
    id: 630,
    name: "Character 630",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "630.png"
  },
  {
    id: 631,
    name: "Character 631",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "631.png"
  },
  {
    id: 632,
    name: "Character 632",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "632.png"
  },
  {
    id: 633,
    name: "Character 633",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "633.png"
  },
  {
    id: 634,
    name: "Character 634",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "634.png"
  },
  {
    id: 635,
    name: "Character 635",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "635.png"
  },
  {
    id: 636,
    name: "Character 636",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "636.png"
  },
  {
    id: 637,
    name: "Character 637",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "637.png"
  },
  {
    id: 638,
    name: "Character 638",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "638.png"
  },
  {
    id: 639,
    name: "Character 639",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "639.png"
  },
  {
    id: 640,
    name: "Character 640",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "640.png"
  },
  {
    id: 641,
    name: "Character 641",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "641.png"
  },
  {
    id: 642,
    name: "Character 642",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "642.png"
  },
  {
    id: 643,
    name: "Character 643",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "643.png"
  },
  {
    id: 644,
    name: "Character 644",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "644.png"
  },
  {
    id: 645,
    name: "Character 645",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "645.png"
  },
  {
    id: 646,
    name: "Character 646",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "646.png"
  },
  {
    id: 647,
    name: "Character 647",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "647.png"
  },
  {
    id: 648,
    name: "Character 648",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "648.png"
  },
  {
    id: 649,
    name: "Character 649",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "649.png"
  },
  {
    id: 650,
    name: "Character 650",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "650.png"
  },
  {
    id: 651,
    name: "Character 651",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "651.png"
  },
  {
    id: 652,
    name: "Character 652",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "652.png"
  },
  {
    id: 653,
    name: "Character 653",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "653.png"
  },
  {
    id: 654,
    name: "Character 654",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "654.png"
  },
  {
    id: 655,
    name: "Character 655",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "655.png"
  },
  {
    id: 656,
    name: "Character 656",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "656.png"
  },
  {
    id: 657,
    name: "Character 657",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "657.png"
  },
  {
    id: 658,
    name: "Character 658",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "658.png"
  },
  {
    id: 659,
    name: "Character 659",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "659.png"
  },
  {
    id: 660,
    name: "Character 660",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "660.png"
  },
  {
    id: 661,
    name: "Character 661",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "661.png"
  },
  {
    id: 662,
    name: "Character 662",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "662.png"
  },
  {
    id: 663,
    name: "Character 663",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "663.png"
  },
  {
    id: 664,
    name: "Character 664",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "664.png"
  },
  {
    id: 665,
    name: "Character 665",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "665.png"
  },
  {
    id: 666,
    name: "Character 666",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "666.png"
  },
  {
    id: 667,
    name: "Character 667",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "667.png"
  },
  {
    id: 668,
    name: "Character 668",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "668.png"
  },
  {
    id: 669,
    name: "Character 669",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "669.png"
  },
  {
    id: 670,
    name: "Character 670",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "670.png"
  },
  {
    id: 671,
    name: "Character 671",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "671.png"
  },
  {
    id: 672,
    name: "Character 672",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "672.png"
  },
  {
    id: 673,
    name: "Character 673",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "673.png"
  },
  {
    id: 674,
    name: "Character 674",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "674.png"
  },
  {
    id: 675,
    name: "Character 675",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "675.png"
  },
  {
    id: 676,
    name: "Character 676",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "676.png"
  },
  {
    id: 677,
    name: "Character 677",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "677.png"
  },
  {
    id: 678,
    name: "Character 678",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "678.png"
  },
  {
    id: 679,
    name: "Character 679",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "679.png"
  },
  {
    id: 680,
    name: "Character 680",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "680.png"
  },
  {
    id: 681,
    name: "Character 681",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "681.png"
  },
  {
    id: 682,
    name: "Character 682",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "682.png"
  },
  {
    id: 683,
    name: "Character 683",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "683.png"
  },
  {
    id: 684,
    name: "Character 684",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "684.png"
  },
  {
    id: 685,
    name: "Character 685",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "685.png"
  },
  {
    id: 686,
    name: "Character 686",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "686.png"
  },
  {
    id: 687,
    name: "Character 687",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "687.png"
  },
  {
    id: 688,
    name: "Character 688",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "688.png"
  },
  {
    id: 689,
    name: "Character 689",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "689.png"
  },
  {
    id: 690,
    name: "Character 690",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "690.png"
  },
  {
    id: 691,
    name: "Character 691",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "691.png"
  },
  {
    id: 692,
    name: "Character 692",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "692.png"
  },
  {
    id: 693,
    name: "Character 693",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "693.png"
  },
  {
    id: 694,
    name: "Character 694",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "694.png"
  },
  {
    id: 695,
    name: "Character 695",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "695.png"
  },
  {
    id: 696,
    name: "Character 696",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "696.png"
  },
  {
    id: 697,
    name: "Character 697",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "697.png"
  },
  {
    id: 698,
    name: "Character 698",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "698.png"
  },
  {
    id: 699,
    name: "Character 699",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "699.png"
  },
  {
    id: 700,
    name: "Character 700",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "700.png"
  },
  {
    id: 701,
    name: "Character 701",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "701.png"
  },
  {
    id: 702,
    name: "Character 702",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "702.png"
  },
  {
    id: 703,
    name: "Character 703",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "703.png"
  },
  {
    id: 704,
    name: "Character 704",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "704.png"
  },
  {
    id: 705,
    name: "Character 705",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "705.png"
  },
  {
    id: 706,
    name: "Character 706",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "706.png"
  },
  {
    id: 707,
    name: "Character 707",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "707.png"
  },
  {
    id: 708,
    name: "Character 708",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "708.png"
  },
  {
    id: 709,
    name: "Character 709",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "709.png"
  },
  {
    id: 710,
    name: "Character 710",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "710.png"
  },
  {
    id: 711,
    name: "Character 711",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "711.png"
  },
  {
    id: 712,
    name: "Character 712",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "712.png"
  },
  {
    id: 713,
    name: "Character 713",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "713.png"
  },
  {
    id: 714,
    name: "Character 714",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "714.png"
  },
  {
    id: 715,
    name: "Character 715",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "715.png"
  },
  {
    id: 716,
    name: "Character 716",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "716.png"
  },
  {
    id: 717,
    name: "Character 717",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "717.png"
  },
  {
    id: 718,
    name: "Character 718",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "718.png"
  },
  {
    id: 719,
    name: "Character 719",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "719.png"
  },
  {
    id: 720,
    name: "Character 720",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "720.png"
  },
  {
    id: 721,
    name: "Character 721",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "721.png"
  },
  {
    id: 722,
    name: "Character 722",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "722.png"
  },
  {
    id: 723,
    name: "Character 723",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "723.png"
  },
  {
    id: 724,
    name: "Character 724",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "724.png"
  },
  {
    id: 725,
    name: "Character 725",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "725.png"
  },
  {
    id: 726,
    name: "Character 726",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "726.png"
  },
  {
    id: 727,
    name: "Character 727",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "727.png"
  },
  {
    id: 728,
    name: "Character 728",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "728.png"
  },
  {
    id: 729,
    name: "Character 729",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "729.png"
  },
  {
    id: 730,
    name: "Character 730",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "730.png"
  },
  {
    id: 731,
    name: "Character 731",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "731.png"
  },
  {
    id: 732,
    name: "Character 732",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "732.png"
  },
  {
    id: 733,
    name: "Character 733",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "733.png"
  },
  {
    id: 734,
    name: "Character 734",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "734.png"
  },
  {
    id: 735,
    name: "Character 735",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "735.png"
  },
  {
    id: 736,
    name: "Character 736",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "736.png"
  },
  {
    id: 737,
    name: "Character 737",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "737.png"
  },
  {
    id: 738,
    name: "Character 738",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "738.png"
  },
  {
    id: 739,
    name: "Character 739",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "739.png"
  },
  {
    id: 740,
    name: "Character 740",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "740.png"
  },
  {
    id: 741,
    name: "Character 741",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "741.png"
  },
  {
    id: 742,
    name: "Character 742",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "742.png"
  },
  {
    id: 743,
    name: "Character 743",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "743.png"
  },
  {
    id: 744,
    name: "Character 744",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "744.png"
  },
  {
    id: 745,
    name: "Character 745",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "745.png"
  },
  {
    id: 746,
    name: "Character 746",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "746.png"
  },
  {
    id: 747,
    name: "Character 747",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "747.png"
  },
  {
    id: 748,
    name: "Character 748",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "748.png"
  },
  {
    id: 749,
    name: "Character 749",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "749.png"
  },
  {
    id: 750,
    name: "Character 750",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "750.png"
  },
  {
    id: 751,
    name: "Character 751",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "751.png"
  },
  {
    id: 752,
    name: "Character 752",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "752.png"
  },
  {
    id: 753,
    name: "Character 753",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "753.png"
  },
  {
    id: 754,
    name: "Character 754",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "754.png"
  },
  {
    id: 755,
    name: "Character 755",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "755.png"
  },
  {
    id: 756,
    name: "Character 756",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "756.png"
  },
  {
    id: 757,
    name: "Character 757",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "757.png"
  },
  {
    id: 758,
    name: "Character 758",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "758.png"
  },
  {
    id: 759,
    name: "Character 759",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "759.png"
  },
  {
    id: 760,
    name: "Character 760",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "760.png"
  },
  {
    id: 761,
    name: "Character 761",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "761.png"
  },
  {
    id: 762,
    name: "Character 762",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "762.png"
  },
  {
    id: 763,
    name: "Character 763",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "763.png"
  },
  {
    id: 764,
    name: "Character 764",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "764.png"
  },
  {
    id: 765,
    name: "Character 765",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "765.png"
  },
  {
    id: 766,
    name: "Character 766",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "766.png"
  },
  {
    id: 767,
    name: "Character 767",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "767.png"
  },
  {
    id: 768,
    name: "Character 768",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "768.png"
  },
  {
    id: 769,
    name: "Character 769",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "769.png"
  },
  {
    id: 770,
    name: "Character 770",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "770.png"
  },
  {
    id: 771,
    name: "Character 771",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "771.png"
  },
  {
    id: 772,
    name: "Character 772",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "772.png"
  },
  {
    id: 773,
    name: "Character 773",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "773.png"
  },
  {
    id: 774,
    name: "Character 774",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "774.png"
  },
  {
    id: 775,
    name: "Character 775",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "775.png"
  },
   {
    id: 776,
    name: "Character 776",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "776.png"
  },
   {
    id: 777,
    name: "Character 777",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "777.png"
  },
];
