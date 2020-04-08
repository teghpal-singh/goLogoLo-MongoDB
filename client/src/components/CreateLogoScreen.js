import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderWidth: Int!,
        $borderColor: String!,
        $borderRadius: Int!,
        $padding: Int!) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderWidth: $borderWidth,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            padding: $padding) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {

    render() {
        let text, color, fontSize, backgroundColor, borderWidth, borderColor, borderRadius, padding;
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="customizeContainer">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addLogo({ variables: { text: text.value, color: color.value, fontSize: parseInt(fontSize.value), backgroundColor: backgroundColor.value, borderWidth: parseInt(borderWidth.value), borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value), padding: parseInt(padding.value) } });
                                    text.value = "";
                                    color.value = "";
                                    fontSize.value = "";
                                    backgroundColor.value = "";
                                    borderWidth.value = "";
                                    borderColor.value = "";
                                    borderRadius.value = "";
                                    padding.value = "";
                                }}>
                                    <form class="form-horizontal">
                                    <div className="form-group row">
                                            <label htmlFor="text" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Text:</label>
                                            <div className="col-9">
                                                <input type="text" className="form-control form-control-lg" name="text" ref={node => {
                                                    text = node;
                                                }} placeholder="Text" />
                                            </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="color" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Color:</label>
                                        <div className="col-3">
                                            <input type="color" className="form-control form-control-lg" name="color" ref={node => {
                                                color = node;
                                            }} placeholder="Color" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fontSize" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Font Size:</label>
                                        <div className="col-9">
                                            <input type="number" className="form-control form-control-lg" name="fontSize" min="2" oninput="validity.valid || (value='');" ref={node => {
                                                fontSize = node;
                                            }} placeholder="Font Size" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="backgroundColor" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Background Color:</label>
                                        <div className="col-3">
                                            <input type="color" className="form-control form-control-lg" name="backgroundColor" ref={node => {
                                                backgroundColor = node;
                                            }} placeholder="Background Color" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="borderWidth" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Border Thickness:</label>
                                        <div className="col-9">
                                            <input type="number" className="form-control form-control-lg" name="borderWidth" min="0" oninput="validity.valid || (value='');" ref={node => {
                                                borderWidth = node;
                                            }} placeholder="Border Thickness" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="borderColor" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Border Color:</label>
                                        <div className="col-3">
                                            <input type="color" className="form-control form-control-lg" name="borderColor" ref={node => {
                                                borderColor = node;
                                            }} placeholder="Border Color" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="borderRadius" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Border Radius:</label>
                                        <div className="col-9">
                                            <input type="number" className="form-control form-control-lg" name="borderRadius" min="0" oninput="validity.valid || (value='');" ref={node => {
                                                borderRadius = node;
                                            }} placeholder="Border Radius" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="padding" class="col-3 col-form-label" style={{fontSize: "14px", fontFamily: "Arial"}}>Padding:</label>
                                        <div className="col-9">
                                            <input type="number" className="form-control form-control-lg" name="pading" min="0" oninput="validity.valid || (value='');" ref={node => {
                                                padding = node;
                                            }} placeholder="Padding" />
                                        </div>
                                    </div>
                                    </form>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;