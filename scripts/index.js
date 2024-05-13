"use strict"

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  window.onload = function() {

    initfootballDropdown();

    const getbutton=document.getElementById("getdropitem");
    
    getbutton.onclick=GetDropItemValues;
 
 };
   
 function initfootballDropdown()
 {
    const footballList = document.getElementById("footballList");

    for (let i = 0; i < teams.length; i++) {

        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(teams[i].name, teams[i].teamcode); 
  
        // append the option as a child of (inside) the 
        // select element
        footballList.appendChild(theOption);
     }
  }

  function GetDropItemValues()
  {
    const footballList1 = document.getElementById("footballList");
    let selectedvalue=footballList1.value; 
   
    let team=teams.find(c=>c.teamcode==selectedvalue);
    let textContent="";

const containerp = document.getElementById("containerp");
   textContent = `You selected the ${team.name} (${team.teamcode}) who play in ${team.locatedIn}`;
       
  containerp.innerText=textContent;

  }
  