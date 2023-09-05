import View from "./View";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class ResultsViews extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query. Try again;)";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultsViews();
