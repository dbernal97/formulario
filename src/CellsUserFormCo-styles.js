/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 5px;
}
.main-container .form-section #num-screen {
  color: #666666;
  font-style: italic;
}
.main-container .form-section .form-number {
  margin: 15px 0;
}
.main-container .form-section #form-btn {
  margin: 20px;
}
.main-container .summary-section {
  background-color: #F4F4F4;
  padding: 4px;
}
.main-container .summary-section #number-value {
  color: #121212;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
}
.main-container .summary-section .summary-title {
  color: #121212;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
}
.main-container .summary-section #divider {
  margin: 20px 0;
}
.main-container .summary-section .info-text {
  color: #666666;
  font-size: 12px;
}
.main-container .summary-section .values-table {
  margin-top: 10px;
  width: 100%;
}
.main-container .summary-section .values-table tr td {
  text-align: right;
}
.main-container .summary-section .values-table tr td:first-child {
  text-align: left;
}

@media screen and (min-width: 800px) {
  .main-container {
    display: flex;
    width: 100%;
    padding: 0px 100px;
  }
  .main-container .form-section {
    width: 52%;
  }
  .main-container .summary-section {
    margin-top: 70px;
    width: 350px;
    margin-left: 80px;
    height: 250px;
  }
}
`;