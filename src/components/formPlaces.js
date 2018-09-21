import React, { PureComponent } from "react";

class InputForm extends PureComponent {
  render() {
    return (
      <div>
        <form name="myForm" onSubmit={this.handleSubmit}>
          <input
            name="batchnr"
            placeholder="batchnr"
            value={""}
            onChange={"test"}
          />
        </form>
      </div>
    );
  }
}

export default InputForm;
