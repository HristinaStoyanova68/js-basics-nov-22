// •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
// •	Пол - символ ('m' за мъж и 'f' за жена)
// •	Възраст - цяло число в интервала [5…105]
// •	Спорт - текст (една от възможностите в таблицата)

// Пол	Gym	Boxing	Yoga	Zumba	Dances	Pilates
// мъж	$42	 $41	 $45	$34	     $51	 $39
// жена	$35	 $37	 $42	$31	     $53	 $37

function fitnessCard (input) {
    let money = Number(input[0]);
    let gender = (input[1]);
    let age = Number(input[2]);
    let sport = (input[3]);
    

    if (gender === "m") {
        if (sport === "Gym") {
            if (age <= 19) {
                if (money >= 42 * 0.80) {
                    console.log(`You purchased a 1 month pass for ${sport}.`)
                } else {
                    let neededMoney = (42 * 0.80) - money
                console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
                }
            } else {
                if (money >= 42) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = 42 - money
                console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
            }
        }

    }
    
} else if (gender === "f") {
    if (sport === "Gym") {
        if (age <= 19) {
            if (money >= 35 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (35 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 35) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 35 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}
}  if (gender === "m") {
    if (sport === "Boxing") {
        if (age <= 19) {
            if (money >= 41 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (41 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 41) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 41 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}

} else if (gender === "f") {
    if (sport === "Boxing") {
        if (age <= 19) {
            if (money >= 37 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (37 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 37) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 37 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}
}  if (gender === "m") {
    if (sport === "Yoga") {
        if (age <= 19) {
            if (money >= 45 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (45 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 45) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 45 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}

} else if (gender === "f") {
if (sport === "Yoga") {
    if (age <= 19) {
        if (money >= 42 * 0.80) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = (42 * 0.80) - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
        }
    } else {
        if (money >= 42) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neededMoney = 42 - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
    }
}

}
}  if (gender === "m") {
    if (sport === "Zumba") {
        if (age <= 19) {
            if (money >= 34 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (34 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 34) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 34 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }
}
} else if (gender === "f") {
if (sport === "Zumba") {
    if (age <= 19) {
        if (money >= 31 * 0.80) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = (31 * 0.80) - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
        }
    } else {
        if (money >= 31) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neededMoney = 31 - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
    }
}

}
}  if (gender === "m") {
    if (sport === "Dances") {
        if (age <= 19) {
            if (money >= 51 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (51 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 51) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 51 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}

} else if (gender === "f") {
if (sport === "Dances") {
    if (age <= 19) {
        if (money >= 53 * 0.80) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = (53 * 0.80) - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
        }
    } else {
        if (money >= 53) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neededMoney = 53 - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
    }
}

}
} if (gender === "m") {
    if (sport === "Pilates") {
        if (age <= 19) {
            if (money >= 39 * 0.80) {
                console.log(`You purchased a 1 month pass for ${sport}.`)
            } else {
                let neededMoney = (39 * 0.80) - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
            }
        } else {
            if (money >= 39) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = 39 - money
            console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
        }
    }

}

} else if (gender === "f") {
if (sport === "Pilates") {
    if (age <= 19) {
        if (money >= 37 * 0.80) {
            console.log(`You purchased a 1 month pass for ${sport}.`)
        } else {
            let neededMoney = (37 * 0.80) - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`) 
        }
    } else {
        if (money >= 37) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neededMoney = 37 - money
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
    }
}

}
}
}
fitnessCard(["10","m","50","Pilates"]);