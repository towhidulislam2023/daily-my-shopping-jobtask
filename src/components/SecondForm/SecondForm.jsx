import React from 'react';

const SecondForm = () => {
    return (
        <div className="lg:m-10 m-5  ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 ">
          <div className="lg:col-span-8 bg-white lg:p-10 p-5 rounded-lg ">
            <div>
              <h1 className="text-xl font-bold">Form title</h1>
              <p>
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </p>
            </div>
            <div className="my-6">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Label title</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="my-6">
                <label className="label">
                  <span className="label-text">Label title</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-3">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Form Level</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Form Level</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-36"
                  placeholder="Bio"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4  bg-white lg:p-10 p-5 rounded-lg ">
            <div>
              <h1 className="text-xl font-bold">Form title</h1>
              <div className="my-6">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Label title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="my-6">
                <label className="label">
                  <span className="label-text">Label title</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-36"
                  placeholder="Bio"
                ></textarea>
              </div>
              <button className="btn btn-block btn-primary my-6">Button title</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SecondForm;