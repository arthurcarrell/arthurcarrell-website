let currentTab = "home";
let tabNameToTitle = {"home":"Arthur Carrell", "about me":"About Me       "};
let desiredTabName = tabNameToTitle[currentTab];
let currentTabName = desiredTabName;
let currentUpdateStep = 0;
/* 
currentTab  -   the current tab that is selected, base is home.
tabNameToTitle  -   a map of the tab IDs to the title.
currentTabName  -   The name of the current tab, even if edited.
desiredTabName  -   This is the tab name that the title will work to achieve.
currentUpdateStep   -  The step that the title update is at, this is a global variable because this may need to be interrupted.
*/


/* 
Usually, I write less comments (although I still write comments that are needed),
but I am trying to heavily explain the code and explain every step of the way.
Also, I use "we" a lot, sort of a guide through the code, pretty sure I picked habit this up from tutorials.
*/ 

function switchTab(tabName) {
    // reset the updateStep, we are starting from the beginning
    currentUpdateStep = 0;

    // switch tab information.
    currentTab = tabName;
    desiredTabName = tabNameToTitle[currentTab];

    // hide the relative divs.
    if (currentTab == "about me") {
        document.getElementById("mainpagelinks").hidden = true;
        document.getElementById("aboutme").hidden = false;
    } else if (currentTab == "home") {
        document.getElementById("aboutme").hidden = true;
        document.getElementById("mainpagelinks").hidden = false;
    }
}


function updateTitle() {
    /*
    Iteratively update the title gradually.
    This should (hopefully) create a cool transition effect of the title changing. 
    */
   // get the text of the current title.
   let currentTabTxt = document.getElementById("homepage_text")

   // do some checks. is the currentUpdateStep above the length of desiredTabName? OR is currentUpdateStep trying to edit something that it cant? if so, stop to prevent an error
   if (currentUpdateStep > desiredTabName.length || currentUpdateStep > currentTabName.length-1) {return;}

   /* 
   This looks complicated but its just updating replacing a singular letter in the string.
   In JS, strings are access only, which means that you have to replace the WHOLE string if you want to change one thing.
   So, this adds together: the text before the letter I want to change, the changed letter and the text after the letter changed.
   */
   currentTabName = currentTabName.substring(0,currentUpdateStep) + desiredTabName[currentUpdateStep] + currentTabName.substring(currentUpdateStep + 1);

   // push the changes to homepage_text and iterate the currentUpdateStep
   document.getElementById("homepage_text").textContent = currentTabName;
   currentUpdateStep++;

}

let titleUpdater = setInterval(updateTitle, 75);