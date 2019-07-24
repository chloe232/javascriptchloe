/*let orderCount = 1;

const takeOrder = (topping, base, size) => {
    console.log(`Pizza with ${topping} ${base} ${size}`);

    console.log(orderCount++) ;
}
takeOrder("pineapple", "Tomato", "Large");
takeOrder("Peporoni", "BBQ", "Small")

let pin = 1245;
let minAmount = 10;



if (pin == 1245 && minAmount >= 10 ) {
    console.log ("Have Money");
}
else { 
    console.log ("Access denied");
}/

let pin = 1245;
let minAmount = 10;



if (pin == 1245 && minAmount >= 10 ) {
    console.log ("Have Money");
}
else { 
    console.log ("Access denied");
}*/

let pin = 1245;
let minAmount = 10;

const cashWithdrawal = (pin, minAmount) => {
    if (pin == 1245 && minAmount >= 10 ) {
        console.log ("Have Money");
    }
    else { 
        console.log ("Access denied");
    }
 console.log(`Withdrawing ${pin} from account ${minAmount}`);
}
cashWithdrawal(1111, 10);
cashWithdrawal(1245, 200);
cashWithdrawal(1245, 5); 