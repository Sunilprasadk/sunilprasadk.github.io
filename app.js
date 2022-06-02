//Tab Link
let Overview = document.getElementById("Overview");
let Approval = document.getElementById("Approval");
let PolicyAcad = document.getElementById("PolicyAcad");
let Administration = document.getElementById("Administration");
let Finance = document.getElementById("Finance");



//Tab View Div
let overviewSlider = document.getElementById("overview_slide");
let approvalSlider = document.getElementById("approval_slide");
let policyacademicSlider = document.getElementById("approval_slide");
let adminSlider = document.getElementById("admin_slide");
let financeSlider = document.getElementById("finance_slide");


//Tab Insider Text Content


let sliderTitle = document.getElementById("slider_content-title");
let sliderBottomTitle = document.getElementById("slider_content-bottom--title");


//Data

let overviewObject = {
    data1:{
        sliderContentTitle: "Meeting",
        sliderContentBottomTitle : "Intense meeting with team members.",
        sliderimage:"images/1.jpg"
    },
    data2:{
        sliderContentTitle: "Working",
        sliderContentBottomTitle : "People working seriously in the current project.",
        sliderimage:"images/2.jpg"
    }
};

let approvalObject = {
    data1:{
        sliderContentTitle: "Working",
        sliderContentBottomTitle : "People working seriously in the current project.",
        sliderimage:"images/2.jpg"
    }
};

let policyAcadObject = {
    data1:{
        sliderContentTitle: "Meeting",
        sliderContentBottomTitle : "Intense meeting with team members.",
        sliderimage:"images/1.jpg"
    }
};

let adminObject = {
    data1:{
        sliderContentTitle: "Meeting",
        sliderContentBottomTitle : "Intense meeting with team members.",
        sliderimage:"images/1.jpg"
    },
    data2:{
        sliderContentTitle: "Working",
        sliderContentBottomTitle : "People working seriously in the current project.",
        sliderimage:"images/2.jpg"
    }
};


let financeObject = {
    data1:{
        sliderContentTitle: "Working",
        sliderContentBottomTitle : "People working seriously in the current project.",
        sliderimage:"images/2.jpg"
    }
};

//OVERVIEW
let overviewCount=0;
function overviewAction(){

    //for tab active indicator
    Approval.classList.remove("selectLink");
    PolicyAcad.classList.remove("selectLink");
    Administration.classList.remove("selectLink");
    Finance.classList.remove("selectLink");
    Overview.classList.add("selectLink");

    //to avoid another previous clicked content here - first time click
    approvalSlider.textContent="";
    policyacademicSlider.textContent="";
    adminSlider.textContent="";
    financeSlider.textContent="";
    if(overviewCount===0){
        for (const sor in overviewObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${overviewObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${overviewObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${overviewObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            overviewSlider.appendChild(newEl);
        }
    }else{
        //to avoid another previous clicked content here - again time click from another
        overviewSlider.textContent="";
        approvalSlider.textContent="";
        policyacademicSlider.textContent="";
        adminSlider.textContent="";
        financeSlider.textContent="";
        //to print it's content in data
        for (const sor in overviewObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${overviewObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${overviewObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${overviewObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            overviewSlider.appendChild(newEl);
        }
    }
    overviewCount=1;
}

//APPROVAL
let approvalCount=0;
function approvalAction(){
    Overview.classList.remove("selectLink");
    Approval.classList.add("selectLink");
    PolicyAcad.classList.remove("selectLink");
    Finance.classList.remove("selectLink");
    Administration.classList.remove("selectLink");
    overviewSlider.textContent="";
    policyacademicSlider.textContent="";
    adminSlider.textContent="";
    financeSlider.textContent="";
    
    if(approvalCount===0){
        for (const sor in approvalObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${approvalObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${approvalObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${approvalObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            approvalSlider.appendChild(newEl);
        }
    }else{
        approvalSlider.textContent="";
        overviewSlider.textContent="";
        policyacademicSlider.textContent="";
        adminSlider.textContent="";
        financeSlider.textContent="";
        for (const sor in approvalObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${approvalObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${approvalObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${approvalObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            approvalSlider.appendChild(newEl);
        }
    }
    approvalCount=1;
}



//POLICY & ACADEMIC
let policyAcadCount=0;
function policyAcadAction(){
    Overview.classList.remove("selectLink");
    Approval.classList.remove("selectLink");
    Finance.classList.remove("selectLink");
    Administration.classList.remove("selectLink");
    PolicyAcad.classList.add("selectLink");
    overviewSlider.textContent="";
    approvalSlider.textContent="";
    adminSlider.textContent="";
    financeSlider.textContent="";
    
    if(policyAcadCount===0){
        for (const sor in policyAcadObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${policyAcadObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${policyAcadObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${approvalObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            policyacademicSlider.appendChild(newEl);
        }
    }else{
        policyacademicSlider.textContent="";
        overviewSlider.textContent="";
        approvalSlider.textContent="";
        financeSlider.textContent="";
        adminSlider.textContent="";
        for (const sor in policyAcadObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${policyAcadObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${policyAcadObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${approvalObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            policyacademicSlider.appendChild(newEl);
        }
    }
    policyAcadCount=1;
}


//ADMINISTRATION
let adminCount=0;
function adminAction(){
    Overview.classList.remove("selectLink");
    Approval.classList.remove("selectLink");
    PolicyAcad.classList.remove("selectLink");
    Finance.classList.remove("selectLink");
    Administration.classList.add("selectLink");
    overviewSlider.textContent="";
    approvalSlider.textContent="";
    policyacademicSlider.textContent="";
    financeSlider.textContent="";
    
    if(adminCount===0){
        for (const sor in adminObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${adminObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${adminObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${adminObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            adminSlider.appendChild(newEl);
        }
    }else{
        adminSlider.textContent="";
        policyacademicSlider.textContent="";
        overviewSlider.textContent="";
        financeSlider.textContent="";
        approvalSlider.textContent="";
        for (const sor in adminObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${adminObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${adminObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${adminObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            adminSlider.appendChild(newEl);
        }
    }
    adminCount=1;
}


//FINANCE
let financeCount=0;
function financeAction(){
    Overview.classList.remove("selectLink");
    Approval.classList.remove("selectLink");
    PolicyAcad.classList.remove("selectLink");
    Finance.classList.add("selectLink");
    Administration.classList.remove("selectLink");
    overviewSlider.textContent="";
    approvalSlider.textContent="";
    policyacademicSlider.textContent="";
    adminSlider.textContent="";
    
    if(financeCount===0){
        for (const sor in financeObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${financeObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${financeObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${financeObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            financeSlider.appendChild(newEl);
        }
    }else{
        financeSlider.textContent="";
        policyacademicSlider.textContent="";
        overviewSlider.textContent="";
        adminSlider.textContent="";
        approvalSlider.textContent="";
        for (const sor in financeObject) {
            const newEl = document.createElement("div");
            newEl.style.backgroundImage=`url("${financeObject[sor].sliderimage}")`
            newEl.className="slider_content";
            newEl.innerHTML=`
            <h2 id="slider_content-title" class="slider_content-title">${financeObject[sor].sliderContentTitle}</h2>
                <div class="slider_content-bottom">
                    <h4 id="slider_content-bottom--title" class="slider_content-bottom--title">${financeObject[sor].sliderContentBottomTitle}</h4>
                    <a href="#" class="slider_content-bottom--link">Learn More</a>
                </div>`;
            financeSlider.appendChild(newEl);
        }
    }
    financeCount=1;
}


//TRIGGERS


Overview.addEventListener("click", overviewAction);
Approval.addEventListener("click", approvalAction);
PolicyAcad.addEventListener("click", policyAcadAction);
Administration.addEventListener("click", adminAction);
Finance.addEventListener("click", financeAction);