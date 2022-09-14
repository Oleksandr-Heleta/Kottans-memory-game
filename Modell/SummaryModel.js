class SummaryModel extends BaseModel {
    constructor() {
        super();
        this.attributes = {
            totalScore: 0,
            bestScore: JSON.parse(localStorage.getItem('bestScore')) || 0,
        };
        if (!SummaryModel.instance) {
            SummaryModel.instance = this;
        }

        return SummaryModel.instance;
    }

    startNewGame() {
        this.attributes.totalScore = 0;
        this.publish('changeData');
    }

    makeActionByClickCard(addCount) {
        this.attributes.totalScore += addCount;
        this.publish('changeData');
    }

    checkBestResult(status) {
        if (status !== "end") { return; }
        if (this.attributes.totalScore < this.attributes.bestScore || this.attributes.bestScore === 0) {
            this.attributes.bestScore = this.attributes.totalScore;
            localStorage.setItem('bestScore', JSON.stringify(this.attributes.bestScore));
        }
    }
}

