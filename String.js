
let sentence = prompt("Enter a sentence:");
let wordToReplace = prompt("Enter the word to replace:");
let replacementWord = prompt("Enter the replacement word:");
let substringToCheck = prompt("Enter a substring to check:");


let wordCount = sentence.trim().split(/\s+/).length;


let replacedSentence = sentence.replaceAll(wordToReplace, replacementWord);


let isSubstringPresent = sentence.includes(substringToCheck);


let result = `
Original Sentence: "${sentence}"
Word Count: ${wordCount}
After Replacement: "${replacedSentence}"
Is "${substringToCheck}" present? ${isSubstringPresent ? "Yes" : "No"}
`;

console.log(result);