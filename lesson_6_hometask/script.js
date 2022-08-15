let userAnswer = confirm(`Tell me three most important words 💚`)
    ,wordsCount = 3
    ,word
    ,containsDigit
    ,userTransformMethod
    ,firstWord
    ,secondWord
    ,thirdWord
    ,sentence =``
    ;

if (userAnswer){
    for (i=1; i<=wordsCount; i++){
        do{
            word = prompt(`Enter word #${i}:`);
            containsDigit = false;
            if(word) {
                word = word.trim();
                for (let j =0; j<word.length; j++) {
                    if (!isNaN(word[j])) {
                        containsDigit = true;
                        break
                    }
                }
            }
        } while (containsDigit || !word || word.includes(` `))
        console.log(`Word #${i}: ${word}`);

        do {
        userTransformMethod = prompt(`Choose a transformation method for ${word}: lowercase || uppercase || capitalize`);
            if(userTransformMethod) userTransformMethod = userTransformMethod.toLowerCase().trim();
        } while (!userTransformMethod || (userTransformMethod !== `lowercase` && userTransformMethod !== `uppercase` && userTransformMethod !== `capitalize`))

        switch(userTransformMethod){
            case `uppercase`:
                word = word.toUpperCase();
                break
            case `capitalize`:
                word = word[0].toUpperCase() + word.slice(1);
                break
        }
     
        sentence += word + (i == wordsCount ? `!` : ` `)

        console.log(`Transformation type for the word #${i}: ${userTransformMethod}`);
        console.log(`Transformed word #${i}: ${word}`);
        console.log(`Sentence: ${sentence}`);
    }

    console.log(`******`);
    console.log(`${sentence}`);
}