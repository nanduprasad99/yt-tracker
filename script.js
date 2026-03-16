const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vT9-C6I8cgaQuPAVggcc8osrWEjO7f8vJWC4hVQ83W78NkxrB_8QoBYDEGzWv0ljpMfKRJJTyM31mRF/pub?output=csv";

function loadData(){

fetch(sheetURL + "&t=" + new Date().getTime())

.then(res=>res.text())

.then(data=>{

const rows=data.trim().split("\n");

rows.shift();

let html="";

let today=new Date();

let activeAvenger="";
let activeEnd;

let leaderboard={};

let startDate;
let endDate;

rows.forEach((row,i)=>{

const cols=row.split(",");

const avenger=cols[0];
const from=cols[1];
const to=cols[2];

let status=(cols[3]||"").trim();

if(status!=="Done"){
status="Pending";
}

if(status==="Done"){

leaderboard[avenger]=(leaderboard[avenger]||0)+1;
}

const className=status==="Done"?"done":"pending";

const fromDate=new Date(from.split("/").reverse().join("-"));
const toDate=new Date(to.split("/").reverse().join("-"));

if(i===0){
startDate=fromDate;
}

endDate=toDate;

let activeClass="";

if(today>=fromDate && today<=toDate){

activeClass="active";

activeAvenger=avenger;

activeEnd=toDate;
}

html+=`
<div class="card ${className} ${activeClass}">

<div class="name">🦸 ${avenger}</div>

<div class="date">From: ${from}</div>
<div class="date">To: ${to}</div>

<div class="status">
${status==="Done"?"✅ Paid":"⏳ Pending"}
</div>

</div>
`;

});

document.getElementById("cards").innerHTML=html;

/* current avenger banner */

if(activeAvenger){

const days=Math.ceil((activeEnd-today)/(1000*60*60*24));

document.getElementById("currentAvenger").innerHTML=

`⚡ CURRENT AVENGER: <b>${activeAvenger}</b> | ${days} days remaining`;
}

/* progress bar */

const total=endDate-startDate;

const done=today-startDate;

const percent=Math.max(0,Math.min(100,(done/total)*100));

document.getElementById("progressBar").style.width=percent+"%";

/* leaderboard */

let lbHTML="";

Object.keys(leaderboard).forEach(name=>{

lbHTML+=`

<div class="leader">

<b>${name}</b><br>

⭐ ${leaderboard[name]}

</div>
`;
});

document.getElementById("leaderboard").innerHTML=lbHTML;

});

}

/* initial load */

loadData();

/* auto refresh */

setInterval(loadData,60000);
