const Array1: string[] = ["1","2","3","4"]

function throwError(index: number) {
    if (Array1[index] === undefined) {
        throw new Error("Invalid index.")
    } else {
        console.log(Array1[index])
    }
}

throwError(5)