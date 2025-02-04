import React from "react";

function NewProject() {
    return (
        <div className="row p-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID :</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name :</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City :</label>
                                <input className="form-control"></input>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Checked</label>
                            </div>
                            <button className="btn btn-info">Save</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewProject;