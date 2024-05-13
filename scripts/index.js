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

    let theOption1 = new Option("Select a team", ""); 
    footballList.appendChild(theOption1);

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
    let textContent="";
    if(selectedvalue !="")
    {
        let team=teams.find(c=>c.teamcode==selectedvalue);
        const containerp = document.getElementById("containerp");
        textContent = `You selected the ${team.name} (${team.teamcode}) who play in ${team.locatedIn}`;
    }
    containerp.innerText=textContent;
   
  }
  

  
  