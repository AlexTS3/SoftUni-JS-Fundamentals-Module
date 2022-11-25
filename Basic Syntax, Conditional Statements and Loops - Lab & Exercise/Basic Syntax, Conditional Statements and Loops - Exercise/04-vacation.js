function vacation(groupCount, typeOfGroup, dayOfWeek) {

  let totalPrice = 0;
  switch (typeOfGroup) {
    case 'Students':
      if (dayOfWeek === 'Friday') {
        totalPrice = groupCount * 8.45;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupCount * 9.80;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupCount * 10.46
      }
      if (groupCount >= 30) {
        totalPrice *= 0.85
      }
      break;

    case 'Business':
      if (groupCount >= 100) {
        groupCount -= 10;
      }
      if (dayOfWeek === 'Friday') {
        totalPrice = groupCount * 10.90;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupCount * 15.60;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupCount * 16
      }
      break

    case 'Regular':

      if (dayOfWeek === 'Friday') {
        totalPrice = groupCount * 15;
      } else if (dayOfWeek === 'Saturday') {
        totalPrice = groupCount * 20;
      } else if (dayOfWeek === 'Sunday') {
        totalPrice = groupCount * 22.50
      }

      if (groupCount >= 10 && groupCount <= 20) {
        totalPrice *= 0.95;
      }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation()

// alt + z
// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.
