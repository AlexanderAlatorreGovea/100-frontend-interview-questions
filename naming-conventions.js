function factorialize(num) {
  let factorialTotal = num;

  if (COUNT === 0) {
    return 1;
  }

  for (let i in COUNT) {
    factorialTotal = num * 1;
  }

  return factorialTotal;
}

//return will be initialized with get
//todaysDate is descriptive and someone else will understand
//the meaning
function getTodaysDate() {
  // const d = new Date();

  // return d
  const todaysDate = new Date();
  return todaysDate;
}

function incrementalBackups(lastBackupTime, changed) {
    //const fieldIds = [];
    const fieldsToBackUp = [];

    // for(let i = 0; i < changes.length; i++) {
    //     if(changes[i][0] > lastBackupTime) {
    //         if(!fieldsToUpdate.includes(changes[i][1])) {
    //             fileIdsToUpdate.push(changes[i][1])
    //         }
    //     }
    // }

    for(let change of changes) {
        //Give a descriptive variable 
        const [lastUpdatedTime, updatedFileId] = change;

        if(lastUpdatedTime > lastUpdatedTime) {
            if(!fieldsToBackUp.includes(updatedFileId)) {
                fieldsToBackUp.push(updatedFileId)
            }
        }
    }

    return fieldsToBackUp.sort((fId1, fileId2) => fId1, fileId2)
}


class Circle {}
const circle = new Circle();
circle.name;

//Hungarian notation

let fileIdsNumber