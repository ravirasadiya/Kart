import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { toBase64 } from '../../_helpers/toBase64';
import { bannerActions } from '../../_actions';
import { connect } from "react-redux";
import CKEditors from "react-ckeditor-component";
import MyDropzone from '../common/dropzone'
import one from '../../assets/images/pro3/1.jpg'

export class AddBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            url: "",
            position: "",
            selectedOption: 1,
            image: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { image } = this.state;
        const { dispatch } = this.props;
        if (image) {
            dispatch(bannerActions.addBanner(this.state));
        }
    }

    handlePicture = async (e) => {
        this.setState({
            image: await toBase64(e.target.files[0]),
        });
    };

    render() {
        const { title, content, url, selectedOption, position, image, submitted } = this.state;
        return (
            <Fragment>
                <Breadcrumb title="Add Banner" parent="Banner" />
                <div className="container-fluid">
                    <div className="row product-adding">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Banner Details</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0">Title</label>
                                                <input className="form-control" id="title" name="title" type="text" value={title}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0">Content</label>
                                                <input className="form-control" id="content" name="content" type="text" value={content}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0">URL</label>
                                                <input className="form-control" id="url" name="url" type="text" value={url}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Position</label>
                                                <input className="form-control" id="position" name="position" type="number" value={position}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label"><span>*</span> Status</label>
                                                <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated" >
                                                    <label className="d-block">
                                                        <input className="radio_animated" id="edo-ani" type="radio" name="selectedOption" value={1} onChange={this.handleChange} />
                                                        Enable
                                                    </label>
                                                    <label className="d-block" >
                                                        <input className="radio_animated" id="edo-ani1" type="radio" name="selectedOption" value={0} onChange={this.handleChange} />
                                                        Disable
                                                </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Banner Image :</label>
                                                <input className="form-control" id="bannerImage" type="file" onChange={(e) => this.handlePicture(e)} />
                                            </div>
                                            {image &&
                                                <div className="form-group">
                                                    <img src={image} className="w-100" />
                                                </div>
                                            }
                                            {submitted && !image &&
                                                <div className="invalid-feedback d-block">Please Select Banner Image</div>
                                            }
                                            {/* <MyDropzone /> */}

                                            <div className="form-group pt-3">
                                                <div className="product-buttons text-center">
                                                    <button type="button" className="btn btn-primary" type="submit">Add</button>
                                                    <button type="button" className="btn btn-light">Discard</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect()(AddBanner)
