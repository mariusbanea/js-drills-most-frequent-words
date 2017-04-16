function mostFrequentWord(words) {

    console.log("final tokenized text = ", words);

    //create the output object
    var wordFrequencies = {};
    //loop through the words array
    for (var i = 0; i <= words.length; i++) {
        //if the unique word is insdie the wordFrequencies object increment the number of time it was used
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
        }
        //if the unique word is NOT insdie the wordFrequencies object add it
        else {
            wordFrequencies[words[i]] = 1;
        }
    }

    console.log("wordFrequencies =>", wordFrequencies);

    //get the current key (for example 'above')
    var currentMaxKey = Object.keys(wordFrequencies)[0];
    //get the maximum count for each word (for example '2')
    var currentMaxCount = wordFrequencies[currentMaxKey];

    //check the number of times each word was used
    for (var word in wordFrequencies) {
        //if the number of times it was used is greater than the maxCount
        if (wordFrequencies[word] > currentMaxCount) {
            //replace it the new maxCount
            currentMaxKey = word;
            currentMaxCount = wordFrequencies[word];
        }
    }
    console.log("currentMaxKey =>", currentMaxKey);
    return currentMaxKey;
}




/* From here down, you are not expected to
   understand.... for now :)
   Nothing to see here!
*/



function getTokens(rawString) {
    // returns an alphabetically sorted list of words, removing punctuation and returns characters, and apostrophes
    //using Regular expresions https://en.wikipedia.org/wiki/Regular_expression for details and http://regexr.com/ to experience it
    var rawStringLowerCased = rawString.toLowerCase();
    console.log("rawStringLowerCased = ", rawStringLowerCased);

    var rawStringWihtoutReturns = rawStringLowerCased.replace(/(\r\n|\n|\r)/gm, "");
    console.log("rawStringWihtoutReturns = ", rawStringWihtoutReturns);

    var rawStringWihtoutApostrophe = rawStringWihtoutReturns.replace(/'/gm, '');
    console.log("rawStringWihtoutApostrophe = ", rawStringWihtoutApostrophe);

    var rawStringWihtoutPunctuation = rawStringWihtoutApostrophe.split(/[ ,!.";():-]+/g);
    console.log("rawStringWihtoutPunctuation = ", rawStringWihtoutPunctuation);

    return rawStringWihtoutPunctuation.filter(Boolean).sort();
}


(function testMostFrequentWord() {
    var spaceOddityText = 'Ground Control to Major Tom\n \
        Ground Control to Major Tom\n \
        Take your protein pills and put your helmet on\n \
        Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
        Commencing countdown, engines on (five, four, three)\n \
        Check ignition and may God\'s love be with you (two, one, liftoff)\n \
        \n \
        This is Ground Control to Major Tom\n \
        You\'ve really made the grade\n \
        And the papers want to know whose shirts you wear\n \
        Now it\'s time to leave the capsule if you dare\n \
        "This is Major Tom to Ground Control\n \
        I\'m stepping through the door\n \
        And I\'m floating in a most peculiar way\n \
        And the stars look very different today\n \
        For here\n \
        Am I sitting in a tin can\n \
        Far above the world\n \
        Planet Earth is blue\n \
        And there\'s nothing I can do\n \
        \n \
        Though I\'m past one hundred thousand miles\n \
        I\'m feeling very still\n \
        And I think my spaceship knows which way to go\n \
        Tell my wife I love her very much she knows\n \
        Ground Control to Major Tom\n \
        Your circuit\'s dead, there\'s something wrong\n \
        Can you hear me, Major Tom?\n \
        Can you hear me, Major Tom?\n \
        Can you hear me, Major Tom?\n \
        Can you \"Here am I floating \'round my tin can\n \
        Far above the moon\n \
        Planet Earth is blue\n \
        And there\'s nothing I can do\"';

    var expected = 'major';
    var actual = mostFrequentWord(getTokens(spaceOddityText));
    if (expected === actual) {
        console.log('SUCCESS: `mostFrequentWord` is working');
    } else {
        console.log('FAILURE: `mostFrequentWord` is not working');
    }
})();
