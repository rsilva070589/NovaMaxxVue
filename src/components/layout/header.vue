<template>

    <div style="margin-left: 97%; height: 10px;" 
    
    >
    <router-link class="button is-light" to="/">  
        <svg fill="green" height="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><g><path d="M37.95,4.66C45.19,1.66,53.13,0,61.44,0c16.96,0,32.33,6.88,43.44,18c5.66,5.66,10.22,12.43,13.34,19.95 c3,7.24,4.66,15.18,4.66,23.49c0,16.96-6.88,32.33-18,43.44c-5.66,5.66-12.43,10.22-19.95,13.34c-7.24,3-15.18,4.66-23.49,4.66 c-8.31,0-16.25-1.66-23.49-4.66c-7.53-3.12-14.29-7.68-19.95-13.34C12.34,99.22,7.77,92.46,4.66,84.93C1.66,77.69,0,69.75,0,61.44 c0-8.31,1.66-16.25,4.66-23.49C7.77,30.42,12.34,23.66,18,18C23.65,12.34,30.42,7.77,37.95,4.66L37.95,4.66z M50,47.13 c-2.48-2.52-2.45-6.58,0.08-9.05c2.52-2.48,6.58-2.45,9.05,0.08L77.8,57.13c2.45,2.5,2.45,6.49,0,8.98L59.49,84.72 c-2.48,2.52-6.53,2.55-9.05,0.08c-2.52-2.48-2.55-6.53-0.08-9.05l13.9-14.13L50,47.13L50,47.13z M42.86,16.55 c-5.93,2.46-11.28,6.07-15.76,10.55c-4.48,4.48-8.09,9.83-10.55,15.76c-2.37,5.71-3.67,11.99-3.67,18.58 c0,6.59,1.31,12.86,3.67,18.58c2.46,5.93,6.07,11.28,10.55,15.76c4.48,4.48,9.83,8.09,15.76,10.55c5.72,2.37,11.99,3.67,18.58,3.67 c6.59,0,12.86-1.31,18.58-3.67c5.93-2.46,11.28-6.07,15.76-10.55c4.48-4.48,8.09-9.82,10.55-15.76c2.37-5.71,3.67-11.99,3.67-18.58 c0-6.59-1.31-12.86-3.67-18.58c-2.46-5.93-6.07-11.28-10.55-15.76c-4.48-4.48-9.83-8.09-15.76-10.55 c-5.71-2.37-11.99-3.67-18.58-3.67S48.58,14.19,42.86,16.55L42.86,16.55z"/></g></svg>
      </router-link > 
    </div>

    <div > 
        <!--  BEGIN TOPBAR  -->
        <div class="topbar-nav header navbar" role="banner">
            <nav class="topbar">
                <ul class="list-unstyled menu-categories" id="topAccordion">
                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle autodroprown">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-home"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>{{ $t('dashboard') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li>
                                <router-link to="/"> {{ $t('sales') }} </router-link>
                            </li>
                            <li>
                                <router-link to="/index2">{{ $t('analytics') }}</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-cpu"
                                >
                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                    <rect x="9" y="9" width="6" height="6"></rect>
                                    <line x1="9" y1="1" x2="9" y2="4"></line>
                                    <line x1="15" y1="1" x2="15" y2="4"></line>
                                    <line x1="9" y1="20" x2="9" y2="23"></line>
                                    <line x1="15" y1="20" x2="15" y2="23"></line>
                                    <line x1="20" y1="9" x2="23" y2="9"></line>
                                    <line x1="20" y1="14" x2="23" y2="14"></line>
                                    <line x1="1" y1="9" x2="4" y2="9"></line>
                                    <line x1="1" y1="14" x2="4" y2="14"></line>
                                </svg>
                                <span>{{ $t('apps') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/apps/chat">Chat</router-link></li>
                            <li><router-link to="/apps/mailbox">Mailbox</router-link></li>
                            <li><router-link to="/apps/todo-list">Todo List</router-link></li>
                            <li><router-link to="/apps/notes">Notes</router-link></li>
                            <li><router-link to="/apps/scrumboard">Scrumboard</router-link></li>
                            <li><router-link to="/apps/contacts">Contacts</router-link></li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;">
                                    Invoice
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><router-link to="/apps/invoice/list">List</router-link></li>
                                    <li><router-link to="/apps/invoice/preview">Preview</router-link></li>
                                    <li><router-link to="/apps/invoice/add">Add</router-link></li>
                                    <li><router-link to="/apps/invoice/edit">Edit</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/apps/calendar">Calendar</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-box"
                                >
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                                <span>{{ $t('components') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/components/tabs">Tabs</router-link></li>
                            <li><router-link to="/components/accordions">Accordions</router-link></li>
                            <li><router-link to="/components/modals">Modals</router-link></li>
                            <li><router-link to="/components/cards">Cards</router-link></li>
                            <li><router-link to="/components/carousel">Carousel</router-link></li>
                            <li><router-link to="/components/countdown">Countdown</router-link></li>
                            <li><router-link to="/components/counter">Counter</router-link></li>
                            <li><router-link to="/components/sweetalert">Sweet Alerts</router-link></li>
                            <li><router-link to="/components/timeline">Timeline</router-link></li>
                            <li><router-link to="/components/notifications">Notifications</router-link></li>
                            <li><router-link to="/components/media-object">Media Object</router-link></li>
                            <li><router-link to="/components/list-group">List Group</router-link></li>
                            <li><router-link to="/components/pricing-table">Pricing Tables</router-link></li>
                            <li><router-link to="/components/lightbox"> Lightbox </router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-zap"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                                <span>{{ $t('ui_kit') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/elements/alerts">Alerts</router-link></li>
                            <li><router-link to="/elements/avatar">Avatar</router-link></li>
                            <li><router-link to="/elements/badges">Badges</router-link></li>
                            <li><router-link to="/elements/breadcrumbs">Breadcrumbs</router-link></li>
                            <li><router-link to="/elements/buttons">Buttons</router-link></li>
                            <li><router-link to="/elements/buttons-group">Button Groups</router-link></li>
                            <li><router-link to="/elements/color-library">Color Library</router-link></li>
                            <li><router-link to="/elements/dropdown">Dropdown</router-link></li>
                            <li><router-link to="/elements/infobox">Infobox</router-link></li>
                            <li><router-link to="/elements/jumbotron">Jumbotron</router-link></li>
                            <li><router-link to="/elements/loader">Loader</router-link></li>
                            <li><router-link to="/elements/pagination">Pagination</router-link></li>
                            <li><router-link to="/elements/popovers">Popovers</router-link></li>
                            <li><router-link to="/elements/progress-bar">Progress Bar</router-link></li>
                            <li><router-link to="/elements/search">Search</router-link></li>
                            <li><router-link to="/elements/tooltips">Tooltips</router-link></li>
                            <li><router-link to="/elements/treeview">Treeview</router-link></li>
                            <li><router-link to="/elements/typography">Typography</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-layout"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                                <span>{{ $t('tables') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/tables/basic">Basic</router-link></li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    DataTables
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><router-link to="/tables/basic">Basic</router-link></li>
                                    <li><router-link to="/tables/striped">Striped Table</router-link></li>
                                    <li><router-link to="/tables/order-sorting">Order Sorting</router-link></li>
                                    <li><router-link to="/tables/multi-column">Multi Column</router-link></li>
                                    <li><router-link to="/tables/multiple-tables">Multiple Tables</router-link></li>
                                    <li><router-link to="/tables/alt-pagination">Alt. Pagination</router-link></li>
                                    <li><router-link to="/tables/custom">Custom</router-link></li>
                                    <li><router-link to="/tables/range-search">Range Search</router-link></li>
                                    <li><router-link to="/tables/export">Export</router-link></li>
                                    <li><router-link to="/tables/live-dom-ordering">Live DOM ordering</router-link></li>
                                    <li><router-link to="/tables/miscellaneous">Miscellaneous</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-clipboard"
                                >
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                </svg>
                                <span>{{ $t('forms') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/forms/basic">Basic</router-link></li>
                            <li><router-link to="/forms/input-group">Input Group</router-link></li>
                            <li><router-link to="/forms/layouts">Layouts</router-link></li>
                            <li><router-link to="/forms/validation">Validation</router-link></li>
                            <li><router-link to="/forms/input-mask">Input Mask</router-link></li>
                            <li><router-link to="/forms/select2">Select2</router-link></li>
                            <li><router-link to="/forms/touchspin">TouchSpin</router-link></li>
                            <li><router-link to="/forms/checkbox-radio">Checkbox &amp; Radio</router-link></li>
                            <li><router-link to="/forms/switches">Switches</router-link></li>
                            <li><router-link to="/forms/wizards">Wizards</router-link></li>
                            <li><router-link to="/forms/file-upload">File Upload</router-link></li>
                            <li><router-link to="/forms/quill-editor">Quill Editor</router-link></li>
                            <li><router-link to="/forms/markdown-editor">Markdown Editor</router-link></li>
                            <li><router-link to="/forms/date-picker">Date &amp; Range Picker </router-link></li>
                            <li><router-link to="/forms/clipboard">Clipboard</router-link></li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-file"
                                >
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                    <polyline points="13 2 13 9 20 9"></polyline>
                                </svg>
                                <span>{{ $t('pages') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/pages/helpdesk">Helpdesk</router-link></li>
                            <li><router-link to="/pages/contact-us">Contact Form</router-link></li>
                            <li><router-link to="/pages/faq">FAQ</router-link></li>
                            <li><router-link to="/pages/faq2">FAQ 2</router-link></li>
                            <li><router-link to="/pages/privacy-policy">Privacy Policy</router-link></li>
                            <li><a target="_blank" href="/pages/coming-soon">Coming Soon</a></li>
                            <li><router-link to="/pages/blank-page">Blank Page</router-link></li>
                            <li><router-link to="/pages/sample">Sample Page</router-link></li>

                            <li><router-link to="/users/profile">Profile</router-link></li>
                            <li><router-link to="/users/account-setting">Account Settings</router-link></li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Error
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/pages/error404">404</a></li>
                                    <li><a target="_blank" href="/pages/error500">500</a></li>
                                    <li><a target="_blank" href="/pages/error503">503</a></li>
                                    <li><a target="_blank" href="/pages/maintenence">Maintanence</a></li>
                                </ul>
                            </li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Login
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/login">Login Cover</a></li>
                                    <li><a target="_blank" href="/auth/login-boxed">Login Boxed</a></li>
                                </ul>
                            </li>
                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Register
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/register">Register Cover</a></li>
                                    <li><a target="_blank" href="/auth/register-boxed">Register Boxed</a></li>
                                </ul>
                            </li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Password Recovery
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/pass-recovery">Recover ID Cover</a></li>
                                    <li><a target="_blank" href="/auth/pass-recovery-boxed">Recover ID Boxed</a></li>
                                </ul>
                            </li>

                            <li class="sub-sub-submenu-list">
                                <a href="javascript:;" class="dropdown-toggle">
                                    Lockscreen
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-chevron-right"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                                <ul class="collapse list-unstyled sub-submenu">
                                    <li><a target="_blank" href="/auth/lockscreen">Unlock Cover</a></li>
                                    <li><a target="_blank" href="/auth/lockscreen-boxed">Unlock Boxed</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="menu single-menu">
                        <a href="javascript:;" class="dropdown-toggle">
                            <div class="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-plus-circle"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                                <span>{{ $t('more') }}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="collapse submenu list-unstyled">
                            <li><router-link to="/dragndrop">Drag and Drop</router-link></li>
                            <li><router-link to="/widgets">Widgets</router-link></li>
                            <li><router-link to="/charts/apex-chart">Charts</router-link></li>
                            <li><router-link to="/font-icons">Font Icons</router-link></li>
                            <li>
                                <a target="_blank" href="https://cork-vue.sbthemes.com"> Documentation </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <!--  END TOPBAR  -->
   
    </div>
</template>

<script setup >
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useStore } from 'vuex';
    import { getAuth,  signOut } from "@firebase/auth";  
    import { useUserStore } from '../../store/user'


    const storeUser     = useUserStore();
    const store         = useStore();
    const selectedLang  = ref(null);
    const countryList   = ref(store.state.countryList);

    const i18n = useI18n();

    onMounted(() => {
        selectedLang.value = window.$appSetting.toggleLanguage();
        toggleMode();
    });

    const toggleMode = (mode) => {
        window.$appSetting.toggleMode(mode);
    };

   
    const handleSignOut = () => {
    signOut(getAuth()).then(() => {
      console.log('deslogado')
      console.log(storeUser.user.photoUrlOri)
    })
    }   

    function goVendas () {
        console.log('ir para vendas')
    }

    
</script>
