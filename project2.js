const baseURL = "https://valorant-api.com/v1/";

function getUUID(name) {
  const UUIDs = {
    "breach": "agents/5f8d3a7f-467b-97f3-062c-13acf203c006/",
    "raze": "agents/f94c3b30-42be-e959-889c-5aa313dba261",
    "skye": "agents/6f2a04ca-43e0-be17-7f36-b3908627744d",
    "cypher": "agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    "sova" : "agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa",
    "killjoy": "agents/1e58de9c-4950-5125-93e9-a0aee9f98746",
    "viper": "agents/707eab51-4836-f488-046a-cda6bf494859",
    "phoenix": "agents/eb93336a-449b-9c1b-0a54-a891f7921d69",
    "brimstone": "agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    "yoru": "agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    "sage": "agents/569fdd95-4d10-43ab-ca70-79becc718b46",
    "reyna": "agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    "omen": "agents/8e253930-4c05-31dd-1b6c-968525494517",
    "jett": "agents/add6443a-41bd-e414-f6ad-e58d267f4e95",
    "neon": "agents/bb2a4828-46eb-8cd1-e765-15848195d751",
    "astra": "agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    "fade": "agents/dade69b4-4f5a-8528-247b-219e5a1facd6",
    "chamber": "agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
    "kayo": "agents/601dbbe7-43ce-be57-2a40-4abd24953621",
    "harbor": "agents/95b78ed7-4637-86d9-7e41-71ba8c293152"
  }
  return UUIDs[`${name}`];
}

function getRandUUID(number) {
  const UUIDs = {
    "1": "agents/5f8d3a7f-467b-97f3-062c-13acf203c006/",
    "2": "agents/f94c3b30-42be-e959-889c-5aa313dba261",
    "3": "agents/6f2a04ca-43e0-be17-7f36-b3908627744d",
    "4": "agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    "5" : "agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa",
    "6": "agents/1e58de9c-4950-5125-93e9-a0aee9f98746",
    "7": "agents/707eab51-4836-f488-046a-cda6bf494859",
    "8": "agents/eb93336a-449b-9c1b-0a54-a891f7921d69",
    "9": "agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    "10": "agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    "11": "agents/569fdd95-4d10-43ab-ca70-79becc718b46",
    "12": "agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    "13": "agents/8e253930-4c05-31dd-1b6c-968525494517",
    "14": "agents/add6443a-41bd-e414-f6ad-e58d267f4e95",
    "15": "agents/bb2a4828-46eb-8cd1-e765-15848195d751",
    "16": "agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    "17": "agents/dade69b4-4f5a-8528-247b-219e5a1facd6",
    "18": "agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
    "19": "agents/601dbbe7-43ce-be57-2a40-4abd24953621",
    "0": "agents/95b78ed7-4637-86d9-7e41-71ba8c293152"
  }
  return UUIDs[`${number}`];
}

function getcolor(name) {
  const colors = {
    "breach": " #ffc34d",
    "raze": "orange",
    "skye": "#40ff00",
    "cypher": "#00bfff",
    "sova" : "#00bfff",
    "killjoy": "#ffc34d",
    "viper": "#40ff00",
    "phoenix": "orange",
    "brimstone": "orange",
    "yoru": "#00bfff",
    "sage": "#00bfff",
    "reyna": "#ff00ff",
    "omen": "#00bfff",
    "jett": "#00bfff",
    "neon": "#00bfff",
    "astra": "#9933ff",
    "fade": "#cc0000",
    "chamber": "#ffc34d",
    "kayo": "#00bfff",
    "harbor": "#00bfff"
  }
  return colors[`${name}`];
}

function getUUIDfromColor(num) {
  const uuids = {
    "0":"00bffff",
    "1":"#ffc34d",
    "2":"orange",
    "3":"#40ff00",
    "4":"#00bfff",
    "5":"#00bfff",
    "6":"#ffc34d",
    "7":"#40ff00",
    "8":"orange",
    "9":"orange",
    "10":"#00bfff",
    "11":"#00bfff",
    "12":"#ff00ff",
    "13":"#00bfff",
    "14":"#00bfff",
    "15":"#00bfff",
    "16":"#9933ff",
    "17":"#cc0000",
    "18":"#ffc34d",
    "19":"#00bfff",
  }
  return uuids[`${num}`];
}


function notfound() {
  document.body.style.backgroundColor = "white"
  document.getElementById("name1").innerText = "Not Found";
  document.getElementById("description1").innerText = "Not Found";
  document.getElementById("role1").innerText = "Not Found";
  document.getElementById("img1").setAttribute("src","white.png");
  document.getElementById("ability1name").innerText = "Not Found";
  document.getElementById("ability1desc").innerText = "Not Found";
  document.getElementById("ability2name").innerText = "Not Found";
  document.getElementById("ability2desc").innerText = "Not Found";
  document.getElementById("ability3name").innerText = "Not Found";
  document.getElementById("ability3desc").innerText = "Not Found";
  document.getElementById("ability4name").innerText = "Not Found";
  document.getElementById("ability4desc").innerText = "Not Found";
}


function getAgentInfo() {
  let name = document.getElementById("text1").value;
  let name1 = name.toLowerCase()
  let fullURL = baseURL + getUUID(name1);
    $.get(fullURL,function(data){
        console.log(data);
        if (data.status === 404) {
          notfound();
        } else {
          document.body.style.backgroundColor = getcolor(name1);
          document.getElementById("name1").innerHTML = data.data["displayName"];
          document.getElementById("description1").innerHTML = data.data["description"];
          document.getElementById("img1").setAttribute("src", data.data["fullPortrait"]);
          document.getElementById("role1").innerHTML = data.data.role["displayName"];
          document.getElementById("ability1name").innerHTML = data.data.abilities[0]?.["displayName"];
          document.getElementById("ability1desc").innerHTML = data.data.abilities[0]?.["description"];
          document.getElementById("ability2name").innerHTML = data.data.abilities[1]?.["displayName"];
          document.getElementById("ability2desc").innerHTML = data.data.abilities[1]?.["description"];
          document.getElementById("ability3name").innerHTML = data.data.abilities[2]?.["displayName"];
          document.getElementById("ability3desc").innerHTML = data.data.abilities[2]?.["description"];
          document.getElementById("ability4name").innerHTML = data.data.abilities[3]?.["displayName"];
          document.getElementById("ability4desc").innerHTML = data.data.abilities[3]?.["description"];
        }
    }).fail(function(){
      notfound()
    }) 
}

function getRandomAgent() {
  let number = Math.floor(Math.random() * 20)
  let fullURL = baseURL + getRandUUID(number);
  $.get(fullURL,function(data){
    console.log(data);
    if (data.status === 404) {
      notfound();
    } else {
      document.body.style.backgroundColor = getUUIDfromColor(number);
      document.getElementById("name1").innerHTML = data.data["displayName"];
      document.getElementById("description1").innerHTML = data.data["description"];
      document.getElementById("img1").setAttribute("src", data.data["fullPortrait"]);
      document.getElementById("role1").innerHTML = data.data.role["displayName"];
      document.getElementById("ability1name").innerHTML = data.data.abilities[0]?.["displayName"];
      document.getElementById("ability1desc").innerHTML = data.data.abilities[0]?.["description"];
      document.getElementById("ability2name").innerHTML = data.data.abilities[1]?.["displayName"];
      document.getElementById("ability2desc").innerHTML = data.data.abilities[1]?.["description"];
      document.getElementById("ability3name").innerHTML = data.data.abilities[2]?.["displayName"];
      document.getElementById("ability3desc").innerHTML = data.data.abilities[2]?.["description"];
      document.getElementById("ability4name").innerHTML = data.data.abilities[3]?.["displayName"];
      document.getElementById("ability4desc").innerHTML = data.data.abilities[3]?.["description"];
    }
  }).fail(function(){ 
  notfound()
  }) 
}