function removeDuplicates(arr) {
    let uniqueArr = [];  // naya array jisme sirf unique elements rahenge
    
    for (let i = 0; i < arr.length; i++) {
        let alreadyExists = false;

        // check karo ki arr[i] pehle se uniqueArr me hai ya nahi
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                alreadyExists = true;
                break;  // agar mil gaya to aur check karne ki zarurat nahi
            }
        }

        // agar element unique hai to add kar do
        if (!alreadyExists) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}