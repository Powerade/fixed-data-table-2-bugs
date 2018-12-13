import React, { Component } from "react";
import "./App.css";
import { Cell, Column, Table } from "fixed-data-table-2";

import "../node_modules/fixed-data-table-2/dist/fixed-data-table.css";

import rows from "./data";

class InputCell extends Component {
  render() {
    let value = this.props.inputText;
    if (!value) {
      value = "";
    }

    return (
      <Cell>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => this.props.onInputChange(value)}
        />
      </Cell>
    );
  }
}

class App extends Component {
  state = {
    inputText: {},
    inputText2: {},
  };

  onInputChange = (rowIndex, value) => {
    console.log(rowIndex, value, this.state);
    this.setState(state => ({
      inputText: {
        ...state.inputText,
        [rowIndex]: value
      }
    }));
  };

    onInput2Change = (rowIndex, value) => {
        console.log(rowIndex, value, this.state);
        this.setState(state => ({
            inputText: {
                ...state.inputText,
                [rowIndex]: value
            }
        }));
    };

  render() {
    return (
      <div>
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={1024}
          height={300}
          bufferRowCount={20}
          headerHeight={50}
        >
          <Column
            header={<Cell>Col 3</Cell>}
            cell={({ rowIndex }) => {
              return (
                <InputCell
                  inputText={this.state.inputText[rowIndex]}
                  onInputChange={val => this.onInputChange(rowIndex, val)}
                />
              );
            }}
            width={200}
          />
        </Table>
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={1024}
          height={300}
          bufferRowCount={20}
          headerHeight={50}
        >
          <Column
            header={<Cell>Col 3</Cell>}
            cell={({ rowIndex }) => {
              return (
                <InputCell
                  inputText={this.state.inputText2[rowIndex]}
                  onInputChange={val => this.onInput2Change(rowIndex, val)}
                />
              );
            }}
            width={200}
          />
        </Table>
      </div>
    );
  }
}

export default App;
