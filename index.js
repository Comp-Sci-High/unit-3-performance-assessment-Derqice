const express = require("express")
const app = express()

let data= {
  "characters": [
    {
      "id": "luffy",
      "name": "Monkey D. Luffy",
      "epithet": "Straw Hat",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": "hito_hito_nika",
      "haki": {
        "observation": true,
        "armament": true,
        "conquerors": true,
        "advanced": {
          "observation": true,
          "armament": true,
          "conquerors": true
        }
      },
      "weapon": null,
      "description": "Captain of the Straw Hat Pirates and wielder of the Sun God Nika power, embodying freedom."
    },
    {
      "id": "zoro",
      "name": "Roronoa Zoro",
      "epithet": "Pirate Hunter",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": true,
        "armament": true,
        "conquerors": true,
        "advanced": {
          "observation": false,
          "armament": true,
          "conquerors": false
        }
      },
      "weapon": "Enma, Wado Ichimonji, Sandai Kitetsu",
      "description": "Combatant of the Straw Hats and one of the world’s strongest swordsmen."
    },
    {
      "id": "nami",
      "name": "Nami",
      "epithet": "Cat Burglar",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": false,
        "armament": false,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": "Clima-Tact",
      "description": "Navigator of the Straw Hats who manipulates weather using advanced technology."
    },
    {
      "id": "usopp",
      "name": "Usopp",
      "epithet": "God Usopp",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": true,
        "armament": false,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": "Kuro Kabuto",
      "description": "Sniper of the Straw Hats known for long-range combat and deceptive tactics."
    },
    {
      "id": "sanji",
      "name": "Vinsmoke Sanji",
      "epithet": "Black Leg",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": true,
        "armament": true,
        "conquerors": false,
        "advanced": {
          "observation": true
        }
      },
      "weapon": "Martial Arts (Legs)",
      "description": "Cook and combatant of the Straw Hats with enhanced genetics and powerful kicking techniques."
    },
    {
      "id": "chopper",
      "name": "Tony Tony Chopper",
      "epithet": "Cotton Candy Lover",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": "hito_hito",
      "haki": {
        "observation": false,
        "armament": false,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": null,
      "description": "Doctor of the Straw Hats who uses Rumble Balls to enhance his Devil Fruit forms."
    },
    {
      "id": "robin",
      "name": "Nico Robin",
      "epithet": "Devil Child",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": "hana_hana",
      "haki": {
        "observation": false,
        "armament": true,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": null,
      "description": "Archaeologist of the Straw Hats and survivor of Ohara who can read Poneglyphs."
    },
    {
      "id": "franky",
      "name": "Franky",
      "epithet": "Iron Man",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": false,
        "armament": false,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": "Cyborg Weaponry",
      "description": "Shipwright of the Straw Hats and a self-modified cyborg."
    },
    {
      "id": "brook",
      "name": "Brook",
      "epithet": "Soul King",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": "yomi_yomi",
      "haki": {
        "observation": false,
        "armament": true,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": "Shikomizue",
      "description": "Musician of the Straw Hats who returned from death and controls soul-based abilities."
    },
    {
      "id": "jinbe",
      "name": "Jinbe",
      "epithet": "Knight of the Sea",
      "affiliation": "Straw Hat Pirates",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": true,
        "armament": true,
        "conquerors": false,
        "advanced": {}
      },
      "weapon": "Fish-Man Karate",
      "description": "Helmsman of the Straw Hats and a master of Fish-Man Karate."
    },
    {
      "id": "loki",
      "name": "Loki",
      "epithet": "Prince of Elbaf",
      "affiliation": "Elbaf",
      "status": "Alive",
      "devilFruit": null,
      "haki": {
        "observation": true,
        "armament": true,
        "conquerors": "Unknown",
        "advanced": {}
      },
      "weapon": "Unknown",
      "description": "Prince of Elbaf introduced in the latest chapters, possessing immense giant strength and a dangerous reputation."
    }
  ],
  "devilFruits": [
    {
      "id": "nika",
      "name": "Hito Hito no Mi, Model: Nika",
      "type": "Zoan",
      "users": ["Monkey D. Luffy"],
      "abilities": [
        "Rubber body",
        "Gear transformations",
        "Reality-bending freedom combat"
      ],
      "awakened": true
    },
    {
      "id": "hito",
      "name": "Hito Hito no Mi",
      "type": "Zoan",
      "users": ["Tony Tony Chopper"],
      "abilities": [
        "Human transformation",
        "Enhanced intelligence"
      ],
      "awakened": false
    },
    {
      "id": "hana",
      "name": "Hana Hana no Mi",
      "type": "Paramecia",
      "users": ["Nico Robin"],
      "abilities": [
        "Body part replication",
        "Gigantic limb manifestation"
      ],
      "awakened": false
    },
    {
      "id": "yomi",
      "name": "Yomi Yomi no Mi",
      "type": "Paramecia",
      "users": ["Brook"],
      "abilities": [
        "Resurrection",
        "Soul manipulation",
        "Underworld ice"
      ],
      "awakened": false
    },
    {
      "id": "jaket",
      "name": "Jaket Jaket no Mi",
      "type": "Paramecia",
      "users": ["Kelly Funk"],
      "abilities": [
        "Allows the user to transform into a wearable jacket",
        "When worn by another person, the user can fully control the wearer's body",
        "Grants the wearer access to the user's physical strength and combat skill"
      ],
      "limitations": [
        "The user is completely helpless unless worn by another person",
        "Requires full cooperation from the wearer",
        "The user's own body cannot move independently while transformed"
      ],
      "awakened": false,
      "description": "An extremely niche and comical Devil Fruit that turns the user into living clothing."
    }
  ]
}

    

app.use((req,res,next)=>{
    console.log(req.method + "/" + req.url)
    next()
})
app.get("/",(req,res)=>{
res.send("Welcome to the One Piece Api")
})
app.get("/docs",(req,res)=>{
    res.send("All Available Routes:\n/characters/luffy\n/characters/zoro\n/characters/nami\n/characters/usopp\n/characters/sanji\n/characters/chopper\n/fruits/Zoan/hito\n/characters/robin\n/fruits/Paramecia/hana\n/fruits/Zoan/nika\n/characters/franky\n/characters/brook\n/fruits/Paramecia/yomi\n/characters/jinbe\n/characters/loki\n/fruits/Paramecia/jaket")
})
app.get("/characters/:name",(req,res)=>{
    let id;
for(let i=0; i<data.characters.length;i++){
    if(data.characters[i].id==req.params.name){
      id=i
    }
}
res.json(data.characters[id])
})
app.get("/fruits/:type/:name",(req,res)=>{
    let id;
for(let i=0; i<data.devilFruits.length;i++){
    if((data.devilFruits[i].type==req.params.type)&&(data.devilFruits[i].id==req.params.name)){
      id=i
    }
}
res.json(data.devilFruits[id])
})
app.use((req,res,next)=>{
res.status(400).send("400 Not Found")
})
app.listen(3000,()=>{
    console.log("Server Is Running")
})

