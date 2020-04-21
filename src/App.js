import React, { Component } from "react";
import { Button } from "antd-mobile";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <p className={styles["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
