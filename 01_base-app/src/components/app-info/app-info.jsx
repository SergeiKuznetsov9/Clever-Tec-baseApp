import { Component } from "react";

import "./app-info.css";

export class AppInfo extends Component {
  render() {
    const { totalAmount, willGetBonusAmount } = this.props;

    return (
      <div className="app-info">
        <h2 className="app-info-header">Учет сотрудников в компании</h2>
        <div className="app-info-hint">
          Общее число сотрудников: <span>{totalAmount}</span>
        </div>
        <div className="app-info-hint">
          Премию получат: <span>{willGetBonusAmount}</span>
        </div>
      </div>
    );
  }
}
