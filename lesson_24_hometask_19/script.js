const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 900,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getAvailBankCurList = bankInfo => {
    return Object.entries(bankInfo)
        .filter(([key,value])=>{
        if (value.max>0) return key
        })
        .map(([key,value])=>key)
}

const toUpCaseTrim = data => data.toUpperCase().trim();

const availBankCurList = getAvailBankCurList(bankData);
const availUserCurList = Object.keys(userData);

// console.log(availBankCurList);

const isAvailCur = (userCurChoice, availCurList) => availCurList.some(item => userCurChoice === item)



//    let obj = Object.keys(bankData)
//         .find( ([key,value])=>{key==userCurChoice} );
//         // .map(([key,value])=>value[condition])
//     console.log(obj);


// USD: {
//     max: 900,
//     min: 100,
//     img: '💵'
// },

getMoney = () => {
    return new Promise((resolve,reject) => {
        confirm(`Check account balance?`) ? resolve() : reject()
    })        
}

getMoney() 
    .then(
        () => {
            let currency;
            do{
                currency = prompt(`Choose the currency to show your balance: ${Object.keys(userData)}`); // `...`, ``, null
                currency && ( currency = toUpCaseTrim(currency) );
                // console.log(currency);
            } while (!isAvailCur(currency,availUserCurList));
            console.log(`Баланс становить: ${userData[currency]} ${currency}`);
        }
    )
    .catch(
        () => {
            cashBlock :{
                let withdrawCur;
                let withdrawSum;

                do{
                    withdrawCur = prompt(`Enter currency you wish to withdraw money (${availBankCurList}). Cancel to exit`);
                    withdrawCur && ( withdrawCur = toUpCaseTrim(withdrawCur) );
                    // console.log(withdrawCur);
                    // console.log(withdrawSum);
                
                    if (withdrawCur == null) break cashBlock //exit if cancel pressed
                } while (!isAvailCur(withdrawCur,availBankCurList)) // 
                    withdrawSum = prompt(`Enter sum you wish to withdraw:`);
                    let maxUserAvailSum = userData[withdrawCur];
                    let maxBankAvailSum = bankData[withdrawCur][`max`];
                    let minWithdrawSum = bankData[withdrawCur][`min`];
                    let curImg = bankData[withdrawCur][`img`];

                    if (withdrawSum > maxUserAvailSum){
                        console.log(`Введена сума більша за доступну на рахунку. Максимальна доступна сума зняття: ${maxUserAvailSum} ${withdrawCur}`)
                    }  else if(withdrawSum > maxBankAvailSum){
                        console.log(`Введена сума більша за доступну в банкоматі. Максимальна доступна сума зняття: ${maxBankAvailSum} ${withdrawCur}`)
                    } else if(withdrawSum < minWithdrawSum){
                        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minWithdrawSum} ${withdrawCur}`)
                    } else {
                        console.log(`От Ваші гроші ${withdrawSum} ${withdrawCur} ${curImg}`)
                    }
                } 
            }
    )
    .finally( () => console.log( `Дякую, гарного дня 😊`) )
    


