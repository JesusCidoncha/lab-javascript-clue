// ITERATION 1

// Suspects Array

const suspectsArray = [

    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"

    },

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"

    },

    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"

    },

    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"

    },

    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"

    },

    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"

    }

];

// Rooms Array

const roomsArray = [
    {
        name: "Dining Room"

    },
    {
        name: "Conservatory"

    },
    {
        name: "Kitchen"

    },
    {
        name: "Study"

    },
    {
        name: "Library"

    },
    {
        name: "Billiard Room"

    },
    {
        name: "Lounge"

    },
    {
        name: "Ballroom"

    },

    {
        name: "Hall"

    },
    {
        name: "Spa"

    },
    {
        name: "Living Room"

    },
    {
        name: "Observatory"

    },

    {
        name: "Theater"

    },

    {
        name: "Guest House"

    },

    {
        name: "Patio"

    }



];

// Weapons Array

const weaponsArray = [


    {
        name: "rope",
        weight: 10

    },

    {
        name: "knife",
        weight: 8

    },

    {
        name: "candlestick",
        weight: 2

    },

    {
        name: "dumbell",
        weight: 30

    },

    {
        name: "poison",
        weight: 2

    },

    {
        name: "axe",
        weight: 15

    },

    {
        name: "bat",
        weight: 13

    },

    {
        name: "trophy",
        weight: 25

    },
    {
        name: "pistol",
        weight: 20

    }



];


// ITERATION 2

//the 1st try i didnt manage to get trough Jasmine...
/*
function selectRandom(suspectsArray, weaponsArray, roomsArray) {
    let randomSuspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
    let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    let randomRoom = roomsArray[Math.floor(Math.random() * roomsArray.length)];
   

    return {
        suspect: randomSuspect.firstName,
        weapon:randomWeapon.name,
        room: randomRoom.name 
    
    };
  }
  selectRandom(suspectsArray, weaponsArray, roomsArray);
*/

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function createRandomSelector() {
    const randomSuspect = selectRandom(suspectsArray);
    const randomRoom = selectRandom(roomsArray);
    const randomWeapon = selectRandom(weaponsArray);

    return {
        suspect: randomSuspect,
        room: randomRoom,
        weapon: randomWeapon,
    };
}
function pickMystery() {


    return {
        suspect: selectRandom(suspectsArray),
        room: selectRandom(roomsArray),
        weapon: selectRandom(weaponsArray)
    }
}


// ITERATION 3

function revealMystery(envelope = pickMystery()) {


    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`

}

revealMystery();