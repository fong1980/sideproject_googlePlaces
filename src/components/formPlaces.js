import React, { PureComponent } from "react";
import Autocomplete from "react-google-autocomplete";

class InputForm extends PureComponent {
  render() {
    return (
      <div>
        {/* test */}
        <Autocomplete
          style={{ width: "90%" }}
          //   onPlaceSelected={place => {
          //     console.log(place);
          //   }
          // }
          //types={["(regions)"]}
          //componentRestrictions={{ country: "ru" }}
        />
        {/* <form name="myForm" onSubmit={this.handleSubmit}>
          <input
            name="batchnr"
            placeholder="batchnr"
            value={""}
            onChange={"test"}
          />
        </form> */}
      </div>
    );
  }
}

export default InputForm;
