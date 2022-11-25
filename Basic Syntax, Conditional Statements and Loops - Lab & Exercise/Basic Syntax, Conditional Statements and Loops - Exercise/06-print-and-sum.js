function syntaxDemo(startNum, endNum) {
  let sum = 0;
  let output = "";

  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    sum += currentNum;
    output += `${currentNum} `;
  }
  console.log(output);
  console.log(`Sum: ${sum}`);
}

syntaxDemo()

// Write a function that displays numbers from given start to given end and their sum.
// The input comes as two number parameters. Print the result like the examples below: