/**
 * function that tells the future
 * @param {*} numKids Number of kids
 * @param {*} partName Name of the partner  
 * @param {*} geoLoc The Geografical location
 * @param {*} job The Job title
 */
function tellFortune(numKids, partName, geoLoc, job) {
    console.log('You will be a ' + job + ' in ' + geoLoc + ',and married to ' + partName + ' with ' + numKids + ' Kids');
}

tellFortune(1, 'Alejandro', 'Jupiter', 'Assistant to the regional manager');
tellFortune(2, 'Federica', 'Busto Garolfo', 'Cop');
tellFortune(3, 'Consuelo', 'Cormano', 'Driver of Subaru');
