// Download text file
const txtFile = document.getElementById("txtFile");
const blobTxtObj = new Blob(["Hello ", "Download"], {type: "text/plain"});
txtFile.download ="file.txt"
txtFile.href=URL.createObjectURL(blobTxtObj)

// Download CSV file

const list = [
    ["first", "second", "third"],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function createCSV(data){
    return data.map(val => val.join(",")).join("\n")
}

const csvFile = document.getElementById("csvFile");
const blobCSVObj = new Blob([createCSV(list)]);
csvFile.download ="file.csv"
csvFile.href=URL.createObjectURL(blobCSVObj)
