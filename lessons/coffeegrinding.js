let coffeeIsGrinding = false;
const pressGrindingBeans = () => {
    if (coffeeIsGrinding) {
        console.log("stopping the grind");
        coffeeIsGrinding = false;
    }
    else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindingBeans();
pressGrindingBeans();
