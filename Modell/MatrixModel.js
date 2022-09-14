
class MatrixModel extends BaseModel {
    constructor() {
        super();
        this.imgSource = IMAGE_URL;
        this.cardAmount = 16;
        this.cardToCompare = null;
        this.attributes = JSON.parse(localStorage.getItem('attributes')) || this.createRandomList();
        if (!MatrixModel.instance) {
            MatrixModel.instance = this;
        }

        return MatrixModel.instance;

    }

    createRandomList() {
        const cardsList = new Array(this.cardAmount).fill(0);
        const arrRandomPosition = cardsList.map((element, index) => element = index);
        let imgNumb = 0;
        for (let i = 0; i < cardsList.length; i++) {
            let indexElement = Math.ceil(Math.random() * (arrRandomPosition.length - 1));
            let element = arrRandomPosition[indexElement];
            cardsList[element] = {
                id: element,
                dataId: this.imgSource[imgNumb],
                classList: 'hover',
                imgUrl: this.imgSource[imgNumb],
            };
            if (i % 2 !== 0) {
                imgNumb += 1;
            };
            arrRandomPosition.splice(indexElement, 1);
        }
        localStorage.setItem('attributes', JSON.stringify(cardsList));
        return cardsList;
    }

    makeActionByClickCard(cardId, cardDataId) {
        if (this.cardToCompare) {
            if (this.cardToCompare.cardDataId === cardDataId && this.cardToCompare.cardId !== cardId) {
                this.changeStatys(this.cardToCompare.cardId, cardId, 'hiden');
                localStorage.setItem('attributes', JSON.stringify(this.attributes));
            } else {
                this.changeStatys(this.cardToCompare.cardId, cardId, 'hover')
            }
            this.cardToCompare = null;
            this.publish('changeData');
            if (this.attributes.every((card) => card.classList === 'hiden')) { return 'end'; }

        } else {
            this.cardToCompare = {
                cardId,
                cardDataId
            };
        }
    }

    changeStatys(firstCardId, secondCardId, cardClass) {
        this.attributes.forEach((card) => {
            if (card.id == firstCardId || card.id == secondCardId) {
                card.classList = cardClass
            }
        })
    }

    startNewGame() {
        this.attributes = this.createRandomList();
        this.publish('changeData');
    }
}

