type OpeningChar = '(' | '[' | '{';
type ClosingChar = ')' | ']' | '}';
type BracketMap = {
	[key in OpeningChar]: ClosingChar;
}

export function areBracketsBalanced(input: string): boolean {


	const charSet = ['(', '[', '{', '}', ']', ')'];
	const hasInvalidCharacters = ![...input].every(char => charSet.includes(char));

	if(hasInvalidCharacters) {
		throw new Error('Input string contains invalid character.');
	}

	const bracketMap: BracketMap = {
		'(': ')',
		'[': ']',
		'{': '}',
	}

	const charStack: string[] = [];

	for (const char of input) {
		const isOpeningBracket = Object.keys(bracketMap).includes(char);

		if (isOpeningBracket) {
			charStack.push(char);
		} else {
			const latestBracket = charStack.pop() as OpeningChar;

			if (!latestBracket) return false;

			const bracketsMatch = bracketMap[latestBracket] === char;

			if(!bracketsMatch) return false;
		}
	}

	const unmatchedBrackets = charStack.length !== 0;

	if(unmatchedBrackets) return false;

	return true;
}