class Controller {
    constructor() {
        this.matrixModel = new MatrixModel();
        this.summaryModel = new SummaryModel();
    }

    onClickCard(event) {

        const card = event.target.closest('.tablet-item');
        if (card.classList.contains('hiden')) return;
        const cardId = card.id;
        const cardDataId = card.getAttribute('data-id');
        card.classList.toggle('hover');

        setTimeout(() => {
            const status = this.matrixModel.makeActionByClickCard(cardId, cardDataId);
            this.summaryModel.makeActionByClickCard(1);
            this.summaryModel.checkBestResult(status);
        }, 2000);

    }

    onClickNewGame() {
        this.matrixModel.startNewGame();
        this.summaryModel.startNewGame();
    }
};