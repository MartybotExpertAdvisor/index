//vvvvvvv   PRE LOADER to COMPLETE WEB PAGE contents    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappearloader");
}
//^^^^^^   PRE LOADER to COMPLETE WEB PAGE contents    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// vvvvvvv  DISABLE RIGHT CLICK, CTRL, F12 to explore the contents of WEB PAGE  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
// Disable the rightclick and ctrl and f12 keys to find the source file
// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }

    if(event.ctrlKey && (event.key === "C")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
    if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault();
        alert("Sorry, you can't do this 💔");
    }
});

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
    alert("Sorry, you can't do this 💔");
    e.preventDefault();
    }, false);
}
else {
    document.attachEvent('oncontextmenu', function() {
    alert("Sorry, you can't do this 💔");
    window.event.returnValue = false;
    });
}

//disable F12 keys
document.onkeydown = function (event)
{
event = (event || window.event);
    if (event.keyCode == 123 || event.keyCode == 18)
    {
        alert("Sorry, you can't do this 💔");
        return false;
    }
}

//^^^^^^   DISABLE RIGHT CLICK, CTRL, F12 to explore the contents of WEB PAGE   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// vvvvvvv  App Calculator   vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 

//Double Check if Floating Gain is really positive numbers
function mycheckboxfunction(){
    var checkbox = document.getElementById("checkboxFloatingloss");
    var floatingGainApprovedtext = document.getElementById("floatingGainApprovedtext");
    if(checkbox.checked == true){
        document.getElementById('confirmation').value = "Yes";
    }
    else{
        document.getElementById('confirmation').value = "No";
    }
}

//MAIN Calculation of CHECK AMOUNT 

function Withdrawalcomputation(){
    /*Variable Declaration  &&  || */
    const Floatingloss = parseFloat(document.getElementById('Floatingloss').value); //Floating loss of the Account
    const Balance = parseFloat(document.getElementById('Balance').value); //Balance of the Account
    const Credit = parseFloat(document.getElementById('Credit').value); //Credit of the Account
    const DefaultLot = parseFloat(document.getElementById('DefaultLot').value); //Default Lot of the Account
    const LotConversion = 10000; //Conversion of Default Lot to Account Trading Value
    const AccountTradingValue = DefaultLot * LotConversion;
    const MinimumWithdrawableCash = 100; // Minimum amount that you can withdraw
    var confirmation = document.getElementById('confirmation').value; //Confirmation if Floating is positive gain

    const CreditpercentReduction = (1 - 0.2); // Credit Bonus Amount Percentage when you used in trading

    /*Method of Computation*/
    //1. Set Value of Trading Label to blank so that we can change the place holder to desired text message
    //2. Then Set Value of Floating Loss, Balance, etc... to new Place holder Value
    //3. Check if Balance is greater than Credit
            //Gain computation inclusion of Credit reduction if needed
            function GainComputation(){
                //Guard close if Credit is so small to include
                if(Credit < 50){ // Credit is not too big to affect the Trading Account and no need to include on Compuation
                    var GainValue = parseInt(Balance + Credit - AccountTradingValue);
                    return GainValue;
                }
                var GainValue = parseInt((Balance + Credit - AccountTradingValue) * CreditpercentReduction); // Credit is too big to affect the Trading Account and need to include on Compuation
                return GainValue;
            }
            //console.log("GainComputation Value:" + GainComputation());

    //CLASS OOP//////////////////////////////////////////////////////////////////////////
    class InputAlert { //Alert Message if Input is blank or error
        constructor (AccountInput){
            this.AccountInput = AccountInput;
        }
        inputMessage() {
            alert("Please input a value in the " + this.AccountInput + " place holder");
        }    
    }

    class sorryAlert { //Alert Message if no available Balance
        constructor (TradingValue, TradingLabel){
            this.TradingValue = TradingValue;
            this.TradingLabel = TradingLabel;

        }
        sorryMessage() {
        alert("Sorry your " + this.TradingLabel + " of $" + this.TradingValue + " will have significant effect on your Trading.\r\nThus, we don't recommend any withdrawal as of the moment 💔...");
        }       
    }

    //Overwrite the input with Default Place holder Label when a mistake is made InputBox
    class ReplacePlaceHolderInput {
        constructor (placeholderBox){
            this.placeholderBox = placeholderBox;
        }
        OverwritePlaceholder(){
            if(this.placeholderBox == "Floating Loss"){
                document.getElementById('Floatingloss').value = "";
                document.getElementById('Floatingloss').placeholder = "Floating Loss";
            }
            if(this.placeholderBox == "Balance"){
                document.getElementById('Balance').value = "";
                document.getElementById('Balance').placeholder = "Balance";
            }
            if(this.placeholderBox == "Credit"){
                document.getElementById('Credit').value = "";
                document.getElementById('Credit').placeholder = "Credit";
            }
            if(this.placeholderBox == "Default Lot"){
                document.getElementById('DefaultLot').value = "";
                document.getElementById('DefaultLot').placeholder = "Default Lot (Buy/Sell)";
            }
        }
    }
    //ENDS CLASS OOP//////////////////////////////////////////////////////////////////////////

    // Guard Clause ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Check if EMPTY (next line annotation \r\n) old alert("Please input a value in the Floating Loss and Balance");
    if(document.getElementById('Floatingloss').value.length == 0){ 
        const myInputAlert = new InputAlert("Floating Loss");    
        return myInputAlert.inputMessage();
    }
    if(document.getElementById('Balance').value.length == 0){ 
        const myInputAlert = new InputAlert("Balance");    
        return myInputAlert.inputMessage();
    }
    if(document.getElementById('Credit').value.length == 0){ 
        const myInputAlert = new InputAlert("Credit");    
        return myInputAlert.inputMessage();
    }
    if(document.getElementById('DefaultLot').value.length == 0){ 
        const myInputAlert = new InputAlert("Default Lot");    
        return myInputAlert.inputMessage();
    }
    //CHECK if Input is not a number/*||*/////////////////////////////////////
    if(isNaN(Floatingloss)){ 
        //Reset the place Holder to default since you input incorrect        
        const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Floating Loss");  //Overwrite the placeholder label to default name  
        myReplacePlaceHolderInput.OverwritePlaceholder();
        //Alert
        const myInputAlert = new InputAlert("Floating Loss");    
        return myInputAlert.inputMessage();
    }
    if(isNaN(Balance)){ 
        //Reset the place Holder to default since you input incorrect
        const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Balance");  //Overwrite the placeholder label to default name  
        myReplacePlaceHolderInput.OverwritePlaceholder();
        //Alert
        const myInputAlert = new InputAlert("Balance");    
        return myInputAlert.inputMessage();
    }
    if(isNaN(Credit)){ 

        //Reset the place Holder to default since you input incorrect
        const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Credit");  //Overwrite the placeholder label to default name  
        myReplacePlaceHolderInput.OverwritePlaceholder();
        //Alert
        const myInputAlert = new InputAlert("Credit");    
        return myInputAlert.inputMessage();
    }
    if(isNaN(DefaultLot)){ 
        //Reset the place Holder to default since you input incorrect
        const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Default Lot");  //Overwrite the placeholder label to default name  
        myReplacePlaceHolderInput.OverwritePlaceholder();
        //Alert
        const myInputAlert = new InputAlert("Default Lot (Buy/Sell)");    
        return myInputAlert.inputMessage();
    }

    if(Floatingloss > 0){
        if(confirmation == ""){ // "" means floating loss is not yet confirm by trader if positve or negative
        //Confirm if trading account is floating gain  
        return alert("Are you sure your Floating Loss is positive $" + Floatingloss + ". If Yes, Check the tick mark and press again the Check Amount button");
        }
        if(confirmation == "No"){ // "" means floating loss is not yet confirm by trader if positive or negative
        //Confirm if trading account is floating gain  
        return alert("Are you sure your Floating Loss is positive $" + Floatingloss + ". If Yes, Check the tick mark and press again the Check Amount button");
        }
    }

    // END Guard Clause ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //CLASS STRUCTURE out the Place Holder Label when Calculation is all OK//////////////////
    class resultPlaceHolderInput {
        constructor (placeholderBox){
            this.placeholderBox = placeholderBox;
        }
        ResultPlaceholder(){
            if(this.placeholderBox == "Floating Loss"){
                document.getElementById('Floatingloss').value = "";
                document.getElementById('Floatingloss').placeholder = "Floating Loss: $" + Floatingloss;
            }
            if(this.placeholderBox == "Balance"){
                document.getElementById('Balance').value = "";
                document.getElementById('Balance').placeholder = "Balance: $" + Balance;
            }
            if(this.placeholderBox == "Credit"){
                document.getElementById('Credit').value = "";
                document.getElementById('Credit').placeholder = "Credit: $" + Credit;
            }
            if(this.placeholderBox == "Default Lot"){
                document.getElementById('DefaultLot').value = "";
                document.getElementById('DefaultLot').placeholder = "Default Lot: " + DefaultLot;
            }
            if(this.placeholderBox == "Withdrawable Cash"){
                document.getElementById('WithdrawableCash').value = "";
                if(Floatingloss < -100){
                    // Floating Loss is noticeable to affect the Trading Account and withrawal is not recommended
                    const mysorryAlert = new sorryAlert(Floatingloss, "Floating Loss");    
                    return mysorryAlert.sorryMessage(); //This RETURN declaration with Variable assignment is very important
                }
                // Return if Credit is 50%/60% of that Account Trading Value 
                if(Balance > AccountTradingValue * 0.85){
                    const mysorryAlert = new sorryAlert(Balance, "Balance");    
                    return mysorryAlert.sorryMessage();
                }
                document.getElementById('WithdrawableCash').placeholder = "Gain: $" + GainComputation();
            }
        }
    }

    // PRINT OUTPUT of Gain Calculator FORM///////////////////////////////////////////////////////////////////////
    const myresultFloating = new resultPlaceHolderInput("Floating Loss");  //Overwrite the placeholder label with Calculation Result
    myresultFloating.ResultPlaceholder();

    const myBalance = new resultPlaceHolderInput("Balance");  //Overwrite the placeholder label with Calculation Result
    myBalance.ResultPlaceholder();

    const myresultCredit = new resultPlaceHolderInput("Credit");  //Overwrite the placeholder label with Calculation Result
    myresultCredit.ResultPlaceholder();

    const myresultDefaultLot = new resultPlaceHolderInput("Default Lot");  //Overwrite the placeholder label with Calculation Result
    myresultDefaultLot.ResultPlaceholder();

    const myresultWithdrawableCash = new resultPlaceHolderInput("Withdrawable Cash");  //Overwrite the placeholder label with Calculation Result
    myresultWithdrawableCash.ResultPlaceholder();

    // TO do Return if Gain is less than 100usd

}

//^^^^^^   App Calculator   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^