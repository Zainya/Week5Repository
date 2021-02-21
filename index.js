//index.js

class gymnast {
   constructor (name, balance) {
        this.name = name;
        this.balance = balance;
    }
    describe() {
        return `${this.name} will dance and ${this.balance}.`;
    }
}

class coach {
    constructor(name) {
        this.name = name;
        this.coach = [];
    }

    addGymnast(gymnast) {
       if (gymnast instanceof gymnast)  {
           this.gymnast.push(gymnast);
       }else {
           throw new Error(`family members of the gymnast.  Argument is not a gymnast ${gymnast}`);
       }
    }
    describe() {
        return `${this.name} is a ${this.gymnast.length} .`;
    }
}

class Menu {
    constructor() {
        this.gymnast = [];
        this.selectedGymnast = null;
} 
}


start() { 
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
        switch (selection) {
            case 1: 
                this.createGymnast();
                break;
            case 2: 
                this.viewGymnast();
                break;
            case 3: 
                this.deleteGymnast();
                break;
            case 4: 
                this.displayGymnast();
                break;
            default: 
                selection = 0;

class showMainMenuOptions { 
    return prompt(`
     exit
    create new gymnast
    view gymnast
    delete gymnast
    display gymnast
    `);
} 

showGynastMenuOptions(gymnastDirectory) {
    return prompt(`
    back
    create gymnast
    delete gymnast
    --------------------
    ${gymnastDirectory}
    `);
} 

displayGymnasts() {
    let gymnastString = ''
    for (let i = 0; i < this.gymnast.length; i++) { 
        gymnastString += i + ') ' + this.gymnast[i].name + '\n'; 
    alert(gymnastString); 

createGymnast() { 
    let name = prompt('Enter name for new gymnast:'); 
    this.gymnast.push(new Gymnast(name)); 

viewGymnast() { 
    let index = prompt('Enter the index of the gymnast:');
    if (index > -1 && index < this.gymnast.length) {
        this.selectedGymnast = this.gymnast[index]; 
        let description = 'gymnast Name: ' + this.gymnast.name + '\n'; 
        for (let i = 0; i < this.selectedGymnast.coach.length; i++) { 
            description += i + ') ' + this.selectedGymnast.coach[i].name 
            + ' - ' + this.selectedGymnast.coach[i].height + '\n';
        }

        let selection = this.showGymnastMenuOptions(description); 
        switch (selection) { 
                this.createCoach);
                break;
            case 2: 
                this.deleteCoach();
        }
    }
}

deleteGymnast() {
    let index = prompt('Enter the index of the gymnast to delete:');
    if (index > -1 && index < this.gymnast.length) {
        this.gymnast.splice(index, 1);
    }
}

createCoach() {
    let name = prompt('Enter name for new coach:');
    let height = prompt('Enter height for new coach:');
    this.selectedGymnast.coach.push(new Coach(name, height)); 
}

deleteCoach() {
    let index = prompt('Enter the index of the coach to delete:');
    if (index > -1 && index < this.selectedGymnast.coach.length) { 
        this.selectedGymnast.coach.splice(index, 1); 
    }
}
}

let menu = new Menu(); 
menu.start();



