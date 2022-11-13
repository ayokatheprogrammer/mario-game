import kaboom from "kaboom"

//initialize context
kaboom({
  background: [0, 0, 0]
})

loadSprite("block", "sprites/block.png")
loadSprite("brick", "sprites/brick.png")
loadSprite("coin", "sprites/coin.png")
loadSprite("question-box", "sprites/question-box.png")
loadSprite("question-box", "sprites/question-box.png")
loadSprite("unboxed", "sprites/unboxed.png")
loadSprite("pipe-left", "sprites/pipe-left.png")
loadSprite("pipe-right", "sprites/pipe-right.png")
loadSprite("pipe-top-left", "sprites/pipe-top-left.png")
loadSprite("pipe-top-right-side", "sprites/pipe-top-right-side.png")
loadSprite("evil-mushroom", "sprites/evil-mushroom.png")
loadSprite("evil-mushroom", "sprites/evil-mushroom.png")
loadSprite("mario-standing", "sprites/mario-standing.png")

const player = add([
  sprite("mario-standing"),
  
  pos(30, 0),
  area(),
  body(),
])

const map = [
  "                     ",
  "                     ",
  "                     ",
  "                     ",
  "                     ",
  "                     ",
  "    % =*=%=          ",
  "                     ",
  "                     ",
  "                     ",
  "                -+   ",
  "           ^  ^ ()   ",
  "                     ",
  "kkkkkkkkkkkkkkkkkk kk",
  "kkkkkkkkkkkkkkkkkk kk",
]

const levelCONFIG = {
  width: 20,
  height: 20,
  "=": () => [
    sprite("block"),
  ],
  "k": () => [
    sprite("brick"),solid(),area(),
  ],
  "$": () => [
    sprite("coin"),
  ],
  "%": () => [
    sprite("question-box"), "coins-surprise"
  ],

  "*": () => [
    sprite("question-box"), "mushroom-surprise"
  ],
  "}": () => [
    sprite("unboxed"),
  ],
  "(": () => [
    sprite("pipe-left"),solid(),area(),
  ],
  ")": () => [
    sprite("pipe-right"),solid(),area(),
  ],
  "-": () => [
    sprite("pipe-top-left"),solid(),area(),
  ],
  "+": () => [
    sprite("pipe-top-right-side"),solid(),area(),
  ],
  "^": () => [
    sprite("evil-mushroom"), scale(2),
  ],
  "#": () => [
    sprite("evil-mushroom"),
  ],

}
addLevel(map, levelCONFIG)

const move_speed =160

keyPress("left",() =>{
  player.move(-move_speed,0)
})

keyPress("right",() =>{
  player.move(move_speed,0)
})
const fred =400

keyPress("space",() =>{
  player.jump(fred)
})