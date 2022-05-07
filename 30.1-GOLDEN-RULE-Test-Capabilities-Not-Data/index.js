export class Diamond {
    _lines;

    constructor(midpointLetter) {
        this._lines = [];
        this.create(midpointLetter);
    }

    create(midpointLetter) {
        const distance = midpointLetter.charCodeAt(0) - 65;
        const charIndex = Array.from(Array(distance + 1).keys());
        const topHalf = [];

        charIndex.forEach((n) => {
            const char = String.fromCharCode(n + 65);
            if (char == 'A') {
                topHalf.push("A");
                return;
            }

            const requiredSpaces = topHalf[topHalf.length - 1].length;
            topHalf.push(char + " ".repeat(requiredSpaces) + char);
        });

        const widestPoint = topHalf[topHalf.length - 1].length;

        for (const i in topHalf) {
            const paddingEitherSide = (widestPoint - topHalf[i].length) / 2;
            const padding = " ".repeat(paddingEitherSide);
            topHalf[i] = padding + topHalf[i] + padding;
        }

        const reversed = topHalf.slice(0, topHalf.length - 1).reverse()
        this._lines.push(...topHalf, ...reversed);
    }

    get lines() {
        return this._lines;
    }

    toString = () => this._lines.join("\r\n");
}