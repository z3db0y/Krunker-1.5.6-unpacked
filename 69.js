module.exports.wheels = [{
  name: "Starter",
  lab: {
    nm: "Any",
    col: "#E040FB"
  },
  price: 50,
  rarities: [75, 22, 3, 0, 0, 0]
}, {
  name: "Elite",
  lab: {
    nm: "Any",
    col: "#E040FB"
  },
  price: 100,
  rarities: [50, 30, 15, 5, 0, 0]
}, {
  name: "Heroic",
  lab: {
    nm: "Any",
    col: "#E040FB"
  },
  price: 500,
  rarities: [0, 48, 35, 14, 2.5, 0.5]
}, {
  name: "Hunter",
  lab: {
    nm: "Snipers Only!",
    col: "#fab640"
  },
  itemTypes: [0],
  weaponType: 1,
  price: 600,
  rarities: [43, 33, 17, 6, 1, 0]
}, {
  name: "Attire",
  lab: {
    nm: "Outfits Only!",
    col: "#ed4242"
  },
  itemTypes: [1, 2],
  price: 750,
  rarities: [43, 33, 16, 6, 2, 0]
}, {
  name: "Free",
  free: true,
  openURL: true,
  minLvl: 5,
  price: 0,
  priceT: "Follow for a free Spin",
  rarities: [43, 33, 17, 6, 1, 0]
}];
module.exports.types = ["weapons/weapon_", "hats/hat_", "body/body_", "melee/melee_"];
module.exports.purchases = [{
  val: 300,
  price: 0.99
}, {
  val: 600,
  price: 1.79
}, {
  val: 2600,
  tag: "Popular!",
  tagCol: "#ed4242",
  price: 7.49
}, {
  val: 7000,
  tag: "20% Off",
  tagCol: "#E040FB",
  price: 15.99
}, {
  val: 20000,
  tag: "30% Off",
  tagCol: "#fab640",
  price: 34.99
}];
module.exports.rarities = [{
  name: "Uncommon",
  rar: 60,
  color: "#b2f252"
}, {
  name: "Rare",
  rar: 40,
  color: "#2196F3"
}, {
  name: "Epic",
  rar: 25,
  color: "#E040FB"
}, {
  name: "Legendary",
  rar: 10,
  color: "#FBC02D"
}, {
  name: "Relic",
  rar: 2.5,
  color: "#ed4242"
}, {
  name: "Contraband",
  rar: 0.5,
  color: "#292929"
}, {
  name: "Unobtainable",
  noSpin: true,
  rar: 0,
  color: "#fff53d"
}];
module.exports.previews = {
  1: {
    xOff: -2,
    yOff: -2.6,
    zRota: 0.2,
    scl: 0.001376794727638135
  },
  2: {
    xOff: -1.4,
    yOff: -0.8,
    scl: 0.001148941748743716
  },
  3: {
    xOff: 0,
    yOff: 1,
    scl: 0.000676917226130652
  },
  4: {
    xOff: -1.5,
    yOff: 0.5,
    scl: 0.000940741507537686
  },
  5: {
    xOff: -0.8,
    yOff: 0.5,
    scl: 2
  },
  6: {
    xOff: -1,
    scl: 0.00099521137688442
  },
  7: {
    xOff: -1,
    yOff: -0.9,
    scl: 0.001221518472361808
  },
  8: {
    xOff: -1,
    yOff: -0.6,
    scl: 0.0012179208743718641
  },
  9: {
    xOff: -1.2,
    yOff: -1,
    scl: 0.0010676876984924638
  },
  10: {
    scl: 1.6
  }
};
module.exports.skins = [{
  name: "Arctic Hunt",
  id: 0,
  weapon: 1,
  rarity: 1
}, {
  name: "Autumn Hunt",
  id: 1,
  weapon: 1,
  rarity: 1
}, {
  name: "Reticle Blaze",
  id: 2,
  weapon: 1,
  rarity: 2
}, {
  name: "Digital Hunt",
  id: 3,
  weapon: 1,
  rarity: 0
}, {
  name: "Moon Dragon",
  id: 4,
  weapon: 1,
  rarity: 3
}, {
  name: "Scharfschütze",
  id: 5,
  weapon: 1,
  rarity: 1
}, {
  name: "Woodland Sniper",
  id: 6,
  weapon: 1,
  rarity: 0
}, {
  name: "Hazard Reticle",
  id: 7,
  weapon: 1,
  rarity: 1
}, {
  name: "Kodac Reticle",
  id: 8,
  weapon: 1,
  rarity: 1
}, {
  name: "Seafarer",
  id: 9,
  weapon: 1,
  rarity: 0
}, {
  name: "Acid Breath",
  glow: true,
  id: 10,
  weapon: 1,
  rarity: 3
}, {
  name: "Trail Scout",
  id: 11,
  weapon: 1,
  rarity: 0
}, {
  name: "Arctic AK",
  id: 0,
  weapon: 2,
  rarity: 1
}, {
  name: "Autumn AK",
  id: 1,
  weapon: 2,
  rarity: 1
}, {
  name: "Blaze AK",
  id: 2,
  weapon: 2,
  rarity: 2
}, {
  name: "Digital AK",
  id: 3,
  weapon: 2,
  rarity: 0
}, {
  name: "Luna Dragon",
  id: 4,
  weapon: 2,
  rarity: 3
}, {
  name: "Flecken AK",
  id: 5,
  weapon: 2,
  rarity: 1
}, {
  name: "Woodland AK",
  id: 6,
  weapon: 2,
  rarity: 0
}, {
  name: "Hazard AK",
  id: 7,
  weapon: 2,
  rarity: 1
}, {
  name: "Kodac AK",
  id: 8,
  weapon: 2,
  rarity: 1
}, {
  name: "Seafarer AK",
  id: 9,
  weapon: 2,
  rarity: 0
}, {
  name: "Trail AK",
  id: 10,
  weapon: 2,
  rarity: 0
}, {
  name: "SMG Arctic",
  id: 0,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Autumn",
  id: 1,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Blaze",
  id: 2,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Digital",
  id: 3,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Flecken",
  id: 4,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Woodland",
  id: 5,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Hazard",
  id: 6,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Kodac",
  id: 7,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Seafarer",
  id: 8,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Trail",
  id: 9,
  weapon: 4,
  rarity: 0
}, {
  name: "Arctic Python",
  id: 0,
  weapon: 5,
  rarity: 1
}, {
  name: "Autumn Python",
  id: 1,
  weapon: 5,
  rarity: 1
}, {
  name: "Blaze Python",
  id: 2,
  weapon: 5,
  rarity: 2
}, {
  name: "Digital Python",
  id: 3,
  weapon: 5,
  rarity: 0
}, {
  name: "Flecken Python",
  id: 4,
  weapon: 5,
  rarity: 1
}, {
  name: "Woodland",
  id: 5,
  weapon: 5,
  rarity: 0
}, {
  name: "Hazard Python",
  id: 6,
  weapon: 5,
  rarity: 1
}, {
  name: "Kodac Python",
  id: 7,
  weapon: 5,
  rarity: 1
}, {
  name: "Seafarer",
  id: 8,
  weapon: 5,
  rarity: 0
}, {
  name: "Trail Python",
  id: 9,
  weapon: 5,
  rarity: 0
}, {
  name: "Arctic Slug",
  id: 0,
  weapon: 6,
  rarity: 1
}, {
  name: "Autumn Slug",
  id: 1,
  weapon: 6,
  rarity: 1
}, {
  name: "Twin Blaze",
  id: 2,
  weapon: 6,
  rarity: 2
}, {
  name: "SG Digital",
  id: 3,
  weapon: 6,
  rarity: 0
}, {
  name: "Flecken",
  id: 4,
  weapon: 6,
  rarity: 1
}, {
  name: "Woodland",
  id: 5,
  weapon: 6,
  rarity: 0
}, {
  name: "Hazard Slug",
  id: 6,
  weapon: 6,
  rarity: 1
}, {
  name: "Kodac Slug",
  id: 7,
  weapon: 6,
  rarity: 1
}, {
  name: "Buccaneer",
  id: 8,
  weapon: 6,
  rarity: 0
}, {
  name: "SG Trail",
  id: 9,
  weapon: 6,
  rarity: 0
}, {
  name: "Arctic LMG",
  id: 0,
  weapon: 7,
  rarity: 1
}, {
  name: "Autumn LMG",
  id: 1,
  weapon: 7,
  rarity: 1
}, {
  name: "Blaze LMG",
  id: 2,
  weapon: 7,
  rarity: 2
}, {
  name: "Digital LMG",
  id: 3,
  weapon: 7,
  rarity: 0
}, {
  name: "Flecken LMG",
  id: 4,
  weapon: 7,
  rarity: 1
}, {
  name: "Woodland LMG",
  id: 5,
  weapon: 7,
  rarity: 0
}, {
  name: "Hazard LMG",
  id: 6,
  weapon: 7,
  rarity: 1
}, {
  name: "Kodac LMG",
  id: 7,
  weapon: 7,
  rarity: 1
}, {
  name: "Seafarer LMG",
  id: 8,
  weapon: 7,
  rarity: 0
}, {
  name: "Trail LMG",
  id: 9,
  weapon: 7,
  rarity: 0
}, {
  name: "Arctic Auto",
  id: 0,
  weapon: 8,
  rarity: 1
}, {
  name: "Autumn Auto",
  id: 1,
  weapon: 8,
  rarity: 1
}, {
  name: "Blaze Auto",
  id: 2,
  weapon: 8,
  rarity: 2
}, {
  name: "Digital Auto",
  id: 3,
  weapon: 8,
  rarity: 0
}, {
  name: "Flecken Auto",
  id: 4,
  weapon: 8,
  rarity: 1
}, {
  name: "Woodland Auto",
  id: 5,
  weapon: 8,
  rarity: 0
}, {
  name: "Hazard Auto",
  id: 6,
  weapon: 8,
  rarity: 1
}, {
  name: "Kodac Auto",
  id: 7,
  weapon: 8,
  rarity: 1
}, {
  name: "Seafarer Auto",
  id: 8,
  weapon: 8,
  rarity: 0
}, {
  name: "Trail Auto",
  id: 9,
  weapon: 8,
  rarity: 0
}, {
  name: "Mach Auto",
  id: 10,
  creator: "AtarSt",
  weapon: 8,
  rarity: 1
}, {
  name: "Arctic RL",
  id: 0,
  weapon: 9,
  rarity: 1
}, {
  name: "Autumn RL",
  id: 1,
  weapon: 9,
  rarity: 1
}, {
  name: "Blaze RL",
  id: 2,
  weapon: 9,
  rarity: 2
}, {
  name: "Digital RL",
  id: 3,
  weapon: 9,
  rarity: 0
}, {
  name: "Flecken RL",
  id: 4,
  weapon: 9,
  rarity: 1
}, {
  name: "Woodland RL",
  id: 5,
  weapon: 9,
  rarity: 0
}, {
  name: "Hazard RL",
  id: 6,
  weapon: 9,
  rarity: 1
}, {
  name: "Kodac RL",
  id: 7,
  weapon: 9,
  rarity: 1
}, {
  name: "Seafarer RL",
  id: 8,
  weapon: 9,
  rarity: 0
}, {
  name: "Trail RL",
  id: 9,
  weapon: 9,
  rarity: 0
}, {
  name: "101 Skullbreaker",
  id: 12,
  weapon: 1,
  rarity: 3
}, {
  name: "Reticle Faded",
  id: 13,
  weapon: 1,
  rarity: 0
}, {
  name: "Puma Sniper",
  id: 14,
  weapon: 1,
  rarity: 0
}, {
  name: "Scoped Elite",
  id: 15,
  weapon: 1,
  rarity: 2
}, {
  name: "Faded AK",
  id: 11,
  weapon: 2,
  rarity: 0
}, {
  name: "Puma AR",
  id: 12,
  weapon: 2,
  rarity: 1
}, {
  name: "SMG Fade",
  id: 10,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Puma",
  id: 11,
  weapon: 4,
  rarity: 1
}, {
  name: "Faded Python",
  id: 10,
  weapon: 5,
  rarity: 0
}, {
  name: "Puma Python",
  id: 11,
  weapon: 5,
  rarity: 1
}, {
  name: "SG Fade",
  id: 10,
  weapon: 6,
  rarity: 0
}, {
  name: "Slug Puma",
  id: 11,
  weapon: 6,
  rarity: 1
}, {
  name: "Faded LMG",
  id: 10,
  weapon: 7,
  rarity: 0
}, {
  name: "Puma LMG",
  id: 11,
  weapon: 7,
  rarity: 1
}, {
  name: "Faded MMR",
  id: 11,
  weapon: 8,
  rarity: 0
}, {
  name: "Puma MMR",
  id: 12,
  weapon: 8,
  rarity: 1
}, {
  name: "Faded RTL",
  id: 10,
  weapon: 9,
  rarity: 0
}, {
  name: "Puma RTL",
  id: 11,
  weapon: 9,
  rarity: 1
}, {
  name: "Scoped Carbon",
  id: 16,
  weapon: 1,
  rarity: 0
}, {
  name: "Carbon AK",
  id: 13,
  weapon: 2,
  rarity: 0
}, {
  name: "SMG Carbon",
  id: 12,
  weapon: 4,
  rarity: 0
}, {
  name: "Carbon Python",
  id: 12,
  weapon: 5,
  rarity: 0
}, {
  name: "SG Carbon",
  id: 12,
  weapon: 6,
  rarity: 0
}, {
  name: "Carbon LMG",
  id: 12,
  weapon: 7,
  rarity: 0
}, {
  name: "Carbon MMR",
  id: 13,
  weapon: 8,
  rarity: 0
}, {
  name: "Carbon RTL",
  id: 12,
  weapon: 9,
  rarity: 0
}, {
  name: "Neon Ripper",
  id: 14,
  glow: true,
  weapon: 2,
  rarity: 4
}, {
  name: "Top Hat",
  type: 1,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -4,
  id: 1,
  rarity: 2
}, {
  name: "SMG Spitfire",
  id: 13,
  weapon: 4,
  rarity: 3
}, {
  name: "Cowboy Hat",
  type: 1,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  id: 0,
  rarity: 0
}, {
  name: "Flame Tamer",
  id: 13,
  weapon: 5,
  glow: true,
  rarity: 4
}, {
  name: "Cool Cap",
  type: 1,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  xOff: 2,
  id: 2,
  rarity: 1
}, {
  name: "Jack O' Lantern",
  type: 1,
  scl: 2.8,
  glow: true,
  sclMlt: 1.4,
  sitOff: 2.05,
  yOff: -4,
  id: 3,
  rarity: 3
}, {
  name: "Medic Helmet",
  type: 1,
  scl: 2.8,
  sclMlt: 1,
  sitOff: 0.65,
  yOff: -2.5,
  id: 4,
  rarity: 2
}, {
  name: "Neon Reaver",
  creator: "Electrode_",
  id: 17,
  glow: true,
  weapon: 1,
  rarity: 4
}, {
  name: "Sun Glasses",
  type: 1,
  scl: 2.8,
  sclMlt: 1,
  sitOff: 2.3,
  yOff: -5,
  xOff: 2,
  id: 5,
  rarity: 0
}, {
  name: "Afro",
  type: 1,
  scl: 2,
  sclMlt: 0.9,
  sitOff: 1.4,
  yOff: -4,
  id: 6,
  rarity: 0
}, {
  name: "Hard Hat",
  type: 1,
  scl: 3,
  sitOff: 0.4,
  yOff: -3,
  id: 7,
  rarity: 0
}, {
  name: "Zombie Head",
  type: 1,
  scl: 2.8,
  glow: true,
  sclMlt: 1.2,
  sitOff: 2.05,
  yOff: -4,
  id: 8,
  rarity: 3
}, {
  name: "Barbed Rifle",
  id: 18,
  weapon: 1,
  rarity: 2
}, {
  name: "Blushed Sniper",
  id: 19,
  weapon: 1,
  rarity: 0
}, {
  name: "AWP Mech",
  id: 20,
  weapon: 1,
  rarity: 1
}, {
  name: "Olympus Rifle",
  id: 21,
  weapon: 1,
  rarity: 2
}, {
  name: "Scoped Tuscan",
  id: 22,
  weapon: 1,
  rarity: 1
}, {
  name: "AWP Pacemaker",
  id: 23,
  weapon: 1,
  rarity: 4,
  glow: true
}, {
  name: "AR Wired",
  id: 15,
  weapon: 2,
  rarity: 2
}, {
  name: "Blushed AK",
  id: 16,
  weapon: 2,
  rarity: 0
}, {
  name: "Mach Rifle",
  id: 17,
  weapon: 2,
  rarity: 1
}, {
  name: "Olympus Rifle",
  id: 18,
  weapon: 2,
  rarity: 2
}, {
  name: "AR Tuscan",
  id: 19,
  weapon: 2,
  rarity: 1
}, {
  name: "SMG Barbed",
  id: 14,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Blossom",
  id: 15,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Machinist",
  id: 16,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Lazarus",
  id: 17,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Tuscan",
  id: 18,
  weapon: 4,
  rarity: 1
}, {
  name: "Barbed Python",
  id: 14,
  weapon: 5,
  rarity: 2
}, {
  name: "Blushed Revolver",
  id: 15,
  weapon: 5,
  rarity: 0
}, {
  name: "Machinist Python",
  id: 16,
  weapon: 5,
  rarity: 1
}, {
  name: "REV Olympus",
  id: 17,
  weapon: 5,
  rarity: 2
}, {
  name: "Tuscan Revolver",
  id: 18,
  weapon: 5,
  rarity: 1
}, {
  name: "Coach Barb",
  id: 13,
  weapon: 6,
  rarity: 2
}, {
  name: "Blossom",
  id: 14,
  weapon: 6,
  rarity: 0
}, {
  name: "MD Frag",
  id: 15,
  weapon: 6,
  rarity: 1
}, {
  name: "SG Olympus",
  id: 16,
  weapon: 6,
  rarity: 2
}, {
  name: "SG Tuscan",
  id: 17,
  weapon: 6,
  rarity: 1
}, {
  name: "Blushed LMG",
  id: 13,
  weapon: 7,
  rarity: 0
}, {
  name: "Machinist LMG",
  id: 14,
  weapon: 7,
  rarity: 1
}, {
  name: "Olympus LMG",
  id: 15,
  weapon: 7,
  rarity: 2
}, {
  name: "Tuscan LMG",
  id: 16,
  weapon: 7,
  rarity: 1
}, {
  name: "Barbed Auto",
  id: 14,
  weapon: 8,
  rarity: 2
}, {
  name: "Blushed MMA",
  id: 15,
  weapon: 8,
  rarity: 0
}, {
  name: "Auto Machinist",
  id: 16,
  weapon: 8,
  rarity: 1
}, {
  name: "Olympus MMA",
  id: 17,
  weapon: 8,
  rarity: 2
}, {
  name: "Tuscan MMA",
  id: 18,
  weapon: 8,
  rarity: 1
}, {
  name: "Barbed Launcher",
  id: 13,
  weapon: 9,
  rarity: 2
}, {
  name: "Blushed Launcher",
  id: 14,
  weapon: 9,
  rarity: 0
}, {
  name: "Machinist Launcher",
  id: 15,
  weapon: 9,
  rarity: 1
}, {
  name: "Olympus Launcher",
  id: 16,
  weapon: 9,
  rarity: 2
}, {
  name: "Tuscan Launcher",
  id: 17,
  weapon: 9,
  rarity: 1
}, {
  name: "Omen",
  glow: true,
  id: 24,
  creator: "Zino",
  weapon: 1,
  rarity: 3
}, {
  name: "Scoped Moss",
  id: 25,
  weapon: 1,
  rarity: 0
}, {
  name: "Swamped Scope",
  id: 26,
  weapon: 1,
  rarity: 0
}, {
  name: "Tiger Bolt",
  id: 27,
  weapon: 1,
  rarity: 2
}, {
  name: "Zebra Bolt",
  id: 28,
  weapon: 1,
  rarity: 2
}, {
  name: "Necron Bolt",
  id: 29,
  weapon: 1,
  rarity: 4,
  glow: true
}, {
  name: "Lava Bolt",
  id: 30,
  weapon: 1,
  rarity: 3
}, {
  name: "Sky Bolt",
  id: 31,
  weapon: 1,
  rarity: 2
}, {
  name: "AWP Iris",
  id: 32,
  weapon: 1,
  rarity: 1
}, {
  name: "Bolt Wanderer",
  id: 33,
  weapon: 1,
  rarity: 1
}, {
  name: "Mossy Rifle",
  id: 20,
  weapon: 2,
  rarity: 1
}, {
  name: "Swamped AK",
  id: 21,
  weapon: 2,
  rarity: 0
}, {
  name: "Tiger Rifle",
  id: 22,
  weapon: 2,
  rarity: 2
}, {
  name: "Zebra Rifle",
  id: 23,
  weapon: 2,
  rarity: 2
}, {
  name: "Plasma Rifle",
  id: 24,
  weapon: 2,
  rarity: 4,
  glow: true
}, {
  name: "Lava Rifle",
  id: 25,
  weapon: 2,
  glow: true,
  rarity: 3
}, {
  name: "Sky Rifle",
  id: 26,
  weapon: 2,
  rarity: 2
}, {
  name: "Bark AK",
  id: 27,
  weapon: 2,
  rarity: 0
}, {
  name: "Rifle Wanderer",
  id: 28,
  weapon: 2,
  rarity: 0
}, {
  name: "SMG Growth",
  id: 19,
  weapon: 4,
  rarity: 1
}, {
  name: "SMG Marsh",
  id: 20,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Tigris",
  id: 21,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Safari",
  id: 22,
  weapon: 4,
  rarity: 2
}, {
  name: "Rapid Plasma",
  id: 23,
  weapon: 4,
  rarity: 4,
  glow: true
}, {
  name: "Lava SMG",
  id: 24,
  weapon: 4,
  rarity: 3,
  glow: true
}, {
  name: "UMP Atmos",
  id: 25,
  weapon: 4,
  rarity: 2
}, {
  name: "Birch SMG",
  id: 26,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Wanderer",
  id: 27,
  weapon: 4,
  rarity: 0
}, {
  name: "Mossy Python",
  id: 19,
  weapon: 5,
  rarity: 1
}, {
  name: "Swamped Revolver",
  id: 20,
  weapon: 5,
  rarity: 0
}, {
  name: "Tiger Python",
  id: 21,
  weapon: 5,
  rarity: 2
}, {
  name: "Zebra Python",
  id: 22,
  weapon: 5,
  rarity: 2
}, {
  name: "Venomous",
  creator: "Rengar",
  glow: true,
  id: 23,
  weapon: 5,
  rarity: 3
}, {
  name: "Lava Revolver",
  id: 24,
  weapon: 5,
  rarity: 3
}, {
  name: "Sky Python",
  id: 25,
  weapon: 5,
  rarity: 2,
  glow: true
}, {
  name: "Bark Python",
  id: 26,
  weapon: 5,
  rarity: 0
}, {
  name: "Wanderer Python",
  id: 27,
  weapon: 5,
  rarity: 0
}, {
  name: "Gabrand",
  id: 19,
  weapon: 6,
  rarity: 1
}, {
  name: "Tennessee",
  id: 20,
  weapon: 6,
  rarity: 0
}, {
  name: "SG Tigris",
  id: 21,
  weapon: 6,
  rarity: 2
}, {
  name: "Safaris",
  id: 22,
  weapon: 6,
  rarity: 2
}, {
  name: "Neuromance",
  id: 23,
  weapon: 6,
  rarity: 4,
  glow: true
}, {
  name: "Anatomis",
  id: 24,
  weapon: 6,
  rarity: 3,
  glow: true
}, {
  name: "Sky Pump",
  id: 25,
  weapon: 6,
  rarity: 2
}, {
  name: "Bark Slug",
  id: 26,
  weapon: 6,
  rarity: 0
}, {
  name: "Slug Wanderer",
  id: 27,
  weapon: 6,
  rarity: 0
}, {
  name: "Mossy LMG",
  id: 17,
  weapon: 7,
  rarity: 1
}, {
  name: "Swamped LMG",
  id: 18,
  weapon: 7,
  rarity: 0
}, {
  name: "Tiger LMG",
  id: 19,
  weapon: 7,
  rarity: 2
}, {
  name: "Zebra LMG",
  id: 20,
  weapon: 7,
  rarity: 2
}, {
  name: "Heavy Plasma",
  id: 21,
  weapon: 7,
  rarity: 4,
  glow: true
}, {
  name: "Lava LMG",
  id: 22,
  weapon: 7,
  rarity: 3
}, {
  name: "Sky LMG",
  id: 23,
  weapon: 7,
  rarity: 2,
  glow: true
}, {
  name: "Bark LMG",
  id: 24,
  weapon: 7,
  rarity: 0
}, {
  name: "LMG Wanderer",
  id: 25,
  weapon: 7,
  rarity: 0
}, {
  name: "Overgrowth",
  id: 19,
  weapon: 8,
  rarity: 1
}, {
  name: "Marshland",
  id: 20,
  weapon: 8,
  rarity: 0
}, {
  name: "Tiger MMA",
  id: 21,
  weapon: 8,
  rarity: 2
}, {
  name: "Zebra MMA",
  id: 22,
  weapon: 8,
  rarity: 2
}, {
  name: "MMA Plasma",
  id: 23,
  weapon: 8,
  rarity: 4,
  glow: true
}, {
  name: "Magnis",
  id: 24,
  weapon: 8,
  rarity: 3,
  glow: true
}, {
  name: "Sky AUTO",
  id: 25,
  weapon: 8,
  rarity: 2
}, {
  name: "Bark AUTO",
  id: 26,
  weapon: 8,
  rarity: 0
}, {
  name: "MMA Wanderer",
  id: 27,
  weapon: 8,
  rarity: 0
}, {
  name: "Mossy Rocket",
  id: 18,
  weapon: 9,
  rarity: 1
}, {
  name: "Swamped Launcher",
  id: 19,
  weapon: 9,
  rarity: 0
}, {
  name: "Tiger Rocket",
  id: 20,
  weapon: 9,
  rarity: 2
}, {
  name: "Zebra Launcher",
  id: 21,
  weapon: 9,
  rarity: 2
}, {
  name: "Plasma Nuke",
  id: 22,
  weapon: 9,
  rarity: 4,
  glow: true
}, {
  name: "Lava Rocket",
  id: 23,
  weapon: 9,
  rarity: 3
}, {
  name: "Sky Launcher",
  id: 24,
  weapon: 9,
  rarity: 2
}, {
  name: "Bark Launcher",
  id: 25,
  weapon: 9,
  rarity: 0
}, {
  name: "Wanderer Rocket",
  id: 26,
  weapon: 9,
  rarity: 0
}, {
  name: "Purple Cap",
  id: 2,
  tex: 1,
  type: 1,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  xOff: 2,
  rarity: 0
}, {
  name: "Bear Mask",
  id: 9,
  type: 1,
  scl: 2.5,
  sclMlt: 1.3,
  sitOff: 2.05,
  yOff: -4,
  xOff: 1,
  rarity: 2
}, {
  name: "Panda Mask",
  id: 9,
  tex: 1,
  type: 1,
  scl: 2.5,
  sclMlt: 1.3,
  sitOff: 2.05,
  yOff: -4,
  xOff: 1,
  rarity: 2
}, {
  name: "Brown Beard",
  id: 11,
  type: 1,
  scl: 2.8,
  sclMlt: 0.9,
  sitOff: 2,
  yOff: -3,
  rarity: 2
}, {
  name: "Blonde Beard",
  id: 11,
  tex: 1,
  type: 1,
  scl: 2.8,
  sclMlt: 0.9,
  sitOff: 2,
  yOff: -3,
  rarity: 2
}, {
  name: "Skull Mask",
  id: 12,
  type: 1,
  scl: 3,
  glow: true,
  sclMlt: 1.05,
  sitOff: 2.5,
  sitOffZ: 1.1,
  yOff: -4.5,
  xOff: -3,
  tex: 0,
  rarity: 3
}, {
  name: "Red Beanie",
  id: 13,
  type: 1,
  scl: 3,
  sclMlt: 1.1,
  sitOff: 0.4,
  yOff: -3,
  tex: 0,
  rarity: 0
}, {
  name: "Blue Beanie",
  id: 13,
  type: 1,
  scl: 3,
  sclMlt: 1.1,
  sitOff: 0.4,
  yOff: -3,
  tex: 1,
  rarity: 0
}, {
  name: "Krunk Headset",
  id: 14,
  type: 1,
  scl: 2,
  sclMlt: 1.1,
  sitOff: 1.4,
  yOff: -4,
  rarity: 2
}, {
  name: "Cherry Headset",
  id: 14,
  type: 1,
  tex: 1,
  scl: 2,
  sclMlt: 1.1,
  sitOff: 1.4,
  yOff: -4,
  rarity: 2
}, {
  name: "Demonic Wings",
  id: 0,
  type: 2,
  glow: true,
  scl: 3.5,
  sclMlt: 3,
  xOff: -1.5,
  sitOff: -1.3,
  sitOffZ: -1.4,
  yOff: -2,
  rarity: 4
}, {
  name: "Bass Guitar",
  id: 1,
  type: 2,
  scl: 4,
  sclMlt: 3.8,
  sitOff: -1.3,
  sitOffZ: -1,
  yOff: -2,
  rarity: 2
}, {
  name: "Samurai Blades",
  id: 2,
  type: 2,
  glow: true,
  scl: 0.00048112055276382,
  sclMlt: 0.000406279577889448,
  sitOff: -1.3,
  sitOffZ: -0.95,
  yOff: -1,
  xOff: -0.5,
  rarity: 3
}, {
  name: "Blood Harvest",
  id: 3,
  type: 2,
  glow: true,
  scl: 5.1,
  sclMlt: 5,
  sitOff: -1.3,
  sitOffZ: -0.95,
  yOff: -1,
  rarity: 3
}, {
  name: "Panda Body",
  id: 4,
  type: 2,
  scl: 2.1,
  sclMlt: 1.3,
  sitOff: 2.2,
  sitOffZ: 0,
  yOff: -5,
  rarity: 3
}, {
  name: "Bear Body",
  id: 4,
  tex: 1,
  type: 2,
  scl: 2.1,
  sclMlt: 1.3,
  sitOff: 2.2,
  sitOffZ: 0,
  yOff: -5,
  rarity: 3
}, {
  name: "Angelic Wings",
  id: 5,
  type: 2,
  glow: true,
  scl: 3.5,
  sclMlt: 3.6,
  xOff: -1.5,
  sitOff: -1.3,
  sitOffZ: -1.4,
  yOff: -2,
  rarity: 4
}, {
  name: "Ninja Mask",
  id: 15,
  glow: true,
  type: 1,
  scl: 2.5,
  sclMlt: 1.1,
  sitOff: 2.05,
  yOff: -4,
  xOff: 0,
  rarity: 3
}, {
  name: "Halo",
  id: 16,
  glow: true,
  type: 1,
  scl: 3.5,
  sclMlt: 1.1,
  sitOff: -0.65,
  yOff: -1,
  rarity: 3
}, {
  name: "Welder Mask",
  type: 1,
  scl: 2.5,
  sitOff: 2.1,
  yOff: -3,
  xOff: 1,
  id: 17,
  rarity: 1
}, {
  name: "Diver Goggles",
  type: 1,
  scl: 2.5,
  sclMlt: 0.9,
  sitOff: 1,
  yOff: -1,
  id: 18,
  rarity: 1
}, {
  name: "Mad Cap",
  type: 1,
  tex: 2,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  xOff: 2,
  id: 2,
  rarity: 1
}, {
  name: "Ace Cap",
  type: 1,
  tex: 3,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  xOff: 2,
  id: 2,
  rarity: 1
}, {
  name: "Ice Cap",
  type: 1,
  tex: 4,
  scl: 2.5,
  sitOff: 0.4,
  yOff: -3,
  xOff: 2,
  id: 2,
  rarity: 1
}, {
  name: "Soldier Pack",
  id: 6,
  type: 2,
  glow: true,
  scl: 2.6,
  sclMlt: 1.8,
  xOff: 1,
  sitOff: 1.3,
  sitOffZ: -1.75,
  yOff: -5,
  rarity: 1
}, {
  name: "Robo Wings",
  id: 7,
  type: 2,
  glow: true,
  scl: 5,
  sclMlt: 3.9,
  xOff: -3.5,
  sitOff: -1.3,
  sitOffZ: -0.75,
  yOff: -4,
  rarity: 4
}, {
  name: "Basket",
  id: 8,
  type: 2,
  scl: 3.5,
  sclMlt: 2,
  xOff: -1.5,
  sitOff: 0.75,
  sitOffZ: -0.8,
  yOff: -4,
  rarity: 1
}, {
  name: "Baby Panda",
  id: 9,
  type: 2,
  scl: 3.5,
  sclMlt: 2,
  xOff: 1,
  sitOff: 0.75,
  sitOffZ: -0.8,
  yOff: -5,
  xRot: Math.PI,
  rarity: 3
}, {
  name: "Sturm Helmet",
  type: 1,
  tex: 1,
  scl: 2.8,
  sclMlt: 1,
  sitOff: 0.65,
  yOff: -2.5,
  id: 4,
  rarity: 1
}, {
  name: "Brown Afro",
  type: 1,
  tex: 1,
  scl: 2,
  sclMlt: 0.9,
  sitOff: 1.4,
  yOff: -4,
  id: 6,
  rarity: 0
}, {
  name: "Acid Skull",
  id: 12,
  type: 1,
  tex: 1,
  scl: 3,
  glow: true,
  sclMlt: 1.05,
  sitOff: 2.5,
  sitOffZ: 1.1,
  yOff: -4.5,
  xOff: -3,
  rarity: 3
}, {
  name: "Uranium",
  type: 1,
  tex: 1,
  scl: 2.5,
  sitOff: 2.1,
  yOff: -3,
  xOff: 1,
  id: 17,
  rarity: 2
}, {
  name: "Panda King",
  id: 19,
  glow: true,
  type: 1,
  scl: 2.5,
  sclMlt: 1.3,
  sitOff: 2.05,
  yOff: -4,
  xOff: 1,
  rarity: 3
}, {
  name: "Kolt Rifle",
  creator: "iSpy",
  id: 35,
  weapon: 1,
  rarity: 3
}, {
  name: "Pace Dore",
  id: 34,
  glow: true,
  weapon: 1,
  rarity: 4
}, {
  name: "Shot Element",
  creator: "Electrode_",
  glow: true,
  id: 28,
  weapon: 6,
  rarity: 3
}, {
  name: "Warp Sequence",
  creator: "Electrode_",
  id: 28,
  glow: true,
  weapon: 4,
  rarity: 4
}, {
  name: "Radioactive",
  creator: "Electrode_",
  glow: true,
  id: 29,
  weapon: 5,
  rarity: 4
}, {
  name: "Targeted",
  creator: "Subza",
  glow: true,
  id: 28,
  weapon: 5,
  rarity: 3
}, {
  name: "Robot Helmet",
  type: 1,
  glow: true,
  scl: 2.4,
  sclMlt: 1,
  sitOff: 2,
  yOff: -3.4,
  id: 20,
  rarity: 3
}, {
  name: "Knight Helmet",
  type: 1,
  scl: 2.3,
  sclMlt: 1,
  sitOff: 2,
  yOff: -3.2,
  id: 21,
  rarity: 3
}, {
  name: "Cat Ears",
  type: 1,
  scl: 2.5,
  sclMlt: 1.2,
  sitOff: 1.65,
  yOff: -3.2,
  id: 22,
  rarity: 2
}, {
  name: "Snowman",
  type: 1,
  scl: 2.2,
  sclMlt: 1,
  sitOff: 2.05,
  yOff: -3.2,
  id: 23,
  rarity: 2
}, {
  name: "Trendy Biker",
  type: 1,
  scl: 2.2,
  sclMlt: 1,
  sitOff: 1.8,
  yOff: -3.2,
  id: 24,
  rarity: 3
}, {
  name: "Golden Crown",
  type: 1,
  glow: true,
  scl: 2.4,
  sclMlt: 1,
  sitOff: 0.65,
  yOff: -3.2,
  id: 25,
  rarity: 3
}, {
  name: "Master Drinker",
  type: 1,
  scl: 2.4,
  sclMlt: 1,
  sitOff: 0.65,
  yOff: -2.7,
  id: 26,
  rarity: 3
}, {
  name: "Pig Head",
  type: 1,
  scl: 2.5,
  sclMlt: 1,
  sitOff: 2.05,
  yOff: -3.2,
  id: 27,
  rarity: 3
}, {
  name: "Red Bandana",
  type: 1,
  scl: 2.2,
  sclMlt: 1,
  sitOff: 1.6,
  yOff: -3.2,
  id: 28,
  rarity: 1
}, {
  name: "Sheriff",
  type: 1,
  scl: 2.2,
  sclMlt: 1,
  sitOff: 2.05,
  yOff: -3.2,
  id: 29,
  rarity: 4
}, {
  name: "Bandit",
  type: 1,
  glow: true,
  scl: 2.2,
  sclMlt: 1,
  sitOff: 2.05,
  yOff: -3.2,
  id: 30,
  rarity: 4
}, {
  name: "Vlaine",
  creator: "Hoodgail",
  id: 36,
  weapon: 1,
  rarity: 1
}, {
  name: "AWP Supersport",
  creator: "Kitter",
  id: 37,
  weapon: 1,
  rarity: 2
}, {
  name: "Reine",
  id: 38,
  weapon: 1,
  rarity: 3
}, {
  name: "Melted",
  glow: true,
  id: 39,
  weapon: 1,
  rarity: 4
}, {
  name: "Viper",
  glow: true,
  id: 40,
  weapon: 1,
  rarity: 3
}, {
  name: "Razor",
  glow: true,
  id: 41,
  weapon: 1,
  rarity: 4
}, {
  name: "Lazor",
  id: 29,
  glow: true,
  weapon: 2,
  rarity: 4
}, {
  name: "Uzera",
  creator: "Hoodgail",
  id: 2,
  glow: true,
  weapon: 10,
  rarity: 4
}, {
  name: "Tazor",
  creator: "Hoodgail",
  glow: true,
  id: 7,
  weapon: 10,
  rarity: 3
}, {
  name: "Dual Woodland",
  id: 0,
  weapon: 10,
  rarity: 1
}, {
  name: "Flecken Uzi",
  id: 1,
  weapon: 10,
  rarity: 1
}, {
  name: "Dual Seafarer",
  id: 3,
  weapon: 10,
  rarity: 2
}, {
  name: "Rapid Digital",
  id: 4,
  weapon: 10,
  rarity: 1
}, {
  name: "Sap Uzi",
  id: 5,
  weapon: 10,
  rarity: 0
}, {
  name: "Torn Dual",
  id: 6,
  weapon: 10,
  rarity: 1
}, {
  name: "Haste",
  glow: true,
  id: 42,
  weapon: 1,
  rarity: 3
}, {
  name: "Leine",
  creator: "Hoodgail",
  id: 43,
  weapon: 1,
  rarity: 3
}, {
  name: "Lore",
  glow: true,
  id: 44,
  weapon: 1,
  rarity: 4
}, {
  name: "Reaver",
  glow: true,
  id: 45,
  weapon: 1,
  rarity: 4
}, {
  name: "Splixen",
  glow: true,
  id: 46,
  weapon: 1,
  rarity: 4
}, {
  name: "AWP Stream",
  creator: "Electrode_",
  glow: true,
  id: 47,
  weapon: 1,
  rarity: 4
}, {
  name: "Circuit",
  creator: "Electrode_",
  glow: true,
  id: 30,
  weapon: 2,
  rarity: 4
}, {
  name: "SMG Iris",
  id: 29,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Venom",
  id: 30,
  weapon: 4,
  rarity: 2,
  glow: true
}, {
  name: "SMG Wingman",
  id: 31,
  weapon: 4,
  rarity: 2
}, {
  name: "x0n-voX",
  creator: "???",
  pat: 0,
  tex: "weapons/pat/0",
  dot: "dot_1",
  sameGlow: true,
  movT: 0.0001,
  weapon: 4,
  rarity: 5
}, {
  name: "1Ad-dA0",
  creator: "???",
  pat: 0,
  tex: "weapons/pat/0",
  dot: "dot_1",
  sameGlow: true,
  movT: 0.0001,
  weapon: 2,
  rarity: 5
}, {
  name: "Raynb0w",
  creator: "???",
  pat: 1,
  tex: "weapons/pat/1",
  dot: "dot_1",
  sameGlow: true,
  movT: 0.0015,
  weapon: 2,
  rarity: 5
}, {
  name: "Raynb0w",
  creator: "???",
  pat: 1,
  tex: "weapons/pat/1",
  dot: "dot_1",
  sameGlow: true,
  movT: 0.0015,
  weapon: 4,
  rarity: 5
}, {
  name: "UMP Saphire",
  id: 32,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Jade",
  id: 33,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Plexus",
  id: 34,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Lapis",
  id: 35,
  weapon: 4,
  rarity: 0
}, {
  name: "Perplex",
  id: 36,
  weapon: 4,
  rarity: 0
}, {
  name: "UMP Torpe",
  id: 37,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Como",
  id: 38,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Liquid",
  id: 39,
  weapon: 4,
  rarity: 0
}, {
  name: "Clementine",
  id: 40,
  weapon: 4,
  rarity: 1
}, {
  name: "Dropper",
  id: 41,
  weapon: 4,
  rarity: 0
}, {
  name: "SMG Auburn",
  id: 42,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Laurel",
  id: 43,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Crimson",
  id: 44,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Azure",
  id: 45,
  weapon: 4,
  rarity: 1
}, {
  name: "Laguna",
  id: 46,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Cygenta",
  id: 47,
  weapon: 4,
  rarity: 1
}, {
  name: "UMP Cygentro",
  id: 48,
  weapon: 4,
  rarity: 2
}, {
  name: "Chartreuse",
  id: 49,
  weapon: 4,
  rarity: 2
}, {
  name: "UMP Tortobe",
  id: 50,
  weapon: 4,
  rarity: 2
}, {
  name: "UMP Octo",
  id: 51,
  weapon: 4,
  rarity: 2
}, {
  name: "UMP Versate",
  id: 52,
  weapon: 4,
  rarity: 2
}, {
  name: "SMG Purpur",
  id: 53,
  weapon: 4,
  rarity: 2
}, {
  name: "Leaf",
  id: 54,
  weapon: 4,
  rarity: 0
}, {
  name: "Flame",
  id: 55,
  weapon: 4,
  rarity: 0
}, {
  name: "Aqua",
  id: 56,
  weapon: 4,
  rarity: 0
}, {
  name: "Gravel",
  id: 57,
  weapon: 4,
  rarity: 0
}, {
  name: "AR Saphire",
  id: 31,
  weapon: 2,
  rarity: 1
}, {
  name: "AR Jade",
  id: 32,
  weapon: 2,
  rarity: 1
}, {
  name: "AR Plexus",
  id: 33,
  weapon: 2,
  rarity: 1
}, {
  name: "AR Lapis",
  id: 34,
  weapon: 2,
  rarity: 1
}, {
  name: "Perplex",
  id: 35,
  weapon: 2,
  rarity: 0
}, {
  name: "Trople",
  id: 36,
  weapon: 2,
  rarity: 0
}, {
  name: "AR Altis",
  id: 37,
  weapon: 2,
  rarity: 1
}, {
  name: "Liquid",
  id: 38,
  weapon: 2,
  rarity: 1
}, {
  name: "Clementine",
  id: 39,
  weapon: 2,
  rarity: 1
}, {
  name: "Dropper",
  id: 40,
  weapon: 2,
  rarity: 0
}, {
  name: "Laurel",
  id: 41,
  weapon: 2,
  rarity: 1
}, {
  name: "Crimson",
  id: 42,
  weapon: 2,
  rarity: 1
}, {
  name: "Azure",
  id: 43,
  weapon: 2,
  rarity: 1
}, {
  name: "Laguna",
  id: 44,
  weapon: 2,
  rarity: 1
}, {
  name: "Cygenta",
  id: 45,
  weapon: 2,
  rarity: 1
}, {
  name: "Cygento",
  id: 46,
  weapon: 2,
  rarity: 2
}, {
  name: "Chartreuse",
  id: 47,
  weapon: 2,
  rarity: 2
}, {
  name: "Tortobe",
  id: 48,
  weapon: 2,
  rarity: 2
}, {
  name: "AK Octo",
  id: 49,
  weapon: 2,
  rarity: 2
}, {
  name: "Versate",
  id: 50,
  weapon: 2,
  rarity: 2
}, {
  name: "Purpur",
  id: 51,
  weapon: 2,
  rarity: 2
}, {
  name: "Leaf",
  id: 52,
  weapon: 2,
  rarity: 0
}, {
  name: "Flame",
  id: 53,
  weapon: 2,
  rarity: 0
}, {
  name: "Aqua",
  id: 54,
  weapon: 2,
  rarity: 0
}, {
  name: "Gravel",
  id: 55,
  weapon: 2,
  rarity: 0
}, {
  name: "Saphire",
  id: 28,
  weapon: 8,
  rarity: 1
}, {
  name: "Jade",
  id: 29,
  weapon: 8,
  rarity: 1
}, {
  name: "Plexus",
  id: 30,
  weapon: 8,
  rarity: 1
}, {
  name: "Lapis",
  id: 31,
  weapon: 8,
  rarity: 1
}, {
  name: "Perplexum",
  id: 32,
  weapon: 8,
  rarity: 0
}, {
  name: "Torped",
  id: 33,
  weapon: 8,
  rarity: 0
}, {
  name: "Commo",
  id: 34,
  weapon: 8,
  rarity: 0
}, {
  name: "MMA Liquid",
  id: 35,
  weapon: 8,
  rarity: 1
}, {
  name: "Dropper",
  id: 36,
  weapon: 8,
  rarity: 0
}, {
  name: "MMA Auburn",
  id: 37,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Laurel",
  id: 38,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Crimson",
  id: 39,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Azure",
  id: 40,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Laguna",
  id: 41,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Cygneta",
  id: 42,
  weapon: 8,
  rarity: 1
}, {
  name: "MMA Cygneto",
  id: 43,
  weapon: 8,
  rarity: 2
}, {
  name: "M14 Chartreuse",
  id: 44,
  weapon: 8,
  rarity: 2
}, {
  name: "MMA Tortobe",
  id: 45,
  weapon: 8,
  rarity: 2
}, {
  name: "MMA Octo",
  id: 46,
  weapon: 8,
  rarity: 2
}, {
  name: "MMA Versate",
  id: 47,
  weapon: 8,
  rarity: 2
}, {
  name: "MMA Purpur",
  id: 48,
  weapon: 8,
  rarity: 2
}, {
  name: "Nature",
  id: 49,
  weapon: 8,
  rarity: 0
}, {
  name: "Flame",
  id: 50,
  weapon: 8,
  rarity: 0
}, {
  name: "Aqua",
  id: 51,
  weapon: 8,
  rarity: 0
}, {
  name: "Earth",
  id: 52,
  weapon: 8,
  rarity: 0
}, {
  name: "Black Ice",
  creator: "Electrode_",
  id: 53,
  weapon: 8,
  rarity: 2
}, {
  name: "Mach 3",
  creator: "Jytesh",
  id: 54,
  weapon: 8,
  rarity: 1
}, {
  name: "Bloodripper",
  creator: "Jytesh",
  id: 55,
  weapon: 8,
  rarity: 1
}, {
  name: "Theta",
  creator: "Floatingpoint",
  id: 48,
  weapon: 1,
  rarity: 3
}, {
  name: "Raynb0w",
  creator: "???",
  pat: 1,
  tex: "weapons/pat/1",
  dot: "dot_1",
  sameGlow: true,
  movT: 0.0015,
  weapon: 1,
  rarity: 5
}, {
  name: "Diablo Wings",
  id: 10,
  type: 2,
  scl: 0.0005593478391959849,
  sclMlt: 0.0006552360402010109,
  xOff: -3,
  sitOff: -1.3,
  sitOffZ: -1.4,
  yOff: -2,
  rarity: 4
}, {
  name: "AK Gold Rush",
  creator: "_irizu",
  id: 56,
  weapon: 2,
  rarity: 3
}, {
  name: "AK Mortal",
  creator: "_irizu",
  glow: true,
  id: 57,
  weapon: 2,
  rarity: 4
}, {
  name: "nV Dragon",
  creator: "nightly-build7",
  id: 51,
  weapon: 1,
  rarity: 3
}, {
  name: "Cherry Blossom",
  creator: "jonschmiddy",
  id: 50,
  weapon: 1,
  rarity: 2
}, {
  name: "Vapormoon",
  creator: "jonschmiddy",
  id: 58,
  weapon: 2,
  rarity: 2
}, {
  name: "Tesselate",
  creator: "jonschmiddy",
  id: 59,
  weapon: 2,
  rarity: 2
}, {
  name: "Polydrive",
  creator: "Ziggy",
  id: 49,
  weapon: 1,
  rarity: 2
}, {
  name: "Safran",
  id: 29,
  weapon: 6,
  rarity: 2
}, {
  name: "Purple Rain",
  id: 30,
  weapon: 6,
  rarity: 2
}, {
  name: "Cobra",
  id: 31,
  weapon: 6,
  rarity: 2
}, {
  name: "Spectrum",
  id: 32,
  weapon: 6,
  rarity: 2
}, {
  name: "Anodized",
  creator: "Blitz-.",
  id: 33,
  weapon: 6,
  rarity: 3
}, {
  name: "Blunderbuss",
  creator: "Blitz-.",
  id: 34,
  weapon: 6,
  rarity: 2
}, {
  name: "Tv Tron A",
  type: 1,
  glow: true,
  scl: 1,
  sclMlt: 0.6,
  sitOff: 2.05,
  yOff: -3.2,
  id: 32,
  rarity: 4
}, {
  name: "Tv Tron B",
  tex: 1,
  type: 1,
  glow: true,
  scl: 1,
  sclMlt: 0.6,
  sitOff: 2.05,
  yOff: -3.2,
  id: 32,
  rarity: 4
}, {
  name: "Hollow Fade",
  keyW: "Knife",
  animInd: 1,
  glow: true,
  tex: 2,
  id: 0,
  type: 3,
  scl: 2,
  sclMlt: 0.9,
  yOff: -2,
  rarity: 5
}, {
  name: "Tv Tron C",
  tex: 2,
  type: 1,
  glow: true,
  scl: 1,
  sclMlt: 0.6,
  sitOff: 2.05,
  yOff: -3.2,
  id: 32,
  rarity: 4
}, {
  name: "Tv Tron D",
  tex: 3,
  type: 1,
  glow: true,
  scl: 1,
  sclMlt: 0.6,
  sitOff: 2.05,
  yOff: -3.2,
  id: 32,
  rarity: 4
}, {
  name: "AWP Dazzle",
  glow: true,
  id: 53,
  weapon: 1,
  rarity: 4
}, {
  name: "Octodance",
  glow: true,
  id: 54,
  weapon: 1,
  rarity: 4
}, {
  name: "Ice Fade",
  glow: true,
  id: 55,
  weapon: 1,
  rarity: 4
}, {
  name: "Frostlance",
  keyW: "Knife",
  animInd: 1,
  glow: true,
  tex: 3,
  id: 0,
  type: 3,
  scl: 2,
  sclMlt: 0.9,
  yOff: -2,
  rarity: 5
}, {
  name: "Frostbite",
  keyW: "Axe",
  animInd: 1,
  glow: true,
  id: 1,
  type: 3,
  scl: 2,
  sclMlt: 0.9,
  yOff: -0.5,
  rarity: 6
}];