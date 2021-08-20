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
    if(checkbox.checked == true){
        document.getElementById('confirmation').value = "Yes";
    }
    else{
        document.getElementById('confirmation').value = "No";
    }
}

//MAIN Calculation

function Withdrawalcomputation(){
    /*Constant Declaration  &&  || */
    const Floatingloss = parseFloat(document.getElementById('Floatingloss').value); //Floating loss of the Account
    const Balance = parseFloat(document.getElementById('Balance').value); //Balance of the Account
    const Credit = parseFloat(document.getElementById('Credit').value); //Credit of the Account
    const DefaultLot = parseFloat(document.getElementById('DefaultLot').value); //Default Lot of the Account
    const LotConversion = 10000; //Conversion of Default Lot to Account Trading Value
    const AccountTradingValue = DefaultLot * LotConversion;
    const MaxPercentFloatingloss = (-0.15); //15% Maximum Allowable Floating Loss before you can withdraw
    const MinimumWithdrawableCash = 100; // Minimum amount that you can withdraw
    
    //Variable Declaration and initialization
    var confirmation = document.getElementById('confirmation').value; //Confirmation if Floating is positive gain
    var GainValue = parseInt(Balance + Credit - AccountTradingValue); //Gain accumulated
    var Equity = Balance + Credit - GainValue; // Initializes the Equity after the credit has been reduced

    /*Method of Computation*/
    //1. Set Value of Trading Label to blank so that we can change the place holder to desired text message
    //2. Then Set Value of Unrealized Gain/Loss, Balance, etc... to new Place holder Value
    //3. Computation of Gain and Equity::
            function GainComputation(){ 
                if(GainValue < MinimumWithdrawableCash){ // Check if you have profit/ gain
                    return GainValue;
                } 
                Equity = Balance + Credit - GainValue - Credit * (GainValue/Balance); //Re-compute Equity after the Credit has been reduced
                while(Equity < AccountTradingValue){
                    GainValue--; 
                    Equity = Balance + Credit - GainValue - Credit * (GainValue/Balance)
                }
                return parseInt(GainValue);
            }

    //CLASS OOP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    class InputAlert { //Alert Message if Input is blank or error
        constructor (AccountInput){
            this.AccountInput = AccountInput;
        }
        inputMessage() {
            alert("Please input a value in the " + this.AccountInput + " place holder box");
        }    
    }
    class sorryAlert { //Alert Message if no Profit, Unrealize loss is less than 15%
        constructor (TradingValue, TradingLabel){
            this.TradingValue = TradingValue;
            this.TradingLabel = TradingLabel;

        }
        sorryMessage() {
        alert("Sorry your " + this.TradingLabel + " of $" + this.TradingValue + " will have significant effect on your Trading.\r\nThus, we don't recommend any withdrawal as of the moment 💔...");
        }       
    }  
    class ReplacePlaceHolderInput { //Overwrite the input with Default Place holder Label when a mistake is made InputBox or no gain / profit has been calculated
        constructor (placeholderBox){
            this.placeholderBox = placeholderBox;
        }
        OverwritePlaceholder(){
            if(this.placeholderBox == "Unrealized Gain/Loss"){
                document.getElementById('Floatingloss').value = "";
                document.getElementById('Floatingloss').placeholder = "Unrealized Gain/Loss";
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
            if(this.placeholderBox == "Withdrawable Cash"){
                document.getElementById('WithdrawableCash').value = "";
                document.getElementById('WithdrawableCash').placeholder = "Withdrawable Cash";
            }
        }
    }
    class resultPlaceHolderInput {  //CLASS STRUCTURE out the Place Holder Label when Calculation is all OK//////////////////
        constructor (placeholderBox){
            this.placeholderBox = placeholderBox;
        }
        ResultPlaceholder(){
            if(this.placeholderBox == "Unrealized Gain/Loss"){
                document.getElementById('Floatingloss').value = "";
                document.getElementById('Floatingloss').placeholder = "Un/R Gain/Loss: $" + Floatingloss;
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
                GainComputation(); // Callback the Gain Computation
                document.getElementById('WithdrawableCash').value = "";

                if(Floatingloss < AccountTradingValue*MaxPercentFloatingloss){
                    //Reset the place Holder to default since you un/r loss is greater than 15%
                    const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Withdrawable Cash");  //Overwrite the placeholder label to default name  
                    myReplacePlaceHolderInput.OverwritePlaceholder();

                    // Unrealized Gain/Loss is noticeable to affect the Trading Account and withrawal is not recommended
                    const mysorryAlert = new sorryAlert(Floatingloss, "Unrealized Gain/Loss");    
                    return mysorryAlert.sorryMessage(); //This RETURN declaration with Variable assignment is very important
                }
                //NO PROFIT GENERATED
                if(GainValue < MinimumWithdrawableCash){
                    //Reset the place Holder to default since you gain/ profit is less than $100
                    const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Withdrawable Cash");  //Overwrite the placeholder label to default name  
                    myReplacePlaceHolderInput.OverwritePlaceholder();

                    const mysorryAlert = new sorryAlert(Balance, "Balance");    
                    return mysorryAlert.sorryMessage();
                }
                // IF all is OK and profit is more than 0r equal to $100, print NOW the Withdrawable CASH
                document.getElementById('WithdrawableCash').placeholder = "Gain: $" + GainValue; 
                alert("Congrats!!! You can withdraw $" + GainValue + ".\r\nYour remaining Equity is $" + parseInt(Equity) + " with an unrealized gain/loss of $" + Floatingloss + " .");
            }
        }
    }
    
    //ENDS CLASS OOP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Guard Clause of INPUT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //ISSUE ALERT::: Check if EMPTY (next line annotation \r\n) old alert("Please input a value in the Unrealized Gain/Loss and Balance");
    if(document.getElementById('Floatingloss').value.length == 0){ 
        const myInputAlert = new InputAlert("Unrealized Gain/Loss");    
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
    //ISSUE ALERT::: CHECK if Input is not a number/*||*/////////////////////////////////////
    if(isNaN(Floatingloss)){ 
        //Reset the place Holder to default since you input incorrect        
        const myReplacePlaceHolderInput = new ReplacePlaceHolderInput("Unrealized Gain/Loss");  //Overwrite the placeholder label to default name  
        myReplacePlaceHolderInput.OverwritePlaceholder();
        //Alert
        const myInputAlert = new InputAlert("Unrealized Gain/Loss");    
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
    if(Floatingloss > 0){ //Confirmation if Unrealized gain is true
        if(confirmation == ""){ // "" means floating loss is not yet confirm by trader if positve or negative
        //Confirm if trading account is floating gain  
        return alert("Are you sure your Unrealized Gain/Loss is positive $" + Floatingloss + ".\r\n If Yes, Check the tick mark and press again the Check Amount button");
        }
        if(confirmation == "No"){ // "" means floating loss is not yet confirm by trader if positive or negative
        //Confirm if trading account is floating gain  
        return alert("Are you sure your Unrealized Gain/Loss is positive $" + Floatingloss + ".\r\n If Yes, Check the tick mark and press again the Check Amount button");
        }
    }
    // END Guard Clause ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // PRINT OUTPUT THE FORM of Gain Calculator FORM with CLASS sructure usage///////////////////////////////////////////////////////////////////////
    const myresultFloating = new resultPlaceHolderInput("Unrealized Gain/Loss");  //Overwrite the placeholder label with Calculation Result
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