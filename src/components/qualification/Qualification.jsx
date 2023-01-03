import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {

  const [ToggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              ToggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              ToggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              ToggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WEB Design</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">sub title</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WEB Development</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX/UI Expert</h3>
                <span className="qualification__subtitle">sub title</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              ToggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UI/UX Designer</h3>
                <span className="qualification__subtitle">sub title</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WEB Designer</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <h3 className="qualification__title">UX/UI Expert</h3>
              <span className="qualification__subtitle">sub title</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2022 - present
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification