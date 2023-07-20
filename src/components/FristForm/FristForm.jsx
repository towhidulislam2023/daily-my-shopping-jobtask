import React from 'react';

const FirstForm = () => {
    return (
        <div className="bg-white lg:m-10 lg:p-10 rounded-md m-5 p-5">
            <div>
              <h1 className="text-xl font-bold">Form title</h1>
              <p>
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </p>
            </div>
            <div className="flex gap-5 my-5">
              <div className=" h-[44px] w-[120px] bg-yellow-200 flex items-center justify-center rounded-lg gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3663_308)">
                    <path d="M0 0H25V25H0V0Z" fill="#012169" />
                    <path
                      d="M25 0V3.125L15.7227 12.5L25 21.6309V25H21.7285L12.4023 15.8203L3.32031 25H0V21.6797L9.08203 12.5488L0 3.61328V0H3.02734L12.4023 9.17969L21.4844 0H25Z"
                      fill="white"
                    />
                    <path
                      d="M8.98438 15.8203L9.52148 17.4805L2.05078 25H0V24.8535L8.98438 15.8203ZM15.0391 15.2344L17.6758 15.625L25 22.8027V25L15.0391 15.2344ZM25 0L15.625 9.57031L15.4297 7.42188L22.7539 0H25ZM0 0.0488281L9.42383 9.27734L6.54297 8.88672L0 2.39258V0.0488281Z"
                      fill="#C8102E"
                    />
                    <path
                      d="M8.59375 0V25H16.4062V0H8.59375ZM0 8.59375V16.4062H25V8.59375H0Z"
                      fill="white"
                    />
                    <path
                      d="M0 10.1562V14.8438H25V10.1562H0ZM10.1562 0V25H14.8438V0H10.1562Z"
                      fill="#C8102E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3663_308">
                      <rect width="25" height="25" rx="3" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>English</span>
              </div>
              <div className=" h-[44px] w-[120px] bg-white border flex items-center justify-center rounded-lg gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3663_341)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H25V25H0V0Z"
                      fill="#E30A17"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.0312 12.8906C17.0312 16.3379 14.1846 19.1357 10.6787 19.1357C7.17285 19.1357 4.32617 16.3379 4.32617 12.8857C4.32617 9.43359 7.16797 6.64551 10.6738 6.64551C14.1797 6.64551 17.0361 9.43848 17.0361 12.8906H17.0312Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3486 12.8906C17.3486 15.6494 15.0732 17.8857 12.2656 17.8857C9.45801 17.8857 7.1875 15.6494 7.1875 12.8906C7.1875 10.1318 9.45801 7.89551 12.2656 7.89551C15.0732 7.89551 17.3438 10.1318 17.3438 12.8906H17.3486Z"
                      fill="#E30A17"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.2666 9.9707L18.2178 12.2803L16.0596 12.8662L18.1836 13.623L18.1348 15.7373L19.5166 14.0869L21.6113 14.8096L20.4004 13.0371L21.875 11.2744L19.6094 11.8994L18.2666 9.9707Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3663_341">
                      <rect width="25" height="25" rx="3" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Turkish</span>
              </div>
            </div>
            <div>
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
              <div>
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
          </div>
    );
};

export default FirstForm;