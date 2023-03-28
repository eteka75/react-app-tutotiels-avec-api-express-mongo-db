import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
//import TutorialsList from "./tutorials-list.component";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
    };
    console.log(data);
    TutorialDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        // var m = e.message || "Some error occured while creating the tutorial.";
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="submit-form">
          {this.state.submitted ? (
            <div className="col-md-12">
              <h4>tuto envoyé avec succèss !</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Ajouter
              </button>
            </div>
          ) : (
            <div className="col-md-8 col-xl-6">
              <div className="form-group">
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>

              <button
                onClick={this.saveTutorial}
                className="btn btn-dark rounded-0 my-3"
              >
                Ajouter le tutoriel
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
