// import { useState } from 'react'
import Home from "./components/Home";

// import "./App.css";

import hillpad_transparent from "./frontend/wp-content/uploads/logos/hillpad-transparent.png";
import submit_spin from "./frontend/wp-content/plugins/wpforms-lite/assets/images/submit-spin.svg";




function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-dark-grayscale">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr
                                type="table"
                                tableValues="0 0.49803921568627"
                            ></fefuncr>
                            <fefuncg
                                type="table"
                                tableValues="0 0.49803921568627"
                            ></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0 0.49803921568627"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-grayscale">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr type="table" tableValues="0 1"></fefuncr>
                            <fefuncg type="table" tableValues="0 1"></fefuncg>
                            <fefuncb type="table" tableValues="0 1"></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-purple-yellow">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr
                                type="table"
                                tableValues="0.54901960784314 0.98823529411765"
                            ></fefuncr>
                            <fefuncg type="table" tableValues="0 1"></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0.71764705882353 0.25490196078431"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-blue-red">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr type="table" tableValues="0 1"></fefuncr>
                            <fefuncg
                                type="table"
                                tableValues="0 0.27843137254902"
                            ></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0.5921568627451 0.27843137254902"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-midnight">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr type="table" tableValues="0 0"></fefuncr>
                            <fefuncg
                                type="table"
                                tableValues="0 0.64705882352941"
                            ></fefuncg>
                            <fefuncb type="table" tableValues="0 1"></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-magenta-yellow">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr
                                type="table"
                                tableValues="0.78039215686275 1"
                            ></fefuncr>
                            <fefuncg
                                type="table"
                                tableValues="0 0.94901960784314"
                            ></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0.35294117647059 0.47058823529412"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-purple-green">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr
                                type="table"
                                tableValues="0.65098039215686 0.40392156862745"
                            ></fefuncr>
                            <fefuncg type="table" tableValues="0 1"></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0.44705882352941 0.4"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width="0"
                height="0"
                focusable="false"
                role="none"
                style={{visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden"}}
            >
                <defs>
                    <filter id="wp-duotone-blue-orange">
                        <fecolormatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></fecolormatrix>
                        <fecomponenttransfer colorInterpolationFilters="sRGB">
                            <fefuncr
                                type="table"
                                tableValues="0.098039215686275 1"
                            ></fefuncr>
                            <fefuncg
                                type="table"
                                tableValues="0 0.66274509803922"
                            ></fefuncg>
                            <fefuncb
                                type="table"
                                tableValues="0.84705882352941 0.41960784313725"
                            ></fefuncb>
                            <fefunca type="table" tableValues="1 1"></fefunca>
                        </fecomponenttransfer>
                        <fecomposite
                            in2="SourceGraphic"
                            operator="in"
                        ></fecomposite>
                    </filter>
                </defs>
            </svg>

            <div id="page" className="hfeed site page-wrapper">
                <div
                    className="offcanvas offcanvas-end"
                    id="demo-switcher"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="offcanvas-header d-block border-bottom">
                        <div className="finder-offcanvas-title d-flex align-items-center justify-content-between mb-4">
                            <h2 className="h5 mb-0">Choose Demo</h2>
                            <button
                                className="btn-close"
                                type="button"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <ul
                            id="menu-offcanvas-menu"
                            className="d-flex list-unstyled mb-0"
                            itemScope
                            itemType="http://www.schema.org/SiteNavigationElement"
                        >
                            <li
                                id="menu-item-2816"
                                className="me-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-2816"
                            >
                                <a
                                    itemProp="url"
                                    href="https://finder.madrasthemes.com/"
                                    className="btn btn-outline-secondary btn-sm w-100 me-2"
                                >
                                    <span itemProp="name">
                                        <i
                                            className="fi-home me-2"
                                            aria-hidden="true"
                                        ></i>
                                        Main Page
                                    </span>
                                </a>
                            </li>
                            <li
                                id="menu-item-2817"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2817"
                            >
                                <a
                                    itemProp="url"
                                    href="https://docs.madrasthemes.com/finder"
                                    className="btn btn-outline-secondary btn-sm w-100 me-2"
                                >
                                    <span itemProp="name">
                                        <i
                                            className="fi-file me-2"
                                            aria-hidden="true"
                                        ></i>
                                        Docs / UI Kit
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-body">
                        <aside id="block-14" className="widget widget_block">
                            <div className="is-layout-flow wp-block-group card card-hover shadow-sm mb-4 overflow-hidden">
                                <div className="wp-block-group__inner-container">
                                    <figure className="wp-block-image size-full is-resized mb-0 card-img-top">
                                        <a href="https://finder.madrasthemes.com/car-finder/">
                                            <img
                                                decoding="async"
                                                src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/car-finder.jpg"
                                                alt=""
                                                className="wp-image-2054"
                                                width="566"
                                                height="360"
                                            />
                                        </a>
                                    </figure>

                                    <div className="is-layout-flow wp-block-group card-body p-3">
                                        <div className="wp-block-group__inner-container">
                                            <h3 className="fs-base card-title text-center has-stretched-link has-text-decoration-none has-hover-primary has-black-color has-text-color">
                                                <a
                                                    href="https://finder.madrasthemes.com/car-finder/"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <span
                                                        style={{color: "#454056"}}
                                                        className="has-inline-color"
                                                    >
                                                        Car Finder Demo
                                                    </span>
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside id="block-15" className="widget widget_block">
                            <div className="is-layout-flow wp-block-group card card-hover shadow-sm mb-4 overflow-hidden">
                                <div className="wp-block-group__inner-container">
                                    <figure className="wp-block-image size-full mb-0 card-img-top">
                                        <a href="https://finder.madrasthemes.com/real-estate/">
                                            <img
                                                decoding="async"
                                                src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/real-estate.jpg"
                                                alt=""
                                                className="wp-image-2061"
                                            />
                                        </a>
                                    </figure>

                                    <div className="is-layout-flow wp-block-group card-body p-3">
                                        <div className="wp-block-group__inner-container">
                                            <h3 className="fs-base card-title text-center has-stretched-link has-text-decoration-none has-hover-primary has-black-color has-text-color">
                                                <a
                                                    rel="noreferrer noopener"
                                                    href="https://finder.madrasthemes.com/real-estate/"
                                                    target="_blank"
                                                >
                                                    <span
                                                        style={{color: "#454056"}}
                                                        className="has-inline-color"
                                                    >
                                                        Real Estate Demo
                                                    </span>
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside id="block-16" className="widget widget_block">
                            <div className="is-layout-flow wp-block-group card card-hover shadow-sm mb-4 overflow-hidden">
                                <div className="wp-block-group__inner-container">
                                    <figure className="wp-block-image size-full mb-0 card-img-top">
                                        <a href="https://finder.madrasthemes.com/job-board/">
                                            <img
                                                decoding="async"
                                                src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/job-board.jpg"
                                                alt=""
                                                className="wp-image-2062"
                                            />
                                        </a>
                                    </figure>

                                    <div className="is-layout-flow wp-block-group card-body p-3">
                                        <div className="wp-block-group__inner-container">
                                            <h3 className="fs-base card-title text-center has-stretched-link has-text-decoration-none has-hover-primary has-black-color has-text-color">
                                                <a
                                                    rel="noreferrer noopener"
                                                    href="https://finder.madrasthemes.com/job-board/"
                                                    target="_blank"
                                                >
                                                    <span
                                                        style={{color: "#454056"}}
                                                        className="has-inline-color"
                                                    >
                                                        Job Board Demo
                                                    </span>
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside id="block-17" className="widget widget_block">
                            <div className="is-layout-flow wp-block-group card card-hover shadow-sm mb-4 overflow-hidden">
                                <div className="wp-block-group__inner-container">
                                    <figure className="wp-block-image size-full mb-0 card-img-top">
                                        <a href="https://finder.madrasthemes.com/city-guide/">
                                            <img
                                                decoding="async"
                                                src="https://finder.madrasthemes.com/real-estate/wp-content/uploads/sites/2/2021/11/city-guide.jpg"
                                                alt=""
                                                className="wp-image-2063"
                                            />
                                        </a>
                                    </figure>

                                    <div className="is-layout-flow wp-block-group card-body p-3">
                                        <div className="wp-block-group__inner-container">
                                            <h3 className="fs-base card-title text-center has-stretched-link has-text-decoration-none has-hover-primary has-black-color has-text-color">
                                                <a
                                                    rel="noreferrer noopener"
                                                    href="https://finder.madrasthemes.com/city-guide/"
                                                    target="_blank"
                                                >
                                                    <span
                                                        style={{color: "#454056"}}
                                                        className="has-inline-color"
                                                    >
                                                        City Guide Demo
                                                    </span>
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="offcanvas-footer border-top">
                        <a
                            href="#"
                            className="finder-offcanvas-footer-button btn btn-primary btn-lg w-100"
                            target="_blank"
                            rel="noopener"
                        >
                            <i className="fi-cart fs-lg me-2"></i>Buy Finder{" "}
                        </a>
                    </div>
                </div>

                <header
                    id="masthead"
                    className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
                >
                    <div className="container">
                        <a
                            href="{% url 'home' %}"
                            className="navbar-brand me-3 me-xl-4"
                            rel="home"
                            aria-current="page"
                        >
                            <img
                                width="80"
                                height="32"
                                src={hillpad_transparent}
                                className="d-block"
                                alt="Finder City Guide"
                            />
                        </a>

                        <button
                            id="navbar-toggler-btn"
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a
                            className="finder-header-listing-button btn btn-primary btn-sm rounded-pill ms-2 order-lg-3"
                            data-component="link"
                            data-url="{% url 'courses_listing' %}"
                        >
                            <i className="fa fa-paper-plane me-2"></i>
                            <span>Explore</span>
                        </a>

                        <div
                            className="collapse navbar-collapse order-md-2"
                            id="navbarNav"
                        >
                            <ul
                                id="menu-primary-menu"
                                className="navbar-nav flex-wrap"
                                itemScope
                                itemType="http://www.schema.org/SiteNavigationElement"
                            >
                                <li
                                    id="menu-item-285"
                                    className="py-2 me-lg-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-285 nav-item"
                                >
                                    <a
                                        href="#"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="dropdown-toggle nav-link border-end-lg align-items-center py-1 pe-lg-4"
                                        id="menu-item-dropdown-285"
                                    >
                                        <span itemProp="name">
                                            <i
                                                className="fi-layers me-2"
                                                aria-hidden="true"
                                            ></i>
                                            Browse
                                        </span>
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="menu-item-dropdown-285"
                                    >
                                        <li
                                            id="menu-item-365"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-365"
                                        >
                                            <a
                                                itemProp="url"
                                                href="{% url 'countries_listing' %}"
                                                className="dropdown-item"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fa fa-globe-africa fs-base opacity-50 me-2"
                                                        aria-hidden="true"
                                                    ></i>
                                                    Browse by country
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-372"
                                            className="dropdown-divider menu-item menu-item-type-custom menu-item-object-custom menu-item-372"
                                        >
                                            <div className="dropdown-divider">
                                                <span itemProp="name">
                                                    Dropdown Divider
                                                </span>
                                            </div>
                                        </li>
                                        <li
                                            id="menu-item-366"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-366"
                                        >
                                            <a
                                                itemProp="url"
                                                href="{% url 'disciplines_listing' %}"
                                                className="dropdown-item"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fi-briefcase fs-base opacity-50 me-2"
                                                        aria-hidden="true"
                                                    ></i>
                                                    Browse by discipline
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-373"
                                            className="dropdown-divider menu-item menu-item-type-custom menu-item-object-custom menu-item-373"
                                        >
                                            <div className="dropdown-divider">
                                                <span itemProp="name">
                                                    Dropdown Divider
                                                </span>
                                            </div>
                                        </li>

                                        <li
                                            id="menu-item-367"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-367"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                className="dropdown-item dropdown-toggle"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fa fa-graduation-cap fs-base opacity-50 me-2"
                                                        aria-hidden="true"
                                                    ></i>
                                                    Programmes
                                                </span>
                                            </a>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="menu-item-dropdown-2511"
                                            >
                                                <li
                                                    id="menu-item-388"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-388"
                                                >
                                                    <a
                                                        itemProp="url"
                                                        href="{% url 'courses_listing' %}"
                                                        className="dropdown-item"
                                                    >
                                                        <span itemProp="name">
                                                            Bachelors
                                                        </span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-388"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-388"
                                                >
                                                    <a
                                                        itemProp="url"
                                                        href="{% url 'courses_listing' %}"
                                                        className="dropdown-item"
                                                    >
                                                        <span itemProp="name">
                                                            Masters
                                                        </span>
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-388"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-388"
                                                >
                                                    <a
                                                        itemProp="url"
                                                        href="{% url 'courses_listing' %}"
                                                        className="dropdown-item"
                                                    >
                                                        <span itemProp="name">
                                                            PhD &amp; Doctorates
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li
                                    id="menu-item-291"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-291 nav-item"
                                >
                                    <a
                                        itemProp="url"
                                        href="{% url 'home' %}"
                                        className="nav-link"
                                        id="menu-item-dropdown-291"
                                    >
                                        <span itemProp="name">Home</span>
                                    </a>
                                </li>

                                <li
                                    id="menu-item-291"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-291 nav-item"
                                >
                                    <a
                                        itemProp="url"
                                        href="{% url 'about' %}"
                                        className="nav-link"
                                        id="menu-item-dropdown-291"
                                    >
                                        <span itemProp="name">About Us</span>
                                    </a>
                                </li>

                                <li
                                    id="menu-item-293"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-293 nav-item"
                                >
                                    <a
                                        href="#"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="dropdown-toggle nav-link"
                                        id="menu-item-dropdown-293"
                                    >
                                        <span itemProp="name">Insights</span>
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="menu-item-dropdown-293"
                                    >
                                        <li
                                            id="menu-item-378"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-378"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span itemProp="name">
                                                    News
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-378"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-378"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span itemProp="name">
                                                    Blog articles
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-378"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-378"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span itemProp="name">
                                                    Events
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li
                                    id="menu-item-291"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-291 nav-item"
                                >
                                    <a
                                        itemProp="url"
                                        href="#"
                                        className="nav-link"
                                        id="menu-item-dropdown-291"
                                    >
                                        <span itemProp="name">Careers</span>
                                    </a>
                                </li>

                                <li
                                    id="menu-item-291"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-291 nav-item"
                                >
                                    <a
                                        itemProp="url"
                                        href="#"
                                        className="nav-link"
                                        id="menu-item-dropdown-291"
                                    >
                                        <span itemProp="name">FAQs</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <Home />

            </div>

            <footer className="footer pt-lg-5 pt-4 bg-dark text-light">
                <div className="container mb-4 py-4 pb-lg-5">
                    <div className="row gy-4 footer-widgets-dark-v2">
                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div
                                id="block-18"
                                className="widget widget_block widget_media_image"
                            >
                                <figure className="wp-block-image size-full mb-4 pb-sm-3">
                                    <img
                                        decoding="async"
                                        width="90"
                                        height="32"
                                        src={hillpad_transparent}
                                        alt=""
                                        className="wp-image-2803"
                                    />
                                </figure>
                            </div>
                            <div id="block-19" className="widget widget_block">
                                <ul>
                                    <li>
                                        <a href="mailto:contact@hillpad.com">
                                            contact@hillpad.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:4065550120">
                                            (406) 555-0120
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div
                                id="nav_menu-1"
                                className="widget widget_nav_menu"
                            >
                                <h3 className="fs-base text-light widget-title">
                                    Resources
                                </h3>
                                <div className="menu-footer-column-1-container">
                                    <ul
                                        id="menu-footer-column-1"
                                        className="menu"
                                        itemScope
                                        itemType="http://www.schema.org/SiteNavigationElement"
                                    >
                                        <li
                                            id="menu-item-2804"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2804"
                                        >
                                            <a href="{% url 'courses_listing' %}?programme=bachelors">
                                                Bachelors
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-2805"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2805"
                                        >
                                            <a href="{% url 'courses_listing' %}?programme=masters">
                                                Masters
                                            </a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2806">
                                            <a href="{% url 'courses_listing' %}?programme=doctorates">
                                                Doctorates
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-2807"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2807"
                                        >
                                            <a href="{% url 'countries_listing' %}">
                                                Browse by country
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-2807"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2807"
                                        >
                                            <a href="{% url 'disciplines_listing' %}">
                                                Browse by discipline
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div
                                id="nav_menu-2"
                                className="widget widget_nav_menu"
                            >
                                <h3 className="fs-base text-light widget-title">
                                    Quick Links
                                </h3>
                                <div className="menu-footer-column-2-container">
                                    <ul
                                        id="menu-footer-column-2"
                                        className="menu"
                                        itemScope
                                        itemType="http://www.schema.org/SiteNavigationElement"
                                    >
                                        <li
                                            id="menu-item-2808"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2808"
                                        >
                                            <a href="{% url 'about' %}">
                                                About Us
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-2808"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2808"
                                        >
                                            <a href="{% url 'contact' %}">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-2810"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2810"
                                        >
                                            <a href="#">FAQs</a>
                                        </li>
                                        <li
                                            id="menu-item-2809"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2809"
                                        >
                                            <a href="#">Careers</a>
                                        </li>
                                        <li
                                            id="menu-item-2811"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2811"
                                        >
                                            <a href="#">For schools</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-1">
                            <div id="block-20" className="widget widget_block">
                                <h3 className="h4 text-light">
                                    Subscribe to our newsletter
                                </h3>
                            </div>
                            <div
                                id="block-21"
                                className="widget widget_block widget_text"
                            >
                                <p className="fs-sm mb-4 opacity-60">
                                    Don’t miss any relevant tips and
                                    announcements!
                                </p>
                            </div>
                            <div id="block-22" className="widget widget_block">
                                <p></p>
                                <div
                                    className="wpforms-container form-group form-group-light w-100 text-muted rounded-pill wpforms-newsletter mb-0"
                                    id="wpforms-3487"
                                >
                                    <form
                                        id="wpforms-form-3487"
                                        className="wpforms-validate wpforms-form wpforms-ajax-form"
                                        data-formid="3487"
                                        method="post"
                                        encType="multipart/form-data"
                                        action="/?simply_static_page=1"
                                        data-token="2c3daff38c6262c0de136b48d1cccaa9"
                                    >
                                        <noscript className="wpforms-error-noscript">
                                            Please enable JavaScript in your
                                            browser to complete this form.
                                        </noscript>
                                        <div className="wpforms-field-container">
                                            <div
                                                id="wpforms-3487-field_1-container"
                                                className="wpforms-field wpforms-field-email fi-mail input-group-sm"
                                                data-field-id="1"
                                            >
                                                <label
                                                    className="wpforms-field-label wpforms-label-hide"
                                                    htmlFor="wpforms-3487-field_1"
                                                >
                                                    {" "}
                                                    <span className="wpforms-required-label">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="wpforms-3487-field_1"
                                                    className="wpforms-field-small wpforms-field-required form-control form-control-lg"
                                                    name="wpforms[fields][1]"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="wpforms-submit-container">
                                            <input
                                                type="hidden"
                                                name="wpforms[id]"
                                                value="3487"
                                            />
                                            <input
                                                type="hidden"
                                                name="wpforms[author]"
                                                value="1"
                                            />
                                            <input
                                                type="hidden"
                                                name="wpforms[post_id]"
                                                value="510"
                                            />
                                            <button
                                                type="submit"
                                                name="wpforms[submit]"
                                                id="wpforms-submit-3487"
                                                className="wpforms-submit btn btn-primary btn-sm rounded-pill"
                                                data-alt-text="Sending..."
                                                data-submit-text="Subscribe"
                                                aria-live="assertive"
                                                value="wpforms-submit"
                                            >
                                                Subscribe
                                            </button>
                                            <img
                                                src={submit_spin}
                                                className="wpforms-submit-spinner"
                                                style={{display: "none"}}
                                                width="26"
                                                height="26"
                                                alt="Loading"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 border-top border-light">
                    <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
                        <p className="order-lg-1 order-2 fs-sm mb-2 mb-lg-0">
                            <span className="text-light opacity-50">
                                Copyright &#169; 2023
                            </span>
                            <a
                                className="nav-link-light fw-bold"
                                href="{% url 'about' %}"
                            >
                                HillPad Limited.
                            </a>
                            <span className="text-light opacity-50">
                                All rights.reserved.
                            </span>
                        </p>

                        <div className="d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
                            <div className="d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4">
                                <ul
                                    id="menu-footer-menu"
                                    className="nav"
                                    itemScope
                                    itemType="http://www.schema.org/SiteNavigationElement"
                                >
                                    <li
                                        id="menu-item-736"
                                        className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-736"
                                    >
                                        <a
                                            itemProp="url"
                                            href="{% url 'privacy_policy' %}"
                                            className="nav-link-light px-2 mx-1"
                                        >
                                            <span itemProp="name">
                                                Privacy policy
                                            </span>
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-737"
                                        className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-737"
                                    >
                                        <a
                                            itemProp="url"
                                            href="{% url 'terms_of_use' %}"
                                            className="nav-link-light px-2 mx-1"
                                        >
                                            <span itemProp="name">
                                                Terms of use
                                            </span>
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-738"
                                        className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-738"
                                    >
                                        <a
                                            itemProp="url"
                                            href="{% url 'disclaimer' %}"
                                            className="nav-link-light px-2 mx-1"
                                        >
                                            <span itemProp="name">
                                                Disclaimer
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="text-nowrap">
                                    <ul
                                        id="menu-social-menu"
                                        className="nav"
                                        itemScope
                                        itemType="http://www.schema.org/SiteNavigationElement"
                                    >
                                        <li
                                            id="menu-item-740"
                                            className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-740"
                                        >
                                            <a
                                                itemProp="url"
                                                href="https://www.facebook.com/"
                                                className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fi-facebook"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span className="visually-hidden">
                                                        Facebook
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-741"
                                            className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-741"
                                        >
                                            <a
                                                itemProp="url"
                                                href="https://twitter.com/account/access"
                                                className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fi-twitter"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span className="visually-hidden">
                                                        Twitter
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-742"
                                            className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-742"
                                        >
                                            <a
                                                itemProp="url"
                                                href="https://www.instagram.com/"
                                                className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fi-instagram"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span className="visually-hidden">
                                                        Instagram
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-743"
                                            className="menu-item menu-item-type-custom menu-item-object-custom mb-0 menu-item-743"
                                        >
                                            <a
                                                itemProp="url"
                                                href="https://www.linkedin.com/"
                                                className="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2"
                                            >
                                                <span itemProp="name">
                                                    <i
                                                        className="fi-linkedin"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span className="visually-hidden">
                                                        LinkedIn
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a className="btn-scroll-top" href="#top" data-scroll="">
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
                    Top{" "}
                </span>
                <i className="btn-scroll-top-icon fi-chevron-up"></i>
            </a>

            <div
                className="modal fade"
                id="user_login_modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto"
                    style={{maxWidth: "950px"}}
                >
                    <div className="modal-content">
                        <div className="modal-body px-0 py-2 py-sm-0">
                            <button
                                className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                                type="button"
                                data-bs-dismiss="modal"
                            ></button>
                            <div className="row mx-0 align-items-center">
                                <div className="col-md-6 border-end-md p-4 p-sm-5">
                                    <h2 className="h3 mb-4 mb-sm-5">
                                        Hey there!
                                        <br />
                                        Welcome back.{" "}
                                    </h2>
                                    <div className="mt-4 mt-sm-5">
                                        Don&#039;t have an account?
                                        <a
                                            className="signup-link"
                                            href="#user_signup_modal"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Sign up here
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <div className="finder-hp-singin-popup-form">
                                        <form
                                            id="loginForm"
                                            data-model="user"
                                            action="#"
                                            onSubmit="return login(false);"
                                            method="POST"
                                            data-component="form"
                                            className="hp-form hp-form--user-login"
                                        >
                                            <div
                                                id="signin-form-messages"
                                                className="hp-form__messages hp-form__messages--error"
                                                data-component="messages"
                                            ></div>
                                            <div className="hp-form__fields">
                                                <div className="hp-form__field hp-form__field--text">
                                                    <label className="hp-field__label hp-form__label">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value=""
                                                        autoComplete="username"
                                                        className="mb-4 hp-field hp-field--text"
                                                        placeholder="Enter your email"
                                                        maxLength="254"
                                                        required="required"
                                                    />
                                                </div>
                                                <div className="hp-form__field hp-form__field--password">
                                                    <label className="hp-field__label hp-form__label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        autoComplete="current-password"
                                                        placeholder="Enter password"
                                                        maxLength="64"
                                                        required="required"
                                                        className="hp-field hp-field--password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hp-form__footer">
                                                <button
                                                    type="submit"
                                                    id="signin-submit-btn"
                                                    className="hp-form__button button-primary alt btn btn-primary btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <a
                                            href="#user_password_request_modal"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                            className="hp-form_action hp-form_action--user-password-request fs-sm"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    

                                    <div className="h2_divider border-bottom border-muted">
                                        <span>or</span>
                                    </div>

                                    <button
                                        type="submit"
                                        id="signin-submit-bn"
                                        style={{backgroundColor: "#3b5998", borderColor: "#3b5998"}}
                                        className="hp-form__button alt btn btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                    >
                                        <span className="elementor-button-content-wrapper" />
                                        <span className="elementor-button-icon elementor-align-icon-left">
                                            <i
                                                aria-hidden="true"
                                                className="fi fi-facebook"
                                            ></i>
                                        </span>
                                        <span className="elementor-button-text">
                                            Continue with Facebook
                                        </span>
                                    </button>

                                    <button
                                        type="submit"
                                        id="signin-submit-bn"
                                        style={{backgroundColor: "red", borderColor: "red"}}
                                        className="hp-form__button alt btn btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                    >
                                        <span className="elementor-button-content-wrapper" />
                                        <span className="elementor-button-icon elementor-align-icon-left">
                                            <i
                                                aria-hidden="true"
                                                className="fi fi-google"
                                            ></i>
                                        </span>
                                        <span className="elementor-button-text">
                                            Continue with Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="user_signup_modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto"
                    style={{maxWidth: "950px"}}
                >
                    <div className="modal-content">
                        <div className="modal-body px-0 py-2 py-sm-0">
                            <button
                                className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                                type="button"
                                data-bs-dismiss="modal"
                            ></button>
                            <div className="row mx-0 align-items-center">
                                <div className="col-md-6 border-end-md p-4 p-sm-5">
                                    <h2 className="finder-signup-title h3 mb-4 mb-sm-5">
                                        Register for free.
                                        <br />
                                        Get premium benefits:
                                    </h2>
                                    <ul className="list-unstyled mb-4 mb-sm-5">
                                        <li className="d-flex mb-2">
                                            <i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="list-text">
                                                Access to institutions official
                                                portal
                                            </span>
                                        </li>
                                        <li className="d-flex mb-2">
                                            <i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="list-text">
                                                Easily manage your wishlist
                                            </span>
                                        </li>
                                        <li className="d-flex mb-0">
                                            <i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="list-text">
                                                Receive tailored recommendations
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="mt-sm-4 pt-md-3">
                                        Already have an account?{" "}
                                        <a
                                            href="#user_login_modal"
                                            className="signin-link"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Sign in
                                        </a>{" "}
                                    </div>
                                </div>
                                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <div className="finder-hp-singup-popup-form mb-4">
                                        <form
                                            id="signupForm"
                                            data-model="user"
                                            action="#"
                                            onSubmit="return signup();"
                                            method="POST"
                                            data-component="form"
                                            className="hp-form hp-form--user-register"
                                        >
                                            <div
                                                id="signup-form-messages"
                                                className="hp-form__messages hp-form__messages--error"
                                                data-component="messages"
                                            ></div>
                                            <div className="hp-form__fields">
                                                <div className="hp-form__field hp-form__field--text">
                                                    <label className="hp-field__label hp-form__label">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        value=""
                                                        className="mb-4 hp-field hp-field--text"
                                                        placeholder="Enter your first name"
                                                        maxLength="60"
                                                        required="required"
                                                    />
                                                </div>
                                                <div className="hp-form__field hp-form__field--text">
                                                    <label className="hp-field__label hp-form__label">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value=""
                                                        className="mb-4 hp-field hp-field--text"
                                                        placeholder="Enter your last name"
                                                        maxLength="60"
                                                        required="required"
                                                    />
                                                </div>
                                                <div className="hp-form__field hp-form__field--email">
                                                    <label className="hp-field__label hp-form__label">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value=""
                                                        autoComplete="email"
                                                        placeholder="Enter your email"
                                                        maxLength="254"
                                                        required="required"
                                                        className="hp-field hp-field--email"
                                                    />
                                                </div>
                                                <div className="hp-form__field hp-form__field--password">
                                                    <label className="hp-field__label hp-form__label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        autoComplete="new-password"
                                                        placeholder="Enter your password"
                                                        maxLength="64"
                                                        required="required"
                                                        className="hp-field hp-field--password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hp-form__footer">
                                                <button
                                                    id="signup-submit-btn"
                                                    type="submit"
                                                    className="hp-form__button button-primary alt btn btn-primary btn-lg w-100 mt-2 button hp-field hp-field--submit"
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    

                                    <div className="h2_divider border-bottom border-muted">
                                        <span>or</span>
                                    </div>

                                    <button
                                        type="submit"
                                        id="signin-submit-bn"
                                        style={{backgroundColor: "#3b5998", borderColor: "#3b5998"}}
                                        className="hp-form__button alt btn btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon elementor-align-icon-left" />
                                            <i
                                                aria-hidden="true"
                                                className="fi fi-facebook"
                                            ></i>
                                        </span>
                                        <span className="elementor-button-text">
                                            Sign up with Facebook
                                        </span>
                                    </button>

                                    <button
                                        type="submit"
                                        id="signin-submit-bn"
                                        style={{backgroundColor: "red", borderColor: "red"}}
                                        className="hp-form__button alt btn btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon elementor-align-icon-left" />
                                            <i
                                                aria-hidden="true"
                                                className="fi fi-google"
                                            ></i>
                                        </span>
                                        <span className="elementor-button-text">
                                            Sign up with Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="user_password_request_modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md modal-dialog-centered p-2 my-0 mx-auto">
                    <div className="modal-content">
                        <div className="modal-body px-0 py-2 py-sm-0">
                            <button
                                className="btn-close position-absolute top-0 end-0 mt-3 me-3"
                                type="button"
                                data-bs-dismiss="modal"
                            ></button>
                            <div className="row mx-0 align-items-center">
                                <div className="col-12 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <h3 className="h3 mb-2">Reset Password </h3>
                                    <p className="mb-4">
                                        Enter your email to reset your password.
                                    </p>
                                    <div className="finder-hp-password-popup-form">
                                        <form
                                            action="#"
                                            data-action="http://finder-city-guide.localhost/wp-json/hivepress/v1/users/request-password/"
                                            method="POST"
                                            data-component="form"
                                            className="hp-form hp-form--user-password-request"
                                        >
                                            <div className="hp-form__header">
                                                Please enter your username or
                                                email address, you will receive
                                                a link to create a new password
                                                via email.
                                                <div
                                                    className="hp-form__messages"
                                                    data-component="messages"
                                                ></div>
                                            </div>
                                            <div className="hp-form__fields">
                                                <div className="hp-form__field hp-form__field--text">
                                                    <label className="hp-field__label hp-form__label">
                                                        Username or Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="username_or_email"
                                                        value=""
                                                        autoComplete="username"
                                                        placeholder="Enter your email"
                                                        maxLength="254"
                                                        required="required"
                                                        className="hp-field hp-field--text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hp-form__footer">
                                                <button
                                                    type="submit"
                                                    className="hp-form__button button-primary alt btn btn-primary btn-lg w-100 mt-2 mb-2 button hp-field hp-field--submit"
                                                >
                                                    Reset Password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <a
                                        href="#user_login_modal"
                                        className="signin-link"
                                        data-bs-toggle="modal"
                                        data-bs-dismiss="modal"
                                    >
                                        Return to Sign in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
