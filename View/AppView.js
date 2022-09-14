
class AppView {
    constructor() {
        this.matrixView = new MatrixView();
        this.summaryView = new SummaryView();
    }

    render(selector) {
        const element = document.getElementById(selector);
        this.summaryView.show(element);
        this.matrixView.show(element);
    }
}

var appView = new AppView();
appView.render('root');

