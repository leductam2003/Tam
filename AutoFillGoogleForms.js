// ==UserScript==
// @name         Autofill Google Forms
// @namespace    http://t.me/leductam2003
// @version      0.1
// @description  This script will help you fill infomation!
// @author       Le Duc Tam
// @match        *docs.google.com/forms/*
// @icon         https://i.ibb.co/nf91jmR/icon48.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


var title = document.getElementsByClassName("freebirdFormviewerViewHeaderTitle exportFormTitle freebirdCustomFont");
if (title.length >= 1) {
    var buttonClick = document.createElement("div");
    buttonClick.innerHTML = "<br/><button class=\"FillButton\" style=\"color:#494949!important;text-transform:uppercase;text-decoration:none;background:#fff;padding:10px;border:4px solid #494949!important;display:inline-block;transition:all .4s ease 0;\">Fill the form !</button>";
    title[0].appendChild(buttonClick);
    buttonClick.addEventListener("click", function() {
        fillTheForm();
    });
}

var Infomation = {
    Telegram: "@leductam2003",
    Reddit: "donthave",
    Name: "Tam Le",
    Email: "leductam2003@gmail.com",
    Twitter: "@Tun47262666",
    Facebook: "https://www.facebook.com/leductam1569",
    Instagram: "leductam23",
    Medium: "zzluciferdzzzz",
    Discord: "leductam#0567",
    BSCWallet: "0xd4E4Fb7E5Bed57F20EF4b16e2Ed044974472D69F",
    ETHWallet: "0xd4E4Fb7E5Bed57F20EF4b16e2Ed044974472D69F",
    WavesWallet: "3PBvJYZqY5rrKB2fsGmiv6k24Rstndums3G"
}

var TelegramRegex = [
    /Telegram Username/i,
    /Telegram User name/i,
    /Telegram/i
];
var DiscordRegex = [
    /Discord ID/i,
    /Discord Username/i,
    /Discord User name/i,
    /Discord/i
];
var TwitterRegex = [
    /Twitter Username/i,
    /Twitter/i
];
var BSCWalletRegex = [
    /BSC Wallet/i,
    /BSC Address/i
];
var EmailRegex = [
    /Email/i,
    /Email Address/i
];
var FacebookRegex = [
    /Facebook/i
];
var NameRegex = [
    /Name/i
];
var WavesWalletRegex = [
    /Waves Wallet/i,
    /Waves Address/i
];
var MediumRegex = [
    /Medium Username/i,
    /Medium User name/i,
    /Medium/i
];
var ETHWalletRegex = [
    /ETH Address/i,
    /ETH Wallet/i
];
var RedditRegex = [
    /Reddit Username/i,
    /Reddit Username/i
];
var InstagramRegex = [
    /Instagram/i,
    /Instagram User name/i,
    /Instagram Username/i
];

function fillTheForm() {

    function findInput(stringText, regexS) {
        return regexS.test(stringText)
    }

    function checkAllRegex(arrayRegex, a, i) {
        var stringT = a[i].children[0].innerText;
        var found = false;
        for (var i = 0; i < arrayRegex.length; i++) {
            if (arrayRegex[i].test(stringT)) {
                found = true;
                break;
            } else {
                found = false;
                continue;
            }
        }
        if (found) return true;
    }

    function typeValue(textToType) {
        document.execCommand('insertText', false, textToType);
    }

    function focusAndType(a, i, nameInput) {
        var input = a[i].children[1].children[0].children[0].children[0].children[0].childNodes[0];
        input.focus();
        if (input.value == null || input.value == '') {
            switch (nameInput) {
                case "Telegram":
                    typeValue(Infomation.Telegram)
                    break;
                case "Name":
                    typeValue(Infomation.Name)
                    break;
                case "Twitter":
                    typeValue(Infomation.Twitter)
                    break;
                case "BSCWallet":
                    typeValue(Infomation.BSCWallet)
                    break;
                case "ETHWallet":
                    typeValue(Infomation.ETHWallet)
                    break;
                case "Facebook":
                    typeValue(Infomation.Facebook)
                    break;
                case "Email":
                    typeValue(Infomation.Email)
                    break;
                case "Medium":
                    typeValue(Infomation.Medium)
                    break;
                case "WavesWallet":
                    typeValue(Infomation.WavesWallet)
                    break;
                case "Instagram":
                    typeValue(Infomation.Instagram)
                    break;
                case "Discord":
                    typeValue(Infomation.Discord)
                    break;
                case "Reddit":
                    typeValue(Infomation.Reddit)
                    break;
            }
        }
    }

    var allInputInPage = document.getElementsByClassName("freebirdFormviewerComponentsQuestionBaseRoot")
    for (var i = 0; i < allInputInPage.length; i++) {
        //Telegram
        if (checkAllRegex(TelegramRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Telegram")
            //Twitter
        if (checkAllRegex(TwitterRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Twitter")
            //Facebook
        if (checkAllRegex(FacebookRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Facebook")
            //Instagram
        if (checkAllRegex(InstagramRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Instagram")
            //BSCWallet
        if (checkAllRegex(BSCWalletRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "BSCWallet")
            //ETHWallet
        if (checkAllRegex(ETHWalletRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "ETHWallet")
            //WavesWallet
        if (checkAllRegex(WavesWalletRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "WavesWallet")
            //Reddit
        if (checkAllRegex(RedditRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Reddit")
            //Medium
        if (checkAllRegex(MediumRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Medium")
            //Discord
        if (checkAllRegex(DiscordRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Discord")
            //Email
        if (checkAllRegex(EmailRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Email")
            //Name
        if (checkAllRegex(NameRegex, allInputInPage, i)) focusAndType(allInputInPage, i, "Name")
    }
}
})();
