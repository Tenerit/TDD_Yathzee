const handleBasic = (dices, number) => {
    var cpt = 0;
    dices.forEach(dice => {
        if (dice === number) {
            cpt++;
        }
    });
    return cpt * number;
}

const calculateSumDice = (dices) => {
    var sum = 0;
    dices.forEach(dice => {
        sum += dice;
    });
    return sum;
}

const handleThreeOfKind = (dices) => {
    var occurrences = {};
    var isValid = false;
    var i = 0;

    while (i <= 5 && !isValid) {
        var dice = dices[i];

        if (dice in occurrences) {
            occurrences[dice] += 1;
            isValid = occurrences[dice] >= 3;
        }
        else {
            occurrences[dice] = 1;
        }
        i++;
    }

    return isValid ?
        calculateSumDice(dices) :
        0;
}

const handleFourOfKind = (dices) => {
    var occurrences = {};
    var isValid = false;
    var i = 0;

    while (i <= 5 && !isValid) {
        var dice = dices[i];

        if (dice in occurrences) {
            occurrences[dice] += 1;
            isValid = occurrences[dice] >= 4;
        }
        else {
            occurrences[dice] = 1;
        }
        i++;
    }

    return isValid ?
        calculateSumDice(dices) :
        0;
}

const handleFullHouse = (dices) => {
    var occurrences = {};

    dices.forEach(dice => {
        if (dice in occurrences) {
            occurrences[dice] += 1;
        }
        else {
            occurrences[dice] = 1;
        }
    });

    return Object.keys(occurrences).length === 2 ?
        25 :
        0;
}

const handleSmallStraight = (dices) => {
    var i = 0;
    var tempDice = -1;
    var cpt = 0;
    var isValid = false;

    while (i < 5 && !isValid) {
        if (dices[i] > tempDice) {
            cpt++;
            if (cpt >= 4) {
                isValid = true;
            }
        }
        else {
            cpt = 0;
        }
        tempDice = dices[i];
        i++;
    }

    return isValid ?
        30 : 0;
}

const handleLargeStraight = (dices) => {
    var isValid = true;
    var i = 0;
    var tempDice = -1;

    while (i < 5 && isValid) {
        if (dices[i] <= tempDice) {
            isValid = false;
        }
        tempDice = dices[i];
        i++;
    }

    return isValid ?
        40 : 0;
}

const handleYahtzee = (dices) => {
    var tempDice = -1;
    var isValid = true;
    var i = 0;

    while (i < 5 && isValid) {
        if (tempDice !== dices[i] && tempDice != -1) {
            isValid = false;
        }
        tempDice = dices[i];
        i++;
    }

    return isValid ?
        50 : 0;
}

const handleChance = (dices) => {
    return calculateSumDice(dices);
}


const main = () => {
}


main();


module.exports = {
    handleBasic, handleThreeOfKind,
    handleFourOfKind, handleFullHouse,
    handleLargeStraight, handleSmallStraight,
    handleYahtzee, handleChance
};
