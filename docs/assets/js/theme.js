const themeAlertId = 'themeAlert';
const cookieName = 'theme';
const themes = ['virk', 'borgerdk'];
const themeStylesheets = ['main-virk', 'main-borgerdk'];
const isDebugging = false;
const demoSelectorId = 'themeSelector';

document.addEventListener("DOMContentLoaded", function(){
    debug('cookie', getThemeCookie());

    // verify cookie contains correct value
    verifyCookieOrDelete();

    // show theme alert on pages
    themeAlertMessage();

    // set theme if ?theme=virk|borgerdk
    isThemeSetInUrl();

    // set cookie if missing
    setCookieIfMissing();

    // load stylesheet
    setStylesheet();

    setFooterSwitcher();


});

let isThemeSetInUrl = function(){
    let parameters = window.location.search.substr(1);
    if(parameters === ""){
        return;
    }
    parameters = parameters.split('&');
    for (let i = 0; i < parameters.length; i++){
        let split = parameters[i].split('=');
        let key = split[0];
        let value = split[1];
        if(key === "theme" && themes.indexOf(value) >= 0){
            setThemeCookie(value);
            return;
        }
    }
}

let setCookieIfMissing = function (){
    if(!isCookieSet()){
        debug('Cookie was not set', getThemeCookie());
        setRandomThemeCookie();
    }
};
let verifyCookieOrDelete = function(){
    if(isCookieSet()) {
        let themeChosen = getThemeCookie();
        if(themes.indexOf(themeChosen) < 0){
            deleteCookie(cookieName);
            debug('cookie was deleted:', themeChosen);
        }
    }
};

let themeAlertMessage = function(){
    let alert = document.getElementById(themeAlertId);
    if(!isCookieSet() && alert !== null) {
        showThemeAlert();
        let closeButtons = alert.getElementsByClassName('alert-close');
        for (let b = 0; b < closeButtons.length; b++) {
            closeButtons[b].addEventListener('click', function () {
                hideThemeAlert();
            });
        }
        document.getElementById('borgerdkThemeBtn').addEventListener('click', onBorgerdkThemeSelected);
        document.getElementById('virkThemeBtn').addEventListener('click', onVirkThemeSelected);
    }
};

let onVirkThemeSelected = function(){
    setThemeCookie(themes[0]);
    hideThemeAlert();
    location.reload();
};
let onBorgerdkThemeSelected = function(){
    setThemeCookie(themes[1]);
    hideThemeAlert();
    location.reload();
};

let setStylesheet = function(){
    let themeChosen = getThemeCookie();
    debug('stylesheet:', themeChosen);
    const indexOfTheme = themes.indexOf(themeChosen);

    var lnk = document.createElement('link');
    lnk.type='text/css';
    lnk.rel='stylesheet';
    lnk.href= '/dkfds-plugins-docs/assets/style/'+themeStylesheets[indexOfTheme]+'.css';

    document.getElementsByTagName('head')[0].appendChild(lnk);
};

let hideThemeAlert = function(){
    if(document.getElementById(themeAlertId) !== null) {
        document.getElementById(themeAlertId).classList.add('d-none');
    }
};

let showThemeAlert = function(){
    if(document.getElementById(themeAlertId) !== null) {
        document.getElementById(themeAlertId).classList.remove('d-none');
    }
};

let setRandomThemeCookie = function(){
    let randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setThemeCookie(randomTheme);
};
let setThemeCookie = function(theme){
    if(themes.indexOf(theme) >= 0) {
        debug('setting cookie', theme);
        setCookie(cookieName, theme, 365);
        return true;
    }
    return false;

};

let isCookieSet = function(){
    let cookie = getCookie(cookieName);
    if(cookie === null){
        return false;
    }
    return true;
};

let getThemeCookie = function(){
    return getCookie(cookieName);
};

let setCookie = function (name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    let cookie = name + "=" + encodeURIComponent(value);

    if(typeof daysToLive === "number") {

        let d = new Date();
        d.setTime(d.getTime() + (daysToLive*24*60*60*1000));
        cookie += ";expires="+ d.toUTCString();

        cookie += ';path=/';
        debug('Setting cookie', cookie);
        document.cookie = cookie;
    }
};

let deleteCookie = function ( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
};
let getCookie = function(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
};


let setCorrectSelectedtheme = function(){
    let demoSelector = document.getElementById(demoSelectorId);
    let options = demoSelector.getElementsByTagName('option');
    let cookie = getThemeCookie();

    for (let i = 0; i < options.length; i++){
        if(cookie === options[i].value){
            demoSelector.selectedIndex = i;
        }
    }
};

let setFooterSwitcher = function(){
    if(document.getElementById('changeTheme') !== null) {
        let cookie = getThemeCookie();
        let theme = "";
        switch (cookie) {
            case 'virk':
                theme = "Borger.dk";
                break;
            case 'borgerdk':
                theme = "Virk";
                break;

        }

        var text = "Skift til " + theme + " tema";
        document.getElementById('changeThemeText').innerText = text;

        document.getElementById('changeTheme').addEventListener('click', toggleTheme);
    }
};
let toggleTheme = function(){
    let cookie = getThemeCookie();
    if(cookie === 'virk'){
        onBorgerdkThemeSelected();
    } else if(cookie === 'borgerdk'){
        onVirkThemeSelected();
    }
};

let debug = function(title, value){
    if(isDebugging){
        console.log(title, value);
    }
};
