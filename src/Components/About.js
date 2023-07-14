import React from "react";
import "./About.css"
export const About = () => {
  return (
    <>
      
        <div className="card bg-primary-subtle justify-content-left align-items-left">
          <div className="card-body">
            <h2 id="head">About Our Education Sector - VIDYA</h2>
            <p className="para">
              Our primary focus is to ensure equitable access to quality
              education for all, regardless of socioeconomic background, gender,
              or geographical location. We strive to create inclusive learning
              environments that cater to diverse needs, fostering a sense of
              belonging and empowerment for every learner. <br/>We recognize the
              importance of providing a well-rounded education that goes beyond
              academic knowledge. Our aim is to nurture critical thinking,
              problem-solving skills, creativity, and a lifelong passion for
              learning. By embracing innovative pedagogies, incorporating
              technology, and promoting student-centered approaches, we aim to
              prepare individuals for the complexities of the modern world and
              the future workforce.
            </p>
            <form>
                <h3 className='text-center'>Any Questions...</h3>
                <div className='mb-3'>
                    <label htmlFor='text'>Name</label>
                    <input type='text' placeholder='Enter your name' className='form-control' name='text'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='text'>Your Consern</label>
                    <input type='text' placeholder='Enter your consern' className='form-control' name='text'/>
                </div>
                <div>
                    <input type='checkbox' className='custom-control custom-checkbox'/>
                    <lable htmlFor="checkbox" className="ms-1">Remember me</lable>
                </div>
              
            </form>
          </div>
          <div className="card-footer d-grid">
          <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </div>
        </div>
    
    </>
  );
};
export default About;
