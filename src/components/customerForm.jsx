import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCustomer, saveCustomer } from "../services/customerService";

class CustomerForm extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      isGold: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.number().required().min(8).label("Phone"),
  };

  async populatecustomer() {
    try {
      const customerId = this.props.match.params.id;
      if (customerId === "new") return;

      const { data: customer } = await getCustomer(customerId);
      this.setState({ data: this.mapToViewModel(customer) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  async componentDidMount() {
    await this.populatecustomer();
  }

  mapToViewModel(customer) {
    return {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
      isGold: customer.isGold,
    };
  }

  doSubmit = async () => {
    await saveCustomer(this.state.data);

    this.props.history.push("/customers");
  };

  render() {
    return (
      <div>
        <h1>Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Title")}
          {this.renderInput("phone", "Phone")}
          {this.renderCheckbox("isGold", "Premium")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
