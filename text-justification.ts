// 68. Text Justification

function fullJustify(words: string[], maxWidth: number): string[] {
    const justifiedText: string[] = [];

    for(let i = 0, totalWords = words.length; i < totalWords;) {
        const currentLine: string[] = [words[i]];
        let currentLineCharCount = words[i++].length;

        console.log(i)

        while (i < totalWords &&  currentLineCharCount + 1 + words[i].length <= maxWidth) {
            console.log(i)
            currentLine.push(words[i]);
            currentLineCharCount += 1 + words[i++].length;
        }

        if (i === totalWords || currentLine.length === 1) {
            const leftJustified = currentLine.join(' ');
            const rightPadding = ' '.repeat(maxWidth - leftJustified.length);
            justifiedText.push(leftJustified + rightPadding);
            continue;
        }

        const totalSpaceWidth = maxWidth - (currentLineCharCount - currentLine.length + 1);
        const evenSpaceWidth = Math.floor(totalSpaceWidth / (currentLine.length - 1));
        const remainderSpaces = totalSpaceWidth % (currentLine.length - 1);
        const currentRow: string[] = []; 

        for (let j = 0; j < currentLine.length - 1; ++j) {
            currentRow.push(currentLine[j]);
            currentRow.push(' '.repeat(evenSpaceWidth + (j < remainderSpaces ? 1 : 0)));
        }

        currentRow.push(currentLine[currentLine.length - 1]);
        justifiedText.push(currentRow.join(''));
        
    }

    return justifiedText;
};
