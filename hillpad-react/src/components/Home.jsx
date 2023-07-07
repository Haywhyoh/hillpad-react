import heroImg1492 from "../frontend/wp-content/uploads/2021/11/hero-img.jpeg";
import heroImg300 from "../frontend/wp-content/uploads/2021/11/hero-img-300x195.jpeg";
import heroImg1024 from "../frontend/wp-content/uploads/2021/11/hero-img-1024x667.jpeg";
import heroImg768 from "../frontend/wp-content/uploads/2021/11/hero-img-768x500.jpeg";

import bachelorsSVG from "../frontend/wp-content/uploads/2021/11/bachelors.svg";
import mastersSVG from "../frontend/wp-content/uploads/2021/11/masters.svg";
import doctoratesSVG from "../frontend/wp-content/uploads/2021/11/doctorates.svg";

import course01 from "../frontend/wp-content/uploads/2022/04/01.jpg";
import course02 from "../frontend/wp-content/uploads/2022/04/02.jpg";
import course03 from "../frontend/wp-content/uploads/2022/04/03.jpg";
import course04 from "../frontend/wp-content/uploads/2022/04/04.jpg";
import course05 from "../frontend/wp-content/uploads/2022/04/05.jpg";

import hillpadTransparent from "../frontend/wp-content/uploads/logos/hillpad-transparent.png";

import newYork from "../frontend/wp-content/uploads/2021/11/new-york.jpeg";
import chicago from "../frontend/wp-content/uploads/2021/11/chicago.jpeg";
import losAngeles from "../frontend/wp-content/uploads/2021/11/los-angeles.jpeg";
import sanDiego from "../frontend/wp-content/uploads/2021/11/san-diego.jpeg";
import dallas from "../frontend/wp-content/uploads/2021/11/dallas.jpeg";

import reviewer1 from "../frontend/wp-content/uploads/2021/11/01.jpeg";
import reviewer2 from "../frontend/wp-content/uploads/2021/11/02.jpeg";
import reviewer3 from "../frontend/wp-content/uploads/2021/11/03.jpeg";


const Home = () => {
    return (
        <>


            <div id="content" className="site-content">
		<div data-elementor-type="wp-page" data-elementor-id="26" className="elementor elementor-26">
			
			{/* <!-- Hero Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-4b639e30 elementor-section-full_width mb-5 elementor-section-stretched elementor-section-height-default elementor-section-height-default"
				data-id="4b639e30" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				<div className="elementor-container elementor-column-gap-default px-0 container py-5 mt-5 mb-lg-3">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1ca3b0d0"
						data-id="1ca3b0d0" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-section elementor-inner-section elementor-element elementor-element-3824951e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
								data-id="3824951e" data-element_type="section">
								<div className="elementor-container elementor-column-gap-default row align-items-center mt-md-2">
									
									{/* <!-- Hero Images --> */}
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5bb5008d col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0 col-md-12"
										data-id="5bb5008d" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-f05d9d4 d-block mx-auto elementor-widget elementor-widget-image"
												data-id="f05d9d4" data-element_type="widget"
												data-widget_type="image.default">
												<div className="elementor-widget-container">
													{/* <style>
														
														.elementor-widget-image {
															text-align: center
														}

														.elementor-widget-image a {
															display: inline-block
														}

														.elementor-widget-image a img[src$=".svg"] {
															width: 48px
														}

														.elementor-widget-image img {
															vertical-align: middle;
															display: inline-block
														}
													</style>  */}
                                                    <img decoding="async" width="1492" height="972"
														src={heroImg1492}
														className="attachment-full size-full wp-image-403" alt=""
														srcSet={`${heroImg1492} 1492w, ${heroImg300} 300w, ${heroImg1024} 1024w, ${heroImg768} 768w`}
														sizes="(max-width: 1492px) 100vw, 1492px"/>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- End Hero Images --> */}
									
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7681266b col-lg-5 order-lg-1 pe-lg-0 col-md-12"
										data-id="7681266b" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-5d74e873 elementor-widget elementor-widget-highlighted-heading"
												data-id="5d74e873" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<h1
														className="finder-elementor-highlighted-heading__title display-5 mb-4 me-lg-n5 text-lg-start text-center mb-4">
														Discover&nbsp;
														<span className="finder-elementor-highlighted-heading__highlighted-text dropdown d-inline-block">
															Educational
														</span>
														Opportunities
													</h1>
												</div>
											</div>
											<div className="elementor-element elementor-element-4d79ef4e elementor-widget elementor-widget-highlighted-heading"
												data-id="4d79ef4e" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<p
														className="finder-elementor-highlighted-heading__title text-lg-start text-center mb-4 mb-lg-5 fs-lg">
														We make it easy to find the perfect course for you, so you can focus on taking your education to the next level.
													</p>
												</div>
											</div>
											<div className="elementor-element elementor-element-65ee029a elementor-widget elementor-widget-fr-hivepress-advanced"
												data-id="65ee029a" data-element_type="widget"
												data-widget_type="fr-hivepress-advanced.hivepress-advanced-style-3">
												<div className="elementor-widget-container">
													<div id="course-search-form-div" className="me-lg-n5">
														<form className="form-group d-block d-md-flex position-relative rounded-md-pill me-lg-n5"
															action="{% url 'courses_listing' %}" method="GET">

															<div className="input-group input-group-lg border-end-md">
																<span className="input-group-text text-muted rounded-pill ps-1 ps-md-3">
																	<i className="fi-search"></i>
																</span>

																<input className="form-control" type="text"
																	placeholder="What do you want to study?" value=""
																	name="course"/>
															</div>

															<hr className="d-md-none my-2"/>

															<div className="d-sm-flex">
																<div className="dropdown w-100 mb-sm-0 mb-3" data-bs-toggle="select">
																	<button className="btn btn-link dropdown-toggle ps-2 ps-sm-3 btn-lg" type="button" data-bs-toggle="dropdown">
																		<i className="fi fi-list me-2"></i>
																		<span className="dropdown-toggle-label">
																			Where?
																		</span>
																	</button>
																	<input type="hidden" name="location" className="hivepress-elementor-dropdown"/>
																	<ul id="search-countries-list" className="dropdown-menu overflow-auto" style={{height: "15rem"}}>
																		{/* <!-- Anywhere --> */}
																		<li>
																			<a className="dropdown-item" href="#">
																				<span className="dropdown-item-value d-none"></span>
																				<span className="dropdown-item-label hivepress-advanced">Anywhere</span>
																			</a>
																		</li>
																		<div className="dropdown-item text-decoration-none">
																			<hr/>
																		</div>

																		{/* <!-- Continents list --> */}

																		{/* <!-- Countries list (JS) --> */}
																	
																	</ul>
																</div>

																<button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3">
																	Search
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Hero Section--> */}

			{/* <!-- Browse Discipline Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-0a490d1 elementor-section-full_width elementor-section-stretched mb-5 elementor-section-height-default elementor-section-height-default"
				data-id="0a490d1" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				
				<div className="elementor-section elementor-inner-section mb-4 container elementor-element elementor-element-254f280d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
					data-id="254f280d" data-element_type="section">
					<div
						className="elementor-container elementor-column-gap-default flex-nowrap px-0 d-flex align-items-center justify-content-between mb-3">
						<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eab212c"
							data-id="eab212c" data-element_type="column">
							<div className="p-0 elementor-widget-wrap elementor-element-populated">
								<div className="elementor-element elementor-element-59874bcc mb-0 elementor-widget elementor-widget-highlighted-heading"
									data-id="59874bcc" data-element_type="widget" data-widget_type="highlighted-heading.default">
									<div className="elementor-widget-container">
										<h2 className="finder-elementor-highlighted-heading__title h3 mb-0">
											Browse by Discipline</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d3f933c"
							data-id="4d3f933c" data-element_type="column">
							<div className="p-0 elementor-widget-wrap elementor-element-populated">
								<div className="elementor-element elementor-element-39a79978 elementor-align-right elementor-mobile-align-right elementor-tablet-align-right elementor-widget elementor-widget-button"
									data-id="39a79978" data-element_type="widget" data-widget_type="button.button-finder">
									<div className="elementor-widget-container">
										<div className="elementor-button-wrapper">
											<a href="{% url 'disciplines_listing' %}"
												className="elementor-button-link btn btn-link bg-link rounded fr-elementor-button p-0 fw-normal"
												role="button">
												<span className="elementor-button-content-wrapper">
													<span className="elementor-button-icon btn__icon btn__icon--right order-2 lh-sm">
														<i aria-hidden="true" className="ms-2 fi fi-arrow-long-right"></i>
													</span>
													<span className="elementor-button-text order-1">View
														all</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="elementor-container elementor-column-gap-default container row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4 px-0">
					
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-0ae5cc6 col"
						data-id="0ae5cc6" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6ccef21 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6ccef21" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">
									
									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-success rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-tractor"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Agriculture & Forestry </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-42a17a9 col"
						data-id="42a17a9" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-2035dc8 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="2035dc8" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-thermometer"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Applied Sciences & Professions </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-2acb8f4 col"
						data-id="2acb8f4" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-1814313 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="1814313" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-warning text-warning rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-paint-brush"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Art, Design & Architecture </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-a95ef18 col"
						data-id="a95ef18" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-5b31fc6 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="5b31fc6" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-info text-info rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-briefcase"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Business & Management </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-computer"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Computer Science & IT </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-f15d91c col"
						data-id="f15d91c" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-5505b3a ewc-h-100 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="5505b3a" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-danger rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-book"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Education & Training</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-settings"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Engineering & Technology </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-info rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-calculator"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Natural Sciences & Mathematics </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-success rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-house-chosen"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Hospitality, Leisure & Sports </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-friends"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Humanities & Social Sciences</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-warning text-warning rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-film"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Journalism, Media & Communication </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-info rounded-circle mb-3 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-cloud-sun"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Environmental Sciences </h3>
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				
			</section>
			{/* <!-- End Browse Discipline Section--> */}

			{/* <!-- Browse Programme Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-676f2977 elementor-section-full_width elementor-section-stretched border-bottom border-sm-0 mb-5 mt-n3 mt-lg-5 elementor-section-height-default elementor-section-height-default"
				data-id="676f2977" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				
				<div className="elementor-section elementor-inner-section container elementor-element elementor-element-254f280d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
					data-id="254f280d" data-element_type="section">
					<div
						className="elementor-container elementor-column-gap-default flex-nowrap px-0 d-flex align-items-center justify-content-between mb-3">
						<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eab212c"
							data-id="eab212c" data-element_type="column">
							<div className="p-0 elementor-widget-wrap elementor-element-populated">
								<div className="elementor-element elementor-element-59874bcc mb-0 elementor-widget elementor-widget-highlighted-heading"
									data-id="59874bcc" data-element_type="widget" data-widget_type="highlighted-heading.default">
									<div className="elementor-widget-container">
										<h2 className="finder-elementor-highlighted-heading__title h3 mb-0">
											Browse by Programme</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="elementor-container elementor-column-gap-default mb-5">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-427b3e40 container"
						data-id="427b3e40" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-33f8473 elementor-widget elementor-widget-fr-cards-carousel"
								data-id="33f8473" data-element_type="widget"
								data-widget_type="fr-cards-carousel.default">
								<div className="elementor-widget-container">
									<div className="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2">
										<div id="slider-63e0f9b18d3cb" className="tns-carousel-inner row gx-4 mx-0 py-3"
											data-ride="tns"
											data-carousel-options="{&quot;loop&quot;:true,&quot;controls&quot;:true,&quot;axis&quot;:&quot;horizontal&quot;,&quot;items&quot;:3,&quot;nav&quot;:false,&quot;navPosition&quot;:&quot;bottom&quot;,&quot;autoplay&quot;:false,&quot;autoHeight&quot;:false,&quot;autoplayTimeout&quot;:null,&quot;speed&quot;:&quot;500&quot;,&quot;arrowKeys&quot;:false,&quot;mode&quot;:&quot;carousel&quot;,&quot;slideBy&quot;:&quot;1&quot;,&quot;responsive&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;nav&quot;:true,&quot;gutter&quot;:&quot;&quot;},&quot;500&quot;:{&quot;items&quot;:2,&quot;nav&quot;:false,&quot;gutter&quot;:&quot;&quot;},&quot;768&quot;:{&quot;items&quot;:3,&quot;nav&quot;:false,&quot;gutter&quot;:&quot;&quot;}}}">
											
											<div className="col">
												<div
													className="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
													<img decoding="async" src={bachelorsSVG}
														alt="" className="d-block mx-auto my-3" width="160"/>
													<div className="card-body">
														<h2 className="fr-card__title card-title h4">Bachelors programmes</h2>
														<p className="fr-card__desc card-text fs-sm">Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.
														</p>
													</div>
													<div className="card-footer pt-0 border-0">
														<a className="card__button btn stretched-link btn-outline-primary"
															href="{% url 'courses_listing' %}?programme=bachelors">Search Bachelors</a>
													</div>
												</div>
											</div>

											<div className="col">
												<div
													className="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
													<img decoding="async"
														src={mastersSVG} alt=""
														className="d-block mx-auto my-3" width="160"/>
													<div className="card-body">
														<h2
															className="fr-card__title card-title h4 fr-card__title card-title h4">
															Masters programmes</h2>
														<p
															className="fr-card__desc card-text fs-sm fr-card__desc card-text fs-sm">
															Find and compare more than 75,000 Master’s degrees from top universities worldwide.</p>
													</div>
													<div className="card-footer pt-0 border-0">
														<a className="card__button btn stretched-link btn-outline-primary"
															href="{% url 'courses_listing' %}?programme=masters">Search Masters</a>
													</div>
												</div>
											</div>

											<div className="col">
												<div
													className="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
													<img decoding="async"
														src={doctoratesSVG} alt=""
														className="d-block mx-auto my-3" width="160"/>
													<div className="card-body">
														<h2
															className="fr-card__title card-title h4 fr-card__title card-title h4 fr-card__title card-title h4">
															PhD & Doctorate studies</h2>
														<p
															className="fr-card__desc card-text fs-sm fr-card__desc card-text fs-sm fr-card__desc card-text fs-sm">
															PhD, professional doctorates and other Doctoral degrees at graduate schools, universities and research institutes.</p>
													</div>
													<div className="card-footer pt-0 border-0">
														<a className="card__button btn stretched-link btn-outline-primary"
															href="{% url 'courses_listing' %}?programme=doctorates">Search PhDs</a>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			{/* <!-- End Browse Programme Section--> */}

			{/* <!-- Featured Courses Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-46bfd435 elementor-section-full_width elementor-section-stretched mb-5 pb-md-4 elementor-section-height-default elementor-section-height-default"
				data-id="46bfd435" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				<div className="elementor-container elementor-column-gap-default container ">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-678b4d2"
						data-id="678b4d2" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-section elementor-inner-section elementor-element elementor-element-254f280d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
								data-id="254f280d" data-element_type="section">
								<div
									className="elementor-container elementor-column-gap-default flex-nowrap px-0 d-flex align-items-center justify-content-between mb-3">
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eab212c"
										data-id="eab212c" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-59874bcc mb-0 elementor-widget elementor-widget-highlighted-heading"
												data-id="59874bcc" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<h2 className="finder-elementor-highlighted-heading__title h3 mb-0">
														Featured Courses</h2>
												</div>
											</div>
										</div>
									</div>
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d3f933c"
										data-id="4d3f933c" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-39a79978 elementor-align-right elementor-mobile-align-right elementor-tablet-align-right elementor-widget elementor-widget-button"
												data-id="39a79978" data-element_type="widget"
												data-widget_type="button.button-finder">
												<div className="elementor-widget-container">
													<div className="elementor-button-wrapper">
														<a href="{% url 'courses_listing' %}"
															className="elementor-button-link btn btn-link bg-link rounded fr-elementor-button p-0 fw-normal"
															role="button">
															<span className="elementor-button-content-wrapper">
																<span
																	className="elementor-button-icon btn__icon btn__icon--right order-2 lh-sm">
																	<i aria-hidden="true"
																		className="ms-2 fi fi-arrow-long-right"></i>
																</span>
																<span className="elementor-button-text order-1">
																	Search courses
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="elementor-element elementor-element-fr-listings elementor-widget elementor-widget-fr-carousel"
								data-id="fr-listings" data-element_type="widget"
								data-widget_type="fr-carousel.fr-sale">
								<div className="elementor-widget-container">
									<div
										className="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2 top-offers tns-controls-outside-xxl">
										<div id="slider-63e0f9b19d686"
											className="tns-carousel-inner row gx-4 mx-0 pt-3 pb-4" data-ride="tns"
											data-carousel-options="{&quot;loop&quot;:true,&quot;controls&quot;:true,&quot;axis&quot;:&quot;horizontal&quot;,&quot;items&quot;:4,&quot;nav&quot;:true,&quot;navPosition&quot;:&quot;bottom&quot;,&quot;autoplay&quot;:false,&quot;autoHeight&quot;:false,&quot;autoplayTimeout&quot;:null,&quot;speed&quot;:&quot;500&quot;,&quot;arrowKeys&quot;:false,&quot;mode&quot;:&quot;carousel&quot;,&quot;slideBy&quot;:&quot;1&quot;,&quot;responsive&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;nav&quot;:true,&quot;gutter&quot;:&quot;&quot;},&quot;500&quot;:{&quot;items&quot;:2,&quot;nav&quot;:false,&quot;gutter&quot;:&quot;&quot;},&quot;768&quot;:{&quot;items&quot;:3,&quot;nav&quot;:true,&quot;gutter&quot;:&quot;&quot;},&quot;992&quot;:{&quot;items&quot;:4,&quot;nav&quot;:true,&quot;gutter&quot;:12}}}">
											
											<div className="col">
												<div className="card shadow-sm card-hover border-0 h-100">
													<div className="card-img-top card-img-hover">
														<a className="img-overlay"
															href="{% url 'course_detail' 'electrical-engineering-3301742' %}"></a>
														<div className="position-absolute start-0 top-0 pt-3 ps-3">
															<span className="d-table badge bg-info mt-1">New</span>
														</div>
														<div className="content-overlay end-0 top-0 pt-3 pe-3">
															<a className="btn btn-icon btn-light btn-xs text-body shadow-sm rounded-circle ms-2 mb-2 hp-listing__action hp-listing__action--favorite"
																data-bs-toggle="modal" href="#user_login_modal"><i
																	className="hp-icon heart fi-heart"></i></a>
														</div>
														<div>
															<div className="aspect-ratio aspect-w-219 aspect-h-142">
																<img decoding="async"
																	className="w-full h-full object-center object-cover"
																	src={course01}
																	alt="3-bed Apartment | 67 sq.m" loading="lazy"/>
															</div>
														</div>
													</div>
													<div className="card-body position-relative pb-3">
														<h4	className="mb-1 fs-xs fw-normal text-primary">
															B.Eng.
														</h4>
														<h3 className="finder-hp-listing-title  h6 mb-2 fs-base">
															<a className="nav-link stretched-link"
																href="{% url 'course_detail' 'electrical-engineering-3301742' %}">Electrical Engineering</a>
														</h3>
														<p className="mb-2 fs-sm text-muted"><em>Toronto Metropolitan University</em><br/>Toronto, Canada</p>
														<div
															className="hp-listing__attributes hp-listing__attributes--primary">
															<div className="fw-bold">
																<i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
																$27,790 / year
															</div>
														</div>
													</div>
													<div
														className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap hp-listing__attributes hp-listing__attributes--secondary">
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg fi-calendar-alt"></i> 4 years
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg fi-clock"></i> Full-time
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg fi-map-pin"></i> On Campus
														</span>
													</div>
												</div>
											</div>

											<div className="col">
												<div className="card shadow-sm card-hover border-0 h-100">
													<div className="card-img-top card-img-hover">
														<a className="img-overlay"
															href="{% url 'course_detail' 'electrical-engineering-3301742' %}"></a>
														<div className="position-absolute start-0 top-0 pt-3 ps-3">
															
														</div>
														<div className="content-overlay end-0 top-0 pt-3 pe-3">
															<a className="btn btn-icon btn-light btn-xs text-body shadow-sm rounded-circle ms-2 mb-2 hp-listing__action hp-listing__action--favorite"
																data-bs-toggle="modal" href="#user_login_modal"><i
																	className="hp-icon heart fi-heart"></i></a>
														</div>
														<div>
															<div className="aspect-ratio aspect-w-219 aspect-h-142">
																<img decoding="async"
																	className="w-full h-full object-center object-cover"
																	src={course02}
																	alt="Family Home| 120 sq.m" loading="lazy"/>
															</div>
														</div>
													</div>
													<div className="card-body position-relative pb-3">
														<h4
															className="mb-1 fs-xs fw-normal text-primary">
															M.Sc. </h4>
														<h3 className="finder-hp-listing-title  h6 mb-2 fs-base">
															<a className="nav-link stretched-link"
																href="{% url 'course_detail' 'electrical-engineering-3301742' %}">International Corporate
															Finance and Banking</a>
														</h3>
														<p className="mb-2 fs-sm text-muted"><em>University of Glasgow</em><br/>
														Glasgow, Scotland, United Kingdom</p>
														<div
															className="hp-listing__attributes hp-listing__attributes--primary">
															<div className="fw-bold">
																<i
																	className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
																$31,526 / year
															</div>
														</div>
													</div>
													<div
														className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap hp-listing__attributes hp-listing__attributes--secondary">
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-calendar-alt"></i> 1 year
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-clock"></i> Full-time
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-map-pin"></i> On Campus
														</span>
													</div>
												</div>
											</div>

											<div className="col">
												<div className="card shadow-sm card-hover border-0 h-100">
													<div className="card-img-top card-img-hover">
														<a className="img-overlay"
															href="{% url 'course_detail' 'electrical-engineering-3301742' %}"></a>
														<div className="position-absolute start-0 top-0 pt-3 ps-3">
															
														</div>
														<div className="content-overlay end-0 top-0 pt-3 pe-3">
															<a className="btn btn-icon btn-light btn-xs text-body shadow-sm rounded-circle ms-2 mb-2 hp-listing__action hp-listing__action--favorite"
																data-bs-toggle="modal" href="#user_login_modal"><i
																	className="hp-icon heart fi-heart"></i></a>
														</div>
														<div>
															<div className="aspect-ratio aspect-w-219 aspect-h-142">
																<img decoding="async"
																	className="w-full h-full object-center object-cover"
																	src={course03}
																	alt="Greenpoint Rentals | 85 sq.m"
																	loading="lazy"/>
															</div>
														</div>
													</div>
													<div className="card-body position-relative pb-3">
														<h4
															className="mb-1 fs-xs fw-normal text-primary">
															Ph.D. </h4>
														<h3 className="finder-hp-listing-title  h6 mb-2 fs-base">
															<a className="nav-link stretched-link"
																href="{% url 'course_detail' 'electrical-engineering-3301742' %}">Computer Science
															and Engineering</a>
														</h3>
														<p className="mb-2 fs-sm text-muted"><em>University of Fairfax</em><br/>
														Online</p>
														<div
															className="hp-listing__attributes hp-listing__attributes--primary">
															<div className="fw-bold">
																<i
																	className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
																$64,681 / full
															</div>
														</div>
													</div>
													<div
														className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap hp-listing__attributes hp-listing__attributes--secondary">
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-calendar-alt"></i> ---
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-clock"></i> Part-time
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-map-pin"></i> Online
														</span>
													</div>
												</div>
											</div>

											<div className="col">
												<div className="card shadow-sm card-hover border-0 h-100">
													<div className="card-img-top card-img-hover">
														<a className="img-overlay"
															href="{% url 'course_detail' 'electrical-engineering-3301742' %}"></a>
														<div className="position-absolute start-0 top-0 pt-3 ps-3">
															
														</div>
														<div className="content-overlay end-0 top-0 pt-3 pe-3">
															<a className="btn btn-icon btn-light btn-xs text-body shadow-sm rounded-circle ms-2 mb-2 hp-listing__action hp-listing__action--favorite"
																data-bs-toggle="modal" href="#user_login_modal"><i
																	className="hp-icon heart fi-heart"></i></a>
														</div>
														<div>
															<div className="aspect-ratio aspect-w-219 aspect-h-142">
																<img decoding="async"
																	className="w-full h-full object-center object-cover"
																	src={course04}
																	alt="Studio | 32 sq.m" loading="lazy"/>
															</div>
														</div>
													</div>
													<div className="card-body position-relative pb-3">
														<h4
															className="mb-1 fs-xs fw-normal text-primary">
															Ph.D. </h4>
														<h3 className="finder-hp-listing-title  h6 mb-2 fs-base">
															<a className="nav-link stretched-link"
																href="{% url 'course_detail' 'electrical-engineering-3301742' %}">Management Engineering</a>
														</h3>
														<p className="mb-2 fs-sm text-muted"><em>Politecnico di Milano</em><br/>
														Milano, Italy</p>
														<div
															className="hp-listing__attributes hp-listing__attributes--primary">
															<div className="fw-bold">
																<i
																	className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
																Tuition unknown
															</div>
														</div>
													</div>
													<div
														className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap hp-listing__attributes hp-listing__attributes--secondary">
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-calendar-alt"></i> 3 years
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-clock"></i> PT, FT
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-map-pin"></i> On Campus
														</span>
													</div>
												</div>
											</div>

											<div className="col">
												<div className="card shadow-sm card-hover border-0 h-100">
													<div className="card-img-top card-img-hover">
														<a className="img-overlay"
															href="{% url 'course_detail' 'electrical-engineering-3301742' %}"></a>
														<div className="position-absolute start-0 top-0 pt-3 ps-3">
															
														</div>
														<div className="content-overlay end-0 top-0 pt-3 pe-3">
															<a className="btn btn-icon btn-light btn-xs text-body shadow-sm rounded-circle ms-2 mb-2 hp-listing__action hp-listing__action--favorite"
																data-bs-toggle="modal" href="#user_login_modal"><i
																	className="hp-icon heart fi-heart"></i></a>
														</div>
														<div>
															<div className="aspect-ratio aspect-w-219 aspect-h-142">
																<img decoding="async"
																	className="w-full h-full object-center object-cover"
																	src={course05}
																	alt="Cottage | 120 sq.m" loading="lazy"/>
															</div>
														</div>
													</div>
													<div className="card-body position-relative pb-3">
														<h4
															className="mb-1 fs-xs fw-normal text-primary">
															PGD. </h4>
														<h3 className="finder-hp-listing-title  h6 mb-2 fs-base">
															<a className="nav-link stretched-link"
																href="{% url 'course_detail' 'electrical-engineering-3301742' %}">Business Skills</a>
														</h3>
														<p className="mb-2 fs-sm text-muted"><em>Keele University</em><br/>
														Keele, England, United Kingdom</p>
														<div
															className="hp-listing__attributes hp-listing__attributes--primary">
															<div className="fw-bold">
																<i
																	className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
																Tuition unknown
															</div>
														</div>
													</div>
													<div
														className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap hp-listing__attributes hp-listing__attributes--secondary">
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-calendar-alt"></i> 4 months
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-clock"></i> PT, FT
														</span>
														<span className="d-inline-block mx-1 px-0 fs-sm">
															<i
																className="finder-icon ms-1 mt-n1 fs-lg text-muted fi-map-pin"></i> On Campus
														</span>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Featured Courses Section --> */}

			{/* <!-- About Section--> */}
			<section className="elementor-section elementor-top-section elementor-element elementor-element-5846dbbb elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
				data-id="5846dbbb" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				<div className="elementor-container elementor-column-gap-default container mb-5 pb-2 pb-lg-4 px-0">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-453b1463"
						data-id="453b1463" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-section elementor-inner-section elementor-element elementor-element-5baf4e7f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
								data-id="5baf4e7f" data-element_type="section">
								<div
									className="elementor-container elementor-column-gap-default container px-0 row align-items-center container px-0">
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4213655b col-md-5"
										data-id="4213655b" data-element_type="column">
										<div
											className="p-0 w-auto d-block mx-md-0 mx-auto mb-md-0 mb-4 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-6e67053e elementor-widget elementor-widget-image"
												data-id="6e67053e" data-element_type="widget"
												data-widget_type="image.default">
												<div className="elementor-widget-container">
													<img decoding="async" width="416" height="400"
														src={hillpadTransparent}
														className="attachment-full size-full wp-image-758" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5367987e col-xxl-6 col-md-7 text-md-start text-center"
										data-id="5367987e" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-184c5a2 mb-0 elementor-widget elementor-widget-highlighted-heading"
												data-id="184c5a2" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<h2 className="finder-elementor-highlighted-heading__title">
														Let us help you find your dream school</h2>
												</div>
											</div>
											<div className="elementor-element elementor-element-119d7920 mb-0 elementor-widget elementor-widget-highlighted-heading"
												data-id="119d7920" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<p className="finder-elementor-highlighted-heading__title pb-3 fs-lg">
														We provide an online platform designed to make finding and applying
														for undergraduate and postgraduate courses easy and efficient.
														With HillPad, you can conveniently access the best courses from leading universities
														around the world and unlock the possibilities of your future!
													</p>
												</div>
											</div>
											<div className="elementor-element elementor-element-6d9f7931 elementor-widget elementor-widget-button"
												data-id="6d9f7931" data-element_type="widget"
												data-widget_type="button.button-finder">
												<div className="elementor-widget-container">
													<div className="elementor-button-wrapper">
														<a href="{% url 'about' %}"
															className="elementor-button-link btn btn-primary bg-primary rounded fr-elementor-button btn-lg"
															role="button">
															<span className="elementor-button-content-wrapper">
																<span className="elementor-button-text">
																	About Us
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Calculate the Cost of Your Property Section --> */}

			{/* <!-- Browse Country Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-62ed2f99 elementor-section-full_width elementor-section-stretched mb-5 pb-2  elementor-section-height-default elementor-section-height-default"
				data-id="62ed2f99" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				<div className="elementor-container elementor-column-gap-default container">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c29f61c"
						data-id="c29f61c" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							
							<div className="elementor-section elementor-inner-section elementor-element elementor-element-51f51421 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
								data-id="51f51421" data-element_type="section">
								<div
									className="elementor-container elementor-column-gap-default flex-nowrap d-flex align-items-center justify-content-between mb-3">
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-670f8a6c col-auto"
										data-id="670f8a6c" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-57d7219d mb-0  elementor-widget elementor-widget-highlighted-heading"
												data-id="57d7219d" data-element_type="widget"
												data-widget_type="highlighted-heading.default">
												<div className="elementor-widget-container">
													<h2 className="finder-elementor-highlighted-heading__title h3 mb-0">
														Browse by Country</h2>
												</div>
											</div>
										</div>
									</div>
									<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-14e98cb1 col-auto"
										data-id="14e98cb1" data-element_type="column">
										<div className="p-0 elementor-widget-wrap elementor-element-populated">
											<div className="elementor-element elementor-element-4bb626b9 elementor-align-right elementor-mobile-align-right elementor-widget elementor-widget-button"
												data-id="4bb626b9" data-element_type="widget"
												data-widget_type="button.button-finder">
												<div className="elementor-widget-container">
													<div className="elementor-button-wrapper">
														<a href="{% url 'countries_listing' %}"
															className="elementor-button-link btn btn-link bg-link rounded fr-elementor-button pb-0 fw-normal ms-md-3 pb-0"
															role="button">
															<span
																className="elementor-button-content-wrapper d-flex align-items-center">
																<span
																	className="elementor-button-icon btn__icon btn__icon--right order-2 lh-base">
																	<i aria-hidden="true"
																		className="ms-2 lh-base fi fi-arrow-long-right"></i>
																</span>
																<span className="elementor-button-text order-1">View
																	all</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="elementor-element elementor-element-fr-city city-carousel elementor-widget elementor-widget-fr-city-carousel"
								data-id="fr-city" data-element_type="widget"
								data-widget_type="fr-city-carousel.default">
								<div className="elementor-widget-container">
									<div
										className="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2 tns-controls-outside-xxl">
										<div id="slider-63e0f9b255660"
											className="tns-carousel-inner row gx-4 mx-0 py-md-4 py-3" data-ride="tns"
											data-carousel-options="{&quot;loop&quot;:true,&quot;controls&quot;:true,&quot;axis&quot;:&quot;horizontal&quot;,&quot;items&quot;:4,&quot;nav&quot;:true,&quot;navPosition&quot;:&quot;bottom&quot;,&quot;autoplay&quot;:false,&quot;autoHeight&quot;:false,&quot;autoplayTimeout&quot;:null,&quot;speed&quot;:300,&quot;arrowKeys&quot;:false,&quot;mode&quot;:&quot;carousel&quot;,&quot;slideBy&quot;:&quot;1&quot;,&quot;responsive&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;nav&quot;:true},&quot;500&quot;:{&quot;items&quot;:2,&quot;nav&quot;:true},&quot;768&quot;:{&quot;items&quot;:3,&quot;nav&quot;:true},&quot;992&quot;:{&quot;items&quot;:4,&quot;nav&quot;:true}}}">

											<div className="col">
												<a className="card shadow-sm card-hover border-0"
													href="{% url 'country_detail' %}">
													<div className="card-img-top card-img-hover">
														<span className="img-overlay opacity-65"></span> <img
															decoding="async"
															src={newYork} alt=""/>
														<div
															className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
															<div className="w-100 p-1">
																<div className="mb-2">
																	<h4
																		className="fr-city__label mb-2 text-light fw-bold fs-xs">
																		<i
																			className="mt-n1 me-2 fs-sm align-middle fa fa-globe-americas text-primary"></i>
																		Europe
																	</h4>
																	<p className="text-light fw-normal fs-xs">
																		Belgium, officially the Kingdom of Belgium, is a country in Northwestern Europe.
																		The country is bordered by the Netherlands to the north,
																		Germany to the east, Luxembourg to the southeast, France to the southwest,
																		and the North Sea to the northwest. 
																	</p>
																</div>

															</div>
														</div>
													</div>

													<div className="card-body text-center">
														<h3 className="fr-city__text mb-0 text-nav fs-base">
															Belgium </h3>
													</div>
												</a>
											</div>

											<div className="col">
												<a className="card shadow-sm card-hover border-0"
													href="{% url 'country_detail' %}">
													<div className="card-img-top card-img-hover">
														<span className="img-overlay opacity-65"></span> <img
															decoding="async"
															src={chicago} alt=""/>
														<div
															className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
															<div className="w-100 p-1">
																<div className="mb-2">
																	<h4
																		className="fr-city__label mb-2 text-light fw-bold fs-xs">
																		<i
																			className="mt-n1 me-2 fs-sm align-middle fa fa-globe-americas text-primary"></i>
																		North America
																	</h4>

																	<p className="text-light fw-normal fs-xs">
																		Canada is a country in North America. 
																		Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean
																		and northward into the Arctic Ocean, covering over 9.98 million square kilometres
																		(3.85 million square miles), making it the worlds second-largest country by total area.
																	</p>
																</div>

															</div>
														</div>
													</div>

													<div className="card-body text-center">
														<h3
															className="fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base">
															Canada </h3>
													</div>
												</a>
											</div>

											<div className="col">
												<a className="card shadow-sm card-hover border-0"
													href="{% url 'country_detail' %}">
													<div className="card-img-top card-img-hover">
														<span className="img-overlay opacity-65"></span> <img
															decoding="async"
															src={losAngeles}
															alt=""/>
														<div
															className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
															<div className="w-100 p-1">
																<div className="mb-2">
																	<h4
																		className="fr-city__label mb-2 text-light fw-bold fs-xs">
																		<i
																			className="mt-n1 me-2 fs-sm align-middle fa fa-globe-americas text-primary"></i>
																		Africa
																	</h4>
																	<p className="text-light fw-normal fs-xs">
																		Nigeria is a country in West Africa. It is situated between the Sahel to the north
																		and the Gulf of Guinea to the south in the Atlantic Ocean.
																		It covers an area of 923,769 square kilometres (356,669 sq mi), and with a population of over 225 million, 
																		it is the most populous country in Africa, and the worlds sixth-most populous country.
																	</p>

																</div>

															</div>
														</div>
													</div>

													<div className="card-body text-center">
														<h3
															className="fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base">
															Nigeria </h3>
													</div>
												</a>
											</div>

											<div className="col">
												<a className="card shadow-sm card-hover border-0"
													href="{% url 'country_detail' %}">
													<div className="card-img-top card-img-hover">
														<span className="img-overlay opacity-65"></span> <img
															decoding="async"
															src={sanDiego}
															alt=""/>
														<div
															className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
															<div className="w-100 p-1">
																<div className="mb-2">
																	<h4
																		className="fr-city__label mb-2 text-light fw-bold fs-xs">
																		<i
																			className="mt-n1 me-2 fs-sm align-middle fa fa-globe-americas text-primary"></i>
																		Europe
																	</h4>

																	<p className="text-light fw-normal fs-xs">
																		The United Kingdom is a country in Europe, off the north-western coast of the continental mainland.
																		It comprises England, Scotland, Wales and Northern Ireland.
																		Its total area is 242,495 square kilometres (93,628 sq mi),
																		with an estimated 2020 population of more than 67 million people.
																	</p>
																</div>

															</div>
														</div>
													</div>

													<div className="card-body text-center">
														<h3
															className="fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base">
															United Kingdom </h3>
													</div>
												</a>
											</div>

											<div className="col">
												<a className="card shadow-sm card-hover border-0"
													href="{% url 'country_detail' %}">
													<div className="card-img-top card-img-hover">
														<span className="img-overlay opacity-65"></span> <img
															decoding="async"
															src={dallas} alt=""/>
														<div
															className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
															<div className="w-100 p-1">
																<div className="mb-2">
																	<h4
																		className="fr-city__label mb-2 text-light fw-bold fs-xs">
																		<i
																			className="mt-n1 me-2 fs-sm align-middle fa fa-globe-americas text-primary"></i>
																		North America
																	</h4>

																	<p className="text-light fw-normal fs-xs">
																		The United States of America is a country primarily located in North America.
																		It is the worlds third-largest country by both land and total area.
																		With a population of over 333 million, it is the most populous country
																		in the Americas and the third most populous in the world.
																	</p>
																</div>

															</div>
														</div>
													</div>

													<div className="card-body text-center">
														<h3
															className="fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base fr-city__text mb-0 text-nav fs-base">
															United States </h3>
													</div>
												</a>
											</div>

										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Browse Country Section --> */}

			{/* <!-- Students' Reviews Section --> */}
			<section
				className="elementor-section elementor-top-section elementor-element elementor-element-42a3e0a6 elementor-section-full_width elementor-section-stretched mb-5 pb-2 pb-lg-4 elementor-section-height-default elementor-section-height-default"
				data-id="42a3e0a6" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				<div className="elementor-container elementor-column-gap-default container ">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1ab51810"
						data-id="1ab51810" data-element_type="column">
						<div className="p-0 elementor-widget-wrap elementor-element-populated">
							<div className="elementor-element elementor-element-7fdd449a mb-0 elementor-widget elementor-widget-highlighted-heading"
								data-id="7fdd449a" data-element_type="widget"
								data-widget_type="highlighted-heading.default">
								<div className="elementor-widget-container">
									<h2
										className="finder-elementor-highlighted-heading__title h3 mb-4 pb-3 text-center text-md-start">
										Reviews across the Globe</h2>
								</div>
							</div>

							<div className="elementor-element elementor-element-36dd5e91 testimonial-carousel elementor-widget elementor-widget-fn-testimonial-carousel"
								data-id="36dd5e91" data-element_type="widget"
								data-settings="{&quot;show_images&quot;:&quot;yes&quot;,&quot;show_social_icon&quot;:&quot;yes&quot;}"
								data-widget_type="fn-testimonial-carousel.testimonial-style-2">
								<div className="elementor-widget-container">

									<div className="position-relative tns-carousel-wrapper">
										<div id="slider-63e0f9b25d403" className="tns-carousel-inner items-container"
											data-ride="tns"
											data-carousel-options="{&quot;loop&quot;:true,&quot;controls&quot;:true,&quot;axis&quot;:&quot;horizontal&quot;,&quot;items&quot;:1,&quot;nav&quot;:false,&quot;navPosition&quot;:&quot;bottom&quot;,&quot;autoplay&quot;:false,&quot;autoHeight&quot;:false,&quot;autoplayTimeout&quot;:null,&quot;speed&quot;:300,&quot;arrowKeys&quot;:false,&quot;mode&quot;:&quot;gallery&quot;,&quot;controlsContainer&quot;:&quot;#slider-63e0f9b25d403-control&quot;,&quot;gutter&quot;:0}">
											
											<div className="item">
												<div className="row align-items-center">
													<div className="col-xl-4 d-none d-xl-block">
														<img decoding="async"
															src={reviewer1}
															alt="Floyd Miles" className="rounded-3"/>
													</div>
													<div className="col-xl-4 col-md-5 col-sm-4">
														<img decoding="async"
															src={reviewer2}
															alt="Floyd Miles" className="rounded-3"/>
													</div>

													<div
														className="col-xl-4 px-md-0 ms-md-n4 col-md-7 col-sm-8 px-4 px-sm-3 mt-n5 mt-sm-0 py-3">
														<div className="card border-0 shadow-sm ms-sm-n5">
															<blockquote className="blockquote card-body">
																<h4 className="fr-testimonial__text"
																	style={{maxWidth: "22rem"}}>
																	&quot;The best platform for finding courses!&quot;
																</h4>

																<p
																	className="fr-testimonial__subtext d-sm-none d-lg-block">
																	HillPad has made it so easy for me to find the perfect course for my degree.
																	I&quot;m so happy to have found this amazing platform!
																</p>

																<footer className="d-flex justify-content-between">
																	<div className="pe-3">
																		<a className="text-decoration-none"
																			href="https://finder.madrasthemes.com/real-estate/vendor/floyd-miles/">
																			<h6 className="fr-testimonial__name mb-0">
																				Floyd Miles
																			</h6>

																			<div className="fr-testimonial__title text-muted fw-normal fs-sm mb-3">
																				University of Cambridge
																			</div>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.facebook.com/">
																			<i className="fi fi-facebook"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://twitter.com/">
																			<i className="fi fi-twitter"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.instagram.com/">
																			<i className="fi fi-linkedin"></i>
																		</a>
																	</div>
																	<div>
																		<span className="star-rating">
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																		</span>

																		<div
																			className="fr-testimonial__review-count text-muted fs-sm mt-1">
																			43 reviews</div>


																	</div>
																</footer>
															</blockquote>
														</div>
													</div>
												</div>
											</div>

											<div className="item">
												<div className="row align-items-center">
													<div className="col-xl-4 d-none d-xl-block">
														<img decoding="async"
															src={reviewer2}
															alt="Guy Hawkins" className="rounded-3"/>
													</div>
													<div className="col-xl-4 col-md-5 col-sm-4">
														<img decoding="async"
															src={reviewer3}
															alt="Guy Hawkins" className="rounded-3"/>
													</div>

													<div
														className="col-xl-4 px-md-0 ms-md-n4 col-md-7 col-sm-8 px-4 px-sm-3 mt-n5 mt-sm-0 py-3">
														<div className="card border-0 shadow-sm ms-sm-n5">
															<blockquote className="blockquote card-body">
																<h4 className="fr-testimonial__text"
																	style={{maxWidth: "22rem"}}>
																	&quot;HillPad widened my educational options&quot;
																</h4>

																<p
																	className="fr-testimonial__subtext d-sm-none d-lg-block">
																	The HillPad platform has extensively broadened my educational options and
																	helped me choose the best university for me.
																</p>

																<footer className="d-flex justify-content-between">
																	<div className="pe-3">
																		<a className="text-decoration-none"
																			href="https://finder.madrasthemes.com/real-estate/vendor/floyd-miles/">
																			<h6 className="fr-testimonial__name mb-0">
																				Guy Hawkins
																			</h6>

																			<div className="fr-testimonial__title text-muted fw-normal fs-sm mb-3">
																				Stanford University
																			</div>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.facebook.com/">
																			<i className="fi fi-facebook"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://twitter.com/">
																			<i className="fi fi-twitter"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.instagram.com/">
																			<i className="fab fa-linkedin-in"></i>
																		</a>
																	</div>
																	<div>
																		<span className="star-rating">
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																		</span>

																		<div
																			className="fr-testimonial__review-count text-muted fs-sm mt-1">
																			16 reviews</div>


																	</div>
																</footer>
															</blockquote>
														</div>
													</div>
												</div>
											</div>

											<div className="item">
												<div className="row align-items-center">
													<div className="col-xl-4 d-none d-xl-block">
														<img decoding="async"
															src={reviewer3}
															alt="Kristin Watson" className="rounded-3"/>
													</div>
													<div className="col-xl-4 col-md-5 col-sm-4">
														<img decoding="async"
															src={reviewer1}
															alt="Kristin Watson" className="rounded-3"/>
													</div>

													<div
														className="col-xl-4 px-md-0 ms-md-n4 col-md-7 col-sm-8 px-4 px-sm-3 mt-n5 mt-sm-0 py-3">
														<div className="card border-0 shadow-sm ms-sm-n5">
															<blockquote className="blockquote card-body">
																<h4 className="fr-testimonial__text"
																	style={{maxWidth: "22rem"}}>
																	&quot;Finding the perfect course just got easier!&quot;
																</h4>

																<p
																	className="fr-testimonial__subtext d-sm-none d-lg-block">
																	I&quot;ve enjoyed being able to explore a wide variety of courses
																	from all over the world with HillPad&quot;s easy-to-use search engine.
																</p>

																<footer className="d-flex justify-content-between">
																	<div className="pe-3">
																		<a className="text-decoration-none"
																			href="https://finder.madrasthemes.com/real-estate/vendor/floyd-miles/">
																			<h6 className="fr-testimonial__name mb-0">
																				Kristin Watson
																			</h6>

																			<div className="fr-testimonial__title text-muted fw-normal fs-sm mb-3">
																				Harvard University
																			</div>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.facebook.com/">
																			<i className="fi fi-facebook"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://twitter.com/">
																			<i className="fi fi-twitter"></i>
																		</a>
																		<a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-1 mb-2"
																			href="https://www.instagram.com/">
																			<i className="fi fi-linkedin"></i>
																		</a>
																	</div>
																	<div>
																		<span className="star-rating">
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																			<i
																				className="star-rating-icon fi-star-filled active"></i>
																		</span>

																		<div
																			className="fr-testimonial__review-count text-muted fs-sm mt-1">
																			45 reviews</div>


																	</div>
																</footer>
															</blockquote>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div id="slider-63e0f9b25d403-control"
										className="controls-testimonial tns-carousel-controls justify-content-center justify-content-md-start my-2 mt-md-4">
										<button className="prev mx-2"> <i className="fi-chevron-left fs-xs"
												aria-hidden="true"></i>
										</button>
										<button className="next mx-2"> <i className="fi-chevron-right fs-xs"
												aria-hidden="true"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Students' Reviews Section --> */}

		</div>
	</div>        
        </>
    );
}
 
export default Home;