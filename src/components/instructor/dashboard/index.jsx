import React, { useState } from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../../instructor/header";
import { Icon1, Icon2, User1, User2, User3, User4, User5, User6, course02, course03, course04, course05, course07, course08, instructortabel01, instructortabel02, instructortabel03, instructortabel04, instructortabel05 } from "../../imagepath";
import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [isClassAdded, setIsClassAdded] = useState([false]);

  const toggleClass = (index) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Dashboard"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Student Dashboard */}
            <div className="col-xl-9 col-lg-9">
              {/* Dashboard Grid */}
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Enrolled Courses</h5>
                      <h2>13</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Active Courses</h5>
                      <h2>08</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Completed Courses</h5>
                      <h2>06</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Students</h5>
                      <h2>5</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Courses</h5>
                      <h2>11</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Earnings</h5>
                      <h2>$486</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Dashboard Grid */}
              <div className="instructor-course-table">
                <div className="dashboard-title">
                  <h4>Recently Created Courses</h4>
                </div>
                <div className="table-responsive custom-table">
                  {/* Referred Users*/}
                  <table className="table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Courses</th>
                        <th>Enrolled</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel01}
                                  alt="Img"
                                />
                              </span>
                              Complete HTML, CSS and Javascript Course
                            </Link>
                          </div>
                        </td>
                        <td>0</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel05}
                                  alt="Img"
                                />
                              </span>
                              Complete Course on Fullstack Web Developer
                            </Link>
                          </div>
                        </td>
                        <td>2</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel02}
                                  alt="Img"
                                />
                              </span>
                              Data Science Fundamentals and Advanced Bootcamp
                            </Link>
                          </div>
                        </td>
                        <td>2</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel03}
                                  alt="Img"
                                />
                              </span>
                              Master Microservices with Spring Boot and Spring Cloud
                            </Link>
                          </div>
                        </td>
                        <td>1</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel04}
                                  alt="Img"
                                />
                              </span>
                              Information About UI/UX Design Degree
                            </Link>
                          </div>
                        </td>
                        <td>3</td>
                        <td>Published</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="dashboard-title">
                <h4>Recently Enrolled Courses</h4>
              </div>
              <div className="row">
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course02}
                          />
                        </Link>
                        <div className="price">
                          <h3>
                            $80 <span>$99.00</span>
                          </h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User2}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">Cooper</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(1)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[1] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Wordpress for Beginners - Master Wordpress Quickly
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>12+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>70hr 30min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <span className="d-inline-block average-rating">
                            <span>5.0</span> (20)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course03}
                          />
                        </Link>
                        <div className="price combo">
                          <h3>FREE</h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User5}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">Jenny</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(2)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[2] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Sketch from A to Z (2024): Become an app designer
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>10+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>40hr 10min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star me-1" />
                          <i className="fas fa-star me-1" />
                          <span className="d-inline-block average-rating">
                            <span>3.0</span> (18)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course04}
                          />
                        </Link>
                        <div className="price">
                          <h3>
                            $65 <span>$70.00</span>
                          </h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User4}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">Nicole Brown</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(7)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[7] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Learn Angular Fundamentals From beginning to advance
                            lavel
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>15+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>80hr 40min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star me-1" />
                          <span className="d-inline-block average-rating">
                            <span>4.0</span> (10)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course05}
                          />
                        </Link>
                        <div className="price combo">
                          <h3>FREE</h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User3}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">John Smith</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(4)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[4] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Build Responsive Real World Websites with Crash Course
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>12+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>70hr 30min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star me-1" />
                          <span className="d-inline-block average-rating">
                            <span>4.0</span> (15)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course07}
                          />
                        </Link>
                        <div className="price">
                          <h3>
                            $70 <span>$80.00</span>
                          </h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User6}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">Stella Johnson</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(5)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[5] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Learn JavaScript and Express to become a Expert
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>15+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>70hr 30min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star me-1" />
                          <span className="d-inline-block average-rating">
                            <span>4.6</span> (15)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
                {/* Course Grid */}
                <div className="col-xxl-4 col-md-6 d-flex">
                  <div className="course-box flex-fill">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt="Img"
                            src={course08}
                          />
                        </Link>
                        <div className="price combo">
                          <h3>FREE</h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img
                                src={User1}
                                alt="Img"
                                className="img-fluid"
                              />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">Nicole Brown</Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(6)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[6] ? 'color-active' : ''}`} />
                        </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Introduction to Programming- Python &amp; Java
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="Img" />
                            <p>10+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="Img" />
                            <p>70hr 30min</p>
                          </div>
                        </div>
                        <div className="rating mb-0">
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <i className="fas fa-star filled me-1" />
                          <span className="d-inline-block average-rating">
                            <span>5.0</span> (13)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Course Grid */}
              </div>
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>

  );
};
