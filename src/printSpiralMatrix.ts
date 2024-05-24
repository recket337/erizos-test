type Matrix = Array<Array<number>>

export function printSpiralMatrix(matrix: Matrix) {
    let top = 0, left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let result = '';

    // 1 2  3  4
    // 5 6  7  8
    // 9 10 11 12

    while (top <= bottom && left <= right) {

        console.log('///', top, right, bottom, left);

        for (let i = left; i <= right; i++) {
            result += ' ' + matrix[left][i];
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result += ' ' + matrix[i][right];
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result += ' ' + matrix[bottom][i];
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(matrix[i][left], i, left)
                result += ' ' + matrix[i][left];
            }
            left++;
        }
    }

    return result;
}