const cards = [];
let potocard = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pfbCLgU1J45byfzW2tWbBtm5kPwxRnQ2QA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjJHry5Wuae0Md92wSoNDFbEzFJLEvmn1UQ&usqp=CAU",
  "https://sites.google.com/site/all18in/_/rsrc/1401806935314/wallpapers/Amazing%20Beach.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806917373/wallpapers/Greece2015.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806904727/wallpapers/Eiffel%20Tower.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806871147/wallpapers/Awesome%203d%20View.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806850490/wallpapers/Landscape%20Nature%20Trees%20Fields%20wallpaper.jpg?height=301&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806821634/wallpapers/Park%20Bench.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806833582/wallpapers/Ocean%20Nature.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806772411/wallpapers/Flower%20%282%29.jpg?height=355&width=400 ",
  "https://sites.google.com/site/all18in/_/rsrc/1401806811327/wallpapers/Summer%20Time.jpg?height=311&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806755596/wallpapers/Health%20in%20a%20basket.jpg?height=250&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401807050068/wallpapers/%D7%A2%D7%A5.jpg?height=250&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806818485/wallpapers/boat%20at%20sea.jpg?height=225&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806880760/wallpapers/Autumn%20Grape%20wallpaper.jpg?height=301&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806877880/wallpapers/Romatic%20View%20Hd.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806814545/wallpapers/Perfect%20Day%20wallpaper.jpg?height=301&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806868584/wallpapers/Frozen%20Berries%20Macro%20wallpaper.jpg?height=301&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806842838/wallpapers/Hd%20Nature%282%29.jpg?height=355&width=400",
  "https://sites.google.com/site/all18in/_/rsrc/1401806838182/wallpapers/Ocean%20Beach.jpg?height=355&width=400",
];
let opencards = [];
const users = [
  { name: "yosef", winers: 0, points: 0 },
  { name: "moria", winers: 0, points: 0 },
];
let toruser = 0;
let counttarget = [];

let play = document.getElementById("playrs");
span = document.createElement("span");

function addtocards(a) {
  for (i = 0; i < a; i++) {
    cards.push({ id: i + "", txt: i, url: potocard[i] });
    cards.push({ id: i + "" + i, txt: i, url: potocard[i] });
  }
}
const board = document.getElementById("board");
function addCards(v, i, arr) {
  const element = document.createElement("div");
  element.id = v.txt;

  let img = document.createElement("img");
  img.id = v.id + "img";

  //  img.src=("https://sites.google.com/site/all18in/wallpapers")
  element.appendChild(img);

  element.className = "card hiden";
  return board.appendChild(element);
}

function addphoto(e) {
  let img = e.children[0];
  img.src = potocard[e.id];
  img.style = "height: 100px; width:100px;";
}
function removephoto(e) {
  let img = e.children[0];
  img.style = "height:0px; width:0px;";
}

board.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className == "card hiden") {
    counttarget.push(e.target);
    if (counttarget.length > 2) {
      return;
    }
    opencards.push(e.target);
    let countopen = opencards.length - 1;
    opencards[countopen].className += " open";

    addphoto(opencards[countopen]);

    e.target.style.color = "red";
    if (opencards.length % 2 == 0) {
      document.getElementById("0").style.backgroundImage =
        "url:https://sites.google.com/site/all18in/_/rsrc/1401806924591/wallpapers/Island.jpg?height=355&width=400";
      if (opencards[countopen].id == opencards[countopen - 1].id) {//2 card is true
        console.log("good"),
          (opencards[countopen].className += " open"),
          users[toruser].points++;
        document.getElementById("name0").innerHTML = textuser(0);
        document.getElementById("name1").innerHTML = textuser(1);
        counttarget = [];
        if (opencards.length == cards.length) {
          document.getElementById("board").innerHTML = findwinner();
          document.getElementById("board").style.fontSize = "100px";
          a = document.getElementById("board");
          a.appendChild(document.createElement("submit"));

          setTimeout(() => {
            window.location.reload();
          }, 4000);
        } ////to win
      } else {
        let name0 = document.getElementById("name0");
        let name1 = document.getElementById("name1");
        if (toruser == 1) {
          (toruser = 0),
            name0.classList.add("userplay"),
            name1.classList.remove("userplay");
        } else {
          (toruser = 1),
            name1.classList.add("userplay"),
            name0.classList.remove("userplay");
        }
        if (opencards.length % 2 == 0) {
          setTimeout(() => {
            opencards[countopen].className = "card hiden";
            removephoto(opencards[countopen]);
            opencards.pop();
            opencards[countopen - 1].className = "card hiden";
            removephoto(opencards[countopen - 1]);
            opencards.pop();
            counttarget = [];
          }, 400);
        }
      }
    }
  }
  document.getElementById("name0").innerHTML = textuser(0);
  document.getElementById("name1").innerHTML = textuser(1);
});
// }

let ww = document.getElementById("submit");
ww.addEventListener(
  "click",
  (e) => {
    users[0].name =
      document.forms[0][0].value != ""
        ? document.forms[0][0].value
        : users[0].name;
    users[1].name =
      document.forms[0][1].value != ""
        ? document.forms[0][1].value
        : users[1].name;

    repeatcard = ` ${users.length}fr `.repeat(users.length);
    document.getElementById("playrs").style.gridTemplateColumns = repeatcard;
    document.getElementById("name0").innerHTML = textuser(0);
    document.getElementById("name1").innerHTML = textuser(1);
    document.getElementById("name0").className = "userplay";

    addtocards(Number(document.getElementById("number").value));
    let setgrid=getgrid()
    document.getElementById("board").style.gridTemplateColumns=setgrid
    shuffleCards(cards);

    cards.forEach(addCards);
    document.getElementById("board").gridTemplateColumns = getgrid();

    document.getElementById("ask").remove();
  },
  400
);

function shuffleCards(v, i, arr) {
  cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

function textuser(e) {
  return `${users[e].name}<br/>points :${users[e].points}`;
}

function findwinner() {
  let u0 = users[0].points;
  let u1 = users[1].points;
  if (u0 > u1) {
    return ` ${users[0].name} is the winner!!`;
  } else if (u0 == u1) {
    return ` ${users[1].name} and ${users[0].name} you are the winner's!!!`;
  } else {
    return ` ${users[1].name} is the winner!!`;
  }
}
function getgrid() {
  // let  num=Number(document.getElementById("number").value)
  let num = cards.length / 2;
  if (num <= 6) {
    return "auto ".repeat(num);
  } else {
    return "auto ".repeat(6);
  }
}
