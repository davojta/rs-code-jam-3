const recursion = (tree) => {
    var branchValue = tree.value;
    var leftValues = tree.left ? recursion(tree.left) : null;
    var rightValues = tree.right ? recursion(tree.right) : null;

    const res = [[branchValue]];
    var branchArr = [];


    var maxLength = Math.max(leftValues ? leftValues.length : 0, rightValues ? rightValues.length : 0);
    
    for (let i = 0; i < maxLength; i++) {
        var leftValue = leftValues[i];
        if (leftValue) {
            branchArr.push(leftValue[0]);
        }
        var rightValue = rightValues[i];
        if (rightValue) {
            branchArr.push(rightValue[0]);
        }
        
    }

    // if (leftValues !== null) {
    //     branchArr.push(leftValues);
    // }

    // if (rightValues !== null) {
    //     branchArr.push(rightValues);
    // }

    if (branchArr.length) {
        res.push(branchArr);
    }

    
    return res;
}


module.exports = {
    recursion,
}
